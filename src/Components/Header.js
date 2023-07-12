function Header (props) {
  console.log('props', props.title);
  return (
    <header>
        <h1>
          <a href='/' onClick={(event)=>{
            // event.preventDefault(); 클릭해도 리로드 방지
            event.preventDefault(); 
            props.onChangeMode();
          }}>{props.title}</a>
        </h1>
      </header>
  )
}

export default Header