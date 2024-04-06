importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAF1VrCzDdVTMFm6B15OZbggiRUwHJP0L4",
  authDomain: "admin-login-2f43a.firebaseapp.com",
  projectId: "admin-login-2f43a",
  storageBucket: "admin-login-2f43a.appspot.com",
  messagingSenderId: "402188889488",
  appId: "1:402188889488:web:2af08c48e87133e1a8d715",
  measurementId: "G-9WEKKQW8W0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});