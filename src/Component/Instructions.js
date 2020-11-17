// Por convenção os componentes começam com letra maiúscula
import { Component } from 'react';
import emoji from '../img/emoji.svg'
import '../style/Instructions.css'

class Instructions extends Component{

    // o método render serve para retornar o código que você quer exibir no navegador
    render(){
        return(
            <div data-testid="instructions" className="instructions">
                <img alt="emoji rindo"  src={emoji}/>
                <p>Ckick on emoji to see the short name</p>
            </div>
        )
    }
}

export default Instructions;