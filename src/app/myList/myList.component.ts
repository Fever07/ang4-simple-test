import { Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'my-list',
    templateUrl: './myList.tpl.html',
    styleUrls: ['./myList.styles.css']
})
export class MyListComponent implements OnInit {
    @Input() list: Array<any>;
    constructor () {
        this.listt = [
            {
                name: '123'
            },
            {
                name: '345'
            }
        ];
    }

    ngOnInit() {
        console.log(this.list);
    }
}
