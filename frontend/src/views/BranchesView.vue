<template>
  <div>
    <v-card class="branches-card">
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search Branch"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          disable-sort
          :headers="headers"
          :items="branches"
          :search="search"
          class="branches-table"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BranchesView.vue",
  data () {
    return {
      search: '',
      headers: [
        { text: 'Name', align: 'start', value: 'name'},
        { text: 'Status', filterable: false,  value: 'upToDate' },
      ],
      branches: [
        {
          name: 'master',
          upToDate: ''
        },
        {
          name: 'dev',
          upToDate: ''
        },
        {
          name: 'feat/branches-view',
          upToDate: ''
        },
      ],
    }
  },
}
</script>

<style scoped>
  .branches-card{
    margin: 5% 10% 10% 10%;
  }
  .branches-table{
    text-align: center;
  }
</style>
