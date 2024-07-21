var chests = {};
var dungeons = {};
var defaultItemGrid = {};
var dungeonchestsInit = {};
var dungeonbeatenInit = {};
var itemNames = {};
var prizesInit = {};
var medallionsInit = {};
var itemsMin = {};
var itemsMax = {};

var gameItems = {};
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

for(let gameID of megaManifest["gameSets"][gameSet]["games"]) {
    chests[gameID] = [];
    dungeons[gameID] = [];
    gameItems[gameID] = Object.keys(manifests[gameID]["items"]);
}

var itemsInit = {
    blank: false,

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

var prefixes = {"averge1":"a1"};
for([gameID,items] of Object.entries(gameItems)) {
    if(gameID == "averge1") { continue; }
    for(let idx in items) {
        let item = items[idx];
        let prefix = prefixes[gameID] ? prefixes[gameID] : "";
        // gameItems[gameID][idx] = prefix + item;
        let itemData = manifests[gameID]["items"][prefix + item];
        itemNames[prefix + item] = itemData["name"];
        itemsInit[prefix + item] = "min" in itemData ? itemData["min"] : false;
        if("min" in itemData) {
            itemsMin[prefix + item] = itemData["min"];
        }
        if("max" in itemData) {
            itemsMax[prefix + item] = itemData["max"];
        }
    }
}
for(let newItem of ["ganonz3","mbm3","ganonz1","mbm1"]) {
    if("zelda3" in gameItems) {
        gameItems.zelda3.push(newItem);
    }
}
