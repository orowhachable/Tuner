#pragma strict
var myY: float;
var inKey: String[] = ["Space", "H", "J", "K", "L", "B", "N"];

var pKey: GameObject[,];
var pKeyName: String[,];
var pKeyCode: String[] = ["C", "D", "E", "F", "G", "A", "B"];

/*enum inKey2{
   Space, H, J, K, L, B, N 
}

function Start () {
	myY = transform.position.y;
}*/

function Update(){
    for(var Octave=0; Octave<7; Octave++){
       for(var sc=0; sc<7; sc++){
          pKeyName[Octave,sc] = pKeyCode[sc]+(Octave+1);
          pKey[Octave,sc] = GameObject.Find(pKeyName[Octave,sc]);

          /*
          if(Input.GetKey() == inKey[sc]){
             GetComponent(AudioSource).Play();
             iTween.MoveTo(gameObject, iTween.Hash("y",myY-0.01 ,"time", 0.1, "oncomplete", "keyBack"));
          }
          if(Input.GetKeyUp() == inKey[sc]){
             iTween.MoveTo(gameObject, iTween.Hash("y", myY, "time", 0.4));
          }
          */

          if(Input.anyKey){
             for(var i=0; i<7; i++){
                if(Input.GetKeyDown(inKey[i])){
                  pKey[Octave,sc].GetComponent(AudioSource).Play();
                  iTween.MoveTo(gameObject, iTween.Hash("y",myY-0.01 ,"time", 0.1, "oncomplete", "keyBack"));
                  //break;
                }
                if(Input.GetKeyUp(inKey[i])){
                  iTween.MoveTo(gameObject, iTween.Hash("y", myY, "time", 0.4));
                 // break;
                }
             }
          }
       }
    }
}