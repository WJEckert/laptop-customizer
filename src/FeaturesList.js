import React from 'react';
import Feature from './Feature'
import slugify from 'slugify';
import FeatureParts from './FeatureParts'
import USCurrencyFormat from './USCurrencyFormat'



function featureList(props) {
    const features = Object.keys(props.LaptopFeatures).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.LaptopFeatures[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
           <div key={itemHash} className="feature__item">
             <FeatureParts key = {itemHash} id = {itemHash} className ="feature_option" name = {slugify(feature)} checked = {item.name === props.selected[feature].name}
                onChange = {e => props.updateFeature(feature,item)} />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div> 
          );
        });
        return (
          <Feature key = {feature} feature = {feature} options = {options} featureHash = {featureHash}/>
        );
      });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}

export default featureList