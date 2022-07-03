<template>
  <div>
    <v-app-bar dense>
      <v-toolbar-items>
        <v-btn to="/branches">
          Branches
        </v-btn>
        <v-btn to="/pull-requests">
          Pull Requests
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBarComponent.vue"
}
</script>

<style scoped>

</style>
