import React from "react";
import "./content.css";

    class Content extends React.Component{
        render(props){
            return(
                <div className="content_fakemargin">
                    <div className="content">
                        <div className="main_fakemargin">
                            <div className="main_wrap">
                                <div className="subject">
                                    <div className="subject_title">
                                        <h3 className="title_color">강좌 전체보기 ▼</h3>
                                        <span>화살표를 누르면 지난 학기 강좌 등을 볼 수 있습니다.</span>
                                        <a className="setting">▣</a>
                                    </div>
                                        <MainList MainList = {this.props.MainList}/>
                                </div>
                                <Information Information={this.props.Info}/>
                            </div>
                        </div>
                        <div className="rightMenu">
                            <h5 className="title_color">중요공지</h5>
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
                            <img src ={data.img}/>
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

export default Content; 
// {this.props.Information.Info.map((data,index) =>(
//     <li><a href="#">{data.title} <span>{data.date}</span></a></li>
// ))}