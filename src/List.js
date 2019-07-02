import React, { Component } from 'react'


class List extends Component {
  deleteTask(task) {
    this.props.deleteTask(task)
  }
  completeTask(task) {
    this.props.completeTask(task)
  }
  render() {
    var value = this.props.checkVal;
    return (
      <ul>
        {
          this.props.data.map(element => {
            if(value == '1'){
              return (
                <li className="List">
                  <input type="checkbox"
                         checked = {element.status === 1}
                  onChange={this.completeTask.bind(this,element.task)}
                  />

                  <span style={{ textDecorationLine: element.status === 0 ? 'none' : 'line-through' }}>{element.task}</span>
                  <button className="delete" onClick={this.deleteTask.bind(this, element.task)}>删除</button>
                </li>)
            }
            if(value == '2' && element.status === 0){
              return (
                <li className="List">
                  <input type="checkbox"
                         checked = {element.status === 1}
                         onChange={this.completeTask.bind(this,element.task)}
                  />

                  <span style={{ textDecorationLine: element.status === 0 ? 'none' : 'line-through' }}>{element.task}</span>
                  <button className="delete" onClick={this.deleteTask.bind(this, element.task)}>删除</button>
                </li>)
            }
            if(value == '3' && element.status === 1){
              return (
                <li className="List">
                  <input type="checkbox"
                         checked = {element.status === 1}
                         onChange={this.completeTask.bind(this,element.task)}
                  />

                  <span style={{ textDecorationLine: element.status === 0 ? 'none' : 'line-through' }}>{element.task}</span>
                  <button className="delete" onClick={this.deleteTask.bind(this, element.task)}>删除</button>
                </li>)
            }
            }
          )}
      </ul>

    )
  }
}
export default List