import React, { Component } from 'react'
import {RecipeConsumer} from '../Context'
import {DebounceInput} from 'react-debounce-input';

class RecipeSearch extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
               <h1 className="text-slanted text-capitalized">
               Search for Recipe with {" "}
                <strong className="text-danger">
                  Food2Fork
                </strong>
               </h1>
               <RecipeConsumer>
                {value => {
                  return (
                    <form className="mt-4">
                  <label htmlFor="search" className="text-capitalized">
                    type recipes separated by comma
                  </label>
                  <div className="input-group">
                    <DebounceInput
                      minLength={3}
                      debounceTimeout={500}
                      type="text"
                      name="searchQuery" 
                      placeholder="Search for the food items and start preparing"
                      className="form-control"
                      value={value.searchQuery}
                      onChange={value.handleChange}
                      />
                    {/* <div className="input-group-append">
                      <button type="submit" 
                        className="input-group-text bg-primary text-white">
                        <i className="fas fa-search" />
                        </button>
                    </div> */}
                  </div>
                </form>
                  )
                }}
               </RecipeConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RecipeSearch
