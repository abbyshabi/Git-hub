import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import{ FormsModule} from '@angular/forms';
import { RepoComponent } from './repo/repo.component';
import {RouterModule} from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { ShowComponent } from './show/show.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoComponent,
    HighlightDirective,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot([
      {
     path:'repo',
     component:RepoComponent
    },
    {
      path:'',
      component:ProfileComponent
     }
    ])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
