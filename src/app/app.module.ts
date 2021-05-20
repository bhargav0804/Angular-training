import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { myComponent } from 'src/components/firstcomponent/firstcomponents';
import { myAnotherComponent } from 'src/components/imagecomponent/imagecomponents/imagecomponent';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { HeadercomponentComponent } from './components/headercomponent/headercomponent.component';
import { SecondcomponentComponent } from './components/secondcomponent/secondcomponent.component';
import { HighlightDirective } from './components/highlight.directive';
import { ChangecolorDirective } from './components/changecolor.directive';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquareNumberPipe } from './components/square-number.pipe';
import { DescriptionBackgroundDirective } from './components/description-background.directive';
import { GameListComponent } from './components/game-list/game-list.component';
import { WorkshopheaderComponent } from './components/workshopheader/workshopheader.component';
import { WorkshopbodyComponent } from './components/workshopbody/workshopbody.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { WorkshopfooterComponent } from './components/workshopfooter/workshopfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    myComponent,
    myAnotherComponent,
    MaincomponentComponent,
    HeadercomponentComponent,
    SecondcomponentComponent,
    HighlightDirective,
    ChangecolorDirective,
    DatabindingComponent,
    SquareNumberPipe,
    DescriptionBackgroundDirective,
    GameListComponent,
    WorkshopheaderComponent,
    WorkshopbodyComponent,
    AddGameComponent,
    AddImageComponent,
    NavComponent,
    PageNotFoundComponent,
    DetailsComponent,
    UserComponent,
    WorkshopfooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
