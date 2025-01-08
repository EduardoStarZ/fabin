let doors: AnimatedItem[] = [Scene.getItem("TMVdhTwd") as AnimatedItem, Scene.getItem("HMbk3yMo") as AnimatedItem, Scene.getItem("tuJfiNXu") as AnimatedItem,  Scene.getItem("ys15ogzE") as AnimatedItem ];

let camera: CameraItem = Scene.getItem("We7b4tJZ") as CameraItem;

Input.onKeyDown(() => {
    openDoor();
}, "e");

function finishDoorAnimation(door : AnimatedItem) {
    door.animation.onFinish(() => {
        door.animation.stop();
    })
}

function isCloseEnough(item: AnimatedItem): boolean {
    let currentItemPos: Vector3 = item.center;
    let currentCameraPos: Vector3 = camera.center;

    let difference: Vector3 = currentItemPos.sub(currentCameraPos);

    if(!(difference.x > -1 && difference.x < 1 && difference.y > -1 && difference.y < 1)) {
        return false;
    }

    return true;
}

function openDoor() {
    doors.forEach(door => {
        
    if (door.animation.isPlaying) {
        return;
    }

    if(!isCloseEnough(door)) {
        return;
    }

    if (door.animation.name == "Closed") {
        door.animation.play("Open");

        finishDoorAnimation(door);

        return;
    }

    door.animation.play("Closed");

    finishDoorAnimation(door);
    });
}     
