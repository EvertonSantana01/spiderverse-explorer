export interface IHoroData{
  length: number
  findIndex(arg0: (hero: any) => boolean): Number | (() => Number)
  id: string,
  name: string,
  universe: number,
  details:{
    fullName: string,
    birthday: string,
    homeland: string,
    height: number, 
    weight: number
  }
}