import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/result', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
