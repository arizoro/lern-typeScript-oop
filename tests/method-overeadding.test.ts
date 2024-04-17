describe('Method overeadding', () => {
    class Employe {
        name :string ;

        constructor(name :string) {
            this.name = name
        }

        sayHello(name :string) :void{
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employe{
        sayHello(name: string): void {
            super.sayHello(name)
            console.info(`${super.sayHello(name)} And im your Manager`)
        }
    }

    it('should support', () => {
        const employe = new Employe("Ari")
        employe.sayHello("Budi")

        const manager = new Manager("Ari")
        manager.sayHello("Budi")
    });
})
