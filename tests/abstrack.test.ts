describe('Abstrack Class', () => {
    abstract class Customers {
        readonly id :number ;
        abstract name :string;

        constructor(id :number){
            this.id = id
        }

        hello(){
            console.info('hello')
        }
        abstract sayhello(name :string ) :void;
    }

    class RegulerCustomers extends Customers {
        name: string;

        constructor(id :number,name :string){
            super(id)
            this.name = name
        }

        sayhello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

  it('should support', () => {
    const customer = new RegulerCustomers(1, "Ari")
    customer.sayhello("Jono")
  });
})
