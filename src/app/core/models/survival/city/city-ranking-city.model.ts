import {RankingEntry} from "../../ranking/ranking-entry.model";

export interface CityRankingCity {
  shortName: string;
  name: string;
  bannerJson: string;
  prestige: number;
}

export class CityRankingCityImpl {
  shortName: string;
  name: string;
  bannerJson: string;
  prestige: number;

  constructor(city: CityRankingCity) {
    this.shortName = city.shortName;
    this.name = city.name;
    this.bannerJson = city.bannerJson;
    this.prestige = city.prestige;
  }

  getRankingEntry(): RankingEntry {
    return new RankingEntry(this.name, "/survival/city/" + this.shortName.toLowerCase(), this.prestige, undefined, undefined, this.bannerJson);
  }
}
