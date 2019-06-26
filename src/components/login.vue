<template>
  <div>
    <h1>Fazer Loggin</h1>
    <label>E-mail</label><input type="email" v-model="user.email">
    <label>Senha</label><input type="password" v-model="user.password">

    <button v-on:click="login">Entrar</button>

    {{user.email}}
    {{user.password}}
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: {
         email: '',
      password: ''
      }
    }
  },
  methods: {
    login () {
      // eslint-disable-next-line
      console.log('logoooou!')

    }
  }
  
}
</script>

<style>

</style>
