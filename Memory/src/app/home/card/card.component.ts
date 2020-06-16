import { Component, Input } from '@angular/core';
import { Card } from '../models/card.class';
import { MemoryService } from '../memory/memory.service';

@Component({
  selector: 'memory-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() card:Card;

  memory:MemoryService;

  constructor(memory:MemoryService) { 
    this.memory = memory;
  }
}
