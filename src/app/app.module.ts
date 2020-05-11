import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SocketIoModule} from "ngx-socket-io";
import {config} from "../environments/environment";
import {FooterComponent} from './components/footer/footer.component';
import {ChatComponent} from './components/chat/chat.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';
import {LoginComponent} from './pages/login/login.component';
import {MensajesComponent} from './pages/mensajes/mensajes.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListaUsuariosComponent,
    LoginComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
