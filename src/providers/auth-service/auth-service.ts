import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

	url:string = "http://localhost/megatrix_server/public/";
	session:any={};

  constructor(
  	public http: HttpClient,
  	public storage: Storage
  	) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public getUserInfo(){

    this.storage.get('token').then(token=>{
      let access = {token:token};

      this.http.post(this.url+'/api/user',access).subscribe(user=>{
        this.session.user = user; // fill data to variable
        return user;
      });

    });
  }

  public login(credentials){
  	return Observable.create(observer=>{

  		this.http.post(this.url+"/api/auth/login",credentials).subscribe(result=>{

  			if(result["response"] == "success"){
  				this.storage.set('token',result["result"]["token"]);
  				observer.next(true);
  				observer.complete();
  			} else {
  				observer.next(false);
  				observer.complete();
  			}

  		},error=>{
  			console.log("error login",error);
  		});

  	});
  }

  public logout(){
		this.storage.remove('token');
		return Observable.create(observer=>{
			this.session.user = null;
			observer.next(true);
			observer.complete();
		});
	}

  public getService(){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        this.http.post(this.url+"api/getService",{token:token}).subscribe(result=>{
          observer.next(result);
          observer.complete();
        },error=>{
          observer.next(error);
          observer.complete();
        });
      });
    });
  }

}