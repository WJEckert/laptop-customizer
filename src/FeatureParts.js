import React from 'react'

function FeatureParts(props) {
    return (
              <input
                type="radio"
                id={props.id}
                className="feature__option"
                name={props.name}
                checked={props.checked}
                onChange={props.onChange}/>

    )
   
}

export default FeatureParts
