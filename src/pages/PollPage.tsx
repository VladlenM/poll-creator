import React, { useEffect, useState } from 'react';
import './PollPage.scss';
import { useDispatch } from 'react-redux';
import { useGetPollsQuery } from '../api/pollApi';
import { useAppSelector } from '../store/hooks';
import { setPolls } from '../store/slices/poll';
import PollForm from '../component/PollForm';
import Button from '../component/common/Button';

const PollPage = () => {
  const dispatch = useDispatch();
  const [showPolls, setShowPolls] = useState(false);

  const existingPolls = useAppSelector((state) => state.poll);
  const { data } = useGetPollsQuery(null);

  useEffect(() => {
    if (!existingPolls.length && Array.isArray(data) && data.length) {
      dispatch(setPolls(data));
    }
  }, [data]);

  return (
    <div className="PollPageWrapper">
      <PollForm />

      <div className="ExistedPollsWrapper">
        <Button label="Show created polls" onClick={() => setShowPolls(!showPolls)} />

        {showPolls && (
          <div className="ExistedPollsContainer">
            {existingPolls.map((item) => (
              <pre>
                {JSON.stringify(item)}
              </pre>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PollPage;
