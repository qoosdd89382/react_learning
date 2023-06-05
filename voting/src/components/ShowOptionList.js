import BackendApi from '../api'

import { useState, useEffect } from 'react';

import ShowOption from "./ShowOption";


const { 
	params: paramsApi, 
	record: recordApi, 
	result: resultApi, 
	vote: voteApi 
} = BackendApi;

const ShowOptionList = ({ userId }) => {
	const [ records, setRecords ] = useState([]);
	const [ options, setOptions ] = useState([]);
    
    const isOptionSelected = (option) => {
        // TODO:
        return Object.keys(records).includes(option.optionId)
    }
    
    const mappedOptions = {};
    options.forEach((option) => {
        mappedOptions[option.optionId] = { ...option, isSelected: isOptionSelected(option) };
    });
    
    useEffect(() => {
        getRecords();
        getOptions();
    }, []);

	const getRecords = async () => {
		if (userId) {
			const res = await recordApi();
			if (res.status == '200' && res.data.length > 0) {
				setRecords(res.data);
			}
		}
	};

	const getOptions = async () => {
		const res = await paramsApi();
		if (res.status == '200') {
			setOptions(res.data.options);
		}
	}

    if (!options) {
        return <></>;
    }


    const renderedOptions = options.map((option, index) => {
        return <ShowOption 
            key={index} 
            option={option}
            mappedOptions={mappedOptions} />;
    });

    return (<>{renderedOptions}</>);
}

export default ShowOptionList;