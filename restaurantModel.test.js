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
describe ("Menu", () => {
    test ("has a type and items", () => {
        const Menu = new Menu({type: "Wine Menu"})
        expect(menu.type).toBe("Wine Menu")
        expect(Array.isArray(menu.items)).toBeTruthy()
    })
})