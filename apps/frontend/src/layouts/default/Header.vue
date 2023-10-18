<template>
  <v-app-bar class="app-bar">
    <div class="d-flex justify-space-between align-center w-100">
      <router-link to="/" c>
        <h1>Lotey Lotker</h1>
      </router-link>

      <div class="card-icons">
        <v-icon icon="mdi-cards-club" />
        <v-icon icon="mdi-cards-heart" />
        <v-icon icon="mdi-cards-spade" />
        <v-icon icon="mdi-cards-diamond" />
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped>
.app-bar {
  padding: 5px 5%;
}

.card-icons {
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
}
</style>
