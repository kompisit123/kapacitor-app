import { Component, OnInit } from '@angular/core';
import { BehaviorSubject,  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage'
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Subscription, timer} from 'rxjs'; 
import { map } from 'rxjs/operators'; 

import { ThemeService } from '../services/theme.service';

const circleR = 80;
const circleDasharray = 2*Math.PI*circleR;


@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  isLoading = false;
  darktheme: boolean;

  timerSubscription: Subscription; 
  time: BehaviorSubject<string>= new BehaviorSubject('00:00');
  percent: BehaviorSubject<number>= new BehaviorSubject(100);
  timer: number;  // ตั้งค่าให้เป็นวินาที
  timerex: number;  // ตั้งค่าให้เป็นวินาที
  interval;
  token:any;
  date: any;
 

  circleR = circleR;
  circleDasharray = circleDasharray;

  energize: '1' | '0' = '0';

  user:any;
  useby: string;
  accesskey: string;
  requestOptions: any;
  address:string;
  deviceId:string;

  timestart: number;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private loadingController: LoadingController,
    private theme: ThemeService,
    private router: Router,
  ) { }

  async ngOnInit() {

    this.storage.get('address').then((result) => {
      this.address = result
      console.log("address: "+result)
      });

    //Fetch data every 10000ms
    this.timerSubscription = timer(0, 10000).pipe( 
      map(() => { 
       //this.loadData(); // load data contains the http request 
       //console.log("Hey PowerEEx")
       this.dataCus(this.address)
      }) 
    ).subscribe(); 

    this.fetchdata();
  
    this.storage.get('token').then((result) => {
      this.token = result
      console.log("Access token: "+result)
    });
  
    this.storage.get('accesskey').then((result) => {
      this.accesskey = result
      console.log("Access key: "+this.accesskey)
    });
  
    this.storage.get('energize').then((result) => {
      this.energize = result
      console.log("Energize status: "+this.energize)
    }).then(()=>{
      if (this.energize == '1'){
        console.log("continour count ")
        this.timerex = this.timestart*60
      
        this.updateClockTimeValue();
        this.interval = setInterval(() => { this.updateClockTimeValue(); }, 1000);
        
      } else {
        console.log("Ready")
      }
    });
  
    this.storage.get('deviceId').then((result) => {
        this.deviceId = result
        console.log("device Id: "+result)
        });

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
    
  fetchdata() {  //show clock time
      this.storage.get('remaintime').then((result) => {
        console.log(result)
        this.timestart = Number(result);
        this.clockstart(Number(result));
      });
  }
   
  clockstart(timestart) {
      //รับเวลามาแสดงค่า//
      let value = timestart*60
      let hours: any = Math.floor(value / 3600);
      let minutes: any = Math.floor((value % 3600) / 60);
          hours = String('00' + hours).slice(-2);
          minutes =String('00' + minutes).slice(-2);
      let  seconds: any = String('00' + Math.floor(value - minutes * 60)).slice(-2);
  
      const text =hours+':'+minutes+':'+seconds
      this.time.next(text); 

    }
  
    async present(time) {
      this.isLoading = true;
      return await this.loadingController.create({
         duration: time,
         spinner: null,
         message: '<img src="/assets/img/barload.svg">',//Your Gif File Path
         cssClass: 'custom-loading',//linkกับ global.scss
         translucent: true,
         showBackdrop: true,
         mode: 'md',
         keyboardClose: true,
       
      })
      .then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss()
          }
        });
      });
    }
  
    async dismiss() {
      this.isLoading = false;
      return await this.loadingController.dismiss()
    }
  
  
    async startTimer(duration: number){ //เริ่มนับถอยหลัง พร้อมกับสั่งเปิดไฟ
      this.energize = '1';
      //this.timerex = duration*60;
      this.updateTimeValue();
      this.interval= setInterval( ()=>{ this.updateTimeValue();}, 1000);
    }
  
  
    updateTimeValue(){
  
        let value = this.timer
        let hours: any = Math.floor(value / 3600);
        let minutes: any = Math.floor((value % 3600) / 60);
          hours = String('00' + hours).slice(-2);
          minutes =String('00' + minutes).slice(-2);
        let  seconds: any = String('0' + Math.floor(value - minutes * 60)).slice(-2);
       
       // const text = hours + ':' + minutes + ':' + seconds
        const text = seconds
        this.time.next(text);
        //console.log(text);
      
        const totalTime = 10; //เซ็ตให้เวลาหมุนติ้ว เริ่มนับจาก 10วิ
        //const totalTime = this.timestart*60; 
        const percentage =((totalTime - this.timer)/totalTime)*100;
        this.percent.next(percentage);
        //console.log(this.timer)   // เวลาที่คงเหลือ นับถอยหลังไปเรื่อยๆ 
        
        --this.timer;
        if (this.timer<0){
           clearInterval(this.interval);
          // this.state = 'topup';
        }
  
       }
    
      percentageOffset(percent){
      const percentFloat = percent /100;
      return circleDasharray * (1-percentFloat);
    }
  
    updateClockTimeValue(){
  
      let value = this.timerex
      //let value = 65
      let hours: any = Math.floor(value / 3600);
      let minutes: any = Math.floor((value % 3600) / 60);
        hours = String('00' + hours).slice(-2);
        minutes =String('00' + minutes).slice(-2);
      let  seconds: any = String('00' + Math.floor(value - minutes * 60)).slice(-2);
     
  
      const text = hours+':'+minutes+':'+seconds
      this.time.next(text);
      
      --this.timerex;
      if (this.timerex<0){
        clearInterval(this.interval);
      }
  
     }
  
     requestAccess(){
      console.log("Request Access")
      let body = { address: this.address,
                   deviceId : this.deviceId
                 }
  
       let headers = new HttpHeaders({
                   'Authorization': this.token
                  });
               
     console.log(body)
      this.http.post('https://enx.bannaisoi.com/requestaccess',body,{ headers: headers })
      .subscribe((res: any) => {
        console.log(res.message)
      
         if(res.message == 'Expire 2 min'){ 
           this.accesskey = res.accesskey
           this.storage.set('accesskey', res.accesskey)
           console.log('Access key: '+res.accesskey)
           if (res.energize) {
             this.storage.set('energize',res.energize )
             this.offPower();
           }
           
         }
      
      },
    
       (error :any ) => {
        console.log(error)
       }
  
      )
     
      }
   
    onPower() { //สั่งเปิดไฟ
      this.present(2000);
      
      var myHeaders = new Headers();
      myHeaders.append("authorization", this.accesskey);
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "deviceId": this.deviceId,
        "energize": "1",
        "useAddress": this.address
      });
      
      this.requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      console.log("OK ON")
    
      this.updateClockTimeValue();
      this.interval = setInterval(() => { this.updateClockTimeValue(); }, 1000);
      
      fetch("https://enx.bannaisoi.com/sentcommand", this.requestOptions)
        .then(response => response.text())
        .then( result => console.log(result)
  
        )
        .catch(error => console.log('error', error)); 
      
    }
    
    offPower() { //สั่งเปิดไฟ
      this.present(2000);
      
      var myHeaders = new Headers();
      myHeaders.append("authorization", this.accesskey);
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "deviceId": this.deviceId,
        "energize": "0",
        "useAddress": this.address
      });
      
      this.requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      console.log("OK OFF")
    
      fetch("https://enx.bannaisoi.com/sentcommand", this.requestOptions)
        .then(response => response.text())
        .then( ()=>{
          this.router.navigateByUrl('dashboard')
        })
        .catch(error => console.log('error', error)); 
      
    }
    
    textcount() {
      this.onPower();
      this.energize = '1';
      this.timer = 10;
      this.updateTimeValue();
      this.interval = setInterval(() => { this.updateTimeValue(); }, 1000);
    }


     dataCus (walletaddress:string) {

      console.log("Request Customer data")

      let body = { address: walletaddress }
      console.log(body)
  
       let headers = new HttpHeaders({
                   'Content-Type': 'application/json'
                  });

      console.log(headers)
               
      this.http.post('https://chain.kapacitor.me/custormerdata',body,{ headers: headers })
      .subscribe((res: any) => {
      //console.log(res.remaintime)
    
       this.timerex = Number(res.remaintime)*60
       this.storage.set('remaintime',res.remaintime)
      
      },
    
       (error :any ) => {
        console.log(error)
       }
  
      )    
    }
       
    themeChange(event:any){
      console.log(event.detail.checked)
      this.storage.set('theme',event.detail.checked);
      this.theme.onClick(event.detail.checked)
    }

    ngOnDestroy(): void { 
      this.timerSubscription.unsubscribe(); 
    }   
}
