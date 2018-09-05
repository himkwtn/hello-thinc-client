<template>
<div>
  <md-field>
    <label>Name</label>
    <md-input v-model="name"></md-input>
  </md-field>
  <md-button class="md-raised" @click="del" >Delete</md-button>
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
    del() {
      console.log(this.name);
    }
  }
};
</script>
