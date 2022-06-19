import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortAscending = queryParams.get("sort") === "asc";
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };
  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);
  function changeSortingHandler() {
    navigate(`/quotes?sort=${isSortAscending ? "dec" : "asc"}`);
  }

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>{`Sort ${
          isSortAscending ? "Descending" : "Ascending"
        }  `}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
