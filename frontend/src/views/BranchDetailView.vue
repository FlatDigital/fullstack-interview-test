<template>
  <div class="main">
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <h1>
          {{branch.name}}
        </h1>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-subtitle>
        <v-spacer></v-spacer>
        <h3>
          Status: {{branch.status}}
        </h3>
        <v-spacer></v-spacer>
      </v-card-subtitle>
      <v-card-text>
        <v-timeline dark :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
              v-for="commit in commits"
              :key="commit.sha"
              icon="mdi-source-commit"
              color="#29c5e6"
              fill-dot
          >
            <v-card color="#0180ab" dark>
              <v-card-title class="text-h6">
                {{ commit.author }}
              </v-card-title>
              <v-card-text class="white text--primary">
                <p>{{commit.message}}</p>
                <p>{{commit.date}}</p>
                <v-btn
                    color="#fda855"
                    class="mx-0"
                    outlined
                    @click="handleClick(commit.sha)"
                >
                  View commit
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
    <v-overlay v-model="showModal">
      <CommitDetailsModal :commit_sha="selectedCommit" v-on:showModal="getMessageFromChild"></CommitDetailsModal>
    </v-overlay>
  </div>
</template>

<script>
import {get_branch} from "@/helpers/Services";
import {get_commits} from "@/helpers/Services";
import CommitDetailsModal from "@/components/CommitDetailsModal";
export default {
  name: "BranchDetailView.vue",
  mounted() {
    this.getBranch()
    this.getCommits()
  },
  components: {
    CommitDetailsModal
  },
  data () {
    return {
      branch: {},
      commits: [],
      selectedCommit: '',
      showModal: false
    }
  },
  methods: {
    async getBranch() {
      this.branch = await get_branch(this.$route.query.name)
    },
    async getCommits() {
      this.commits = await get_commits(this.$route.query.name)
    },
    handleClick( commit_sha ) {
      this.selectedCommit = commit_sha
      this.showModal = true
    },
    getMessageFromChild( message ) {
      this.showModal = message
    }
  }
}
</script>

<style scoped>
.main{
  background-color: #f5f7ff;
  position:absolute;
  top:50px;
  right:0px;
  bottom:0px;
  left:0px;
}
</style>
