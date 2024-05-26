import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.css'
})
export class ViewQuizQuestionsComponent implements OnInit{

  qId:any;
  qTitle:any;
  questions = [
    {
      quesId:'',
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:''
    }
  ];

  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _snack:MatSnackBar
  ){}
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this._question.getQuestionOfQuiz(this.qId).subscribe(
      (data:any)=>{
        this.questions = data;
      },
      (error)=>{
        Swal.fire('Error !!!','Error in loading questions from Server','error');
      }
    )
    
  }
  //delete Question
  deleteQuestion(qId:any){
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure , You want to delete this question?'
    }).then((result)=>{
      if(result.isConfirmed){
        this._question.deleteQuestion(qId).subscribe((data)=>{
          this._snack.open('Deleted Question !!!','',{
            duration:3000
          });
          this.questions = this.questions.filter((q)=>q.quesId != qId)
        },
        (error)=>{
          this._snack.open('Error in deleting Question !!!','',{
            duration:3000
          })
        });
      }
    },)
  }

}
