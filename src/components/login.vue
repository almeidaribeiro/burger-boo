<template>
  <div id="login">
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
  #login{
    font-family: 'Fredoka One', cursive;
    text-align: center;
    color: #ffff00;
    padding: 70px;
    background-color:#0f0f0a;
  }
</style>
