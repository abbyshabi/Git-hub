import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';
import { Profile} from '../profile';
import {Repository} from '../repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  private profile:Profile[];
  private repository: Repository[];
  private repos :any[];
  private username : string;
  private repositories 
  constructor(private profileService: ProfileService) { }
  
  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile= profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    });
    
  }
  

  ngOnInit() {
  }

}
