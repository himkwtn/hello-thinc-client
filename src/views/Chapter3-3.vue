<template>
<div>
  <label>Subect</label>
  <md-field :key=subject.id v-for="subject in subjects">
    <md-input v-model="subject.subject"></md-input>
  </md-field>
  <md-button class="md-icon-button md-raised" @click="add" >
    <md-icon >add</md-icon>
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
      console.log(this.subjects);
    },
    add() {
      console.log(this.subjects);
      this.subjects.push({ subject: "" });
    }
  }
};
</script>
