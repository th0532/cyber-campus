import React from "react";
import "./content.css";
    class Content extends React.Component{
        render(props){
            return(
                <div className="content_fakemargin">
                    <div className="content">
                        <div className="rightMenu">
                            <RightMenu importantInfo={this.props.importantInfo} intended={this.props.intended} />
                        </div>
                        <div className="main_fakemargin">
                            <div className="main_wrap">
                                <div className="subject">
                                    <div className="subject_title">
                                        <h3 className="title_color">강좌 전체보기 ▼</h3>
                                        <span>화살표를 누르면 지난 학기 강좌 등을 볼 수 있습니다.</span>
                                        <a href ="#" className="setting"><img src={"http://recruit.dothome.co.kr/img/setting.png"} alt="setting"/></a>
                                    </div>
                                        <MainList MainList = {this.props.MainList}/>
                                </div>
                                <Information Information={this.props.Info}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
    class MainList extends React.Component{
        render(props){
            return(
                <div className="mainList">
                    <ul>
                        {this.props.MainList.map((data,index) =>(
                        <li key={index}>
                            <img src ={data.img} alt="professor"/>
                            <div className ="Type">
                                <p className={data.type1Class}>{data.type1}</p>
                                <p className={data.type2Class}>{data.type2}</p>
                            </div>
                            <div className="list_info">
                                <h4>{data.subject}</h4>
                                <p>{data.professor}</p>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            )
        }
    }

    class Information extends React.Component{
        render(props){
            return (
                <div className = "infomation">
                    <div className="infomation_title">
                        <ul>
                            <li className="infomation_title_active">공지사항</li>
                            <li className="infomation_title_disabled">진행 강좌 공지</li>
                            <li className="">더보기</li>
                        </ul>
                    </div>
                    <div class="infomation_list">
                        <ul>
                        {this.props.Information.map((data,index) =>( 
                            <li key ={index}><a href="#">{data.title} <span>{data.date}</span></a></li>
                        ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }

    class RightMenu extends React.Component{
        render(props){
            console.log(this.props.importantInfo, this.props.intended)
            return(
                <div>
                    <div className="important_info">
                        <div className="important_info_title">
                            <button><img src={"http://cyber.gachon.ac.kr/theme/image.php/coursemosv2/core/1591173085/t/switch_minus"} alt="bar"/></button>
                            <h4>중요공지</h4>
                        </div>
                        <div className="important_info_item">
                            <ul>
                                {this.props.importantInfo.map((data, index) =>(
                                    <li key ={index}><img src={data.img} alt=""/> 
                                        <div className="important_info_item_title">
                                            <h5>{data.title.slice(0,15)}... </h5>
                                            <p>{data.date} </p>
                                        </div>
                                    </li>
                                ))}
                                <li className="etc">더보기</li>
                            </ul>
                        </div>
                    </div>
                    <div className="intended">
                        <div className="intended_info_title">
                            <button><img src={"http://cyber.gachon.ac.kr/theme/image.php/coursemosv2/core/1591173085/t/switch_minus"} alt="bar"/></button>
                            <h4>예정된 할일</h4>
                        </div>
                        <div className="intended_info_item">
                            <ul>
                                {this.props.intended.map((data, index) =>(
                                    <li key ={index}><img src={data.img} alt=""/> 
                                        <div className="intended_info_item_title">
                                            <h5>{data.title} </h5>
                                            <p>{data.date} </p>
                                        </div>
                                    </li>
                                ))}
                                <li className="etc">17 일정 더 보기</li>
                            </ul>
                        </div>
                    </div>
                    <div className="allIntended">
                        <div className="allIntended_info_title">
                                <button><img src={"http://cyber.gachon.ac.kr/theme/image.php/coursemosv2/core/1591173085/t/switch_minus"} alt="bar"/></button>
                                <h4>전체 할일</h4>
                            </div>
                            <div className="allIntended_info_item">
                               <p>신규 알림 내용이 없습니다.</p>
                               <button>모두 보기</button>
                            </div>
                    </div>
                </div>
            )
        }
    }
export default Content; 