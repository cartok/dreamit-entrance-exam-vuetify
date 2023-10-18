<template>
  <Box :active="data.isSelected" @change="updateStore">
    {{ data.value }}
  </Box>
</template>

<script setup lang="ts">
import Box from '@/components/Eurojackpot/Box.vue'
import { EurojackpotNumberType, EurojackpotNumberTypes, useEurojackpotStore } from '@/store/eurojackpot'

const props = defineProps<{
  data: EurojackpotNumberType,
  numberTypeKey: EurojackpotNumberTypes,
  ticketIndex: number,
}>()

function updateStore(isSelected: boolean) {
  const store = useEurojackpotStore()
  store.setNumber(props.ticketIndex, props.numberTypeKey, {
    ...props.data,
    isSelected,
  })
}
</script>
