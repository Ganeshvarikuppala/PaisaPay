import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home } from './Pages/signup';
import { Signin } from './Pages/signin';
import { Dashboard } from './Pages/dashboard';
import { SendMoney } from './Pages/SendMoney';



function App() {
  // const[firstname,setname]=useState("john")
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Home/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/send' element={<SendMoney/>}/>

       

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
