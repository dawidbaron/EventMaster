import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface IEvent{
    id:number
    name:string
    date: Date
    imageUrl:string
    location?: {
        address: string
        city:string
        nazwa:string
    },
    platforms?:string
    sessions:ISession[]
}

export interface ISession{
    id:number
    name:string 
    presenter: string
    price: number
    level: number
    time: number
    duration: number
    abstract: string 
    voters: string[]
}