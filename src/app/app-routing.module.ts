import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { adminGuard } from './services/admin.guard';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { normalGuard } from './services/normal.guard';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { CreatePostComponent } from './pages/admin/create-post/create-post.component';
import { ViewAllComponent } from './pages/admin/view-all/view-all.component';
import { ViewPostComponent } from './pages/admin/view-post/view-post.component';
import { SearchBlogComponent } from './pages/admin/search-blog/search-blog.component';
import { CreateBlogComponent } from './pages/user/create-blog/create-blog.component';
import { ViewAllBlogComponent } from './pages/user/view-all-blog/view-all-blog.component';
import { ViewBlogComponent } from './pages/user/view-blog/view-blog.component';
import { SerchBlogComponent } from './pages/user/serch-blog/serch-blog.component';
import { AddbookComponent } from './pages/admin/addbook/addbook.component';
import { ViewBooksComponent } from './pages/admin/view-books/view-books.component';
import { UserPrfileComponent } from './pages/user/user-prfile/user-prfile.component';
import { UserViewBookComponent } from './pages/user/user-view-book/user-view-book.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:qid/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path:'add-question/:qid/:title',
        component:AddQuestionComponent
      },
      {
        path:'update-question/:quesId',
        component:UpdateQuestionComponent
      },
      {
        path:'create-post',
        component:CreatePostComponent
      },
      {
        path:'view-all-blogs',
        component:ViewAllComponent
      },
      {
        path:'view-post/:id',
        component:ViewPostComponent
      },
      { path:'search-by-name',
        component:SearchBlogComponent
      },
      { path:'add-book',
        component:AddbookComponent
      },
      { path:'view-books',
        component:ViewBooksComponent
      },
      { path:'view-users',
        component:ViewUsersComponent
      },
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[normalGuard],
    children:[
      {
        path:'view-profile',
        component:UserPrfileComponent
      },
      {
        path:'view-books',
        component:UserViewBookComponent
      },
      {
        path:'create-post',
        component:CreateBlogComponent
      },
      {
        path:'view-blog/:id',
        component:ViewBlogComponent
      },
      {
        path:'search-blog',
        component:SerchBlogComponent
      },
      {
        path:'view-all-blogs',
        component:ViewAllBlogComponent
      },
      {
        path:':catId',
        component:LoadQuizComponent
      },
      {
        path:'instructions/:qid',
        component:InstructionsComponent
      },
      
    ]
  },
  {
    path:'start/:qid',
    component:StartComponent,
    canActivate:[normalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
