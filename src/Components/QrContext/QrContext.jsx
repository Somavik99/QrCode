import { createContext, useReducer } from "react"

export const QCodeContext = createContext() 

export const QrReducer = (state,action)=>{
    switch(action.type){
        case "" :{
            return 
        }
        default:
            return state, console.log(action.type)
    }
}

const QrContext = ({children}) => {
    const [QrState,dispatch] = useReducer(QrReducer, [])
  return (
    <QCodeContext.Provider value={{QrState:QrState, QrDispatch:dispatch}}>
        {children}
    </QCodeContext.Provider>
  )
}

export default QrContext