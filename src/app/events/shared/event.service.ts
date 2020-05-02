import {Injectable} from '@angular/core'
import { Subject,Observable } from 'rxjs'
import { IEvent } from './event.model';

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
}
const EVENTS:IEvent[] = [
    {
      id: 1,
      name: 'Tommorowland',
      date: new Date ('09/09/2020'),
      time: '10:00 am',
      imageUrl: '/assets/Images/tommorowland.jpg',
      location: {
        address: 'Puławska 3',
        city: 'Warsaw',
        country: 'Poland'
      },
      sessions: [
        {
          id: 1,
          name: "All days 09-11/09/2020",
          presenter: "Martin Garrix, David Guetta, Meduza, Tyga, The Weekend, Hardwell,Travis Scott, Armin van Buuren, Afrojack",
          price: 500,
          duration:6,
          abstract: `Spend the festival listening to all the performers and save the price! 
          There are competitions for this type of tickets!`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "First Day 09/09/2020",
          presenter: "Martin Garrix, David Guetta, Meduza",
          duration: 5,
          price: 200,
          abstract: `Spend one day with three the best Dj-s on the World!`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Second Day 10/09/2020",
          presenter: "Tyga, The Weekend, Hardwell",
          duration: 5,
          price:200,
          abstract: `Spend one day with three the best Dj-s on the World!`,
          voters: []
        },
        {
          id: 4,
          name: "Third Day 11/09/2020",
          presenter: "Travis Scott, Armin van Buuren, Afrojack",
          duration: 5,
          price:200,
          abstract: `Spend one day with three the best Dj-s on the World!`,
          voters: []
        }
      ]
    },
    {
      id: 2,
      name: 'Online Lessons in LessonSchool',
      date: new Date ('04/10/2020'),
      time: '9:00 am',
      imageUrl: '/assets/Images/e-learning.jpg',
      onlineUrl:'http://lessonschool.org',
      sessions: [
        {
          id: 1,
          name: "Maths",
          presenter: "Dawid Baron",
          duration: 1,
          price: 40,
          abstract: `Online Lessons with a teacher who has been teaching for 3 years, 
          studies information technology and loves children`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "English",
          presenter: "Michael Brown",
          duration: 2,
          price: 50,
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
          abstract: `Online Lessons with a teacher who has been teaching for 8 years, 
          studied Music in Warsaw.`, 
          voters: ['bradgreen']
        },
      ]
    },
    {
      id: 3,
      name: 'Fitness - Revital Gym',
      date: new Date ('05/05/2020'),
      time: '9:00 am',
      imageUrl: '/assets/Images/gym.jpg',
      location: {
        address: 'Łazienkowska 3',
        city: 'Warszawa',
        country: 'Polska'
      },
      sessions: [
        {
          id: 1,
          name: "Zumba",
          presenter: "Kate Heron",
          duration: 2,
          price: 50,
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
          abstract: `Pilates dance that will make you lose weight in the blink of an eye. 
          A person with great experience will take care of your attitude!
          dge.`,
          voters: ['bradgreen', 'martinfowler']
        },
       
      ]
    },
    {
      id: 4,
      name: 'Theatres in Warsaw',
      date: new Date ('6/10/2020'),
      time: '8:00 am',
      imageUrl: '/assets/Images/teatr.jpg',
      location: {
        address: 'Prosta 1',
        city: 'Kraków ',
        country: 'Poland'
      },
      sessions: [
        {
          id: 1,
          name: "Metro",
          presenter: "Theatre Buffo",
          duration: 3,
          price:100,
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
      name: 'Opener Festival',
      date: new Date ('2/7/2020'),
      time: '9:00 am',
      imageUrl: '/assets/Images/opner.jpg',
      location: {
        address: 'Polna 2',
        city: 'Gdynia',
        country: 'Polska'
      },
      sessions: [
        {
          id: 1,
          name: "All days 2-4/7/2020",
          presenter: "Rihana, Beyonce, Tyga, The Weekend, Litlle Mix, Tymek, Quebonafide, Beyonce, Black Eyed Peas",
          price: 500,
          duration:6,
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
          abstract: `Spend one day with three the best artist on the World!`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Second Day 03/09/2020",
          presenter: "The Weekend, Litlle Mix, Tymek,",
          duration: 4,
          price:200,
          abstract: `Spend one day with three the best artist on the World!`,
          voters: []
        },
        {
          id: 4,
          name: "Third Day 04/09/2020",
          presenter: "Quebonafide, Beyonce, Black Eyed Peas",
          duration:4,
          price:200,
          abstract: `Spend one day with three the best artist on the World!`,
          voters: []
        }
      ]
    }
  ]