g = "zelda1";
defaultItemGrid[g] = [
    // Z1
    [
        "z1boomerang",
        "z1bomb",
        "z1bow",
        "z1woods",
        "z1silvers",
        "z1candle",
        "m1morph",
        "m1bombs"
    ],
    [
        "z1recorder",
        "z1food",
        "z1bottle",
        "z1magicalrod",
        "z1sword",
        "z1shield",
        "z1heartcontainer",
        "m1ice"
    ],
    [
        "z1raft",
        "z1book",
        "z1ring",
        "z1ladder",
        "z1magicalkey",
        "z1bracelet",
        "z1letter",
        "m1hijump"
    ],
    [
        "z1boss0",
        "z1boss1",
        "z1boss2",
        "z1boss3",
        "z1boss4",
        "z1boss5",
        "z1boss6",
        "z1boss7",
    ]
];

dungeonchestsInit[g] = {};

// 8 bosses in Z1
let z1 = 8;
dungeonbeatenInit[g] = Array(z1).fill(false);
prizesInit[g] = Array(z1).fill(0);
medallionsInit[g] = Array(z1).fill(0);
