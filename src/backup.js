// // App.js

// import './App.css';
// import { useState } from 'react';

// function Header (props) {
//   console.log('props', props.title);
//   return (
//     <header>
//         <h1>
//           <a href='/' onClick={(event)=>{
//             // event.preventDefault(); 클릭해도 리로드 방지
//             event.preventDefault(); 
//             props.onChangeMode();
//           }}>{props.title}</a>
//         </h1>
//       </header>
//   )
// }

// const Nav = (props) => {

//   const lis = [
    
//   ]
  
//   for(let i=0; i<props.topics.length; i++) {
//     let t = props.topics[i];
//     lis.push(
//       <li key={t.id}>
//         <a id={t.id} href={'/read/'+t.id} onClick={event=>{
//           event.preventDefault(); 
//           // Number : 문자를 숫자로 컴버팅해줌
//           props.onChangeMode(Number(event.target.id));
//         }}>{t.title}</a>
//       </li>)
//   } 

//   return (
//     <nav>
//         <ol>
//           {lis}
//         </ol>
//     </nav>
//   )
// }

// const Article = (props) => {
//   return (
//     <article>
//         <h2>{props.title}</h2>
//         {props.body}
//     </article>
//   )
// }

// function Create(props) {
//   return <article>
//     <h2>Create!</h2>
//     <from onSubmit={event=>{
//       event.preventDefault();
//       const title = event.target.title.value;
//       const body = event.target.body.value;
//       props.onCreate(title, body);
//     }}>
//       <p><input type='text' name='title' placeholder='title'/></p>
//       <p><textarea name='body' placeholder='body'></textarea></p>
//       <p><input type='submit' value='Create'/></p>
//     </from>
//   </article>
// }

// function App() {

//   // const _mode = useState("Welcome");
//   // const mode = _mode[0];
//   // const setMode = _mode[1];

//   // console.log('_mode',_mode);

//   // 위 세줄을 줄인 코드라고 보면됨.
//   // 요약 : 초기값은 "Welcome"이고 값을 바꿀때는 setMode로 바꿉니다.
//   const [mode, setMode] = useState("WELCOME");
//   const [id, setId] = useState(null);
//   const [nextId, setNextId] = useState(4);

//   const [topics, setTopics] = useState([
//     {id:1, title:"html", body:`html is ...`},
//     {id:2, title:"css", body:`css is ...`},
//     {id:3, title:"js", body:`js is ...`}
//   ]);

//   let content = null;
//   if(mode === 'WELCOME'){
//     content = <Article title= "Welcome" body="Hello, Web"/>
//   } else if (mode === 'READ'){
//     let title, body = null;
//     for(let i=0; i<topics.length; i++){

//       console.log(topics[i].id, id);
      
//       if(topics[i].id === id){
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content = <Article title={title} body={body}/>
//   } else if (mode === 'CREATE'){
//     content = <Create onCreate={(_title, _body)=>{
//       const newTopic = {id:nextId, title:_title, body:_body}
//       const newTopics = [...topics]
//       newTopics.push(newTopic);
//       setTopics(newTopics);
//     }}/>
//   }
  
//   return (
//     <div>
//       <Header title="Web" onChangeMode={()=>{
//         setMode('WELCOME');
//       }}/>
//       <Nav topics = {topics} onChangeMode={(_id)=>{
//         setMode('READ');
//         setId(_id);
//       }}/>
//       {content}
//       <a href='/create' onClick={event=>{
//         event.preventDefault();
//         setMode('CREATE');
//       }}>Create</a>
//     </div>
//   );
// }

// export default App;
