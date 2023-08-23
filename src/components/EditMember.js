import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const EditMember = (route) => {
    let history = useHistory();
    const { Members, editMember } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ id: null, name: '', Job_Description: '' });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const MemberId = currentUserId;
        const selectedUser = Members.find(emp => emp.id === parseInt(MemberId));
        setSeletedUser(selectedUser);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editMember(selectedUser);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedUser({ ...selectedUser, [userKey]: value })

    if (!selectedUser || !selectedUser.id) {
        return <div>sdf</div>
    }

    return (
        <Fragment>
            <div className="#">
                <form onSubmit={onSubmit}>
                    <div className="#">
                        <label className="#" htmlFor="name">
                            Name of Member
                        </label>
                        <input className="#" value={selectedUser.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="#">
                        <label className="#" htmlFor="Job_Description">
                            Job Description
                        </label>
                        <input className="#" value={selectedUser.Job_Description} onChange={(e) => handleOnChange('Job_Description', e.target.value)} type="text" placeholder="Enter Job_Description" />
                    </div>
                    
                    <div className="#">
                        <button className="#">
                            Edit Member
                        </button>
                    </div>
                    <div className="#"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}