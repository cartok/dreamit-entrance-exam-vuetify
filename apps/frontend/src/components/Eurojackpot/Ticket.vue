<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column">
        <Numbers :data="data.baseNumbers" :ticket-index="index" :number-type-key="EurojackpotNumberTypes.baseNumbers" />
        <Numbers :data="data.extraNumbers" :ticket-index="index" :number-type-key="EurojackpotNumberTypes.extraNumbers" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Numbers from '@/components/Eurojackpot/Numbers.vue'
import { EurojackpotTicketType, EurojackpotNumberTypes } from '@/store/eurojackpot'

defineProps<{
  data: EurojackpotTicketType,
  index: number,
}>()
</script>
