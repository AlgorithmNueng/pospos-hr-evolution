import { CountryData } from './country.type'
import { ProvinceData } from './province.type'
import { DistrictData } from './district.type'

export interface ShopData {
  _id: string
  dbname: string
  name: string
  branch: string
  user_id: string
  image: string
  email: string
  telephone: string
  line_id: string
  company_name: string
  tax_id: string
  fax: string
  address: string
  country: CountryData
  province: ProvinceData
  district: DistrictData
  province_other: string
  zipcode: string
  costing_method: string
  register_vat: boolean
  merge_bill: boolean
  vat_rate: number
  reference_time: Date
  delete: boolean
  delete_date: string
  last_login?: Date
}
