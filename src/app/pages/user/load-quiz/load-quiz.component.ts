import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent implements OnInit{

  catId:any;
  quizzes:any;

  constructor(private _route:ActivatedRoute,private _quiz:QuizService){}

  ngOnInit(): void {
    
    this._route.params.subscribe((params)=>{
      console.log(params);
      this.catId=params['catId'];
      if (this.catId == 0) {
        this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
            this.quizzes = data;
          },(error)=>{
            console.log(error);
            Swal.fire('Error','Error in loading data from server','error');
          }
        )
      }else{
        console.log("Load Specific Quiz");
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data)=>{
            this.quizzes = data
          },
          (error)=>{
            Swal.fire('Error','Error in loading quiz from server','error');
            console.log(error);
            
          }
        )
      }
    })
  }

}
