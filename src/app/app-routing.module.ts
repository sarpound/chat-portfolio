import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { WorkComponent } from './pages/work/work.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'work', component: WorkComponent },
  { path: 'project', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
