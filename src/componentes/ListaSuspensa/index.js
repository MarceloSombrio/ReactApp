import './ListaSuspensa.css'

export default function ListaSuspensa(props) {
    return (
        <div className='Lista-Suspensa'>
            <label>
                {props.label}
            </label>
            <select onChange = {evento => props.aoAlterado(evento.target.value)} required = {props.obrigatorio}>{props.itens.map(item => <option key= {item}>{item}</option>)}</select>
        </div>
    )
}