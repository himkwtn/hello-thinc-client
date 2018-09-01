<template>
  <mdc-layout-app>
    <mdc-top-app-bar v-bind:title="this.$route.name" event="nav" slot="toolbar">
      <mdc-top-app-bar-action icon="power_settings_new" v-if="loggedIn" @click="logout"></mdc-top-app-bar-action>
    </mdc-top-app-bar>
    <mdc-drawer slot="drawer" toggle-on="nav">
        <mdc-drawer-list>
          <mdc-drawer-item to="/" start-icon="home">Home</mdc-drawer-item>
          <mdc-drawer-item to="/login" start-icon="supervised_user_circle">Admin</mdc-drawer-item>
        </mdc-drawer-list>
    </mdc-drawer>
    <main class="main">
      <router-view :loggedIn="loggedIn"/>
    </main>
  </mdc-layout-app>
</template>

<script>
import 'vue-mdc-adapter/dist/vue-mdc-adapter.css';
import { EventBus } from './event-bus'
import { ProductService } from '@/common/api.service';
export default {
  name: 'App',
  data () {
    return {
      loggedIn:false
    }
  },
  methods: {
		logout: async function() {
			const result = await ProductService.logout()
			this.loggedIn = false
			this.$router.push('/login');

		}
  },
  created() {
    EventBus.$on('login', () => {
      this.loggedIn = true
		})
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ededed;
  color: #2c3e50;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.mdc-layout-app--main-container {
  margin-top: 64px;
}
.main {
  max-width: 80%;
  margin: 0 auto;
  transition: width 0.3s;
}
</style>
