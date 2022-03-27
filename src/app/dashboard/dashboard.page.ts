import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {


  constructor(
    private authService: AuthService,
    private storage :Storage,
    private navCtrl: NavController
  ) {}

  async logout() {
    await this.authService.signOut();
    this.navCtrl.navigateBack('/home');
  }

  async test() {
     let aaaa = await this.storage.get('token');
     console.log(aaaa)
     
   }
}
