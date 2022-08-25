import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Industrie from './Industrie';
import Technology from './Technology';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Navbar from './Navbar';

import { BrowserRouter as Switch , Route } from 'react-router-dom';


const App =() => {
   return(
    <>

    <Switch>
    <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/industrie" component={Industrie} />
      <Route exact path="/technology" component={Technology} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
    </Switch>  
    </>
	);

};

export default App;