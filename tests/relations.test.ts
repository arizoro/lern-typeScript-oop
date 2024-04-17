describe('Relationship', () => {
    class Person {
        constructor(public name :string){
        }
    }

    class Customers {
        constructor(public name :string){

        }
    }

    it('should support', () => {
        const person :Person = new Customers("Ari")
        console.info(person.name)
    });
})
