/*
{
    "optionId": "01",
    "label": "金塊",
    "bgColor": "#000000"
},
*/
const ShowOption = ({ option, mappedOptions }) => {
    const mappedByOptionId = (optionId) => {
        return mappedOptions[optionId];
    }
    const mappedOption = mappedByOptionId(option.optionId);
console.log(mappedOption)
    return (<>
        <option name="options" 
                value={mappedOption.optionId}
                selected={mappedOption.isSelected}>
        </option>
        <label>{mappedOption.label}</label>
    </>);
};

export default ShowOption;