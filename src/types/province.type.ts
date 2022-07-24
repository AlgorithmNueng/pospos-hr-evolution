export interface ProvinceList {
  success: number
  data: ProvinceData[]
}

export interface Province {
  success: number
  data: ProvinceData
}

export interface ProvinceData {
  _id: string
  PROVINCE_NAME_TH: string
  PROVINCE_NAME_EN: string
  COUNTRY_ID: string
}
