#pragma strict
var myY: float;

function Start () {
	myY = transform.position.y;
}

function Update () {
	
}

function OnMouseDown(){
    GetComponent(AudioSource).Play();
    iTween.MoveTo(gameObject, iTween.Hash("y",myY-0.01 ,"time", 0.1, "oncomplete", "keyBack"));
}

function keyBack(){
    iTween.MoveTo(gameObject, iTween.Hash("y", myY, "time", 0.4));
}