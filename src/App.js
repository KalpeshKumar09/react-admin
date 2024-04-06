import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getToken } from 'firebase/messaging';
import { messaging } from './firebase';
import MainRoute from './Routes/MainRoute'

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BO51vYuUclqezXsSiqRfkzAtCXopsePIJF4tPSUKgfqUl94EV6e9BhQVrQGcaAaSccJZlHRE16QVpbT6B43jpJQ",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <div className="App">
      <MainRoute/>
    </div>
  );
}

export default App;
