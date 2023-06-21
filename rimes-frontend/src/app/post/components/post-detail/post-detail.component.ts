import { Component, OnInit } from '@angular/core';
import { Post } from '../../interface/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post!: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getOnePost(id).subscribe(res => {
      this.post = res;
    });
  }

}
