interface iList{
    id: number;
    name: string;
    age: number;
    email: string;
}

export class ListModel implements iList{
    id: number;
    name: string;
    age: number;
    email: string;

    constructor(list: iList){
        this.id = list.id;
        this.name = list.name;
        this.age = list.age;
        this.email = list.email;
    }
}
