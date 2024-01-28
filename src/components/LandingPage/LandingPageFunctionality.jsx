import { AzureKeyCredential, OpenAIClient } from "@azure/openai"
const client = new OpenAIClient("https://testbed-team-28.openai.azure.com/", new AzureKeyCredential("73dcadc6a3a74619a442ae01801ab9d4"));
const deploymentId = 'gpt-4'


const LandingPageFunctionality = ( { setUserWorkFlow, userWorkFlow, currentWorkFlow} ) => {
  const updateUserQuestionAnswer = async( event) => {
    if (event.key === 'Enter'){
        const workFlowCopy =  [ ...userWorkFlow ]
        const question = event.target.value
        let CurWorkFlowObj = workFlowCopy[currentWorkFlow]
        
        let messages =  [{role: 'user', content: question}]
        const result =  await client.getChatCompletions(deploymentId,messages);
        // for (const choice of result.choices) {
        //     console.log(choice.message);
        // }
      
        let QAObject = {  }
        QAObject['question'] = question 
        QAObject['answer']  = result.choices[0].message.content
        console.log('Check question array', QAObject)
        CurWorkFlowObj['questions'].push(QAObject)
      
        setUserWorkFlow(workFlowCopy)
        event.target.value = ""

    }
    
  }

  
  return {
    updateUserQuestionAnswer
}
}

export default LandingPageFunctionality