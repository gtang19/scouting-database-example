// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    //pass through to other functions based on HTTP status
    switch (event.httpMethod) {
      case "GET":
        return require("./read").handler(event, context);
      case "POST":
        return require("./submit").handler(event, context);
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
