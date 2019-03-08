import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  selectTable = '';
  tables = [{
    id: 1,
    location: 'Erzurum',
    title: 'Erzurum Dadaşkent Eğitim Salonu',
    description: 'Dadaşkent Mjet' +
      'Milli Egemenlik Cad. Saltuklu Mah.' +
      '9. Sokak No: 16/1 Erzurum',
  },
    {
      id: 2,
      location: 'Erzurum',
      title: 'Erzurum Dadaşkent Eğitim Salonu',
      description: 'two',
    },
    {
      id: 3,
      location: 'Erzurum',
      title: 'Erzurum Dadaşkent Eğitim Salonu',
      description: 'three',
    }];

  ChangeTable(ev) {
    this.selectTable = ev;
    console.log('ev' + ev);
  }

}
