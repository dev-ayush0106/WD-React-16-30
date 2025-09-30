import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
export const cartSlicer=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        addQuantity:(state,action)=>{
            let element=state.find((el)=> el.id===action.payload)
            element.quantity+=1;
            state=[...state,element]
        },
        incCartItem:(state,action)=>{
            let item=state.find((el)=> el.id===action.payload)
            console.log(item)
            if(item){
                item.quantity+=1
            }
        },
        decCartItem:(state,action)=>{
            let item=state.find((el)=> el.id===action.payload)
            if(item && item.quantity>1){
                item.quantity-=1
            }
        }
    }
})

export const {add,remove,addQuantity,incCartItem,decCartItem} = cartSlicer.actions
export default cartSlicer.reducer