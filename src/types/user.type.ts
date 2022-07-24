import { CountryData } from './country.type'
import { DistrictData } from './district.type'
import { ProvinceData } from './province.type'

export interface User {
  success: number
  data: UserData
}

export interface UserData {
  phonenumber: string
  email: string
  firstname: string
  lastname: string
  image: string
  sex: string
  country?: CountryData
  province?: ProvinceData
  district?: DistrictData
  province_other?: string
  address: string
  zipcode: string
  create_date: string
}
