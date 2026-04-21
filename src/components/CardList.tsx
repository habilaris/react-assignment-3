import Card from "./Card";

export default function CardList() {
  const cardList = [
    {
      id: 1,
      title: "Frontend Web Development",
      description:
        "Learn how to build beautiful and responsive websites using HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      title: "Backend Web Development",
      description:
        "Learn how to build robust and scalable backend services using Node.js, Express, and databases.",
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      description:
        "Learn how to build complete web applications from frontend to backend using MERN stack.",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Learn how to build cross-platform mobile applications using React Native, Expo and Firebase.",
    },
    {
      id: 5,
      title: "Data Science with Python",
      description:
        "Learn how to analyze and visualize data using Python libraries like Pandas, Matplotlib, and Seaborn.",
    },
    {
      id: 6,
      title: "Machine Learning",
      description:
        "Learn how to build machine learning models using Python libraries like Scikit-learn and TensorFlow.",
    },
  ];

  return (
    <div className="card-list">
      {cardList.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
}
