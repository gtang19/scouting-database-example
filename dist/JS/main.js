//Ignore most of this it's not important
//Don't worry about the messy static code
let data = {
  A: 0,
  B: 0,
  C: 0,
};

const buttons = document.querySelectorAll(".entry a");
buttons.forEach((b) => {
  b.addEventListener("click", () => {
    addVal(b);
  });
});

function addVal(self) {
  let dataName = self.getAttribute("data-name");
  data[dataName] += 1;
  self.innerHTML = data[dataName];
}

document.getElementById("finish").addEventListener("click", () => {
  document.querySelector(".dataentry").style.display = "none";
  document.getElementById("finish").style.display = "none";
  document.getElementById("collected").style.display = "inline";
  document.getElementById("dataarea").innerHTML = JSON.stringify(data);
});

document.getElementById("refresh").addEventListener("click", () => {
  location.reload();
});

document.getElementById("submit").addEventListener("click", handleSubmit);
document.getElementById("viewdb").addEventListener("click", viewData);

async function handleSubmit() {
  let submitted = await submitData();
  console.log(`Data submitted. Response from database: `, submitted);
  viewData();
}

async function viewData() {
  let allData = await getData();
  console.log(`Data recieved: `, allData);
  document.getElementById("collected").style.display = "none";
  document.querySelector(".dataentry").style.display = "none";
  document.getElementById("finish").style.display = "none";
  document.getElementById("viewdb").style.display = "none";
  document.getElementById("viewdata").style.display = "inline";
  allData.data.forEach((d) => {
    let node = document.createElement("LI");
    node.innerHTML = JSON.stringify(d.data);
    document.getElementById("databaseview").appendChild(node);
  });
}

//These functions are the important stuff
async function submitData() {
  let res = await fetch("./.netlify/functions/handleDatabase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let body = await res.json(); //this NEEDS to be async. Most common functions are going to be json() and text()
  return body;
}

async function getData() {
  let res = await fetch("./.netlify/functions/handleDatabase"); //GET method by default
  let body = await res.json();
  return body;
}
