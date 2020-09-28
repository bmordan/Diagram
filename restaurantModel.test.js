const {Restaurant} = require("./restaurantModel")

describe("Restaurant", () => {
    test ("has a name", ()=> {
    const restaurant = new Restaurant({name: "Kishmish"})
    expect(restaurant.name).toBe("Kishmish")
})
test('Must have a name', () => {
    expect(() =>{new Restaurant({})}).toThrow()
})
})