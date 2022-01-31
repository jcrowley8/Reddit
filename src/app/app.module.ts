import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/Footer/footer.component';
import { GrowingCommunitiesComponent } from 'src/growingcommunities/growingcommunities.component';
import { NavigationBarComponent } from 'src/Navigation/navigationbar.component';
import { TrendingTodayComponent } from 'src/trendingtoday/trendingtoday.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    TrendingTodayComponent,
    GrowingCommunitiesComponent,    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
