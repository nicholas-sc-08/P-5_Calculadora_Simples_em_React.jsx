import {useState} from 'react'

function Calculadora() {

    const [result, set_result] = useState();
    const [valor_primeiro_inpt, set_valor_primeiro_inpt] = useState();
    const [valor_segundo_inpt, set_valor_segundo_inpt] = useState();
    const [valor_slct, set_valor_slct] = useState();

    const pegar_primeiro_inpt = (evnt) => {

        set_valor_primeiro_inpt(evnt.target.value);
    };

    const pegar_segundo_inpt = (evnt) => {

        set_valor_segundo_inpt(evnt.target.value);
    };

    const pegar_valor_slct = (evnt) => {

        set_valor_slct(evnt.target.value);
    };
    function soma(){

       set_result(`O resultado é: ${parseFloat(valor_primeiro_inpt) + parseFloat(valor_segundo_inpt)}.`);
    };

     function subtracao(){

        set_result(`O resultado é: ${parseFloat(valor_primeiro_inpt) - parseFloat(valor_segundo_inpt)}.`);
     };

     function multiplicacao(){

        set_result(`O resultado é: ${parseFloat(valor_primeiro_inpt) * parseFloat(valor_segundo_inpt)}.`);
     };

     function divisao(){

        set_result(`O resultado é: ${parseFloat(valor_primeiro_inpt) / parseFloat(valor_segundo_inpt)}.`);
     };

     function exponenciacao(){

        set_result(`O resultado é: ${parseFloat(valor_primeiro_inpt) ** parseFloat(valor_segundo_inpt)}.`);
     };

     function escolha_de_operadores(){

        switch(true){

            case valor_slct === `+`:

            soma();
            break;

            case valor_slct === `-`:

            subtracao();
            break;

            case valor_slct === `x`:

            multiplicacao();
            break;

            case valor_slct === `÷`:

            divisao();
            break;

            default:

            exponenciacao();
            break;
        };
     };
     return (
      <>

      <div className='numero_title'>
      <h4>Números</h4>

    <div className='calculadora_container'>
      

      <div className='alinhamento_inpt_um'>
         <label>1º Número</label>
         <input type="text" minLength={1} maxLength={12} onChange={pegar_primeiro_inpt} placeholder='Digite um número'/>
      </div>

      <div className='alinhamento_inpt_um'>
         <label>2º Número</label>
         <input type="text" minLength={1} maxLength={12} onChange={pegar_segundo_inpt} placeholder='Digite um número'/>
      </div>
    
    </div>

    </div>

      <div className='operadores_aritmeticos'>

         <h4>Operadores Aritméticos</h4>

         <div className='operadores_aritmeticos_container'>


         <input type="radio" name='inpt_aritmetic'value={`+`} onChange={pegar_valor_slct} className='radio_inpt'/>
         <label>Adicao</label>

         <input type="radio" name='inpt_aritmetic' value={`-`} onChange={pegar_valor_slct} className='radio_inpt'/>
         <label>Subtração</label>

         <input type="radio" name='inpt_aritmetic'value={`x`} onChange={pegar_valor_slct} className='radio_inpt'/>
         <label>Multiplicação</label>

         <input type="radio" name='inpt_aritmetic' value={`÷`} onChange={pegar_valor_slct} className='radio_inpt'/>
         <label>Divisão</label>

         <input type="radio" name='inpt_aritmetic' value={`^`} onChange={pegar_valor_slct} className='radio_inpt'/>
         <label>Exponenciação</label>
         
         </div>
      
      </div>
    
    <button onClick={escolha_de_operadores} >Calcular</button>

    <div className='resultado'>
    {result}
    </div>
    </>
  )
}

export default Calculadora
