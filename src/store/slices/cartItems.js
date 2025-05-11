import {createSlice} from  '@reduxjs/toolkit';

const cartItems= createSlice({

    name: 'cartItems',
    initialState: {
        items: []
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items= state.items.filter(item=> item.code !== action.payload);
        },
        increamentItem:(state,action)=>{
            const item= state.items.find(item=> item.code === action.payload);
            if(item){
                item.quantity++;
            }
        },
        decreamentItem:(state,action)=>{
            const item= state.items.find(item=> item.code === action.payload);
            if(item){
                item.quantity--;
                if(item.quantity===0){
                    state.items= state.items.filter(item=> item.code !== action.payload);
                }
            }
        }
    }

})


export const {addItem,removeItem,increamentItem, decreamentItem }= cartItems.actions;
export default cartItems.reducer