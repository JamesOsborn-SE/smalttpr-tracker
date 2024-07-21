g = "zelda3";
bosses =  3 +   // Light World Dungeons
          7 +   // Dark World Dungeons
          1 +   // Hyrule Castle Tower
          1 +   // Ganon's Tower
          1 +   // Pyramid of Power: Ganon
          5+4+1;// M3
manifests[g] = {
    slug: g,
    title: {
        full:   "The Legend of Zelda: A Link to the Past",
        short:  "Z3",
        crumb:  "Hyrule of Legend"
    },
    prefix: "z3",
    altGame: [ "metroid3" ],
    regionFolder: "ALttP",
    bossDefns: [
        "ArmosKnights",
        "Lanmolas",
        "Moldorm",
        "Agahnim",
        "HelmasaurKing",
        "Arrghus",
        "Mothula",
        "Blind",
        "Kholdstare",
        "Vitreous",
        "Trinexx",
        "Ganon"
    ],
    defaultGrid: [
        [
            "z3tunic",
            "z3bow",
            "z3boomerang",
            "z3hookshot",
            "z3bomb",
            "z3powder",
        ],
        [
            "z3sword",
            "z3firerod",
            "z3icerod",
            "z3bombos",
            "z3ether",
            "z3quake",
        ],
        [
            "z3shield",
            "z3lantern",
            "z3hammer",
            "z3flute",
            "z3net",
            "z3book",
        ],
        [
            "z3mushroom",
            "z3bottle",
            "z3somaria",
            "z3byrna",
            "z3cape",
            "z3mirror",
        ],
        [
            "z3shovel",
            "z3boots",
            "z3glove",
            "z3flippers",
            "z3moonpearl",
            "z3agahnim",
        ],
        [
            "z3silvers",
            "z3boss5",
            "z3boss1",
            "z3boss2",
            "z3boss0",
            "z3boss9",
        ],
        [
            "z3mpupgrade",
            "z3boss6",
            "z3boss8",
            "z3boss4",
            "z3boss7",
            "z3boss3",
        ],
        // M3
        [
            "m3missile",
            "m3supermissile",
            "m3powerbomb",
            "m3grappling",
            "m3ice",
            "m3varia",
        ],
        [
            "m3morph",
            "m3bombs",
            "m3hijump",
            "m3screw",
            "m3speed",
            "m3gravity",
        ],
        // Z1
        [
            "m3kraid",
            "z1bow",
            "z1silvers",
            "z1recorder",
            "z1magicalrod",
            "m3phantoon",
        ],
        [
            "m3draygon",
            "z1sword",
            "z1raft",
            "z1ladder",
            "z1bracelet",
            "m3ridley",
        ],
        // M1
        [
            "m1morph",
            "m1bombs",
            "m1ice",
            "m1missile",
            "m1hijump",
        ],
        [
            "m1kraidtotem",
            "blank",
            "m1ridleytotem",
        ],
        [
            "ganonz3",
            "mbm3",
            "ganonz1",
            "mbm1",
        ]
    ],
    items: {
        z3bow:          { name: "Bow" },
        z3bombos:       { name: "Bombos Medallion" },
        z3book:         { name: "Book of Mudora" },
        z3boots:        { name: "Pegasus Boots" },
        z3byrna:        { name: "Cane of Byrna" },
        z3cape:         { name: "Magic Cape" },
        z3ether:        { name: "Ether Medallion" },
        z3firerod:      { name: "Fire Rod" },
        z3flippers:     { name: "Zora's Flippers" },
        z3hammer:       { name: "Hammer" },
        z3hookshot:     { name: "Hookshot" },
        z3icerod:       { name: "Ice Rod" },
        z3lantern:      { name: "Lamp" },
        z3mirror:       { name: "Magic Mirror" },
        z3moonpearl:    { name: "Moon Pearl" },
        z3mushroom:     { name: "Mushroom" },
        z3net:          { name: "Bug-Catching Net" },
        z3powder:       { name: "Magic Powder" },
        z3shovel:       { name: "Shovel" },
        z3somaria:      { name: "Cane of Somaria" },
        z3quake:        { name: "Quake Medallion" },
        z3silvers:      { name: "Silver Arrow Upgrade" },

        z3agahnim:      { name: "Agahnim Story Marker", min: 0, max:  2 },
        z3bomb:         { name: "Bomb",                 min: 0, max:  2 },
        z3boomerang:    { name: "Boomerang",            min: 0, max:  3 },
        z3bottle:       { name: "Bottle",               min: 0, max:  4 },
        z3flute:        { name: "Flute",                min: 0, max:  2 },
        z3glove:        { name: "Glove",                min: 0, max:  2 },
        z3heartcontainer: { name: "Heart Container",    min: 3, max: 11 },
        z3heartpiece:   { name: "Piece of Heart",       min: 0, max: 24 },
        z3mpupgrade:    { name: "Magic Meter Upgrade",  min: 0, max:  2 },
        z3shield:       { name: "Shield",               min: 0, max:  3 },
        z3sword:        { name: "Sword",                min: 0, max:  4 },
        z3tunic:        { name: "Tunic",                min: 1, max:  3 },

        z3boss0: {
            name: "Eastern Palace",
            boss: "Armos Knights",
            min: 1,
            max: 2
        },
        z3boss1: {
            name: "Desert Palace",
            boss: "Lanmolas",
            min: 1,
            max: 2
        },
        z3boss2: {
            name: "Tower of Hera",
            boss: "Moldorm",
            min: 1,
            max: 2
        },
        z3boss3: {
            name: "Palace of Darkness",
            boss: "Helmasaur King",
            min: 1,
            max: 2
        },
        z3boss4: {
            name: "Swamp Palace",
            boss: "Arrghus",
            min: 1,
            max: 2
        },
        z3boss5: {
            name: "Skull Woods",
            boss: "Mothula",
            min: 1,
            max: 2
        },
        z3boss6: {
            name: "Thieves' Town",
            boss: "Blind",
            min: 1,
            max: 2
        },
        z3boss7: {
            name: "Ice Palace",
            boss: "Kholdstare",
            min: 1,
            max: 2
        },
        z3boss8: {
            name: "Misery Mire",
            boss: "Vitreous",
            min: 1,
            max: 2
        },
        z3boss9: {
            name: "Turtle Rock",
            boss: "Trinexx",
            min: 1,
            max: 2
        },
        z3boss10: {
            name: "Ganon's Tower",
            boss: "Agahnim II",
            min: 1,
            max: 2
        },
        z3boss11: {
            name: "Hyrule Castle Tower",
            boss: "Agahnim",
            min: 1,
            max: 2
        },
        z3boss12: {
            name: "Pyramid of Power",
            boss: "Ganon",
            min: 1,
            max: 2
        }
    },
    regions: {
        // z3dungeons: ["main"],
        // overworld:  ["main"],
        // z3zebes:    ["z3-m3"],
    },
    defaultSettings: {
        mapState:   "open",
        mapOHKO:    false,
        mapSwords:  true,
        mPos:       "Side",
        mZoom:      80,
        showChests: true,
        showPrizes: true,
        showMedals: true,
    },
    dungeonchestsInit:  {
         0:  3, // Eastern Palace
         1:  2, // Desert Palace
         2:  2, // Tower of Hera
         3:  5, // Palace of Darkness
         4:  6, // Swamp Palace
         5:  2, // Skull Woods
         6:  4, // Thieves' Town
         7:  3, // Ice Palace
         8:  2, // Misery Mire
         9:  5, // Turtle Rock
        10: 20, // Ganon's Tower
        11:  0, // Hyrule Castle Tower
        12:  0  // Pyramid of Power
    },
    dungeonBeatenInit:  Array(bosses).fill(false),
    prizesInit:         Array(bosses).fill(0),
    medallionsInit:     Array(bosses).fill(0)
};
