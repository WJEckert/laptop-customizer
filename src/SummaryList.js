import React from 'react'
import SummaryTotal from './SummaryTotal'
import Summary from './Summary'


function SummaryList(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
          <Summary key = {feature} feature = {feature} featureHash = {featureHash} selectedOption = {selectedOption}/>
        );
      });
    
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
             {summary}
            <SummaryTotal total = {props.total} />
        </section>
    )
}

export default SummaryList