const initialState={
    cocktails:[],
    categories:[],
    alcoholic:[],
    cocktail:[]
}

export default (state =initialState,action) =>{
    switch (action.type){
        case 'FETCHED_COCKTAILS':
            return {
                ...state,
                cocktails:action.payload
            }
        case 'FETCHED_CATEGORIES':
            return {
                ...state,
                categories:action.payload
            }
        case 'FETCHED_CATEGORY_COCKTAIL':
            return {
                ...state,
                cocktails: action.payload
            }
        case 'FETCHED_SEARCH_COCKTAIL':
            return {
                ...state,
                cocktails: action.payload
            }
        case 'FETCHED_ALCOHOLIC_COCKTAIL':
            return {
            ...state,
            alcoholic: action.payload
        }
        case 'FETCHED_ALCOHOLIC_LIST':
            return {
                ...state,
                cocktails: action.payload
            }
        case 'FETCHED_GET_COCKTAIL':
            return {
                ...state,
                cocktail: action.payload
            }
        default:
            return state;
    }
}