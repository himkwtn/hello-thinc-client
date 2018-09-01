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
    hello: () => {
      console.log(Api.hello());
    }
  }
};
</script>
