<template>
<div>
  <md-field>
      <label>Input Name</label>
      <md-input v-model="name"></md-input>
  </md-field>
  <md-button class="md-raised" @click="hello">Click Me</md-button>
</div>
</template>

<script>
export default {
  name: "Chapter-2",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    hello() {
      console.log(this.name);
    }
  }
};
</script>
