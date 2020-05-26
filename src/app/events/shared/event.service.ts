import {Injectable,EventEmitter} from '@angular/core'
import { Subject,Observable } from 'rxjs'
import { IEvent,ISession } from './event.model';

@Injectable()
export class EventService {
  // metoda określająca jak syzbko mają załadować się eventy
    getEvents():Observable<IEvent[]>{
      let subject=new Subject<IEvent[]>()
      setTimeout(()=> {subject.next(EVENTS); subject.complete();},100)
    return subject
    }
    // metoda zwracająca dane eventów
    getEvent(id:number):IEvent{
      return EVENTS.find(event=> event.id == id)
    }
    saveEvent(event)
    {
      event.id=999
      event.session = []
      EVENTS.push(event)
    }
    updateEvent(event){
      let index = EVENTS.findIndex(x=> x.id = event.id)
      EVENTS[index] = event
    }
    searchSessions(searchTerm:string){
      var term = searchTerm.toLocaleLowerCase();
      var results: ISession[]=[];
      EVENTS.forEach(event => { var matchingSessions = event.sessions.filter(session=>
         session.name.toLocaleLowerCase().indexOf(term)>-1)
         matchingSessions=matchingSessions.map((session:any)=>{
           session.eventId=event.id
           return session;
         })
         results=results.concat(matchingSessions)
        })
        var emitter = new EventEmitter(true)
        setTimeout(()=>{
          emitter.emit(results)
        },100)
        return emitter
    }
}
const EVENTS:IEvent[] = [
    {
      id: 1,
      name: 'Math',
      date: new Date ('09/09/2020'),
      imageUrl: '/assets/Images/math.jpg',
      location: {
        address: 'Puławska 3',
        city: 'Warsaw',
        nazwa: 'II LO im. Marii Konopnickiej'
      },
      sessions: [
        {
          id: 1,
          name: "Extended Maths  ",
          presenter: "Dawid Baron",
          price: 500,
          duration:2,
          level:4,
          time:5,
          abstract: `Lessons with a teacher who has been teaching for 3 years, 
          studies information technology !`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Maths for begginers ",
          presenter: "John Black",
          duration: 5,
          price: 200,
          level:1,
          time:4,
          abstract: `Lessons with a teacher who has been teaching for 3 years, 
          studies information technology !`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Maths for begginers",
          presenter: "John Black",
          duration: 4,
          price:200,
          level:2,
          time:4,
          abstract: `Lessons with a teacher who has been teaching for 3 years, 
          studies information technology !`,
          voters: []
        },
        {
          id: 4,
          name: "Math for students",
          presenter: "Dawid Baron",
          duration: 6,
          price:500,
          level:5,
          time:3,
          abstract: `Lessons with a teacher who has been teaching for 3 years, 
          studies information technology !`,
          voters: []
        }
      ]
    },
    {
      id: 2,
      name: 'Programming - Online',
      date: new Date ('04/10/2020'),
      imageUrl: '/assets/Images/programming.jpg',
      platforms:'Zoom, Discord, Skype',
      sessions: [
        {
          id: 1,
          name: "Angular 9",
          presenter: "Dawid Baron",
          duration: 1,
          price: 400,
          level:6,
          time:1,
          abstract: `Online Lessons with a teacher who has been teaching for 3 years, 
          studies information technology `,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "C# - WPF",
          presenter: "Michael Brown",
          duration: 6,
          price: 50,
          level:3,
          time:1,
          abstract: `Online Lessons with a teacher who has been teaching for 5 years, 
          studies English on Oxford`,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "IT",
          presenter: "Patrick Yoka",
          duration: 3,
          price: 60,
          level:3,
          time:1,
          abstract: `Online Lessons with a teacher who has been teaching for 5 years, 
          studies IT on Cambridge.`,
          voters: ['martinfowler']
        },
        {
          id: 4,
          name: "Music",
          presenter: "Lukas White",
          duration: 3,
          price: 80,
          level:3,
          time:1,
          abstract: `Online Lessons with a teacher who has been teaching for 8 years, 
          studied Music in Warsaw.`, 
          voters: ['bradgreen']
        },
      ]
    },
    {
      id: 3,
      name: 'English',
      date: new Date ('05/05/2020'),
      imageUrl: '/assets/Images/english.jpg',
      location: {
        address: 'Kolorowa 44',
        city: 'Pruszków',
        nazwa: 'IX SP im. Mikołaja Kopernika'
      },
      sessions: [
        {
          id: 1,
          name: "Zumba",
          presenter: "Kate Heron",
          duration: 2,
          price: 50,
          level:3,
          time:1,
          abstract: `Zumba dance that will make you lose weight in the blink of an eye. 
          A person with great experience will take care of your attitude!
          dge.`,
          voters: ['bradgreen', 'martinfowler', 'igorminar']
        },
        {
          id: 2,
          name: "Grit Cardio",
          presenter: "Jamison Dance",
          duration: 3,
          price: 50,
          level:3,
          time:1,
          abstract: `Grit Cardio dance that will make you lose weight in the blink of an eye. 
          A person with great experience will take care of your attitude!
          dge.`,
          voters: ['bradgreen', 'martinfowler']
        },
        {
          id: 3,
          name: "Kick Boxing",
          presenter: "Bob Boxer",
          duration:2,
          price: 60,
          level:2,
          time:1,
          abstract: `Kick Boxing dance that will make you lose weight in the blink of an eye. 
          A person with great experience will take care of your attitude!
          dge.`,
          voters: ['bradgreen', 'martinfowler', 'johnpapa']
        },
        {
          id: 4,
          name: "TBC & STRETCH",
          presenter: "Shai Reznik",
          duration:2,
          price: 60,
          level:2,
          time:1,
          abstract: `TBC & STRETCH dance that will make you lose weight in the blink of an eye. 
          A person with great experience will take care of your attitude!
          dge.`,
          voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
        },
        {
          id: 5,
          name: "Pilates",
          presenter: "Bruce Walters",
          duration:3,
          price: 50,
          level:2,
          time:1,
          abstract: `Pilates dance that will make you lose weight in the blink of an eye. 
          A person with great experience will take care of your attitude!
          dge.`,
          voters: ['bradgreen', 'martinfowler']
        },
       
      ]
    },
    {
      id: 4,
      name: 'Polish',
      date: new Date ('6/10/2020'),
      imageUrl: '/assets/Images/polish.png',
      location: {
        address: 'Prosta 1',
        city: 'Legionowo ',
        nazwa: 'XIV LO im. Marii Skłodowskiej-Curie'
      },
      sessions: [
        {
          id: 1,
          name: "Metro",
          presenter: "Theatre Buffo",
          duration: 3,
          price:100,
          level:1,
          time:1,
          abstract: `„METRO”. Gdzieś między fikcją a rzeczywistością … 
          Uliczni grajkowie, śpiewacy i tancerze wystawiają na podziemnych peronach metra spektakl dla pasażerów. 
          Jego twórcą i animatorem jest Jan, dla którego metro jest domem, a underground – sposobem na życie.
           Spektakl budzi sensację, a młodzi artyści otrzymują propozycję pracy w komercyjnym teatrze. 
           To opowieść o marzeniach i rozczarowaniach, o pasji i zdradzie, o młodzieńczych ideałach i władzy pieniądza,
            a przede wszystkim to historia romantycznej miłości.
          `,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Danse Macabre",
          presenter: "Theatre Roma",
          duration: 4,
          price:70,
          level:2,
          time:1,
          abstract: `„Danse Macabre”. Gdzieś między fikcją a rzeczywistością … 
          Uliczni grajkowie, śpiewacy i tancerze wystawiają na podziemnych peronach metra spektakl dla pasażerów. 
          Jego twórcą i animatorem jest Jan, dla którego metro jest domem, a underground – sposobem na życie.
           Spektakl budzi sensację, a młodzi artyści otrzymują propozycję pracy w komercyjnym teatrze. 
           To opowieść o marzeniach i rozczarowaniach, o pasji i zdradzie, o młodzieńczych ideałach i władzy pieniądza,
            a przede wszystkim to historia romantycznej miłości.
          `,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "Rave in the grave",
          presenter: "Theatre Komedia",
          duration: 3,
          price:70,
          level:3,
          time:1,
          abstract: `„Rave in the grave”. Gdzieś między fikcją a rzeczywistością … 
          Uliczni grajkowie, śpiewacy i tancerze wystawiają na podziemnych peronach metra spektakl dla pasażerów. 
          Jego twórcą i animatorem jest Jan, dla którego metro jest domem, a underground – sposobem na życie.
           Spektakl budzi sensację, a młodzi artyści otrzymują propozycję pracy w komercyjnym teatrze. 
           To opowieść o marzeniach i rozczarowaniach, o pasji i zdradzie, o młodzieńczych ideałach i władzy pieniądza,
            a przede wszystkim to historia romantycznej miłości.
          `,
          voters: ['igorminar', 'johnpapa']
        },
      ]
    },
    {
      id: 5,
      name: 'History',
      date: new Date ('7/7 /2020'),
      imageUrl: '/assets/Images/history.jpg',
      location: {
        address: 'Polna 2',
        city: 'Warszawa',
        nazwa: 'Polska'
      },
      sessions: [
        {
          id: 1,
          name: "All days 2-4/7/2020",
          presenter: "Rihana, Beyonce, Tyga, The Weekend, Litlle Mix, Tymek, Quebonafide, Beyonce, Black Eyed Peas",
          price: 500,
          duration:6,
          level:3,
          time:1,
          abstract: `Spend the festival listening to all the performers and save the price! 
          There are competitions for this type of tickets!`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "First Day 02/09/2020",
          presenter: "Rihana, Beyonce, Tyga",
          duration: 4,
          price: 200,
          level:3,
          time:1,
          abstract: `Spend one day with three the best artist on the World!`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Second Day 03/09/2020",
          presenter: "The Weekend, Litlle Mix, Tymek,",
          duration: 4,
          price:200,
          level:2,
          time:1,
          abstract: `Spend one day with three the best artist on the World!`,
          voters: []
        },
        {
          id: 4,
          name: "Third Day 04/09/2020",
          presenter: "Quebonafide, Beyonce, Black Eyed Peas",
          duration:4,
          price:200,
          level:2,
          time:1,
          abstract: `Spend one day with three the best artist on the World!`,
          voters: []
        }
      ]
    }
  ]