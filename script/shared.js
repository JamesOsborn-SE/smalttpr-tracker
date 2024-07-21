String.prototype.ucfirst = function () {
    return this.substr(0,1).toUpperCase() + this.slice(1);
}

const CRYSTAL = 0;
const OJCRYSTAL = 1;
const OFFPENDANT = 2;
const GREENPENDANT = 3;
const Z1FACTOR = 4;

function getParameterByName(name, url, defaultVal) {
    if (!url) url = window.location.href;
    if (!defaultVal && defaultVal !== null) defaultVal = "";
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultVal;
    if (!results[2]) return defaultVal;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

var manifests = [];
var g = "";
var bosses = 0;

var selectedGame = getParameterByName("game",window.location,"zelda3");
var effectiveVersion = "";

var regionObjects = {};
var regionNames = {};
var zeldaMode = getParameterByName("zeldaMode",window.location,"oldstyle");
var metroidMode = getParameterByName("metroidMode",window.location,"");

var questid = getParameterByName("questid",window.location,1);
var authAttempted = false;

function destroyFirebase() {
}

function tokenize(input) {
    let output = input;
    let replacements = {
        ' ': '-',
        '"': '',
        "'": ''
    };
    for(let search in replacements) {
        let replace = replacements[search];
        output = output.replace(search,replace);
    }
    return output.toLowerCase();
}

function fix_itemlabel(item) {
    var ret = item;
    if(itemNames[ret]) {
        ret = itemNames[ret];
    }

    if((ret.indexOf("boss") === 2) || (ret.indexOf("chest") === 2)) {
        var start = ret.indexOf("boss") === 2 ? 6 : 7;
        if(dungeons[selectedGame][ret.slice(start)]) {
            ret = dungeons[selectedGame][ret.slice(start)].titleStripped;
        }
    }
    if(ret.indexOf("triforcepiece") === 2) {
        ret = "Triforce Piece " + ret.substr(-1);
    }
    ret = ret.ucfirst();
    return ret;
}

function build_img_url(item,useGame = selectedGame) {
    var misc = [
        "blank",
        "highlighted",
        "poi"
    ];

    var zelda3items     = "zelda3"      in gameItems ? gameItems.zelda3 : [];
    var zelda1items     = "zelda1"      in gameItems ? gameItems.zelda1 : [];
    var metroid3items   = "metroid3"    in gameItems ? gameItems.metroid3 : [];
    var metroid1items   = "metroid1"    in gameItems ? gameItems.metroid1 : [];
    var averge1items    = "averge1"     in gameItems ? gameItems.averge1 : [];
    let filext = "png";

    let itemKey = item;
    if(item.substring(1,2) == "1" || item.substring(1,2) == "3") {
        item = item.substring(2);
    }

    // Not Boss & not Chest
    if((item.indexOf("boss") == -1) && (item.indexOf("chest") == -1)) {
        if(item == "bomb") {
            useGame = "zelda3";
        } else if(metroid3items.indexOf(itemKey) > -1 || metroid3items.indexOf(itemKey.substr(0,itemKey.length-1)) > -1) {
            useGame = "metroid3";
        } else if(metroid1items.indexOf(itemKey) > -1 || metroid1items.indexOf(itemKey.substr(0,itemKey.length-1)) > -1) {
            useGame = "metroid1";
        } else if(zelda1items.indexOf(itemKey) > -1 || zelda1items.indexOf(itemKey.substr(0,itemKey.length-1)) > -1) {
            useGame = "zelda1";
        } else if(zelda3items.indexOf(itemKey) > -1 || zelda3items.indexOf(itemKey.substr(0,itemKey.length-1)) > -1) {
            useGame = "zelda3";
        } else if(averge1items.indexOf(itemKey) > -1 || averge1items.indexOf(itemKey.substr(0,itemKey.length-1)) > -1) {
            useGame = "averge1";
        }
    }
    if(selectedGame == "zelda1" && item.indexOf("boss5") > -1) {
        filext = "gif";
    }

    var globalReplaceItem = {
        agahnim:    "agahnim1",
        bomb:       "bomb1",
        bomb0:      "bomb1",
        boomerang0: "boomerang1",
        bottle:     "bottle1",
        bottle0:    "bottle1",
        candle:     "candle1",
        candle0:    "candle1",
        crystal5:   "dungeon" + OJCRYSTAL,
        crystal6:   "dungeon" + OJCRYSTAL,
        flute:      "flute0",
        glove0:     "glove1",
        lamp:       "lantern",
        medallion1: "bombos",
        medallion2: "ether",
        medallion3: "quake",
        pendant0:   "dungeon" + GREENPENDANT,
        ring0:      "ring1",
        shield0:    "shield1",
        sword0:     "sword1",
    };
    globalReplaceItem["blueCrystal"] = "dungeon" + CRYSTAL;
    globalReplaceItem["redCrystal"] = "dungeon" + OJCRYSTAL;

    if(globalReplaceItem[item]) {
        item = globalReplaceItem[item];
    }

    var category = "inventory";
    for([start,cat] of Object.entries({
        "boss": "bosses",
        "chest": "chests",
        "medallion": "medallions",
        "dungeon": "prizes",
        "pendant": "prizes"
    })) {
        if(item.startsWith(start)) {
            category = cat;
        }
    }
    if(misc.indexOf(item) > -1) {
        category = "misc";
    }

    var url = "images/";
    if(category != "misc") {
        url += useGame + '/';
    }
    url += category + '/' + item + '.' + filext;

    return url;
}

function mini(item) {
    if(item.substring(1,2) == "1" || item.substring(1,2) == "3") {
        item = item.substring(2);
    }
    var title = item.ucfirst();

    var globalReplaceTitle = {
        pendant1: "Pendant of Power",
        pendant2: "Pendant of Wisdom",
    };
    globalReplaceTitle["dungeon" + GREENPENDANT]    = "Pendant of Courage";
    globalReplaceTitle["dungeon" + CRYSTAL]         = "Blue Crystal";
    globalReplaceTitle["dungeon" + OJCRYSTAL]       = "Red Crystal";

    if(globalReplaceTitle[item]) {
        title = globalReplaceTitle[item].ucfirst();
    }

    for(var i = 0; i < 10; i++) {
        title = title.replace(i,"");
    }
    return '<img src="' + build_img_url(item) + '" title="' + title + '" class="mini" />';
}

function init(callback,arguments) {
    callback(arguments);
}
