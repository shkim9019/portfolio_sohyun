import React, {forwardRef} from 'react';

const About = React.forwardRef((props,ref) => {
    return (
        <div ref={ref} className="About">
            <div className="intro">
                <div className="leftInfo">
                    <img src={process.env.PUBLIC_URL+'image/person.png'}/>
                </div>            
                <div className="rightInfo">
                    <div className="rightTop">
                        <h1>리액트 개발자 김소현입니다. </h1>
                        <p>
                            안녕하세요. 저는 김소현입니다. 
                            안녕하세요. 저는 김소현입니다. 
                            안녕하세요. 저는 김소현입니다. 
                            안녕하세요. 저는 김소현입니다. 
                            안녕하세요. 저는 김소현입니다. 
                        </p>
                    </div>
                    <div className="rightBottom">
                        <ul>
                            <li><span>이름 : </span>김소현</li>
                            <li><span>나이 : </span>1996.03.07</li>
                            <li><span>번호 : </span>010-1234-5678</li>
                            <li><span>주소 : </span>서울시 은평구</li>
                            <li><span>이메일 : </span>shkim9019@naver.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default About;