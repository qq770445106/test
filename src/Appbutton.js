import React from 'react'

class Appbutton extends React.Component {

  showAll () {
    let all = this.refs.all.value;
    this.props.SubmitCheckVal(all);
  }

  showWaiting () {
    let waiting = this.refs.waiting.value;
    this.props.SubmitCheckVal(waiting);
  }

  showComplete () {
    let complete = this.refs.complete.value
    this.props.SubmitCheckVal(complete);
  }

  render () {
    return (
      <div>
        <h2></h2>
        <button
          value='1'
          ref='all'
          onClick={this.showAll.bind(this)}
        >
          所有任务
        </button>
        <button
          value='2'
          ref='waiting'
          onClick={this.showWaiting.bind(this)}
        >
          待完成
        </button>
        <button
          value='3'
          ref='complete'
          onClick={this.showComplete.bind(this)}
        >
          已完成
        </button>
      </div>
    )
  }
}
export default Appbutton;