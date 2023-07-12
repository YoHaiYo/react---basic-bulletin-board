import './Article.css'

const Article = (props) => {
  return (
    <article>
        <div className='title'>{props.title}</div>
        <div className='dividing-line'></div>
        <div className='body'>{props.body}</div>
    </article>
  )
}

export default Article