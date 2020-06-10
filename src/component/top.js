import React from "react";
import "./top.css";

class Top extends React.Component{
    render(){
        return (
            <div className="top">
                <div className="logo">
                    <img src={"http://cyber.gachon.ac.kr/theme/coursemosv2/pix/layout/logo.png"}/>
                </div>
                <div className="nav">
                    <ul>
                        <li className="white">이태희</li>
                        <li><img src={"http://recruit.dothome.co.kr/img/profile.png"} width="35px" height="35px"/></li>
                        <li><img src={"http://recruit.dothome.co.kr/img/nav_menu.png"}/></li>
                        <li><img src={"http://recruit.dothome.co.kr/img/nav_menu.png"}/></li>
                        <li><img src={"http://recruit.dothome.co.kr/img/nav_menu.png"}/></li>
                        <li><img src={"http://recruit.dothome.co.kr/img/nav_menu.png"}/></li>
                        <li className="logout"><a href="#">로그아웃</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Top;