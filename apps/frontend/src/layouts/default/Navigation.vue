<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" class="py-5 px-3"
    style="min-width: 80px;">

    <v-list-item nav>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-currency-usd" class="my-2">
        <router-link to="/eurojackpot">Eurojackpot</router-link>
      </v-list-item>
      <v-list-item prepend-icon="mdi-poker-chip" class="my-2">
        <router-link to="/">Poker</router-link>
      </v-list-item>
      <v-list-item prepend-icon="mdi-slot-machine-outline" class="my-2">
        <router-link to="/">Slots</router-link>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(true)
</script>
