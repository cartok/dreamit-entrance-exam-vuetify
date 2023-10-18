<template>
  <div class="box" :class="{ 'cross': active }" @click.left="toggleActive">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{ 'change': [value: boolean] }>()
const props = defineProps<{ active: boolean }>()

// Decoupled state test
const active = ref(props.active)

function toggleActive() {
  active.value = !active.value
  emits('change', active.value)
}
</script>

<style>
.box {
  display: grid;
  justify-items: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  user-select: none;
  cursor: pointer;
}

.cross {
  background-color: red;
}
</style>
