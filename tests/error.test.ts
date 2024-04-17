describe('Validation Error', () => {
    class ValidationError extends Error {
        constructor(public massage :string){
            super(massage)
        }
    }

    function dubleEat (value :number) :number {
        if(value < 0){
            throw new ValidationError('number cannot be less than 0')
        }
        return value * 2
    }

    it('should support', () => {
        try {
            const result = dubleEat(-1)
            console.info(result)
        } catch (error) {
            if(error instanceof ValidationError){
                console.info(error.massage)
            }
        }
    });
})
