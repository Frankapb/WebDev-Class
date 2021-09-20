import React, { Component } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai'
import { RiEditBoxFill } from 'react-icons/ri'
// import alertify from 'alertifyjs'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.todoInputRef = React.createRef();
        this.todoList = React.createRef();

    }


    // delete all todos
    deleteAll = () => {
        console.log('hello delete all', this.todoList.current.children)
        Array.from(this.todoList.current.children).map(li => {
            console.log(li)
            li.remove()
        })
        localStorage.setItem('todos', '[]')
    }



    // load all todos and print into ui
    loadTodos = () => {

        let todos = JSON.parse(localStorage.getItem('todos'))

        this.setState({
            todos: todos
        })
    }

    componentDidMount() {

        this.loadTodos()
        console.log('hello component')

    }




    addTodo = () => {
        console.log('hello add todo')
        console.log(this.todoInputRef.current.value)
        // empty array of state todos [current]
        let temp = this.state.todos;
        temp.push(this.todoInputRef.current.value)
        //   console.log(temp)
        // save data in state> todos
        this.setState({
            todos: temp
        })
        // alertify.confirm('Are you sure?', function () { alertify.success('Ok') });

        localStorage.setItem('todos', JSON.stringify(temp))
    }

    deleteTodo = (e) => {
        // console.log(typeof e.target.parentElement.parentElement.getAttribute('dataid'))
        let todoId = Number(e.target.parentElement.parentElement.getAttribute('dataid'))

        // todos array
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.map((todo, index) => {

            if (index === todoId) {
                console.log(todo)
                // deleted clicked item from array
                todos.splice(index, 1)
            }
        })

        // updated array need to be set again in localstroage
        localStorage.setItem('todos', JSON.stringify(todos))
        //   console.log(e.target.parentElement.parentElement.parentElement.parentElement)
        e.target.parentElement.parentElement.parentElement.parentElement.remove()

    }


    render() {
        return (
            <Container>
                <Card className="row">
                    <div className="card-header">Todo List</div>
                    <div className="card-body">
                        <Form id="todo-form" name="form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input className="form-control" ref={this.todoInputRef} autoComplete="off" name="todo" id="todo" placeholder="Enter a todo" />
                                    <hr />
                                </div>
                                <div className="form-group col-md-4">
                                    <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
                                        <input className="form-control" type="text" id="datepicker-input" aria-label="Date-Time" />
                                        <span className="tui-ico-date"></span>
                                    </div>
                                    <div id="wrapper" style={{ 'marginTop': '-1px' }}></div>

                                </div>
                            </div>
                            <Button variant={"danger"} onClick={this.addTodo} >Add Todo</Button>
                        </Form>
                    </div>

                    <div className="card-body">
                        <hr />
                        <h5 className="card-title" id="tasks-title">Todos</h5>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input className="form-control" type="text" name="filter" id="filter" placeholder="Search a todo" />
                            </div>
                        </div>
                        <hr />
                        <ul className="list-group" ref={this.todoList}>

                            {
                                this.state.todos.map((todo, index) => (
                                    // render html with todo title here
                                    <li key={index} className="list-group-item d-flex justify-content-between">
                                        {todo}
                                        {console.log(this.state.todos)}
                                        {/* parent of parent of parent */}
                                        <div>
                                            <p className="delete-item d-inline" onClick={(e) => this.deleteTodo(e)} dataid={index} ><AiFillDelete /></p>
                                            <p className="update-item d-inline"><RiEditBoxFill /></p>
                                        </div>

                                    </li>
                                    // render html with todo title here
                                ))
                            }

                        </ul>
                        <hr />
                        <Button id="clear-todos" variant={'dark'} onClick={this.deleteAll}>Delete All Todos</Button>
                    </div>
                </Card>
            </Container>
        );
    }
}

export default TodoList;