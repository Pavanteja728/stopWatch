// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    onPress: false,
    elapsedTime: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({
      onPress: false,
      elapsedTime: 0,
    })
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({
      onPress: false,
    })
  }

  update = () => {
    this.setState(prevState => ({
      elapsedTime: prevState.elapsedTime + 1,
    }))
  }

  startTimer = () => {
    this.timer = setInterval(this.update, 1000)
    this.setState({
      onPress: true,
    })
  }

  renderMin = () => {
    const {elapsedTime} = this.state

    const min = Math.floor(elapsedTime / 60)

    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  renderSec = () => {
    const {elapsedTime} = this.state

    const sec = Math.floor(elapsedTime % 60)

    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  render() {
    const {onPress} = this.state
    const time = `${this.renderMin()}:${this.renderSec()}`
    return (
      <div className="container">
        <div className="bgCont">
          <h1 className="head">Stopwatch</h1>
          <div className="cardCont">
            <div className="time">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="times">{time}</h1>
            <div className="buttons">
              <button
                type="button"
                className="start"
                onClick={this.startTimer}
                disabled={onPress}
              >
                Start
              </button>
              <button type="button" className="stop" onClick={this.stopTimer}>
                Stop
              </button>
              <button type="button" className="reset" onClick={this.resetTimer}>
                {' '}
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
