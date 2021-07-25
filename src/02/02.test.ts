import {CityType} from "./02_02";

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

test('test city chould contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAd).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White Street');

    expect(city.houses[1].buildedAd).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy Street');

    expect(city.houses[2].buildedAd).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy Street');

})

test('test city should contains haspital and fire station', () => {
    expect(city.govermentBuildings.length).toBe(2);

    expect(city.govermentBuildings[0].type).toBe('HOSPITAL');
    expect(city.govermentBuildings[0].budget).toBe(200000);
    expect(city.govermentBuildings[0].staffCount).toBe(200);
    expect(city.govermentBuildings[0].address.street.title).toBe('Central Str');

    expect(city.govermentBuildings[1].type).toBe('FIRE-STATION');
    expect(city.govermentBuildings[1].budget).toBe(500000);
    expect(city.govermentBuildings[1].staffCount).toBe(1000);
    expect(city.govermentBuildings[1].address.street.title).toBe('South Str');
})