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