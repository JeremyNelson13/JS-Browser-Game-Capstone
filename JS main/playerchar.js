//Player Related Scripting Goes Here
// This class will handle player characters
class Player {
    constructor(inventory, hp, location_x, location_y, victory) {
       this.inventory = []
       this.hp = 100
       this.location_x = startPosition[0]
       this.location_y = startPosition[1]
       this.victory = false
    }

    isAlive() {
        return this.hp > 0
    }

    do_action(action,...others){

    }

    printInventory() {
        let text = "Inventory"
        this.inventory.forEach(item =>{
            text += `<p>${item.description}</p>`
            console.log(item.description)
        });
        render(text)
    }

    move(dx, dy) {
        this.location_x += dx
        this.location_y += dy
        console.log(tileExists(this.location_x, this.location_y))
    }

    moveNorth() {
        this.move(0,-1)
    }
    
    moveSouth() {
        this.move(0,1)
    }

    moveEast() {
        this.move(1,0)
    }

    moveWest() {
        this.move(-1,0)
    }

    flee() {
        let room = world[[player.location_x, player.location_y]]
        let availableMoves = room.adjacentMoves()
        let r = Math.floor((Math.random()* availableMoves.length))
        console.log(r)

        if (availableMoves[r].name == "Move south") {
            this.moveSouth()
        } else if (availableMoves[r].name == "Move north") {
            this.moveNorth()
        } else if (availableMoves[r].name == "Move east") {
            this.moveEast()
        } else if (availableMoves[r].name == "Move west") {
            this.moveWest()
        }
    }

    attack(enemy) {
        let bestWeapon = null
        let maxDmg = 0

        this.inventory.forEach(item =>{
            if (item instanceof Weapon) {
                if (item.damage > maxDmg) {
                    maxDmg = item.damage
                    bestWeapon = item
                    console.log(bestWeapon.name)
                }
            }
        });

        let text = "";
        console.log(`You use ${bestWeapon.name} against ${enemy.name}!`)

        text += `You use a ${bestWeapon.name} against ${enemy.name}!`
        enemy.hp -= bestWeapon.damage
        if (!enemy.isAlive()) {
            console.log(`You killed the ${enemy.name}!`)
            text += `<p> You killed the ${enemy.name}!`
        } else {
            console.log(`${enemy.name} has ${enemy.hp} left.`)
            text += `<p>${enemy.name} has ${enemy.hp} left.`
        }

        addStory Text(text)
    }
}

const player = new Player()
//

class Action {
    constructor (method, name) {
        this.method = method
        this.name = name
    }
}

class ViewInventory extends Action {
    constructor (method, name) {
        super(method = player.printInventory, name="View Inventory")
    }
}

class MoveSouth extends Action {
    constructor (method, name) {
        super(method = player.moveSouth, name="Move south")
    }
}

class MoveNorth extends Action {
    constructor (method, name) {
        super(method = player.moveNorth, name="Move north")
    }
}

class MoveEast extends Action {
    constructor (method, name) {
        super(method = player.moveEast, name="Move east")
    }
}

class MoveWest extends Action {
    constructor (method, name) {
        super(method = player.moveWest, name="Move west")
    }
}

class Attack extends Action {
    constructor (method, name) {
        super(method = player.attack, name="Attack")
    }
}

class Flee extends Action {
    constructor (method, name, tile) {
        super(method = player.flee, name="Flee")
        this.tile = tile
    }
}


// class Player {
//     constructor (inventory, hp, location_x, location_y, victory) {
//         this.inventory = []
//         this.hp = 100
//         this.location_x = startPosition[0]
//         this.location_y = startPosition[1]
//         this.victory = false
//     }
// isAlive(){
//     return this.hp > 0
// }

// do_action(action,...others){

// }

// }

// printInventory(); {
//     let text = "Inventory"
//     this.inventory.forEach(item => {
//         text += `<p>${item.description}</p>`
//         console.log(item.description)
//     });
//     render(text)
// }

// move (dx,dy); {
//     this.location_x += dx
//     this.location_y += dy
//     console.log(tileExists(this.location_x,this.location_y))
// }

// moveNorth(); {
//     this.move(0,-1)
// }

// moveSouth(); {
//     this.move(0,1)
// }

// moveEast(); {
//     this.move(1,0)
// }

// moveWest(); {
//     this.move(-1,0)
// }

// fleeCombat(); {
//     let room = world[[player.location_x, player.location_y]]
//     let availableMoves = room.adjacentMoves()
//     let r = Math.floor((Math.random()*availableMoves.length))
//     console.log(r)
//     if (availableMoves[r].name == "Move South") {
//         this.moveSouth()
//     } else if (availableMoves[r] == "Move North") {
//         this.moveNorth()
//     } else if (availableMoves[r] == "Move East") {
//         this.moveEast()
//     } else if (availableMoves[r] == "Move West") {
//         this.moveWest()
//     }
// }

// attack(monster); {
//     let bestWeapon = null
//     let maxDmg = 0

//     this.inventory.forEach(item => {
//         if (item instanceof Weapon) {
//             if (item.damage > maxDmg) {
//                 maxDmg = item.damage
//                 bestWeapon = item
//                 console.log(bestWeapon.name)
//             }
//         }
//     });

// let text = "";
// console.log(`You use ${bestWeapon.name} against ${enemy.name}!`)

// text += `You use ${bestWeapon.name} against the ${enemy.name}!`
// enemy.hp -= bestWeapon.damage
// if (!enemy.isAlive()) {
//     console.log(`You killed the ${enemy.name}!`)
//     text += `<p>You killed the ${enemy.name}!</p>`
// } else {
//     console.log(`${enemy.name} has ${enemy.hp} HP left.`)
//     text += `<p>${enemy.name} has ${enemy.hp} HP left.</p>`
// }

// addStoryText(text)
// }

// player = new Player()



// console.log(Player);