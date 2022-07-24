export interface CountryList {
  success: number
  data: CountryData[]
}

export interface Country {
  success: number
  data: CountryData
}

export interface CountryData {
  _id: string
  COUNTRY_NAME_TH: string
  COUNTRY_NAME_EN: string
  ABBREVIATION: string
}
