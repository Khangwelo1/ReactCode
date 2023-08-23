import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { Memberlist } from './Memberlist';

export const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="App_Container">
                    <h3 className="Text">ADD MEMBERS</h3>
                    <Heading />
                    <Memberlist />
                </div>
            </div>
        </Fragment>
    )
}