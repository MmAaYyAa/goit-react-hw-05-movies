import { useState } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { Notify } from 'notiflix';
//import { useSearchParams,} from 'react-router-dom';


export default function Searchbar({onSubmit}) {
  const[inputQuery, setInputQuery] = useState('')
  //const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = event => {
    setInputQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputQuery.trim() === '') {
      Notify.info('Enter your request');
      return;
    }
    onSubmit(inputQuery.trim());
    setInputQuery('');
  };

    return (
      <div>
        <SearchbarHeader>
          <SearchForm  onSubmit={handleSubmit}>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel>
                Search
              </SearchFormButtonLabel>
            </SearchFormButton>
            <SearchFormInput
              onChange={handleInputChange}
              value={inputQuery}
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </SearchForm>
        </SearchbarHeader>
      </div>
    );
  
}