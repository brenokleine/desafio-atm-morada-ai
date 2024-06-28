import { saqueAtm } from '@/public/utils/saqueAtm';

describe('Teste algoritmo saqueAtm', () => {
    it('should return correct bills for doable numbers like 380', () => {
        expect(saqueAtm(380)).toEqual(
            { 
                100: 3, 
                50: 1, 
                20: 1, 
                10: 1,
                5: 0,
                2: 0
            }
        );
    })

    it('should correctly handle number ending in 6', () => {
        expect(saqueAtm(186)).toEqual(
            { 
                100: 1, 
                50: 1, 
                20: 1, 
                10: 1, 
                5: 0,
                2: 3 
            }
        );
    
    })

    it('should correctly handle number ending in 8', () => {
        expect(saqueAtm(98)).toEqual(
            {
                100: 0,
                50: 1,
                20: 2,
                10: 0,
                5: 0,
                2: 4
            }
        );

    })

    it('should fail to return correct bills for number ending in 1', () => {
        expect(saqueAtm(381)).toEqual(
            { 
                'sobra': 1 
            }
        );
    });

    it('should fail to return correct bills for number ending in 3', () => {
        expect(saqueAtm(83)).toEqual(
            {
                'sobra': 1
            }
        );
    });


});