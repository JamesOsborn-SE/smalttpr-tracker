g = "metroid1";
defaultItemGrid[g] = [
    [
        "m1morph",
        "m1bombs",
        "m1long",
        "m1ice",
        "m1wave"
    ],
    [
        "m1missile",
        "m1varia",
        "m1hijump",
        "m1screw",
    ],
    [
        "m1boss0",
        "m1boss1",
        "m1kraidtotem",
        "m1ridleytotem",
    ],
    [
        "m1boss2",
    ],
];

dungeonchestsInit[g] = {};

// 3 bosses in M1
let m1 = 3;
dungeonbeatenInit[g] = Array(m1).fill(false);
prizesInit[g] = Array(m1).fill(0);
medallionsInit[g] = Array(m1).fill(0);
