<template>
  <div>
    <div id="map" ></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl';
/* eslint-disable */
export default {
  components: {
  },
  data() {
    return {
      map: false,
      token: 'pk.eyJ1Ijoib3NpdndpIiwiYSI6ImNrOTZveGd0bzA1MjkzbW1qYnYzOXk2OTgifQ.FmVpw_NWuWk5NaQfK8pQRg',
    };
  },
  mounted() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3NpdndpIiwiYSI6ImNrOTZveGd0bzA1MjkzbW1qYnYzOXk2OTgifQ.FmVpw_NWuWk5NaQfK8pQRg';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [5.20, 7.25], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat([5.20, 7.25])
      .addTo(map);
    this.map = map;
  },
};
</script>
<style lang="scss" scoped>
#map {
  width: calc(100vw - 50px);
  height: 100vh;
}
</style>
