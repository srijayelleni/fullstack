const Anurag=(props)=>{
    const {name,city}=props;
    const country="India";
    return (<div>
        <h1>
            Hi {name}
        </h1>
        <p>Iam from {country}</p>
        <p>3rd Year CSE(AI&ML)</p>
    </div>)
}

export default Anurag;