/// <reference path="../knockout.d.ts"/>
/// <reference path="../models/slots.ts"/>
/// <reference path="restrictions.ts"/>
module Kanai {
    export class Equipment {
        itemName: KnockoutObservable<string>;
        restriction: Kanai.Enums.Restrictions[];
        isCubedSeason: KnockoutObservable<boolean>;
        isCubedNonSeason: KnockoutObservable<boolean>;
        isStashed: KnockoutObservable<boolean>;
        slot: Kanai.Enums.Slots;
        affix: string;
        constructor(itemName:string, affix:string) {
            this.itemName = ko.observable<string>(itemName);
            this.affix = affix;
            this.isCubedSeason = ko.observable(false);
            this.isCubedNonSeason = ko.observable(false);
            this.isStashed = ko.observable(false);
        }
    }
}