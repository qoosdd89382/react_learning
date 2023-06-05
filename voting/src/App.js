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
	const [ options, setOptions ] = useState([]);
	const [ records, setRecords ] = useState([]);
	// const [ bgcolor, setBgcolor ] = useState('#fff');

	// 只取一次
	useEffect(() => {
		console.log('getOptions * 1');

		const getOptions = async () => {
			const res = await paramsApi();
			if (res.status == '200') {
				setOptions(res.data.options);
			}
		}

		getOptions();
	}, []);


	const loginHanlder = (userId) => {
		setUserId(userId);
	}

	const postToVote = (newVoteRecords) => {
		// TODO: 投票post
		console.log('postToVote', newVoteRecords);
	}
	
	return (<div>
		<button>查看結果</button>
		<EnterUserInfo onLogin={loginHanlder} />
		<ShowOptionList options={options} userId={userId} postToVote={postToVote} />
	</div>);
}

export default App;
