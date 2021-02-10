import React from "react";
import { judges } from "../assets/data";
const Judge = () => {
    return (
        <div className='col-12 col-md-11 col-lg-10 mx-auto my-2 row justify-content-center'>
            <div className='col-12'>
                <h1>Judges</h1>
                <hr className='line' />
            </div>
            {judges.map((user) => (
                <div className='col-12 col-md-3  px-0'>
                    <div className='contact-card '>
                        <div className='contact-img mx-auto'>
                            <img
                                className='img-fluid my-auto mx-auto'
                                src={user.img}
                                alt=''
                            />
                        </div>
                        <div className='content text-align-center'>
                            <h5>{user.name} </h5>
                            <h6>
                                <strong>{user.role}</strong>
                            </h6>
                            <p>
                                {user.phone}
                                <br />
                                <a
                                    href={`mailto:${user.email}`}
                                    target='_blank'
                                    rel='noreferrer'>
                                    {user.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Judge;
