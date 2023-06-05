import BackendApi from '../api'

import { useState, useEffect } from 'react';

import ShowOption from "./ShowOption";


const { 
	params: paramsApi, 
	record: recordApi, 
	result: resultApi, 
	vote: voteApi 
} = BackendApi;

const ShowOptionList = ({ options, userId, postToVote }) => {
	const [ records, setRecords ] = useState([]);
    const [ ticket, setTicket ] = useState([]);
    
    // 只在userId改變時才取records
    useEffect(() => {
        console.log('只在userId改變時才取records')

        const getRecords = async () => {
            if (userId) {
                const res = await recordApi();
                if (res.status == '200' && res.data.length > 0) {
                    setRecords(res.data);
                }
            }
        };
        getRecords();
    }, [ userId ]);

    useEffect(() => {
        postToVote(records);
    }, [records]);
    
    const handleVoteChange = (optionId) => {
        setTicket(optionId);
        setRecords([ { userId, optionId } ]);
    }

    if (!userId || !options) {
        return <></>;
    };

    const renderedOptions = options.map((option, index) => {
        return <ShowOption 
            key={index} 
            option={option}
            records={records} 
            onVoteChange={handleVoteChange}/>;
    });
    

    return (
        <>
            {renderedOptions}
        </>
    );

}

export default ShowOptionList;