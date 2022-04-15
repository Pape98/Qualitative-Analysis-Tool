import * as services from './services';
import { formatQuotes } from '../utils';

export const actionTypes = {
  EXTRACT_QUOTES: 'EXTRACT_QUOTES',
  SEARCH_QUOTES: 'SEARCH_QUOTES',
  GET_TAGS: 'GET_TAGS',
  TOGGLE_EXTRACTOR_FORM: 'TOGGLE_EXTRACTOR_FORM',
};

const extractQuotes = async (author, docId) => {
  const quotes = await services.extractQuotes(docId);
  const formattedQuotes = formatQuotes(quotes, author);

  const tagsArr = formattedQuotes.map(q => q.tags);
  const uniqueTagsArr = [...new Set([].concat(...tagsArr))];

  await services.saveQuotes(formattedQuotes);
  await services.saveTags(uniqueTagsArr);

  const tags = await getTags();

  return { tags };
};

export const getTags = async () => {
  const tags = await services.getTags();
  return [...new Set(tags.map(tag => tag.name))];
};

export const searchQuotes = tag => {
  return services.searchQuotes(tag);
};

export const actions = { extractQuotes, getTags, searchQuotes };
