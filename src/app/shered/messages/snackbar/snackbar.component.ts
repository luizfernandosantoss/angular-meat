import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations'
import {NotificationService} from '../notification.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility',[
        state('hidden',style({
          opacity:0,
          botton: 0
        })),
        state('visible',style({
          opacity:1,
          botton: '30px'
        })),
        transition('hidden => visible', animate('500ms 0s ease-in')),
        transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  message: string = "Hello there!"
  snackVisibility: string = "hidden";

  ngOnInit() {
    this.notificationService.notifier.do(message => {
        this.message = message
        this.snackVisibility = 'visible'
    }).switchMap(message => Observable.timer(3000))
      .subscribe(timer => this.snackVisibility = 'hidden')
  }

  constructor(private notificationService: NotificationService){
  }

}
