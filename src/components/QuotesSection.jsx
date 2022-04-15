import { Segment, Dropdown } from 'semantic-ui-react';
import QuotesSearchDropdown from './QuotesSearchDropdown';
import Quote from './Quote';

const QuotesSection = () => {
  return (
    <div id='quotesSection'>
      <h1>Quotes</h1>
      <QuotesSearchDropdown />
      <div className='quotesContainer'>
        <Quote />
      </div>
    </div>
  );
};

export default QuotesSection;
