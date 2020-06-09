export class Restaurant {
    name: string;
    cuisine: string;
    _id: number;
    description: string;
    location: string;
    days: {};
    rating: number;
    price: number;

    constructor(obj?: any) {
        this.name = obj && obj.name || "";
        this.cuisine = obj && obj.cuisine || "";
        this._id = obj && obj._id || null;
        this.description = obj && obj.description || "";
        this.rating = obj && obj.rating || null;
        this.price = obj && obj.price || null;
        this.days = obj && obj.days || {
            1: {
                closes: "",
                opens: ""
            },
            2: {
                closes: "",
                opens: ""
            },
            3: {
                closes: "",
                opens: ""
            },
            4: {
                closes: "",
                opens: ""
            },
            5: {
                closes: "",
                opens: ""
            },
            6: {
                closes: "",
                opens: ""
            },
            7: {
                closes: "",
                opens: ""
            }
        }
    }
}