import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InventoryComponent } from './inventory/inventory.component';
import { SkillComponent } from './skill/skill.component';
import { RaoulNavComponent } from './raoul-nav/raoul-nav.component';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    CounterComponent,
    FetchDataComponent,
    InventoryComponent,
    SkillComponent,
    RaoulNavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
