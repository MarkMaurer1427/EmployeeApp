import { Component } from '@angular/core';
import { Employee } from './Employee';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent 
{
  e1 = new Employee(1, "Frank Miller", 50, "Male");
  e2 = new Employee(2, "Evelyn Page", 41, "Female");
  e3 = new Employee(3, "Steven Hicks", 30, "Male");
  e4 = new Employee(4, "Tina Phillips", 25, "Female");

  employees : Employee[] = [this.e1, this.e2, this.e3, this.e4];
}




