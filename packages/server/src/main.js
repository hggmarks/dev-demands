import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express'

const startApolloServer = async () => {

    const typeDefs = gql`
        type Client {
            id: ID!
            name: String!
        }

        type Demand {
            id: ID!
            name: String!
            client: Client!
            deadline: String
        }

        type Query {
            demands: [Demand]!
        }
    `;

    const resolvers = {
        Query: {
            demands: () => [],
        },
    };

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    const app = express();
    server.applyMiddleware({
        app,
        cors: { 
            origin: 'http://localhost:3000',
        },    
    });

    //await new Promise(resolve => app.listen({ port: 8000 }, resolve));
    app.listen(8000, () => console.log(`Server ready at http://localhost:8000${server.graphqlPath}`))
    console.log(`Server ready at http://localhost:8000${server.graphqlPath}`);
    return {server, app};

}

/*
const app = express();

const server = new ApolloServer({
    typeDefs: gql`

        type Client {
            id: ID!
            name: String!
        }

        type Demand {
            id: ID!
            name: String!
            client: Client!
            deadline: String
        }

        type Query {
            demands: [Demand]!
        }
    `,
});

server.applyMiddleware({
    app,
    cors: { 
        origin: 'http://localhost:3000',
    },
});
*/

/*
server.get('/status', (_, response) => {
    response.send({
        status: 'Okay',
    });
});

const enableCors =  cors({ origin: 'http://localhost:3000'});

server
    .options('/authenticate', enableCors)
    .post('/authenticate', enableCors, express.json(), (request, response) => {
        console.log(
            'Email', request.body.email,
            'Senha', request.body.pwd,
        );
        response.send({
            Okay: true,
        });
    });
*/



//startApolloServer().server.listen(PORT, HOSTNAME, () => {
//        console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
//    });


//const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
//const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';


//const { server, app } = startApolloServer();

//server.listen(PORT, HOSTNAME, () => {
//    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
//});

startApolloServer();