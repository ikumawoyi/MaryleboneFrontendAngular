import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MaryleBonePrimeNumberService } from './Services/maryle-bone-prime-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maryleBone';
  output: number[] = [];
  maryleBonePrimeNumberForm: FormGroup = new FormGroup({});
  constructor(private maryleBonePrimeNumberService: MaryleBonePrimeNumberService,
    private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.maryleBonePrimeNumberForm = this.formBuilder.group({
        'primeNumber': new FormControl('', [Validators.min(1), Validators.max(100)]),
      });
    }

    primeNumber(){
      console.log(this.maryleBonePrimeNumberForm.value.primeNumber);
      this.maryleBonePrimeNumberService.getPrimeNumbers(this.maryleBonePrimeNumberForm.value.primeNumber).subscribe(data => {
        console.log(data);
        this.output = data;
      }, err => {
        console.log("Error occured");
      });
    }
}
