import React,{ Component } from 'react';
import './App.css';
import RecipeList from './component/RecipeList';
import RecipeDetail from './component/RecipeDetail'
import {RecipeConsumer} from './Context'

class App extends Component {
  render(){
  return (
    <React.Fragment>
      <RecipeConsumer>
        {value => console.log(value.recipes)}
      </RecipeConsumer >
        <RecipeList/>
        <RecipeDetail />
    </React.Fragment>
  );
  }
}

export default App;
