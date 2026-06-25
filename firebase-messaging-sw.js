importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDJaQ-0QMHnOUSN8jTZ1eLo7-3fmXSEK9o",
  authDomain: "din-push-server.firebaseapp.com",
  projectId: "din-push-server",
  storageBucket: "din-push-server.firebasestorage.app",
  messagingSenderId: "469250442836",
  appId: "1:469250442836:web:7a0576e7263ad8179d4fc1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://via.placeholder.com/128' 
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
