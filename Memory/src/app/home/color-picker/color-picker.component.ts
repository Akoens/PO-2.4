import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../memory/memory.service';
@Component({
  selector: 'home-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit{

  memory:MemoryService;

  constructor(memory:MemoryService) {
    this.memory = memory
  }
  
  ngOnInit(): void{
  }
  
}
