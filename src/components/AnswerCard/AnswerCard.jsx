/* eslint-disable react/prop-types */
import './AnswerCard.css'

const AnswerCard = (props) => {
  console.log(props)
  return (
    <div className="AnswerCard">
        <p className='Answer'>{props.answer} </p>
    
    
    </div>
  )
}

export default AnswerCard