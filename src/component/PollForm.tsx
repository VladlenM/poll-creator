import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from './common/TextField';
import Button from './common/Button';
import { ReactComponent as AddIcon } from '../assets/images/add.svg';
import './PollForm.scss';
import { useCreatePollMutation } from '../api/pollApi';
import { addPoll } from '../store/slices/poll';

type PollFormValues = {
  question: string;
  option: string;
  error: string;
  options: string[];
}

const initialFormValues: PollFormValues = {
  question: '',
  option: '',
  options: [],
  error: '',
};

const PollForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<PollFormValues>(initialFormValues);

  const [createPoll, { data: newPoll, isLoading: createPollLoading }] = useCreatePollMutation();

  useEffect(() => {
    if (newPoll) {
      dispatch(addPoll(newPoll));
    }
  }, [newPoll]);

  const handleUpdateFormValues = (newValue: string, fieldName: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: newValue,
      error: '',
    });
  };

  const handleAddOption = (newOption: string) => {
    if (newOption && !formValues.options.some((option) => option === newOption)) {
      setFormValues({
        ...formValues,
        options: [...formValues.options, newOption],
        option: '',
        error: '',
      });
    }
  };

  const handleRemoveOption = (removeOption: string) => {
    setFormValues({
      ...formValues,
      options: formValues.options.filter((item) => item !== removeOption),
      error: '',
    });
  };

  const setError = (errorMessage: string) => {
    setFormValues({
      ...formValues,
      error: errorMessage,
    });
  };

  const handleCreatePoll = () => {
    if (formValues.options.length >= 2 && formValues.question) {
      createPoll({
        question: formValues.question,
        options: formValues.options,
      }).then(({ data }: any) => {
        if (!data.id) {
          setError('An error occurred.');
        } else {
          setFormValues(initialFormValues);
        }
      }).catch((e: any) => {
        if (e.message) {
          setError(e.message);
        }
      });
    } else {
      setError('Please check fields validity');
    }
  };

  return (
    <div className="PollFormContainer">
      <form>
        <div className="FormTitle">
          <h3>Create Your Poll</h3>
        </div>
        <div className="FormContent">
          <TextField
            name="question"
            type="text"
            label="Poll Question"
            placeholder="What should we have for lunch tomorrow?"
            value={formValues.question || ''}
            onChange={(value) => handleUpdateFormValues(value, 'question')}
          />
          <div className="OptionsSelectContainer">
            <TextField
              name="option"
              type="text"
              label="Poll Options"
              placeholder="Pizza"
              value={formValues.option || ''}
              onChange={(value) => handleUpdateFormValues(value, 'option')}
            />
            <div className="AddIconButton" role="button" onClick={() => handleAddOption(formValues.option)}>
              <AddIcon />
            </div>
          </div>
          <div className="SelectedOptionscontainer">
            {formValues.options.map((optionName, index) => (
              <div className="SelectedOption" key={index}>
                <span className="OptionName">
                  {optionName}
                </span>
                <Button label="Remove" type="link" onClick={() => handleRemoveOption(optionName)} />
              </div>
            ))}
          </div>
          {!!formValues.error && (
          <div className="ErrorContainer">
            {formValues.error }
          </div>
          )}
        </div>
        <div className="FormFooterWrapper">
          <div className="FormFooterContainer">
            <Button
              id="poll-form-submit"
              label={createPollLoading ? 'Loading' : 'Submit'}
              disabled={createPollLoading}
              onClick={handleCreatePoll}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PollForm;
