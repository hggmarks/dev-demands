import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';


async function startApolloServer() {

    const server = new ApolloServer({ typeDefs, resolvers, });
    await server.start();

    const app = express();
    server.applyMiddleware({
        app,
        cors: { 
            origin: 'http://localhost:3000',
        }, 
        bodyParserConfig: true,   
    });

    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
    const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

    await new Promise(resolve => app.listen(PORT, HOSTNAME, resolve, () => {
        console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
    }));
    
    return {server, app};
}

startApolloServer();

/*
const server = express();

server.get('/status', (_, response) => {
    response.send({
        status: 'Okay',
    });
});

server.post('/authenticate', express.json(), (request, response) => {
    
    console.log(
        'Email', request.body.email,
        'senha', request.body.pwd,
    );
    
    response.send();
    
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, HOSTNAME, () => console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`));
*/