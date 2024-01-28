import React, { useEffect } from 'react'

const MenuTabsFunctionality = ({ userWorkFlow, setUserWorkFlow, currentWorkFlow,setCurrentWorkFlow }) => {
  const updateWorkFlow = async() => {
    const workFlowCopy =  [ ...userWorkFlow ]
    console.log(workFlowCopy)
    workFlowCopy.push({ 
        'id': userWorkFlow.length + 1, 
        'questions':[]
    })

    setUserWorkFlow(workFlowCopy)
  }

  const updateCurrentWorkFlow = (event,workflowId ) => {
    console.log(workflowId-1)
    
    setCurrentWorkFlow(workflowId-1)
  }

  return {
    updateWorkFlow,
    updateCurrentWorkFlow
}
}

export default MenuTabsFunctionality