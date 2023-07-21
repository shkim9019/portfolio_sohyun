import React from 'react';
import SkillList from '../components/SkillList';

const projList = [
  {
    key:"proj1",
    startDt:new Date(2020,2).toLocaleDateString().slice(0,7),
    endDt:new Date(2020,4).toLocaleDateString().slice(0,7),
    name:'포트폴리오 프로젝트',
    position:'쌍용 강북 교육센터',
    info:'SPRING 및 JavaScript를 사용하여 각자의 포트폴리오를 작성할 수 있는 사이트를 구현하였습니다.',
  },
  {
    key:"proj2",
    startDt:new Date(2020,7).toLocaleDateString().slice(0,7),
    endDt:new Date(2021,2).toLocaleDateString().slice(0,7),
    name:'ERP 개발 및 유지보수',
    position:'엠지엘',
    info:'ERP 인사파트 개발 및 유지보수를 진행하였으며, 특별히 연말/연초에는 연말정산 세액계산 프로그램을 개발하였습니다.',
  },
  {
    key:"proj3",
    startDt:new Date(2021,11).toLocaleDateString().slice(0,8),
    endDt:new Date(2022,3).toLocaleDateString().slice(0,7),
    name:'제품 마이그레이션',
    position:'엑스큐어넷',
    info:'제품 업그레이드에 따라 JAVA를 이용하여 파일 및 데이터 마이그레이션 툴을 개발하였습니다.',
  },
  {
    key:'proj4',
    startDt:new Date(2023,1).toLocaleDateString().slice(0,7),
    endDt:new Date(2023,2).toLocaleDateString().slice(0,7),
    name:'모니터링 UI 개발',
    position:'엑스큐어넷',
    info:'제품을 모니터링 하는 UI 개발한 것으로, JAVA 및 JavaScript를 사용하여 개발하였으며 Apache Echart와 Vis.js를 사용하여 시각화에 초점을 두었습니다.',
  }
]

const Projects = React.forwardRef((props,ref) => {
  return (
      <SkillList skillYn="N" list={projList} ref={ref}/>
  )
});

export default Projects;