class Restaurant {
    constructor({name}) {
        if(!name) throw new Error('Restaurant must have a name')
        this.name = name
    }

}
class Menu {}
class Items{}
class People{}
class Price{}

module.exports = {
    Restaurant,
    Menu, 
    Items,
    People,
    Price
}