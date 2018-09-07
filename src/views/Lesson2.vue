<template>
<div>
  <md-field>
    <label>Get Request</label>
    <md-input v-model="query"></md-input>
  </md-field>
  <md-button class="md-raised" @click="get">GET Request</md-button>
  <md-card v-if="getData">
      <md-card-content>
        {{getData}}
      </md-card-content>
      <md-card-actions>
        <md-button class="md-icon-button md-raised" @click="closeGet" >
          <md-icon >close</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <md-field>
        <label>Get Request</label>
        <md-input v-model="query"></md-input>
    </md-field>
    <md-button class="md-raised" @click="get">GET Request</md-button>
    <md-card v-if="postData">
        <md-card-content>
          {{postData}}
        </md-card-content>
        <md-card-actions>
          <md-button class="md-icon-button md-raised" @click="closePost" >
            <md-icon >close</md-icon>
          </md-button>
        </md-card-actions>
      </md-card>
</div>
</template>

<script>
import { Api } from "@/common/api.service";
export default {
  name: "Chapter-2",
  data() {
    return {
      query: "",
      body: "",
      getData: "",
      postData: ""
    };
  },
  methods: {
    get: async function() {
      const { data } = await Api.getRequest(this.query);
      this.getData = data;
    },
    post: async function() {
      const { data } = await Api.postRequest(this.body);
      this.postData = data;
    },
    closeGet: function() {
      this.getData = "";
    },
    closePost: function() {
      this.postData = "";
    }
  }
};
</script>
