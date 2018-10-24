/// <reference path="../knockout.d.ts"/>
/// <reference path="../knockout.mapping.d.ts"/>
/// <reference path="../jquery.d.ts"/>
/// <reference path="../models/equipment.ts"/>
/// <reference path="../lang.ts" />
/// <reference path="../includes.d.ts"/>
var Kanai;
(function (Kanai) {
    var Models;
    (function (Models) {
        var DropdownListOption = (function () {
            function DropdownListOption(key, value) {
                this.key = key;
                this.value = value;
            }
            return DropdownListOption;
        }());
        Models.DropdownListOption = DropdownListOption;
    })(Models = Kanai.Models || (Kanai.Models = {}));
    var VM;
    (function (VM) {
        var Site = (function () {
            function Site() {
                this.localStorageString = "kanai_cube";
                var self = this;
                this.CurrentPatchVersion = "2.4.1";
                this.Weapons = ko.observableArray();
                this.Jewelry = ko.observableArray();
                this.Armor = ko.observableArray();
                this.hideCubed = ko.observable(false).extend({ notify: 'always' });
                this.hideCubedNonSeason = ko.observable(false).extend({ notify: 'always' });
                this.nonSeasonalProgressBar = ko.observable(false).extend({ notify: 'always' });
                this.hideNonSeasonalCheckboxes = ko.observable(false).extend({ notify: 'always' });
                this.hideSeasonalCheckboxes = ko.observable(false).extend({ notify: 'always' });
                this.seasonalProgressBar = ko.observable(true).extend({ notify: 'always' });
                this.bothProgressBar = ko.observable(false).extend({ notify: 'always' });
                this.AllWeapons = ko.observableArray([]);
                this.AllJewelry = ko.observableArray([]);
                this.AllArmor = ko.observableArray([]);
                this.Export = ko.observable();
                this.Import = ko.observable();
                this.Search = ko.observable('').extend({ notify: 'always', rateLimit: 200 });
                this.UserPatchVersion = ko.observable('');
                this.FilteredArray = ko.observableArray([]);
                this.Search.subscribe(function (searchText) {
                    if (searchText && searchText.length >= 2) {
                        //we need to search the array
                        self.FilteredArray([]);
                        self.searchArray(self.Armor, searchText, self.FilteredArray);
                        self.searchArray(self.Weapons, searchText, self.FilteredArray);
                        self.searchArray(self.Jewelry, searchText, self.FilteredArray);
                        if (self.FilteredArray().length > 0) {
                            self.FilteredArray.valueHasMutated();
                            $("a[href='#panel-search']").tab("show");
                        }
                    }
                    else {
                        $("a[href='#panel-armor']").tab("show");
                        self.FilteredArray([]);
                        $(".sticky").removeClass('sticky');
                        $(".sticky-progress").removeClass("sticky-progress");
                        $(".sticky-table").removeClass('sticky-table');
                    }
                });
                this.selectedLanguage = ko.observable('default');
                this.selectedLanguage.subscribe(function (newLang) {
                    lang.selectedLang(newLang);
                });
                this.hasSeenLanguageAlert = ko.observable(false);
                this.hasSeenUpdateNotice = ko.observable(false);
                this.hasSeenUpdateNotice.subscribe(function (newVal) {
                    if (newVal === true) {
                        self.UserPatchVersion(self.CurrentPatchVersion);
                    }
                });
                this.showLanguageAlert = ko.computed(function () {
                    switch (lang.culture()) {
                        case "de-DE":
                        case "de":
                            if (self.hasSeenLanguageAlert()) {
                                return false;
                            }
                            return true;
                        case "default":
                        default:
                            return false;
                    }
                });
            }
            Site.prototype.searchArray = function (array, searchText, response) {
                var res = ko.utils.arrayFilter(array(), function (item) {
                    var lowerItemName, lowerAffix;
                    if (ko.isObservable(item)) {
                        item = item();
                    }
                    lowerItemName = ko.unwrap(item.itemName).toString().toLowerCase();
                    lowerAffix = ko.unwrap(item.affix).toString().toLowerCase();
                    return (lowerItemName.indexOf(searchText) !== -1) || (lowerAffix.indexOf(searchText) !== -1);
                });
                ko.utils.arrayPushAll(response(), res);
                return res.length > 0;
            };
            Site.prototype.clear = function () {
                this.Weapons([]);
                this.Jewelry([]);
                this.Armor([]);
                this.selectedLanguage('default');
                this.hasSeenLanguageAlert(false);
                this.hasSeenUpdateNotice(true);
            };
            Site.prototype.convertGermanItemsToEnglish = function () {
            };
            Site.prototype.init = function () {
                var _this = this;
                var self = this;
                var vm = JSON.parse(localStorage.getItem(self.localStorageString));
                if (!vm) {
                    this.loadWeapons(self.Weapons);
                    this.loadJewelry(self.Jewelry);
                    this.loadArmor(self.Armor);
                    if (self.AllJewelry().length == 0) {
                        self.loadJewelry(self.AllJewelry);
                    }
                    if (self.AllWeapons().length == 0) {
                        self.loadWeapons(self.AllWeapons);
                    }
                    if (self.AllArmor().length == 0) {
                        self.loadArmor(self.AllArmor);
                    }
                    this.Weapons.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    this.Armor.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
                    this.Jewelry.sort(function (left, right) {
                        return left().itemName() == right().itemName() ? 0 : (left().itemName() < right().itemName() ? -1 : 1);
                    });
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
                    self.UserPatchVersion = ko.observable(self.CurrentPatchVersion);
                    self.hasSeenUpdateNotice(true);
                    localStorage.setItem(self.localStorageString, ko.mapping.toJSON(this));
                }
                else {
                    //This means they have a version of item data that pre-dates 2.4.1
                    if (!vm.UserPatchVersion) {
                        self.hasSeenUpdateNotice(false);
                        self.UserPatchVersion = ko.observable("2.4");
                    }
                    else if (vm.UserPatchVersion != self.CurrentPatchVersion) {
                        self.hasSeenUpdateNotice(false);
                    }
                    else {
                        self.hasSeenUpdateNotice(true);
                    }
                    if (vm.Jewelery) {
                        if (!self.Jewelry) {
                            self.Jewelry = ko.observableArray();
                        }
                        for (var i = 0; i < vm.Jewelery.length; i++) {
                            self.Jewelry.push(ko.mapping.fromJS(vm.Jewelery[i]));
                        }
                        delete vm.Jewelery;
                        vm.Jewelry = self.Jewelry();
                    }
                    if (!vm.Jewelry) {
                        if (!self.Jewelry) {
                            self.Jewelry = ko.observableArray();
                        }
                    }
                    ko.mapping.fromJS(vm, {
                        "include": ["hideCubed",
                            "hideCubedNonSeason",
                            "nonSeasonalProgressBar",
                            "hideNonSeasonalCheckboxes",
                            "hideSeasonalCheckboxes",
                            "seasonalProgressBar",
                            "bothProgressBar",
                            "hasSeenLanguageAlert",
                            "hasSeenUpdateNotice",
                            "selectedLanguage"
                        ],
                        "selectedLanguage": {
                            update: function (options) {
                                lang.selectedLang(options.data);
                                return options.data;
                            }
                        }
                    }, self);
                    this.checkConsistency();
                    this.saveToLocalStorage();
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
                    this.saveToLocalStorage();
                }
                this.ArmorSeasonalCubedCount = ko.computed(function () {
                    if (self.Armor().length > 0) {
                        return ko.utils.arrayFilter(self.Armor(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });
                this.WeaponSeasonalCubedCount = ko.computed(function () {
                    if (self.Weapons().length > 0) {
                        return ko.utils.arrayFilter(self.Weapons(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });
                this.JewelrySeasonalCubedCount = ko.computed(function () {
                    if (self.Jewelry().length > 0) {
                        return ko.utils.arrayFilter(self.Jewelry(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedSeason();
                        }).length;
                    }
                });
                this.ArmorNonSeasonalCubedCount = ko.computed(function () {
                    if (self.Armor().length > 0) {
                        return ko.utils.arrayFilter(self.Armor(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedNonSeason();
                        }).length;
                    }
                });
                this.WeaponNonSeasonalCubedCount = ko.computed(function () {
                    if (self.Weapons().length > 0) {
                        return ko.utils.arrayFilter(self.Weapons(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedNonSeason();
                        }).length;
                    }
                });
                this.JewelryNonSeasonalCubedCount = ko.computed(function () {
                    if (self.Jewelry().length > 0) {
                        return ko.utils.arrayFilter(self.Jewelry(), function (item) {
                            var elem = ko.unwrap(item);
                            return elem.isCubedNonSeason();
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
                this.ArmorBothCubedCount = ko.computed(function () {
                    return ko.utils.arrayFilter(self.Armor(), function (item) {
                        var elem = ko.unwrap(item);
                        return elem.isCubedNonSeason() || elem.isCubedSeason();
                    }).length;
                });
                this.WeaponBothCubedCount = ko.computed(function () {
                    return ko.utils.arrayFilter(self.Weapons(), function (item) {
                        var elem = ko.unwrap(item);
                        return elem.isCubedNonSeason() || elem.isCubedSeason();
                    }).length;
                });
                this.JewelryBothCubedCount = ko.computed(function () {
                    return ko.utils.arrayFilter(self.Jewelry(), function (item) {
                        var elem = ko.unwrap(item);
                        return elem.isCubedNonSeason() || elem.isCubedSeason();
                    }).length;
                });
                this.StashedCount = ko.computed(function () {
                    return _this.JewelryStashedCount() + _this.WeaponStashedCount() + _this.ArmorStashedCount();
                });
                this.hideCubed.subscribe(function () { self.saveToLocalStorage(); });
                this.hideCubedNonSeason.subscribe(function () { self.saveToLocalStorage(); });
                this.hideNonSeasonalCheckboxes.subscribe(function () { self.saveToLocalStorage(); });
                this.hideSeasonalCheckboxes.subscribe(function () { self.saveToLocalStorage(); });
                this.nonSeasonalProgressBar.subscribe(function () { self.saveToLocalStorage(); });
                this.seasonalProgressBar.subscribe(function () { self.saveToLocalStorage(); });
                this.bothProgressBar.subscribe(function () { self.saveToLocalStorage(); });
                this.hasSeenLanguageAlert.subscribe(function () { self.saveToLocalStorage(); });
                if (!self.selectedLanguage() && !self.showLanguageAlert()) {
                    if (self.hasSeenLanguageAlert()) {
                        self.selectedLanguage(lang.culture());
                    }
                }
            };
            Site.prototype.ConvertSeasonalToNon = function () {
                for (var item in this.Armor()) {
                    var thisItem = this.Armor()[item];
                    if (thisItem.isCubedSeason()) {
                        thisItem.isCubedNonSeason(true);
                        thisItem.isCubedSeason(false);
                    }
                }
                for (var item in this.Jewelry()) {
                    var thisItem = this.Jewelry()[item];
                    if (thisItem.isCubedSeason()) {
                        thisItem.isCubedNonSeason(true);
                        thisItem.isCubedSeason(false);
                    }
                }
                for (var item in this.Weapons()) {
                    var thisItem = this.Weapons()[item];
                    if (thisItem.isCubedSeason()) {
                        thisItem.isCubedNonSeason(true);
                        thisItem.isCubedSeason(false);
                    }
                }
            };
            Site.prototype.UpdateForNewPatch = function () {
                this.hasSeenUpdateNotice(true);
                this.ConvertSeasonalToNon();
                this.UserPatchVersion(this.CurrentPatchVersion);
                this.saveToLocalStorage();
            };
            Site.prototype.DontUpdateForNewPatch = function () {
                this.hasSeenUpdateNotice(true);
                this.UserPatchVersion(this.CurrentPatchVersion);
                this.saveToLocalStorage();
            };
            Site.prototype.Translate = function () {
                this.hasSeenLanguageAlert(true);
                this.selectedLanguage(lang.culture());
                this.saveToLocalStorage();
                this.init();
            };
            Site.prototype.DontTranslate = function () {
                this.selectedLanguage('default');
                this.hasSeenLanguageAlert(true);
                this.init();
            };
            Site.prototype.fillExport = function () {
                var self = this;
                this.Export(ko.mapping.toJSON(self));
            };
            Site.prototype.saveToLocalStorage = function () {
                var self = this;
                localStorage[self.localStorageString] = null;
                delete this.Jewelery;
                localStorage.setItem(self.localStorageString, ko.mapping.toJSON(self, {
                    "ignore": ["AllWeapons",
                        "AllJewelry",
                        "FilteredArray",
                        "Search",
                        "Export",
                        "AllArmor",
                        "ArmorNonSeasonalCubedCount",
                        "ArmorSeasonalCubedCount",
                        "ArmorStashedCount",
                        "JewelryNonSeasonalCubedCount",
                        "JewelrySeasonalCubedCount",
                        "JewelryStashedCount",
                        "StashedCount",
                        "WeaponNonSeasonalCubedCount",
                        "WeaponSeasonalCubedCount",
                        "WeaponStashedCount",
                        "ArmorBothCubedCount",
                        "WeaponBothCubedCount",
                        "JewelryBothCubedCount",
                        "showLanguageAlert"
                    ]
                }));
            };
            // This function will return correct spelling of words that I typoed at some time without destroying user data or duplicating records
            Site.prototype.spellcheckCorrect = function (searchName) {
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
            };
            Site.prototype._checkConsistencyAndSort = function (searchArray, masterList) {
                var self = this;
                for (var i = 0; i < searchArray().length; i++) {
                    var convert;
                    if ((lang.culture() == 'de' || lang.culture() == 'de-DE') && (!lang.selectedLang() || lang.selectedLang() == 'default')) {
                        convert = lang.cultureToEnglish(searchArray()[i]);
                    }
                    else {
                        convert = lang.englishToCulture(searchArray()[i]);
                    }
                    searchArray()[i].itemName(convert.itemName());
                    searchArray()[i].affix(convert.affix());
                }
                for (var i = 0; i < masterList.length; i++) {
                    if (masterList[i]) {
                        var searchName, item;
                        debugger;
                        if (typeof (masterList[i]) != 'object') {
                            searchName = masterList[i]().itemName();
                            item = masterList[i]();
                        }
                        else {
                            searchName = masterList[i].itemName();
                            item = masterList[i];
                        }
                        // this will go through both arrays and match items up
                        var find = ko.utils.arrayFirst(searchArray(), function (item) {
                            var spellCheck = self.spellcheckCorrect(item.itemName());
                            if (spellCheck && spellCheck.oldName == item.itemName()) {
                                item.itemName(spellCheck.newName);
                            }
                            return item.itemName() === searchName;
                        });
                        if (find == null) {
                            searchArray.push(ko.mapping.fromJS(item));
                        }
                        else {
                            find.affix(item.affix());
                        }
                    }
                }
                searchArray.sort(function (left, right) {
                    return left.itemName() == right.itemName() ? 0 : (left.itemName() < right.itemName() ? -1 : 1);
                });
            };
            Site.prototype.importValues = function () {
                var self = this;
                if (self.Import()) {
                    if (confirm(lang.importConfirm())) {
                        var importData = ko.mapping.fromJSON(self.Import());
                        self.Jewelry(importData.Jewelry());
                        self.Armor(importData.Armor());
                        self.Weapons(importData.Weapons());
                        self.hasSeenUpdateNotice(true);
                        self.checkConsistency();
                        self.saveToLocalStorage();
                    }
                }
            };
            Site.prototype.checkConsistency = function () {
                var self = this;
                this.loadWeapons(this.AllWeapons);
                this.loadJewelry(this.AllJewelry);
                this.loadArmor(this.AllArmor);
                self._checkConsistencyAndSort(self.Armor, self.AllArmor());
                self._checkConsistencyAndSort(self.Weapons, self.AllWeapons());
                //This item accidently made it to the US item list
                if (lang.culture() != 'de' || lang.culture() != 'de-DE') {
                    item = ko.utils.arrayFirst(self.Armor(), function (item) {
                        return item.itemName() == "Eiskletterer";
                    });
                    if (item) {
                        self.Armor.remove(item);
                    }
                }
                self._checkConsistencyAndSort(self.Jewelry, self.AllJewelry());
                self.saveToLocalStorage();
            };
            Site.prototype.loadFromLocalStorage = function (vm) {
                this.Armor = vm.Armor;
                this.Weapons = vm.Weapons;
                this.Jewelry = vm.Jewelry;
            };
            Site.prototype.loadArmor = function (target) {
                target([]);
                lang.getArmor(target);
            };
            Site.prototype.loadWeapons = function (target) {
                target([]);
                lang.getWeapons(target);
            };
            Site.prototype.loadJewelry = function (target) {
                target([]);
                lang.getJewelry(target);
            };
            return Site;
        }());
        VM.Site = Site;
    })(VM = Kanai.VM || (Kanai.VM = {}));
})(Kanai || (Kanai = {}));