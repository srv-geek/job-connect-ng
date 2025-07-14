import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CompanyDashboardComponent } from './components/company/company-dashboard/company-dashboard.component';
import { CompanyRegisterComponent } from './components/company/company-register/company-register.component';
import { PostJobComponent } from './components/company/post-job/post-job.component';
import { CompanyJobsComponent } from './components/company/company-jobs/company-jobs.component';
import { JobApplicationsComponent } from './components/company/job-applications/job-applications.component';
import { ApplicantDashboardComponent } from './components/applicant/applicant-dashboard/applicant-dashboard.component';
import { ApplicantRegisterComponent } from './components/applicant/applicant-register/applicant-register.component';
import { JobListComponent } from './components/applicant/job-list/job-list.component';
import { JobDetailsComponent } from './components/shared/job-details/job-details.component';
import { ApplyJobComponent } from './components/applicant/apply-job/apply-job.component';
import { MyApplicationsComponent } from './components/applicant/my-applications/my-applications.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Company Routes
  { path: 'dashboard/company', component: CompanyDashboardComponent },
  { path: 'company/register', component: CompanyRegisterComponent },
  { path: 'company/post-job', component: PostJobComponent },
  { path: 'company/jobs', component: CompanyJobsComponent },
  { path: 'company/applications/:jobId', component: JobApplicationsComponent },

  // Applicant Routes
  { path: 'dashboard/applicant', component: ApplicantDashboardComponent },
  { path: 'applicant/register', component: ApplicantRegisterComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },  
  { path: 'apply/:jobId', component: ApplyJobComponent },
  { path: 'my-applications', component: MyApplicationsComponent },

  { path: '**', component: HomePageComponent } // fallback to home or NotFound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
