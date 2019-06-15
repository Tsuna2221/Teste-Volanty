import axios from "axios"

let request = ({fetch_type, tipo, marca, veiculo, ano}) => {
    let call = (url) => axios.get(url).then(res => res.data)

    switch (fetch_type) {
        case 'marcas': return call(`https://fipeapi.appspot.com/api/1/${tipo}/marcas.json`).then(res => res)
        case 'veiculos': return call(`https://fipeapi.appspot.com/api/1/${tipo}/veiculos/${marca}.json`).then(res => res)
        case 'veiculo': return call(`https://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marca}/${veiculo}.json`).then(res => res)
        case "ano": return call(`https://fipeapi.appspot.com/api/1/${tipo}/veiculo/${marca}/${veiculo}/${ano}.json`).then(res => res)
        default: break;
    }
}

export { request }

