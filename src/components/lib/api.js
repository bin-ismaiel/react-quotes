import axios from "axios";

const FIREBASE_DOMAIN =
  "https://reactt-apii-default-rtdb.firebaseio.com/quotes.json";

export async function getAllQuotes() {
  try {
    const response = await axios(FIREBASE_DOMAIN, {
      headers: {
        Accept: "application/json",
      },
    });
    const { data } = response;
    const transformedQuotes = [];

    for (const key in data) {
      const quoteObj = {
        id: key,
        ...data[key],
      };

      transformedQuotes.push(quoteObj);
    }

    return transformedQuotes;
  } catch (error) {
    console.log("Could not fetch quotes.");
  }
}

export async function getSingleQuote(quoteId) {
  try {
    const response = await axios(
      `https://reactt-apii-default-rtdb.firebaseio.com/quotes/${quoteId}.json`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const { data } = response;

    const loadedQuote = {
      id: quoteId,
      ...data,
    };

    return loadedQuote;
  } catch (error) {
    console.log("couldn't fetch quote");
  }
}

export async function addQuote(quoteData) {
  try {
    const response = await axios.post(FIREBASE_DOMAIN, quoteData);
  } catch (error) {
    console.log("Could not create quote.");
  }
  return null;
}
export async function addComment(requestData) {
  try {
    const response = await axios.post(
      `https://reactt-apii-default-rtdb.firebaseio.com/quotes/comments/${requestData.quoteId}.json`,
      {
        headers: {
          Accept: "application/json",
        },
        data: requestData.commentData,
      }
    );

    const { data } = response;
    return { commentId: data.name };
  } catch (error) {
    console.log(error);
  }
}
export async function getAllComments(quoteId) {
  try {
    const response = await axios(
      `https://reactt-apii-default-rtdb.firebaseio.com/quotes/comments/${quoteId}.json`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const { data } = response;

    const transformedComments = [];

    for (const key in data) {
      const commentObj = {
        id: key,
        ...data[key],
      };

      transformedComments.push(commentObj);
    }

    return transformedComments;
  } catch (error) {
    console.log(error);
  }
}
