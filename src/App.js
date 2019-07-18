import React,{Component} from 'react';
import './App.css';
import Recipe from './component/Recipe';
import RecipeDetail from './component/RecipeDetail';
import RecipeLists from './component/RecipeList';
import RecipeSearch from './component/RecipeSearch';

class App extends Component {
  state={
    data: null
  }
  render(){

  return (
    <React.Fragment>
      <Recipe />
      <RecipeDetail />
      <RecipeLists/>
      <RecipeSearch />
    </React.Fragment>
  );
  }
}

export default App;
