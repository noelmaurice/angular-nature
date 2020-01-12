import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nature';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAq9sV-NIE3s-bQoo_8yJeW11RFzeQsDlw",
      authDomain: "angular-nature.firebaseapp.com",
      databaseURL: "https://angular-nature.firebaseio.com",
      projectId: "angular-nature",
      storageBucket: "angular-nature.appspot.com",
      messagingSenderId: "950246924083",
      appId: "1:950246924083:web:577c810a697e40b196a846",
      measurementId: "G-WGHS3W7GC2"
    };
    firebase.initializeApp(firebaseConfig);
  }

}
