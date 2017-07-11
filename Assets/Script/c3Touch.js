#pragma strict
var myY: float;
//var myY2: float;

var inWkey: String[] = ["a", "s", "d", "f", "g", "h", "j"];
var inBkey: String[] = ["w", "e", "t", "y", "u"];

var pWkey: GameObject[];
var pWkeyName: String[] = ["C3", "D3", "E3", "F3", "G3", "A3", "B3"];

var pBkey: GameObject[];
var pBkeyName: String[] = ["C#3", "D#3", "F#3", "G#3", "A#3"];

var ocIn: int;

function Start(){
      myY = transform.position.y;
      ocIn = 3;
}

function Update(){
      for(var i=0; i<7; i++){
         if(Input.GetKeyDown(inWkey[i])){
           Debug.Log(pWkeyName[i]+" is inputed");
           pWkey[i] = GameObject.Find(pWkeyName[i]);
           pWkey[i].GetComponent(AudioSource).Play();
           iTween.MoveTo(pWkey[i], iTween.Hash("y",myY-0.01 ,"time", 0.1));
         }
         if(Input.GetKeyUp(inWkey[i])){
           pWkey[i] = GameObject.Find(pWkeyName[i]);
           pWkey[i].GetComponent(AudioSource).Stop();
           iTween.MoveTo(pWkey[i], iTween.Hash("y", myY, "time", 0.4));
           Debug.Log(pWkeyName[i]+" is released");
         }
      }
      for(var j=0; j<5; j++){
         if(Input.GetKeyDown(inBkey[j])){
           Debug.Log(pBkeyName[j]+" is inputed");
           pBkey[j] = GameObject.Find(pBkeyName[j]);
           pBkey[j].GetComponent(AudioSource).Play();
           iTween.MoveTo(pBkey[j], iTween.Hash("y",myY+0.001 ,"time", 0.1));
         }
         if(Input.GetKeyUp(inBkey[j])){
           pBkey[j] = GameObject.Find(pBkeyName[j]);
           pBkey[j].GetComponent(AudioSource).Stop();
           iTween.MoveTo(pBkey[j], iTween.Hash("y", myY+0.01, "time", 0.4));
           Debug.Log(pBkeyName[j]+" is released");
         }
      }

      changeOc();
}

function changeOc(){
     pWkeyName = ["C"+ocIn, "D"+ocIn, "E"+ocIn, "F"+ocIn, "G"+ocIn, "A"+ocIn, "B"+ocIn];
     pBkeyName = ["C#"+ocIn, "D#"+ocIn, "F#"+ocIn, "G#"+ocIn, "A#"+ocIn];
   
   if(Input.GetKeyDown("z")){
     ocIn = 1;
   }
   if(Input.GetKeyDown("x")){
     ocIn = 2;
   }
   if(Input.GetKeyDown("c")){
     ocIn = 3;
   }
   if(Input.GetKeyDown("v")){
     ocIn = 4;
   }
   if(Input.GetKeyDown("b")){
     ocIn = 5;
   }
   if(Input.GetKeyDown("n")){
     ocIn = 6;
   }
   if(Input.GetKeyDown("m")){
     ocIn = 7;
   }
}