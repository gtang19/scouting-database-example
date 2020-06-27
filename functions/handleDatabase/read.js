const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET, //Netlify CLI will pull down the environment variables set in the dashboard for use in the local development environment
});

exports.handler = async (event, context) => {
  try {
    console.log("Function `read` invoked");

    let response = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("matches"))),
        q.Lambda((x) => q.Get(x))
      )
    );
    console.log("success", response);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
