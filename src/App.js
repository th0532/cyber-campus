import React from 'react';
import axios from "axios";
import './App.css';
import Top from './component/top';
import Sidebar from './component/sidebar';
import Content from './component/content';
import Footer from './component/footer'
import arrayData from "./data.json";

class App extends React.Component {
  state = {
    MainList:[],
    Info:[],
    ingInfo:[],
    importantInfo:[],
    intended:[]
  }
  getMainList = async() =>{
    // axios => https 문제 => local data 사용
    // const data = await axios.get("http://recruit.dothome.co.kr/data.json");
    // this.setState({MainList:data.data.MainList, Info:data.data.Info, ingInfo:data.data.ingInfo, importantInfo:data.data.importantInfo, intended:data.data.intended})
    this.setState({MainList:arrayData.MainList, Info:arrayData.Info, ingInfo:arrayData.ingInfo, importantInfo:arrayData.importantInfo, intended:arrayData.intended})
  
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
              MainList = {this.state.MainList} Info ={this.state.Info} ingInfo = {this.state.ingInfo} importantInfo={this.state.importantInfo} intended={this.state.intended}
            />
          </div>
          <Footer/>

      </div>
    );
  }
}

export default App;
