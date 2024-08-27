import './App.css';
import Todo from './app/components/Todo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState,useEffect} from "react";
import { auth } from "./app/components/firebase";

import Login from "./app/auth/Login";
import SignUp from "./app/auth/SignUp";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App"> 
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/todo" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;