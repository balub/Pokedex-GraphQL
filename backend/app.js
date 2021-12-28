import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

var app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
    })
);

app.listen(3000, () => {
    console.log("server running...");
});
