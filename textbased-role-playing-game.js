/**
 * Created by esattahaibis on 2015-11-28.
 */

/* Create variables for game */
var flagReplay; /* flag for keeping replay data */
var flagPlayerDead; /* flag of player shows player is alive or dead */
var flagCthulhuDead; /* flag of cthulhu show cthulhu is alive or dead */
var playerHealth; /* variable for player's health */
var cthulhuHealth; /* variable for cthulhu's health */
var playerType; /* variable for player type ( Warrior or Mage ) */
var playerName; /* container that stores player name */
var attackType; /* container that stores which attack type player chose */
var damage; /* container that stores damage */

/**
 * Returns the damage of Warrior attack 1
 * @returns {Number} damage dealt by attack1
 */
function WarriorAttackOne() {
	var attackChance;
	var attackDamage = 0;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
		attackDamage = 5;
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
		attackDamage = 10;
	} else {
		/* do high damage */
		attackDamage = 20;
	}
	return attackDamage;
}
/**
 * Returns the damage of Warrior attack 2
 * @returns {Number} damage dealt by attack2
 */
function WarriorAttackTwo() {
	var attackChance;
	var attackDamage = 0;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
		attackDamage = 3;
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
		attackDamage = 20;
	} else {
		/* do high damage */
		attackDamage = 25;
	}
	return attackDamage;
}
/**
 * Returns the damage of Warrior attack 3
 * @returns {Number} damage dealt by attack3
 */
function WarriorAttackThree() {
	var attackChance;
	var attackDamage = 0;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
		attackDamage = 5;
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
		attackDamage = 10;
	} else {
		/* do high damage */
		attackDamage = 35;
	}
	return attackDamage;
}
/**
 * Returns the damage of Mage attack 1
 * @returns {Number} damage dealt by attack1
 */
function MageAttackOne() {
	var attackChance;
	var attackDamage = 0;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
		attackDamage = 5;
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
		attackDamage = 10;
	} else {
		/* do high damage */
		attackDamage = 20;
	}
	return attackDamage;
}
/**
 * Returns the damage of Mage attack 2
 * @returns {Number} damage dealt by attack2
 */
function MageAttackTwo() {
	var attackChance;
	var attackDamage = 0;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
		attackDamage = 3;
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
		attackDamage = 20;
	} else {
		/* do high damage */
		attackDamage = 25;
	}
	return attackDamage;
}
/**
 * Returns the damage of Mage attack 3
 * @returns {Number} damage dealt by attack3
 */
function MageAttackThree() {
	var attackChance;
	var attackDamage = 0;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
		attackDamage = 5;
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
		attackDamage = 10;
	} else {
		/* do high damage */
		attackDamage = 35;
	}
	return attackDamage;
}
/**
 * Returns the damage of cthulhu
 * @returns {Number} damage dealt by Cthulhu
 */
function CthulhuAttack() {
	var attackChance;
	var attackDamage = 0;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 10) {
	/* don't do any damage */
		attackDamage = 0;
	} else if ( attackChance >= 10 && attackChance < 30 ) {
		/* do low damage */
		attackDamage = 10;
	} else if (attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
		attackDamage = 15;
	} else if (attackChance >= 70 && attackChance < 90) {
		/* do high damage */
		attackDamage = 20;
	} else {
		/* kill instantly */
		attackDamage = 100;
	}
	return attackDamage;
}

do {
	/* Initialize variables with their default values*/
	flagReplay = false;
	flagPlayerDead = false;
	flagCthulhuDead = false;
	playerHealth = 100;
	cthulhuHealth = 100;
	damage = 0;
	/*------------------------------------------------------------------------------*/

	alert("Welcome to /*Insert game name*/.");
	playerName = prompt("Before anything else please type your name:","Player One");
	playerType = prompt("Please Choose your class (Warrior / Mage):").toLowerCase();
	while ( playerType != "warrior" && playerType != "mage") {
		playerType = prompt("Unknown Class. Please choose again (Warrior / Mage):").toLowerCase();
	}
	/* Path for warrior */
	if (playerType == "warrior") {
		alert("/*General story line to introduce the game to player*/");
		do {
			attackType = Number(prompt("/*Player chooses an attack type (attack 1, 2, 3)*/"));
			while (attackType != 1 && attackType != 2 && attackType != 3) {
				attackType = Number( prompt("Unknown attack type. Please choose valid attack type ( attack 1, 2, 3 ):") );
			}
			switch ( attackType ) {
				case 1:
					damage = WarriorAttackOne();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to false */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 2:
					damage = WarriorAttackTwo();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to false */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 3:
					damage = WarriorAttackThree();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to false */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
			}
			if (flagCthulhuDead == true) {
				alert("You Defeated Cthulhu. You glorious bastard.");
				break;
			} else {
				alert("You dealt " + damage + " damage to Cthulhu. Cthulhu's remaining health is " + cthulhuHealth + ".");
			}
			/* Cthulhu's turn to attack */
			damage = CthulhuAttack();
			if (damage == 100) {
				alert("Cthulhu killed you with one shot.");
				flagPlayerDead = true;
			} else {
				playerHealth -= damage;
				if (playerHealth <= 0) {
					alert("Cthulhu dealt " + damage + " damage. You are dead");
					flagPlayerDead = true;
				}
				else {
					alert("Cthulhu dealt " + damage + " damage. Your remaining health is " + playerHealth + ".");
				}
			}
		}while (flagPlayerDead != true);
	}
	/* Path for Mage */
	else {
		alert("/*General story line to introduce the game to player*/");
		do {
			attackType = Number(prompt("/*Player chooses an attack type (attack 1, 2, 3)*/"));
			while (attackType != 1 && attackType != 2 && attackType != 3) {
				attackType = Number( prompt("Unknown attack type. Please choose valid attack type ( attack 1, 2, 3 ):") );
			}
			switch ( attackType ) {
				case 1:
					damage = MageAttackOne();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to true */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 2:
					damage = MageAttackTwo();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to true */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 3:
					damage = MageAttackThree();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to true */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
			}
			/* Control Cthulhu is dead if it's dead finish the loop*/
			if (flagCthulhuDead == true) {
				alert("You Defeated Cthulhu. You glorious bastard.");
				break;
			} else {
				alert("You dealt " + damage + " damage to Cthulhu. Cthulhu's remaining health is " + cthulhuHealth + ".");
			}
			/*-------------------------------------------------------*/
			/* Cthulhu's turn to attack */
			damage = CthulhuAttack();
			if (damage == 100) {
				alert("Cthulhu killed you with one shot.");
				flagPlayerDead = true;
			} else {
				playerHealth -= damage;
				if (playerHealth <= 0) {
					alert("Cthulhu dealt " + damage + " damage. You are dead");
					flagPlayerDead = true;
				}
				else {
					alert("Cthulhu dealt " + damage + " damage. Your remaining health is " + playerHealth + ".");
				}
			}
		}while (flagPlayerDead != true);
	}
	/* Confirm player wants to play again or not */
	flagReplay = window.confirm("Do you wish to play again?");
}while (flagReplay == true);
alert("Thanks for playing /*insert game name*/. See you later.");