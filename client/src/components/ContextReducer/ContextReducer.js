import React, { createContext, useReducer, useContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

// action is like delete action,add action
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }];

        case "REMOVE":
            let newArr = [...state]   // store the array in a temp array and then delete
            newArr.splice(action.index, 1); // deleting the element at that index
            return newArr;

        case "UPDATE":
            let arr = [...state] // store the array in a temp array and then update
            arr.find((food, index) => {
                // console.log(food.id);
                // console.log("action"+action.id);
                if (food.id === action.id) {
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price };
                }
                console.log(arr);
                return arr;
            });
            
            return arr;
        case "DROP":
            let empArray=[];
            return empArray;
        default:
            console.log("error in reducer");
    }
}
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartStateContext);
}
export const useDispatch = () => {
    return useContext(CartDispatchContext);
}


