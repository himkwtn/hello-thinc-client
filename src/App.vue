<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Thinc Back-end</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" 
      md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
         
          <span class="md-title">Lessons</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <md-avatar class="md-avatar-icon">1</md-avatar>
            <span class="md-list-item-text">Hello World</span>
          </md-list-item>

          <md-list-item to="/lesson2">
            <md-avatar class="md-avatar-icon">2</md-avatar>
            <span class="md-list-item-text">GET/POST</span>
          </md-list-item>

          <md-list-item md-expand to="/lesson3">
            <md-avatar class="md-avatar-icon">3</md-avatar>
            <span class="md-list-item-text">CRUD Operartion</span>
            <md-list slot="md-expand">
              <md-list-item class="md-inset" to="/lesson3-1">Create</md-list-item>
              <md-list-item class="md-inset" to="/lesson3-2">Read</md-list-item>
              <md-list-item class="md-inset" to="/lesson3-3">Update</md-list-item>
              <md-list-item class="md-inset" to="/lesson3-4">Delete</md-list-item>
            </md-list>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>



<style>
@import "~vue-material/dist/vue-material.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

.md-app {
  min-height: 100vh;
}

.md-chip {
  margin: 6px;
}
</style>
