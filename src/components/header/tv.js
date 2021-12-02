const Tv = ({ data }) => {
  console.log(data);
  if (data.results) {
    return (
      <div>
        {data.results.map((data, index) => {
          if (index < 10) {
            return (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt={data.name}
                />
                <p>{data.name}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Tv;
