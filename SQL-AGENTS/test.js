import axios from "axios";

const prompt = "Get all the employees who were hired after 2005?";

axios
  .get(`http://localhost:5000/query?prompt=${encodeURIComponent(prompt)}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });