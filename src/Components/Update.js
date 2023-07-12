import { useState } from 'react';
import './Update.css'

function Update(props){
  // 기존의 값(title,body)이 value값으로 주입되었을때는 props에서 State로 환승해야됨.
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <div className='title'>게시글 수정</div>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='제목을 입력하세요' value={title} onChange={(event=>{
        console.log(event.target.value);
        setTitle(event.target.value);
      })}/></p>
      <p><textarea name='body' placeholder='내용을 입력하세요' style={{width:'280px', height:'100px'}} value={body} onChange={event=>{
        setBody(event.target.value);
      }} ></textarea></p>
      <p><input type='submit' value='게시글 수정'/></p>
    </form>
  </article>
}

export default Update