import axios from "axios";

new Date();

const apodUrl =
  "https://api.nasa.gov/planetary/apod?api_key=7AOVwoHOK42ebaqhpjFGfi5HN6z5tb5R0K7KHDnQ";

export const fetchApod = async () => {
  try {
    const res = await axios.get(apodUrl);
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
