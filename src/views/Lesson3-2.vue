<template>
<div>
  <md-field>
    <label>Name</label>
    <md-input v-model="name"></md-input>
  </md-field>
  <md-button class="md-raised" @click="search">Search</md-button>
  <md-card v-if="student">
      <md-card-content>
        {{student}}
      </md-card-content>
      <md-card-actions>
        <md-button class="md-icon-button md-raised" @click="close" >
          <md-icon >close</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
</div>
</template>

<script>
import { Api } from "@/common/api.service";
export default {
  name: "Chapter-3-2",
  data() {
    return {
      name: "",
      student: ""
    };
  },
  methods: {
    search: async function() {
      const { name } = this;
      const { data } = await Api.findStudent(name);
      this.student = data;
    },
    close() {
      this.student = "";
    }
  }
};
</script>
