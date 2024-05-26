import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent {

  postForm!:FormGroup;

  tags:string[]=[];
  selectedFile:File | null;
  imagePreview: string | ArrayBuffer | null;

  constructor(private fb:FormBuilder,
    private router:Router,
    private snakbar:MatSnackBar,
    private postService:PostService
  ){}

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }
  previewImage(){
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result
    }
    reader.readAsDataURL(this.selectedFile);
  }
  
  ngOnInit(){
    this.postForm = this.fb.group({
      name : [null,Validators.required],
      content : [null,[Validators.required,Validators.maxLength(5000)]],
      postedBy : [null,Validators.required],
      tags : [null,Validators.required]
    });
  }

  add(event:any){
    const value = (event.value || '').trim();

    if(value){
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }
  remove(tag:any){
    const index = this.tags.indexOf(tag);
    if(index>0){
      this.tags.splice(index,1);
    }
  }

  createPost():void{
    if(this.postForm.valid){
       const data = this.postForm.value;
    data.tags = this.tags
    const formData:FormData = new FormData();
    formData.append('img',this.selectedFile);
    formData.append('name',this.postForm.get('name').value);
    formData.append('content',this.postForm.get('content').value);
    formData.append('postedBy',this.postForm.get('postedBy').value);
    for (const tag of this.tags) {
      formData.append('tags', tag); // Append each tag individually
    }
    this.postService.creatPost(formData).subscribe(
        (data)=>{
          this.snakbar.open("Post Created Successfully !!!","OK",
            {
              duration:5000
            }
          )
          this.router.navigateByUrl("/admin/view-all-blogs")
        },(err)=>{
          this.snakbar.open("Something went wrong !!!","TRY AGAIN",
            {
              duration:5000
            }
          )
        }
      )
    }else{
      for(const i in this.postForm.controls){
        this.postForm.controls[i].markAsDirty();
        this.postForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
