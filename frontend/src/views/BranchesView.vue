<template>
  <div class="main">
    <v-card class="branches-card">
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search Branch"
            color="#ff5a5a"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="branches"
          :search="search"
          class="branches-table"
          @click:row="handleClick"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import {get_branches} from "@/helpers/Services";
export default {
  name: "BranchesView.vue",
  mounted() {
    this.getBranches()
  },
  data () {
    return {
      search: '',
      headers: [
        { text: 'Name', align: 'start', value: 'name'},
        { text: 'Status',  value: 'status' },
        { text: 'Last updated', value: 'date'}
      ],
      branches: [],
    }
  },
  methods:{
    async getBranches(){
      this.branches = await get_branches()
      console.log(this.branches)
    },
    handleClick(e) {
      this.$router.replace('/branch/?name=' + e.name);
      this.$emit('childToParent', e.name)
    }
  }
}
</script>

<style scoped>
  .branches-card{
    margin: 5% 10% 10% 10%;
  }
  .branches-table{
    text-align: center;
  }
  .main{
    background-color: #f5f7ff;
    position:absolute;
    top:50px;
    right:0px;
    bottom:0px;
    left:0px;
  }
</style>
