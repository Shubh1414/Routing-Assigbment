import React from 'react'

const Unmouting = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className='card-header'><b>Unmounting</b></h2>
                <br />
                <b>
                    <p>The final stage of unmounting is essential as it doesn’t require the component and gets unmounted from the DOM. As the final state, it is designed to produce the outcome via unmounting.

                        This method is called when a component is being removed from the DOM:</p>
                    <ul>
                        <li>componentWillUnmount()
                        </li>

                    </ul>
                </b>
            </div>
        </div>


    )
};

export default Unmouting;
