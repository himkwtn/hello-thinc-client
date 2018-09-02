<template>
<div>
  <md-field>
    <label>Name</label>
    <md-input v-model="name"></md-input>
  </md-field>
  <md-button class="md-raised" @click="search">Search</md-button>
</div>
</template>

<script>
export default {
  name: "Chapter-3-2",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    search() {
      const { name } = this;
      console.log(name);
    }
  }
};
</script>
