/// <reference path="../knockout.d.ts"/>
/// <reference path="../knockout.mapping.d.ts"/>
/// <reference path="../jquery.d.ts"/>
/// <reference path="../models/equipment.ts"/>
var Kanai;
(function (Kanai) {
    var VM;
    (function (VM) {
        var Site = (function () {
            function Site() {
                var self = this;
                this.Weapons = ko.observableArray();
                this.Jewelry = ko.observableArray();
                this.Armor = ko.observableArray();
                this.hideCubed = ko.observable(false);
                this.hideCubedNonSeason = ko.observable(false);
                this.AllWeapons = new Array();
                this.AllJewelry = new Array();
                this.AllArmor = new Array();
            }
            Site.prototype.clear = function () {
                this.Weapons([]);
                this.Jewelry([]);
                this.Armor([]);
            };
            Site.prototype.init = function () {
                var _this = this;
                var self = this;
                var vm = JSON.parse(localStorage.getItem("kanai_cube"));
                if (!vm) {
                    console.log("Loading from site");
                    this.loadWeapons(self.Weapons);
                    this.loadJewelry(self.Jewelry);
                    this.loadArmor(self.Armor);
                    this.Weapons.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    this.Armor.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    this.Jewelry.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    localStorage.setItem("kanai_cube", ko.mapping.toJSON(this));
                    $.each(self.Armor(), function (i, elem) {
                        elem().isCubedSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                    });
                    $.each(self.Weapons(), function (i, elem) {
                        elem().isCubedSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                    });
                    $.each(self.Jewelry(), function (i, elem) {
                        elem().isCubedSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                    });
                }
                else {
                    ko.mapping.fromJS(vm, {}, self);
                    this.checkConsistency();
                    $.each(self.Armor(), function (i, elem) {
                        elem.isCubedSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem.isCubedNonSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem.isStashed.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                    });
                    $.each(self.Weapons(), function (i, elem) {
                        elem.isCubedSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem.isCubedNonSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem.isStashed.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                    });
                    $.each(self.Jewelry(), function (i, elem) {
                        elem.isCubedSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem.isCubedNonSeason.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                        elem.isStashed.subscribe(function (newValue) {
                            self.saveToLocalStorage();
                        });
                    });
                }
                this.ArmorCubedCount = ko.computed(function () {
                    if (self.Armor().length > 0) {
                        return ko.utils.arrayFilter(self.Armor(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });
                this.WeaponCubedCount = ko.computed(function () {
                    if (self.Weapons().length > 0) {
                        return ko.utils.arrayFilter(self.Weapons(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });
                this.JewelryCubedCount = ko.computed(function () {
                    if (self.Jewelry().length > 0) {
                        return ko.utils.arrayFilter(self.Jewelry(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });
                this.ArmorStashedCount = ko.computed(function () {
                    return ko.utils.arrayFilter(self.Armor(), function (item) {
                        var elem = ko.unwrap(item);
                        return elem.isStashed() && !(elem.isCubedNonSeason() || elem.isCubedSeason());
                    }).length;
                });
                this.WeaponStashedCount = ko.computed(function () {
                    return ko.utils.arrayFilter(self.Weapons(), function (item) {
                        var elem = ko.unwrap(item);
                        return elem.isStashed() && !(elem.isCubedNonSeason() || elem.isCubedSeason());
                    }).length;
                });
                this.JewelryStashedCount = ko.computed(function () {
                    return ko.utils.arrayFilter(self.Jewelry(), function (item) {
                        var elem = ko.unwrap(item);
                        return elem.isStashed() && !(elem.isCubedNonSeason() || elem.isCubedSeason());
                    }).length;
                });
                this.StashedCount = ko.computed(function () {
                    return _this.JewelryStashedCount() + _this.WeaponStashedCount() + _this.ArmorStashedCount();
                });
            };
            Site.prototype.saveToLocalStorage = function () {
                localStorage.setItem("kanai_cube", ko.mapping.toJSON(this));
            };
            // This function will return correct spelling of words that I typoed at some time without destroying user data or duplicating records
            Site.prototype.spellcheckCorrect = function (searchName) {
                switch (searchName) {
                    case "Gundo Gear":
                        return { oldName: "Gundo Gear", newName: "Gungdo Gear" };
                    case "HwoJ Wrap":
                        return { oldName: "HwoJ Wrap", newName: "Hwoj Wrap" };
                }
                return null;
            };
            Site.prototype._checkConsistencyAndSort = function (searchArray, masterList) {
                var self = this;
                for (var i = 0; i < masterList.length; i++) {
                    var searchName = masterList[i]().itemName();
                    var find = ko.utils.arrayFirst(searchArray(), function (item) {
                        var spellCheck = self.spellcheckCorrect(item.itemName());
                        if (spellCheck && spellCheck.oldName == item.itemName()) {
                            item.itemName(spellCheck.newName);
                        }
                        return item.itemName() === searchName;
                    });
                    if (find == null) {
                        searchArray.push(ko.mapping.fromJS(masterList[i])());
                    }
                    else {
                        find.affix = masterList[i]().affix;
                    }
                    searchArray.sort(function (left, right) {
                        return left.itemName() == right.itemName() ? 0 : (left.itemName() < right.itemName() ? -1 : 1);
                    });
                }
            };
            Site.prototype.checkConsistency = function () {
                var self = this;
                this.AllWeapons.length = 0;
                this.AllJewelry.length = 0;
                this.AllArmor.length = 0;
                this.loadWeapons(this.AllWeapons);
                this.loadJewelry(this.AllJewelry);
                this.loadArmor(this.AllArmor);
                self._checkConsistencyAndSort(self.Armor, self.AllArmor);
                self._checkConsistencyAndSort(self.Weapons, self.AllWeapons);
                self._checkConsistencyAndSort(self.Jewelry, self.AllJewelry);
                self.saveToLocalStorage();
            };
            Site.prototype.loadFromLocalStorage = function (vm) {
                this.Armor = vm.Armor;
                this.Weapons = vm.Weapons;
                this.Jewelry = vm.Jewelry;
            };
            Site.prototype.loadArmor = function (target) {
                target.push(ko.observable(new Kanai.Equipment("Ancient Parthan Defenders", "Each stunned enemy within 25 yards reduces your damage taken by 12%.")));
                target.push(ko.observable(new Kanai.Equipment("Gungdo Gear", "Exploding Palm's on-death explosion applies Exploding Palm.")));
                target.push(ko.observable(new Kanai.Equipment("Andariel's Visage", "Attacks release a Poison Nova that deals 450% weapon damage as Poison to enemies within 10 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Broken Crown", "Whenever a gem drops, a gem of the type socketed into this item also drops.")));
                target.push(ko.observable(new Kanai.Equipment("Deathseer's Cowl", "20% chance on being hit by an Undead enemy to charm it for 2 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Leorics Crown", "Increase the effect of any gem socketed into this item by 100%.")));
                target.push(ko.observable(new Kanai.Equipment("Pride's Fall", "Your resource costs are reduced by 30% after not taking damage for 5 seconds")));
                target.push(ko.observable(new Kanai.Equipment("Skull of Resonance", "Threatening Shout has a chance to Charm enemies and cause them to join your side.")));
                target.push(ko.observable(new Kanai.Equipment("Eye of Peshkov", "Reduce the cooldown of Breath of Heaven by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Gyana Na Kashu", "Lashing Tail Kick releases a piercing fireball that deals 700% weapon damage as Fire to enemies within 10 yards on impact.")));
                target.push(ko.observable(new Kanai.Equipment("Kekegi's Unbreakable Spirit", "Damaging enemies has a chance to grant you an effect that removes the Spirit cost of your abilities for 4 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Madstone", "Your Seven-Sided Strike applies Exploding Palm.")));
                target.push(ko.observable(new Kanai.Equipment("The Laws of Seph", "Using Blinding Flash restores 165 Spirit.")));
                target.push(ko.observable(new Kanai.Equipment("The Mind's Eye", "Inner Sanctuary increases Spirit Regeneration per second by 15.")));
                target.push(ko.observable(new Kanai.Equipment("Tzo Krin's Gaze", "Wave of Light is now cast at your enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Carnevil", "Your Fetishes shoot a Poison Dart every time you do.")));
                target.push(ko.observable(new Kanai.Equipment("Mask of Jeram", "Pets deal 75–100% more damage.")));
                target.push(ko.observable(new Kanai.Equipment("Quetzalcoatl", "Locust Swarm and Haunt now deal their damage in half of the normal duration.")));
                target.push(ko.observable(new Kanai.Equipment("The Grin Reaper", "Chance to summon horrific Mimics when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Tiklandian Visage", "Horrify causes you to Fear and Root enemies around you for 6–8 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Visage of Giyua", "Summon a Fetish Army after you kill 2 Elites.")));
                target.push(ko.observable(new Kanai.Equipment("Archmage's Vicalyke", "Your Mirror Images have a chance to multiply when killed by enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Crown of the Primus", "Slow Time gains the effect of every rune.")));
                target.push(ko.observable(new Kanai.Equipment("Dark Mage's Shade", "Automatically cast Diamond Skin when you fall below 35% Life. This effect may occur once every 15 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Storm Crow", "40% chance to cast a fiery ball when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("The Magistrate", "Frost Hydra now periodically casts Frost Nova.")));
                target.push(ko.observable(new Kanai.Equipment("The Swami", "The bonuses from Archon stacks now last for 15-20 seconds after Archon expires.")));
                target.push(ko.observable(new Kanai.Equipment("Velvet Camaral", "Double the number of enemies your Electrocute jumps to.")));
                target.push(ko.observable(new Kanai.Equipment("Death Watch Mantle", "35% chance to explode in a fan of knives for 750-950% weapon damage when hit.")));
                target.push(ko.observable(new Kanai.Equipment("Fury of the Ancients", "Call of the Ancients gains the effect of the Ancients' Fury rune.")));
                target.push(ko.observable(new Kanai.Equipment("Homing Pads", "Your Town Portal is no longer interrupted by taking damage. While casting Town Portal you gain a protective bubble that reduces damage taken by 65%.")));
                target.push(ko.observable(new Kanai.Equipment("Pauldrons of the Skeleton King", "When receiving fatal damage, there is a chance that you are instead restored to 25% of maximum Life and cause nearby enemies to flee in fear.")));
                target.push(ko.observable(new Kanai.Equipment("Spaulders of Zakara", "Your items become indestructible.")));
                target.push(ko.observable(new Kanai.Equipment("Vile Ward", "Furious Charge deals 35% increased damage for every enemy hit while charging.")));
                target.push(ko.observable(new Kanai.Equipment("Armor of the Kind Regent", "Smite will now also be cast at a second nearby enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Chaigmail", "After earning a survival bonus, quickly heal to full Life.")));
                target.push(ko.observable(new Kanai.Equipment("Cindercoat", "Reduces the resource cost of Fire skills by 30%.")));
                target.push(ko.observable(new Kanai.Equipment("Goldskin", "Chance for enemies to drop gold when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("Shi Mizu's Haori", "While below 25% Life, all attacks are guaranteed Critical Hits.")));
                target.push(ko.observable(new Kanai.Equipment("Beckon Sail", "When receiving fatal damage, you instead automatically cast Smoke Screen and are healed to 25% Life. This effect may occur once every 120 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Blackfeather", "Dodging or getting hit by a ranged attack automatically shoots a homing rocket back at the attacker for 800% weapon damage as Physical.")));
                target.push(ko.observable(new Kanai.Equipment("Cape of the Dark Night", "Automatically drop Caltrops when you are hit. This effect may only occur once every 6 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Cloak of Deception", "Enemy missiles sometimes pass through you harmlessly.")));
                target.push(ko.observable(new Kanai.Equipment("The Cloak of the Garwulf", "Companion - Wolf Companion now summons 3 wolves.")));
                target.push(ko.observable(new Kanai.Equipment("Bracers of Destruction", "Seismic Slam deals 400% increased damage to the first two enemies it hits.")));
                target.push(ko.observable(new Kanai.Equipment("Bracers of the First Men", "Hammer of the Ancients attacks 50% faster and deals 200% increased damage.")));
                target.push(ko.observable(new Kanai.Equipment("Coils of the First Spider", "While channeling Firebats, gain 80,000 Life per Hit.")));
                target.push(ko.observable(new Kanai.Equipment("Custerian Wristguards", "Picking up gold grants experience.")));
                target.push(ko.observable(new Kanai.Equipment("Drakon's Lesson", "When your Shield Bash hits 3 or less enemies, its damage is increased by 200% and 25% of its Wrath Cost is refunded.")));
                target.push(ko.observable(new Kanai.Equipment("Gabriel's Vambraces", "When your Blessed Hammer hits 3 or fewer enemies, 100% of its Wrath Cost is refunded.")));
                target.push(ko.observable(new Kanai.Equipment("Jeram's Bracers", "Wall of Death can be cast up to twice again within 2 seconds before the cooldown begins.")));
                target.push(ko.observable(new Kanai.Equipment("Krelm's Buff Bracers", "You are immune to Knockback and Stun effects.")));
                target.push(ko.observable(new Kanai.Equipment("Nemesis Bracers", "Shrines and Pylons will spawn an enemy champion.")));
                target.push(ko.observable(new Kanai.Equipment("Promise of Glory", "6% chance to spawn a Nephalem Glory globe when you Blind an enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Ranslor's Folly", "Energy Twister periodically pulls in lesser enemies within 30 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Reaper's Wraps", "Health globes restore 30% of your primary resource.")));
                target.push(ko.observable(new Kanai.Equipment("Sanguinary Vambracers", "Chance on being hit to deal 1000% of your Thorns damage to nearby enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Spirit Guards", "Your Spirit Generators reduce your damage taken by 40% for 3 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Strongarm Bracers", "Enemies hit by knockbacks suffer 30% more damage for 5 seconds when they land.")));
                target.push(ko.observable(new Kanai.Equipment("Trag'Oul Coils", "Healing wells replenish all resources and reduce all cooldowns by 60 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Warzechian Armguards", "Every time you destroy a wreckable object, you gain a short burst of speed.")));
                target.push(ko.observable(new Kanai.Equipment("Wraps of Clarity", "Your Hatred Generators reduce your damage taken by 30-35% for 5 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Frostburn", "Your Cold damage has up to a 45% chance to Freeze enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Gladiator Gauntlets", "After earning a massacre bonus, gold rains from sky.")));
                target.push(ko.observable(new Kanai.Equipment("Gloves of Worship", "Shrine effects last for 10 minutes.")));
                target.push(ko.observable(new Kanai.Equipment("St. Archew's Gage", "The first time an elite pack damages you, gain an absorb shield equal to 150% of your maximum Life for 10 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Tasker and Theo", "Increase attack speed of your pets by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Angel Hair Braid", "Punish gains the effect of every rune.")));
                target.push(ko.observable(new Kanai.Equipment("Belt of the Trove", "Every 6–8 seconds, call down Bombardment on a random nearby enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Belt of Transcendence", "Summon a Fetish Sycophant when you hit with a Mana spender.")));
                target.push(ko.observable(new Kanai.Equipment("Binding of the Lost", "Each hit with Seven-Sided Strike grants 3.5% damage reduction for 7 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Blessed of Haull", "Justice spawns a Blessed Hammer when it hits an enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Cord of the Sherma", "Chance on hit to create a chaos field that Blinds and Slows enemies inside for 4 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Crashing Rain", "Rain of Vengeance also summons a crashing beast that deals 4000% weapon damage.")));
                target.push(ko.observable(new Kanai.Equipment("Fazula's Improbable Chain", "Archon stacks also increase your Attack Speed, Armor and Resistances by 1%.")));
                target.push(ko.observable(new Kanai.Equipment("Goldwrap", "On gold pickup: Gain armor for 5 seconds equal to the amount picked up.")));
                target.push(ko.observable(new Kanai.Equipment("Harrington Waistguard", "Opening a chest grants 135% increased damage for 10 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Haunting Girdle", "Haunt releases 1 extra spirit.")));
                target.push(ko.observable(new Kanai.Equipment("Hunter's Wrath", "Your Hatred generators attack 30% faster and deal 40% increased damage.")));
                target.push(ko.observable(new Kanai.Equipment("Hwoj Wrap", "Locust Swarm also Slows enemies by 80%.")));
                target.push(ko.observable(new Kanai.Equipment("Insatiable Belt", "Picking up a Health Globe increases your maximum Life by 5% for 15 seconds, stacking up to 5 times")));
                target.push(ko.observable(new Kanai.Equipment("Jang's Envelopment", "Enemies damaged by Black Hole are also slowed by 80% for 3 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Krelm's Buff Belt", "Gain 25% run speed. This effect is lost for 5 seconds after taking damage.")));
                target.push(ko.observable(new Kanai.Equipment("Omnislash", "Slash attacks in all directions.")));
                target.push(ko.observable(new Kanai.Equipment("Omryn's Chain", "Drop Caltrops when using Vault.")));
                target.push(ko.observable(new Kanai.Equipment("Razor Strop", "Picking up a Health Globe releases an explosion that deals 400% weapon damage as Fire to enemies within 20 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Sacred Harness", "Judgment is cast at your landing location when casting Falling Sword.")));
                target.push(ko.observable(new Kanai.Equipment("Sash of Knives", "With every attack, you throw a dagger at a nearby enemy for 650% weapon damage as Physical.")));
                target.push(ko.observable(new Kanai.Equipment("Sebor's Nightmare", "Haunt is cast on all nearby enemies when you open a chest.")));
                target.push(ko.observable(new Kanai.Equipment("Thundergod's Vigor", "Blocking, dodging or being hit causes you to discharge bolts of electricity that deal 130% weapon damage as Lightning.")));
                target.push(ko.observable(new Kanai.Equipment("Chilanik's Chain", "Using War Cry increases the movement speed for you and all allies affected by 40% for 10 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Lamentation", "Rend can now stack up to 2 times on an enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Pride of Cassius", "Increases the duration of Ignore Pain by 6 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("The Undisputed Champion", "Frenzy gains the effect of every rune.")));
                target.push(ko.observable(new Kanai.Equipment("Death's Bargain", "Gain an aura of death that deals 1000% of your Life per Second to enemies within 20 yards. You no longer regenerate Life")));
                target.push(ko.observable(new Kanai.Equipment("Depth Diggers", "Primary skills that generate resource deal 100% additional damage.")));
                target.push(ko.observable(new Kanai.Equipment("Hexing Pants of Mr. Yan", "Your resource generation and damage is increased by 25% while moving and decreased by 20% while standing still.")));
                target.push(ko.observable(new Kanai.Equipment("Pox Faulds", "When 3 or more enemies are within 12 yards, you release a vile stench that deals 550%weapon damage as Poison every second for 5 seconds to enemies within 15 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Boots of Disregard", "Gain 10000 Life Regeneration per second for each second you stand still. This effect stacks up to 8 times")));
                target.push(ko.observable(new Kanai.Equipment("Fire Walkers", "Burn the ground you walk on, dealing 400% weapon damage each second.")));
                target.push(ko.observable(new Kanai.Equipment("Ice Climbers", "Gain immunity to Freeze and Immobilize effects.")));
                target.push(ko.observable(new Kanai.Equipment("Illusionary Boots", "You may move unhindered through enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Irontoe Mudsputters", "Gain up to 30% increased movement speed based on amount of Life missing.")));
                target.push(ko.observable(new Kanai.Equipment("Lut Socks", "Leap can be cast again within 2 seconds before the cooldown begins.")));
                target.push(ko.observable(new Kanai.Equipment("Nilfur's Boast", "Increase the damage of Meteor by 100%. When your Meteor hits 3 or less enemies, the damage is increased by 200%.")));
                target.push(ko.observable(new Kanai.Equipment("The Crudest Boots", "Mystic Ally summons two Mystic Allies that fight by your side.")));
                target.push(ko.observable(new Kanai.Equipment("Dread Iron", "Ground Stomp causes an Avalanche.")));
            };
            Site.prototype.loadWeapons = function (target) {
                //Weapons
                target.push(ko.observable(new Kanai.Equipment("Genzaniku", "Chance to summon a ghostly Fallen Champion when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Hack", "100% of your Thorns damage is applied on every attack.")));
                target.push(ko.observable(new Kanai.Equipment("Sky Splitter", "20% chance to Smite enemies for 600-750% weapon damage as Lightning when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("The Burning Axe of Sankis", "Chance to fight through the pain when enemies hit you.")));
                target.push(ko.observable(new Kanai.Equipment("The Butcher's Sickle", "25% chance to drag enemies to you when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Envious Blade", "Gain 100% Critical Hit Chance against enemies at full health")));
                target.push(ko.observable(new Kanai.Equipment("Eun-jang-do", "Attacking enemies below 20% Life freezes them for 3 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Wizardspike", "Performing an attack has a 25% chance to hurl a Frozen Orb.")));
                target.push(ko.observable(new Kanai.Equipment("Jace's Hammer of Vigilance", "Increase the size of your Blessed Hammers.")));
                target.push(ko.observable(new Kanai.Equipment("Mad Monarch's Scepter", "After killing 10 enemies you release a Poison Nova that deals 1400% weapon damage as Poison to enemies within 30 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Odyn Son", "40% chance to Chain Lightning enemies when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("Solanium", "Critical Hits have a 4% chance to spawn a health globe.")));
                target.push(ko.observable(new Kanai.Equipment("Arreat's Law", "Weapon Throw generates up to 15-20 additional Fury based on how far away the enemy hit is. Maximum benefit when the enemy hit is 20 or more yards away.")));
                target.push(ko.observable(new Kanai.Equipment("Azurewrath", "Undead and Demon enemies within 25 yards take 650% weapon damage as Holy every second and are sometimes knocked into the air.")));
                target.push(ko.observable(new Kanai.Equipment("Fulminator", "Lightning damage has a chance to turn enemies into lightning rods, causing them to pulse 555% weapon damage as Lightning every second to nearby enemies for 6 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("In-geom", "Your skill cooldowns are reduced by 10 seconds for 15 seconds after killing an elite pack.")));
                target.push(ko.observable(new Kanai.Equipment("Rimeheart", "10% chance on hit to instantly deal 10000% weapon damage as Cold to enemies that are Frozen.")));
                target.push(ko.observable(new Kanai.Equipment("Sever", "Slain enemies rest in pieces.")));
                target.push(ko.observable(new Kanai.Equipment("Shard of Hate", "Elemental skills have a chance to trigger a powerful attack that deals 250% weapon damage:Cold skills trigger Freezing Skull, Poison skills trigger Poison Nova Lightning skills trigger Charged Bolt")));
                target.push(ko.observable(new Kanai.Equipment("Skycutter", "Chance to summon angelic assistance when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Thunderfury, Blessed Blade of the Windseeker", "Chance on hit to blast your enemy with Lightning, dealing 372% weapon damage as Lightning and then jumping to additional nearby enemies. Each enemy hit has their attack speed and movement speed reduced by 30% for 3 seconds. Jumps up to 5 targets.")));
                target.push(ko.observable(new Kanai.Equipment("Anessazi Edge", "Zombie Dogs stuns enemies around them for 1.5 seconds when summoned.")));
                target.push(ko.observable(new Kanai.Equipment("Deadly Rebirth", "Grasp of the Dead gains the effect of the Rain of Corpses rune.")));
                target.push(ko.observable(new Kanai.Equipment("Rhen'ho Flayer", "Plague of Toads now seek out enemies and can explode twice.")));
                target.push(ko.observable(new Kanai.Equipment("Sacred Harvester", "Soul Harvest now stacks up to 10 times.")));
                target.push(ko.observable(new Kanai.Equipment("Starmetal Kukri", "Reduce the cooldown of Fetish Army and Big Bad Voodoo by 1 second each time your fetishes deal damage.")));
                target.push(ko.observable(new Kanai.Equipment("The Dagger of Darts", "Your Poison Darts and your Fetishes' Poison Darts now pierce.")));
                target.push(ko.observable(new Kanai.Equipment("The Gidbinn", "Chance to summon a Fetish when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("The Spider Queen's Grasp", "Corpse Spiders releases a web on impact that Slows enemies by 60–80%.")));
                target.push(ko.observable(new Kanai.Equipment("Jawbreaker", "When Dashing Strike hits an enemy more than 30 yards away, its Charge cost is refunded.")));
                target.push(ko.observable(new Kanai.Equipment("Lion's Claw", "Seven-Sided Strike performs an additional 7 strikes.")));
                target.push(ko.observable(new Kanai.Equipment("The Fist of Az'Turrasq", "Exploding Palm's on-death explosion damage is increased by 100%.")));
                target.push(ko.observable(new Kanai.Equipment("Vengeful Wind", "Increases the maximum stack count of Sweeping Wind by 3.")));
                target.push(ko.observable(new Kanai.Equipment("Darklight", "Fist of the Heavens has a 60% chance to also be cast at your location.")));
                target.push(ko.observable(new Kanai.Equipment("Golden Scourge", "Smite now jumps to 3 additional enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Gyrfalcon's Foote", "Removes the resource cost of Blessed Shield.")));
                target.push(ko.observable(new Kanai.Equipment("Inviolable Faith", "Casting Consecration also casts Consecration beneath all of your allies.")));
                target.push(ko.observable(new Kanai.Equipment("Johanna's Argument", "Increase the attack speed of Blessed Hammer by 100%.")));
                target.push(ko.observable(new Kanai.Equipment("Justinian's Mercy", "Blessed Hammer gains the effect of the Dominion rune.")));
                target.push(ko.observable(new Kanai.Equipment("Kassar's Retribution", "Casting Justice increases your movement speed by 20% for 2 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Swiftmount", "Doubles the duration of Steed Charge.")));
                target.push(ko.observable(new Kanai.Equipment("Dishonored Legacy", "Cleave deals up to 400% increased damage based on percentage on missing Fury.")));
                target.push(ko.observable(new Kanai.Equipment("Fjord Cutter", "You are surrounded by a Chilling Aura when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Remorsless", "Hammer of the Ancients has a 25–30% chance to summon an Ancient for 20 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Burst of Wrath", "Killing enemies and destroying objects has a chance to grant 20% of your maximum primary resource")));
                target.push(ko.observable(new Kanai.Equipment("Butcher's Carver", "The Butcher still inhabits his carver.")));
                target.push(ko.observable(new Kanai.Equipment("Cinder Switch", "50% chance to cast a fireball when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Arthef's Spark of Life", "Heal for 4% of your missing Life when you kill an Undead enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Schaefer's Hammer", "Casting a Lightning skill charges you with Lightning, causing you to deal 850% weapon damage as Lightning every second for 5 seconds to nearby enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Skywarden", "Every 60 seconds, gain a random Law for 60 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Soulsmasher", "When you kill an enemy, it explodes for 600% of your Life per Kill as damage to all enemies within 20 yards. You no longer benefit from your Life per Kill")));
                target.push(ko.observable(new Kanai.Equipment("Sunder", "50% chance to sunder the ground your enemies walk on when you attack.")));
                target.push(ko.observable(new Kanai.Equipment("The Furnace", "Increases damage against elites by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Bovine Bardiche", "Chance on hit to summon a herd of murderous cows.")));
                target.push(ko.observable(new Kanai.Equipment("Vigilance", "Getting hit has a chance to automatically cast Inner Sanctuary.")));
                target.push(ko.observable(new Kanai.Equipment("Ahavarion,Spear of Lycander", "Chance on killing a demon to gain a random Shrine effect.")));
                target.push(ko.observable(new Kanai.Equipment("Maloth's Focus", "Enemies occasionally flee at the sight of this staff.")));
                target.push(ko.observable(new Kanai.Equipment("The Grand Vizier", "Reduces the Arcane Power cost of Meteor by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("The Smoldering Core", "Lesser enemies are now lured to your Meteor impact areas.")));
                target.push(ko.observable(new Kanai.Equipment("The Tormentor", "Chance to charm enemies when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("Valthek's Rebuke", "Energy Twister now travels in a straight path.")));
                target.push(ko.observable(new Kanai.Equipment("Wormwood", "Locust Swarm continuously plagues enemies around you.")));
                target.push(ko.observable(new Kanai.Equipment("Blade of Prophecy", "Two Condemned enemies also trigger Condemn's explosion.")));
                target.push(ko.observable(new Kanai.Equipment("Blood Brother", "Grants a 20% chance to block attacks. Blocked attacks inflict 30% less damage. After blocking an attack, your next attack inflicts 30% additional damage.")));
                target.push(ko.observable(new Kanai.Equipment("Cam's Rebuttal", "Falling Sword can be used again within 4 seconds before the cooldown is triggered.")));
                target.push(ko.observable(new Kanai.Equipment("Maximus", "Chance on hit to summon a Demonic Slave.")));
                target.push(ko.observable(new Kanai.Equipment("Scourge", "45% chance when attacking to explode with demonic fury for 2000% weapon damage as Fire.")));
                target.push(ko.observable(new Kanai.Equipment("Stalgard's Decimator", "Your melee attacks throw a piercing axe at a nearby enemy, dealing 700% weapon damage as Physical.")));
                target.push(ko.observable(new Kanai.Equipment("Flying Dragon", "Chance to double your attack speed when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Incense Torch of the Grand Temple", "Reduces the Spirit cost of Wave of Light by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("The Flow of Eternity", "Reduces the cooldown of Seven-Sided Strike by 60%.")));
                target.push(ko.observable(new Kanai.Equipment("Warstaff of General Quang", "Tempest Rush gains the effect of the Tailwind rune.")));
                target.push(ko.observable(new Kanai.Equipment("Baleful Remnant", "Enemies killed while Akarat's Champion is active turn into Phalanx Avatars for 10 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Fate of the Fell", "Gain two additional rays of Heaven’s Fury.")));
                target.push(ko.observable(new Kanai.Equipment("Golden Flense", "Sweep Attack restores 6 Wrath for each enemy hit.")));
                target.push(ko.observable(new Kanai.Equipment("The Mortal Drama", "Double the number of Bombardment impacts.")));
                target.push(ko.observable(new Kanai.Equipment("Bastion's Revered", "Frenzy now stacks up to 10 times.")));
                target.push(ko.observable(new Kanai.Equipment("Fury of the Vanished Peak", "Reduces the Fury cost of Seismic Slam by 40–50%.")));
                target.push(ko.observable(new Kanai.Equipment("Madawc's Sorrow", "Stun enemies for 2 seconds the first time you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("The Gavel of Judgment", "Hammer of the Ancients returns 20–25 Fury if it hits 3 or less enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Cluckeye", "50% chance to cluck when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Kridershot", "Elemental Arrow now generates 4 Hatred.")));
                target.push(ko.observable(new Kanai.Equipment("Leonine Bow of Hashir", "Bola Shot has a 20% chance on explosion to pull in all enemies within 24 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Odyssey's End", "Enemies snared by your Entangling Shot take 20–25% increased damage from all sources.")));
                target.push(ko.observable(new Kanai.Equipment("The Raven's Wing", "A raven flies to your side.")));
                target.push(ko.observable(new Kanai.Equipment("Yang's Recurve", "Multishot attacks 40% faster.")));
                target.push(ko.observable(new Kanai.Equipment("Buriza-Do Kyanon", "Your projectiles pierce 2 additional times.")));
                target.push(ko.observable(new Kanai.Equipment("Chanon Bolter", "Your Spike Traps lure enemies to them. Enemies may be taunted once every 12 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Demon Machine", "65% chance to shoot explosive bolts when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Hellrack", "Chance to root enemies to the ground when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("Pus Spitter", "50% chance to lob an acid blob when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Wojahnni Assaulter", "Rapid Fire deals 40% more damage for every second that you channel. Stacks up to 4 times.")));
                target.push(ko.observable(new Kanai.Equipment("Calamity", "Enemies you hit become Marked for Death.")));
                target.push(ko.observable(new Kanai.Equipment("Danetta's Revenge", "Vault gains the effect of the Rattling Roll rune.")));
                target.push(ko.observable(new Kanai.Equipment("Danetta's Spite", "Leave a clone of yourself behind after using Vault.")));
                target.push(ko.observable(new Kanai.Equipment("Helltrapper", "10% chance on hit to summon a Spike Trap, Caltrops or Sentry")));
                target.push(ko.observable(new Kanai.Equipment("K'mar Tenclip", "Strafe gains the effect of the Drifting Shadow rune.")));
                target.push(ko.observable(new Kanai.Equipment("The Demon's Demise", "Spike Trap - Sticky Trap spreads to nearby enemies when it explodes.")));
                target.push(ko.observable(new Kanai.Equipment("Valla's Bequest", "Strafe projectiles pierce.")));
                target.push(ko.observable(new Kanai.Equipment("Aether Walker", "Teleport no longer has a cooldown but costs 25 Arcane Power.")));
                target.push(ko.observable(new Kanai.Equipment("Gesture of Orpheus", "Reduces the cooldown of Slow Time by 40%.")));
                target.push(ko.observable(new Kanai.Equipment("Serpent's Sparker", "You may have one extra Hydra active at a time.")));
                target.push(ko.observable(new Kanai.Equipment("Slorak's Madness", "This wand finds your death humorous.")));
                target.push(ko.observable(new Kanai.Equipment("Wand of Woh", "3 additional Explosive Blasts are triggered after casting Explosive Blast.")));
                target.push(ko.observable(new Kanai.Equipment("Coven's Criterion", "You take 60% less damage from blocked attacks.")));
                target.push(ko.observable(new Kanai.Equipment("Defender of Westmarch", "Blocks have a chance of summoning a charging wolf that deals 1000% weapon damage to all enemies it passes through.")));
                target.push(ko.observable(new Kanai.Equipment("Denial", "Each enemy hit by your Sweep Attack increases the damage of your next Sweep Attack by 40%, stacking up to 5 times.")));
                target.push(ko.observable(new Kanai.Equipment("Eberli Charo", "Reduces the cooldown of Heaven's Fury by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Freeze of Deflection", "Blocking an attack has a chance to Freeze the attacker for 1.5 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Ivory Tower", "Blocks release forward a Fires of Heaven.")));
                target.push(ko.observable(new Kanai.Equipment("Vo'Toyias Spiker", "Enemies affected by Provoke take double damage from Thorns.")));
                target.push(ko.observable(new Kanai.Equipment("Wall of Man", "30% chance to be protected by a shield of bones when you are hit.")));
                target.push(ko.observable(new Kanai.Equipment("Akarat's Awakening", "Every successful block has a 25% chance to reduce all cooldowns by 1 second.")));
                target.push(ko.observable(new Kanai.Equipment("Frydehr's Wrath", "Condemn has no cooldown but instead costs 40 Wrath.")));
                target.push(ko.observable(new Kanai.Equipment("Guard of Johanna", "Blessed Hammer damage is increased by 250% for the first 3 enemies it hits.")));
                target.push(ko.observable(new Kanai.Equipment("Hallowed Bulwark", "Iron Skin also increases your Block Amount by 60%.")));
                target.push(ko.observable(new Kanai.Equipment("Hellskull", "Gain 10% increased damage while wielding a two-handed weapon.")));
                target.push(ko.observable(new Kanai.Equipment("Jekangbord", "Blessed Shield ricochets to 6 additional enemies")));
                target.push(ko.observable(new Kanai.Equipment("Piro Marella", "Reduces the Wrath cost of Shield Bash by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Salvation", "Blocked attacks heal you and your allies for 30% of the amount blocked")));
                target.push(ko.observable(new Kanai.Equipment("Sublime Conviction", "When you block, you have up to a 20% chance to Stun the attacker for 1.5 seconds based on your current Wrath.")));
                target.push(ko.observable(new Kanai.Equipment("The Final Witness", "Shield Glare now hits all enemies around you.")));
                target.push(ko.observable(new Kanai.Equipment("Unrelenting Phalanx", "Phalanx now casts twice.")));
                target.push(ko.observable(new Kanai.Equipment("Henri's Perquisition", "The first time an enemy deals damage to you, reduce that damage by 45-60% and Charm the enemy for 3 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Homunculus", "A Zombie Dog is automatically summoned to your side every 2 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Shukrani's Triumph", "Spirit Walk lasts until you attack or until an enemy is within 30 yards of you.")));
                target.push(ko.observable(new Kanai.Equipment("Uhkapian Serpent", "25–30% of the damage you take is redirected to your Zombie Dogs.")));
                target.push(ko.observable(new Kanai.Equipment("Cosmic Strand", "Teleport gains the effect of the Wormhole rune.")));
                target.push(ko.observable(new Kanai.Equipment("Light of Grace", "Ray of Frost now pierces.")));
                target.push(ko.observable(new Kanai.Equipment("Mirrorball", "Magic Missile fires 1–2 extra missiles.")));
                target.push(ko.observable(new Kanai.Equipment("Myken's Ball of Hate", "Electrocute can chain to enemies that have already been hit.")));
                target.push(ko.observable(new Kanai.Equipment("The Oculus", "Taking damage has up to a 15–20% chance to reset the cooldown on Teleport.")));
                target.push(ko.observable(new Kanai.Equipment("Triumvirate", "Your Signature Spells increase the damage of Arcane Orb by 75–100% for 6 seconds, stacking up to 3 times.")));
                target.push(ko.observable(new Kanai.Equipment("Winter Flurry", "Enemies killed by Cold damage have a 15–20% chance to release a Frost Nova.")));
                target.push(ko.observable(new Kanai.Equipment("Bombardier's Rucksack", "You may have 2 additional Sentries.")));
                target.push(ko.observable(new Kanai.Equipment("Dead Man's Legacy", "Multishot hits enemies below 60% health twice.")));
                target.push(ko.observable(new Kanai.Equipment("Emimei's Duffel", "Bolas now explode instantly.")));
                target.push(ko.observable(new Kanai.Equipment("Meticulous Bolts", "Elemental Arrow - Ball Lightning now travels at 40% speed.")));
                target.push(ko.observable(new Kanai.Equipment("Spines of Seething Hatred", "Chakram now generates 4 Hatred.")));
                target.push(ko.observable(new Kanai.Equipment("The Ninth Cirri Satchel", "Hungering Arrow has 25% additional chance to pierce.")));
                target.push(ko.observable(new Kanai.Equipment("SuWong Diviner", "Acid Cloud gains the effect of the Lob Blob Bomb rune.")));
                target.push(ko.observable(new Kanai.Equipment("Scrimshaw", "Reduces the Mana cost of Zombie Charger by 50%.")));
            };
            Site.prototype.loadJewelry = function (target) {
                target.push(ko.observable(new Kanai.Equipment("Countess Julia's Cameo", "Prevent all Arcane damage taken and heal yourself for 25% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Dovu Energy Trap", "Increases duration of Stun effects by 25%.")));
                target.push(ko.observable(new Kanai.Equipment("Golden Gorget of Leoric", "After earning a massacre bonus, 6 Skeletons are summoned to fight by your side for 10 seconds")));
                target.push(ko.observable(new Kanai.Equipment("Kymbo's Gold", "Picking up gold heals you for an amount equal to the gold that was picked up.")));
                target.push(ko.observable(new Kanai.Equipment("Mara's Kaleidoscope", "Prevent all Poison damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Moonlight Ward", "Hitting an enemy within 15 yards has a chance to ward you with shards of Arcane energy that explode when enemies get close, dealing 320% weapon damage as Arcane to enemies within 15 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Overwhelming Desire", "Chance on hit to charm the enemy. While charmed, the enemy takes 35% more damage")));
                target.push(ko.observable(new Kanai.Equipment("Rakoff's Glass of Life", "Enemies you kill have a 4% additional chance to drop a health globe.")));
                target.push(ko.observable(new Kanai.Equipment("Talisman of Aranoch", "Prevent all Cold damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("The Ess of Johan", "Chance on hit to pull in enemies toward your target and Slow them by 80%.")));
                target.push(ko.observable(new Kanai.Equipment("The Star of Azkaranth", "Prevent all Fire damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Xephirian Amulet", "Prevent all Lightning damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Arcstone", "Lightning pulses periodically between all wearers of this item, dealing 1500% weapon damage.")));
                target.push(ko.observable(new Kanai.Equipment("Avarice Band", "Each time you pick up gold, increase your Gold and Health Pickup radius by 1 yard for 10 seconds, stacking up to 30 times")));
                target.push(ko.observable(new Kanai.Equipment("Band of Hollow Whispers", "This ring occasionally haunts nearby enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Band of the Rue Chambers", "Your Spirit Generators generate 50% more Spirit.")));
                target.push(ko.observable(new Kanai.Equipment("Broken Promises", "After 5 consecutive non-critical hits, your chance to critically hit is increased to 100% for 3seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Bul'Kathos's Wedding Band", "You drain life from enemies around you.")));
                target.push(ko.observable(new Kanai.Equipment("Convention of Elements", "Gain 200% increased damage to a single element for 4 seconds. This effect rotates through the elements available to your class in the following order: Arcane, Cold, Fire, Holy, Lightning, Physical, Poison.")));
                target.push(ko.observable(new Kanai.Equipment("Eternal Union", "Increases the duration of Phalanx avatars by 200%.")));
                target.push(ko.observable(new Kanai.Equipment("Halo of Arlyse", "Your Ice Armor now reduces damage from melee attacks by 60% and automatically casts Frost Nova whenever you take 10% of your Life in damage.")));
                target.push(ko.observable(new Kanai.Equipment("Hellfire Ring", "Chance on hit to engulf the ground in lava, dealing 200% weapon damage per second for 6 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Krede's Flame", "Taking Fire damage restores your primary resource.")));
                target.push(ko.observable(new Kanai.Equipment("Nagelring", "Summons a Fallen Lunatic to your side every 10 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Obsidian Ring of the Zodiac", "Reduce the remaining cooldown of one of your skills by 1 seconds when you hit with a resource-spending attack.")));
                target.push(ko.observable(new Kanai.Equipment("Oculus Ring", "Chance to create an area of focused power on killing a monster. Damage is increased by 40% while standing in the area.")));
                target.push(ko.observable(new Kanai.Equipment("Pandemonium Loop", "Enemies slain while Feared die in a bloody explosion for 800% weapon damage and cause other nearby enemies to flee in Fear")));
                target.push(ko.observable(new Kanai.Equipment("Puzzle Ring", "Summon a treasure goblin who picks up normal-quality items for you. After picking up 12 items, he drops a rare item with a chance for a legendary.")));
                target.push(ko.observable(new Kanai.Equipment("Rechel's Ring of Larceny", "Gain 60% increased movement speed for 4 seconds after Fearing an enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Ring of Royal Grandeur", "Reduces the number of items needed for set bonuses by 1 (to a minimum of 2).")));
                target.push(ko.observable(new Kanai.Equipment("Rogar's Huge Stone", "Increase your Life per Second by up to 100% based on your missing Life.")));
                target.push(ko.observable(new Kanai.Equipment("Skull Grasp", "Increase the damage of Whirlwind by 400% weapon damage.")));
                target.push(ko.observable(new Kanai.Equipment("The Short Man's Finger", "Gargantuan instead summons three smaller gargantuans each more powerful than before.")));
                target.push(ko.observable(new Kanai.Equipment("The Tall Man's Finger", "Zombie Dogs instead summons a single gargantuan dog with more damage and health than all other dogs combined.")));
                target.push(ko.observable(new Kanai.Equipment("Unity", "All damage taken is split between wearers of this item.")));
                target.push(ko.observable(new Kanai.Equipment("Wyrdward", "Lightning damage has a 35% chance to Stun for 1.5 seconds.")));
            };
            return Site;
        })();
        VM.Site = Site;
    })(VM = Kanai.VM || (Kanai.VM = {}));
})(Kanai || (Kanai = {}));
