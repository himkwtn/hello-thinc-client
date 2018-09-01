<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Thinc Back-end</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Chapter
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-avatar class="md-avatar-icon">1</md-avatar>
            <span class="md-list-item-text">Hello World</span>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon">2</md-avatar>
            <span class="md-list-item-text">Hello World</span>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon">3</md-avatar>
            <span class="md-list-item-text">Hello World</span>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon">4</md-avatar>
            <span class="md-list-item-text">Hello World</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
