import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
messages: string[] = []
add(message: string){
  //Un message au singulier saffiche sur une liste de messages
  this.messages.push(message);
}

clear() {
  this.messages = []
}
  constructor() { }
}
