import React, { useEffect, useState } from 'react';
import ShowHomePage from '../ShowHomePage/ShowHomePage';
import "./Home.css"

const Home = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch("./home.JSON")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    // const { name, duration, modeltest, price, img } = course;

    return (
        <div>
            
            {
                course.map(course => 
                    <ShowHomePage course={course}></ShowHomePage>)
            }

            </div>
    );
};

export default Home;