import React, { useEffect } from 'react';
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import './App.css';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
        })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, []);
  

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </BrowserRouter>
      )}
    </div>
  );
}

export default App;
