import { Button, Col } from "react-bootstrap";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
const langKey = useSelector((store) => store.config.lang);

  return(
    <div className="search-bar">
      <form className="form">
        <Col md={9}> 
        <input className="input-text" type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
        </Col>
        <Col md={3}>
        <Button variant="danger">{lang[langKey].search}</Button>
        </Col>
      </form>
    </div>
  );
};

export default GptSearchBar;
