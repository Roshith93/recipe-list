import React, { Component } from 'react'
import {RecipeConsumer} from '../Context'
import {Link} from 'react-router-dom'

class RecipeDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <RecipeConsumer>
        {value => {
          const {recipe_id,f2f_url, image_url, ingredients, publisher, publisher_url, source_url, title} = value.recipeDetail;
          const {handleIndex} = value
          return (
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                        <Link to="/">
                    <button 
                      type="button"
                      className="btn btn-warning mb-5 text-capitalize"
                      onClick={handleIndex.bind(this, 1)}>
                        Back to Recipe List
                    </button>
                        </Link>
                    <img 
                      src={image_url} 
                      alt="img"
                      className="d-block w-100"
                      />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <h6 className="text-uppercase">{title}</h6>
                    <h6 className="text-warning text-uppercase text-slant">Provided : {publisher}</h6>
                    
                    <a href={publisher_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2 text-capitalize">
                      Publisher webpage
                    </a>
                    <a href={source_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success mx-3 mt-2 text-capitalize">
                      Recipe Url
                    </a>
                    <ul className="list-group mt-4">
                      <h2 className="mt-3 mb-4">ingredients</h2>
                      {ingredients.map((ingredient, index) => {
                        // since we are not changing the items in array, we can use index as a key prop
                        return (
                          <li 
                            className="list-group-item text-slanted"
                            key={index}
                          >{ingredient}</li>
                        )
                      })}  
                    </ul>
                  </div>
                </div>
              </div>
          )
        }}
        </RecipeConsumer>
      </React.Fragment>
    )
  }
}

export default RecipeDetail
