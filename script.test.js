import {attackSpaceShips} from './script';

// describe("Space Ships", () => {
    test("destroying Mothership, destroys all other ships", () =>{
        if (mothership.healthPoints <=0){
        expect(spaceShip.healthPoints).toEqual(0);
        }
    })
// })