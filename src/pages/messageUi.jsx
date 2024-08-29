import React from 'react';
import UserProfile from '../GlobalState/UseProfile';
import Content from '../components/Content';

const MessageUI = () => {
    const { profile } = UserProfile();

    return (
        <div className='flex flex-col'>
            {profile.map((pf, index) => (
                <Content key={index} pf={pf}/>
            ))}
        </div>
    );
}

export default MessageUI;
