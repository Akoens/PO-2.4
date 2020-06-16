import { Component } from '@angular/core';
import { MemoryService } from '../memory/memory.service';

@Component({
  selector: 'home-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent{

  memory:MemoryService;
  name:string= "";

  constructor(memory:MemoryService) {
    this.memory = memory;
   }
}
