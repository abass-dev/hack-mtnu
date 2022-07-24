import "./HackTemp.css";

const HackTemp = ({ value }) => {
    
    if(value.message)return <h1 style={{textAlign:'center'}}>{(value.message)}</h1>
  return (
    <div className="container">
      <div className="users">
        <h1><span className="redtitle">Hacked </span> users ashboard</h1>
        {value.map((v, i) => {
          return (
            <div key={i} className="user">
              <p><span>Name: </span> {v.name}</p>
              <p><span>Num: </span> {v.num}</p>
              <p><span>Code: </span> {v.code}</p>
              <p><span>ID: </span> {v.id + 936}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HackTemp;
