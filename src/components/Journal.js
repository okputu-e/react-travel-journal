import Pointer from "../images/pointer.png";

function Journal(props) {
  return (
    <div className="journal">
      <div className="journal-image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="journal-details">
        <div className="details-header">
          <p className="flex flex-aic ">
            <img src={Pointer} alt="" className="pointer" />
            <span className="description location">{props.location}</span>
            <a href={props.googleMapsUrl} className="grey description">
              View on Google Maps
            </a>
          </p>
          <h2 className="bold">{props.title}</h2>
        </div>
        <div className="details-content">
          <span className="bold description date">
            {props.startDate} - {props.endDate}
          </span>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Journal;
