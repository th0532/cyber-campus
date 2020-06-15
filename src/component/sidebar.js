import React, {useState, useEffect} from "react";
import "./sidebar.css"

const Sidebar = () =>{

    const state = [
            {
                id:"0",
                isActive: "block",
                list:"My Page",
                item:["Dashboard","파일관리","진행강좌 관리","개인정보 수정"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"mypage"
            },
            {
                id:"1",
                isActive: "none",
                list:"교과 과정",
                item:["나의강좌","조교/청강생 신청"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"curriculum"
            },
            {
                id:"2",
                isActive: "none",
                list:"가천 MOOC",
                item:["수강강좌","수강 신청", "수료 확인"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"gachonMooc"
            },
            {
                id:"3",
                isActive: "none",
                list:"비정규강좌",
                item:[],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"irregularCourses",
                link:"#"
            },
            {
                id:"4",
                isActive: "none",
                list:"커뮤니티",
                item:[],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"community",
                link:"#"
            },
            {
                id:"5",
                isActive: "none",
                list:"GOOD 강좌",
                item:["교수","학생"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"goodCourse"
            },
            {
                id:"6",
                isActive: "none",
                list:"Tips",
                item:["Teaching Tips","Learning Tips"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"tips"
            },
            {
                id:"7",
                isActive: "none",
                list:"이용안내",
                item:["공지사항", "FAQ", "Q&A", "자료실", "매뉴얼"],
                img:"http://recruit.dothome.co.kr/img/side_menu.png",
                menuKey:"useInfo"
            }];

    const [mypageActive, setMypage] = useState(false);
    const [curriculumActive, setcurriculum] = useState(false);
    const [gachonMoocActive, setGachonMooc] = useState(false);
    const [goodCourseActive, setGoodCourse] = useState(false);
    const [tipsActive, setTips] = useState(false);
    const [useInfoActive, setUseInfo] = useState(false);

    const handleDisplay = (type) =>{
        let menu = document.querySelector("."+type+ " ul");
        
        if (type === "mypage"){
            if (mypageActive){
                menu.className = "none";
                setMypage(false);
            }else{
                menu.className = "wrap_item block";
                setMypage(true);
            }
        }else if (type === "curriculum"){
            if (curriculumActive){
                menu.className = "none";
                setcurriculum(false);
            }else{
                menu.className = "wrap_item block";
                setcurriculum(true);
            }
        }else if (type === "gachonMooc"){
            if (gachonMoocActive){
                menu.className = "none";
                setGachonMooc(false);
            }else{
                menu.className = "wrap_item block";
                setGachonMooc(true);
            }
        }else if (type === "goodCourse"){
            if (goodCourseActive){
                menu.className = "none";
                setGoodCourse(false);
            }else{
                menu.className = "wrap_item block";
                setGoodCourse(true);
            }
        }else if (type === "tips"){
            if (tipsActive){
                menu.className = "none";
                setTips(false);
            }else{
                menu.className = "wrap_item block";
                setTips(true);
            }
        }else if (type === "useInfo"){
            if (useInfoActive){
                menu.className = "none";
                setUseInfo(false);
            }else{
                menu.className = "wrap_item block";
                setUseInfo(true);
            }
        }
    }

        return (
            <div className = "sidebar">
                <ul className="wrap">
                    {state.map((list, index) =>
                    <li className = {list.menuKey} id={list.id} key = {index}>
                        {list.link
                            ?<a href={list.link}>
                            <div className="list_title">
                                    <img src={list.img} alt="navi_img"/>
                                    <span>{list.list}</span>
                            </div>
                            </a>
                            :<div className="list_title"  onClick = {()=> handleDisplay(list.menuKey)}>
                                <img src={list.img} alt="navi_img"/>
                                <span>{list.list}</span>
                            </div>
                        }
                        {
                        <ul className={"wrap_item none"} >
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

