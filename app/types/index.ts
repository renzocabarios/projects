export interface IMemoryModel {
  _id?: string;
  front: string;
  back: string;
  due: Date;
  deleted?: Boolean;
}
export interface IUserModel {
  _id?: string;
  firstName: string;
  lastName: string;
  deleted?: Boolean;
}

export interface IAddUserDto {
  firstName: string;
  lastName: string;
  type?: string;
  deleted?: Boolean;
}
