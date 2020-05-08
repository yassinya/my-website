import React from 'react';

class Skill extends React.Component{

    state = {
        show: false,
        randPos: {
            top: 0,
            left: 0,
          }
    };

    componentDidMount(){
        setInterval(this.getRandamPoint, this.props.interval)
    }

    render(){
        return <span style={{position: 'absolute', left: this.state.randPos.left, top: this.state.randPos.top }} className={ this.state.show ? "skill show" : "skill hidden" }>{this.props.skillName}</span>
    }

    fadeIn = () => {
        this.setState({show: true})
    }

    fadeOut = () => {
        this.setState({show: false})
    }

    getRandamPoint = () => {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const maxLeft = windowWidth - 100
        const maxTop = windowHeight - 100
    
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
        this.setState({randPos: {top:topPos, left:leftPos}, show: true})
        this.fadeIn()
        setTimeout(this.fadeOut, 3000)
      }
}

Skill.defaultProps  = {interval: 6000}

export default Skill