import React, { Component } from 'react';

import Selection from './Part/DrawInput'
import { request } from './Part/Client'

class Form extends Component {
    render() {
        let { updateState, state: { f_marcas, f_veiculos, f_veiculo } } = this
        return (
            <div className='Form d-flex fdir-column ch-maxview pad-h-30'>
                <div className="mar-v-cen">
                    <h2 className="c-strong w-medium">Quanto vale meu carro?</h2>
                    <Selection data={{state: {...this.state}, label: "Tipo de Veiculo", type: 'tipo', func: updateState}}/>
                    <Selection data={{state: {...this.state}, label: "Marca", type: 'marcas', items: f_marcas, func: updateState}}/>
                    <Selection data={{state: {...this.state}, label: "Modelo", type: 'veiculos', items: f_veiculos, func: updateState}}/>
                    <Selection data={{state: {...this.state}, label: "Ano", type: 'veiculo', items: f_veiculo, func: updateState}}/>
                    <div onClick={this.resetState} className="button mar-h-cen">Resetar Formulário</div>
                </div>
            </div>
        );
    }

    state = {
        f_marcas: [],
        f_veiculos: [],
        f_veiculo: [],
        f_ano: {}
    }

    resetState = () => this.setState({ f_veiculos: [], f_veiculo: [] })

    updateState = ({ target: { value } }, type) => {
        this.setState({[type]: value})
        this.refetch(value, type)
    }

    refetch = (value, fetch_type) => {
        let { props: { storeVehicle }, state: { marcas, veiculos, tipo } } = this

        switch (fetch_type) {
            case 'tipo': request({tipo: value, fetch_type: 'marcas'}).then(res => this.setState({f_marcas: res})); break;
            case 'marcas': request({tipo, fetch_type: 'veiculos', marca: value}).then(res => this.setState({f_veiculos: res})); break;
            case 'veiculos': request({tipo, fetch_type: 'veiculo', marca: marcas, veiculo: value}).then(res => this.setState({f_veiculo: res})); break;
            case 'veiculo': request({tipo, fetch_type: 'ano', marca: marcas, veiculo: veiculos, ano: value}).then(res => storeVehicle(res)).then(() => document.querySelector("#details").scrollIntoView({behavior: 'smooth'})); break;
            default: break;
        }
    }
}

export default Form;