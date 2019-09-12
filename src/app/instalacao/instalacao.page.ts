import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { setTimeout } from 'timers';


@Component({
  selector: 'app-instalacao',
  templateUrl: './instalacao.page.html',
  styleUrls: ['./instalacao.page.scss'],
})
export class InstalacaoPage implements OnInit {
  
  public inputValuePassword: any;
  public checkbox: boolean;
  public bool: boolean;
  public networks: any = [];
  public ssidValue: any;
  public load: boolean;
  public conectadoweb: boolean;


  
  ws = new WebSocket('ws://192.168.4.1:81');
  
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.load = false;
    this.conectadoweb = false;
    this.bool = false;
    this.ws.onopen = () => {

      this.conectadoweb = true;
      
      console.log('está conectado');
      setTimeout(() => {
        this.load = true;
        this.inicial();
      }, 300);
    };
  }
  
  populaInput(ssid) {
    this.ssidValue = ssid;
  }

  messages() {

    this.ws.onmessage = (event) => {

      let type = JSON.parse(event.data).type;
      if ( type === 'scanNetworks') {
        this.bool = true;
        this.networks.push(JSON.parse(event.data));
        console.log('entrou');
      }
    };
  }


  inicial() {
    
    this.ws.send('one');
    this.messages();
  }

  connectNetwork() {
    let ssid = this.ssidValue;
    let password = this.inputValuePassword;
    let check = this.checkbox;
    let myjson = JSON.stringify({'networkSSID':ssid,'networkPASS':password,'saveSSIDPASS':check});
    this.ws.send( myjson );
  }


}