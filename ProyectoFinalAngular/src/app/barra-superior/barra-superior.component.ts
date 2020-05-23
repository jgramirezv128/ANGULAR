import { Component, Injectable, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})

export class BarraSuperiorComponent {
  @Input() item: number;
}
