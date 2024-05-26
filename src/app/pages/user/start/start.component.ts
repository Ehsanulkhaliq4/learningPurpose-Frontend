import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit{

  qid:any;
  questions:any;
  marksGot=0;
  correctAnswers=0;
  attempted=0;
  isSubmit = false;
  timer:any;

  constructor(private locationSt:LocationStrategy,
    private _route:ActivatedRoute,
    private _question:QuestionService){}

  ngOnInit(): void {
   this.prevantBackButton()
   this.qid = this._route.snapshot.params['qid'];
   this.loadQuestions();
  }

  loadQuestions(){
    this._question.getQuestionOfQuizForTest(this.qid).subscribe(
      (data:any)=>{
        this.questions = data;
        console.log(this.questions);
        
        this.timer = this.questions.length*2*60;
        this.startTimer()
      },
      (error)=>{
        Swal.fire('Error','Error in loading questions','error');
      }
    )
  }

  prevantBackButton(){
    history.pushState(null,"",location.href)
    this.locationSt.onPopState(()=>{
      history.pushState(null,"",location.href)
    });
  }
  indexToString(index: number): string {
    return String(index);
}

  submitQuiz(){
    Swal.fire({
      title: "Do you want to submit the quiz?",
      showCancelButton: true,
      confirmButtonText: "Submit",
      icon:'info'
    }).then((e)=>{
      if(e.isConfirmed){
       this.evalQuiz()
      }
    })
  }
  startTimer()
  {
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }
  getFormatedTime()
  {
    let mm=Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return`${mm} min : ${ss} sec`
  }
  evalQuiz()
  {
    this._question.evalQuiz(this.questions).subscribe(
      (data:any)=>{
        this.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true;
      },(error)=>{
        Swal.fire('Error','Error in loading data','error');
      }
    )
  }
  printPage()
  {
    window.print()
  }
}
