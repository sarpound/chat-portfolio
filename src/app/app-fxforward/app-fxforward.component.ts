import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

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

  public currencyPair: string = 'EURGBP';
  public currency1: string = 'EUR';
  public currency2: string = 'GBP';
  public tradeDate: Date = new Date();
  public valueDate!: string;
  public immPeriods: string = 'No';
  public swapPoints: string = 'Linear';
  public oddPeriods: string = 'Yes';
  public longPeriods: string = 'No';
  public isCalFxForwardsActive: boolean = true;
  public isCalRatesActive: boolean = false;
  public isFromFxForwardsActive: boolean = true;
  public isFromRatesActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.valueDate = this.formatDate(this.tradeDate);
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
    this.currency2 = currencyPair.toUpperCase().slice(3, 6);
    this.currency2 = this.currency2 ? this.currency2 : 'NA';
    this.currencyPair = this.currency1 + this.currency2;
  }

  public onDateChange(event: any) {
    this.tradeDate = event.value;
    const valueDate = new Date(this.tradeDate);
    valueDate.setDate(valueDate.getDate() + 2);

    this.valueDate = this.formatDate(valueDate);
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }
}
