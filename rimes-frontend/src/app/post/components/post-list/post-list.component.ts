import { Component, OnInit } from '@angular/core';
import { Post } from '../../interface/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[]=[];

  constructor(
    private postService: PostService
  ){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  onDelete(id:number){
    var choice = confirm("Are you sure you want to delete this record?")
    if(choice){
      this.postService.deletePost(id).subscribe(res => {
        alert("Record Deleted")
        this.getPosts();
      });  
    }
  }
}
