/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Layout/Loader";
const App = () => {
  const Layout = lazy(() => import("./components/Layout/Layout"));
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
  const MovieDetailsPage = lazy(() =>
    import("./pages/MovieDetailsPage/MovieDetailsPage")
  );
  const Cast = lazy(() => import("./components/Cast/Cast"));
  const Reviews = lazy(() => import("./components/Reviews/Reviews"));

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie" element={<MoviesPage />} />
            <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
