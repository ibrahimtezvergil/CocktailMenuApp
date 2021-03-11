import {API_URL , HEADERS} from "../config/env";
import axios from "axios";

export const getCocktails = () =>  dispatch => {
    axios.get(API_URL+"/filter.php?i=Gin", {headers:HEADERS})
        .then(res =>{
            dispatch({
                type:'FETCHED_COCKTAILS',
                payload:res.data.drinks
            })
        })
}

export const getCategories = () => dispatch => {

    axios.get(API_URL+"/list.php?c=list", {headers:HEADERS})
        .then(res =>{
            dispatch({
                type:'FETCHED_CATEGORIES',
                payload:res.data.drinks
            })
        })
}

export const  getCategoryCocktails = (category) => dispatch => {
        axios.get(API_URL+"/filter.php?c="+category, {headers:HEADERS})
            .then(res =>{
                dispatch({
                    type:'FETCHED_CATEGORY_COCKTAIL',
                    payload:res.data.drinks
                })
            })

}

export const getSearchCocktails = (search) => dispatch => {
    axios.get(API_URL+"/search.php?s="+search, {headers:HEADERS})
        .then(res =>{
            dispatch({
                type:'FETCHED_SEARCH_COCKTAIL',
                payload:res.data.drinks === null ? [] : res.data.drink,
            })
        })
}

export const getAlcoholicCocktails = (search) => dispatch => {
    axios.get(API_URL+"/list.php?a=list", {headers:HEADERS})
        .then(res =>{
            dispatch({
                type:'FETCHED_ALCOHOLIC_COCKTAIL',
                payload:res.data.drinks,
            })
        })
}

export const getAlcoholicList = (alcohol) => dispatch => {
    axios.get(API_URL+"/filter.php?a="+alcohol, {headers:HEADERS})
        .then(res =>{
            dispatch({
                type:'FETCHED_ALCOHOLIC_LIST',
                payload:res.data.drinks,
            })
        })
}

export const getDetail = (id) => dispatch => {
    axios.get(API_URL+"/lookup.php?i="+id, {headers:HEADERS})
        .then(res =>{
            dispatch({
                type:'FETCHED_GET_COCKTAIL',
                payload:res.data.drinks,
            })
        })

};