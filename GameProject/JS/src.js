let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let bothDoorPath = " https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg ";
let beachDoorPath = " https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg ";
let spaceDoorPath = " https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg ";
let closedDoorPath = " https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg ";

let numClosedDoors = 3 ;
let openDoor1 ;
let openDoor2 ;
let openDoor3 ;

const isClicked = (door) => {

}

const playDoor = () => {

    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver();
    } else {
        
    }
}

const randomChoreDoorGenerator = () => {

    var chorDoor = Math.floor(Math.random() * numClosedDoors);
    
    
    if (chorDoor === 0) {

        openDoor1 = bothDoorPath;

        openDoor2 = beachDoorPath;

        openDoor3 = spaceDoorPath;

    } else if (chorDoor === 1) { 

        openDoor2 = bothDoorPath;

        openDoor1 = beachDoorPath;

        openDoor3 = spaceDoorPath;  

    } else {

        openDoor3 = bothDoorPath;

        openDoor2 = beachDoorPath;

        openDoor1 = spaceDoorPath;
    }
    
  }

doorImage1.onclick = () => {

  doorImage1.src = openDoor1;
  playDoor();
  
}
doorImage2.onclick = () => {

    doorImage2.src = openDoor2;
    playDoor();
}
doorImage3.onclick = () => {
    
    doorImage3.src = openDoor3;
    playDoor();
}
randomChoreDoorGenerator();

