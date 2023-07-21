import React from 'react';

const SkillList = React.forwardRef(({skillYn, list},ref) => {
  return (
    <div className="Skill" ref={ref}>
      <h1>📖{skillYn==="Y"?"교육 및 경력":"프로젝트"}</h1>
      <div className="expInfo">
        {list.map((it)=>{
          return(
            <div key={it.key}>
              <span>
                <button>{it.startDt} ~ {it.endDt}</button>
                <h2>{it.name} <span> - {it.position}</span></h2>
              </span>
              <p>{it.info}</p>
            </div>
          )          
        })}
      </div>
      { skillYn==="Y" && <>
      <h1>📖보유 자격증</h1>
        <div className='skillLic'>
          <button>자동차 운전면허</button>
          <button>정보처리기사</button>
        </div>
      <h1>📖보유 기술</h1>
      <div className='skillInfo'>
        <a href="#;" className="banner_img">
          <img src={process.env.PUBLIC_URL+'image/cssImg.png'}/>
          <p className='hover_text'>CSS</p>
        </a>
        <a href="#;" className="banner_img">
          <img src={process.env.PUBLIC_URL+'image/htmlImg.png'}/>
          <p className='hover_text'>HTML</p>
        </a>
        <a href="#;" className="banner_img">
          <img src={process.env.PUBLIC_URL+'image/reactImg.png'}/>
          <p className='hover_text'>REACT</p>
        </a>
        <a href="#;" className="banner_img">
          <img src={process.env.PUBLIC_URL+'image/nodejsImg.png'}/>
          <p className='hover_text2'>node.js</p>
        </a>
        <a href="#;" className="banner_img">
          <img src={process.env.PUBLIC_URL+'image/jsImg.png'}/>
          <p className='hover_text'>&nbsp;JS</p>
        </a>
        <a href="#;" className="banner_img">
          <img src={process.env.PUBLIC_URL+'image/githubImg.png'}/>
          <p className='hover_text2'>github<br />SVN</p>
          </a>
      </div>
      </>}
    </div>
  )
});

export default SkillList;