import React, { Component } from 'react';


// import withStyles from './component/Navbar';

import {Route} from 'react-router-dom';

import ButtonAppBar from './component/Navbar';

import ButtonBases from './component/WelcomeVideo';
import Recommendations from './component/Recommendations';
import Classement from './component/Classement';
import Events from './component/Events';
import Pub from './component/Pub';
import Footer from './component/Footer';
import Host from "./component/host";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading : "0"
      }

      setTimeout(
        function() {
            this.setState({loading:"1"});
        }
        .bind(this),
        3000
    );
}
  render() {
    return (
      <div className="App">
          
          <ButtonAppBar />
          
          <ButtonBases loading={this.state.loading} />
          <Route exact path="/" render={()=><Recommendations />}/>
          <Route exact path="/city/:name" render={(props)=><Host cityName={props.match.params.name}/>}/>
          <Route exact path="/city" render={()=><Recommendations />}/>
          <Route exact path="/" render={()=><Classement />}/>
          <Route exact path="/" render={()=><Events />}/>
          <Route exact path="/" render={()=><Pub />}/>
        <Footer /> 
        
      </div>
    );
  }
}

export default App;
