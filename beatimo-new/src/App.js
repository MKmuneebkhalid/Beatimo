import './App.css';
import { BrowserRouter, Routes , Route, } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import CarrierPage from './Components/Carrier/CarrierPage';
import Home2 from './Components2/Home/Home2';
import ProposPage from './Components/Propos/ProposPage';
import Propose2 from './Components2/Propose2/Propose2';
import LandingPage from "./LandingPage/LandingPage"
import Error from './Components/Navbar/Error';
import TermsCondition2 from './Components2/CommanPage/TermsCondition2';
import TermsCondition from './Components/Navbar/Terms&Condition';




function App() {


  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<LandingPage /> }/>
   <Route path='/services-conseils' element={<HomePage /> }/>
   <Route path='/carrier' element={<CarrierPage /> }/>
   <Route path='/propos' element={<ProposPage /> }/>
   <Route path='/capital-home' element={<Home2/> }/>
   <Route path='/capital-propos' element={<Propose2/> }/>
   <Route path='/conseils-terms&condition' element={<TermsCondition/> }/>
   <Route path='/capital-terms&condition' element={<TermsCondition2/> }/>
   <Route path='*' element={<Error/> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
