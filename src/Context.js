import React, { Component } from 'react'
import {recipes} from './tempList'
import {recipe} from './tempDetails'
import axios from 'axios'


const RecipeContext = React.createContext();
// it provides two component called Provider and Consumer
class RecipeProvider extends Component {
    state= {
        recipes: recipes,
        api: 'https://www.food2fork.com/api/search?key=618236eb4a30670eeb464d768575fcee',
        recipeDetail: recipe,
        recipeList: recipes
    }
    // getRecipes = async () => {
    //     try{
    //     const response = await axios.get(this.state.api)
    //     console.log(response)
    //     this.setState(() => {
    //         return {
    //             recipes:response.data.recipes
    //         }
    //     },()=>console.log("success")
    //     )
    //     }catch{
    //         console.log("error")
    //     }
    // }
    // componentDidMount(){
    //     this.getRecipes();
    // }

  render() {
      console.log(this.state.recipes);
      
    return (
      <React.Fragment>
        <RecipeContext.Provider value={{...this.state}}>
            {this.props.children}
         </RecipeContext.Provider>
      </React.Fragment>
    )
  }
}

const RecipeConsumer = RecipeContext.Consumer;
export  {RecipeProvider, RecipeConsumer}
