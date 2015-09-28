/// <reference path="../knockout.d.ts"/>
/// <reference path="../knockout.mapping.d.ts"/>
/// <reference path="../jquery.d.ts"/>
/// <reference path="../models/equipment.ts"/>
/// <reference path="../lang.ts" />

module Kanai {
    export module VM {
        export class Site {
            Weapons: KnockoutObservableArray<KnockoutObservable<Equipment>>;
            Jewelry: KnockoutObservableArray<KnockoutObservable<Equipment>>;
            Jewelery: KnockoutObservableArray<KnockoutObservable<Equipment>>;
            Armor: KnockoutObservableArray<KnockoutObservable<Equipment>>;
            //Seasonal Settings
            hideCubed: KnockoutObservable<boolean>;
            seasonalProgressBar: KnockoutObservable<boolean>;
            ArmorSeasonalCubedCount: KnockoutComputed<number>;
            WeaponSeasonalCubedCount: KnockoutComputed<number>;
            JewelrySeasonalCubedCount: KnockoutComputed<number>;
            
            //Non-Seasonal Settings
            hideCubedNonSeason: KnockoutObservable<boolean>;
            nonSeasonalProgressBar: KnockoutObservable<boolean>;
            ArmorNonSeasonalCubedCount: KnockoutComputed<number>;
            WeaponNonSeasonalCubedCount: KnockoutComputed<number>;
            JewelryNonSeasonalCubedCount: KnockoutComputed<number>;

            ArmorStashedCount: KnockoutComputed<number>;
            WeaponStashedCount: KnockoutComputed<number>;
            JewelryStashedCount: KnockoutComputed<number>;
            StashedCount: KnockoutComputed<number>;

            Export: KnockoutObservable<string>;
            Import: KnockoutObservable<string>;

            AllWeapons: Equipment[];
            AllJewelry: Equipment[];
            AllJewelery: Equipment[];
            AllArmor: Equipment[];

            constructor() {
                var self = this;
                this.Weapons = ko.observableArray<KnockoutObservable<Equipment>>();
                this.Jewelry = ko.observableArray<KnockoutObservable<Equipment>>();
                this.Armor = ko.observableArray<KnockoutObservable<Equipment>>();
                this.hideCubed = ko.observable(false).extend({ notify: 'always' });
                this.hideCubedNonSeason = ko.observable(false).extend({ notify: 'always' });
                this.nonSeasonalProgressBar = ko.observable(false).extend({ notify: 'always' });
                this.seasonalProgressBar = ko.observable(true).extend({ notify: 'always' });
                this.AllWeapons = new Array<Equipment>();
                this.AllJewelry = new Array<Equipment>();
                this.AllArmor = new Array<Equipment>();
                this.Export = ko.observable<string>();
                this.Import = ko.observable<string>();
            }
            clear() {
                this.Weapons([]);
                this.Jewelry([]);
                this.Armor([]);
            }
            init() {
                var self = this;
                var vm = JSON.parse(localStorage.getItem("kanai_cube"));
                if (!vm) {
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

                    $.each(self.Armor(), function (i, elem: KnockoutObservable<Equipment>) {
                        elem().isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });

                    $.each(self.Weapons(), function (i, elem: KnockoutObservable<Equipment>) {
                        elem().isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });

                    $.each(self.Jewelry(), function (i, elem: KnockoutObservable<Equipment>) {
                        elem().isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem().isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });
                } else {
                    if (vm.Jewelery) {
                        if (!self.Jewelry) {
                            self.Jewelry = ko.observableArray<KnockoutObservable<Equipment>>();
                        }
                        for (var i = 0; i < vm.Jewelery.length; i++) {
                            self.Jewelry.push(ko.mapping.fromJS(vm.Jewelery[i]));
                        }
                        delete vm.Jewelery;
                        vm.Jewelry = self.Jewelry();
                    }

                    if (!vm.Jewelry) {
                        if (!self.Jewelry) {
                            self.Jewelry = ko.observableArray<KnockoutObservable<Equipment>>();
                        }
                    }
                    ko.mapping.fromJS(vm, { "include": ["hideCubed", "hideCubedNonSeason", "nonSeasonalProgressBar", "seasonalProgressBar"]}, self);                   
                    this.checkConsistency();
                    this.saveToLocalStorage();
                    $.each(self.Armor(), function (i, elem: Equipment) {
                        elem.isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });

                    $.each(self.Weapons(), function (i, elem: Equipment) {
                        elem.isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });

                    $.each(self.Jewelry(), function (i, elem: Equipment) {
                        elem.isCubedSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isCubedNonSeason.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                        elem.isStashed.subscribe((newValue) => {
                            self.saveToLocalStorage();
                        });
                    });
                    self.saveToLocalStorage();
                }


                this.ArmorSeasonalCubedCount  = ko.computed(() => {
                    if (self.Armor().length > 0) {
                        return ko.utils.arrayFilter(self.Armor(), function (item: Equipment) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });

                this.WeaponSeasonalCubedCount = ko.computed(() => {
                    if (self.Weapons().length > 0) {
                        return ko.utils.arrayFilter(self.Weapons(), function (item: Equipment) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });

                this.JewelrySeasonalCubedCount = ko.computed(() => {
                    if (self.Jewelry().length > 0) {
                        return ko.utils.arrayFilter(self.Jewelry(), function (item: Equipment) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });

                this.ArmorNonSeasonalCubedCount = ko.computed(() => {
                    if (self.Armor().length > 0) {
                        return ko.utils.arrayFilter(self.Armor(), function (item: Equipment) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedNonSeason();
                        }).length;
                    }
                });

                this.WeaponNonSeasonalCubedCount = ko.computed(() => {
                    if (self.Weapons().length > 0) {
                        return ko.utils.arrayFilter(self.Weapons(), function (item: Equipment) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedNonSeason();
                        }).length;
                    }
                });

                this.JewelryNonSeasonalCubedCount = ko.computed(() => {
                    if (self.Jewelry().length > 0) {
                        return ko.utils.arrayFilter(self.Jewelry(), function (item: Equipment) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedNonSeason();
                        }).length;
                    }
                });

                this.ArmorStashedCount = ko.computed(() => {
                    return ko.utils.arrayFilter(self.Armor(), function (item: Equipment) {
                        var elem = ko.unwrap(item);
                        return elem.isStashed() && !(elem.isCubedNonSeason() || elem.isCubedSeason());
                    }).length;
                });

                this.WeaponStashedCount = ko.computed(() => {
                    return ko.utils.arrayFilter(self.Weapons(), function (item: Equipment) {
                        var elem = ko.unwrap(item);
                        return elem.isStashed() && !(elem.isCubedNonSeason() || elem.isCubedSeason());
                    }).length;
                });

                this.JewelryStashedCount = ko.computed(() => {
                    return ko.utils.arrayFilter(self.Jewelry(), function (item: Equipment) {
                        var elem = ko.unwrap(item);
                        return elem.isStashed() && !(elem.isCubedNonSeason() || elem.isCubedSeason());
                    }).length;
                });

                this.StashedCount = ko.computed(() => {
                    return this.JewelryStashedCount() + this.WeaponStashedCount() + this.ArmorStashedCount();
                });

                this.hideCubed.subscribe(() => { self.saveToLocalStorage(); });
                this.hideCubedNonSeason.subscribe(() => { self.saveToLocalStorage(); });
                this.nonSeasonalProgressBar.subscribe(() => { self.saveToLocalStorage(); });
                this.seasonalProgressBar.subscribe(() => { self.saveToLocalStorage(); });

                this.Export(ko.mapping.toJSON(self));
            }

            saveToLocalStorage() {
                var self = this;
                localStorage["kanai_cube"] = null;
                delete this.Jewelery;
                localStorage.setItem("kanai_cube", ko.mapping.toJSON(self));
                this.Export(ko.mapping.toJSON(self));
            }
            
            // This function will return correct spelling of words that I typoed at some time without destroying user data or duplicating records
            spellcheckCorrect(searchName: string) {
                switch (searchName) {
                    case "Gundo Gear":
                        return { oldName: "Gundo Gear", newName: "Gungdo Gear" };
                    case "HwoJ Wrap":
                        return { oldName: "HwoJ Wrap", newName: "Hwoj Wrap" };
                    case "Illusionary Boots":
                        return { oldName: "Illusionary Boots", newName: "Illusory Boots" };
                    case "Remorsless":
                        return { oldName: "Remorsless", newName: "Remorseless" };
                    case "Ahavarion,Spear of Lycander":
                        return { oldName: "Ahavarion,Spear of Lycander", newName: "Ahavarion, Spear of Lycander" };
                    case "Chaigmail":
                        return { oldName: "Chaigmail", newName: "Chaingmail" };
                }
                return null;
            }

            private _checkConsistencyAndSort(searchArray: any, masterList: any) {
                var self = this;
                for (var i = 0; i < masterList.length; i++) {
                    var searchName = masterList[i]().itemName();
                    var find = ko.utils.arrayFirst(searchArray(), function (item: any) {
                        var spellCheck = self.spellcheckCorrect(item.itemName());
                        if (spellCheck && spellCheck.oldName == item.itemName()) {
                            item.itemName(spellCheck.newName);
                        }
                        return item.itemName() === searchName;
                    });
                    if (find == null) {
                        var find2 = ko.utils.arrayFirst(searchArray(), function (item: any) {
                            var convert = lang.englishToCulture(item);
                            return convert.itemName() === searchName;
                        });
                        if (find2 == null) {
                            searchArray.push(ko.mapping.fromJS(masterList[i])());
                        } else {
                            var convert = lang.englishToCulture(find2);
                            find2.itemName(convert.itemName());
                            find2.affix = convert.affix;
                        }
                        //searchArray.push(ko.mapping.fromJS(masterList[i])());
                    } else {
                        find.affix = masterList[i]().affix;
                    }
                    searchArray.sort(function (left, right) {
                        return left.itemName() == right.itemName() ? 0 : (left.itemName() < right.itemName() ? -1 : 1);
                    });
                }
            }

            importValues() {
                var self = this;
                if (self.Import()) {
                    if (confirm(lang.importConfirm())) {
                        var importData = ko.mapping.fromJSON(self.Import());
                        self.Jewelry(importData.Jewelry());
                        self.Armor(importData.Armor());
                        self.Weapons(importData.Weapons());
                        self.saveToLocalStorage();
                    }
                }
            }

            checkConsistency() {
                var self = this;
                this.AllWeapons.length = 0;
                this.AllJewelry.length = 0;
                this.AllArmor.length = 0;
                this.loadWeapons(this.AllWeapons);
                this.loadJewelry(this.AllJewelry);
                this.loadArmor(this.AllArmor);

                self._checkConsistencyAndSort(self.Armor, self.AllArmor);
                self._checkConsistencyAndSort(self.Weapons, self.AllWeapons);
                //This item didn't make it live in 2.3
                var item = ko.utils.arrayFirst(self.Weapons(), function(item: any) {
                    return item.itemName() == "Deadly Rebirth";
                });
                if (item) {
                    self.Weapons.remove(item);
                }
                self._checkConsistencyAndSort(self.Jewelry, self.AllJewelry);
                self.saveToLocalStorage();

            }

            loadFromLocalStorage(vm: Kanai.VM.Site) {
                this.Armor = vm.Armor;
                this.Weapons = vm.Weapons;
                this.Jewelry = vm.Jewelry;
            }

            loadArmor(target) {
                lang.getArmor(target);
            }

            loadWeapons(target) {
                lang.getWeapons(target);
            }

            loadJewelry(target) {
                lang.getJewelry(target);
            }
        }
    }
}