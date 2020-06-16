import { Injectable } from '@angular/core';
import { Card } from '../models/card.class';
import { Player } from '../models/players.class'

@Injectable()
export class MemoryService {

  amountOfScores:number = 6;
  topScores:Player[] = [
    new Player("Barack Obama", 200, 6),
    new Player("Bernie Sanders", 300, 6), 
    new Player("Hillary Clinton", 400, 6),
    new Player("Jeb Bush", 500, 6),
    new Player("Donald Trump", 600, 6)
  ];

  avaragePlayTime:number = 0;
  playedTime:number[] = [];

  defaultTemplate = '<i aria-hidden="true">*</i>';

  cardColor:string = '#4a4a4a';//"#332233";
  cardBackColor:string = '#919191';//"#008C00";
  cardFoundColor:string = '#ffffff';//"#800080";
  timeColor:string = '#000000';

  boardSize:number = 6;

  cards:Card[] = [];
  memoryCards:Card[];
  flippedCards:number;

  moves:number;
  isGameOver:boolean = false;
  submitted:boolean = false;

  startTime:number;
  
  timerUpdateTime:number = 10;
  currentTime:number = 0;

  showTime:number = 1000;
  currentShowTime:number;
  showTimeWidth:string;

  constructor() {
    this.newGame();
    setInterval(() => {
      if(this.isGameOver){
        return;
      }
      this.updateCurrentTime()
      if(this.currentShowTime != null && this.currentShowTime > 0){
        this.currentShowTime -= this.timerUpdateTime;
        this.showTimeWidth = ""+Math.round(this.currentShowTime / this.showTime * 100)+"%"
      }else{
        this.showTimeWidth = "100%"
      }
    }, this.timerUpdateTime)
   }

  newGame(){
    this.updateScore();
    this.submitted = false;
    this.isGameOver = false;
    this.memoryCards = [];
    this.flippedCards = 0;
    this.moves = 0;
    this.startTime = null;
    this.currentTime = 0;

    //generate new cards
    this.cards = [];
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    for (let i = 0; i < this.boardSize*this.boardSize/2; i++) {
      for(let j = 0; j < 2; j++){
        this.cards = [...this.cards, new Card(letters[i],'<i aria-hidden="true">'+letters[i]+'</i>')]
      }
    }
    this.cards = this.shuffle(this.cards);
  }

  flipCard(card: Card) {
    if(this.startTime == null){
      this.startTime = new Date().getTime();
    }

    //Check if the card is not flipped and if there is another card flipped.
    if (!card.flipped && this.memoryCards.length < 2) {
      //Check if no cards are flipped.
      if (this.memoryCards.length === 0) {

        this.memoryCards.push(card);
        this.memoryCards[0].flipped = true;
      }
      //Check if one card is flipped
      else if (this.memoryCards.length === 1) {

        this.moves++;

        card.flipped = true;
        this.memoryCards.push(card);
        this.memoryCards[1].flipped = true;
        
        //Check if cards are the same.
        if (this.memoryCards[0].id === this.memoryCards[1].id) {

          this.memoryCards[0].found = true;
          this.memoryCards[1].found = true;
          this.flippedCards += 2;
          this.memoryCards = [];
          //Check if all the cards have been flipped.
          if (this.flippedCards === this.cards.length) {
            this.isGameOver = true;
          }
        }
        //Reset the flipped cards.
        else {
          this.currentShowTime = this.showTime;
          setTimeout(()=> {
            this.memoryCards[0].flipped = false;
            this.memoryCards[1].flipped = false;
            this.memoryCards = [];
          }, this.showTime);
          
        }
      }
    }

  }
  
  shuffle(array:any[]):any[] {
    let currentIndex = array.length, temporaryValue:Card, randomIndex:number;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  } 

  updateCurrentTime() {
    if(this.startTime != null){
      this.currentTime =  Math.floor((new Date().getTime() - this.startTime) / 1000);
    }
  }

  getSecondsFromStart():number {
    return Math.floor((new Date().getTime() - this.startTime) / 1000);
  }

  addScore(name:string){
    console.log(":"+name, this.isGameOver, this.avaragePlayTime);
    if(this.isGameOver && name.length > 0 && !this.submitted){
      this.submitted = true;
      this.playedTime.push(this.currentTime);
      this.avaragePlayTime = this.playedTime.reduce((a,b)=> {return a+b})/this.playedTime.length;
      this.topScores.push(new Player(name, this.currentTime, this.boardSize));
      this.updateScore();
    }
  }

  updateScore(){
    this.topScores = this.topScores.sort( (n1,n2) => {
      if((n1.getTime() < n2.getTime()) && (n1.getSize() > n2.getSize() )){
        return -1;
      }else if((n2.getTime() < n1.getTime()) && (n2.getSize() > n1.getSize() )){
        return 1;
      }
      return 0;
    });
    this.topScores = this.topScores.slice(0,this.amountOfScores);
  }
}


