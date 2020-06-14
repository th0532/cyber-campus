import React, {useState} from "react";
import "./sidebar.css"

const Sidebar = () =>{

    const state = [
            {
                id:"0",
                isActive: "block",
                list:"My Page",
                item:["Dashboard","파일관리","진행강좌 관리","개인정보 수정"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                id:"1",
                isActive: "none",
                list:"교과 과정",
                item:["나의강좌","조교/청강생 신청"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                id:"2",
                isActive: "none",
                list:"가천 MOOC",
                item:["수강강좌","수강 신청", "수료 확인"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                id:"3",
                isActive: "none",
                list:"비정규강좌",
                item:[],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                id:"4",
                isActive: "none",
                list:"커뮤니티",
                item:[],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                id:"5",
                isActive: "none",
                list:"GOOD 강좌",
                item:["교수","학생"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                id:"6",
                isActive: "none",
                list:"Tips",
                item:["Teaching Tips","Learning Tips"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            },
            {
                id:"7",
                isActive: "none",
                list:"이용안내",
                item:["공지사항", "FAQ", "Q&A", "자료실", "매뉴얼"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png"
            }];

    const [display, setIsActive] = useState("none");
    const handleDisplay = () =>{
        if(display==="block"){
            setIsActive("none");
        }else{
            setIsActive("block");
        }
    }
        return (
            <div className = "sidebar">
                <ul className="wrap">
                    {state.map((list, index) =>
                    <li id={list.id} key = {index} onClick = {()=> handleDisplay()}>
                        <div className="list_title">
                            <img src={list.img} alt="navi_img"/>
                            <span>{list.list}</span>
                        </div>
                        {
                        <ul className={"wrap_item "+ display} >
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


// class Sidebar extends React.Component{
//     state = [
//         {
//             id:"0",
//             isActive: "block",
//             list:"My Page",
//             item:["Dashboard","파일관리","진행강좌 관리","개인정보 수정"],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         },
//         {
//             id:"1",
//             isActive: "none",
//             list:"교과 과정",
//             item:["나의강좌","조교/청강생 신청"],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         },
//         {
//             id:"2",
//             isActive: "none",
//             list:"가천 MOOC",
//             item:["수강강좌","수강 신청", "수료 확인"],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         },
//         {
//             id:"3",
//             isActive: "none",
//             list:"비정규강좌",
//             item:[],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         },
//         {
//             id:"4",
//             isActive: "none",
//             list:"커뮤니티",
//             item:[],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         },
//         {
//             id:"5",
//             isActive: "none",
//             list:"GOOD 강좌",
//             item:["교수","학생"],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         },
//         {
//             id:"6",
//             isActive: "none",
//             list:"Tips",
//             item:["Teaching Tips","Learning Tips"],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         },
//         {
//             id:"7",
//             isActive: "none",
//             list:"이용안내",
//             item:["공지사항", "FAQ", "Q&A", "자료실", "매뉴얼"],
//             img:"http://recruit.dothome.co.kr/img/side_menu.png"
//         }];
//         maviDisplay = (id) => {
//             // alert(this.state[id].isActive);
//             // const {data} = this.state[id].isActive;
//             // if (this.state[id].isActive === "block"){
//             //     this.setState({data:"none"})
//             // }
//             console.log(this.state[id].isActive);
//         }
//     render(){
//         return (
//             <div className = "sidebar">
//                 <ul className="wrap">
//                     {this.state.map((list, index) =>
//                     <li id={list.id} key = {index}>
//                         <div className="list_title" onClick = {()=> this.maviDisplay(list.id)}>
//                             <img src={list.img} alt="navi_img"/>
//                             <span>{list.list}</span>
//                         </div>
//                         {
//                         <ul className={"wrap_item "+ list.isActive} >
//                         {
//                             list.item.map((item, index)=>
//                             <li key={index}><a href = "#">{item}</a></li>
//                             )
//                         }
//                         </ul>
//                         }
//                     </li>
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

export default Sidebar;

