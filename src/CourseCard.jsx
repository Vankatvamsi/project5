import React, { Component } from 'react'
import './CourseCard.css';
export default class CourseCard extends Component {
    render() {
        const {data} = this.props;
        const BASEURL = import.meta.env.BASE_URL;
        return (
            <div className='coursecard'>
                <img src={BASEURL + data.img} alt='' />
                <h3>{data.name}</h3>
                <p>
                    <span>Duration</span>
                    <span>{data.duration}</span>
                </p>
                <p>
                    <span>Course Fee</span>
                    <span>{data.price}</span>
                </p>
            </div>
        );
    }
}