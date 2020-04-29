import {Routes} from '@angular/router';
import{
    EventsListComponent,
    EventsDetailsComponent,
    EventRouteActivator,
    EventListResolver,
    CreateEventComponent,
    CreateSessionComponent
} from './events/index'
import { Error404Component } from './error/404.component';

// inicjowanie sciezek
export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator]},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '404', component:Error404Component},
    { path: '',redirectTo: '/events',pathMatch:'full'},
    //{ path:'user',loadChildren: 'user/user.module#UserModule'}
    { path:'user',loadChildren: () => import('./user/user.module').then(u => u.UserModule)}
]