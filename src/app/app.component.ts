import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/constant/model.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = "Welocme";
  users: user[] = [
    { id: 1, name: "Denish", age: 30 },
    { id: 2, name: "Nilesh", age: 28 },
    { id: 3, name: "Chirag", age: 27 }
  ]

  agesList = [
    { id: 1, name: '0 to 18' },
    { id: 2, name: '19 to 50' },
    { id: 3, name: '51 to 100' },
  ]

  average = 34;
  total: any;

  simpleForm: FormGroup;


  constructor(private fb: FormBuilder) { // Class Default Method
    this.initForm();
  }

  ngOnInit() { // Lifecycle
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  initForm() {
    this.simpleForm = this.fb.group({
      ages: [1],
      name: ['', Validators.required],
      testing: ['cdcdc'],
      check: [false],
      age: [0],
      id: [0]
    });
    this.simpleForm.controls['id'].disable();
  }

  onAgeChange() {
    const age = Number(this.simpleForm.get('age').value);
    const ages = this.simpleForm.get('ages').value;
    console.log('age:', age)
    console.log('ages:', ages)
    if (ages == 1 && (age > 0 && age <= 18)) {
      console.log('Call1');
      this.simpleForm.get('age').setErrors(null);
    } else if (ages == 2 && (age > 19 && age <= 50)) {
      console.log('Call2');
      this.simpleForm.get('age').setErrors(null);
    } else if (ages == 3 && (age > 51 && age <= 100)) {
      console.log('Call3');
      this.simpleForm.get('age').setErrors(null);
    } else {
      console.log('Call4');
      this.simpleForm.get('age').setErrors({ selectionWrong: 'Value is not proper....' });
    }
  }

  onEditClick(item, index) {
    console.log('item', item);
    const keys = ['id', 'name', 'age'];
    this.valueSetForForm(keys, item);

    // this.simpleForm.controls['id'].setValue(item.id);
    // this.simpleForm.patchValue({
    //   name: item.name,
    //   age: item.age
    // });
  }

  valueSetForForm(keys, item) {
    const form = (key) => this.simpleForm.controls[key].setValue(item[key]);
    keys.forEach(key => {
      form(key);
    });
  }

  onChangeCheck(event) {
    const isChecked = event.target.checked;
    if (isChecked)
      this.simpleForm.get('testing').disable();
    else
      this.simpleForm.get('testing').enable();
  }

  onAddClick(name) {
    console.log('Yes Click');
    const formValue = this.simpleForm.getRawValue();
    if (formValue.id == 0) {
      this.users.push({
        id: Math.floor((Math.random() * 100) + 1),
        name: formValue.name,
        age: formValue.age
      });
    } else {
      const users = [...this.users];
      const findIndex = this.users.findIndex(x => x.id == formValue.id);
      if (findIndex > -1) {
        users[findIndex].age = formValue.age;
        users[findIndex].name = formValue.name;
      }
    }
    this.formReset();
  }

  formReset() {
    this.simpleForm.reset();
    this.simpleForm.patchValue({ id: 0, name: '', age: 0 });
  }

  onDeleteClick(item, index) {
    console.log('Delete Click', item);
    this.users = this.users.filter(x => x.id != item.id);
    this.users.splice(index, 1);
  }

}