<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl';
import pulse from '../lib/pulse';

/* eslint-disable */
export default {
  components: {},
  data() {
    return {
      map: false,
      sensors: [
        {
          icon: 'pulsing-dot',
          id: 43490203,
          location: {
            longitude: 5.2,
            latitude: 7.25,
          },
          user: {
            name: 'Joe Biden',
            phone: '+190067839921',
            address: 'RM 201, Camp nou',
          },
        },
        {
          id: 43490203,
          location: {
            longitude: 4.7,
            latitude: 6.2,
          },
          user: {
            name: 'Demilade Ajayi',
            phone: '+190067839921',
            address: 'RM 201, Camp nou',
          },
        },

      ],
      sensorGeoJson: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      },
      token:
        'pk.eyJ1Ijoib3NpdndpIiwiYSI6ImNrOTZveGd0bzA1MjkzbW1qYnYzOXk2OTgifQ.FmVpw_NWuWk5NaQfK8pQRg',
    };
  },
  async mounted() {
    const vm = this;
    await this.generateGeoJson(vm.sensors);

    mapboxgl.accessToken = this.token;

    // const el = document.createElement('div');
    // el.className = 'marker';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/osivwi/ckfgzpsf12odv19p8stu3aif0',
      center: [5.2, 7.25],
      zoom: 6.15,
    });

    const pulsingDot = pulse(map);

    map.on('load', () => {
      map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
      map.addSource('places', vm.sensorGeoJson);
      // Add a layer showing the places.
      map.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': '{icon}',
          'icon-allow-overlap': true,
        },
      });
    });
    map.on('mouseenter', 'places', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'places', () => {
      map.getCanvas().style.cursor = '';
    });
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const { description } = e.features[0].properties;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
    });
  },
  methods: {
    async generateGeoJson(data) {
      const vm = this;
      for (const key in data) {
        const sensorData = {
          geometry: {
            type: 'Point',
            coordinates: [data[key].location.longitude, data[key].location.latitude],
          },
          type: 'Feature',
          properties: {
            description: `<div class="flex flex-col justify-center items-center pt-5">
              <img class="rounded-full object-cover avatar" src="https://cdn.dribbble.com/users/2407235/screenshots/6303151/abstract_design_2x.png" alt="username" />
              <p class="font-bold pt-3 text-xl">${data[key].user.name}</p>
              <p class="text-sm pt-1 text-center px-5">${data[key].user.address}</p>
              <div>
                <a class="rounded-full flex justify-center items-center tel-holder" href="tel:${data[key].user.phone}"><i class="uil uil-calling text-2xl"></i></a>
              </div>
              </div>`,
            icon: 'pulsing-dot',
          },
        };
        vm.sensorGeoJson.data.features.push(sensorData);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#map {
  width: calc(100vw - 50px);
  height: 100vh;
}
</style>
