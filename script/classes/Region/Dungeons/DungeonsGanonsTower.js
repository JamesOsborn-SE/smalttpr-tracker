class DungeonsGanonsTower extends Dungeons {
  constructor(name = "Dungeons", subname = "GanonsTower", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Dash","Ganon's Tower - Bob's Torch","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Top Left","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Top Right","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Bottom Left","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Bottom Right","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Top Left","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Top Right","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Bottom Left","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Bottom Right","","",regionName),
			new Location("Chest","Ganon's Tower - Firesnake Room","","",regionName),
			new Location("Chest","Ganon's Tower - Map Chest","","",regionName),
			new Location("BigChest","Ganon's Tower - Big Chest","","",regionName),
			new Location("Chest","Ganon's Tower - Hope Room - Left","","",regionName),
			new Location("Chest","Ganon's Tower - Hope Room - Right","","",regionName),
			new Location("Chest","Ganon's Tower - Bob's Chest","","",regionName),
			new Location("SpawnableChest","Ganon's Tower - Tile Room","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Top Left","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Top Right","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Bottom Left","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Bottom Right","","",regionName),
			new Location("Chest","Ganon's Tower - Big Key Chest","","",regionName),
			new Location("Chest","Ganon's Tower - Big Key Room - Left","","",regionName),
			new Location("Chest","Ganon's Tower - Big Key Room - Right","","",regionName),
			new Location("Chest","Ganon's Tower - Mini Helmasaur Room - Left","","",regionName),
			new Location("Chest","Ganon's Tower - Mini Helmasaur Room - Right","","",regionName),
			new Location("Chest","Ganon's Tower - Pre-Moldorm Chest","","",regionName),
			new Location("Chest","Ganon's Tower - Moldorm Chest","","",regionName),
			new Location("Boss","Ganon's Tower - Armos Knights2","","",regionName),	// FIXME: Basement Refight, not Enemizer-compatible
			new Location("Boss","Ganon's Tower - Lanmolas2","","",regionName),		// FIXME: Ascent Refight, not Enemizer-compatible
			new Location("Boss","Ganon's Tower - Moldorm2","","",regionName),		// FIXME: Top Refight, not Enemizer-compatible
			new Location("Event","Ganon's Tower - Agahnim2","77.0%","5.5%",regionName)
		],this);
	}

	this.boss = new BossAgahnim();
	this.boss_bottom = new BossArmosKnights();
	this.boss_middle = new BossLanmolas();
	this.boss_top = new BossMoldorm();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let boss_bottom = this.boss_bottom;
	let boss_middle = this.boss_middle;
	let boss_top = this.boss_top;

	if(this.buildLocations) {
		this.locations["Ganon's Tower - Bob's Torch"].glitchless = function() {
			return canDash();
		}
		this.locations["Ganon's Tower - DMs Room - Top Left"].glitchless =
		this.locations["Ganon's Tower - DMs Room - Top Right"].glitchless =
		this.locations["Ganon's Tower - DMs Room - Bottom Left"].glitchless =
		this.locations["Ganon's Tower - DMs Room - Bottom Right"].glitchless = function () {
			return has("hammer") && canGrapple();
		}
		this.locations["Ganon's Tower - Randomizer Room - Top Left"].glitchless =
		this.locations["Ganon's Tower - Randomizer Room - Top Right"].glitchless =
		this.locations["Ganon's Tower - Randomizer Room - Bottom Left"].glitchless =
		this.locations["Ganon's Tower - Randomizer Room - Bottom Right"].glitchless = function() {
			return has("hammer") && canGrapple() && has("key",4);
		}
		this.locations["Ganon's Tower - Firesnake Room"].glitchless = function() {
			return has("hammer") && canGrapple() && has("key",3);
		}
		this.locations["Ganon's Tower - Map Chest"].glitchless = function() {
			return has("hammer") && (canDash() || canGrapple())
				&& has("key",4);
		}
		this.locations["Ganon's Tower - Big Chest"].glitchless = function() {
			return has("bigkey") && has("key",3)
				&& ((has("hammer") && canGrapple()) || (has("firerod") && has("somaria")));
		}
		this.locations["Ganon's Tower - Bob's Chest"].glitchless = function() {
			return ((has("hammer") && canGrapple())
				|| (has("firerod") && has("somaria")))
				&& has("key",3);
		}
		this.locations["Ganon's Tower - Tile Room"].glitchless = function() {
			return has("somaria");
		}
		this.locations["Ganon's Tower - Compass Room - Top Left"].glitchless =
		this.locations["Ganon's Tower - Compass Room - Top Right"].glitchless =
		this.locations["Ganon's Tower - Compass Room - Bottom Left"].glitchless =
		this.locations["Ganon's Tower - Compass Room - Bottom Right"].glitchless = function(){
			return has("firerod") && has("somaria")
				&& has("key",4);
		}
		this.locations["Ganon's Tower - Big Key Chest"].glitchless =
		this.locations["Ganon's Tower - Big Key Room - Left"].glitchless =
		this.locations["Ganon's Tower - Big Key Room - Right"].glitchless = function() {
			return ((has("hammer") && canGrapple())
				|| (has("firerod") && has("somaria")))
				&& has("key",3)
				&& boss_bottom.canBeat();
		}
		this.locations["Ganon's Tower - Mini Helmasaur Room - Left"].glitchless =
		this.locations["Ganon's Tower - Mini Helmasaur Room - Right"].glitchless = function() {
			return canShootArrows() && canLightTorches()
				&& has("bigkey") && has("key",3)
				&& boss_middle.canBeat();
		}
		this.locations["Ganon's Tower - Pre-Moldorm Chest"].glitchless = function() {
			return canShootArrows() && canLightTorches()
				&& has("bigkey") && has("key",3)
				&& boss_middle.canBeat();
		}
		this.locations["Ganon's Tower - Moldorm Chest"].glitchless = function() {
			return canGrapple()
				&& canShootArrows() && canLightTorches()
				&& has("bigkey") && has("key",4)
				&& boss_middle.canBeat()
				&& boss_top.canBeat();
		}
	}

	this.canEnter.glitchless = function() {
		let dwdme = new DarkWorldDeathMountainEast("","",false);
		dwdme.initNoMajorGlitches();

		return has("moonpearl")
			&& has("crystal1")
			&& has("crystal2")
			&& has("crystal3")
			&& has("crystal4")
			&& has("crystal5")
			&& has("crystal6")
			&& has("crystal7")
			&& has("motherbrain")
			&& dwdme.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Ganon's Tower - Moldorm's Chest"].glitchless()
			&& boss.canBeat();
	}
  }

  initOverworldGlitches() {
	  this.initNoMajorGlitches();

	  this.canEnter.owGlitches = function() {
		  return canDash() && has("moonpearl");
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  this.canEnter.majorGlitches = function() {
		  let dmw = new DeathMountainWest("","",false);

		  return dmw.canEnter.majorGlitches();
	  }
  }
}
