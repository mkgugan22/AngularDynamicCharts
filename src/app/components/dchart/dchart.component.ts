// VERSION 1
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
// import { ChartOptions, ChartType } from 'chart.js';
// import { FormsModule } from '@angular/forms';

// import { CommonModule } from '@angular/common';

// import { NgxEchartsModule } from 'ngx-echarts';
// import { LineChart } from 'echarts/charts';
// import { PieChart } from 'echarts/charts';
// import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// // import echarts core
// import * as echarts from 'echarts/core';
// // import necessary echarts components
// import { BarChart } from 'echarts/charts';
// import { GridComponent } from 'echarts/components';
// import { CanvasRenderer } from 'echarts/renderers';
// echarts.use([BarChart, GridComponent, CanvasRenderer]);

// echarts.use([LineChart, PieChart])
// @Component({
//   selector: 'app-dchart',
//   standalone: true,
//   imports: [FormsModule, CommonModule, HttpClientModule, NgxEchartsModule], // Correct module here
//   /*   templateUrls:['./dchart.component.html'] */
//   templateUrl: './dchart.component.html',
//   styleUrl:'./dchart.component.css',
//   providers: [
//     provideEchartsCore({ echarts }),
//   ]
// })
// export class DchartComponent implements OnInit {



//   private baseUrl = "https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&daily=temperature_2m_max,temperature_2m_min&timezone=auto";

//   constructor(private http: HttpClient) { }
//   lineChart!: echarts.EChartsCoreOption
//   result: any;
//   time: any;
//   maxTemp: any;


//   ngOnInit(): void {
//     this.http.get(this.baseUrl).subscribe((res: any) => {
//       this.result = res;
//       this.time = res.daily.time;
//       this.maxTemp = res.daily.temperature_2m_max;
//       console.log("time", this.time);
//       console.log("maxTemp", this.maxTemp);

//       console.log(this.result);

//       this.setChartType("line");
//     })
//   }
//   changeChart(event: any) {
//     const type = event.target.value;
//     this.setChartType(type);
//   }
//   setChartType(type: string) {
//     if (type === 'pie') {
//       const pieData = this.maxTemp.map((value: number, index: number) => ({
//         name: this.time[index],
//         value: value
//       }));
    
//       this.lineChart = { // Keep using lineChart for consistency, but it will now hold pie chart options
//         series: [
//           {
//             data: pieData,  // Use the transformed data
//             type: 'pie',
//             radius: '50%',
//             label: {
//               formatter: '{b}: {c} ({d}%)' // Correct label formatter
//             },
//             color: [ //adding color
//                   '#0088FE',
//                   '#00C49F',
//                   '#FFBB28',
//                   '#FF8042',
//                   '#8884d8',
//                   '#a8328e',
//                   '#32a852',
//                   '#e67e22'
//                 ],
//           }
//         ],
//         tooltip: {
//           trigger: 'item',
//           formatter: '{a} <br/>{b}: {c} ({d}%)' // Correct tooltip formatter
//         },
//         legend: {
//           orient: 'vertical',
//           left: 'left',
//           data: this.time // Use time for legend labels
//         }
//       };
//     }
    
//     else {
//       this.lineChart = {
//         xAxis: {
//           type: 'category',
//           data: this.time
//         },
//         yAxis: {
//           type: 'value'
//         },
//         series: [
//           {
//             data: this.maxTemp,
//             type: type,
//             smooth: type === 'line'
//           }
//         ]
//       }
//     }
//   }
// }


// Version 2

// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
// import * as echarts from 'echarts/core';
// import { LineChart, BarChart, PieChart } from 'echarts/charts';
// import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
// import { CanvasRenderer } from 'echarts/renderers';

// echarts.use([LineChart, BarChart, PieChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

// @Component({
//   selector: 'app-dchart',
//   standalone: true,
//   imports: [FormsModule, CommonModule, HttpClientModule, NgxEchartsModule], // Correct module here
//   templateUrl: './dchart.component.html',
//   styleUrls: ['./dchart.component.css'],
//   providers: [
//     provideEchartsCore({ echarts }),
//   ]
// })
// export class DchartComponent implements OnInit {
//   private baseUrl = "https://restcountries.com/v3.1/all";
//   chartOption: echarts.EChartsCoreOption = {};
//   countryNames: string[] = [];
//   populations: number[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get<any[]>(this.baseUrl).subscribe((res: any[]) => {
//       const top10 = res
//         .filter(c => c.population && c.name?.common)
//         .sort((a, b) => b.population - a.population)
//         .slice(0, 7);

//       this.countryNames = top10.map(c => c.name.common);
//       this.populations = top10.map(c => c.population);

//       this.setChartType('pie');
//     });
//   }

//   changeChart(event: any) {
//     const type = event.target.value;
//     this.setChartType(type);
//   }

//   setChartType(type: string) {
//     if (type === 'pie') {
//       const pieData = this.populations.map((value, index) => ({
//         name: this.countryNames[index],
//         value: value
//       }));
//       this.chartOption = {
//         series: [
//           {
//             type: 'pie',
//             radius: '50%',
//             data: pieData,
//             label: {
//               formatter: '{b}: {c} ({d}%)'
//             }
//           }
//         ],
//         tooltip: {
//           trigger: 'item',
//           formatter: '{a} <br/>{b}: {c} ({d}%)'
//         },
//         legend: {
//           orient: 'vertical',
//           left: 'right',
//           data: this.countryNames
//         }
//       };
//     } else {
//       this.chartOption = {
//         xAxis: {
//           type: 'category',
//           data: this.countryNames
//         },
//         yAxis: {
//           type: 'value',
//           axisLabel: {
//             formatter: function(value: { toxLocaleString: () => any; }) {
//               return value.toLocaleString(); // Format numbers with commas
//             }
//           }
//         },
//         series: [
//           {
//             data: this.populations,
//             type: type as 'line' | 'bar',
//             smooth: type === 'line',
//             name: 'Population'
//           }
//         ],
//         tooltip: {
//           trigger: 'axis',
//           formatter: '{b}: {c}'  // Custom tooltip formatter to show the population directly
//         },
//         legend: {
//           data: ['Population']
//         }
//       };
//     }
//   }
// }


// FINAL VERSION
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import {LineChart,BarChart,PieChart,RadarChart,ScatterChart} from 'echarts/charts';
import {  GridComponent,TooltipComponent, LegendComponent, RadarComponent} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  LineChart,BarChart,PieChart,RadarChart,ScatterChart,GridComponent,TooltipComponent,
LegendComponent,RadarComponent,CanvasRenderer]);

@Component({
  selector: 'app-dchart',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, NgxEchartsModule],
  templateUrl: './dchart.component.html',
  styleUrls: ['./dchart.component.css'],
  providers: [provideEchartsCore({ echarts })]
})
export class DchartComponent implements OnInit {
  private baseUrl = "https://restcountries.com/v3.1/all";
  chartOption: echarts.EChartsCoreOption = {};
  countryNames: string[] = [];
  populations: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.baseUrl).subscribe((res: any[]) => {
      const top10 = res
        .filter(c => c.population && c.name?.common)
        .sort((a, b) => b.population - a.population)
        .slice(0, 7);

      this.countryNames = top10.map(c => c.name.common);
      this.populations = top10.map(c => c.population);

      this.setChartType('pie');
    });
  }

  changeChart(event: any) {
    const type = event.target.value;
    this.setChartType(type);
  }

  setChartType(type: string) {
    if (type === 'pie' || type === 'doughnut') {
      const pieData = this.populations.map((value, index) => ({
        name: this.countryNames[index],
        value: value
      }));
      this.chartOption = {
        series: [
          {
            type: 'pie',
            radius: type === 'doughnut' ? ['40%', '70%'] : '50%',
            data: pieData,
            label: {
              formatter: '{b}: {c} ({d}%)'
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: this.countryNames
        }
      };
    } else if (type === 'radar') {
      this.chartOption = {
        radar: {
          indicator: this.countryNames.map(name => ({ name })),
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: this.populations,
                name: 'Population'
              }
            ]
          }
        ],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          data: ['Population']
        }
      };
    } else if (type === 'scatter') {
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: this.countryNames
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'scatter',
            data: this.populations.map((p, i) => [this.countryNames[i], p]),
            name: 'Population'
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
        },
        legend: {
          data: ['Population']
        }
      };
    } else {
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: this.countryNames
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: function(value: number) {
              return value.toLocaleString();
            }
          }
        },
        series: [
          {
            data: this.populations,
            type: type as 'line' | 'bar',
            smooth: type === 'line',
            name: 'Population'
          }
        ],
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c}'
        },
        legend: {
          data: ['Population']
        }
      };
    }
  }
}
