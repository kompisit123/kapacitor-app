import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public isAuthenticating = false;
  darktheme: boolean

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private theme: ThemeService,
    private storage :Storage,

  ) {}

  ngOnInit(){
    this.storage.get('theme').then(
      data => {
        this.darktheme = data;
        console.log('theme'+ this.darktheme)
      },
      error => {
        this.darktheme = false;
      }
    ).then(()=>{
      this.theme.onClick(this.darktheme)
    })
    
  }

  login() {
    this.isAuthenticating = true;

    this.authService.signInWithMetaMask().subscribe(
      () => {
        this.isAuthenticating = false;
        this.navCtrl.navigateForward('/dashboard');
      },
      (err) => {
        console.log(err);
        this.isAuthenticating = false;
      }
    );
  }
  
  themeChange(event:any){
    console.log(event.detail.checked)
    this.storage.set('theme',event.detail.checked);
    this.theme.onClick(event.detail.checked)
  }

 
}
