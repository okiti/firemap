import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import event from './event.store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: null,
    user: null,
    pullingEvents: false,
  },
  getters: {
    getUser: (state) => state.user,
    getEvents: (state) => state.events,
    getPullingStatus: (state) => state.pullingEvents,
  },
  mutations: {
    setUser: (state, user) => { state.user = user; },
    setEvents: (state, n) => { state.events = n; },
    setEventPulling: (state, n) => { state.pullingEvents = n; },
  },
  actions: {
    pullUser({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit('setUser', user);
        }
      });
    },
    pullEvents({ commit }) {
      commit('setEventPulling', true);
      const events = [];
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const originEvents = await firebase.firestore().collection('events').get();
          const attending = await firebase.firestore()
            .collection('attending')
            .where('userId', '==', user.uid)
            .get();
          const foo = async () => {
            /* eslint-disable */
            for (const doc of originEvents.docs) {
              const filtered = {};
              const attendees = await firebase.firestore()
                .collection('attending')
                .where('eventId', '==', doc.id)
                .get();

              filtered.id = doc.id;
              filtered.attending = false;
              filtered.attendees = attendees.size;

              /* eslint-disable */
              for (const key in doc.data()) {
                const value = doc.data()[key];
                if (filtered[key] === 'startDate' || filtered[key] ===
                  'endDate') {
                  filtered[key] = value.toDate();
                } else {
                  filtered[key] = value;
                }
              }
              for (const docc of attending.docs) {
                if (filtered.id === docc.data().eventId) {
                  filtered['attending'] = true;
                }
              }
              events.push(filtered);
            };
          }
          await foo().then(() => {
            commit('setEvents', events);
            commit('setEventPulling', false);
          });
        }
      });
    },
  },
  modules: {
    event,
  },
});
