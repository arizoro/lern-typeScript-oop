describe('Instance of', () => {
    class Employe{}
    class Manager{}
    const budi = new Employe()
    const ari  = new Manager()

    it('should support', () => {
        console.info(typeof budi)
        console.info(typeof ari)
    });
    
    it('should support instanceOf', () => {
        expect(budi instanceof Employe).toBe(true)
        expect(budi instanceof Manager).toBe(false)

        expect(ari instanceof Employe,).toBe(false)
        expect(ari instanceof Manager).toBe(true)
    });
})
