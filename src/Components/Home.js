function Home (props) {
  console.log('props', props.title);
  return (

    <div className='main-btn'>
      <a href='/' onClick={(event)=>{
        // event.preventDefault(); 클릭해도 리로드 방지
        event.preventDefault(); 
        props.onChangeMode();
      }}>{props.title}</a>
    </div>
  )
}

export default Home