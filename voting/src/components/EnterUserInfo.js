import { useState } from 'react';

const EnterUserInfo = ({ onLogin }) => {
    const [ userId, setUserId ] = useState('');

    const formOnSubmit = (event) => {
        event.preventDefault();
        onLogin(userId);
    };

    const inputOnChange = (event) => {
        setUserId(event.target.value);
    }

    return <form onSubmit={formOnSubmit}>
        <input value={userId} onChange={inputOnChange} />
        <button type="submit">Vote</button>
    </form>;
}

export default EnterUserInfo;