import { createContext, useReducer } from "react"

export const QCodeContext = createContext() 

export const QrReducer = (state,action)=>{
    switch(action.type){
        case "":{
            return
        }
        default:
            return state
    }
}

const QrContext = ({children}) => {
    const [QrState,dispatch] = useReducer(QrReducer, [])
  return (
    <QCodeContext.Provider>
        {children}
    </QCodeContext.Provider>
  )
}

export default QrContext