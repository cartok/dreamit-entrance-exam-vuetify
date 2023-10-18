import { watch } from 'vue'
import { defineStore } from 'pinia'
import { createNumbersArray } from '@/utils'

export const useEurojackpotStore = defineStore('eurojackpot', {
  state: (): Eurojackpot => {
    const state = {
      tickets: [],
    }

    const cachedStateString = localStorage.getItem('eurojackpot')
    if (cachedStateString) {
      return {
        ...state,
        ...JSON.parse(cachedStateString),
      }
    } else {
      return {
        ...state,
        numbersPerField: {
          base: 0,
          extra: 0,
        },
        tipsPerField: {
          base: 0,
          extra: 0,
        },
        jackpot: '0',
        jackpotLastHit: '0',
        discounts: [],
        drawings: [],
      }
    }
  },
  actions: {
    // I should maybe have smaller stores by dividing the requested data
    setNumber(ticketIndex: number, numberType: EurojackpotNumberTypes, no: EurojackpotNumberType) {
      const match = this.tickets[ticketIndex][numberType].find(x => x.value === no.value)
      if (!match) {
        // Could change data type to object instead
        return
      }

      // TODO: This does not trigger an update, hence the `localStorage` does not get updated
      match.isSelected = no.isSelected
    },
  },
})

const store = useEurojackpotStore()

watch(store.$state,
  (state) => {
    localStorage.setItem('eurojackpot', JSON.stringify(state))
  },
  { deep: true },
)

const graphQlUrl = 'http://localhost:8010/proxy/graphql'

/*
  I don't like the split data structure.
  When you apply component thinking into data structre design
  it will be easier to work with the data, I think.

  You could define an array of tickets which have base numbers
  and extra numbers. It would be easy to render and manage state
  I suppose.
*/
type Eurojackpot = {
  tickets: EurojackpotTicketType[],
  numbersPerField: {
    base: number,
    extra: number,
  },
  tipsPerField: {
    base: number,
    extra: number,
  },
  jackpot: string,
  jackpotLastHit: string,
  drawings: {
    deadline: string,
    drawing: string,
    originalDrawing: string,
    drawingShifted: boolean,
    ticketFee: number,
    pricePerField: number,
    additionalOptions: unknown[],
    additionalGames: {
      game: Game,
      price: number,
      fee: number,
    }[],
  }[],
  discounts: {
    percent: number,
    type: string,
  }[],
}

enum Game {
  Gluecksspirale = 'gluecksspirale',
  Spiel77 = 'spiel77',
  Super6 = 'super6'
}

// Additional type to create a data structure which is easy to render UI and update
export type EurojackpotNumberType = {
  value: number,
  isSelected: boolean,
}

export type EurojackpotTicketType = {
  [EurojackpotNumberTypes.baseNumbers]: EurojackpotNumberType[],
  [EurojackpotNumberTypes.extraNumbers]: EurojackpotNumberType[],
}

export enum EurojackpotNumberTypes {
  baseNumbers = 'baseNumbers',
  extraNumbers = 'extraNumbers',
}

const eurojackpotQuery = {
  operationName: 'TicketDefinition',
  variables: {
    type: 'eurojackpot',
  },
  query: `query TicketDefinition($type: String!, $gameCommunityGroup: String, $variant: String) {
    ticketDefinition(
      type: $type
      gameCommunityGroup: $gameCommunityGroup
      variant: $variant
    ) {
      jackpot
      jackpotLastHit
      numbersPerField {
        base
        extra
      }
      tipsPerField {
        base
        extra
      }
      discounts {
        percent
        type
      }
      drawings {
        ...drawing
      }
    }
  }

  fragment drawing on ticketDefinitionDrawing {
    deadline
    drawing
    originalDrawing
    drawingShifted
    ticketFee
    pricePerField
    additionalOptions {
      fee
      game
      price
    }
    additionalGames {
      game
      price
      fee
    }
  }
  `,
}

async function updateStore() {
  try {
    const response = await fetch(graphQlUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eurojackpotQuery),
    })
    const json = await response.json()
    const eurojackpot = json.data.ticketDefinition

    // Temporary solution, should propably come from backend
    if (!localStorage.getItem('eurojackpot')) {
      const tickets: EurojackpotTicketType[] = createNumbersArray(1, 6).map(() => ({
        baseNumbers: createNumbersArray(1, eurojackpot.numbersPerField.base).map(value => ({
          value,
          isSelected: false,
        })),
        extraNumbers: createNumbersArray(1, eurojackpot.numbersPerField.extra).map(value => ({
          value,
          isSelected: false,
        })),
      }))
      eurojackpot.tickets = tickets
    }

    store.$patch(eurojackpot)
    console.info({ eurojackpot: store.$state })
  } catch (error) {
    console.error(error)
  }
}

updateStore()
