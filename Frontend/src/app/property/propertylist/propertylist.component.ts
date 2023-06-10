import { Component } from '@angular/core';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent {

  property: Array<any> = [
    { id: '1', name: 'raj villa', type: 'House', price: '20000' },
    { id: '2', name: 'royal krishna', type: 'Banglow', price: '50000' },
    { id: '3', name: 'treasure fantacy', type: 'shop', price: '30000' },
    { id: '4', name: 'Shubh green', type: 'plot', price: '40000' }
  ]

}
