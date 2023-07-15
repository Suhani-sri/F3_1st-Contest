function OpeningCeremony(callback) {
    console.log("Let the games begin");
    setTimeout(function() {
      let score = { red: 0, blue: 0, green: 0, yellow: 0 };
      console.log("Score at Opening Ceremony: ", score);
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    console.log("Race 100M");
    setTimeout(function() {
      let times = { red: getRandomInt(10, 15), blue: getRandomInt(10, 15), green: getRandomInt(10, 15), yellow: getRandomInt(10, 15) };
      console.log("Race times: ", times);
      let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
      let firstColor = sortedTimes[0][0];
      let secondColor = sortedTimes[1][0];
      score[firstColor] += 50;
      score[secondColor] += 25;
      console.log(`${firstColor} won the Race 100M with a time of ${times[firstColor]} seconds and gets 50 points`);
      console.log(`${secondColor} came second with a time of ${times[secondColor]} seconds and gets 25 points`);
      console.log("Updated score after Race 100M: ", score);
      callback(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    console.log("Long Jump");
    setTimeout(function() {
        let color = getRandomColor();
        score[color] += 150;
        console.log(`${color} won the Long Jump and gets 150 points`);
        console.log("Updated score after Long Jump: ", score);
        callback(score, HighJump);
      }, 2000);
    }
    
    function HighJump(score, callback) {
      console.log("High Jump");
      let color = prompt("What color secured the highest jump? (red, blue, green, or yellow)");
      if (color !== null && color !== "" && color !== undefined) {
        color = color.toLowerCase();
        if (Object.keys(score).includes(color)) {
          score[color] += 100;
          console.log(`${color} secured the highest jump and gets 100 points`);
        } else {
          console.log("Invalid color entered, event was cancelled");
        }
      } else {
        console.log("Event was cancelled");
      }
      console.log("Updated score after High Jump: ", score);
      callback(score, AwardCeremony);
    }
    
    function AwardCeremony(score) {
        console.log("Award Ceremony");
        console.log(`Yellow came first with ${score.yellow} points`);
        console.log(`Red came second with ${score.red} points`);
        console.log(`Green came third with ${score.green} points`);
        console.log(`Blue came last with ${score.blue} points`);
        console.log("Final score: ", score);
      }
      
      // Helper functions
      
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      function getRandomColor() {
        let colors = ["red", "blue", "green", "yellow"];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      // Calling the OpeningCeremony function to start the event
      OpeningCeremony(LongJump);