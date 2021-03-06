import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'}, 
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];


const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.thePrice.toFixed(2)}$</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} ingredientsLabel={ctrl.label} added={() => props.ingredientsAdded(ctrl.type)} removed={() => props.ingredientsRemoved(ctrl.type)}
                disabled={props.disable[ctrl.type]}/>
        ))}
        <button disabled={!props.purchasable} className={classes.OrderButton} onClick={props.ordered}>Order Now!</button>
    </div>

);

export default buildControls