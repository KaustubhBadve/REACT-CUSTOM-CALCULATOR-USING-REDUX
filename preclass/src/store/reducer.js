import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./Acxtion.type";

export const reducer=(state,action)=>{

console.log(state,action)

    switch(action.type){
        case COUNTER_INCREMENT : {
   state.count++;
   return {...state}
        }
        case COUNTER_DECREMENT : {
            state.count--;
   return {...state}
        }
        default:{
            return state
        }
    }
    
}