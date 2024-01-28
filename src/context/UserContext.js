import { createContext, useContext } from "react";


export const UserContext = createContext( {
    User: null,
    setUser: null, 
    loginInfo: null, 
    setLoginInfo: null,
    userWorkFlow: null,
    setUserWorkFlow: null,
    currentWorkFlow: null,
    setCurrentWorkFlow: null,
     });


export const useUserContext = () => {
    const { user, setUser, loginInfo, setLoginInfo, userWorkFlow, setUserWorkFlow, currentWorkFlow, setCurrentWorkFlow} = useContext(UserContext)

    // if user is null or underfined prompt error message
    if (user == undefined || user == null) {

        throw new Error(" useContext must be used with a UserContext")
    }
    if (setUser == undefined || setUser == null) {

        throw new Error(" useContext must be used with a UserContext")
    }
    if (loginInfo == undefined || loginInfo == null) {

        throw new Error(" useContext must be used with a UserContext")
    }
    if (setLoginInfo == undefined || setLoginInfo == null) {

        throw new Error(" useContext must be used with a UserContext")
    }
    if (userWorkFlow == undefined || userWorkFlow == null) {

        throw new Error(" useContext must be used with a UserContext")
    }
    if (setUserWorkFlow == undefined || setUserWorkFlow == null ){
        throw new Error(" useContext must be used with a UserContext")
    }
    if (currentWorkFlow == undefined || currentWorkFlow == null){
        throw new Error(" useContext must be used with a UserContext") 
    }
    if (setCurrentWorkFlow == undefined || setCurrentWorkFlow == null){
        throw new Error(" useContext must be used with a UserContext")
    }
 


    return {
        user,
        setUser,
        loginInfo,
        setLoginInfo,
        userWorkFlow,
        setUserWorkFlow,
        currentWorkFlow,
        setCurrentWorkFlow
 }; 
}