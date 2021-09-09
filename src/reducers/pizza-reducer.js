const initialState = {
    items:[],
    isLoading:false
}


export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-PIZZAS':
            return {...state,
            items:action.payload}
        default:
            return state
    }
}

export const setPizzaAC = (items) => ({
    type:'SET-PIZZAS',
    payload:items
})