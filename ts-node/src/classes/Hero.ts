import { Power } from '../data/powers';
import powers from '../data/powers';


export class Hero {
    constructor(
        public name: string,
        public powerid: number,
        public age: number,
    ) {}


    get power():string {
        return powers.find( power => power.id === this.powerid)?.desc || 'not found';

    }


}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}