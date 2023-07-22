import React, {forwardRef} from 'react';
const About = React.forwardRef((props,ref) => {
    return (
            <div ref={ref} className="About">
                <div className="intro">
                    <div className="leftInfo">
                        <img src={process.env.PUBLIC_URL+'image/myPhoto.jpg'}/>
                    </div>            
                    <div className="rightInfo">
                        <div className="rightTop">
                            <h1>
                                어제보다 오늘 더 <br />
                                <span className='grow'>◜성장◞ </span>하는 <br />
                                <span className='myName'>김소현</span> 입니다.
                            </h1>
                            <p>
                                안녕하세요. 저는 리액트 프론트 개발자를 희망하는 김소현입니다. <br />
                                2년 가까이 JAVA 개발자로 경력을 쌓았습니다. <br />근무 중 리액트를 접할 기회가 생겼고 이후 흥미가 생겨 개인적으로 공부하였습니다.<br /> 
                                어려운 일도 함께 고민하고 소통해서 해결해 나가는 활발하고 열정 넘치는 회사에 근무하고 싶습니다.
                                
                            </p>
                        </div>
                        <div className="rightBottom">
                            <ul>
                                <li><span>이름 : </span>김소현</li>
                                <li><span>나이 : </span>1996.03.07</li>
                                <li><span>번호 : </span>010-7473-7870</li>
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