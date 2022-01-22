/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { ContainerLoad } from "./components/Layout/CSSContainerLoad";

const App = () => {
  const Layout = lazy(() => import("./components/Layout/Layout"));
  const HomePage = lazy(() => import("./components/HomePage/HomePage"));
  const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage"));
  const MovieDetailsPage = lazy(() =>
    import("./components/MovieDetailsPage/MovieDetailsPage")
  );
  const Cast = lazy(() => import("./components/Cast/Cast"));
  const Reviews = lazy(() => import("./components/Reviews/Reviews"));

  return (
    <>
      <Suspense
        fallback={
          <ContainerLoad>
            <Circles
              type="Circles"
              color="#2DF030"
              height={130}
              width={130}
              arialLabel="loading"
            />
            Loading...
          </ContainerLoad>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie" element={<MoviesPage />} />
            <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
