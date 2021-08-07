import { gql } from 'apollo-server-express';

import { typeDefs as nodeTypeDefs } from './Node/Node';
import { typeDefs as listTypeDefs } from './List/List';
import { typeDefs as clientTypeDefs} from './Client/Client';
import { typeDefs as demandsTypeDefs } from './Demand/Demand';

const typeDefs = gql`
    type Query {
        _root: String
    }

    ${nodeTypeDefs}
    ${listTypeDefs}
    ${clientTypeDefs}
    ${demandsTypeDefs}
    
`;

export default typeDefs;