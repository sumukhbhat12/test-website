export const GetUserComponent = (props) => {
    return (
    <div>
      <h1 style={{color:"green"}}>{props.name}</h1>
      <h2 style={{color:"blue"}}>{props.age}</h2>
      <h2 style={{color:"hotpink"}}>{props.email}</h2>
    </div>
    );
  }