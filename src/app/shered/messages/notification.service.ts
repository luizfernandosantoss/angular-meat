import {EventEmitter} from '@angular/core'

export class NotificationService {
  notifier = new EventEmitter<string>()

  notify(menssage:string){
    this.notifier.emit(menssage)
  }

}
