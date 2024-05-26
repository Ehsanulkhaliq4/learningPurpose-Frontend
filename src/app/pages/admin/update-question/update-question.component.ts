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
  question:any;
  updateQuestion:any;
  constructor(private _question:QuestionService,private _route:ActivatedRoute){}
  ngOnInit(): void {
    this.quesId=this._route.snapshot.params['questionId'];
    this._question.getQuestionById(this.quesId).subscribe(
      (data:any)=>{
        console.log(data);
        
      },(error)=>{
        console.log(error);
        
      }
    )
  }
  // public updatedQuestion(){
  //   this._question.updateQuestion(this.question).subscribe(
  //     (data)=>{
  //       this.updateQuestion= data
  //       Swal.fire('Updated SuccessFully !!!','Question Updated Successfully','success');
  //     },(error)=>{
  //       Swal.fire('Error','Error in updating Question','error');
  //     }
  //   )
  // }

}
