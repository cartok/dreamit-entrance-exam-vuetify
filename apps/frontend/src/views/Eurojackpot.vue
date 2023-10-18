<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <h1>Eurojackpot</h1>

      <v-carousel :continuous="true" :show-arrows="true" hide-delimiter-background height="auto">
        <v-carousel-item v-for="(ticket, i) in eurojackpot.tickets" :key="i">
          <v-sheet tile>
            <div class="d-flex align-center justify-center pa-16 h-auto">
              <Ticket :data="ticket" :index="i" />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import Ticket from '@/components/Eurojackpot/Ticket.vue'
import { useEurojackpotStore } from '@/store/eurojackpot'

const eurojackpot = useEurojackpotStore()
</script>
