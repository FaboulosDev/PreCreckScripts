//The object that has this script attached to will only follow an object if it's not looking at it
var target : Transform;
 
var pos : Transform;
 
var rayLength : float;
 
var speed : float;
 
var move : boolean = false;
 
var soundTrigger : boolean = false;
 
//Defines your sound effect
public var Sound : AudioClip;
 
private var HasPlayed : boolean = false;
 
 
//I had problems with my model sinking into the floor, adjust this variable if you need it, or you can simply remove it
/*function FixedUpdate()
{
transform.position.y = 30;
transform.rotation.x = 0;
transform.rotation.z = 0;
}*/
 
function Update()
{
    var fwd = transform.TransformDirection (Vector3.forward);
    var hit : RaycastHit;
 
    if (renderer.isVisible)
    {
    move = false;
    soundTrigger = true;
    }
 
    if(!renderer.isVisible)
    {
    move = true;
    HasPlayed = false;
    soundTrigger = false;
    }
    
    if(move)
    {
    transform.LookAt(target);
    transform.Translate(Vector3.forward * speed * Time.deltaTime);
    }
            if (soundTrigger)
            {
                if(!HasPlayed)
                {
                audio.PlayOneShot(Sound);
                HasPlayed = true;
                }
            }
    //If he is 3 units away from something, move right (Works if you are not looking at the object)
    if (Physics.Raycast (transform.position, fwd, rayLength) && move)
    {
    transform.Translate(Vector3.right * 3 * Time.deltaTime);
    }
}
