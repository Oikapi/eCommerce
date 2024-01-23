import { createSlice } from "@reduxjs/toolkit";



const marketCartSlice = createSlice({
    name: "cartstore",
    initialState : {
        cart:[]
    },
    reducers:{
        addCart : (state,action) => {
            // state.push(action.payload)   
            const check = state.cart.every((item) => {
                // console.log(item._id,action.payload.item._id)
                return item._id !== action.payload.item._id
            })
            console.log(check)
            if(check){
                state.cart.push({...action.payload.item, count : action.payload.count})
            }else{
                state.cart = state.cart.filter((el) => el._id !== action.payload.item._id)
                state.cart.push({...action.payload.item,count : action.payload.count})
                // console.log(state.cart.filter((el) => el._id !== action.payload.item._id))
                // return  state.filter((el) => el._id !== action.payload.item._id).push({...action.payload.item,count : action.payload.count})
               
            }
            
            // console.log(action.payload.item._id)
            
        }
    }
})

export const {addCart} = marketCartSlice.actions   

export default marketCartSlice.reducer