import React  from 'react';

const Header = ({onPageMove}) => {
    return (
        <header className="Header">
            <div className="home_img_wrapper" onClick={()=>onPageMove('home')}>
                <img src={process.env.PUBLIC_URL+'image/home.png'} />
                <h2>포트폴리오</h2>
            </div>
            <div className="nav_list">
                <ul>
                    <li onClick={() =>onPageMove('about')}>자기소개</li>
                    <li onClick={() =>onPageMove('skill')}>경력기술</li>
                    <li onClick={() =>onPageMove('project')}>프로젝트</li>
                    <li onClick={() =>onPageMove('etc')}>기타</li>
                </ul>
            </div>            
        </header>
    )
}

export default Header;