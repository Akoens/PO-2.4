import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../memory/memory.service';


@Component({
  selector: 'home-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  memory:MemoryService;

  constructor(memory:MemoryService) { 
    this.memory = memory
  }

  ngOnInit(): void {
  }
}
