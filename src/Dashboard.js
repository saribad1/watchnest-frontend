import './Dashboard.css';

const DASHBOARD_ROWS = [
  {
    title: 'Recommended for You',
    movies: [
      { title: 'Inception', poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
      { title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { title: 'The Social Network', poster: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
      { title: 'Tenet', poster: 'https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg' },
      { title: 'The Matrix', poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
      { title: 'Arrival', poster: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg' },
      { title: 'Dune', poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
      { title: 'Blade Runner 2049', poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg' },
    ],
  },
  {
    title: 'Popular on WatchNest',
    movies: [
      { title: 'Forrest Gump', poster: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg' },
      { title: 'A Beautiful Mind', poster: 'https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg' },
      { title: 'The Pursuit of Happyness', poster: 'https://image.tmdb.org/t/p/w500/f6l9rghSHORkWLurUGJhaKAiyjY.jpg' },
      { title: 'The Shawshank Redemption', poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
      { title: 'Fight Club', poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg' },
      { title: 'Joker', poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
      { title: 'Whiplash', poster: 'https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBaXiy.jpg' },
      { title: 'Parasite', poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    ],
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      {DASHBOARD_ROWS.map((row, idx) => (
        <section className="wn-row" key={idx}>
          <h2 className="wn-row-title">{row.title}</h2>

          <div className="wn-grid">
            {row.movies.map((movie, index) => (
              <div className="wn-card" key={index}>
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
