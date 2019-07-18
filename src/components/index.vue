<template>
    <div id="index">
        <h1>Burger Queen</h1>
        <img id="logo" alt="logo" src="../assets/neko-small2.png">
        <button  v-on:click="go_to_login()" >Entrar</button>
        <button  v-on:click="go_to_register()">Cadastre-se</button>
    </div>
</template>

<script>
export default {
    methods: {
    go_to_login () {
      this.$router.push('/login')
    },
    go_to_register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>
  #index {
    font-family: 'Fredoka One', cursive;
    text-align: center;
    color: #ffff00;
    padding: 70px;
    background-color:#0f0f0a;
  }
</style>
