import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public model: any = {};
    public loading = false;
    public returnUrl: string;
    public user: Observable<firebase.User>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private afAuth: AngularFireAuth) {
            this.user = this.afAuth.authState;
        }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    loginGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then( success => {
            this.router.navigate(['']);
          })
        .catch(function (error) {
            this.alertService.error(error);
            this.loading = false;
        });
      }

      loginFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .catch(function (error) {
            this.alertService.error(error);
        });
      }
}
