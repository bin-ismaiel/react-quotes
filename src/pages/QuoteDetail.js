import React, { useEffect } from "react";
import Comments from "../components/comments/Comments";
import {
  useParams,
  Route,
  Link,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function QuoteDetail() {
  const match = useRouteMatch();
  const { quoteId } = useParams();
  const {
    sendRequest,
    data: loadedQuote,
    error,
    status,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  const { author, text } = loadedQuote;
  return (
    <>
      <HighLightedQuote text={text} author={author} />
      <Switch>
        <Route path={`${match.path}`} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Show Comments
            </Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Switch>
    </>
  );
}
