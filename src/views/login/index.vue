<template>
  <div>
    <mdc-textfield v-model="username" label="Username" />
    <br>
    <mdc-textfield @keyup.enter="login" type="password" v-model="password" label="Password" />
    <br>
    <mdc-button @click="login" :unelevated="true">Log in</mdc-button>

  </div>
</template>

<script>
import { ProductService } from '@/common/api.service';

export default {
  name: 'Login',
  props:['loggedIn'],
  data () {
    return {
    username: '',
    password: ''
    }
  },
  methods: {
    login: async function() {
      const {username, password} = this
      const body = {username, password}
      const result = await ProductService.login(stringify(body))
      if(result.data.success) {
        EventBus.$emit('login')
        this.$router.push('/admin');

      }
    }
  },
  created() {
      if(this.loggedIn) 
        this.$router.push('/admin')
  }
}
import axios from 'axios'
import { stringify } from 'querystring'
import { EventBus } from '../../event-bus'
</script>

<style scoped>

</style>
