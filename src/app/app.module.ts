import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { AppsButtonComponent } from './components/apps-button/apps-button.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { UserWelcomeComponent } from './components/user-welcome/user-welcome.component';

import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { MessageChatComponent } from './components/message-chat/message-chat.component';
import { WorkComponent } from './pages/work/work.component';
import { ProjectComponent } from './pages/project/project.component';
import { AppPortraitBarComponent } from './components/app-portrait-bar/app-portrait-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UserWelcomeComponent,
    AppContentComponent,
    AppBarComponent,
    AppPortraitBarComponent,
    CarouselComponent,
    MessageBoxComponent,
    AppsButtonComponent,
    ChatComponent,
    MessageChatComponent,
    WorkComponent,
    ProjectComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
