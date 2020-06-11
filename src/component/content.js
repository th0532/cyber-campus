import React from "react";
import "./content.css";

    class Content extends React.Component{
        render(){
            return(
                <div className="content_fakemargin">
                    <div className="content">
                        <div className="main_fakemargin">
                            <div className="main_wrap">
                                <div className="explane">
                                    <h3 className="title_color">강좌 전체보기 ▼</h3>
                                    <span>화살표를 누르면 지난 학기 강좌 등을 볼 수 있습니다.</span>
                                    <a className="setting">▣</a>
                                </div>
                                <MainList img={"http://recruit.dothome.co.kr/img/profile.png"} type1={"비정규"} type1Class={"TypePurple"} subject={"2020-1 ‘취·창업 진로세미나’ 8주차(입사서류/면접 완전정복 특강) 강좌 "} professor={"취업지원팀 / 박윤주"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/professor1.png"} type1={"교과"} type1Class={"TypeGreen"} type2={"글로벌"} type2Class={"TypeWhite"} subject={"알고리즘 (08095_003)"} professor={"김우성"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/professor2.png"} type1={"교과"} type1Class={"TypeGreen"} type2={"글로벌"} type2Class={"TypeWhite"} subject={"웹프로그래밍 (09079_003)"} professor={"이복기"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/profile.png"} type1={"교과"} type1Class={"TypeGreen"} type2={"글로벌"} type2Class={"TypeWhite"} subject={"리눅스 (10888_007)"} professor={"유현"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/professor3.png"} type1={"교과"} type1Class={"TypeGreen"} type2={"글로벌"} type2Class={"TypeWhite"} subject={"C++ (11581_002)"} professor={"김석수"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/professor4.png"} type1={"교과"} type1Class={"TypeGreen"} type2={"글로벌"} type2Class={"TypeWhite"} subject={"창업과 마케팅 (12735_001)"} professor={"이상윤"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/professor5.png"} type1={"교과"} type1Class={"TypeGreen"} type2={"글로벌"} type2Class={"TypeWhite"} subject={"웹 프로그래밍 입문 (13056_001)"} professor={"황희정"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/professor6.png"} type1={"교과"} type1Class={"TypeGreen"} type2={"글로벌"} type2Class={"TypeWhite"} subject={"취·창업 진로세미나 (13129_089)"} professor={"강운구"} />
                                <MainList img={"http://recruit.dothome.co.kr/img/profile.png"} type1={"비정규"} type1Class={"TypePurple"} subject={"2020년도 재학생 대상 폭력예방교육(성폭력⋅가정폭력)(G) (1_prevention)"} professor={"가천인권센터"} />
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
        render(){
            return(
                <div className="mainList">
                    <ul>
                        <li>
                            <img src ={this.props.img}/>
                            <div className ="Type">
                                <p className={this.props.type1Class}>{this.props.type1}</p>
                                <p className={this.props.type2Class}>{this.props.type2}</p>
                            </div>
                            <div className="list_info">
                                <h4>{this.props.subject}</h4>
                                <p>{this.props.professor}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        }
    }


export default Content; 