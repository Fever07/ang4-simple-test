import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.tpl.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    showList = [
        {
            name: '123'
        },
        {
            name: '234'
        },
        {
            name: '345'
        }
    ];
}
