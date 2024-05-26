import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit{

  categories=[
    {
      cid:0,
      title:''
    }
  ]
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:''
    },
  }

  constructor(private _cat:CategoryService,private _snak:MatSnackBar,private _quiz:QuizService){}
  ngOnInit(): void {
   this._cat.categories().subscribe(
    (data:any)=>{
      this.categories=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error','Error in loading data from Server','error')
    }
   )
  }

  //add Quiz
  addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title == null || 
    this.quizData.description.trim()=='' || this.quizData.description == null
     ){
      this._snak.open('All Field Required','OK',{
        duration:3000
      });
      return;
    }
    //call server
    this._quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>{
        Swal.fire('Success','Quiz Added SuccessFully','success');
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            cid:''
          },
        };
      },
      (error)=>{
        this._snak.open('Internal Server Error','Try Again',{
          duration:5000
        })
      }
    )
  }

}
