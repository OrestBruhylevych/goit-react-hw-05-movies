import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoviesSearhQuery } from '../services/api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      getMoviesSearhQuery(query).then(res => setMovies(res));
    }
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          setSearchParams(query !== '' ? { query: values.query } : {});
          //  actions.resetForm();
        }}
      >
        <Form>
          <Field type="text" name="query" />
          <ErrorMessage name="query" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {query && <MoviesList movies={movies} />}
    </>
  );
}
