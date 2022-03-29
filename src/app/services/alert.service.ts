import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
  ) { }

  async usingAlert(_message:string) {
    const alert = await this.alertController.create({
      cssClass: 'kanit-alert',
      header: 'Kapacitor',
      message: _message,
      mode: 'md',
      buttons: [{
        text: 'OK',
        cssClass: 'ok',
        handler: () => {
          console.log('Confirm Okay');
        }
      }]
    });
    await alert.present();
  }

}
