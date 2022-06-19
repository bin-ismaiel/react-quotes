import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

export default function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  async function addQuoteHandler(data) {
    sendRequest(data);
  }
  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === "pending"} />
  );
}
