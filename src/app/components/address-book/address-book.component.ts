import { Component } from '@angular/core';

@Component({
  selector: 'addressBook',
  templateUrl: './template.html',
  styleUrls: ['./styles.sass']
})
export class AddressBookComponent {
  public AdressBook = [
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '+1 (800) 555-12-12',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '+1 (800) 555-12-12',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '+1 (800) 555-12-12',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '+1 (800) 555-12-12',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '+1 (800) 555-12-12',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '+1 (800) 555-12-12',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '+1 (800) 555-12-12',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '1000001',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '1000001',
      innerNumber: '#102',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '1000001',
      innerNumber: '#103',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '1000001',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
    {firstName: 'Groot',
      lastName: 'Groot',
      externalNumber: '1000001',
      innerNumber: '#101',
      email: 'g.groot@marvel.com',
      company: 'Marvel',
      country: 'Untied States'},
  ];
  public selectedItem = {firstName: '',
    lastName: '',
    externalNumber: '',
    innerNumber: '',
    email: '',
    company: '',
    country: ''};
  public slider = false;
  // log = (data) => {
  //   console.log(data)
  // }
}
