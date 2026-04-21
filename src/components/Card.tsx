import web_dev from "../assets/web_dev.jpg";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="card-container">
      <img src={web_dev} alt="Web Development" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="read-more-btn">Read More...</button>
      </div>
    </div>
  );
}
