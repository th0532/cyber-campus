import React from 'react';
import axios from "axios";
import './App.css';
import Top from './component/top';
import Sidebar from './component/sidebar';
import Content from './component/content';

class App extends React.Component {
  state = {
    MainList:[],
    Info:[],
    ingInfo:[]
  }
  getMainList = async() =>{
    const data = await axios.get("http://recruit.dothome.co.kr/data.json");
    this.setState({MainList:data.data.MainList, Info:data.data.Info, ingInfo:data.data.ingInfo})
  }
  
  componentDidMount(){
    this.getMainList();
  }

  render(){
    return (
      <div className="App">
          <Top/>
          <div className="container">
            <Sidebar/>
            <Content
            MainList = {this.state.MainList} Info ={this.state.Info} ingInfo = {this.state.ingInfo}
            />
          </div>
      </div>
    );
  }
}

export default App;
