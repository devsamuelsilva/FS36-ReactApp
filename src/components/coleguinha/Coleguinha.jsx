
//Desestruturando a PROPS
export const Coleguinha = ({ nome, idade, nome_completo}) => {

    return (
        <>
            <h3>{nome}</h3>
            <p>{nome_completo}</p>
        </>
    )
}

// export const Coleguinha = (props) => {

//     return (
//         <>
//             <h3>{props.nome}</h3>
//             <p>{props.nome_completo}</p>
//         </>
//     )
// }