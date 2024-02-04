function walkDog()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked)
            {
                resolve("You walk the dog"); 
            }
            else
            {
                reject("You didn't walked the dog");
            }
        }, 1500);
    });
}
function cleanKitchen()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if(kitchenCleaned)
            {
                resolve("You cleaned the kitchen"); 
            }
            else
            {
                reject("You didn't cleaned the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut)
            {
                resolve("You take out the trash"); 
            }
            else
            {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all chores")})
         .catch(error => console.error(error));
         
// CallBack Hell
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores");
//         })
//     })
// })