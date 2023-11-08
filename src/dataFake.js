import Map from "../src/assets/map.png";
import Map1 from "../src/assets/map1.png";
import Map2 from "../src/assets/map2.png";
import Map3 from "../src/assets/map3.png";
import Map4 from "../src/assets/map4.png";
import Map5 from "../src/assets/map5.png";


export const datafake = [
    {
        id: "test1", 
        collisions: 5, 
        battary: 0, 
        avgScore: 3.5, 
        points: 6
    },
    {
        id: "test2", 
        collisions: 6, 
        battary: 4, 
        avgScore: 2, 
        points: 1
    }, {
        id: "test3", 
        collisions: 9, 
        battary: 1, 
        avgScore: 6, 
        points: 4
    }, {
        id: "test4", 
        collisions: 0, 
        battary: 1, 
        avgScore: 3, 
        points: 2
    }, {
        id: "test5", 
        collisions: 3, 
        battary: 1, 
        avgScore: 4, 
        points: 8
    }
]

export const lineData = 
    {
        // headline: "Tests Scores",
        "#1": 80,
        "#2": 30,
        "#3": 70, 
        "#4": 10, 
        "#5": 40, 
        "#6": 80,
        "#7": 50,  
        "#8": 10, 
        "#9": 40, 
        "#10": 80,
    }


export const pieData = 
    {
        crash: 20,
        battary: 40,
        targeted: 10, 
        wind: 5, 
        balancing: 15, 
        timeOut: 10,
    }

    export const DoughnutDataBadges = 
    {
        totalBadges: 10, 
        userBadges: 8
    }

    export const DoughnutDataFail = 
    {
        totalTests: 14, 
        userFails: 2
    }

    export const DoughnutDataPerfect = 
    {
        totalTests: 14,  
        userPerfectScore: 5
    }

    export const users = 
    [
        {
            id: 1,
            admin: true, 
            firstName: "Shmoopsie",
            lastName: "poo", 
        }, 
        {
            id: 2,
            admin: false, 
            firstName: "Googlie",
            lastName: "bear", 
        }
    ]

    export const mainViewDatafake = [
        {
            id: "test1", 
            collisions: 5, 
            battary: 0, 
            avgScore: 3.5, 
            points: 6
        },
        {
            id: "test2", 
            collisions: 6, 
            battary: 4, 
            avgScore: 2, 
            points: 1
        }, {
            id: "test3", 
            collisions: 9, 
            battary: 1, 
            avgScore: 6, 
            points: 4
        }, {
            id: "test4", 
            collisions: 0, 
            battary: 1, 
            avgScore: 3, 
            points: 2
        }, {
            id: "test5", 
            collisions: 3, 
            battary: 1, 
            avgScore: 4, 
            points: 8
        }
    ]
    
    export const mainViewLineData = 
        {
            headline: "Tests Scores",
            scoreFirst: 80,
            scoreSecond: 30,
            scoreThird: 70, 
            scoreForth: 10, 
            scoreFifth: 40, 
            scoreSixth: 80,
            scoreSeventh: 50,  
            scoreEight: 10, 
            scoreNineth: 40, 
            scoreTenth: 80,
        }

        export const companiesDb = [
        {
            id: 1, 
            name: "ICL",
            size: "Large", 
            numberOfPilots: 5, 
            groups: [1,2,3,4,5,6]
        },
        {
            id: 2, 
            name: "Elbit",
            size: "Large", 
            numberOfPilots: 3, 
            groups: [1,2,3]
        },
        {
            id: 3, 
            name: "Candoo",
            size: "Medium", 
            numberOfPilots: 2, 
            numberOfPilots: 3, 
            groups: [1,2,3,4,5]
        },
        {
            id: 4, 
            name: "DownWind",
            size: "Small", 
            numberOfPilots: 4, 
            numberOfPilots: 3, 
            groups: [1,2]
        }
    ]
    
    export const maps = [
        {
            id: 1,
            total: "2", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view"
            name: "Open desert", 
            map: Map, 
            characteristics: ["desert", "open space", "arrid", "empty", "middle east"],
            description: "This map will be used for scenarios that require flying in open areas and coaping with challanges such as reception problems"
        },
        {
            id: 2,
            total: "4", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view"
            name: "Woods",  
            map: Map1, 
            characteristics: ["trees", "open space", "obsticle", "forest", "middle east", "high density"], 
            description: "This map will is good for scenarios that require flying in crowded areas"
        },
        {
            id: 3, 
            total: "6", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view"
            name: "City", 
            map: Map2, 
            characteristics: ["city", "open space", "building", "crouded", "manuvre"], 
            description: "This map will be used for scenarios that AAAAAAAAAAAAAAA"
        },
        {
            id: 4,
            total: "1", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view" 
            name: "Closed space", 
            map: Map3, 
            characteristics: ["closed space ", "open space", "empty", "high density"], 
            description: "This map will be used for scenarios that require BBBBBBBBBBBBBBBBBBBBBBBB"
        },
        {
            id: 5, 
            total: "3", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view"
            name: "Refugee camp", 
            map: Map4, 
            characteristics: ["refugee", "camp", "high density", "crowded"], 
            description: "This map will be used for scenarios that require CCCCCCCCCCCCCCCCCCC"
        },
        {
            id: 6, 
            total: "3", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view"
            name: "Open sea", 
            map: Map4, 
            characteristics: ["refugee", "camp", "high density", "crowded"], 
            description: "This map will be used for scenarios that require CCCCCCCCCCCCCCCCCCC"
        },
        {
            id: 7, 
            total: "3", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view"
            name: "Port", 
            map: Map1, 
            characteristics: ["refugee", "camp", "high density", "crowded"], 
            description: "This map will be used for scenarios that require CCCCCCCCCCCCCCCCCCC"
        },
        {
            id: 8, 
            total: "3", //in the future, this will be gone and the sum of all usage of this specific map will appear un the chart of "main view"
            name: "Combined scene", 
            map: Map2, 
            characteristics: ["refugee", "camp", "high density", "crowded"], 
            description: "This map will be used for scenarios that require CCCCCCCCCCCCCCCCCCC"
        },
    ]


    export const scenarios = [
        {
            id: 1, 
            scenarioName: "surveillance",
            difficulty_level: [2, 3] 
        },
        {
            id: 2, 
            scenarioName: "photography",
            difficulty_level: [1, 2]  
        },
        {
            id: 3, 
            scenarioName: "delivery",
            difficulty_level: [2, 3]  
        },
        {
            id: 4, 
            scenarioName: "collection",
            difficulty_level: [2, 3]  
        },
        {
            id: 4, 
            scenarioName: "targeting",
            difficulty_level: [3, 4, 5]  
        },
        {
            id: 4, 
            scenarioName: "indoors", 
            difficulty_level: [4, 5]  
        }
    ]

    export const adminList = 
    {
        userName: "admin",
        password: "admin10",
        profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU",
        lastLoggedIn: new Date().getTime,
    }