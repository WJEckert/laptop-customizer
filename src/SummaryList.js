import React from 'react'
import SummaryTotal from './SummaryTotal'


function SummaryList(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
             {props.summary}
            <SummaryTotal total = {props.total} />
        </section>
    )
}

export default SummaryList