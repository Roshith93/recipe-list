import React, { Component } from 'react'
import {RecipeConsumer} from '../Context'

class RecipeDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>RecipeDetail</h1>
        <RecipeConsumer>
        {value => {
          const {f2f_url, image_url, ingredients, publisher, publisher_url, source_url, title} = value.recipeDetail;
          return (
              <h4>{`
                title: ${title}
                publisher: ${publisher}
              `}</h4>
          )
        }}
        </RecipeConsumer>
      </React.Fragment>
    )
  }
}

export default RecipeDetail
