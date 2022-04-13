import { Segment, Dropdown } from 'semantic-ui-react';
import QuotesSearchDropdown from './QuotesSearchDropdown';
const QuotesSection = () => {
  return (
    <div id='quotesSection'>
      <h1>Quotes</h1>
      <QuotesSearchDropdown />
      <div className='quotesContainer'>
        
      </div>
    </div>
  );
};

export default QuotesSection;
