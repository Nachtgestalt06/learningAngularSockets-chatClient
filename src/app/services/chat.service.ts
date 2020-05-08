import { Injectable } from '@angular/core';
import {WebsocketService} from "./websocket.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService: WebsocketService) { }

  enviarMensaje(mensaje: string) {
    const payload = {
      de: 'Luis Angel',
      cuerpo: mensaje
    }
    this.wsService.emit('mensaje', payload);
  }

  obtenerMensajes() {
    return this.wsService.listen('mensaje-nuevo');
  }
}
