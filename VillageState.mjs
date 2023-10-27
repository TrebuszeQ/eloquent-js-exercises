export class VillageState
{
    Place;
    Parcels;
    // static RoadGraphStatic;
    constructor(place, parcels, roadGraph)
    {
        this.Place = place;
        this.Parcels = parcels;
        this.RoadGraph = roadGraph;
        // VillageState.RoadGraphStatic = roadGraph;
    }

    move(destination)
    {
        if (!this.RoadGraph[this.Place].includes(destination)) return this;
        else
        {
            let parcels = this.Parcels.map(parcel => {
                if (parcel.place !== this.Place) return parcel;
                return {place: destination, address: parcel.address};
            }).filter(parcel => parcel.place !== parcel.address);
            return new VillageState(destination, parcels);
        }
    }

    // randomPick(array) {
    //     console.log(array);
    //     let choice = Math.floor(Math.random() * array.length);
    //     return array[choice];
    //
    // }
    //
    // static randomPickStatic(array)
    // {
    //     let choice = Math.floor(Math.random() * array.length);
    //     return array[choice];
    // }
    //
    // static randomState(parcelCount = 5)
    // {
    //     let parcels = [];
    //     for (let i = 0; i < parcelCount; i++) {
    //         let address = this.randomPickStatic(Object.keys(this.RoadGraphStatic));
    //         let place;
    //         do {
    //             place = this.randomPickStatic(Object.keys(this.RoadGraphStatic));
    //         } while (place === address);
    //         parcels.push({place, address});
    //     }
    //     return new VillageState("Poczta", parcels);
    // }
}