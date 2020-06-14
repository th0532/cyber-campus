import React from "react";
import "./content.css";
    class Content extends React.Component{
        render(props){
            return(
                <div className="content_fakemargin">
                    <div className="content">
                        <div className="rightMenu">
                            <RightMenu right={this.props.right} />
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
                                    <Information Infomation={this.props.Infomation}/> 
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    class MainList extends React.Component{
        render(props){
            console.log(this.props.MainList)

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
        state = {
            Infomation_gubun:true,
            infoColor:"active",
            ingInfoColor:"disabled"
        }
        render(props){
            let Infomation_gubun = (gubun) =>{
                if(gubun === "Info"){
                    this.setState({Infomation_gubun:true, infoColor:"active", ingInfoColor:"disabled"})
                }else{
                    this.setState({Infomation_gubun:false, infoColor:"disabled", ingInfoColor:"active"})
                }
            }
            return (
                <div className = "infomation">
                    <div className="infomation_title">
                        <ul>
                            <li className={this.state.infoColor} onClick={() => Infomation_gubun("Info")}>공지사항</li>
                            <li className={this.state.ingInfoColor} onClick={() =>Infomation_gubun("ingInfo")}>진행 강좌 공지</li>
                            <li className="">더보기</li>
                        </ul>
                    </div>
                    {this.state.Infomation_gubun
                        ?<InformationList Infomation={this.props.Infomation.Info}/>
                        :<InformationList Infomation={this.props.Infomation.ingInfo}/>
                    }
                </div>
            )
        }
    }
    class InformationList extends React.Component{
        render(props){
            return (
                <div class="infomation_list">
                    <ul>
                    {this.props.Infomation.map((data,index) =>( 
                        <li key ={index}><p>{data.subject}</p><a href="#">{data.title} <span>{data.date}</span></a></li>
                    ))}
                    </ul>
                </div>
            )
        }
    }

    class RightMenu extends React.Component{
        state = {
            display:"block"
        }
        render(props){
            console.log(this.props.right)
            let rightHide = () => {
                if (this.state.display === "block"){
                    this.setState({
                        display:"none"
                    })
                }else{
                    this.setState({
                        display:"block"
                    })
                }
                
            }
            return(
                <div>
                    {this.props.right.map((data, index) =>(
                    <div key={index} className="right_div">
                        <div className="right_title">
                            <button onClick={rightHide}><img src={data.img} alt="bar"/></button>
                            <h4>{data.title}</h4>
                        </div>
                        <div className="right_item">
                            <ul className={this.state.display}>
                                {data.list.map((data, index) =>(
                                    <li key ={index}><img src={data.img} alt=""/> 
                                        <div className="right_info_item_title">
                                            <h5>{data.title.slice(0,17)} </h5>
                                            <p>{data.date} </p>
                                        </div>
                                    </li>
                                ))}
                                <li className="etc">더보기</li>
                            </ul>
                        </div>
                    </div>
                    ))}
                    
                </div>
            )
        }
    }

    class RightItem extends React.Component{
        render(props){
            console.log(this.props)
            return(
                <div className="right_item">
                    <ul className="none">
                        {this.props.list.map((data, index) =>(
                            <li key ={index}><img src={data.img} alt=""/> 
                                <div className="right_info_item_title">
                                    <h5>{data.title} </h5>
                                    <p>{data.date} </p>
                                </div>
                            </li>
                        ))}
                        <li className="etc">더보기</li>
                    </ul>
                </div>
            )
        }
    }

export default Content; 
