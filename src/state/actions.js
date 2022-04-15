import * as services from './services';
import { formatQuotes } from '../utils';

export const actionTypes = {
  EXTRACT_QUOTES: 'EXTRACT_QUOTES',
  SEARCH_QUOTES: 'SEARCH_QUOTES',
  GET_TAGS: 'GET_TAGS',
};

const extractQuotes = async docId => {
  const quotes = await services.extractQuotes(docId);
  const formattedQuotes = formatQuotes(quotes);

  const tagsArr = formattedQuotes.map(q => q.tags);
  const uniqueTagsArr = [...new Set([].concat(...tagsArr))];

  await services.saveQuotes(formattedQuotes);
  await services.saveTags(uniqueTagsArr);
};

export const getTags = async () => {
  return services.getTags();
};

export const searchQuotes = tag => {
  return services.searchQuotes(tag);
};

export const actions = { extractQuotes, getTags, searchQuotes };
