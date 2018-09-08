<template>
<div>
  <md-field>
    <label>ID</label>
    <md-input v-model="id"></md-input>
  </md-field>
  <span class="md-title">Subjects</span>
  <md-field :key=subject.id v-for="subject in subjects">
    <label>Subect name</label>
    <md-input v-model="subject.subject"></md-input>
  </md-field>
  <md-button class="md-icon-button md-raised" @click="add" >
    <md-icon >add</md-icon>
  </md-button>
  <md-button class="md-icon-button md-raised" @click="del" v-if="subjects.length > 1" >
    <md-icon >delete</md-icon>
  </md-button>
  <md-button class="md-raised" @click="update">Update</md-button>
  <md-chip>/api/students/update/{{id||":id"}}</md-chip>

  <md-card v-if="updatedStudent">
      <md-card-content>
        {{updatedStudent}}
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
      subjects: [{ subject: "" }],
      updatedStudent: "",
      id: ""
    };
  },
  methods: {
    update: async function() {
      const subjectsArr = this.subjects
        .filter(subject => subject)
        .map(subject => subject.subject);
      const toUpdate = {
        subjects: subjectsArr
      };
      const { data } = await Api.updateStudent(this.id, toUpdate);
      this.updatedStudent = data;
    },
    add() {
      this.subjects.push({ subject: "" });
    },
    del() {
      this.subjects.pop();
    },
    close() {
      this.updatedStudent = "";
    }
  }
};
</script>
