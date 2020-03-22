import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  infections=[];
  constructor(private db:DatabaseService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "l'Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",                                      
    "Gafsa",                                      
    "Jendouba",                                      
    "Kairouan",                                      
    "Kasserie",                                      
    "Kébili",                                      
    "Kef",                                      
    "Mahdia",                                      
    "Manouba",                                      
    "Médenine",                                      
    "Monastir",                                      
    "Nabeul",                                      
    "Sfax",                                      
    "Sidi Bouzid",                                       
    "Siliana",                                      
    "Sousse",                                      
    "Tataouine",                                      
    "Tozeur",                                      
    "Tunis",                                      
    "Zaghouan",     
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Infected people'},
  ];
  ngOnInit() {
    this.db.getInvections().subscribe((d:any)=>{
      this.infections=[];

      var infectedPeople=0;
      for (let i = 0; i < this.barChartLabels.length; i++) {
        d.forEach(infect => {
          if (this.barChartLabels[i] === infect.payload.doc.data().userinformations.region ) {
            infectedPeople++;
          }
          
        });

        this.barChartData[0].data.push(infectedPeople);
        infectedPeople=0;

        
      }
      







    })
  }
}
