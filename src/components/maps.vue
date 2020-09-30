<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<style lang="scss" scoped>
#map {
  width: calc(100vw - 50px);
  height: 100vh;
}
</style>
<script>
import mapboxgl from 'mapbox-gl';
/* eslint-disable */
export default {
  components: {
  },
  data() {
    return {
      map: false,
      sensors: [
        {
          cord: [5.20, 7.25],
          user: {
            name: 'Joe Biden',
            tel: '+234808908402333',
            image: 'https://cdn.dribbble.com/users/2407235/screenshots/6303151/abstract_design_2x.png',
            address: 'No 23, RD 4 Alagbaka Akure, Nigeria'
          }
        }
      ]
    };
  },
  mounted() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3NpdndpIiwiYSI6ImNrOTZveGd0bzA1MjkzbW1qYnYzOXk2OTgifQ.FmVpw_NWuWk5NaQfK8pQRg';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/osivwi/ckfgzpsf12odv19p8stu3aif0', // stylesheet location
      center: [5.20, 7.25], // starting position [lng, lat]
      zoom: 11.5, // starting zoom
    });
    const el = document.createElement('div');
    el.className = 'marker';

    const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
      .setHTML(`
        <div class="flex flex-col justify-center items-center pt-5">
        <img class="rounded-full object-cover avatar" src="https://cdn.dribbble.com/users/2407235/screenshots/6303151/abstract_design_2x.png" alt="username" />
        <p class="font-bold pt-3 text-xl">Joe Biden</p>
        <p class="text-sm pt-1 text-center px-5">No 23, RD 4 Alagbaka Akure, Nigeria</p>
        <div>
          <a class="rounded-full flex justify-center items-center tel-holder" href="tel:+2348089084022"><i class="uil uil-calling text-2xl"></i></a>
        </div>
        </div>
      `);

    new mapboxgl.Marker(el)
      .setLngLat([5.20, 7.25])
      .addTo(map)
      .setPopup(popup);
  },
};
</script>
