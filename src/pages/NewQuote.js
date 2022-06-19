import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

export default function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  async function addQuoteHandler(data) {
    sendRequest(data);
  }
  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === "pending"} />
  );
}
