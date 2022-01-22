//Scripting to Handle Map Creation
//Map Tile Handler
class mapTile {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
}

//Below Are Various Tiles
class DungeonHallway extends mapTile {
    constructor(x,y){
        super(x,y)
    }
    introText() {
        return "A nondescript dungeon hallway"
    }
    modPlayer(player) {
        //this room does not modify the player
    }
}

class GuardsRoom extends EnemyRoom {
    constructor(x,y){
        super(x,y, new Guard())
    }
    introText() {
        if (this.enemy.isAlive()){
            return "A Small dormitory and office space for the Guards. As you enter a Guard rises from his seat to confront you..."
        } else{
            return "The body of the Guard lies motionless on the cool stone of the dormitory."
        }
    }
}



introText(); {
    if (this.constructor===mapTile) {
        throw new TypeError('Abstract class "MapTile" cannot be instantiated directly')
    }
}
modPlayer(Player); {
    if (this.constructor === mapTile){
        throw new TypeError('Abstract class "MapTile" cannot be instantiated directly')
    }
}

adjacentMove(); {
    let moves = []

    if (tileExists(this.x+1, this.y)){
        moves.push(new moveEast())
    } if (tileExists(this.x-1,this.y)){
        moves.push(new moveWest())
    } if (tileExists(this.x, this.y-1)){
        moves.push(new moveNorth())
    } if (tileExists(this.x,this.y+1)){
        moves.push(new moveSouth())
    }
    return moves
}



//create other tiles. guard room, cestus room, etc