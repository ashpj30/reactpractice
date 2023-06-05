import React, { Component, PureComponent } from 'react'
import Regularcomp from './Regularcomp'
import Pure from './Pure'

export class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Ashwini'
      }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: 'Ashwini'
            })
        },2000)

        
    }
  render() {
    return (
      <div>Parentcomp
        <Regularcomp name={this.state.name}></Regularcomp>
        <Pure name={this.state.name}></Pure>
      </div>
    )
  }
}

export default Parentcomp