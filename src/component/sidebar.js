import React from "react";
import "./sidebar.css"
class Sidebar extends React.Component{
    state = {
        isActive:true
    }
    listClick = () =>{
        alert("구현중입니다.")
    }
    render(){
        const menu = [
            {
                isActive: false,
                list:"My Page",
                item:["Dashboard","파일관리","진행강좌 관리","개인정보 수정"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                isActive: false,
                list:"교과 과정",
                item:["나의강좌","조교/청강생 신청"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                isActive: false,
                list:"가천 MOOC",
                item:["수강강좌","수강 신청", "수료 확인"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                isActive: false,
                list:"비정규강좌",
                item:[],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                isActive: false,
                list:"커뮤니티",
                item:[],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                isActive: false,
                list:"GOOD 강좌",
                item:["교수","학생"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                isActive: false,
                list:"Tips",
                item:["Teaching Tips","Learning Tips"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                isActive: false,
                list:"이용안내",
                item:["공지사항", "FAQ", "Q&A", "자료실", "매뉴얼"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            }]
        return (
            
            <div className = "sidebar">
                <ul className="wrap">
                    {menu.map((list, index) =>
                    <li id={list.id} key = {index} onClick={this.listClick}>
                        <img src={list.img}/>
                        <span>{list.list}</span>
                        {
                        <ul className={"wrap_item"} >
                        {
                            list.item.map((item, index)=>
                            <li key={index}><a href = "#">{item}</a></li>
                            )
                        }
                        </ul>
                        }
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Sidebar;

