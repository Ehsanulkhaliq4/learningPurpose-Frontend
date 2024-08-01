import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrl: './update-question.component.css'
})
export class UpdateQuestionComponent implements OnInit{

  quesId:any;
  question={
    quiz:{
      qId:''
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }
  updateQuestion:any;
  constructor(private _question:QuestionService,private _route:ActivatedRoute){}
  ngOnInit(): void {
    this.quesId=this._route.snapshot.params['quesId'];
    this._question.getQuestionById(this.quesId).subscribe(
      (data:any)=>{
        this.question = data;
      },(error)=>{
        Swal.fire('Error !!!','Error in Adding Question','error');
        
      }
    )
  }
  public updatedQuestion(){
    if(this.question.content.trim() == '' || this.question.content == null){
      return;
    }
    if(this.question.option1.trim() == '' || this.question.option1 == null){
      return;
    }
    if(this.question.option2.trim() == '' || this.question.option2 == null){
      return;
    }
    if(this.question.option3.trim() == '' || this.question.option3 == null){
      return;
    }
    if(this.question.answer.trim() == '' || this.question.answer == null){
      return;
    }
    this._question.updateQuestion(this.question).subscribe(
      (data)=>{
        Swal.fire('Updated SuccessFully !!!','Question Updated Successfully','success');
      },(error)=>{
        Swal.fire('Error!!!','Internal Server Error','error');
      }
    )
    
  }

}
