import { Menu } from './menu.model';
export class MenuList {
    count: number;
    results: Menu[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.results = obj && obj.results || null;
        } else {
            this.results = [];
        }
    }
}