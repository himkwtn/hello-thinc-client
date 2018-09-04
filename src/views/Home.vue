<template>
  <div class="home">
    <md-button class="md-raised" @click="hello">Click Me</md-button>
    <md-card v-if="message">
      <md-card-content>
        {{message}}
      </md-card-content>
      <md-card-actions>
        <div @click="close">
          <md-avatar class="md-avatar-icon">
            <md-icon>close</md-icon>
          </md-avatar>
        </div>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import { Api } from "@/common/api.service";
export default {
  name: "home",
  data: () => ({
    message: ""
  }),
  methods: {
    hello: async function() {
      const { data } = await Api.hello();
      this.message = data;
    },
    close: function() {
      this.message = "";
    }
  }
};
</script>

<style scoped>
.md-button {
  min-height: 40px;
}
</style>
