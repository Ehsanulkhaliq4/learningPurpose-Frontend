import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent implements OnInit{

  quizzes:any=[]

  constructor(private _quiz:QuizService){}
  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data) => {
        this.quizzes = data
      },
      (error) => {
        Swal.fire('Error !!!','Error in loading data from server','error')
      }
    )
  }
  deleteQuiz(qId:any)
  {
   Swal.fire({
    icon:'warning',
    title:"Are you sure !!!",
    confirmButtonText:'Delete',
    showCancelButton:true
   }).then((result)=>{
    if(result.isConfirmed){
      //delete
      this._quiz.deleteQuiz(qId).subscribe(
        (data)=>{
          this.quizzes = this.quizzes.filter((quiz:any)=> quiz.qId != qId)
          Swal.fire('Deleted SuccessFully','Quiz Deleted Successfully','success')
        },
        (error)=>{
          Swal.fire('Error','Quiz is Not Deleted','error');
        }
      )
    }
   })
  }


}
