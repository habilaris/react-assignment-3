import web_dev from "../assets/web_dev.jpg";

export default function Card() {
  return (
    <div className="card-container">
      <img src={web_dev} alt="Web Development" />
      <div className="card-content">
        <h3>Frontend Web Development</h3>
        <p>
          Learn how to build beautiful and responsive websites using HTML, CSS,
          and JavaScript.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
}
