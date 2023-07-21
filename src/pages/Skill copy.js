import React from 'react';
import SkillList from '../components/SkillList';

const expList = [
  {
    key:"edu1",
    startDt:new Date(2019,10).toLocaleDateString().slice(0,8),
    endDt:new Date(2020,4).toLocaleDateString().slice(0,7),
    name:'Java 웹 개발자 양성과정 교육 이수',
    position:'쌍용 강북 교육센터',
    info:'JAVA 기반으로 웹 프로그래밍 개발 기술을 교육받았으며, 이를 토대로 3차례의 팀 프로젝트를 진행하였습니다. ',
  },
  {
    key:"work1",
    startDt:new Date(2020,7).toLocaleDateString().slice(0,7),
    endDt:new Date(2021,2).toLocaleDateString().slice(0,7),
    name:'엠지엘',
    position:'웹 개발자',
    info:'WINDOW 환경에서 ERP 인사 파트 개발 및 유지보수를 담당하였습니다. JAVA와 NEXACRO를 이용하였습니다.',
  },
  {
    key:"work2",
    startDt:new Date(2021,4).toLocaleDateString().slice(0,7),
    endDt:new Date(2023,2).toLocaleDateString().slice(0,7),
    name:'엑스큐어넷',
    position:'웹 개발자',
    info:'LINUX 환경에서 자체적인 솔루션 개발 및 유지보수를 담당하였습니다. JAVASCRIPT를 사용하여 UI를 개발하였으며, 제품별 SPRING, SPRING BOOT를 사용하여 개발하였습니다.',
  },
  {
    key:'edu2',
    startDt:new Date(2023,2).toLocaleDateString().slice(0,7),
    endDt:' ',
    name:'한입 크기로 잘라 먹는 리액트',
    position:'인프런',
    info:'리액트 개발을 위한 자바스크립트 및 리액트 기초 및 개인 프로젝트 개발을 진행하였습니다. ',
  }
]
// const Skill = React.forwardRef((props,ref) => {
//   return (
//     <div className="Skill" ref={ref}>
//       <h1>📖교육 및 경력</h1>
//       <div className="expInfo">
//         {expList.map((it)=>{
//           return(
//             <div key={it.key}>
//               <span>
//                 <button>{it.startDt} ~ {it.endDt}</button>
//                 <h2>{it.name} <span> - {it.position}</span></h2>
//               </span>
//               <p>{it.info}</p>
//             </div>
//           )          
//         })}
//       </div>
//       <h1>📖보유 기술</h1>
//       <div className='skillInfo'>
//         <a href="#;" className="banner_img">
//           <img src={process.env.PUBLIC_URL+'image/cssImg.png'}/>
//           <p className='hover_text'>CSS</p>
//         </a>
//         <a href="#;" className="banner_img">
//           <img src={process.env.PUBLIC_URL+'image/htmlImg.png'}/>
//           <p className='hover_text'>HTML</p>
//         </a>
//         <a href="#;" className="banner_img">
//           <img src={process.env.PUBLIC_URL+'image/reactImg.png'}/>
//           <p className='hover_text'>REACT</p>
//         </a>
//         <a href="#;" className="banner_img">
//           <img src={process.env.PUBLIC_URL+'image/nodejsImg.png'}/>
//           <p className='hover_text2'>node.js</p>
//         </a>
//         <a href="#;" className="banner_img">
//           <img src={process.env.PUBLIC_URL+'image/jsImg.png'}/>
//           <p className='hover_text'>&nbsp;JS</p>
//         </a>
//         <a href="#;" className="banner_img">
//           <img src={process.env.PUBLIC_URL+'image/githubImg.png'}/>
//           <p className='hover_text2'>github<br />SVN</p>
//           </a>
//       </div>
//     </div>
//   )
// });

const Skill = React.forwardRef((props,ref) => {
  return (
   <SkillList skillYn='Y' list={expList} ref={ref} />
  )
});

export default Skill;