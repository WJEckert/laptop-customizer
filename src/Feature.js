import React from 'react'
import FeatureName from './FeatureName'

function Feature(props) {
    return (
        <fieldset className="feature" key={props.featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
        <FeatureName options = {props.options} />
        </fieldset>
    )
}


export default Feature