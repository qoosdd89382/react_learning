import axios from 'axios';

const apiUrl =  'localhost:3000';
const service = 'VoteService/vote';
let tempRecordData = {};

function getApi(endpoint) {
    return apiUrl + service + endpoint;
}

export async function paramsApi() {
    // return axios.get(this.getApi('/params'));
    return {
        "status": "200",
        "message": "OK",
        "data": {
            "question": "這季NBA冠軍賽，你支持哪一隊呢？",
            "options": [
                {
                    "optionId": "01",
                    "label": "金塊",
                    "bgColor": "gold"
                },
                {
                    "optionId": "02",
                    "label": "熱火",
                    "bgColor": "pink"
                },
                {
                    "optionId": "03",
                    "label": "湖人",
                    "bgColor": "purple"
                },
                {
                    "optionId": "04",
                    "label": "勇士",
                    "bgColor": "blue"
                }
            ]
        },
        "time": "2023-06-05T15:11:28.854273"
    };
};

export async function voteApi(vote) {
    // return axios.post(this.getApi('/vote'), vote);
    tempRecordData = {
        ...tempRecordData,
        [vote.userId]: [vote]
    };
    return {
        "status": "200",
        "message": "OK",
        "data": null,
        "time": "2023-06-05T15:14:10.613582"
    };
};

export async function recordApi(userId) {
    // return axios.get(this.getApi('/record'), {
    //     params: {
    //         userId
    //     }
    // });

    return {
        "status": "200",
        "message": "OK",
        "data": tempRecordData[userId] || []
        // || [
        //     {
        //         "userId": "Cherry",
        //         "optionId": "02"
        //     },
        //     {
        //         "userId": "Cherry",
        //         "optionId": "02"
        //     },
        //     {
        //         "userId": "Cherry",
        //         "optionId": "02"
        //     },
        //     {
        //         "userId": "Cherry",
        //         "optionId": "02"
        //     }
        // ]
        ,
        "time": "2023-06-05T15:14:21.307113"
    };
};

export async function resultApi() {
    // return axios.get(this.apiUrl('/result'));
    return {
        "status": "200",
        "message": "OK",
        "data": 
        Object.values(tempRecordData).reduce((arr, entries) => {
            entries.forEach((entry) => {
                const existingOption = arr.find((item) => item.optionId === entry.optionId);
                if (existingOption) {
                existingOption.count++;
                } else {
                arr.push({
                    optionId: entry.optionId,
                    count: 1
                });
                }
            });
            return arr;
            }, [])
        // [
        //     {
        //         "optionId": "01",
        //         "count": 3
        //     },
        //     {
        //         "optionId": "02",
        //         "count": 4
        //     },
        //     {
        //         "optionId": "03",
        //         "count": 0
        //     },
        //     {
        //         "optionId": "04",
        //         "count": 0
        //     }
        // ]
        ,
        "time": "2023-06-05T15:14:23.660586"
    };
}