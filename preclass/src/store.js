import {legacy_createStore} from "redux"
import { reducer } from "./store/reducer"

let InitialState={
    count:0
}

export const store=legacy_createStore(reducer,InitialState)