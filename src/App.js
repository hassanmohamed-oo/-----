import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { createContext, useState,useEffect } from 'react';
import Lists from './lists';
import Nav from './nav';
import Listgoals from './ListGoals';
import Home from './home';
import NotFound from './NotFound';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import ContactHassan from './ContactHassan';


export const useLists = createContext();
const App = () => {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('lists');
    return savedLists ? JSON.parse(savedLists) : [];
  });
   useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  return (

   <useLists.Provider value={{ lists, setLists }}>
  <BrowserRouter basename="/">
    <Routes>
      <Route path='/life-goal-react' element={<AnimatePresence>
          <Home />
        </AnimatePresence>}/>
      <Route path="/" element={
        <AnimatePresence>
          <Home />
        </AnimatePresence>
      } />
      <Route path="/lists" element={<Lists />} />
      <Route path="/listgoals/:listnum" element={<Listgoals />} />
      <Route path="/contact" element={<ContactHassan />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
</useLists.Provider>

 
  );
}

export default App;
