import express from "express";
import { graphqlHTTP } from "express-graphql";
import { cors } from "cors";
import { schema } from "./schema/schema.js";

var app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("server running...");
});
