import * as services from './services';
import { formatQuotes } from '../utils';

export const actionTypes = {
  EXTRACT_QUOTES: 'EXTRACT_QUOTES',
  SEARCH_QUOTES: 'SEARCH_QUOTES',
};

const extractQuotes = async docId => {
  const quotes = await services.extractQuotes(docId);
  const formattedQuotes = formatQuotes(quotes);
  return services.saveQuotes(formattedQuotes);
};

export const actions = { extractQuotes };
