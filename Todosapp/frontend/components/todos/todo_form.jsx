import React from 'react';


class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            id: Math.floor(Math.random() * 100000)
        }
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateBody(e){
        this.setState({ body: e.currentTarget.value });
    }

    updateTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: Math.floor(Math.random() * 100000),
            title: "",
            body: ""
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title:
                    <input type="text" onChange={this.updateTitle} value={this.state.title}/>
                </label>
                <br />
                <label>Body:
                   <input type="text" onChange={this.updateBody} value={this.state.body}/>
                </label>
            <input type="submit" value="Add Todo Item"/> 
            </form>
        )
    }
}

export default TodoForm;