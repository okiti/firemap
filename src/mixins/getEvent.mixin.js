import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const getEvent = {
  data() {
    return {
      eventLoading: false,
      event: {
        id: this.$route.params.eventId,
        title: null,
        details: null,
        location: null,
        attendees: null,
        imAttending: null,
        startDate: null,
        startTime: null,
        endTime: null,
        banner: null,
        host: null,
      },
    };
  },
  methods: {
    getEvent() {
      const vm = this;
      vm.eventLoading = true;
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then((token) => {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            axios
              .get(
                `https://us-central1-agendr-35ac8.cloudfunctions.net/getSingleEvents?eventId=${vm.$route.params.eventId}`,
              )
              .then((response) => {
                vm.event.title = response.data.data.title;
                vm.event.details = response.data.data.details;
                vm.event.eventType = response.data.data.eventType;
                vm.event.location = response.data.data.location;

                // eslint-disable-next-line no-underscore-dangle
                const fsDate = new Date(response.data.data.startDate._seconds * 1000);

                vm.event.startDate = moment(fsDate)
                  .utcOffset(60)
                  .format('ddd, MMM DD YYYY');
                vm.event.startTime = moment(response.data.data.startTime, 'HH:mm:ss')
                  .utcOffset(60)
                  .format('h:mm:a z');
                vm.event.endTime = response.data.data.endTime;
                vm.event.banner = response.data.data.banner;
                vm.bannerBase64 = response.data.data.banner;
                vm.event.author = response.data.dataauthor;
                vm.event.attendees = response.data.data.attendees;
                vm.event.host = response.data.data.host;
                vm.event.imAttending = response.data.data.imAttending;
              })
              .catch(() => {})
              .finally(() => {
                vm.eventLoading = false;
                vm.$store.commit('setEvent', vm.event);
              });
          });
        }
      });
    },
  },
};
