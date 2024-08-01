import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { authInterceptorProvider } from './services/auth.interceptor';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreatePostComponent } from './pages/admin/create-post/create-post.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from '@angular/material/dialog';
import { ViewAllComponent } from './pages/admin/view-all/view-all.component';
import { ViewPostComponent } from './pages/admin/view-post/view-post.component';
import { SearchBlogComponent } from './pages/admin/search-blog/search-blog.component';
import { CreateBlogComponent } from './pages/user/create-blog/create-blog.component';
import { ViewAllBlogComponent } from './pages/user/view-all-blog/view-all-blog.component';
import { ViewBlogComponent } from './pages/user/view-blog/view-blog.component';
import { SerchBlogComponent } from './pages/user/serch-blog/serch-blog.component';
import { AddbookComponent } from './pages/admin/addbook/addbook.component';
import { ViewBooksComponent } from './pages/admin/view-books/view-books.component';
import { BookPopupComponent } from './pages/book-popup/book-popup.component';
import { UserPrfileComponent } from './pages/user/user-prfile/user-prfile.component';
import { UserViewBookComponent } from './pages/user/user-view-book/user-view-book.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { ContactUsComponent } from './pages/contactPopUp/contact-us/contact-us.component';
import { TeamComponent } from './pages/team/team.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { VerifyOtpComponent } from './pages/changePasswordPages/verify-otp/verify-otp.component';
import { ChangePasswordPageComponent } from './pages/changePasswordPages/change-password-page/change-password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    UserDashboardComponent,
    DashboardComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserSidebar,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    CreatePostComponent,
    ViewAllComponent,
    ViewPostComponent,
    SearchBlogComponent,
    CreateBlogComponent,
    ViewAllBlogComponent,
    ViewBlogComponent,
    SerchBlogComponent,
    AddbookComponent,
    ViewBooksComponent,
    BookPopupComponent,
    UserPrfileComponent,
    UserViewBookComponent,
    ViewUsersComponent,
    ContactUsComponent,
    TeamComponent,
    ForgotpasswordComponent,
    VerifyOtpComponent,
    ChangePasswordPageComponent,
  ],
  imports: [
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatChipsModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [authInterceptorProvider, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
