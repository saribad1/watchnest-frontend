
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const DASHBOARD_ROWS = [
  {
    title: "Recommended for You",
    movies: [
      {
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        video: "/videos/inception.mp4",
      },
      {
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        video: "/videos/interstellar.mp4",
      },
      {
        title: "The Social Network",
        poster: require("./assets/socialnet.jpg"),
      },
      {
        title: "Tenet",
        poster: "https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
        video: "/videos/tenet.mp4",
      },
      {
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        video: "/videos/matrix.mp4",
      },
       {
      title: "Arrival",
      poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    },
    
    ],
  },
  {
    title: "Popular on WatchNest",
    movies: [
      {
        title: "Forrest Gump",
        poster: require("./assets/forest.jpg"),
      },
      {
        title: "A Beautiful Mind",
        poster: require("./assets/beautifulmind.jpg"),
      },
      {
        title: "The Pursuit of Happyness",
        poster: require("./assets/pursuit.jpg"),
      },
      {
        title: "The Shawshank Redemption",
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      },
      {
        title:"the harry potter",
        poster: require("./assets/harry.jpg"),

      },
      {
        title:"the intern",
        poster: require("./assets/intern.jpg"),

      },
    ],
  },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {DASHBOARD_ROWS.map((row, idx) => (
        <section className="wn-row" key={idx}>
          <h2 className="wn-row-title">{row.title}</h2>

          <div className="wn-grid">
            {row.movies.map((movie, index) => (
              <div
                className="wn-card"
                key={index}
                onClick={() =>
                  navigate("/player", { state: movie })
                }
                style={{ cursor: "pointer" }}
              >
                <img src={movie.poster} alt={movie.title} />
                <span>{movie.title}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Dashboard;