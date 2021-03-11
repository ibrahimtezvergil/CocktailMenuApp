import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { getDetail} from "../actions/cocktailActions";

const CocktailDetail = props =>{

    const cocktailDetail=(
        <div className="row">
            <div className="col-md-5">
                <div className="project-info-box mt-0">
                    <h5>{props.cocktail.length !== 0 ? props.cocktail[0].strDrink : ''}</h5>
                    <p className="mb-0">{props.cocktail.length !== 0 ? props.cocktail[0].strInstructions : ''}.</p>
                </div>

                <div className="project-info-box">
                    <p><b>Alcoholic:</b> {props.cocktail.length !== 0 ? props.cocktail[0].strAlcoholic : ''}</p>
                    <p><b>Category:</b> {props.cocktail.length !== 0 ? props.cocktail[0].strCategory : ''}</p>
                    <p><b>Glass:</b> {props.cocktail.length !== 0 ? props.cocktail[0].strGlass : ''}</p>

                </div>

            </div>
            <div className="col-md-7">
                <img src={props.cocktail.length !== 0 ? props.cocktail[0].strDrinkThumb : ''} alt="project-image"
                     className="rounde img-detail" />
            </div>
        </div>
    );
    return (
        <div className="container">
            {props.cocktail.length === 0 ? '' : cocktailDetail}
        </div>
    );
}

// const mapStateProps = state => {
//     return{
//         cocktails: state.cocktails
//     }
// }

const mapStateProps = ({cocktail}) => {
    return{
        cocktail,
    }
}

const mapDispatchToProps = {
    getDetail,

}

export default connect(mapStateProps,mapDispatchToProps)(CocktailDetail);
