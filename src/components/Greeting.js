import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingMessage } from '../store/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.value);

  useEffect(() => {
    dispatch(getGreetingMessage());
  }, [dispatch]);
  return (
    <div>
      <h2>Hello Dear : This is our Greeting Message</h2>
      <div>{greeting}</div>
    </div>
  );
};

export default Greeting;
