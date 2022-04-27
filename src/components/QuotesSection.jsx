import { Loader } from 'semantic-ui-react';
import { useSelector } from '../hooks';
import { nanoid } from 'nanoid';

import QuotesSearchDropdown from './QuotesSearchDropdown';
import Quote from './Quote';

const QuotesSection = () => {
  const quotes = useSelector(state => state?.quotes) || [];

  const quotesComponent = quotes.map(quote => (
    <Quote key={nanoid()} quote={quote} />
  ));

  return (
    <div id='quotesSection'>
      <h1>Quotes</h1>
      <QuotesSearchDropdown />
      <div className='quotesContainer'>
        {quotesComponent} <Loader size='large'>Loading</Loader>
      </div>
    </div>
  );
};

export default QuotesSection;
