import './Nav.css'

const Nav = (props) => {
  const lis = []
  
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault(); 
          // Number : 문자를 숫자로 컴버팅해줌
          props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
      </li>)
  } 

  return (
    <nav className="nav-content">
        <ol>
          {lis}
        </ol>
    </nav>
  )
}

export default Nav