describe('Interface', () => {
    interface HassName {
        name :string
    }

    interface CanSayHello {
        sayhello(name :string) :void;
    }

    class Person implements HassName, CanSayHello {
        name: string;
        constructor(name :string){
            this.name = name
        }
        sayhello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it('should support inheritens', () => {
        const person = new Person("Ari")
        person.sayhello("Budi")
    });
})
