import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }
  public getQuestionOfQuiz(qid:any){
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`)
  }
  public getQuestionOfQuizForTest(qid:any){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`)
  }
  //add question
  public addQuestion(question:any){
    return this._http.post(`${baseUrl}/question/`,question);
  }
  //delete Question
  public deleteQuestion(questionId:any){
    return this._http.delete(`${baseUrl}/question/${questionId}`)
  }
  //get single Question
  public getQuestionById(questionId:any){
    return this._http.get(`${baseUrl}/question/${questionId}`)
  }
  //update Question
  public updateQuestion(question:any){
    return this._http.put(`${baseUrl}/question/`,question);
  }
  //eval quiz
  public evalQuiz(question:any){
    return this._http.post(`${baseUrl}/question/eval-quiz`,question);
  }
}
