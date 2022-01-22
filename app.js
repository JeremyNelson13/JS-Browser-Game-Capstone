// // This class will handle player characters


// class Player {
//     constructor(inventory, hp, location_x, location_y, victory){
//        this.inventory = []
//        this.hp = 100
//        this.location_x = startPosition[0] //or something similar
//        this.location_y = startPosition[1] //or something similar
//        this.victory = false
//     //    this.playerClass = playerClass(); this should be an object that modifies this object I think.git 
//     }
//  }
// console.log(Player);
// A generic item class which can be reused for diff. inventory items.


 class Item {
    constructor(name, description, value){
       this.name = name
       this.description = description
       this.value = value
       this.pickedUp = false
    }
 }
 class Gold extends Item {
     constructor(name, description, amt) {
        //  super("Gold","Currency of the realm, as best you can tell it is legitimate", amt)
         this.name = "Gold"
         this.description = "Currency of the realm, as best you can tell it is legitimate"
         this.amt = amt
     }
 }

 class Weapon extends Item {
     constructor(name,description,value,damage){
         super(name, description, value)
         this.damage = damage
     }
 }

 class Club extends Weapon {
     constructor(name, description, value, damage){
         super("Club","A short and sturdy length of hardwood", 1, 3)
     }
 }

 class Cestus extends Weapon {
     constructor(name, description, value, damage) {
         super("Cestus","A pair of metal knuckles, slightly sharpened along their outside edge", 5, 10)
     }
 }
console.log(Gold);
// Include dice roller?

// Enemy/Monster class
class Enemy {
    constructor(monsterName, hp, damage) {
        this.name = monsterName
        this.hp = hp
        this.damage = damage
    }
    isAlive(){
        return this.hp > 0
    }
}
//add some different enemy classes. Goblin, Bandit, Golem etc.
console.log(Enemy);
// Player Class
// Barbarian, Rogue, Magician

