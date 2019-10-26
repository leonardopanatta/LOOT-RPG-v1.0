
var player = {
  level: 1,
  experience: 0,
  gold: 0,

  head: {},
  trinkets: [],
  neck: {},
  shoulders: {},
  chest: {},
  wrists: {},
  gloves: {},
  rings: [],
  oneHandedWeapon: {},
  offHand: {},
  twoHandedWeapon: {},
  legs: {},
  boots: {},

  bags: []
}

var bag = {
  name: "",
  quality: {}
}

// quality : name > level
var quality = [
  ["Common", 1, "gray"],
  ["Uncommon", 2, "green"],
  ["Rare", 3, "blue"],
  ["Epic", 4, "purple"],
  ["Legendary", 5, "orange"]
]

var headItem = {
  itemName: "Spiritwalker's Headpiece",
  itemLevel: 110,
  itemSlot: "Head",
  itemQuality: quality[3],
  itemStats: {
    armor: 34,
    agility: 0,
    intellect: 0,
    haste: 9
  },
  requiredLevel: 85,
  requiredClass: "Shaman",
  durability: {
    current: 100,
    max: 100
  }
}

function lootbag() {
  var bag = {};
  bag.name = "New bag";
  bag.quality = quality[Math.floor(Math.random() * quality.length)];
  player.bags.push(bag);
}

lootbag();
lootbag();
player.head = headItem;

player.head.durability.current = player.head.durability.current - 5;

console.log(player);