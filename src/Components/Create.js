function Create(props) {
  return <article>
    <h2>글쓰기</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='제목을 입력하세요'/></p>
      <p><textarea name='body' placeholder='내용을 입력하세요' style={{width:'300px', height:'100px'}}></textarea></p>
      <p><input type='submit' value='게시글 작성'/></p>
    </form>
  </article>
}

export default Create