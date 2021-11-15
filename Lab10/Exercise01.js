class Regular {

    constructor() {
        this.lumens = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        this.duration = 1;
    }

}
class EnergySaver {

    constructor(color) {
        this.lumens = Math.floor(Math.random() * (40 - 5 + 1)) + 5;;
        this.duration = 10;
        this.color = color;
    }

}
class Factory {
    createBulb(bulbType, color) {
        if (bulbType === 'regular') {
            return new Regular();
        }

        else {
            return new EnergySaver(color)
        }

    }
}
const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}