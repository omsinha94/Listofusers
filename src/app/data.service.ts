import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userData: any;
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map((res: Response) => {
      return res;
    }));
  }

  createUser(data) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", data).pipe(map((res: Response) => {
      return res;
    }));
  }

  updateUser(userId, data) {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/" + userId, data).pipe(map((res: Response) => {
      return res;
    }));
  }
}
