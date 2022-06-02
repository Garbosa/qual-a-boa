import React from 'react';
import './FeedPage.css';
import Input from '../../components/Input/Input'
import FeedChoice from '../../components/FeedChoice/FeedChoice';

function FeedPage(){

    return(
        <div className="Feedpage">
            <div ><Input roundButton round placeholder/> </div>
            <FeedChoice />
        </div>
    )
}
export default FeedPage;