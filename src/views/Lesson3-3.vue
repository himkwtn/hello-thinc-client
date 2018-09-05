<template>
<div>
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
</div>
</template>

<script>
export default {
  name: "Chapter-3-2",
  data() {
    return {
      subjects: [{ subject: "" }]
    };
  },
  methods: {
    update() {
      const subjectsArr = this.subjects
        .filter(subject => subject)
        .map(subject => subject.subject);
      console.log(subjectsArr);
    },
    add() {
      this.subjects.push({ subject: "" });
    },
    del() {
      this.subjects.pop();
    }
  }
};
</script>
