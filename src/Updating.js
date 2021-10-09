import React from 'react'

const Updating = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className='card-header'><b>Updating</b></h2>
                <br />
                <b>
                    <p>The third stage starts when the component has been adopted on the browser. This can then grow by receiving new updates from the program. The user can interact with the program, and then the component can be updated accordingly.

                        Developers can typically update the component in a few main ways. They can either send new props to the command or update the state entirely. Depending on the complexity or the scale of work, they can choose either method and get the program running.


                        An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:</p>
                    <ul>
                        <li>static getDerivedStateFromProps()</li>
                        <li>shouldComponentUpdate()</li>
                        <li>render()</li>
                        <li>getSnapshotBeforeUpdate()</li>
                        <li>componentDidUpdate()</li>
                    </ul>
                </b>
            </div>
        </div>
    )
};

export default Updating;
