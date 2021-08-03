import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouses, toFireStaff} from "./03";


let city: CityType;


beforeEach(() => {
        city = {
            title: 'New Yourk',
            houses: [{
                buildedAd: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White Street'
                    }
                }

            },
                {
                    buildedAd: 2008,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: 'Happy Street'
                        }
                    }

                },
                {
                    buildedAd: 2020,
                    repaired: false,
                    address: {
                        number: 101,
                        street: {
                            title: 'Happy Street'
                        }
                    }

                }],
            govermentBuildings: [{
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
                {
                    type: 'FIRE-STATION',
                    budget: 500000,
                    staffCount: 1000,
                    address: {
                        street: {
                            title: 'South Str'
                        }
                    }
                }],
            citizensNumber: 100000
        }
    }
)

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.govermentBuildings[0], 100000);

    expect(city.govermentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.govermentBuildings[1], -100000);

    expect(city.govermentBuildings[1].budget).toBe(400000)
})

test('Houses should be repared', () => {
    repairHouses(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy();

})

test('staff should be increased', () => {
    toFireStaff(city.govermentBuildings[0], 20);

    expect(city.govermentBuildings[0].staffCount).toBe(180);
})

