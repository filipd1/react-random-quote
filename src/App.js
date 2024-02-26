import { useState } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import { InputCat } from "./components/InputCat";

function App() {
  //const API_KEY = "0QlKoMvu4IUKW5Tc6Kq49Q==7QaIhf9uUrXqOk1h";

  const [randomQuote, setRandomQuote] = useState([]);
  const [showQuote, setShowQuote] = useState(false);
  const [noCategoryError, setNoCategoryError] = useState(false);
  const [category, setCategory] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  const AllowedCategories = [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];

  const options = {
    method: "GET",
    url: "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes",
    params: {
      category: category,
    },
    headers: {
      "X-RapidAPI-Key": "8c34b95bbbmsh5b516de5c3bc351p1f4487jsnc66fa6290002",
      "X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
    },
  };
  const getRandomQuote = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setRandomQuote(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const showRandomQuote = (e) => {
    e.preventDefault();

    getRandomQuote();
    setShowQuote(true);
  };

  const onChangeHandle = (e) => {
    setCategory(e.target.value);
    if (!AllowedCategories.includes(e.target.value)) {
      setNoCategoryError(true);
      setBtnDisable(true);
    } else {
      setNoCategoryError(false);
      setBtnDisable(false);
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <InputCat
            cat={category}
            onChangeHandle={onChangeHandle}
            onSubmitHandle={showRandomQuote}
            onClickHandle={showRandomQuote}
            isDisabled={btnDisable}
          />
        </div>
        {noCategoryError && <p className="no-cat-error">No category found</p>}
        {showQuote && <Card quote={randomQuote} />}
      </div>
    </>
  );
}

export default App;
