
const initialState={
    category:0,
    sortBy:'popular',
}

export const filterReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy:action.payload
            }
        default:
            return state
    }
}

export const sortByAC=(name)=>({
    type:'SET_SORT_BY',
    payload:name
})
export const categoryByAC=(catIndex)=>({
    type:'SET_CATEGORY',
    payload:catIndex
})