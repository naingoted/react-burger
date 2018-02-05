import React from 'react';
import classes from './Spinner.css';
const spinner = () => (
    <div class={classes.spinner}>
        <div class={classes.doubleBounce1}></div>
        <div class={classes.doubleBounce2}></div>
    </div>
)

export default spinner;