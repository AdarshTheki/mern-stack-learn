### REDUX Principle: 
- Redux is really:
  *  A single store containing "global" state
  *  Dispatching plain object actions to the store when something happens in the app
  *  Pure reducer functions looking at those actions and returning immutably updated state

- Process Redux used
  *  `createStore` to actually create a Redux store
  *  `combineReducers` to combine multiple slice reducers into a single larger reducer
  *  `applyMiddleware` to combine multiple middleware into a store enhancer
  *  `compose` to combine multiple store enhancers into a single store enhancer
 
### Progressive Image:
```jsx
  const { width, smallImage, largeImage } = props;
  const [imgSrc, setSrc] = useState(smallImage || largeImage);

  // create Custom ClassName and response when image change smooth with blur effect
  const customClass = smallImage && largeImage === smallImage ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = largeImage;
    img.onload = () => {
      setSrc(largeImage);
    };
  }, [largeImage]);

// width, imgSrc, customClass
```

### Custom API Handler with axios:
```jsx
  const CustomReactQuery = (urlPath) => {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(urlPath, {
          signal: controller.signal,
        });
        setProducts(response?.data);
        console.log(response?.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('req canceled:- ', error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // clean up code // Race condition avoid
    return () => controller.abort();
  }, [urlPath]);

  return { products, loading, error };
};

```

### React Router DOM:
- Active Link:
```js
<NavLink style={(isActive) => ({ color: isActive ? "green" : "blue",})} to='/' >
  Home
</NavLink>
```
- Router Manage:
```jsx
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";

const router = createBrowserRouter([
   {
     path: "/",
     element: <App />,
     children: [
       { path: "", element: <Home /> },
       { path: "about", element: <About /> },
     ],
   },
 ]);

// Router Manage type 2:

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path=':id' element={<About />} />
            <Route loader={githubLoader} path='github' element={<Github />} />
        </Route>
    )
);

// <RouterProvider router={router} />
// loader={githubLoader}
// Data used to import { useLoaderData } from "react-router-dom";
```
- Protect Routes
```jsx
const ProtectedRoute = ({ isAllowed, redirectPath = "/landing", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  // return children;
  return children ? children : <Outlet />;
};

<Route element={<ProtectedRoute isAllowed={user} />}>
      <Route path='home' element={<Home />} />
      <Route path='dashboard' element={<Dashboard />} />
</Route>

<Route  path='analytics' element={
              <ProtectedRoute redirectPath='/home' isAllowed={user}>
                <Analytics />
              </ProtectedRoute>
            }
/>
```
