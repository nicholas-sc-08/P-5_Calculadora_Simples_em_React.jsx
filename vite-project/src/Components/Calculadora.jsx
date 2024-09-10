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

       set_result(parseFloat(valor_primeiro_inpt) + parseFloat(valor_segundo_inpt));
    };

     function subtracao(){

        set_result(parseFloat(valor_primeiro_inpt) - parseFloat(valor_segundo_inpt));
     };

     function multiplicacao(){

        set_result(parseFloat(valor_primeiro_inpt) * parseFloat(valor_segundo_inpt));
     };

     function divisao(){

        set_result(parseFloat(valor_primeiro_inpt) / parseFloat(valor_segundo_inpt));
     };

     function exponenciacao(){

        set_result(parseFloat(valor_primeiro_inpt) ** parseFloat(valor_segundo_inpt));
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
     console.log(result)
     return (
    <div>
      
    <input type="text" minLength={1} maxLength={12} onChange={pegar_primeiro_inpt}/>

    <select value={valor_slct} onChange={pegar_valor_slct}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="÷">÷</option>
        <option value="^">^</option>
    </select>

    <input type="text" minLength={1} maxLength={12} onChange={pegar_segundo_inpt}/>

    <button onClick={escolha_de_operadores}>Calcular</button>

    {result}
    </div>
  )
}

export default Calculadora
