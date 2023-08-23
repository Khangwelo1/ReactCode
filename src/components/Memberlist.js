import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const Memberlist = () => {
    const { Members, removeMember, editMember } = useContext(GlobalContext);
    return (
        <Fragment>
            {Members.length > 0 ? <Fragment>
                {Members.map(Member => (
                    <div className="List" key={Member.id}>
                        <div className="List_Elements">
                            Full Names: 
                            <h2 className="#">{Member.name}</h2>
                            Job Description
                            <span className="#"><h3>{Member.Job_Description}</h3></span>
                        </div>

                    
                        <div className="#"><center>
                            <Link to={`/edit/${Member.id}`}>
                                <button onClick={() => editMember(Member.id)} className="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </button>
                            </Link>
                            <button onClick={() => removeMember(Member.id)} className="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button></center>
                        </div>
                        
                    </div>
                ))}
            </Fragment> : <h1 className="#">No Members</h1>}
        </Fragment>
    )
}