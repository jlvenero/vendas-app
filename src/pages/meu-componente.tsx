interface MensagemProps {
    mensagem: string;
}

const Mensagem: React.FC <MensagemProps> = (props:any) => {
    return(
        <div>
            { props.mensagem }
        </div>
    )
}

const MeuComponente = () => {
  return(
    <div>
        <Mensagem mensagem="Olá, mundo!"/>
    </div>
  )
}

export default MeuComponente;