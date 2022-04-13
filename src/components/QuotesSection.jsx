import { Segment, Dropdown } from 'semantic-ui-react';

const QuotesSection = () => {
  return (
    <>
      <h1>Quotes</h1>
      <Dropdown placeholder='Skills' fluid multiple selection />
    </>
  );
};

export default QuotesSection;
