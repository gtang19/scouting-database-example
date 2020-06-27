const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET, //Netlify CLI will pull down the environment variables set in the dashboard for use in the local development environment
});

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    console.log("Function `submit` invoked", data);
    const item = {
      data: data,
    };

    let response = await client.query(q.Create(q.Collection("matches"), item));
    console.log("success", response);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
