import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppPortraitBarComponent } from './components/app-portrait-bar/app-portrait-bar.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { AppsButtonComponent } from './components/apps-button/apps-button.component';
import { AppFxforwardComponent } from './components/app-fxforward/app-fxforward.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { MessageChatComponent } from './components/message-chat/message-chat.component';
import { UserWelcomeComponent } from './components/user-welcome/user-welcome.component';
import { WorkComponent } from './pages/work/work.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WorkProjectComponent } from './components/work-project/work-project.component';

import { AppRoutingModule } from './app-routing.module';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { AngularFireModule } from "@angular/fire/compat";

import { environment } from './environments/environment';
import { AppParticleAppProxyComponent } from "./components/app-particle-app-proxy/app-particle-app-proxy.component";
import { PersonalProjectComponent } from "./components/personal-project/personal-project.component";


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UserWelcomeComponent,
    AppContentComponent,
    AppBarComponent,
    AppPortraitBarComponent,
    MessageBoxComponent,
    AppsButtonComponent,
    ChatComponent,
    MessageChatComponent,
    WorkComponent,
  ],
  imports: [
    AppFxforwardComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselComponent,
    HttpClientModule,
    MaterialModule,
    WorkProjectComponent,
    ProfileComponent,
    AppParticleAppProxyComponent,
    PersonalProjectComponent
],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
