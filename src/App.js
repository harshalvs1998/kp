import React, { useEffect } from "react";
import logo from './ber.jpeg';
import './App.css';
import Navbar from "./componts/nav";
import Footer from "./componts/footer";
import Home from './pages/home';
import Wedding from './pages/wedding';
import Prewedding from './pages/prewedding';
import Namecermony from './pages/namec';
import Candid from './pages/candid';
import About from './pages/about'
import Contact from './pages/contact'
import Videos from './pages/video'

import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

    


function App() {
   

    return (
        <>
         <Router>
          <Navbar/>
            <Switch>
           
                <Route exact path="/" component={Home}/>
                <Route exact path="/prewedding" component={Prewedding}/>
                <Route exact path="/namec" component={Namecermony}/>               
                <Route exact path="/Wedding" component={Wedding}/>
                <Route exact path="/candid" component={Candid}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/video" component={Videos}/>
                

               
                  

            </Switch>
            <Footer/>
            </Router>
          
       
     
      
       
      
</>
    );
}

export default App;