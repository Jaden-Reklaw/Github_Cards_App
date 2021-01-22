import React from 'react';
import './App.css';

import CardList from './CardList';
import Form from './Form';

//Uncomment if you wanna assign some data beforehand to profiles state
// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

class App extends React.Component {
  //Two ways to get state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   }
  // }
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    console.log('App', profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <Form addProfile={this.addNewProfile} /><br />
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
  
}

export default App;
