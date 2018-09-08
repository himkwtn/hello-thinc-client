<template>
<div>
  <p class="md-title">GET Request</p>
  <md-field>
    <label>Query</label>
    <md-input v-model="query"></md-input>
  </md-field>
  <md-button class="md-raised" @click="get">GET Request</md-button>
  <md-chip>/api/get{{query}}</md-chip>

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
    <label>Params</label>
    <md-input v-model="params"></md-input>
  </md-field>
  <md-button class="md-raised" @click="getParams">GET Request with Params</md-button>
  <md-chip>/api/params/{{params||":params"}}</md-chip>

  <md-card v-if="paramsData">
    <md-card-content>
      {{paramsData}}
    </md-card-content>
    <md-card-actions>
      <md-button class="md-icon-button md-raised" @click="closeParams" >
        <md-icon >close</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>

  <p class="md-title">POST Request</p>
  <md-field>
    <label>Name</label>
    <md-input v-model="body.name"></md-input>
  </md-field><md-field>
    <label>Age</label>
    <md-input v-model="body.age"></md-input>
  </md-field>
  <md-button class="md-raised" @click="post">POST Request</md-button>
  <md-chip>/api/post</md-chip>
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
      body: {
        name: "",
        age: ""
      },
      params: "",
      getData: "",
      paramsData: "",
      postData: ""
    };
  },
  methods: {
    get: async function() {
      const { data } = await Api.getRequest(this.query);
      this.getData = data;
    },
    getParams: async function() {
      const { data } = await Api.getRequestParams(this.params);
      this.paramsData = data;
    },
    post: async function() {
      const { data } = await Api.postRequest(this.body);
      this.postData = data;
    },
    closeGet() {
      this.getData = "";
    },
    closeParams() {
      this.params = "";
    },
    closePost() {
      this.postData = "";
    }
  }
};
</script>
