import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';

const defaultState = {
  event: null,
  gettingEvent: false,
};

const actions = {
  pullEvent: (context, payload) => {
    context.commit('setGettingEventStatus', true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          axios
            .get(
              `https://us-central1-agendr-35ac8.cloudfunctions.net/getSingleEvents?eventId=${payload}`,
            )
            .then((response) => {
              context.commit('setEvent', response.data.data);
            })
            .catch(() => {})
            .finally(() => {
              context.commit('setGettingEventStatus', false);
            });
        });
      }
    });
  },
};

const mutations = {
  setEvent: (state, event) => {
    state.event = event;
  },
  setGettingEventStatus: (state, status) => {
    state.gettingEvent = status;
  },
};

const getters = {
  getEvent: (state) => state.event,
  gettingEventStatus: (state) => state.gettingEvent,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
