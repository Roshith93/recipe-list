import React, { Component } from 'react'
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';
import {RecipeConsumer} from '../Context'


class RecipeLists extends Component {
  render() {
    return (
      <React.Fragment>
        <RecipeSearch />
        <div className="container my-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                    <h1 className="text-slanted">Recipe List</h1>
                </div>
            </div>
            <div className="row">
                <RecipeConsumer>
                    {value => {
                      const {recipes} = value;
                      if(recipes.length === 0){
                        return (
                          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h4 className="text-danger text-center text-uppercase"><strong>No Items Found</strong></h4>
                          </div>
                        )
                      } else{
                        return recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}/>)
                      }
                        
                    }}
                </RecipeConsumer>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RecipeLists
