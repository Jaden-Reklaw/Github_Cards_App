import axios from 'axios';
import React from 'react';

class Form extends React.Component {
    state = {
        userName: '',
    }

    handleChange = (event) => {
        this.setState({userName: event.target.value})
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.addProfile(response.data);
        console.log(this.state.userName);
        this.setState({userName: ''});
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        placeholder="Github Username" 
                        required
                    />
                    <button>Add Card</button>
                </form>
            </div>
        );
    }
}

export default Form;
