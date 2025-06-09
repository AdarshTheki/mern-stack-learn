import axios from 'axios';

const resolvers = {
    Todo: {
        user: async ({ userId }) => (await axios.get(`http://localhost:3000/users/${userId}`)).data,
    },
    Query: {
        getTodos: async () => (await axios.get(`http://localhost:3000/todos`)).data,
        getAllUsers: async () => (await axios.get(`http://localhost:3000/users`)).data,
        getUser: async (parent, { id }) =>
            (await axios.get(`http://localhost:3000/users/${id}`)).data,
    },
};

export { resolvers };
