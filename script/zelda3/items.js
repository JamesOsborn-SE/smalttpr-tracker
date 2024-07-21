g = "zelda3";
defaultItemGrid[g] = [
    // Z3
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
];

dungeonchestsInit[g] = {
    0: 3,
    1: 2,
    2: 2,
    3: 5,
    4: 6,
    5: 2,
    6: 4,
    7: 3,
    8: 2,
    9: 5,
    10: 20,
    11: 0,
    12: 0
};

// 13 bosses in Z3 + 4 bosses in SM
let z3 = 13;
let m3 = 4;
dungeonbeatenInit[g] = Array(z3 + m3).fill(false);
prizesInit[g] = Array(z3 + m3).fill(0);
medallionsInit[g] = Array(z3 + m3).fill(0);
