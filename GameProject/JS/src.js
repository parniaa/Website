let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let bothDoorPath = " https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg ";
let beachDoorPath = " https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg ";
let spaceDoorPath = " https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg ";

let numClosedDoors = 3 ;
let openDoor1 ;
let openDoor2 ;
let openDoor3 ;



const randomChoreDoorGenerator = () => {
    var chorDoor = Math.floor(Math.random) * numClosedDoors
    if (chorDoor === 0) {
        openDoor1 = bothDoorPath;
    } else if (chorDoor === 1) { 
        openDoor2 =bothDoorPath;        
    }
    
  }

doorImage1.onclick = () => {

  doorImage1.src = bothDoorPath;
  
}
doorImage2.onclick = () => {

    doorImage2.src = beachDoorPath;

}
doorImage3.onclick = () => {
    
    doorImage3.src = spaceDoorPath;
}