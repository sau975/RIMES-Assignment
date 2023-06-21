import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interface/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  form!: FormGroup;
  postId!: number;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userId: [null],
      title: [''],
      body: ['']
    });

    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.postId = id;
    if(id > 0){
      this.postService.getOnePost(id).subscribe(res => {
        this.patchData(res);
      });  
    }
  }

  patchData(post:Post){
    this.form.patchValue({
      userId: post.userId,
      title: post.title,
      body: post.body
    });
  }

  submit(){
    let data:Post = Object.assign({}, this.form.value);
    if(this.postId == 0){
      this.savePost(data);
    }else{
      this.updatePost(this.postId, data);
    }
  }

  savePost(data:any){
    this.postService.savePost(data).subscribe(res => {
      if(res){
        alert("Record Added");
        this.router.navigate(['posts']);  
      }
    })
  }

  updatePost(postId:number, data:any){
    var choice = confirm("Are you sure you want to update this record?")
    if(choice){
      this.postService.updatePost(postId, data).subscribe(res => {
        if(res){
          alert("Record Updated");
          this.router.navigate(['posts']);  
        }
      });  
    }
  }

  cancel(){
    this.router.navigate(['posts']);  
  }

}
