import { Component } from "react";
import "./App.css";
import API from "./utils/api";
import Table from "./components/Table";
class App extends Component {
  state = {
    users: [],
    currentUsers: [],
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    API.getUsers().then((res) => {
      this.setState({
        users: res.data.results,
        currentUsers: res.data.results.slice(0,10),
      });
    });
  };
  render() {
    return (
      <div className="app">
        <label name="filter-input">filter by user name</label>
        <input id="filter-input" onChange={(event)=>{
          const query=event.target.value.toLowerCase()
          const getLowerFirst=(user)=>{return user.name.first.toLowerCase()}
          const getLowerLast=(user)=>{return user.name.last.toLowerCase()}
          this.setState({
            currentUsers: this.state.users.filter((user)=>{
              return getLowerFirst(user).includes(query) || getLowerLast(user).includes(query)
            })
          })
        }}/>
        <Table users={this.state.currentUsers} />
      </div>
    );
  }
}

export default App;
