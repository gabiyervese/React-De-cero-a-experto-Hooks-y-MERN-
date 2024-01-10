import "./App.css";

function App() {
  const getGif = async () => {
    try {
      const apiKey = "WTccDblnmthMo5K3XaImIzgwxneX965r";
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await resp.json();
      const { url } = data.images.original;
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
      console.log(url);
    } catch (err) {
      console.error(err);
    }
  };
  getGif();
  return <></>;
}
export default App;
