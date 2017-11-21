import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyListComponent } from './myList/myList.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'list1',
        component: MyListComponent,
        data: {
            list: [
                {
                    name: 'List one'
                },
                {
                    name: 'List 1'
                }
            ],
            strList: ['the', 'first', 'list'],
        }
    },
    {
        path: 'list2',
        component: MyListComponent,
        data: {
            list: [
                {
                    name: 'List two'
                },
                {
                    name: 'List 2'
                }
            ],
            strList: ['the', 'second', 'list'],
        }
    },
];

@NgModule({
    declarations: [
        AppComponent,
        MyListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            routes
        )
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
