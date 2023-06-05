import axios from 'axios';

const BackendApi = {
    apiUrl: 'localhost:3000',
    service: 'VoteService/vote',
    async getApi(uri) {
        return this.apiUrl + this.service + uri;
    },
    async params() {
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
                        "bgColor": "#000000"
                    },
                    {
                        "optionId": "02",
                        "label": "熱火",
                        "bgColor": "#000000"
                    },
                    {
                        "optionId": "03",
                        "label": "湖人",
                        "bgColor": "#000000"
                    },
                    {
                        "optionId": "04",
                        "label": "勇士",
                        "bgColor": "#000000"
                    }
                ]
            },
            "time": "2023-06-05T15:11:28.854273"
        };
    },
    async vote(vote) {
        // return axios.post(this.getApi('/vote'), vote);

        return {
            "status": "200",
            "message": "OK",
            "data": null,
            "time": "2023-06-05T15:14:10.613582"
        };
    },
    async record(userId) {
        // return axios.get(this.getApi('/record'), {
        //     params: {
        //         userId
        //     }
        // });

        return {
            "status": "200",
            "message": "OK",
            "data": [
                {
                    "userId": "Cherry",
                    "optionId": "02"
                },
                {
                    "userId": "Cherry",
                    "optionId": "02"
                },
                {
                    "userId": "Cherry",
                    "optionId": "02"
                },
                {
                    "userId": "Cherry",
                    "optionId": "02"
                }
            ],
            "time": "2023-06-05T15:14:21.307113"
        };
    },
    async result() {
        // return axios.get(this.apiUrl('/result'));
        return {
            "status": "200",
            "message": "OK",
            "data": [
                {
                    "optionId": "01",
                    "count": 3
                },
                {
                    "optionId": "02",
                    "count": 4
                },
                {
                    "optionId": "03",
                    "count": 0
                },
                {
                    "optionId": "04",
                    "count": 0
                }
            ],
            "time": "2023-06-05T15:14:23.660586"
        };
    }
}

export default BackendApi;