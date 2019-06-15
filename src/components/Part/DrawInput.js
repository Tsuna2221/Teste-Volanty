import React, { Component } from 'react';

class Selection extends Component {
    render() {
        let { type, func, items, label, state: { f_marcas, f_veiculos, f_veiculo } } = this.props.data
        switch (type) {
            case 'tipo':
                return (
                    <div className="mar-v-6">
                        <p className="c-strong s-14 mar-0">{label}</p>
                        <select className="c-strong mar-v-8 pad-h-20 cw-100 bs-light br-circle no-outline" onChange={(e) => func(e, type)} name={type} id={type}>
                            <option></option>
                            <option value='carros'>Carros</option>
                            <option value='motos'>Motos</option>
                            <option value='caminhoes'>Caminhões</option>
                        </select>    
                    </div>
                )

            case 'marcas':
            case 'veiculos':
                return (
                    <div className="mar-v-6">
                        <p className="c-strong s-14 mar-0">{label}</p>
                        <select disabled={type === 'marcas' ? f_marcas.length <= 0 : f_veiculos.length <= 0} className="c-strong mar-v-8 pad-h-20 cw-100 bs-light br-circle no-outline" onChange={(e) => func(e, type)} name={type} id={type}>
                            <option></option>
                            {items.map(({fipe_name, id}) => <option key={id} value={id}>{fipe_name}</option> )}
                        </select>
                    </div>

                )

            case 'veiculo':
                return (
                    <div className="mar-v-6">
                        <p className="c-strong s-14 mar-0">{label}</p>
                        <select disabled={f_veiculo.length <= 0} className="c-strong mar-v-8 pad-h-20 cw-100 bs-light br-circle no-outline" onChange={(e) => func(e, type)} name={type} id={type}>
                            <option></option>
                            {items.map(({veiculo, id, fipe_codigo}) => <option key={id} value={id}>{veiculo} - {fipe_codigo}</option> )}
                        </select>
                    </div>
                )
        
            default:
                break;
        }
    }
}

export default Selection;