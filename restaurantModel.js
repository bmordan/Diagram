class Restaurant {
    constructor({name}) {
        if(!name) throw new Error('Restaurant must have a name')
        this.name = name
    }

}
class Menu {
    constructor({type}){
        this.type = type
        this.items = []
    }
}

module.exports = {
    Restaurant,
    Menu, 
    Items,
    People,
    Price
}