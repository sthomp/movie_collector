<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB0suatFkRo7oJSfXvuPf68WTcbOc1ve_k',
  authDomain: 'movie-collector-10936.firebaseapp.com',
  databaseURL: 'https://movie-collector-10936.firebaseio.com',
  projectId: 'movie-collector-10936',
  storageBucket: 'movie-collector-10936.appspot.com',
  messagingSenderId: '161665036794',
};

const app = Firebase.initializeApp(config);

export default {
  name: 'app',
  mounted() {
    console.log(app);
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
