export default function Event(props) {
  return (
    <div className="row fade-in hiding">
      <div className="col-md-4 offset-md-1 text-center">
        <div className="imgandtext">
          <img src={props.imgSrc} alt="" />
          <h4>{props.imgText}</h4>
        </div>
      </div>
      <div className="col-md-6">
        <h5>{props.title}</h5>
        <span>舉辦時間：{props.time}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}