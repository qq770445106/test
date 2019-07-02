import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Appbutton from './Appbutton'


class Text extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
      inputtext : '',
      checkVal : 1
    }
  }

  completeTask(task) {
    const TodoList = []
    this.state.list.forEach((element, index) => {
      if (element.task === task) {
        const item = this.state.list[index]
        TodoList.push(Object.assign(  item, {status: item.status === 0 ? 1 : 0}))
      } else {
        TodoList.push(element)
      }
      this.setState({
        list:TodoList
      })
    })
  }

  checkVal (e) {
    this.setState({checkVal:e});
  }
  changeText(e){
    this.setState({
      inputtext: e.target.value
    })
  }
  deleteTask(task){
      const data = this.state.list.filter(element => element.task !== task)
      this.setState({
        list: data
      })
  }
  deleteComplete(){
      const data = this.state.list.filter(element => element.status === 0)
      this.setState({
       list: data
      })
  }
  addTask(){
    let a = 0;
    this.state.list.forEach(element=> {
      if (element.task === this.state.inputtext) {
        a = 1;
      }
    })
    if(a == 0){
      if (!this.state.inputtext) return
      this.setState({
        list: [...this.state.list, {
          task: this.state.inputtext,
          status: 0
        }],
      })
    }}
  render(){
    return(
    <div>
      <header className={"header"}>Task Manager</header>
      <footer>
      <input type="text/javascript" value={this.state.inputtext} onChange={this.changeText.bind(this)} placeholder={"Task Name"}/>
      <button className={"add"} onClick={this.addTask.bind(this)}>add</button>
       <button className={"deleteComplete"} onClick={this.deleteComplete.bind(this)}>删除已经完成的任务</button>
      </footer>
      <List data={this.state.list}
            deleteTask={this.deleteTask.bind(this)}
            completeTask={this.completeTask.bind(this)}
            checkVal={this.state.checkVal}></List>
      <Appbutton
        SubmitCheckVal={this.checkVal.bind(this)}
      />
    </div>

  )
  }
}

ReactDOM.render(
  <Text />,
  document.getElementById('root')
)



