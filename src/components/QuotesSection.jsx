import { Segment, Dropdown } from 'semantic-ui-react';
import { useDispatch, useSelector } from '../hooks';

import QuotesSearchDropdown from './QuotesSearchDropdown';
import Quote from './Quote';

const QuotesSection = () => {
  const quotes = useSelector(state => state?.quotes) || [];

  const quotesComponent = quotes.map(quote => <Quote quote={quote} />);

  return (
    <div id='quotesSection'>
      <h1>Quotes</h1>
      <QuotesSearchDropdown />
      <div className='quotesContainer'>{quotesComponent}</div>
    </div>
  );
};

export default QuotesSection;
