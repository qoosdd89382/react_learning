import { useState, useEffect } from 'react';

/*
{
    "optionId": "01",
    "label": "金塊",
    "bgColor": "#000000"
},
{userId: 'Cherry', optionId: '02'}
*/

const ShowOption = ({ option, records, onVoteChange }) => {
    const [ selected, setSelected ] = useState(false);

    const isOptionSelected = (optionId) => {
        return Object.values(records)
            .map(r => r.optionId)
            .includes(optionId);
    }

    // 只在records改變時才重新渲染
    useEffect(() => {
        console.log('只在records改變時才重新渲染');

        if (records) {
            setSelected(isOptionSelected(option.optionId));
        }
    }, [ records ]);

    const handleOnChange = (event) => {
        onVoteChange(event.target.value);
        setSelected(isOptionSelected(event.target.value));
    };

    // useEffect(() => {
    //     console.log('callback')
    // }, [ selected ]);

    return (<>
        <label>
            <input
                type="radio"
                name="options" 
                value={option.optionId}
                onChange={handleOnChange}
                checked={selected}>
            </input>
            {option.label}
        </label>
    </>);
};

export default ShowOption;