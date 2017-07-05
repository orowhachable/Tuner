#pragma strict
private var MyTr: Transform;
private var Kcodes: String[] = ["C", "D", "E", "F", "G", "A", "B"];

function Start () {
	MyTr = transform;
	MakeKeys();
}

function Update () {
	
}

private function MakeKeys(){
    var KeySpace: float = 0.021;
    for(var Octave=0; Octave<7; Octave++){
      for(var sc=0; sc<7; sc++){
        var Xloc: float = Octave*KeySpace*7+sc*KeySpace;
        var theKey: GameObject = Instantiate(Resources.Load("Cube") as GameObject, 
        MyTr.position+new Vector3(Xloc, 0, 0), 
        MyTr.rotation
        );
        theKey.transform.localScale = new Vector3(0.02, 0.02, 0.1);
        theKey.name = Kcodes[sc]+(Octave+1);
        theKey.GetComponent(Renderer).material = Resources.Load("White") as Material;
        var audio: AudioSource = theKey.AddComponent(AudioSource);
        audio.clip = Resources.Load("Sounds/"+theKey.name) as AudioClip;

        //audio.clip.name = Kcodes[sc]+(Octave+1);
        Debug.Log(audio.clip);

        //theKey.AddComponent(KeyTouch);

        if(Kcodes[sc] != "E" && Kcodes[sc] != "B"){
           Xloc += KeySpace/2;
           var theBKey: GameObject = Instantiate(
              Resources.Load("Cube") as GameObject,
              MyTr.position+new Vector3(Xloc, 0.01, 0.02),
              MyTr.rotation
           );
           theBKey.transform.localScale = new Vector3(0.015, 0.02, 0.06);
           theBKey.name = Kcodes[sc]+"#"+(Octave+1);
           theBKey.GetComponent(Renderer).material = Resources.Load("Black") as Material;
           var audio2: AudioSource = theBKey.AddComponent(AudioSource);
           audio2.clip = Resources.Load("Sounds/" + theBKey.name) as AudioClip;
           //theBKey.AddComponent(KeyTouch);
        }
      }
    }
}