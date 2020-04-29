import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface IEvent{
    id:number
    name:string
    date: Date
    time: string
    imageUrl:string
    location?: {
        address: string
        city:string
        country:string
    },
    onlineUrl?:string,
    sessions:ISession[]
}

export interface ISession{
    id:number
    name:string 
    presenter: string
    price: number
    duration: number
    abstract: string 
    voters: string[]
}