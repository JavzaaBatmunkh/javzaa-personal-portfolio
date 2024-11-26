export function Icon(props) {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={"./images/"+props.pic} className="h-16 w-16"/>
        <div>{props.title}</div>    
    </div>
  );
}
