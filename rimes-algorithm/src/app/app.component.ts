import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display = '';
  firstValue!: bigint;
  action: string | null = null;

  numClick(val:any) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action:any) {
    this.firstValue = BigInt(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    const a:any = BigInt(this.firstValue);
    const b:any = BigInt(this.display);

    let result;
    if (this.action === 'm') {
      result = a * b;
    }
    else if (this.action === 'd') {
      result = a / b;
    }
    else if (this.action === 'a') {
      result = a + b;
    }
    else if (this.action === 's') {
      result = a - b;
    }

    this.firstValue = result;
    this.display = result.toString();
  }

  resetCalculator() {
    this.display = '';
  }

  remove(){    
    this.display = this.display.slice(0,-1);
  }
}
