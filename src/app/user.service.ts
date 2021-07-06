import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private uri = 'http://' + window.location.hostname + ':9000/api/v1';

  constructor(
      private http: HttpClient
  ) { }

  public save(user) {
    return this.http.post(this.uri + '/users', user);
  }

  public addWallet(idUser, wallet){
    return this.http.post(this.uri + '/users/' + idUser + '/addwallet', wallet);
  }

  public findAll() {
      return this.http.get<any>(this.uri + '/users/');
  }

    public find(idUser) {
        return this.http.get<any>(this.uri + '/user/' + idUser);
    }
}
