<template>
<div>
  <md-field>
    <label>ID</label>
    <md-input v-model="id"></md-input>
  </md-field>
  <md-button class="md-raised" @click="del" >Delete</md-button>
  <md-chip>/api/students/delete{{id?`?id=${id}`:""}}</md-chip>

  <md-card v-if="deletedStudent">
      <md-card-content>
        {{deletedStudent}}
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
      id: "",
      deletedStudent: ""
    };
  },
  methods: {
    del: async function() {
      const { data } = await Api.deleteStudent(this.id);
      this.deletedStudent = data;
    },
    close() {
      this.deletedStudent = "";
    }
  }
};
</script>
