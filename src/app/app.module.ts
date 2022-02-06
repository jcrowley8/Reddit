import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/Footer/footer.component';
import { CommunitiesNearYouComponent } from 'src/growingcommunities/communitiesnearyou.component';

import { NavigationBarComponent } from 'src/Navigation/navigationbar.component';
import { TrendingTodayLayoutComponent } from 'src/trendingtoday/trendinglayout.component';
import { TrendingTodayComponent } from 'src/trendingtoday/trendingtoday.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    TrendingTodayComponent,
    CommunitiesNearYouComponent,
    TrendingTodayLayoutComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
