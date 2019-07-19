import React,{ Component } from 'react';
import './App.css';
import RecipeList from './component/RecipeList';
import Default from './component/Default'

import RecipeDetail from './component/RecipeDetail'
import {RecipeConsumer} from './Context'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    pageIndex: 1
  }
  // This is for conditional rendering the pages
  displayPage = index => {
    switch (index) {
      case 1:
        return  <RecipeList />
        break;
      case 2:
        return <RecipeDetail />
      default: return <p>err</p>
        break;
    }
  }
  render(){
  return (
    <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
    </React.Fragment>
  );
  }
}

export default App;
