import { useState } from "react";
import {Card,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Weather(){
    const[startdate,setStartDate] = useState("");
    const[enddate,setEndDate] = useState("");
    const[error,setError] = useState("");
    const[inputError,setInputError] = useState("");
    const[data,setData] = useState([]);
    const JSON = [
        {
            "day":0,
            "temp":68,
            "image":{
                "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAn7ufPu7hfJNCPlXobGtSamg0rqQBEZJ8g&usqp=CAU"
            },
            "message":"WINDY"
        },
        {
            "day":1,
            "temp":74,
            "image":{
                "src":"data:image/png;base64,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"
            },
            "message":"SUNNY"
        },
        {
            "day":2,
            "temp":83,
            "image":{
                "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLShRMsRMrJdfdtOj_hTWSyPEHpUHrqVFi0Q&usqp=CAU"
            },
            "message":"THUNDERSTORMS"
        },
        {
            "day":3,
            "temp":75,
            "image":{
                "src":"data:image/jpeg;base64,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"
            },
            "message":"MOSTLY CLOUDY"
        },
        {
            "day":4,
            "temp":82,
            "image":{
                "src":"data:image/png;base64,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"
            },
            "message":"PARTIALLY CLOUDY"
        },
        {
            "day":5,
            "temp":81,
            "image":{
                "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycgfMQj-_MQVKpFIPlAw3ajXK1MnDoVjAxA&usqp=CAU"
            },
            "message":"RAIN"
        },
        {
            "day":6,
            "temp":90,
            "image":{
                "src":"data:image/png;base64,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"
            },
            "message":"SUNNY"
        }
    ]
// to handle startdate event
    const handleStartDate =  (e)=>{
        setStartDate(e.target.value);
        setError("");
    }

 // to handle enddate event  
    const handleEndDate =  (e)=>{
        setEndDate(e.target.value);
        setError("");
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(startdate==="" || enddate===""){
            setError("Please enter all the fields");
        } else{
            setError("");
            let start = new Date(startdate);
            let end =  new Date(enddate);
          console.log(start.getDay());
          console.log(end.getDay());
            let diffinms = end-start;
            let diffindays = diffinms/(1000*60*60*24);
            console.log(diffindays);
            if(diffindays!==6){
                setInputError("inputs difference should be 7 days");
            } else{
                setInputError("");
                const weatherData = JSON.filter((item)=>{
                  return diffindays>=0 && diffindays<=6;
                });
                console.log(weatherData);
                setData(weatherData);
            }
        }
    }
    const weekDays = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    return(
        <div>
             <h3 style={{padding:"20px 0px"}}>Weekly Forecast</h3>
            <form style={{marginTop:"30px"}} onSubmit={handleSubmit}>
                <label>Start Date:</label>&nbsp;&nbsp;
                <input type="date" value={startdate} onChange={handleStartDate}/><br/><br/>
                <label> End Date:</label>&nbsp;&nbsp;
                <input type="date" value={enddate} onChange={handleEndDate}/><br/><br/>
                <button style={{padding:"10px",borderRadius:"5px",backgroundColor:"lightslategray",border:"none"}}>Submit</button>
            </form>
            {error&&<p style={{color:"red"}}>{error}</p>}
            {inputError&&<p style={{color:"red"}}>{inputError}</p>}
                  
            {data&&(
                 <Row style={{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:"40px"}}>
                    {data.map((item)=>(
                        <Col>
                        <Card style={{ width: '14rem' }}>
                 <h3>{weekDays[item.day]}</h3>
                 <h1>{item.temp}</h1>
                <Card.Img style={{width:"150px",height:"150px",marginLeft:"auto",marginRight:"auto"}} src={item.image.src} />
                <Card.Body>
                  <Card.Title>{item.message}</Card.Title>
                </Card.Body>
              </Card>
                        </Col>
                
                    ))}
                </Row>
                
            )}
        </div>
    );
}
export default Weather;