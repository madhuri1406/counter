import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component{
  increment=()=>{
    this.props.dispatch({type:"INCREMENT"})
  }
  decrement=()=>{
    this.props.dispatch({type:"DECREMENT"})
  }
  render(){
    console.log(this.props);
    return(
      <div>
        <button onClick={this.increment}>+</button>
        {this.props.count}
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
  count:state.count
}
export default connect(mapStateToProps,"")(Counter)
