import './colaborador.css'

export default function Colaborador({nome, imagem, cargo, CorDeFundo}) {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: CorDeFundo}}>
            <img src={imagem} alt= ''/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
    )
}