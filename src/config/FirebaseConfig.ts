// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyBwNlDo8L9CeoG03GUO4KxM1mZPji1wtj0",
  authDomain: "futurepath-98ae6.firebaseapp.com",
  databaseURL: "https://futurepath-98ae6-default-rtdb.firebaseio.com/",
  projectId: "futurepath-98ae6",
  storageBucket: "futurepath-98ae6.firebasestorage.app",
  messagingSenderId: "488987659098",
  appId: "1:488987659098:web:084f4aadcb9bcd6aa6c163",
  measurementId: "G-YNV2TZHJBB"
};

// Khởi tạo Firebase app
const app = initializeApp(firebaseConfig);

// Lấy Firebase Realtime Database
const database = getDatabase(app);

export { database }; // Export để sử dụng ở các file khác
