import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { BehaviorSubject, interval } from 'rxjs';
import { Observable } from 'rxjs';

interface ICurrencyPair {
  period: string;
  day: string;
  currency1_currency2_dates: {
    start_date: string;
    end_date: string;
  };
  day_value: number;
  currency1_USD_swap_points$: Observable<number>;
  currency2_USD_swap_points$: Observable<number>;
  currency1_currency2_swap_points$: Observable<number>;
  currency1_currency2_outrights$: Observable<number>;
}

@Component({
  selector: 'app-fxforward',
  templateUrl: './app-fxforward.component.html',
  styleUrl: './app-fxforward.component.less',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    FormsModule ],
})
export class AppFxforwardComponent implements OnInit {
  @ViewChild('currencyPairElement') currencyPairElement!: ElementRef;

  public currencyPairData: ICurrencyPair[] = [
    {
      "period": "ON",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 1,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "TN",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 2,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "SN",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "1/3/2024",
        "end_date": "2/3/2024"
      },
      "day_value": 7,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "SW",
      "day": "W",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 14,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "1W",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 7,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "2W",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 14,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "3W",
      "day": "W",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 21,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "1M",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 30,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "2M",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 60,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "3M",
      "day": "W",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 90,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "6M",
      "day": "W",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 180,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "9M",
      "day": "W",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 270,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "1Y",
      "day": "",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 365,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    },
    {
      "period": "2Y",
      "day": "W",
      "currency1_currency2_dates": {
        "start_date": "",
        "end_date": ""
      },
      "day_value": 730,
      "currency1_USD_swap_points$": this.generateRandomDataStream(),
      "currency2_USD_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_swap_points$": this.generateRandomDataStream(),
      "currency1_currency2_outrights$": this.generateRandomDataStream()
    }
  ];

  public currencyPair: string = 'EURGBP';
  public currency1: string = 'EUR';
  public currency2: string = 'GBP';
  public ccy1FlagCode: string = 'eu';
  public ccy2FlagCode: string = 'gb';
  public tradeDate: Date = new Date();
  public valueDate!: string;
  public immPeriods: string = 'No';
  public swapPoints: string = 'Linear';
  public isNormalResulation: boolean = true;
  public oddPeriods: string = 'Yes';
  public longPeriods: string = 'No';
  public isCalFxForwardsActive: boolean = true;
  public isCalRatesActive: boolean = false;
  public isFromFxForwardsActive: boolean = true;
  public isFromRatesActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.generateCurrencyPairData();
    this.calculateValueDate();

    this.isNormalResulation = this.checkScreenWidth();
    window.addEventListener('resize', () => {
      this.isNormalResulation = this.checkScreenWidth();
    });
  }

  private generateCurrencyPairData(): void {
    const valueDate = new Date(this.tradeDate);
    valueDate.setDate(valueDate.getDate() + 2);
    const formattedValueDate = this.formatDate(valueDate);

    // Clear existing data
    const existingData = [...this.currencyPairData];
    this.currencyPairData = [];

    // Define periods and corresponding day values
    const periods = ["ON", "TN", "SN", "SW", "1W", "2W", "3W", "1M", "2M", "3M", "6M", "9M", "1Y", "2Y"];
    const dayValues = [1, 2, 7, 14, 7, 14, 21, 30, 60, 90, 180, 270, 365, 730];

    // Generate currency pair data for each period
    periods.forEach((period, index) => {
      const startDate = formattedValueDate; // Start date is the valueDate
      const endDate = this.calculateEndDate(valueDate, dayValues[index]); // Calculate end date based on day value
      const startDateString = new Date(startDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
      const endDateString = new Date(endDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
      const calculatedDayValue = this.calculateDayValue(valueDate, endDate); // Calculate day value based on start and end dates

      // Find existing data for the current period
      const existingItem = existingData.find(item => item.period === period);

      // Generate random swap points and outrights
      const randomCurrency1_USD_swap_points$ = this.generateRandomDataStream();
      const randomCurrency2_USD_swap_points$ = this.generateRandomDataStream();
      const randomCurrency1_currency2_swap_points$ = this.generateRandomDataStream();
      const randomCurrency1_currency2_outrights$ = this.generateRandomDataStream();

      // Push the generated data into currencyPairData array
      this.currencyPairData.push({
        period: period,
        day: (period === "SW" || period === "3W" || period === "6M" || period === "9M" || period === "2Y") ? "W" : "", // Set day as "W" for weekly periods
        currency1_currency2_dates: {
          start_date: startDateString,
          end_date: endDateString
        },
        day_value: calculatedDayValue,
        currency1_USD_swap_points$: existingItem ? existingItem.currency1_USD_swap_points$ : randomCurrency1_USD_swap_points$,
        currency2_USD_swap_points$: existingItem ? existingItem.currency2_USD_swap_points$ : randomCurrency2_USD_swap_points$,
        currency1_currency2_swap_points$: existingItem ? existingItem.currency1_currency2_swap_points$ : randomCurrency1_currency2_swap_points$,
        currency1_currency2_outrights$: existingItem ? existingItem.currency1_currency2_outrights$ : randomCurrency1_currency2_outrights$
      });
    });
  }

  private generateRandomDataStream(): Observable<number> {
    const min = 0;
    const max = 10;
    const decimalPlaces = 4; // Number of decimal places
    const initialRandomValue = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
    const randomStream = new BehaviorSubject<number>(initialRandomValue);

    // Emit a random value every second
    interval(1000).subscribe(() => {
      const newValue = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
      randomStream.next(newValue);
    });

    return randomStream.asObservable();
  }

  private calculateValueDate(): void {
    const actualValueDate = new Date(this.tradeDate);
    actualValueDate.setDate(actualValueDate.getDate() + 2);
    this.valueDate = this.formatDate(actualValueDate);
  }

  private calculateEndDate(startDate: Date, dayValue: number): string {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + dayValue);
    return this.formatDate(endDate);
  }

  private calculateDayValue(startDate: Date, endDate: string): number {
    const end = new Date(endDate);
    const start = new Date(startDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  public activateButton(buttonType: string) {
    if (buttonType === 'calFxForwards') {
      this.isCalFxForwardsActive = true;
      this.isCalRatesActive = false;
    } else if (buttonType === 'calRates') {
      this.isCalFxForwardsActive = false;
      this.isCalRatesActive = true;
    } else if (buttonType === 'fromFxForwards') {
      this.isFromFxForwardsActive = true;
      this.isFromRatesActive = false;
    } else if (buttonType === 'fromRates') {
      this.isFromFxForwardsActive = false;
      this.isFromRatesActive = true;
    }
  }

  public handleCurrencyChanged(): void {
    const currencyPair: string = this.currencyPairElement.nativeElement.value;

    this.currency1 = currencyPair.toUpperCase().slice(0, 3);
    this.currency1 = this.currency1 ? this.currency1 : 'NA';
    this.currency2 = currencyPair.toUpperCase().slice(3, 6);;
    this.currency2 = this.currency2 ? this.currency2 : 'NA';
    this.currencyPair = this.currency1 + this.currency2;
    this.ccy1FlagCode = this.currency1.toLowerCase().slice(0, 2);
    this.ccy2FlagCode = this.currency2.toLowerCase().slice(0, 2);
  }

  public onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.tradeDate = event.value!;
    this.calculateValueDate();
    this.generateCurrencyPairData();
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

    private checkScreenWidth(): boolean {
    return window.innerWidth >= 1050;
  }
}