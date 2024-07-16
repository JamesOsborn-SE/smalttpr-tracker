let g = "metroid3";
defaultItemGrid[g] = [
    [
        "m3missile",
        "m3supermissile",
        "m3powerbomb",
        "m3grappling",
        "m3xray",
        "z3hookshot",
        "z3lantern",
    ],
    [
        "m3charge",
        "m3ice",
        "m3wave",
        "m3spazer",
        "m3plasma",
        "z3hammer",
        "z3flute",
    ],
    [
        "m3varia",
        "m3morph",
        "m3bombs",
        "m3space",
        "m3hijump",
        "z3mirror",
        "z3agahnim",
    ],
    [
        "m3gravity",
        "m3springball",
        "m3screw",
        "m3speed",
        "m3etank",
        "z3boots",
        "z3glove",
    ],
    [
        "m3kraid",
        "m3phantoon",
        "m3draygon",
        "m3ridley",
        "m3rtank",
        "z3flippers",
        "z3moonpearl",
    ],
];

dungeonchestsInit[g] = {};

// 5 minibosses (BT, SpoSpo, Croc, Botwoon, GT), 4 G4, 1 Mother Brain
let m3 = 5 + 4 + 1;
dungeonbeatenInit[g] = Array(m3).fill(false);
prizesInit[g] = Array(m3).fill(0);
medallionsInit[g] = Array(m3).fill(0);
