import { ADD, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, SUBTRACT, X } from "./Action.type";

export const reducer=(state,action)=>{

switch (action.type){
    case INCREMENT :{
        state.count++;
          return {...state}
    }   
    case DECREMENT :{
        state.count--
          return {...state}
    }
    case ADD :{
        state.count+=Number(state.payload)
        return{...state}
    }
    case SUBTRACT :{
        state.count-=Number(state.payload)
        return{...state}
    }
    case DIVIDE :{
        state.count=state.count/Number(state.payload)
        return{...state}
    }
    case MULTIPLY :{
        state.count=state.count*Number(state.payload)
        return{...state}
    }
    case X :{
        state.count=0
        state.payload=0
        return{...state}
    }
    default:{
        return state
    }
}


    
}