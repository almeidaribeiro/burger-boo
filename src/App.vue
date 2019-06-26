<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { db } from './firebase';

export default {
  name: 'app',
   firestore() {
    return {
      users: db.collection('users')
    }
   }  
}
</script>

<style>
#app {

}
</style>
