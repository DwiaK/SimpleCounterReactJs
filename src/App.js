import { Component } from 'react';

// Application Imports
import HomePageController from './controller/HomePageController';
import { BackgroundApplication } from './view/styles/Background';

class App extends Component{
  render() {
    return(
      <div>
        <BackgroundApplication darkStyle />
        <HomePageController />
      </div>
    );
  }
}

export default App;
