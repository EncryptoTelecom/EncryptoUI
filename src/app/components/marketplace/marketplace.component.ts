import { Component } from '@angular/core';

@Component({
  selector: 'marketplace',
  templateUrl: './template.html',
  styleUrls: ['./styles.sass']
})
export class MarketplaceComponent {
  items = [
    {
      name: 'Module COMPANY',
      description: ['Company information', 'Departments', 'Employees'],
      status: true
    },
    {
      name: 'Module IVR',
      description: [
        'Interactive voice response (IVR) is a technology that allows a computer to interract' +
        'with humans through the use of voice and DTMF tones input via keypad.'],
      status: true
    },
    {
      name: 'Module SIP TRAFFIC ENCRYPTION',
      description: [],
      status: true
    },
    {
      name: 'Module Storage 1500',
      description: ['Storage space 1500 mb.'],
      status: true
    },
    {
      name: 'Module Queue',
      description: [],
      status: true
    },
    {
      name: 'Module Ext 50',
      description: ['Amount of Ext numbers 50.'],
      status: true
    },
    {
      name: 'Module Call-center',
      description: [],
      status: false
    },
    {
      name: 'Module Ext 100',
      description: ['Amount of Ext numbers 100.'],
      status: false
    },
    {
      name: 'Module Storage 500',
      description: ['Storage space 500 mb.'],
      status: true
    },
    {
      name: 'Module Storage 1000',
      description: ['Storage space 1000 mb.'],
      status: true
    }
  ]
}
