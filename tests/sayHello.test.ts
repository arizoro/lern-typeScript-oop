describe('Sayhello test', () => {
  it('should sayhello test', () => {
        const sayhello = (name :string):void=> {
            return console.info(`Hallo nama saya ${name}`)
        }

        sayhello("Ari")
  });
})
