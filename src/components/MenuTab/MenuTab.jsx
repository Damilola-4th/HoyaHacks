import './MenuTab.css'
import { useUserContext } from "../../context/UserContext";  // Importing User Object containing all the setters and getters required by using context manager.
import MenuTabsFunctionality from './MenuTabsFunctionality';


const MenuTab = () => {

  const { userWorkFlow, setUserWorkFlow, currentWorkFlow,setCurrentWorkFlow } = useUserContext()
  const { updateWorkFlow, updateCurrentWorkFlow } = MenuTabsFunctionality({ userWorkFlow, setUserWorkFlow, currentWorkFlow,setCurrentWorkFlow })

  

  return (
    <div className='MenuTab'>
       

       <div className='Add-Workflow-Div'>
        <button className="Add-WorkFlow-Button" onClick= {() => {updateWorkFlow()}} type="button">Add </button>
        <span className="material-symbols-outlined">add_box</span>
       </div>

       <div className='WorkFlow-Buttons'>
        
        { userWorkFlow.map((workflow) =>(
            console.log(workflow.id),
            <button key = {workflow.id} className="Workflow" onClick={ (event) => { updateCurrentWorkFlow(event,workflow.id)}}>
                WorkFlow{workflow.id}
            </button>
             
        ) )}
       </div>
        

        
    </div>
  )
}

export default MenuTab