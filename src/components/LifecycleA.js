import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ashwini'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(prpos,state){
        console.log('LifecycleA getDerivedFromProps')
 
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
  render() {
    console.log('LifecycleA render')
    return (
        <div>
      <div>LifecycleA</div>
    <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA