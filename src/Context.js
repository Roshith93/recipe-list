import React, { Component } from 'react'
import axios from 'axios'
import RecipeList from './component/RecipeList';
import RecipeDetail from './component/RecipeDetail'
// import {recipes} from './tempList'
// import {recipe} from './tempDetails'



const RecipeContext = React.createContext();
// it provides two component called Provider and Consumer
class RecipeProvider extends Component {
    state= {
        recipes: [],
        api: 'https://www.food2fork.com/api/search?key=618236eb4a30670eeb464d768575fcee',
        apiDetail: `https://www.food2fork.com/api/get?key=618236eb4a30670eeb464d768575fcee`,
        recipeDetail: [],
        pageIndex: 1,
        searchQuery: ""
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
        return  <RecipeList />
      case 0:
        return <RecipeDetail/>
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
        // console.log(response)
        if(response.data.recipes.length !== 0){
          this.setState(()=>{
           return {
                recipes:response.data.recipes
            }
        })
        }
        }
        catch{
            console.log("error")
        }
    } 
    handleChange = e => {
      const {name, value} = e.target;
      this.setState(()=> {
        return{
          [name]: value
        }
      },() => {
        this.searchRecipe()
      })
    }
    searchRecipe = async () => {
      try{
        const response = await axios.get(`${this.state.api}&q=${this.state.searchQuery}`)
        
        console.log(response)
        this.setState(()=>{
           return {
                recipes:response.data.recipes
            }
        })
      }catch{
        console.log("err")
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
                displayPage: this.displayPage,
                handleChange: this.handleChange
                }}>
            {this.props.children}
         </RecipeContext.Provider>
      </React.Fragment>
    )
  }
}

const RecipeConsumer = RecipeContext.Consumer;
export  {RecipeProvider, RecipeConsumer}
