import React,{ Component } from 'react';
import './App.css';
import {RecipeConsumer} from './Context'

class App extends Component {
  render(){
  return (
    <React.Fragment>
      <RecipeConsumer>
        {value => {
          const {displayPage,pageIndex} = value;
            return displayPage(pageIndex)
        }}
      </RecipeConsumer>
    </React.Fragment>
  );
  }
}

export default App;
