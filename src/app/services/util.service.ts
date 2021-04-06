import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public loading : HTMLIonLoadingElement;
  constructor(private toastCtrl : ToastController, private loadingCtrl : LoadingController) { }

  async showToast(message : string, duration : number = 2000){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      cssClass: 'animate__bounceInRight',
      color: 'secondary',
      position: 'middle'
    });

    toast.present();
  }

}
