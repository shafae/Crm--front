import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/project/projects/projects.component';
import { BuildingsComponent } from './components/building/buildings/buildings.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UnitsComponent } from './components/unit/units/units.component';
import { SingleProjectComponent } from './components/project/single-project/single-project.component';
import { SingleBuildingComponent } from './components/building/single-building/single-building.component';
import { SingleUnitComponent } from './components/unit/single-unit/single-unit.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
import { AddBuildingComponent } from './components/building/add-building/add-building.component';
import { AddUnitComponent } from './components/unit/add-unit/add-unit.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { EditBuildingComponent } from './components/building/edit-building/edit-building.component';
import { EditUnitComponent } from './components/unit/edit-unit/edit-unit.component';
import { AddRoleComponent } from './components/role/add-role/add-role.component';
import { AddUrlComponent } from './components/url/add-url/add-url.component';
import { AddRoleToUrlComponent } from './components/url/add-role-to-url/add-role-to-url.component';
import { EditUrlComponent } from './components/url/edit-url/edit-url.component';
import { AddPaymentComponent } from './components/payments/add-payment/add-payment.component';
import { UnitPaymentsComponent } from './components/payments/unit-payments/unit-payments.component';
import { EditPaymentComponent } from './components/payments/edit-payment/edit-payment.component';
import { PaymentPdfComponent } from './components/payments/payment-pdf/payment-pdf.component';
import { AllUsersComponent } from './components/user/all-users/all-users.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UpdateProfilePictureComponent } from './components/user/update-profile-picture/update-profile-picture.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { ClientUnitsComponent } from './components/unit/client-units/client-units.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BuildingsComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    UnitsComponent,
    SingleProjectComponent,
    SingleBuildingComponent,
    SingleUnitComponent,
    AddProjectComponent,
    AddBuildingComponent,
    AddUnitComponent,
    EditProjectComponent,
    EditBuildingComponent,
    EditUnitComponent,
    AddRoleComponent,
    AddUrlComponent,
    AddRoleToUrlComponent,
    EditUrlComponent,
    AddPaymentComponent,
    UnitPaymentsComponent,
    EditPaymentComponent,
    PaymentPdfComponent,
    AllUsersComponent,
    EditUserComponent,
    ProfileComponent,
    UpdateProfilePictureComponent,
    ChangePasswordComponent,
    ClientUnitsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS ,
      useClass : AuthInterceptor ,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
