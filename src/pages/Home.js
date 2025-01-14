import React from "react";
import AuthorCard from "../components/AuthorCard";

const authors = [
  {
    name: "Franz Kafka",
    photo: "https://via.placeholder.com/150",
    id: "kafka",
  },
  {
    name: "Fyodor Dostoevsky",
    photo: "https://via.placeholder.com/150",
    id: "dostoevsky",
  },
  {
    name: "Khaled Hosseini",
    photo: "https://via.placeholder.com/150",
    id: "hosseini",
  },
  {
    name: "Premchand",
    photo: "https://via.placeholder.com/150",
    id: "premchand",
  },
  {
    name: "Saadat Hasan Manto",
    photo: "https://via.placeholder.com/150",
    id: "manto",
  },
  {
    name: "Freida McFadden",
    photo: "https://via.placeholder.com/150",
    id: "mcfadden",
  },
  {
    name: "Manav Kaul",
    photo: "https://via.placeholder.com/150",
    id: "kaul",
  },
];

function Home() {
  const handleAuthorClick = (id) => {
    window.location.href = `http://3.21.247.1:8080/api/authors/${id}`;
  };

  return (
    <main>
      <div className="author-grid">
        {authors.map((author) => (
          <AuthorCard
            key={author.id}
            name={author.name}
            photo={author.photo}
            onClick={() => handleAuthorClick(author.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
