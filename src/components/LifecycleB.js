import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ashwini'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(prpos,state){
        console.log('LifecycleB getDerivedFromProps')
 
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    
  render() {
    console.log('LifecycleB render')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB