import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Settings from './pages/Setting';
import Main from './components/Main';


const App = () => {
  const [settings, setSettings] = useState({});
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Main settings={settings}/>}>
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
            <Route path='/settings' element={<Settings setSettings={setSettings}/>} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  )
};

export default App;
