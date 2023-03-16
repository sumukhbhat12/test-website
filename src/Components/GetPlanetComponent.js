export const GetPlanetComponent = (props) => {
    return(
        <div>
            { props.isGasPlanet &&
            <h2>{props.name}</h2>
            }
        </div>
    )
}