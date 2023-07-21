import React  from 'react';

const Header = ({onPageMove, click}) => {
    return (
        <header className="Header">
            <div className="home_img_wrapper" onClick={()=>onPageMove('home')}>
                <img src={process.env.PUBLIC_URL+'image/home.png'} />
                <h2>포트폴리오</h2>
            </div>
            <div className="nav_list">
                <ul>
                    <li onClick={() =>onPageMove('about')}
                        className={click==="about"?"click":""}
                    >
                        자기소개
                    </li>
                    <li onClick={() =>onPageMove('skill')}
                        className={click==="skill"?"click":""}
                    >
                        경력기술
                    </li>
                    <li onClick={() =>onPageMove('project')}
                        className={click==="project"?"click":""}
                    >
                        프로젝트
                    </li>
                    <li onClick={() =>onPageMove('gitHub')}>깃허브</li>
                </ul>
            </div>            
        </header>
    )
}

export default Header;