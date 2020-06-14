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
    Infomation: {
      "Info": [
        {
          "date": "",
          "title": ""
        }
      ],
      "ingInfo": [
        {
          "date": "",
          "subject": "",
          "title": ""
        }
      ]
    },
    right:[
      {
      "title": "중요공지",
      "img": "http://cyber.gachon.ac.kr/theme/image.php/coursemosv2/core/1591173085/t/switch_minus",
      "list": [
        {
          "img": "http://cyber.gachon.ac.kr/theme/image.php/coursemosv2/theme_coursemosv2/1591173085/layout/block-notices",
          "title": "과거 강좌(수강 강좌) 확인방법",
          "date": "2016-09-22 11:26"
        },
        {
          "img": "http://cyber.gachon.ac.kr/theme/image.php/coursemosv2/theme_coursemosv2/1591173085/layout/block-notices",
          "title": "사이버캠퍼스 모바일 APP 사용 안내",
          "date": "2016-09-23 17:28"
        }
      ]
    },
  ]
}
      
  getMainList = async() =>{
    // axios => https 문제 => local data 사용
    // const data = await axios.get("http://recruit.dothome.co.kr/data.json");
    // this.setState({MainList:data.data.MainList, Infomation:data.data.Infomation, right:data.data.right})
    this.setState({MainList:arrayData.MainList, Infomation:arrayData.Infomation, right:arrayData.right})
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
                MainList = {this.state.MainList} Infomation ={this.state.Infomation} right={this.state.right}
              />
            </div>
            <Footer/>
      </div>
    );
  }
}

export default App;
