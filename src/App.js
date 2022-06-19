import { Navigate, Route, Routes, Link } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />

        <Route path="/quotes/*" element={<AllQuotes />} />

        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route element={<Comments />} path="comments" />
        </Route>

        <Route path="/new-quote" element={<NewQuote />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
