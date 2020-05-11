import { Injectable } from '@angular/core';
import {WebsocketService} from "./websocket.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService: WebsocketService) { }

  enviarMensaje(mensaje: string) {
    const payload = {
      de: this.wsService.usuario.nombre,
      cuerpo: mensaje
    }
    this.wsService.emit('mensaje', payload);
  }

  obtenerMensajes() {
    return this.wsService.listen('mensaje-nuevo');
  }

  obtenerMensajePrivados() {
    return this.wsService.listen('mensaje-privado');
  }

  obtenerUsuariosActivos() {
    return this.wsService.listen('usuarios-activos');
  }

  emitirUsuariosActivos() {
    this.wsService.emit('obtener-usuarios');
  }
}
