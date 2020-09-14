import React,{useState,useEffect} from 'react'
import './Home.css'
import CovidDate from './../../CovidDate'
function Home({list}) {
  const [fullList, setfullList] = useState([])
  const [filterlist, setfilterlist] = useState(list)
  
  useEffect(()=>{
    const loadDate =async()=>{
      if(filterlist.length<1){
        const res=await CovidDate.getCovidDates();
     // setcovidList(res);
     let list = []
    for(let a in res){
    
    list.push(res[a])
    }
    setfilterlist(list)
    setfullList(list)
    console.log(list)
    
    }
      }
      loadDate();
      
    },[])  
    
   async function  onfilter (e){
    let res = fullList
    console.log(e.target.value)
    let newlist =await res.filter(item=>item.location.toLowerCase().includes(e.target.value.toLowerCase()))
    setfilterlist(newlist)
   }
    return (
      <div className="container">




       <nav className="navbar filter">
  <form className="form m-auto col-md-4">
    <input className="form-control mr-sm-2" onChange={onfilter} type="search" placeholder="Pais" aria-label="Search"/>
  </form>
</nav>
      <div className="row">

      {filterlist.map((item,key)=>(
       <div className="col-sm-8 col-md-3 py-4 cardd" key={key}>
       <h2 className="title">{item.location}</h2>
      <h4 className="title">{item.continent}</h4>
       <p><strong>Poblacion : </strong> {item.population}</p>
       <p><strong>Casos : </strong> {item.data[item.data.length-1].total_cases}</p>
      </div>
      
      ))}

   
      </div>

      <hr/>

{filterlist.length<=0 &&
  <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>}

    </div>

    
     
    )
}

export default Home
