import  Axios  from "axios";

const URL = "https://smart-crop-calendar.herokuapp.com/crops/"


export const getData = async (ëndpoint) => {

const URL_ENDPOINT = URL+ëndpoint+"/";
const response = await Axios.get(URL_ENDPOINT)

const data = response.data
console.log(data);

return data
};
