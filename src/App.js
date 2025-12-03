import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import './App.css';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;


