

export default {
    getCovidDates:async()=>{
        const req = await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json');
        const covidList = req.json();
        return covidList;
    }
}