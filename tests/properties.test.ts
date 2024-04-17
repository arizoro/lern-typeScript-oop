describe('Properties', () => {

    class Custommer {
        readonly id :number;
        name :string = "Guest"; //support default value
        age? :number;

        constructor(id :number, name :string){
            this.id = id;
            this.name = name;
        }

        sayhello(name :string) :void{
          console.info(`Hello ${name}, My name is ${this.name}`)
        }
    }
  it('should can use Properties', () => {
    const customers = new Custommer(1, "Ari")
    customers.age = 20
    console.info(customers)
  });
  
  it('should can have methods', () => {
    const customers = new Custommer(1, "Ari")
    customers.sayhello("Budi")
  });
})
