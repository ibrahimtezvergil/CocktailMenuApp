import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CocktailList from "./CocktailList";
import CategoryList from './CategoryList';


import { getCocktails,getCategories,getAlcoholicCocktails} from "../actions/cocktailActions";

class CocktailsPage extends  Component{
    static propTypes = {
        cocktails: PropTypes.array.isRequired,
    };
    componentDidMount() {
        this.props.getCocktails();
        this.props.getCategories();
        this.props.getAlcoholicCocktails();
    }

    render() {
        return(
            <div className={'container-fluid'}>
                <div className={"row col-md-12 mb-4 "}>
                    <h1 className={'m-auto'}>Bar Cocktail Menu</h1>
                </div>
                <div className={'row col-md-12'}>
                    <div className={'col-md-3'}>
                        <CategoryList categories = {this.props.categories} alcoholic={this.props.alcoholic}></CategoryList>
                    </div>
                    <div className={'col-md-9'}>
                        <CocktailList cocktails={this.props.cocktails}></CocktailList>
                    </div>
                </div>

            </div>

        );
    }
}

// const mapStateProps = state => {
//     return{
//         cocktails: state.cocktails
//     }
// }

const mapStateProps = ({cocktails,categories,alcoholic}) => {
    return{
        cocktails,
        categories,
        alcoholic,
    }
}

const mapDispatchToProps = {
    getCocktails,
    getCategories,
    getAlcoholicCocktails

}

export default connect(mapStateProps,mapDispatchToProps)(CocktailsPage);
