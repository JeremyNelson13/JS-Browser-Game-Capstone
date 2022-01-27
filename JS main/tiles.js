//Scripting to Handle Map Creation
//Map Tile Handler
class mapTile {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    introText() {
        if(this.constructor === mapTile) {
            throw new TypeError('Abstract Class "mapTile" cannot be instantiated directly.');
        }
    }

    modPlayer(player) {
        if (this.constructor === mapTile) {
            throw new TypeError('Abstract  class "mapTile" cannot be instantiated directly.');
        }
    }

    adjacentMove(){
        let moves = []

        if (tileExists(this.x+1, this.y)){
            moves.push(new moveEast())
        } if (tileExists(this.x-1, this.y)){
            moves.push(new moveWest())
        } if (tileExists(this.x, this.y-1)){
            moves.push(new moveNorth())
        } if (tileExists(this.x, this.y+1)){
            moves.push(new moveSouth())
        }
        return moves
    }

    availableActions() {
        let moves = this.adjacentMove()
        moves.push(new ViewInventory())
        return moves
    }
}

//Below Are Various Tiles
class DungeonHallway extends mapTile {
    constructor(x,y){
        super(x,y)
    }
    introText() {
        return "A nondescript dungeon hallway. You must continue onward..."
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

class FindCestusRoom extends LootRoom {
    constructor(x,y) {
        super(x, y, new Cestus())
    }

    introText() {
        if (this.item.pickedUp) {
            return "This room is empty, keep moving."
        } else {
            return "You notice a small metal object in a pile of refuse. <p> It's a Cestus. You take it and continue onwards.</p>"
        }
    }
}

class StartingCell extends mapTile {
    constructor(x,y) {
        super(x,y)
    }
    introText() {
        return "You come to in a dank and decrepit cell, deep within the palace walls. You have been preparing for this moment for days, stashing items, learning of the guards' schedules... plotting. You are ready to make your escape. The cell door is easily defeated by a pick stashed in your cell. You are at the intersection of four near identical dungeon hallways..."
    }
    modPlayer(player){
        //nothing in this room
    }
}

class DungeonExit extends mapTile {
    constructor(x,y) {
        super(x,y)
    }
    introText() {
        return "Could your schemes be so close to fruition? You feel a thin draft of air, stinking of manure and wet hay. Before you lies a grate lined with sunlight, sweet sunlight... You have managed to escape the Oubliette... Where you go now is of your choosing."
    }
    modPlayer(player){
        player.victory = true
    }
}

//create other tiles. guard room, cestus room, etc