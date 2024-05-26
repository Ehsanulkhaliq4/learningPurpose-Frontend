import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _cat:CategoryService,private _router:Router){}
  qId = 0;
  quiz:any;
  categories:any;
  ngOnInit(): void { 
    this.qId =this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz)
      },
      (error)=>{
        Swal.fire('Error !!!','Error in loading data from server','error');
      }
    )
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error)=>{
        alert('Error in Loading Categories')
      }
    );
  }
  public updateData(){
    this._quiz.updateQuiz(this.quiz).subscribe((data)=>{
      Swal.fire('Success','Quiz Is Updated Successfully','success').then((e)=>{
        this._router.navigate(['/admin/quizzes']);
      });
    },(error)=>{
      Swal.fire('Error !!!','Error In Updating Quiz','error');
      console.log(error)
    });
  }
}
