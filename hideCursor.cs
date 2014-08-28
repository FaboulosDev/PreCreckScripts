using UnityEngine;
using System.Collections;

public class HideCursor : MonoBehaviour {
	
	void Start () {
		Screen.showCursor = false; //I hide the cursor at the start just to make sure
	}

	void Update () {
		Screen.showCursor = false;
	}
}
