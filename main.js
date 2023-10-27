"use strict"
import {VillageState} from "./VillageState.mjs";
function buildGraph(edges)
{
    let graph = Object.create(null);
    function addEdge(from, to)
    {
        if (graph[from] == null)
        {
            graph[from] = [to];
        }
        else
        {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-")))
    {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roads = [
    "Dom Alicji-Dom Bartka", "Dom Alicji-Chata", "Dom Alicji-Poczta", "Dom Bartka-Ratusz", "Dom Darii-Dom Ernesta", "Dom Darii-Ratusz", "Dom Ernesta-Dom Grety", "Dom Grety-Farma", "Dom Grety-Sklep", "Rynek-Farma", "Rynek-Poczta", "Rynek-Sklep", "Rynek-Ratusz", "Sklep-Ratusz"
];
export const roadGraph = buildGraph(roads);

let firstState = new VillageState("Poczta", [{place: "Poczta", address: "Dom Alicji"}], roadGraph);
let nextState = firstState.move(firstState.Parcels.address);
// firstState.move("Dom Alicji");

function runRobot(state, robot, memory)
{
    for (let turn = 0;; turn++) {
        if(state.Parcels.length === 0) {
            console.log(`Robot skończyl po wykonaniu ${this.turn} ruchów.`);
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Robot przemieścił się do ${action.direction}`);
    }

}

// function randomRobot(state)
// {
//     console.log(state);
//     console.log(state.RoadGraphStatic);
//     console.log(state.)
//     return {direction: state.randomPick(state.RoadGraph[state.place])};
// }
// runRobot(VillageState.randomState(), randomRobot)

function randomPick(array)
{
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state)
{
    console.log(roadGraph);
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5)
{
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place === address);
        parcels.push({place, address});
    }
    return new VillageState("Poczta", parcels);
}

runRobot(VillageState.random(), randomRobot());