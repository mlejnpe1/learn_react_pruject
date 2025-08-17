import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <div data-theme='autumn' />
      <button className='btn'>Button</button>
      <button className='btn btn-neutral'>Neutral</button>
      <button className='btn btn-primary'>Primary</button>
      <button className='btn btn-secondary'>Secondary</button>
      <button className='btn btn-accent'>Accent</button>
      <button className='btn btn-ghost'>Ghost</button>
      <button className='btn btn-link'>Link</button>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
        <Route path='/note/:id' element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
