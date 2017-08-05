<template>
  <div class="container">
    <div class="row">
      <h1 class="col-md-12 mb-md">Get your local Weather!</h1>

      <div class="input-group col-md-8 offset-md-2 mb-md">
        <input type="text" class="form-control" placeholder="City" v-model="hasCity">
        <span class="input-group-btn">
          <button @click="handleCelcius" :class="{active: c}" class="btn btn-secondary" type="button">°C</button>
        </span>
        <span class="input-group-btn">
          <button @click="handleFahrenheit" :class="{active: f}" class="btn btn-secondary" type="button">°F</button>
        </span>
      </div>

      <div class="col-md-10 offset-md-1 mb-md">
        <div v-if="hasCity && scale">
          <router-link class="btn btn-success" :to="{ path: 'weather', query: {city: this.hasCity, scale: this.scale}}">Search</router-link>
        </div>
        <div v-else>
          <h6 class="h6">Please enter a city <span>and</span> choose your preferred scale unit.</h6>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      hasCity: '',
      scale: '',
      c: false,
      f: false
    }
  },
  methods: {
    handleCelcius () {
      this.scale = 'metric'
      this.c = true
      this.f = false
    },
    handleFahrenheit () {
      this.scale = 'imperial'
      this.f = true
      this.c = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    color: #42b983;
  }

  .active {
    background-color: #42b983
  }
  .mb-md {
    margin-bottom: 30px
  }
  .btn-success {
    background-color: #42b983
  }
  .btn:focus {
    box-shadow: none
  }
</style>

<!-- color: #42b983; -->
