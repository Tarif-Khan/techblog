import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default App;