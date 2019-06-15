import React from 'react';

const Vehicle = ({vehicleLoaded, vehicle:{ano_modelo, combustivel, fipe_codigo, id, key, marca, name, preco, referencia, time, veiculo}}) =>{
    if(vehicleLoaded){
        return (
            <div id="details" className='Vehicle mar-v-cen'>
                <div className="w-bold mar-l-14">
                    <p>Nome: <span>{name}</span></p>
                    <p>Marca: <span>{marca}</span></p>
                    <p>Referência: <span>{referencia}</span></p>
                    <p>Ano do modelo: <span>{ano_modelo}</span></p>
                    <p>Tipo de Combustível: <span>{combustivel}</span></p>
                    <p>Código FIPE: <span>{fipe_codigo}</span></p>
                    <p>Preço: <span>{preco}</span></p>
                    <p>ID: <span>{id}</span></p>
                </div>
            </div>
        )
    }else{
        return <div className='Vehicle-disabled'></div>
    }
}

export default Vehicle;