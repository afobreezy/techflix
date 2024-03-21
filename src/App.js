import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import MovieDetails from "./containers/MovieDetails";
import StreamMovie from  "./containers/StreamMovie";
import Layout  from "./components/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "./redux/genres";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
    <Layout>
       <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />

          <Route  path="/movie/:id/stream" element={<StreamMovie />}/>
       </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
 