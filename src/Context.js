import React, { Component } from 'react'
import {recipes} from './tempList'
import {recipe} from './tempDetails'
import axios from 'axios'
import RecipeList from './component/RecipeList';
import RecipeDetail from './component/RecipeDetail'



const RecipeContext = React.createContext();
// it provides two component called Provider and Consumer
class RecipeProvider extends Component {
    state= {
        recipes: recipes,
        api: 'https://www.food2fork.com/api/search?key=618236eb4a30670eeb464d768575fcee',
        apiDetail: `https://www.food2fork.com/api/get?key=618236eb4a30670eeb464d768575fcee`,
        recipeDetail: recipe,
        pageIndex: 1

    }
    handleIndex = (index) => {
    this.setState(()=> {
    return{
      pageIndex: index
    }
    })
  }

  displayPage = index => {
    switch (index) {
      case 1:
        return  <RecipeList pageIndex={this.state.pageIndex}/>
      case 0:
        return <RecipeDetail pageIndex={this.state.pageIndex} handleIndex={this.handleIndex}/>
      default: return <p>err</p>
    }
  }

    getRecipeDetails = async (id, recipe_id) => {
        const response = await axios.get(this.state.apiDetail + `&rId=${recipe_id}`)
        this.setState(()=>{
            return{
                recipeDetail: response.data.recipe,
                pageIndex: id
            }
        })
    }

    getRecipes = async () => {
        try{
        const response = await axios.get(this.state.api)
        console.log(response)
        this.setState(() => {
            return {
                recipes:response.data.recipes
            }
        },()=>console.log("success")
        )
        }catch{
            console.log("error")
        }
    }
    componentDidMount(){
        this.getRecipes();
    }

  render() {
    return (
      <React.Fragment>
        <RecipeContext.Provider value={{
                ...this.state,
                getRecipeDetails: this.getRecipeDetails,
                handleIndex: this.handleIndex,
                displayPage: this.displayPage
                }}>
            {this.props.children}
         </RecipeContext.Provider>
      </React.Fragment>
    )
  }
}

const RecipeConsumer = RecipeContext.Consumer;
export  {RecipeProvider, RecipeConsumer}
