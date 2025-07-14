import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomeNavbarComponent } from './components/home/home-navbar/home-navbar.component';
import { CompanyDashboardComponent } from './components/company/company-dashboard/company-dashboard.component';
import { CompanyNavbarComponent } from './components/company/company-navbar/company-navbar.component';
import { CompanyRegisterComponent } from './components/company/company-register/company-register.component';
import { CompanyJobsComponent } from './components/company/company-jobs/company-jobs.component';
import { PostJobComponent } from './components/company/post-job/post-job.component';
import { JobApplicationsComponent } from './components/company/job-applications/job-applications.component';
import { ApplicantDashboardComponent } from './components/applicant/applicant-dashboard/applicant-dashboard.component';
import { ApplicantNavbarComponent } from './components/applicant/applicant-navbar/applicant-navbar.component';
import { ApplicantRegisterComponent } from './components/applicant/applicant-register/applicant-register.component';
import { JobListComponent } from './components/applicant/job-list/job-list.component';
import { ApplyJobComponent } from './components/applicant/apply-job/apply-job.component';
import { MyApplicationsComponent } from './components/applicant/my-applications/my-applications.component';
import { JobDetailsComponent } from './components/shared/job-details/job-details.component';
import { ApplicationDetailsComponent } from './components/shared/application-details/application-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    HomeNavbarComponent,
    CompanyDashboardComponent,
    CompanyNavbarComponent,
    CompanyRegisterComponent,
    CompanyJobsComponent,
    PostJobComponent,
    JobApplicationsComponent,
    ApplicantDashboardComponent,
    ApplicantNavbarComponent,
    ApplicantRegisterComponent,
    JobListComponent,
    ApplyJobComponent,
    MyApplicationsComponent,
    JobDetailsComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
