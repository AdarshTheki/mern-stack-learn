import {
    combineReducers,
    configureStore,
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';

// 1. CreateSlice : Reducing Boilerplate
// createSlice generated a reducer, action creators, and action types based on defined slice of your state.
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
});
export const { increment, decrement } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// 3. createAsyncThunk : Handling Asynchronous action
// It generates action creators for handling asynchronous operations (e.g. API calls)
export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const result = await fetch('');
    const data = await result.json();
    return data;
});
// additional used posts data, loading or pending state
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// 4. createEntityAdapter : Managing Normalized Data
// createEntityAdapter simplifies managing Normalized Data (e.g. lists of entities)
const postsAdapter = createEntityAdapter({
    selectId: (post) => post.id,
});
const posterSlice = createSlice({
    name: 'poster',
    initialState: postsAdapter.getInitialState(),
    reducers: {},
});
export const { selectAll: selectAllPosts } = postsAdapter.getInitialState((state) => state.poster);

// 2. configureStore : Simplified Store Configuration
// configureStore combines your reducers, sets up middleware, and creates the redux store.
const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsSlice.reducer,
    poster: posterSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    // middleware: [...getDefaultMiddleware(), thunkMiddleware, loggerMiddleware],
});
export { store };
