import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {connect} from "react-redux";

import { getDetail} from "../actions/cocktailActions";


const CocktailList = props => {
    let history = useHistory();

    const  emptyMessage =(
        <div className={'row bg-danger'}>
            <h3 className={"text-white m-auto"}>COCKTAIL NOT FOUND</h3>
        </div>
    );
    const cocktailList =(

            <div className={'row col-md-12'}>
                {console.log(props.cocktails)}
                {
                    props.cocktails === undefined ? '' :
                    props.cocktails.slice(0,12).map(cocktail =>
                        <div className={'card col-md-4 mt-2'} key={cocktail.idDrink}>
                            <img src={cocktail.strDrinkThumb} className={'card-img-top'} alt=""/>
                            <div className={'card-body'}>
                                <h5 className={'card-title'}>{cocktail.strDrink}</h5>
                                <a onClick={() => {
                                    props.getDetail(cocktail.idDrink)
                                    history.push("/detail/"+cocktail.idDrink)}} className={'btn btn-primary'}>View More</a>
                            </div>
                        </div>
                    )
                }

            </div>

    );
    return (

        <div>
            {props.cocktails.length === 0 ? emptyMessage : cocktailList}
        </div>
    );
};

CocktailList.propTypes={
    cocktails: PropTypes.array.isRequired
};
export default  connect(null, {getDetail})(CocktailList);