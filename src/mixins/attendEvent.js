import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// eslint-disable-next-line import/prefer-default-export
export const attendEvent = {
  data() {
    return {
      attendingLoading: false,
    };
  },
  methods: {
    attendEvent() {
      this.attendingLoading = true;
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const vm = this;
          firebase
            .firestore()
            .collection('attending')
            .where('userId', '==', user.uid)
            .where('eventId', '==', vm.event.id)
            .get()
            .then((snapShot) => {
              if (snapShot.empty) {
                firebase
                  .firestore()
                  .collection('attending')
                  .add({
                    userId: user.uid,
                    eventId: vm.event.id,
                  })
                  .then(() => {
                    vm.event.attending = true;
                    vm.event.imAttending = true;
                    vm.attendingLoading = false;
                  });
              } else {
                vm.attendingLoading = false;
              }
            })
            .catch(() => {
              vm.attendingLoading = false;
            });
        }
      });
    },
  },
};
