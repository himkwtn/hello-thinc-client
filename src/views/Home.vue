<template>
  <div class="home">
    <md-button class="md-raised" @click="hello">Click Me</md-button>
  </div>
</template>

<script>
import { Api } from "@/common/api.service";
export default {
  name: "home",
  methods: {
    hello: async function() {
      console.log(await Api.hello());
    }
  }
};
</script>
