// source: 
// http://www.atpworldtour.com/Share/Event-Draws.aspx?EventId=410&Year=2013

var tree_structure = {
    chart: {
        container: "#WorldCup",
        levelSeparation:    30,
        siblingSeparation:  15,
        subTeeSeparation:   15,
        rootOrientation: "EAST",

        node: {
            HTMLclass: "tennis-draw",
            drawLineThrough: true
        },
        connectors: {
            type: "bCurve",
            style: {
                "stroke-width": 0.1,
                "stroke": "yellow"
            }
        }
    },
    
    nodeStructure: {
        text: {
            name: {
                val: "France",
                href: "",
                // http://www.atpworldtour.com/Tennis/Players/Top-Players/Novak-Djokovic.aspx
            },
            desc: "4-0"
        },
        HTMLclass: "winner",
        children: [
            {
                text: {
                    name: "France",
                    desc: ""
                },
                children: [
                    {
                        text: {
                            name: "SEMI:1 France",
                            desc: ""
                        },
                        children: [
                            {
                                text: {
                                    name: "Q: 1 Uruguay",
                                },
                                HTMLclass: "first-draw bye",
                                children: [
                                    {
                                        text: { 
                                            name: "Uruguay",
                                            title: "R16: 1"
                                        },
                                        image: "",
                                        HTMLclass: "first-draw",

                                    },
                                    {
                                        text: { 
                                            name: "Portugal",
                                            title: ""
                                        },
                                        HTMLclass: "first-draw bye"
                                    },
                                ]
                            },
                            {
                                text: {
                                    name: "France",
                                    desc: ""
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "France",
                                            title: "R16: 2"
                                        },
                                        image: "",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Argentina",
                                            title: ""
                                        },
                                        image: "",
                                        HTMLclass: "first-draw bye",
                                        
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Belgium",
                            desc: ""
                        },
                        HTMLclass: "first-draw bye",
                        children: [
                            {
                                text: {
                                    name: "Q: 2 Belgium",
                                    desc: ""
                                },
                                children: [
                                    {
                                        text: {
                                            name: "Belgium",
                                            title: "R16: 6"
                                     },
                                        image: "",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Japan",
                                            title: ""
                                        },
                                        image: "",
                                        HTMLclass: "first-draw bye"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Brazil",
                                    desc: ""
                                },
                                HTMLclass: "first-draw bye",
                                children: [
                                    {
                                        text: { 
                                            name: "Brazil",
                                            title: "R16: 5"
                                        },
                                        image: "",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Mexico",
                                            title: ""
                                        },
                                        image: "",
                                        HTMLclass: "first-draw bye"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: {
                    name: "Croatia",
                    desc: ""
                },
                HTMLclass: "first-draw bye",
                children: [
                    {
                        text: {
                            name: "SEMI:2 Croatia",
                            desc: ""
                        },
                        children: [
                            {
                                text: {
                                    name: "Q: 3 Croatia",
                                    desc: ""
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "Croatia",
                                            title: "R16: 4"
                                        },
                                        image: "",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Denmark",
                                            title: ""
                                        },
                                        image: "",
                                        HTMLclass: "first-draw bye"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Russia",
                                    desc: ""
                                },
                                HTMLclass: "first-draw bye",
                                children: [
                                    {
                                        text: { 
                                            name: "Russia",
                                            title: "R16: 3"
                                        },
                                        image: "",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: { 
                                            name: "Spain",
                                            title: ""
                                        },
                                        image: "",
                                        HTMLclass: "first-draw bye"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "England",
                            desc: ""
                        },
                        HTMLclass: "first-draw bye",
                        children: [
                            {
                                text: {
                                    name: "Q: 4 England",
                                    desc: ""
                                },
                                children: [
                                    {
                                        text: { 
                                            name: "England",
                                            title: "R16: 8"
                                        },
                                        image: "",
                                        HTMLclass: "first-draw"
                                    },
                                    {
                                        text: {
                                            name: "Colombia",
                                            title: ""
                                        },
                                        image: "",
                                        HTMLclass: "first-draw bye"
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Swiden",
                                    desc: ""
                                },
                                HTMLclass: "first-draw bye",
                                children: [
                                    {
                                        text: {
                                            name: "Swiden",
                                            title: "R16: 7"
                                        },
                                        HTMLclass: "first-draw",
                                    },
                                    {
                                        text: {
                                            name: "Switjerland",
                                            title: ""
                                        },
                                        image: "",
                                        HTMLclass: "first-draw bye",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
