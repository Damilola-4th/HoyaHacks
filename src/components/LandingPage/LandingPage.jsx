import "./LandingPage.css"
import Morgan_Clock_Logo_Name from '../../assets/Morgan_Clock_Logo_Name.png'
import Morgan_clock_LogoTransparent from '../../assets/Morgan_Clock_LogoTransparent.png'
import AI_Pic_Tranparent from "../../assets/AI_Pic_Tranparent.png"
import { useUserContext } from "../../context/UserContext";  // Importing User Object containing all the setters and getters required by using context manager.
// import { useEffect } from "react";
import LandingPageFunctionality from "./LandingPageFunctionality";
import QuestionCard from '../QuestionCard/QuestionCard'
import AnswerCard from '../AnswerCard/AnswerCard'


const LandingPage = () => {

  const { userWorkFlow, setUserWorkFlow, currentWorkFlow} = useUserContext()
//   console.log(userWorkFlow)
//   console.log(setUserWorkFlow)
//   console.log(currentWorkFlow)
//   console.log(setCurrentWorkFlow)

  const { updateUserQuestionAnswer } = LandingPageFunctionality( {setUserWorkFlow, userWorkFlow, currentWorkFlow,  })
  let currentQuestionsAnswers = null

  if (userWorkFlow[currentWorkFlow].questions !== undefined){
    console.log(userWorkFlow[currentWorkFlow].questions.length)
    currentQuestionsAnswers =  userWorkFlow[currentWorkFlow].questions
    console.log('Here at landing page,', currentQuestionsAnswers)
    
  }
  
  return (

        
        <div  className="LandingPage-PromptSide" >
            
            <div className="Prompts">

            
            {currentQuestionsAnswers === null || currentQuestionsAnswers.length < 1? 
                
                    <div className="Image-Div">     
                    <img className="Morgan-Clock-Logo" src= {Morgan_clock_LogoTransparent} alt= "Morgan State University Logo" />
                    <img className= "Hero-Image" src={ Morgan_Clock_Logo_Name} alt= "Morgan State University" />
                    
                </div>
                : currentQuestionsAnswers.map((quesAnswr, index) =>
              
                <div  key = { index } className="QuestionAndAnswer"> 
                <QuestionCard key = { String(index+2) } question= { quesAnswr.question} />
                <AnswerCard key= {String(index+1)} answer= {quesAnswr.answer} />
                </div> 

                )}
            </div>
            
            
            <div className="Call-To-Action">
                <div className='SearchBox'> 
                    <input  className= 'PromptField' type='text' onKeyDown={ (event) => { updateUserQuestionAnswer(event)}  }  placeholder='Search ..' />
                    {/* <button className="SearchButton" type="button"><span className="material-symbols-outlined"> upload_2</span></button> */}
                    
                </div>
            </div>
        

        </div>
    
  )
}

export default LandingPage