//Monster Scripting Goes in Here
class Enemy {
    constructor(name, hp, damage) {
        this.name = name
        this.hp = hp
        this.damage = damage
    }

    isAlive(){
        return this.hp > 0
    }
}

class Guard extends Enemy {
    constructor(name, hp, damage) {
        super(name="Guard", hp=20, damage=5)
    }
}