import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DisplayTableComponent implements OnInit {

  posts: any[] = [];
  displayedColumns: any[] = [
    'id',
    'name',
    'email',
    'phone',
    'address',
    'button'
  ];
  expandedElement: any | null;

  constructor(private service:ApiCallService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getuser().subscribe(res=>{
      this.posts = res;
    })
  }
  Onclick() {
    this.snackBar.open('Thank you', 'Undo', {
      duration:2000
    })
  }
  

}
