export interface ICreateAccountBody {
  color_id: string
  driver_type: string
  full_name: string
  issue_date: string
  manufacture_year: string
  owner: string
  owner_address: string
  phone_number: string
  vehicle_id: string
  vehicle_number: string
  front_image_tp: IFile
  back_image_tp: IFile
}

export interface IVerifyAccountBody {
  code: string
  phone_number: string
}

export interface IFile {
  file: File
  fileList: File[]
}