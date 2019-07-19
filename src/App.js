import React,{ Component } from 'react';
import './App.css';
import Default from './component/Default'
import {RecipeConsumer} from './Context'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    pageIndex: 0
  }

  handleIndex = (index) => {
    this.setState(()=> {
    return{
      pageIndex: index
    }
    })
  }

  // handleDetail = (index) => {
  //   this.setState(()=> {
  //   return{
  //     pageIndex: index
  //   }
  //   })
  // }
  // This is for conditional rendering the pages

  render(){
  return (
    <React.Fragment>
      <RecipeConsumer>
        {value => {
          const {displayPage,pageIndex} = value;
            return displayPage(pageIndex)
        }}
      </RecipeConsumer>
    </React.Fragment>
  );
  }
}

export default App;
