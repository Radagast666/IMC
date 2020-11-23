import {imcHombre} from "./hombre-imc.component";

describe('IMC unit test', () => {

  it('should calculate IMC 80 / (200 * 200)', () =>{

    let result =0 ;

    result = imcHombre(200, 80);
    expect(result).toBe(20);
  }
  )

  it('should calculate IMC 60 / (176 * 176)', () =>{

    let result =0 ;

    result = imcHombre(176, 60);
    expect(result).toBe(19.4);
  }
  )

  it('should calculate IMC 50 / 150 * 150', () =>{

    let result =0 ;

    result = imcHombre(150, 50);
    expect(result).toBe(22.2);
  }
  )





})



