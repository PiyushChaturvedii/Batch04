import React, { Component } from 'react';
import Aux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    salad: 3,
    bacon: 0.4,
    cheese: 5,
    meat: 1
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

        render() {
            return (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls />
                
                </Aux>
            )
        }
    }


export default BurgerBuilder;