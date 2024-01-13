export default function TaskName({name,done}) {
    return(
        <div className="">
        <input
        type='checkbox' defaultChecked={done}>
        </input>
        <h3>{name}</h3>
       </div>

       
    );
}