import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {RecipeConsumer} from '../Context'

class Recipe extends Component {
  render() {
    const {image_url, publisher, source_url, title, recipe_id} = this.props.recipe;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img src={image_url} 
              className="img-card-top"
              style={{height:"14rem"}}
              alt="recipe"/>
              <div className="card-body text-capitalize">
                <h6>{title}</h6>
                <h6 className="text-warning text-slanted">Publisher {publisher}</h6>
              </div>
              <div className="card-footer">
                <RecipeConsumer>
                  {value => {
                    const {getRecipeDetails} = value;
                    return(
                      <Link to="/detail">
                      <button 
                    type="button"
                    className="btn btn-primary text-capitalioze"
                    onClick={ getRecipeDetails.bind(this, 0,recipe_id) }>
                      Details
                    </button>
                      </Link>
                    )
                  }}
                </RecipeConsumer>
                
                <a href={source_url}
                   className="btn btn-success mx-2 text-capitalize"
                   target="_blank"
                   rel="noopener noreferrer">
                     Recipe URL
                </a>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Recipe
