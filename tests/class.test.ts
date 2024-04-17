describe('Class ', () => {

    class Custommer {
        constructor(){
            console.info('Create new Custommer')
        }
    }

    class Order {

    }

  it('should can create class', () => {

        const customers :Custommer = new Custommer
        const orders :Order = new Order
  });

  it('should can create constructor', () => {
    new Custommer()
    new Custommer()
  });   
})
