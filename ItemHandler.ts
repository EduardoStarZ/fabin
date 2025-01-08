let items : AnimatedItem[] = [Scene.getItem("plwh05xz") as AnimatedItem,  Scene.getItem("IyHdaU5B") as AnimatedItem, Scene.getItem("CEanKCOm") as AnimatedItem];

let newItem : AnimatedItem[] = [Scene.getItem("MqI5ausj") as AnimatedItem, Scene.getItem("CTKIqC1d") as AnimatedItem, Scene.getItem("RUb1PYbl") as AnimatedItem];

let cam : CameraItem =  Scene.getItem("We7b4tJZ") as CameraItem; 

let itemStatus : number[] = [0, 0, 0];

function isClose(item: AnimatedItem): boolean {
    let currentItemPos: Vector3 = item.center;
    let currentCameraPos: Vector3 = cam.center;

    let difference: Vector3 = currentItemPos.sub(currentCameraPos);

    if(!(difference.x > -2 && difference.x < 2 && difference.y > -2 && difference.y < 2)) {
        return false;
    }

    return true;
}

function grabItem() {

    for(let i : number = 0; i<=items.length-1; i++) {
        if(isClose(items[i]) && itemStatus[i] == 0) {
        items[i].opacity = 0;
        itemStatus[i] = 1;

        if(1 == i) {
            unlocked = true ;    
        }

        }
    }
}

function moveItem(item : AnimatedItem, index : number) {
    newItem[index].opacity = 1;
    itemStatus[index] = 3;
}

function placeItem() {
    let placement : AnimatedItem = Scene.getItem("Vfvio5Hc") as AnimatedItem;
    
    if(isClose(placement)) {
        for(let i: number = 0; i<=items.length-1; i++) {
            if(itemStatus[i] == 1) {
                moveItem(items[i], i);
                return;
            }
        }

        return;
    }

    return;
}


Input.onKeyDown(() => {
    grabItem();
    placeItem();
    unlock_final_door();
}, "f");


