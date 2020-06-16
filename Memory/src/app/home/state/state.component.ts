import { Component} from '@angular/core';
import { MemoryService } from '../memory/memory.service';

@Component({
  selector: 'home-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {

  memory:MemoryService;

  constructor(memory:MemoryService) { 
    this.memory = memory
  }
}
