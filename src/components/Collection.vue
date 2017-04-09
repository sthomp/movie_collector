<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <div class="grid">
      <div v-for="movie in movies" class="grid-item">
        <a target="_blank" :href="'http://www.imdb.com/title/'+movie.imdbID"><img :src="movie.Poster"></a>
      </div>
    </div>
  </div>
</template>

<script>

import request from 'superagent';
import async from 'async';

import collections from '../assets/movies.json';

export default {
  name: 'collection',
  data() {
    return {
      name: null,
      movies: [],
    };
  },

  mounted() {
    const collectionId = this.$route.params.collectionId;
    const collection = collections[collectionId];
    const movies = collection.movies;
    this.name = collection.name;
    async.eachSeries(movies, (movie, cb) => {
      const q = { plot: 'full', r: 'json', i: movie.id };
      console.log(movie);
      setTimeout(() => {
        request.get('https://www.omdbapi.com/')
          .query(q)
          .end((err, res) => {
            console.log(res.body);
            if (!res.body.Error) {
              this.movies.push(res.body);
            } else {
              console.error(`Couldnt fetch ${movie}`);
            }
            cb(null);
          });
      }, 200);
    }, (err) => {
      console.log('done');
      console.log(err);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box; }

.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
}

.grid-item {
  width: 300px;
  height: 443px;
  margin: 1em;
}

.grid-item img {
  width: 100%;
  height: 100%;
}

</style>
