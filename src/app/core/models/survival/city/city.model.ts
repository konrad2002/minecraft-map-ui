export interface City {
  id: number;
  name: string;
  shortName: string;
  announcement: string;
  bannerJson: string;
  cityLevel: string;
  cityChest: CityChest
  // TODO: add government
  account: string;
}

export interface CityChest {
  cityId: number;
  location: CityChestLocation
}

export interface CityChestLocation {
  world: string;
  x: number;
  y: number;
  z: number;
  chunkX: number;
  chunkZ: number;
}
