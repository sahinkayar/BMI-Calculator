import React, { useState, useEffect } from "react";

function Results({ Bmı }) {
  const [src, setSrc] = useState("");
  const [message, setmessage] = useState("");
  const [infos, setinfos] = useState(true);
  console.log(Bmı);
  useEffect(() => {
    debugger;
    if (Bmı === undefined || Bmı === null || isNaN(Bmı) || Bmı === "") {
      setSrc("");
      setmessage("");
      setinfos(false);
    } else if (Bmı <= 18.5) {
      setSrc(
        "https://media.istockphoto.com/id/482708583/photo/funny-retro-sports-nerd.jpg?s=612x612&w=0&k=20&c=WZo0QWK7u544XrLZZpFu-zEdEEIp5xNnMvOCHAOm1eQ="
      );
      setinfos(true);
      setmessage("You're skinny, work harder");
    } else if (Bmı > 18.5 && Bmı <= 24.9) {
      setSrc(
        "https://st3.depositphotos.com/6179956/16109/i/1600/depositphotos_161099892-stock-photo-male-fitness-model-with-sexy.jpg"
      );
      setinfos(true);
      setmessage("you have an ideal BMI, Well Done");
    } else if (Bmı > 25 && Bmı <= 29.9) {
      setSrc(
        "https://thumbs.dreamstime.com/z/tired-fat-man-thinking-over-weight-problems-desire-to-lose-weight-gym-workout-tired-fat-man-thinking-over-weight-problems-desire-130418170.jpg"
      );
      setinfos(true);
      setmessage("You're over weight, start your diet and workout asap :)");
    } else if (Bmı > 30) {
      setSrc(
        "https://t4.ftcdn.net/jpg/00/49/26/05/360_F_49260588_cXkxsjhVgo8CX4Qk4M2OOdwIZKScJYDl.jpg"
      );
      setinfos(true);
      setmessage("You're over weight, start your diet and workout asap :)");
    }
  }, [Bmı]);

  return (
    <div>
      <p>Your BMI is : {message}</p>
      {infos && <img src={src} alt="BMI Category" />}
    </div>
  );
}

export default Results;
