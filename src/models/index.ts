export interface CityObj{
  idx: string;
  cities: CityInfo[];
}

export interface CityInfo{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  pinyin: string;
}