class User{
    constructor(fname){
        this.fname = fname;
    }

}
class DecoratedUser{
    constructor(user, street, city){
        this.user = user;
        this.street = street;
        this.city = city;
    }
    logger(){
        console.log(`name: ${this.user.fname}, address: ${this.street} ${this.city}`)
    }
}
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
