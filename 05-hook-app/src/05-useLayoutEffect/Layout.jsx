import { useFetch, useCounter } from "../Hooks";
import { Loading, Quotes } from "../03-examples/index";

const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[data.length - 1];

  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />
      {isLoading ? <Loading /> : <Quotes quote={quote} author={author} />}
      <button onClick={() => increment(1)}>Next quote</button>
    </>
  );
};

export default Layout;
