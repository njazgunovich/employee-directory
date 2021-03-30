



import { Component } from 'react';
import './App.css';
import API from "./utils/api"
import Table from "./components/Table"
class App extends Component { 
  state = {
    users:[],
    currentUsers:[]
  }
  componentDidMount(){
    this.getUsers()
  }
  getUsers = ()=>{
    API.getUsers().then(res =>{
      console.log(res.data.results)
      this.setState({users:res.data.results,currentUsers:res.data.results})
    })
  }
    render(){
return (
  <div className="app">
  <Table users={this.state.users}/>
  </div>
)


    }
}

export default App;

