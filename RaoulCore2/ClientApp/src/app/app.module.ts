import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RaoulNavComponent } from './raoul-nav/raoul-nav.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkilRating } from "./stars/stars.component";
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';
import { ConditionsComponent } from './conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaoulNavComponent,
    SkillListComponent,
    SkilRating,
    AboutComponent,
    WeatherComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'weather', component: WeatherComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
