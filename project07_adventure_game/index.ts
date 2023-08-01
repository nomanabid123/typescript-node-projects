const input = require("prompt-sync")();

class Enemy {
  name: string;
  health: number;
  damage: number;
  constructor(name: string, health: number, damage: number) {
    this.name = name;
    this.health = health;
    this.damage = damage;
  }
}

class Player {
  name: string;
  health: number;
  damage: number;
  healthPotions: number;
  healthPotionHealAmount: number;
  healthPotionDropChance: number;
  constructor(
    name: string,
    health: number,
    damage: number,
    healthPotions: number,
    healthPotionHealAmount: number,
    healthPotionDropChance: number
  ) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.healthPotions = healthPotions;
    this.healthPotionHealAmount = healthPotionHealAmount;
    this.healthPotionDropChance = healthPotionDropChance;
  }
}

function fight(enemy: Enemy, player: Player) {
  while (enemy.health > 0 && player.health > 0) {
    const playerDamage = Math.floor(Math.random() * player.damage);
    const enemyDamage = Math.floor(Math.random() * enemy.damage);
    enemy.health -= playerDamage;
    player.health -= enemyDamage;
    console.log(`You hit the ${enemy.name} for ${playerDamage} damage!`);
    console.log(`The ${enemy.name} hit you for ${enemyDamage} damage!`);
    console.log(`You have ${player.health} health left.`);
    console.log(`The ${enemy.name} has ${enemy.health} health left.`);
  }
  if (enemy.health <= 0) {
    console.log(`You killed the ${enemy.name}!`);
    return true;
  } else {
    console.log(`The ${enemy.name} killed you!`);
    return false;
  }
}

function heal(player: Player) {
  if (player.healthPotions > 0) {
    player.health += player.healthPotionHealAmount;
    player.healthPotions--;
    console.log(
      `You healed yourself for ${player.healthPotionHealAmount} health!`
    );
    console.log(`You have ${player.health} health left.`);
  } else {
    console.log(`You don't have any health potions left!`);
  }
}

function game() {
  const player = new Player("Player", 100, 50, 3, 30, 0.5);
  const enemies = [
    new Enemy("Goblin", 50, 20),
    new Enemy("Orc", 100, 30),
    new Enemy("Troll", 150, 40),
  ];
  let enemy = enemies[Math.floor(Math.random() * enemies.length)];
  console.log(`You are fighting a ${enemy.name}!`);
  const won = fight(enemy, player);
  if (won) {
    if (Math.random() < player.healthPotionDropChance) {
      player.healthPotions++;
      console.log(`The ${enemy.name} dropped a health potion!`);
    }
    console.log(`You have ${player.healthPotions} health potions left.`);
    if (player.health < 50) {
      heal(player);
    }
  }
}

while (true) {
  game();
  const playAgain = input("Play again? (y/n) ");
  if (playAgain === "n") {
    break;
  }
}
