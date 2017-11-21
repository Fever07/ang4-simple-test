import { Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-list',
    templateUrl: './myList.tpl.html',
    styleUrls: ['./myList.styles.css']
})
export class MyListComponent implements OnInit {
    @Input() list: Array<any>;
    @Input() strList: Array<string>;

    constructor(private router: Router, private route: ActivatedRoute) {
        console.log(router.routerState);
        console.log(route.data);
    }

    ngOnInit() {
        if (this.router.routerState.snapshot.url !== '') {
            this.route.data.subscribe((data) => {
                this.list = data.list;
                this.strList = data.strList;
            });
        }
        console.log('-------- NGONINIT LOGS: ----------');
        console.log(this.list);
        console.log(this.strList);
    }

}
