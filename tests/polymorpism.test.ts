describe('Polymorphism', () => {
    class Employe {
        constructor(public name :string){

        }
    }

    class Manager extends Employe {

    }

    class VicePresident extends Manager{
    }

    function sayhello(employe :Employe) :void{
      if(employe instanceof VicePresident){
        const vp = employe as VicePresident
        console.info(`Hello vicePresiden ${vp.name}`)
      }else if(employe instanceof Manager){
        const manager = employe as Manager
        console.info(`Hello manager ${manager.name}`)
      }else{
        console.info(`Hello employe ${employe.name}`)
      }
        // console.info(`Hello ${employe.name}`)
    }

  it('should support', () => {
    let employe :Employe = new Employe("Ari")
    console.info(employe)

    employe = new Manager("Windu")
    console.info(employe)

    employe = new VicePresident("Joko")
    console.info(employe)
  });

  it('should method polymorpism', () => {
    sayhello(new Employe("Ari"))
    sayhello(new Manager("Windu"))
    sayhello(new VicePresident("Joko"))
  });

  it('should support method parameter polymorpism', () => {
    sayhello(new Employe("Ari"))
    sayhello(new Manager("Windu"))
    sayhello(new VicePresident("Joko"))
  });
})
