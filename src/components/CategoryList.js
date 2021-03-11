import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import {getCategoryCocktails,getSearchCocktails,getAlcoholicList} from "../actions/cocktailActions";


const CategoryList = props => {
    return (
        <div className={'row col-md-12'}>
            <div className={'input-group mb-3'}>
                <input type="text" className={'form-control'} name={'search'} id={'search'} placeholder="search for cocktails"
                      />
                    <div className={'input-group-append'}>
                        <button className={'btn btn-outline-secondary'} type="button" onClick={ () => {
                            props.getSearchCocktails(document.getElementById('search').value)}}>Search</button>
                    </div>
            </div>
            <div className={'input-group mb-3'}>
                <select  className={'form-control'}  id={'alcoholic'} name={'alcoholic'} placeholder="search for cocktails" onChange={ () => {
                    props.getAlcoholicList(document.getElementById("alcoholic").value);
                }}>
                    {
                        props.alcoholic.map(select  => <option key={select.strAlcoholic} value={select.strAlcoholic}>{select.strAlcoholic}</option>)
                    }
                </select>

            </div>

            <h4 className={'m-auto'}>Categories</h4>
            <div className={'list-group m-auto col-md-12'}>
                {
                    props.categories.map(category =>  <a href="#" onClick={ () => {
                        props.getCategoryCocktails(category.strCategory)
                        }} className={'list-group-item list-group-item-action m-auto'} key={category.strCategory}>{category.strCategory}</a>
                    )
                }
            </div>
        </div>
    );
};

CategoryList.propTypes={
    categories: PropTypes.array.isRequired,
    alcoholic: PropTypes.array.isRequired,

};


export default connect(null,{getCategoryCocktails,getSearchCocktails,getAlcoholicList})(CategoryList);
