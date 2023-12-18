import { Col, Container, Row } from "react-bootstrap";
import MoviesCards from "./MoviesCards";

const MoviesList = ({title, movies}) => {

  return(
    <div className="movies-list">
      <Container>
      <h3>{title}</h3>
     <Row className="flex">
            
          {movies?.map((movie) => <Col className="cards" md={2} key={movie.id}><MoviesCards  poster={movie?.poster_path}/></Col> )}
          </Row>
          </Container>
      
    </div>
  );
};

export default MoviesList;
