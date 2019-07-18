<template>
  <div id="register">
    <h1>Fazer cadastro</h1>
    <label>Nome</label><input type="string" v-model="user.name" v-on:focus="hide_name_error_msg">
    <div v-if="show_name_error_msg" style="background-color: red">O nome deve conter apenas letras</div>
    <label>E-mail</label><input type="email" v-model="user.email">
    <label>Senha</label><input type="password" v-model="user.password">
    <label>Tipo</label><input type="radio" id="cozinha" value="cozinha"  v-model="user.type"><label for="cozinha">Cozinha</label>
                        <input type="radio" id="salão" value="salão" v-model="user.type"><label for="salão">Salão</label>

    <button v-on:click="register">Fazer cadastro</button>

    {{user.name}}
    {{user.email}}
    {{user.password}}
    {{user.type}}

    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  data () {
    return {
      user: {
        name:'',
        email:'',
        password:'',
        type:''
      },
      show_name_error_msg: false,
    }
  },
  firestore() {
    return {
      users: db.collection('users')
    }
  },
   methods: {
   register () {
       const x = this.user.name.replace(" ", "");
      // validar dados: nome, email, e tipo: não pode ficar vazio, tem que preencher 
      if (!/^[a-zA-Z]+$/.test(x)) {
        this.show_name_error_msg = true
        return
      } else {
        // enviar dados
        this.$firestore.users.doc().set(this.user).then(snapshot => {
        // eslint-disable-next-line 
        console.log("add")
        })
      }
       // eslint-disable-next-line 
      console.log(this.user)

      this.show_registration = true
      // eslint-disable-next-line 
      console.log('cadastrou!')
      // this.show_registration = false 
      // // eslint-disable-next-line 
      // console.log('cadastrou!')
    },
    
    hide_name_error_msg () {
      this.show_name_error_msg = false
    }
    // redirecionar página de login
     
 },
}
</script>

<style>
  #register{
    font-family: 'Fredoka One', cursive;
    text-align: center;
    color: #ffff00;
    padding: 70px;
    background-color:#0f0f0a;
  }
</style>
