import {Router} from "@angular/router";

export class RankingEntry {
  name: string;
  link?: string;
  value?: number;
  icon?: string;
  playerUuid?: string;
  cityBanner?: string;


  constructor(name: string, link?: string, value?: number, icon?: string, playerUuid?: string, cityBanner?: string) {
    this.name = name;
    this.link = link;
    this.value = value;
    this.icon = icon;
    this.playerUuid = playerUuid;
    this.cityBanner = cityBanner;
  }

  openLink(router: Router) {
    if (this.link)
      router.navigateByUrl(this.link);
  }
}
