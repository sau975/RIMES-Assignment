import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://114.31.28.234:3001/post/';

  constructor(private http: HttpClient) { }

  public savePost(post: Post): Observable<any> {
    return this.http.post<any>(this.url, post);
  }

  public updatePost(postId:number, post: Post): Observable<any> {
    return this.http.put<any>(this.url + postId, post);
  }

  public getPosts(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public getOnePost(id: number): Observable<any> {
    return this.http.get<any>(this.url + id);
  }

  public deletePost(id: number): Observable<any> {
    return this.http.delete<any>(this.url + id);
  }

}
