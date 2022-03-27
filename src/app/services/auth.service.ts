import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import detectEthereumProvider from '@metamask/detect-provider';

import { Storage } from '@ionic/storage-angular'

interface NonceResponse {
  nonce: string;
}

interface VerifyResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn = false;
  token:any;


  constructor(
    private http: HttpClient,
    private storage: Storage
     ) {}
  
   
  public signInWithMetaMask() {
    let ethereum: any;

    return from(detectEthereumProvider()).pipe(
      // Step 1: Request (limited) access to users ethereum account
      switchMap(async (provider) => {
        if (!provider) {
          throw new Error('Please install MetaMask');
        }

        ethereum = provider;
        console.log(ethereum.selectedAddress) //ได้รายละเอียดต่างๆ อันนี้เป็น user address

        return await ethereum.request({ method: 'eth_requestAccounts' });
      }),
      // Step 2: Retrieve the current nonce for the requested address
      switchMap(() => 
        this.http.post<NonceResponse>(
          'http://localhost:3010/getNonceToSign',
          {
            address: ethereum.selectedAddress,
          }
        )
      ),
      // Step 3: Get the user to sign the nonce with their private key
      switchMap(
        
        async (response) =>
          await ethereum.request({
            method: 'personal_sign',
            params: [
              `0x${this.toHex(response.nonce)}`,
              ethereum.selectedAddress,
            ],
          })
          
      ),
      // Step 4: If the signature is valid, retrieve a custom auth token for Firebase
      switchMap((sig) =>
        
        this.http.post<VerifyResponse>(
          'http://localhost:3010/verifysign',
          { address: ethereum.selectedAddress, signature: sig }
        )
      ),
      // Step 5: Use the auth token to auth with Firebase
      switchMap(
        async (response) =>
          //console.log(response.token)
          await this.storage.set('token', response.token)
      )
    );
  }

  private toHex(stringToConvert: string) {
    return stringToConvert
      .split('')
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }

  signOut() {
    console.log('Logout')
        this.storage.remove('token');
        this.isLoggedIn = false;
        delete this.token;   
      }

}
