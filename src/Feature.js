import React from 'react'
import FeatureName from './FeatureName'

function Feature(props) {
    return (
        <fieldset className="feature" key={props.featureHash}>
            <FeatureName feature = {props.feature}/>
            {props.options}
        </fieldset>
    )
}


export default Feature