<template>
  <div class="container">

    <div v-if="loading">
      Loading...
    </div>
    <div class="alert alert-danger mb-lg" v-else-if="error">
      <h3 class="mb-sm">Ups, something went wrong!</h3>
      <router-link class="btn btn-success" to="/">Back</router-link>
    </div>

    <div v-if="isLoaded">
      <h1 class="display-3 mb-lg">{{ city }}</h1>
      <div class="container mb-sm">
        <div class="row align-items-center justify-content-center mb-lg">
          <img class="col-3" v-bind:src="icon">
          <h2 class="col-md-3 display-2">
            {{ Math.round(data.main.temp) }}
            <span class="display-4 unit" v-if="scale === 'metric'">°C</span>
            <span class="display-4 unit" v-else>°F</span>
          </h2>
        </div>
        <button @click="show = !show " type="button" class="cbtn">
          <img :class="{rotate: show}" src="../assets/down-arrow.png" alt="more">
        </button>
      </div>
      <information-component :data="data" :show="show"></information-component>
      <router-link class="btn btn-success" to="/">Search again</router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Information from '../components/Information'

const KEY = '497dfda2a4db93167013bb9a1600fe1d'

export default {
  name: 'presentation',
  components: {
    'information-component': Information
  },
  data () {
    return {
      city: this.$route.query.city,
      scale: this.$route.query.scale,
      loading: false,
      isLoaded: false,
      error: false,
      show: false,
      data: {},
      icon: ''
    }
  },

  beforeMount () {
    this.city = this.capitalize(this.city)
  },

  created () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      this.loading = true
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.scale}&APPID=${KEY}`)
      .then((response) => {
        this.loading = false
        this.data = response.data
        this.icon = `./static/${response.data.weather[0].icon}.png`
        this.isLoaded = true
      })
      .catch((error) => {
        this.loading = false
        this.error = true
        console.log(error)
      })
    },

    capitalize (string) {
      return string.split(' ').map(val => {
        return val.charAt(0).toUpperCase() + val.slice(1)
      }).join(' ')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul {
    list-style: none;
    padding: 0;
  }

  .btn-success {
    background-color: #42b983;
  }
  .cbtn {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .cbtn:focus {
    outline: none;
  }
  .rotate {
    transform: rotate(180deg);
  }

  .unit {
    color: #42b983
  }

  .mb-lg {
    margin-bottom: 40px
  }
  .mb-sm {
    margin-bottom: 20px
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 450ms
  }
  .fade-enter, .fade-leave {
    opacity: 0
  }
  .fade-enter-to, {
    opacity: 1
  }
</style>
