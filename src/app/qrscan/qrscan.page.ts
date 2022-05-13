import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';

import jsQR from 'jsqr';
import stopMediaStream from 'stop-media-stream';

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage {
  address:string;
  texttime:string;
  remaintime :number;
  point: number
  darktheme: boolean

  scanstate = false;
  scanActive = true;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;
  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  stream:any

  constructor(
    private loadingController: LoadingController,
 
 
  ) {}

  ngOnInit(){
    this.startScan()
  }
 
  ionViewDidLeave(){
    this.stopStream()
    window.close
   
  }

  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }
  
  async stopStream() {
    stopMediaStream(this.stream);
  }

  async startScan() {
    // Not working on iOS standalone mode!
 
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: {facingMode: 'environment'} })
   .then(mediaStream => {return mediaStream; })

    this.videoElement.srcObject = this.stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);
   
    this.loading = await this.loadingController.create({});
    await this.loading.present();
    //this.present()
   
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
    //this.scanActive = true;
  }
   
  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
   
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
   
      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
   
      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        console.log(this.scanResult)
        this.stopStream();
        //console.log("code data"+ code.data)
        window.open(code.data,"_self");
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }
}
