import './QuestionCard.css'
const QuestionCard = (props) => {
  console.log(props)
  return (
    <div className = 'QuestionCard'>
      <p className="Question">{ props.question }</p>
    </div>
  )
}

export default QuestionCard