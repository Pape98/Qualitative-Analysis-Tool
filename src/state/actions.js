import * as services from './services';
import { formatQuotes } from '../utils';
import wordDocs from '../constants/ids.json';

export const actionTypes = {
  EXTRACT_QUOTES: 'EXTRACT_QUOTES',
  SEARCH_QUOTES: 'SEARCH_QUOTES',
  GET_TAGS: 'GET_TAGS',
  TOGGLE_EXTRACTOR_FORM: 'TOGGLE_EXTRACTOR_FORM',
};

export const processAllDocuments = () => {
  const docs = Object.keys(wordDocs).map(id => [id, wordDocs[id]]);
  docs.forEach(doc => extractQuotes(doc[0], doc[1]));
};

const extractQuotes = async (author, docId) => {
  console.log(author, docId);
  const quotes = await services.extractQuotes(docId);
  const formattedQuotes = formatQuotes(quotes, author);

  const tagsArr = formattedQuotes.map(q => q.tags);
  const uniqueTagsArr = [...new Set([].concat(...tagsArr))].sort();

  // Do not exist in database
  const newTags = uniqueTagsArr.filter(async tag => {
    const tagExists = await services.doesTagExist(tag);
    return tagExists === false;
  });

  await services.saveQuotes(formattedQuotes);
  await services.saveTags(newTags);

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

export const actions = {
  extractQuotes,
  getTags,
  searchQuotes,
  processAllDocuments,
};
