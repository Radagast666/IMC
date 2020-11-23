

import {imcMujer} from './mujer-imc.component';

describe('Unitary tests mujer IMC', ()=>{

    it('should calculate IMC 50 / (170 * 170)', () =>{

        let result =0 ;
    
        result = imcMujer(170, 50);
        expect(result).toBe(16.14);
      }
      )

      it('should calculate IMC 45 / (150 * 150)', () =>{

        let result =0 ;
    
        result = imcMujer(150, 45);
        expect(result).toBe(20);
      }
      ) 

      it('should calculate IMC 54 / (160 * 160)', () =>{

        let result =0 ;
    
        result = imcMujer(160, 54);
        expect(result).toBe(21.09);
      }
      )  





})