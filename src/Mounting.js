import React from 'react'

const Mouting = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h2 className='card-header'><b>Mounting</b></h2>
                <br />
                <b>
                    <p>This is the next stage in the lifecycle and a critical one for launch. After you have prepared the code with basic requirements, states and props, you need your component to mount in the browser. This is done via browser DOM, and the phase gives you the right ReactJS hooks methods for a before and after fitting. Here are the critical terms that you should be adept in.
                        These methods are called in the following order when an instance of a component is being created and inserted into the DOM:</p>
                    <ul>
                        <li>constructor() </li>
                        <li>static getDerivedStateFromProps()</li>
                        <li>render()</li>
                        <li>componentDidMount()</li>
                    </ul>
                </b>
            </div>
        </div>




    )
};

export default Mouting;
