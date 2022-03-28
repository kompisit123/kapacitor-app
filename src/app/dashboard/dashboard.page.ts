import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import jsQR from 'jsqr';
import stopMediaStream from 'stop-media-stream';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  address:string;
  texttime:string;
  remaintime :number;
  point: number

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
    private authService: AuthService,
    private storage :Storage,
    private navCtrl: NavController,
    private http: HttpClient,
    private loadingController: LoadingController,
    private router: Router,
  ) {}

  ngOnInit(){
    this.storage.get('address').then(
      data => {
        this.address = data;
      },
      error => {
       console.log("Make Alert ERROR")
      }
    ).then(()=>{
      this.getcusdata()
    })
  }
 
  ionViewWillEnter(){
    console.log("Reload when show")
    this.getcusdata()
  }

  getcusdata(){
  
    this.http.post('https://chain.kapacitor.me/custormerdata',{ address: this.address})
    .subscribe((res: any) => {

      //console.log(res)
      this.remaintime = res.remaintime
      this.point =res.amount
      this.storage.set('remaintime', res.remaintime)

      let hours:any = res.remaintime/60;   //แปลงเป็นชั่วโมง
      let minutes:any = res.remaintime %60;   //แปลงเป็นนาที
      let seconds:any = res.remaintime *60 %60; // แปลงเป็นวินาที
      hours = String('0'+Math.floor(hours)).slice(-2);
      //console.log( hours)
      minutes = String('0'+Math.floor(minutes)).slice(-2);
      //console.log(minutes)
      seconds=String('0'+Math.floor(seconds)).slice(-2);
      //console.log(seconds)
      this.texttime =hours+':'+minutes+':'+seconds
     console.log(this.texttime);
     //this.dismiss();
    }) 
  }

  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }
  
  async stopStream() {
    //this.scanActive = false;
    stopMediaStream(this.stream);
    // this.loading = null;
    // this.scanActive = true;
  }

  async startScan() {
    // Not working on iOS standalone mode!
 
    this.stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
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
        this.requestAccess();
        this.storage.set('deviceId', code.data)
        //this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

 async requestAccess(){

    console.log("Request Access")

    let body = { address: this.address,
                 deviceId : this.scanResult
               }
     let token = await this.storage.get('token')
     let headers = new HttpHeaders({
                 'Authorization': token
                 
                });
             
   console.log(body)
    this.http.post('https://enx.bannaisoi.com/requestaccess',body,{ headers: headers })
    .subscribe((res: any) => {
      console.log(res.message)
      // if(res.message == 'Out of service'){this.outServiceAlert()}
       if(res.message == 'Expire 2 min'){ 
         //this.accesskey = res.accesskey
         this.storage.set('accesskey', res.accesskey)
         console.log(res.accesskey)
             if (res.energize) {
           this.storage.set('energize',res.energize )
           this.router.navigateByUrl('device')
           }
       }
    },
    (error :any ) => { console.log(error)
      //this.outServiceAlert()
   }
     )}


  async logout() {
    await this.authService.signOut();
    this.navCtrl.navigateBack('/home');
  }

  async test() {
     let aaaa = await this.storage.get('token');
     console.log(aaaa)
     
   }
}
