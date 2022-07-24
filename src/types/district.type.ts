export interface DistrictList {
  success: number
  data: DistrictData[]
}

export interface District {
  success: number
  data: DistrictData
}
export interface DistrictData {
  _id: string
  DISTRICT_NAME_TH: string
  DISTRICT_NAME_EN: string
  PROVINCE_ID: string
}
