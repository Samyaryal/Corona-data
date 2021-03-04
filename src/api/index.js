import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

const fetchData = async() => {
  try{
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get (url) //data destructuring "response.data"

    // const modifiedData ={
    //   confirmed: data.confirmed,
    //   recovered: data.recovered,
    //   deaths: data.deaths,
    //   lastUpdate: data.lastUpdate,
    // }
    return {confirmed, recovered, deaths, lastUpdate};
  } catch(e) {

  }

}

export default fetchData;