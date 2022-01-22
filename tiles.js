//Scripting to Handle Map Creation
//Map Tile Handler
class mapTile {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
}

introText(){
    if (this.constructor===mapTile) {
        throw new TypeError('Abstract class "MapTile" cannot be instantiated directly')
    }
}
modPlayer(Player){
    if (this.constructor === mapTile){
        throw new TypeError('Abstract class "MapTile" cannot be instantiated directly')
    }
}

adjacentMove(){
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

class DungeonHallway extends mapTile {
    constructor(x,y){
        super(x,y)
    }
}
introText() {
    return "A nondescript dungeon hallway"
}
modPlayer(Player) {
    //this room has no activity
}