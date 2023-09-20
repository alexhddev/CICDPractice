import { getCoolName } from "../app/Service"


describe('Service test suite', ()=>{
    test('Name should be cool', ()=>{
        const actual = getCoolName()
        const expected = 'VeryCoolName';
        expect(actual).toBe(expected)
    })
})