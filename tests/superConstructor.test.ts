describe('super constructor', () => {
    class Person {
        name :string
        constructor(name :string){
            this.name = name
        }
    }

    class Employe extends Person{
        department :string

        constructor(name :string , department :string){
            super(name)
            this.department = department
        }
    }

  it('should support', () => {
    const employe = new Employe("Ari", "Tech")
    console.info(employe)
  });
})
