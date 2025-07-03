

const express = require("express");
const router = express.Router();
const {google} = require("googleapis");



router.get("/addEvents" , async (req , res) => {

  
    const  accessToken = req.session.accessToken;
    const  refreshToken = req.session.refreshToken;


    if(!accessToken && !refreshToken){
        return res.status(401).send({message : "user is not login in . please login using google Account"});
    }

const oauth2Client = new google.auth.OAuth2();

    oauth2Client.setCredentials({
  access_token: accessToken,
  refresh_token: refreshToken,
});
   
    oauth2Client.on("tokens", (tokens) => {
    if (tokens.access_token) {
      req.session.accessToken = tokens.access_token;
    }
    if (tokens.refresh_token) {
      req.session.refreshToken = tokens.refresh_token;
    }
  });

   await oauth2Client.getAccessToken();

  
 let topic = req.query.topic;
 let dateStr = req.query.date;
 let timeStr = req.query.time;

 if(dateStr === "false"){
    res.status(400).send({message : "Date is missing . please enter the date"});
 }

 if(timeStr === "false"){
     timeStr = "12:00 AM";
 }



    const [day, month, year] = dateStr.split("-").map(Number);
 
    
   let [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  
  if (period === "PM" && hours < 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;


  const formattedMonth = String(month).padStart(2, "0");
  const formattedDay = String(day).padStart(2, "0");
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  // Combine to ISO-like format with Indian timezone
  let isoTime =  `${year}-${formattedMonth}-${formattedDay}T${formattedHours}:${formattedMinutes}:00+05:30`;

   

    const calendar = google.calendar({version : 'v3' , auth : oauth2Client});

   const event = {
  summary: topic,
  description: topic,
  start: {
    dateTime: isoTime,
    timeZone: 'Asia/Kolkata',
  },
  end: {
    dateTime:  isoTime,
    timeZone: 'Asia/Kolkata',
  },
  reminders: {
    useDefault: false,
    overrides: [
      {
        method: 'popup',
        minutes: 10,
      },
      {
        method: 'popup',
        minutes: 60,
      },
      {
        method: 'popup',
        minutes: 60 * 24,
      },
    ],
  },
};

const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    res.status(200).send(response);
});


module.exports = router;
