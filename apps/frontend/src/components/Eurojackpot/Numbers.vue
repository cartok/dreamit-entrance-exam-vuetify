<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-wrap justify-center">
        <Number v-for="(no, i) in data" :key="i" :data="no" :number-type-key="numberTypeKey"
          :ticket-index="ticketIndex" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Number from '@/components/Eurojackpot/Number.vue'
// import { EurojackpotNumberType, EurojackpotNumberTypes } from '@/store/eurojackpot'

// TODO: Could not use Typescript here, report bug?
// defineProps<{
//   data: EurojackpotNumberType[],
//   numberTypeKey: EurojackpotNumberTypes,
//   ticketIndex: number,
// }>()

defineProps(['data', 'numberTypeKey', 'ticketIndex'])
</script>
