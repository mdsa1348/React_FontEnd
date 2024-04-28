// App.js

// import React from 'react';
// import NavScrollExample from './homepage/navbar';
// import Body from './homepage/Home';
// import { BrowserRouter , Router, Route } from 'react-router-dom';
// import Page from './homepage/Extra';

// function App() {
//   return (
  
//     <Router>
//       <div>
//         <NavScrollExample />
//         <Body />
        
//         <Route path="/extra" element={<Page />} />
//       </div>
//     </Router>

//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from './homepage/Home';
import NavScrollExample from './homepage/navbar';
import Extra from './homepage/Extra';
import NoPage from './homepage/NoPage';
import Gallary from './gallary/gallary';


import SecondHome from './SecondHome/SecondHome';

import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavScrollExample />}>
          <Route index element={<Home />} />
          <Route path="navbar" element={<NavScrollExample />} />
          <Route path="extra" element={<Extra />} />
          <Route path="*" element={<NoPage />} />
          <Route path="gallary" element={<Gallary />} />

          <Route path="secondHome" element={<SecondHome />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}