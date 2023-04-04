import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
      super(props)
    
      this.state = {value:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value:event.target.value});
    }
    handleSubmit(event) {
        alert("The Name was successfully Submitted By:"+this.state.value);
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type='text' value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type='submit' value='Submit'></input>
               </form> 
            </div>
        );
    }
}

export default Input;
