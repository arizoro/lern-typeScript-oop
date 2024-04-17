describe('Inheritens', () => {
    class Employe {
        name :string;

        constructor(name :string){
            this.name = name
        }
    }

    class Manager extends Employe {

    }

    class Editor extends Manager {

    }

  it('should support inheritens', () => {
    const employe = new Employe("Ari")
    console.info(employe.name)
    const manager = new Manager("Eko")
    console.info(manager.name)
    const editor = new Editor("Budi")
    console.info(editor.name)
  });
})
