import React, { useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import Notes from '../components/Notes';
import { FirebaseContext } from '../context/firebase/FirebaseContext';

const Home = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <>
      <Form />
      <hr />
      { loading ? <Loader /> : <Notes notes={notes} /> }
    </>
  );
};
export default Home;
