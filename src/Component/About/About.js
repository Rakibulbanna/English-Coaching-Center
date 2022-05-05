import React from 'react';
import Map from '../Map/Map';
import "./About.css"

const About = () => {
    return (

        <div className="card">

            <div className="card-body text-center">
                <h5 className="card-title">Founder:</h5>
                <h2 className="card-title">Rakib ul Banna <br />&<br /> Mukta Rani Das</h2>

                <p className="card-text">

                    We are makeing an education center system, where teacher, student and admin or authority can easily manage the education center. Our system will help the three types of user such as Teacher, student and admin.
                    Here teachers can easily see the details of student, Ongoing training courses and research.
                    Students can register them self in the training or research, view ongoing research, published research, see news etc.
                    Admin can update, delete and modify all the function.
                </p>
                <h2>Thank You</h2>
            </div>
            <div className="card-footer text-center">
                <small className="text-muted">Hot Line : 01878911013</small>
                
            </div>
            <br />
            <Map></Map>
        </div>

    );
};

export default About;