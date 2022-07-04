<template>
  <v-card light color="#BDD6D0">
    <v-card-title>
      {{commit.author}}
      <v-spacer></v-spacer>
      <v-btn color="#fda855" fab x-small @click=closeModal>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>{{commit.author_email}}</v-card-subtitle>
    <v-card-text class="white text--primary">
      <p>{{commit.message}}</p>
      <p>{{commit.date}}</p>
      <p>Additions: {{commit.additions}}</p>
      <p>Deletions: {{commit.deletions}}</p>
      <p>Changed files: {{commit.number_of_changed_files}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import {get_commit} from "@/helpers/Services";
export default {
  name: "CommitDetailsModal.vue",
  mounted() {
    this.getCommit()
  },
  props: ["commit_sha"],
  data () {
    return {
      commit: {}
    }
  },
  methods:{
    async getCommit(){
      this.commit = await get_commit(this.commit_sha)
    },
    closeModal(){
      this.$emit("showModal",false)
    }
  },
}
</script>

<style scoped>

</style>
