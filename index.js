const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const user = [
  {
    name: "john",
    kidneys: [
      {
        health: false,
      },
    ],
  },
];
app.get("/", (req, res) => {
  const johnkidneys = user[0].kidneys;
  const Nojohnkidneys = johnkidneys.length;
  let healthykidneys = 0;
  for (let i = 0; i < Nojohnkidneys; i++) {
    if (johnkidneys[i].health == true) healthykidneys++;
  }
  res.send({ Nojohnkidneys, healthykidneys });
});

app.post("/", (req, res) => {
  const ishealth = req.body.ishealth;
  user[0].kidneys.push({ health: ishealth });
  res.send("Done!");
}
);

app.delete("/", (req, res) => { 
  const newkidney=[];
  for (let i = 0; i < user[0].kidneys.lenth; i++) {
    if (user[0].kidneys[i].health)
    {
      newkidney.push({health:true});

    }
  }
  user[0].kidneys = newkidney;
  res.json("Done");
}
);
app.listen(port);
{
  console.log(`listening on ${port}`);
}
