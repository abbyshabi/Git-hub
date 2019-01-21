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
  
  //private clientid:'45c711be5b7b227c5b653';
 // private clientsecret:'9b5026866f07b1eb08440f7581b9ab0dd49e604a';
  
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

}
