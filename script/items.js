var defaultItemGrid = {};
var dungeonchestsInit = {};
var dungeonbeatenInit = {};
var prizesInit = {};
var medallionsInit = {};
var itemsMin = {};
var itemsMax = {};

var gameItems = {};
gameItems.zelda3 = [
    "bow",
    "boomerang",
    "hookshot",
    "hammer",
    "firerod",
    "glove",
    "moonpearl",
    "sword",
    "tunic",
    "shield",
    "bombos",
    "ether",
    "quake",
    "somaria",
    "lantern",
    "flute",
    "book",
    "boots",
    "flippers",
    "mirror",
    "shovel",
    "mushroom",
    "powder",
    "bottle",
    "cape",
    "icerod",
    "byrna",
    "net",
    "silvers",
    "woods",
    "mpupgrade",
    "bomb",
    "heartcontainer",
    "heartpiece",
    "agahnim",

    "boss0",
    "boss1",
    "boss2",
    "boss3",
    "boss4",
    "boss5",
    "boss6",
    "boss7",
    "boss8",
    "boss9",

    "medallion0",
    "medallion1",
    "medallion2",
    "medallion3",
    "dungeon0",
    "dungeon1",
    "dungeon2",
    "dungeon3"
];

gameItems.zelda1 = [
    "boomerang",        // Z3
    "bomb",             // Z3
    "bow",              // Z3
    "woods",            // Z3
    "silvers",          // Z3
    "candle",
    "recorder",
    "food",
    "bottle",           // Z3
    "magicrod",
    "magicalrod",
    "sword",            // Z3
    "shield",           // Z3
    "heartcontainer",   // Z3
    "raft",
    "book",             // Z3
    "ring",
    "ladder",
    "magicalkey",
    "bracelet",
    "letter",
    "boss0",            // Z3
    "boss1",            // Z3
    "boss2",            // Z3
    "boss3",            // Z3
    "boss4",            // Z3
    "boss5",            // Z3
    "boss6",            // Z3
    "boss7"             // Z3
];
gameItems.metroid3 = [
    "charge",
    "ice",
    "wave",
    "spazer",
    "plasma",
    "varia",
    "gravity",
    "morph",
    "bombs",
    "springball",
    "screw",
    "hijump",
    "space",
    "speed",
    "missile",
    "supermissile",
    "powerbomb",
    "grappling",
    "xray",
    "kraid",
    "phantoon",
    "draygon",
    "ridley",
    "etank",
    "rtank",

    "boss0",
    "boss1",
    "boss2",
    "boss3",
    "boss4",
    "boss5",
    "boss6",
    "boss7",
    "boss8",
    "boss9"
];
gameItems.metroid1 = [
    "morph",        // M3
    "bombs",        // M3
    "long",
    "ice",          // M3
    "wave",         // M3
    "missile",      // M3
    "varia",        // M3
    "hijump",       // M3
    "screw",        // M3
    "kraid",        // M3
    "ridley",       // M3
    "kraidtotem",
    "ridleytotem"
];
gameItems.averge1 = [
    "axiom-disruptor",
    "nova",
    "multi-disruptor",
    "kilver",
    "hypo-atomizer",
    "voranj",
    "shards",
    "quantum-variegator",
    "reflector",
    "ion-beam",
    "tethered-charge",
    "inertial-pulse",
    "data-bomb",
    "orbital-discharge",
    "lightning-gun",
    "flamethrower",
    "distortion-field",
    "turbine-pulse",
    "reverse-slicer",
    "firewall",
    "heat-seeker",
    "scissor-beam",
    "fat-beam",
    "laser-drill",
    "field-disruptor",
    "bioflux-accelerator-1",
    "modified-lab-coat",
    "enhanced-drone-launch",
    "trenchcoat",
    "drone-teleport",
    "sudran-key",
    "red-coat",
    "passcode-tool",
    "bioflux-accelerator-2",
    "remote-drone",
    "address-disruptor-1",
    "address-disruptor-2",
    "grapple",
    "address-bomb",
    "power-node-fragment",
    "power-node",
    "health-node-fragment",
    "health-node",
    "size-node",
    "range-node"
];
for([gameID,items] of Object.entries(gameItems)) {
    for(let idx in items) {
        let item = items[idx];
        let prefix = prefixes[gameID] ? prefixes[gameID] : "";
        gameItems[gameID][idx] = prefix + item;
    }
}
for(let newItem of ["ganonz3","mbm3","ganonz1","mbm1"]) {
    gameItems.zelda3.push(newItem);
}

var itemsInit = {
    blank: false,

    // Zelda & Z3-specific
    z3tunic: 1,
    z3sword: 0,
    z3shield: 0,
    z3bow: false,
    z3boomerang: 0,
    z3bomb: 0,
    z3hookshot: false,
    z3powder: false,
    z3mushroom: false,
    z3firerod: false,
    z3icerod: false,
    z3bombos: false,
    z3ether: false,
    z3quake: false,
    z3lantern: false,
    z3hammer: false,
    z3flute: 0,
    z3shovel: false,
    z3net: false,
    z3book: false,
    z3bottle:0,
    z3somaria: false,
    z3byrna: false,
    z3cape: false,
    z3mirror: false,

    z3boots: false,
    z3glove: 0,
    z3flippers: false,
    z3moonpearl: false,
    z3mpupgrade: 0,
    z3silvers: false,
    z3woods: false,

    z3heartcontainer: 0,
    z3heartpiece: 0,

    z3agahnim: 0,
    ganonz1: 0,
    ganonz3: 0,
    mbm1: 0,
    mbm3: 0,

    // Z1-specific
    z1bow: false,
    z1woods: false,
    z1silvers: false,
    z1book: false,
    z1boomerang: 0,
    z1bomb: 0,
    z1bottle: 0,
    z1sword: 0,
    z1shield: 0,

    z1bracelet: false,
    z1candle: 0,
    z1food: false,
    z1ladder: false,
    z1letter: false,
    z1magicalkey: false,
    z1magicalrod: false,
    z1raft: false,
    z1recorder: false,
    z1ring: 0,
    z1triforcepiece1: false,
    z1triforcepiece2: false,
    z1triforcepiece3: false,
    z1triforcepiece4: false,
    z1triforcepiece5: false,
    z1triforcepiece6: false,
    z1triforcepiece7: false,
    z1triforcepiece8: false,
    z1heartcontainer: 0,

    // Metroid & M3-specific
    m3charge: false,
    m3ice: false,
    m3wave: false,
    m3spazer: false,
    m3plasma: false,
    m3varia: false,
    m3gravity: false,
    m3morph: false,
    m3bombs: false,
    m3springball: false,
    m3screw: false,
    m3hijump: false,
    m3space: false,
    m3speed: false,
    m3missile: 0,
    m3supermissile: 0,
    m3powerbomb: 0,
    m3grappling: false,
    m3xray: false,
    m3kraid: false,
    m3phantoon: false,
    m3draygon: false,
    m3ridley: false,
    m3etank: 0,
    m3rtank: 0,

    // M1-specific
    m1morph: false,
    m1bombs: false,
    m1ice: false,
    m1wave: false,
    m1missile: 0,
    m1varia: false,
    m1hijump: false,
    m1screw: false,
    m1kraid: false,
    m1ridley: false,

    m1long: false,
    m1kraidtotem: false,
    m1ridleytotem: false,

    "a1axiom-disruptor": false,
    "a1nova": false,
    "a1multi-disruptor": false,
    "a1kilver": false,
    "a1hypo-atomizer": false,
    "a1voranj": false,
    "a1shards": false,
    "a1quantum-variegator": false,
    "a1reflector": false,
    "a1ion-beam": false,
    "a1tethered-charge": false,
    "a1inertial-pulse": false,
    "a1data-bomb": false,
    "a1orbital-discharge": false,
    "a1lightning-gun": false,
    "a1flamethrower": false,
    "a1distortion-field": false,
    "a1turbine-pulse": false,
    "a1reverse-slicer": false,
    "a1firewall": false,
    "a1heat-seeker": false,
    "a1scissor-beam": false,
    "a1fat-beam": false,
    "a1laser-drill": false,
    "a1field-disruptor": false,
    "a1bioflux-accelerator-1": false,
    "a1modified-lab-coat": false,
    "a1enhanced-drone-launch": false,
    "a1trenchcoat": false,
    "a1drone-teleport": false,
    "a1sudran-key": false,
    "a1red-coat": false,
    "a1passcode-tool": false,
    "a1bioflux-accelerator-2": false,
    "a1remote-drone": false,
    "a1address-disruptor-1": false,
    "a1address-disruptor-2": false,
    "a1grapple": false,
    "a1address-bomb": false,
    "a1power-node-fragment": 0,
    "a1power-node": 0,
    "a1health-node-fragment": 0,
    "a1health-node": 0,
    "a1size-node": 0,
    "a1range-node": 0
};
