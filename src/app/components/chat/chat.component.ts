import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ChatService} from "../../services/chat.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  txtInput: FormControl;
  mensajes: any[] = [];
  mensajesSubscription: Subscription;
  elemento: HTMLElement;

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensajes');
    this.txtInput = new FormControl('', Validators.required);
    this.mensajesSubscription = this.chatService.obtenerMensajes().subscribe(
      mensaje => {
        this.mensajes.push(mensaje);
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50)
      }
    )
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    if (this.txtInput.invalid) {
      return;
    }
    this.chatService.enviarMensaje(this.txtInput.value);
    this.txtInput.reset();
  }

}
