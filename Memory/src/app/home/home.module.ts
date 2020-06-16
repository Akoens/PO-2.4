import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { HomeComponent } from './home.component';
import { StateComponent } from './state/state.component';
import { ScoreComponent } from './score/score.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { MemoryService } from './memory/memory.service';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';

const components = [ HomeComponent, 
  StateComponent,
  ScoreComponent,
  BoardComponent,
  CardComponent,
  ColorPickerComponent,
  GameSettingsComponent]

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [MemoryService],
})
export class HomeModule { }
