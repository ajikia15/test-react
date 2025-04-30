export default function Card(props) {
  function like(title) {
    console.log("Liked - ", title);
  }

  return (
    <div className="card">
      <img src={props.img} alt="" className="card-pic" />
      <p className="title">{props.title.toUpperCase()}</p>
      <p>Duration - {props.length}</p>
      <p>{props.rating}/100</p>
      <button onClick={() => like(props.title)}>Like</button>
    </div>
  );
}
