
import './App.css';
// import Header from './components/Header';
import Design from './components/Design';
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import Contactpage from './components/Contactpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Enquiry from './components/Enquiry';
import Blog from './components/Blog';
import Ongoing from './components/Ongoing';
import Completed from './components/Completed';
import Commercialcompleted from './components/Commercialcompleted';
import Commercialongoing from './components/Commercialongoin';
import Leadership from './components/Leadership';
import Goverment from './components/Goverment';
import Grampanchayat from './components/Grampanchayat';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/design' element={<Design />}></Route>
          <Route path='/residential' element={<Residential />}></Route>
          <Route path='/commercial' element={<Commercial />}></Route>
          <Route path='/contactpage' element={<Contactpage />}></Route>
          <Route path='/enquiry' element={<Enquiry></Enquiry>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/ongoing' element={<Ongoing></Ongoing>}></Route>
          <Route path='/completed' element={<Completed></Completed>}></Route>
          <Route path='/commercialcompleted' element={<Commercialcompleted></Commercialcompleted>}></Route>
          <Route path='/commercialongoing' element={<Commercialongoing></Commercialongoing>}></Route>
          <Route path='/leadership' element={<Leadership></Leadership>}></Route>
          <Route path='/goverment' element={<Goverment></Goverment>}></Route>
          <Route path='/grampanchayat' element={<Grampanchayat></Grampanchayat>}></Route>
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
