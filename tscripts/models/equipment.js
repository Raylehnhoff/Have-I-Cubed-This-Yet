/// <reference path="../knockout.d.ts"/>
var Kanai;
(function (Kanai) {
    var Equipment = (function () {
        function Equipment(itemName, affix) {
            this.itemName = ko.observable(itemName);
            this.affix = affix;
            this.isCubedSeason = ko.observable(false);
            this.isCubedNonSeason = ko.observable(false);
            this.isStashed = ko.observable(false);
        }
        return Equipment;
    })();
    Kanai.Equipment = Equipment;
})(Kanai || (Kanai = {}));
