import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';
import { Profile} from '../profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: any[];
  private repos :any[]; 

  constructor(private profileService: ProfileService) { 
    this.profileService.getProfileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile= profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
