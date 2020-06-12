import React from "react";
import "./footer.css";
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="policy">
                    <a>개인정보처리방침</a>
                </div>
                <div className="tell_info">
                    <span>13120 경기도 성남시 수정구 성남대로 1342 교수학습개발센터</span>
                    <span className="telePhone">Tel : 031-750-6956, 6955</span>
                </div>
            </div>
        )
    }
}

export default Footer;