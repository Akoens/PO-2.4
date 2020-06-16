import { Component} from '@angular/core';
import { MemoryService } from '../memory/memory.service';

@Component({
  selector: 'home-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent {

  memory:MemoryService;

  constructor(memory:MemoryService) {
    this.memory = memory;
   }

  changeSizeHandeler(event:any){
    this.memory.boardSize = event.target.value;
  }

  changeBackHandeler(event:any){
    this.memory.defaultTemplate = '<i aria-hidden="true">'+event.target.value+'</i>';
  }
}
