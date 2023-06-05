// import './App.css';
import BackendApi from './api'

import { useState, useEffect } from 'react';

import EnterUserInfo from './components/EnterUserInfo';
import ShowOptionList from './components/ShowOptionList';

const { 
	params: paramsApi, 
	record: recordApi, 
	result: resultApi, 
	vote: voteApi 
} = BackendApi;

const App = () => {
	const [ userId, setUserId ] = useState('');
	const [ bgcolor, setBgcolor ] = useState('#fff');
	
	// useEffect(() => {
	// 	getRecords();
	// }, [ userId ]);
	
	const loginHanlder = (userId) => {
		setUserId(userId);
	}
	
	return (<>
		<EnterUserInfo onLogin={loginHanlder} />
		<ShowOptionList userId={userId} />
	</>);
}

export default App;
