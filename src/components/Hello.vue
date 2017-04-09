<template>
  <div class="hello">
    <h1>Collections</h1>
    <div v-for="(collection, collectionId) in collections">
      <a :href="'#/'+collectionId">{{ collection.name }}</a>
    </div>
  </div>
</template>

<script>

import collections from '../assets/movies.json';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      collections: [],
    };
  },

  mounted() {
    console.log('mounted');
    console.log(collections);
    this.collections = collections;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
