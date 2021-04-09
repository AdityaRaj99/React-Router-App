import React from 'react';
import {useParams} from 'react-router-dom';

const Topics=()=>{
    const {topicId} = useParams();
    return <h1>Current React topic is: {topicId}</h1>
}

export default Topics;