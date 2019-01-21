import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import {Profile} from './profile';
@Injectable()
 
export class ProfileService {
  apiUrl = environment.apiUrl;
  private username : string;
  private reponame :string;
  
  
  
  constructor( private http :HttpClient) { 
      console.log ("service is now working !");
      this.username = 'abbyshabi';
      this.reponame ='';
   
      

  }
getProfileInfo() : any{
  return this.http.get("https://api.github.com/users/" + this.username + "?access_token=d2c75a4d9ecfb3fc0c778d5821f034f7a6b1717e")// + this.clientid + "&client_secret" +this.clientsecret)
    .pipe(map(res=>res));
  }
  
getProfileRepos() :any{
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=d2c75a4d9ecfb3fc0c778d5821f034f7a6b1717e")//+ this.clientid + "&client_secret" +this.clientsecret)
  .pipe(map(res=>res)); 
}
getRepo(){
  return this.http.get("https://api.github.com/repositories/" + this.reponame+ "?access_token=d2c75a4d9ecfb3fc0c778d5821f034f7a6b1717e")
  .pipe(map(res=>res))
}

updateProfile(username:string) {
  this.username = username;
  }
}
