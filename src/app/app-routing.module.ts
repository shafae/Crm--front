import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBuildingComponent } from './components/building/add-building/add-building.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
import { AddUnitComponent } from './components/unit/add-unit/add-unit.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BuildingsComponent } from './components/building/buildings/buildings.component';
import { EditBuildingComponent } from './components/building/edit-building/edit-building.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { EditUnitComponent } from './components/unit/edit-unit/edit-unit.component';
import { ProjectsComponent } from './components/project/projects/projects.component';
import { SingleBuildingComponent } from './components/building/single-building/single-building.component';
import { SingleProjectComponent } from './components/project/single-project/single-project.component';
import { SingleUnitComponent } from './components/unit/single-unit/single-unit.component';
import { UnitsComponent } from './components/unit/units/units.component';
import { AddRoleComponent } from './components/role/add-role/add-role.component';
import { AddUrlComponent } from './components/url/add-url/add-url.component';
import { EditUrlComponent } from './components/url/edit-url/edit-url.component';
import { AddPaymentComponent } from './components/payments/add-payment/add-payment.component';
import { UnitPaymentsComponent } from './components/payments/unit-payments/unit-payments.component';
import { PaymentPdfComponent } from './components/payments/payment-pdf/payment-pdf.component';
import { AllUsersComponent } from './components/user/all-users/all-users.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UpdateProfilePictureComponent } from './components/user/update-profile-picture/update-profile-picture.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { ClientUnitsComponent } from './components/unit/client-units/client-units.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginGuard } from './Guards/login.guard';

const routes: Routes = [
  {path:'',component:ProjectsComponent},
  {path:'login',component:LoginComponent,canActivate:[LoginGuard]},
  {path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'allUsers',component:AllUsersComponent,canActivate:[AuthGuard]},
  {path:'editUser/:id',component:EditUserComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'profilePicture',component:UpdateProfilePictureComponent,canActivate:[AuthGuard]},
  {path:'changePassword',component:ChangePasswordComponent,canActivate:[AuthGuard]},




  {path:'projects',component:ProjectsComponent},
  {path:'project/:id',component:SingleProjectComponent},
  {path:'addProject',component:AddProjectComponent,canActivate:[AuthGuard]},
  {path:'editProject/:id',component:EditProjectComponent,canActivate:[AuthGuard]},


  {path:'buildings/:id',component:BuildingsComponent},
  {path:'building/:id',component:SingleBuildingComponent},
  {path:'addBuilding/:id',component:AddBuildingComponent,canActivate:[AuthGuard]},
  {path:'editBuilding/:id',component:EditBuildingComponent,canActivate:[AuthGuard]},


  {path:'units/:id',component:UnitsComponent},
  {path:'unit/:id',component:SingleUnitComponent},
  {path:'myUnits',component:ClientUnitsComponent,canActivate:[AuthGuard]},
  {path:'addUnit/:id',component:AddUnitComponent,canActivate:[AuthGuard]},
  {path:'editUnit/:id',component:EditUnitComponent,canActivate:[AuthGuard]},

  {path:'addRole',component:AddRoleComponent,canActivate:[AuthGuard]},

  {path:'addUrl',component:AddUrlComponent,canActivate:[AuthGuard]},
  {path:'editUrl/:id',component:EditUrlComponent,canActivate:[AuthGuard]},

  {path:'addPayment/:id/:clientId',component:AddPaymentComponent,canActivate:[AuthGuard]},
  {path:'getUnitPayments/:id',component:UnitPaymentsComponent,canActivate:[AuthGuard]},
  {path:'showPdf/:id',component:PaymentPdfComponent,canActivate:[AuthGuard]},

  { path: '**', pathMatch: 'full',component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

