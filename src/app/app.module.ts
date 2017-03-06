import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import {Routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { BlockComponent } from './components/block/block.component';
import { TableComponent } from './components/table/table.component';
import { UploadComponent } from './components/upload/upload.component';
import { ImageComponent } from './components/image/image.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    BlockComponent,
    TableComponent,
    UploadComponent,
    ImageComponent,
    ModalComponent
  ],
  imports: [
    RouterModule.forRoot(Routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
