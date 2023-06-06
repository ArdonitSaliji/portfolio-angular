import { Component } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent {

  frontendExp: Array<Object> = [
    { 'React.js': 'Experienced' },
    { 'Vue.js': 'Intermediate' },
    { Redux: 'Intermediate' },
    { JavaScript: 'Experienced' },
    { TypeScript: 'Intermediate' },
    { Git: 'Intermediate' },
    { HTML: 'Experienced' },
    { CSS: 'Experienced' },
    { Sass: 'Experienced' },
    { 'Material-UI': '' },
];

  backendExp = [
    { 'Node and Express js': 'Intermediate' },
    { PHP: 'Intermediate' },
    { MySQL: 'Intermediate' },
    { MongoDB: 'Experienced' },
    { Python: 'Intermediate' },
    { 'C (Programming Language)': 'Beginner' },
    { 'Microsoft Azure': 'Intermediate' },
    { Laravel: 'Beginner' },
    { FastApi: 'Beginner' },
    { Flask: 'Beginner' },
  ];

}
