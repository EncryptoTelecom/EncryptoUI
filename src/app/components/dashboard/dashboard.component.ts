import { Component } from '@angular/core';
import { Color } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'dashboard',
  templateUrl: './template.html',
  styleUrls: ['./styles.sass']
})
export class DashboardComponent {
  public calls = [{
    date: '04-07-2017',
    calls: [{
      name: 'Alex Freeman',
      number: '+7 (800) 200-50-50',
      duration: '64'
    }, {
      name: 'Alex Freeman',
      number: '+7 (800) 200-50-50',
      duration: '13'
    }, {
      name: 'Alex Freeman',
      number: '+7 (800) 200-50-50',
      duration: '44'
    }, {
      name: 'Alex Freeman',
      number: '+7 (800) 200-50-50',
      duration: '1192'
    }
    ]}, {
    date: '03-07-2017',
    calls: [{
      name: 'Alex Freeman',
      number: '+7 (800) 200-50-50',
      duration: '2'
    }
    ]}, {
    date: '02-07-2017',
    calls: [{
      name: 'Alex Freeman',
      number: '+7 (800) 200-50-50',
      duration: '313'
    }, {
      name: 'Alex Freeman',
      number: '+7 (800) 200-50-50',
      duration: '100'
    },
  ]}];
  public datePipe = new DatePipe('en-US');
  public currentDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
  public available = 1200;
  public used = 195;
  public trash = 105;
  public doughnutChartLabels: string[] = ['Used space', 'Trash', 'Free space'];
  public doughnutChartColors: Array<Color> = [{
    backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, .7)', 'rgba(255, 255, 255, .2)'],
    hoverBackgroundColor: ['rgba(255, 255, 255, .5)', 'rgba(255, 255, 255, .35)', 'rgba(255, 255, 255, .1)'],
    borderWidth: 0
  }];
  public doughnutChartCutout = {cutoutPercentage: 80, tooltips: { enabled: false }};
  public doughnutChartData: number[] = [this.used, this.trash, this.available];
  public doughnutChartType = 'doughnut';
  public toMinutes = (time) => {
    const t = parseInt(time, 10);
    return parseInt((t / 60).toString().match(/^-?\d+(?:\d{0})?/)[0], 10)
  };
  dateValue(date) {
    if ((parseInt(this.currentDate, 10) - parseInt(date, 10)) === 0) {
      return 'Today'
    } else if ((parseInt(this.currentDate, 10) - parseInt(date, 10)) === 1) {
      return 'Yesterday'
    } else {
      return date
    }
  }
}
