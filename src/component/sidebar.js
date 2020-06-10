import React from "react";
import "./sidebar.css"
class Sidebar extends React.Component{
    state = {
            mypage:{
                isActive: false,
                menu:["Dashboard","파일관리","진행강좌 관리","개인정보 수정"]
            },
            curriculum:{
                isActive: false,
                menu:["나의강좌","조교/청강생 신청"]
            },
            gachonMooc:{
                isActive: false,
                menu:["나의강좌","조교/청강생 신청"]
            },
            irregular:{
                isActive: false,
                menu:["나의강좌","조교/청강생 신청"]
            },
            community:{
                isActive: false,
                menu:["나의강좌","조교/청강생 신청"]
            },
            good:{
                isActive: false,
                menu:["나의강좌","조교/청강생 신청"]
            },
            tips:{
                isActive: false,
                menu:["나의강좌","조교/청강생 신청"]
            },
            info:{
                isActive: false,
                menu:["나의강좌","조교/청강생 신청"]
            }
      }
    render(){
        // let list = document.querySelector(".wrap li");
        // list.onClick.bind(this){
        //     alert("asd");
        // }        
        return (
            <div className = "sidebar">
                <ul className="wrap">
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>mypage</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.mypage.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>교과 과정</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.curriculum.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>가천 MOOC</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.gachonMooc.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>비정규 강좌</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.irregular.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>커뮤니티</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.community.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>GOOD 강좌</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.good.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>Tips</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.tips.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                    <li><img src={"http://recruit.dothome.co.kr/img/side_menu.png"} /><span>이용안내</span>
                        <ul className={"wrap_item "} >
                            {
                                this.state.info.menu.map((item, index)=>
                                <li key={index}><a href = "#">{item}</a></li>
                                )
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;

