/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5ca6fb6b3e3a575750171757
*
* You will get 10% discount for each one of your friends
* 
*/
import { NgModule } from '@angular/core';
/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { FindJobService } from './services/find-job.service';
import { UserService } from './services/user.service';

/* END MY SERVICES IMPORTS*/
import { AuthGuard } from './security/auth.guard';
import { AuthenticationService } from './security/authentication.service';
import { SecurityService } from './security/services/security.service';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { AuthInterceptor } from './security/auth.interceptor';

@NgModule({
  imports: [],
  providers: [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    FindJobService,
    UserService,
 /* END PROVIDERS */

    // SECURITY
    AuthGuard,
    AuthenticationService,
    SecurityService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: []
})
export class CoreModule {
}
