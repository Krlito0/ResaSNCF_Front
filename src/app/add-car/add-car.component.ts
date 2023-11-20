import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
addForm!: FormGroup;

constructor(private fb: FormBuilder, private service: CarService, private router: Router) { }

ngOnInit(): void {
    this.addForm = this.fb.group({
      numberPlate:['',[Validators.required,
                Validators.minLength(7),
                Validators.pattern(/^[A-Za-z]{2}[ -][0-9]{3}[ -][A-Za-z]{2}$/)]],
      picture:[''],
      kilometers:[''],
      priceDay:[''] 
    });
}


onSubmit(){
  console.log(this.addForm);
  if (this.addForm.valid) {
    this.service.createCar(this.addForm.value).subscribe((response) =>
      console.log(response));
    this.router.navigateByUrl('/home');
    setTimeout(() => {window.location.reload();}, 1000);
  }
}
}
