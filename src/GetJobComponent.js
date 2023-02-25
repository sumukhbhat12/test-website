export const GetJobComponent = (props)=>{
    return(
      <div>
        <h2>{props.salary}</h2>
        <h2>{props.position}</h2>
        <h2>{props.company}</h2>
      </div>
    );
  }