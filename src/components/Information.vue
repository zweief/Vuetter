<template>
  <transition name="fade">
    <div class="mb-md" v-if="show">
      <ul class="col-md-8 offset-md-2 list-group">
        <li class="list-group-item justify-content-between">
          Weather Description:
          <span class="badge badge-default badge-pill">{{data.weather[0].description}}</span>
        </li>
        <li class="list-group-item justify-content-between">
          Country:
          <span class="badge badge-default badge-pill">{{data.sys.country}}</span>
        </li>
        <li class="list-group-item justify-content-between">
          Wind Speed:
          <span v-if="scale === 'metric'" class="badge badge-default badge-pill">{{data.wind.speed}} m/s</span>
          <span v-else class="badge badge-default badge-pill">{{data.wind.speed}} mph</span>
        </li>
        <li class="list-group-item justify-content-between">
          Humidity:
          <span class="badge badge-default badge-pill">{{data.main.humidity}}%</span>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'information',
  props: ['data', 'show']
}
</script>

<style>
  .mb-md {
    margin-bottom: 30px;
  }
</style>
