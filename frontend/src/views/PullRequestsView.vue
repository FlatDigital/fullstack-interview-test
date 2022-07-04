<template>
  <v-card class="main">
    <v-tabs>
      <v-tab>
        Open
      </v-tab>
      <v-tab>
        Closed
      </v-tab>
      <v-tab-item>
        <v-card class="prs-card">
          <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search Open Pull Request"
                color="#ff5a5a"
                single-line
                hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
              :headers="headers"
              :items="openPullRequests"
              :search="search"
              class="prs-table"
              @click:row="handleClick"
              hide-default-footer
              no-data-text="No open pull requests"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="prs-card">
          <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search Closed Pull Request"
                color="#ff5a5a"
                single-line
                hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
              :headers="headers"
              :items="closedPullRequests"
              :search="search"
              class="prs-table"
              @click:row="handleClick"
              hide-default-footer
              no-data-text="No closed pull requests"
          ></v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <v-overlay v-model="showModal">
      <PullRequestDetailsModal :pull_request_number="selectedPR" v-on:showModal="getMessageFromChild"></PullRequestDetailsModal>
    </v-overlay>
  </v-card>
</template>

<script>
import {get_open_pull_requests} from "@/helpers/Services";
import {get_closed_pull_requests} from "@/helpers/Services";
import PullRequestDetailsModal from "@/components/PullRequestDetailsModal";
export default {
  name: "PullRequestsView.vue",
  mounted() {
    this.getOpenPullRequests()
    this.getClosedPullRequests()
  },
  components: {
    PullRequestDetailsModal
  },
  data () {
    return {
      search: '',
      headers: [
        {text: 'Title', value: 'title'},
        { text: 'Author', value: 'author'},
        { text: 'PR number',  value: 'number' },
        { text: 'Date', value: 'date'},
        { text: 'Status', value: 'status'}
      ],
      openPullRequests: [],
      closedPullRequests: [],
      showModal: false,
      selectedPR: 0
    }
  },
  methods:{
    async getOpenPullRequests(){
      this.openPullRequests = await get_open_pull_requests()
    },
    async getClosedPullRequests(){
      this.closedPullRequests = await get_closed_pull_requests()
    },
    handleClick(e) {
      this.selectedPR = e.number
      this.showModal = true
    },
    getMessageFromChild( message ) {
      this.showModal = message
    }
  },
}
</script>

<style scoped>
  .prs-card{
    margin: 5% 10% 10% 10%;
  }
  .prs-table{
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
