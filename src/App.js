// App.js

import './App.css';
import { useState } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Article from './Components/Article';
import Create from './Components/Create';
import Update from './Components/Update';

function App() {

  // const _mode = useState("Welcome");
  // const mode = _mode[0];
  // const setMode = _mode[1];

  // console.log('_mode',_mode);

  // 위 세줄을 줄인 코드라고 보면됨.
  // 요약 : 초기값은 "Welcome"이고 값을 바꿀때는 setMode로 바꿉니다.
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  /// 초기 Nav 아이템들
  const [topics, setTopics] = useState([
    {id:1, title:"사과", body:`사과는 아삭아삭한 식감과 달콤하거나 시큼한 맛을 지닌 과일의 일종입니다.`},
    {id:2, title:"바나나", body:`바나나는 부드러운 식감과 달콤한 맛을 지닌 열대 과일입니다.`},
    {id:3, title:"포도", body:`포도는 다발로 자라는 작고 둥근 과일로 다양한 색을 띠며 종종 육즙이 많고 약간 달콤한 맛으로 유명합니다.`}
  ]);

  /// 모드 정의
  let content = null;
  let contextControl = null;

  // WELCOME 모드
  if(mode === 'WELCOME'){
    content = <Article title= "게시판홈입니다." body="어서오세요."/>

  // READ 모드
  } else if (mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      // console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    // 읽기 부분임. Article함수로 제목과 내용을 불러옴 
    content = <Article title={title} body={body}/>
    // contextControl : 게시글 수정, 게시글 삭제를 버튼을 출력
    contextControl=
      // <></> : 빈태그로 테그들을 묶어주는 용도
      <>
        <div className='wrap-sub-btn'>
          <div className='sub-btn'>
              <a href={'/update/'+id} onClick={event=>{
            event.preventDefault();
            setMode('UPDATE');
            }}>게시글 수정</a>
          </div>
    
          {/* DELETE는 모드 안쓰고 빈배열로 교체 */}
          <div className='sub-btn'>
            <a onClick={()=>{
            const newTopics = []
            for(let i=0; i<topics.length; i++){
              // id가 같지 않은 것들을 빈 배열로 넣어줘서 새로운 배열을 만듦. 
              // 그 과정에서 id가 같은것(선택한것)은 새 배열에 빠져서 삭제됨.
              if(topics[i].id !== id){
                newTopics.push(topics[i]);
              }
            }
            setTopics(newTopics);
            setMode('WELCOME');
            }}>게시글 삭제</a>
          </div>
        </div>
      </>

  // CREATE 모드
  } else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1)
    }}/>

  // UPDATE 모드
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      // console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title,body)=>{
      console.log(title,body)
      // 객체, 배열 데이터는 ...으로 써야됨. 불변성 이슈때문.
      const newTopics = [...topics]
      const updatedTopic = {id:id, title:title, body:body}
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}/>
  }
  
  return (
    <div className='outer-frame'>
      

        <header>미니 게시판</header>

        
      <div className='outer-content'>
        <Nav topics = {topics} onChangeMode={(_id)=>{
          setMode('READ');
          setId(_id);
        }}/>
        {/* 게시글 내용 */}
        <div className='content'>{content}</div>        
      </div>

        {/* 글수정 및 삭제 */}
        <div className='context-control'>{contextControl}</div>
        
        <div className='bottom-nav'>
          <div className='main-btn'><a href='/'>처음 상태로</a></div>

          <Home title="홈" onChangeMode={()=>{
            setMode('WELCOME');
          }}/>

          <div className='main-btn'>
              <a href='/create' onClick={event=>{
              event.preventDefault();
              setMode('CREATE');
            }}>글쓰기</a>
          </div>
        </div>
    </div>
  );
}

export default App;
