fetchQuotes = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => loadQuotes(data));
};
fetchQuotes();

loadQuotes = (data) => {
  const quotes = document.getElementById("quotes");
  quotes.innerText = data.quote;
};

document.getElementById("refresh").addEventListener("click", function () {
  window.location.reload();
});
