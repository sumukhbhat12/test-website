
export const GetTaskComponent = (props) => {
    return(
        <div style={{ color: props.completed? 'green' : 'black', width:'500px', height:'50px', display:'flex', margin:'15px', alignItems:'center', justifyContent:'center'}}>
            <h3>{props.id}. {props.name}</h3>
            <button style={{width:'75px', height:'20px', marginLeft:'20px', textAlign:'center'}} onClick={() => props.completeTask(props)}>Complete</button>
            <button style={{width:'25px', height:'20px', marginLeft:'20px', textAlign:'center'}} onClick={() => props.removeTask(props)}>X</button>
        </div>
    )
}