import React from 'react'
import Enzyme, { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import Instructions from './Instructions'
import emoji from '../img/emoji.svg'


Enzyme.configure({
    adapter: new Adapter(),
})

    // É possível utilizar o 'it' ou 'test'
    // Quanto utilizamos 'test' não é necessário usar o 'describe', já com o 'it' é necessário

test("Rendering instructions", () => {      
    const wrapper = shallow(<Instructions />)  
    expect(wrapper.contains(
        <div data-testid="instructions" 
            className="instructions">
            <img alt="emoji rindo" src={emoji} />
            <p>Ckick on emoji to see the short name</p>
        </div>
    )).toEqual(true)
})

// É possível usar o '.only' após o describe para executar APENAS aquele bloco que está dentro do describe
// É possível usar o '.skip' após o describe para pular APENAS aquele bloco que está dentro do describe
describe("Render", () => {
    const wrapper = shallow(<Instructions />)

    // Verificar se a imagem está sendo renderizada
    it("Render img", () => {        
        expect(wrapper.find('img').length).toBe(1)
    })
})