class Character{
	constructor(name, lifePoints, attackPoints, defensePoints){
		this.name = name
		this.lifePoints = lifePoints
		this.attackPoints = attackPoints
		this.defensePoints = defensePoints
	}
	doAttack(targetCharacter){
		targetCharacter.lifePoints = targetCharacter.lifePoints-(targetCharacter.defense-this.attackPoints)
		return console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
	}
}
class Thief extends Character{
	constructor(name, lifePoints, attackPoints, defensePoints){
		super(name, lifePoints, attackPoints, defensePoints)
	}
	doAttack(targetCharacter){
		if(targetCharacter=="Warrior" && targetCharacter.position=="attack"){
			targetCharacter.switchPosition()

			var step1 = (targetCharacter.defensePoints+targetCharacter.shieldPoints)-this.attackPoints
			if(step1<0){
				step1 = step1*(-1)}

			targetCharacter.lifePoints = targetCharacter.lifePoints-(step1*2)
			if(targetCharacter.lifePoints<0){console.log( targetCharacter.name, " morreu!")} else{
				console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
			}

		} else if(targetCharacter=="Warrior"){
			var step1 = (targetCharacter.defensePoints+targetCharacter.shieldPoints)-this.attackPoints
			if(step1<0){
				step1 = step1*(-1)}

			targetCharacter.lifePoints = targetCharacter.lifePoints-(step1*2)
			if(targetCharacter.lifePoints<0){console.log( targetCharacter.name, " morreu!")} else{
				console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
			}
		} else{
			var step1 = targetCharacter.defensePoints-this.attackPoints
			if(step1<0){
				step1 = step1*(-1)}

			targetCharacter.lifePoints = targetCharacter.lifePoints-(step1*2)
			if(targetCharacter.lifePoints<0){console.log( targetCharacter.name, " morreu!")} else{
				console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
			}
	}
	}
}
class Mage extends Character{
	constructor(name, lifePoints, attackPoints, defensePoints, magicPoints){
        super(name, lifePoints, attackPoints, defensePoints, magicPoints)
		this.magicPoints = magicPoints
	}
	doAttack(targetCharacter){
		if(targetCharacter=="Warrior" && targetCharacter.position=="attack"){
			targetCharacter.switchPosition()

			var step1 = (targetCharacter.defensePoints+targetCharacter.shieldPoints)-(this.attackPoints+ this.magicPoints)
			if(step1<0){
				step1 = step1*(-1)}

			targetCharacter.lifePoints = targetCharacter.lifePoints-(step1)
			if(targetCharacter.lifePoints<0){console.log( targetCharacter.name, " morreu!")} else{
				console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
			}
			
		} else if(targetCharacter=="Warrior"){
			var step1 = (targetCharacter.defensePoints+targetCharacter.shieldPoints)-(this.attackPoints+this.magicPoints)
			if(step1<0){
				step1 = step1*(-1)}

			targetCharacter.lifePoints = targetCharacter.lifePoints-(step1)
			if(targetCharacter.lifePoints<0){console.log( targetCharacter.name, " morreu!")} else{
				console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
			}
		} else {
			var step1 = targetCharacter.defensePoints-(this.attackPoints+this.magicPoints)
			if(step1<0){
				step1 = step1*(-1)
			}
			targetCharacter.lifePoints = targetCharacter.lifePoints-step1
			if(targetCharacter.lifePoints<0){console.log( targetCharacter.name, " morreu!")} else{
				console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
			}
	}
	}
	increaseLife(targetCharacter){
		targetCharacter.lifePoints += (this.magicPoints*2)
		return console.log(targetCharacter.name, "has now: ", targetCharacter.lifePoints, "pontos de vida! ")
	}
}
class Warrior extends Character{
	constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints, position){
        super(name, lifePoints, attackPoints, defensePoints, shieldPoints, position)
		this.shieldPoints = shieldPoints
		this.position = position
	}
	doAttack(targetCharacter){
		if(this.position==="defense"){this.switchPosition()}
	    var step1 = targetCharacter.defensePoints-this.attackPoints
		if(step1<0){
	        step1 = step1*(-1)}

        targetCharacter.lifePoints = targetCharacter.lifePoints-(step1)
		if(targetCharacter.lifePoints<0){console.log( targetCharacter.name, " morreu!")} else{
			console.log('Character '+ targetCharacter.name + ' has now '+ targetCharacter.lifePoints+ ' lifePoints')
		}
	}
	switchPosition(){
		return this.position == "defense"? "attack":"defense"
	}
}
const T1 = new Thief("Lula", 1000, 500, 500)
const M1 = new Mage("The White Mage", 1000, 800,300, 500)
const W1 = new Warrior("Breno", 2000, 400, 400, 500,"defense")
T1.doAttack(W1)
T1.doAttack(W1)
M1.doAttack(T1)
M1.increaseLife(W1)
W1.doAttack(M1)