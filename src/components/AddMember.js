import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const AddMember = () => {
    const [name, setName] = useState('');
    const [Job_Description, setJob_Description] = useState('');

    const { addMember, Members } = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const newMember = {
            id: Members.length + 1,
            name,
            Job_Description,
        }
        addMember(newMember);
        history.push("/");
    }

    return (
        <Fragment>
            <div className="Main_Section">
                <form className = "F" onSubmit={onSubmit}>
                    <div className="w-full_mb-5">
                        <label className="#" htmlFor="name">
                            Name of Member
                        </label>
                        <input className="#" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full_mb-5">
                        <label className="#" htmlFor="Job_Description">
                            Job Description
                        </label>
                        <input className="#" value={Job_Description} onChange={(e) => setJob_Description(e.target.value)} type="text" placeholder="Enter Job_Description" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button className="#">
                            Add Member
                        </button>
                    </div>
                    <div className="#"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}