const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET, //Netlify CLI will pull down the environment variables set in the dashboard for use in the local development environment
});
async function runTest() {
  try {
    const data = {
      d: "testing",
    };
    console.log("Function `submit` invoked", data);
    const item = {
      data: data,
    };

    let response = await client.query(q.Create(q.Collection("matches"), item));
    console.log("success", response);
  } catch (err) {
    console.log(err);
  }
}

runTest();
