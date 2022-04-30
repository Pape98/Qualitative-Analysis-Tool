import database from '../config/firebase';
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';

const collections = {
  QUOTES: 'quotes',
  TAGS: 'tags',
};

const fields = {
  TAGS: 'tags',
  NAME: 'name',
};

export const saveQuotes = async quotes => {
  try {
    const batch = writeBatch(database);
    for await (const quoteRef of quotes.map(q => {
      return addDoc(collection(database, collections.QUOTES), q);
    })) {
      batch.set(quoteRef);
    }
    await batch.commit();
  } catch (err) {
    console.log(err);
    return;
  }
};

export const extractQuotes = async docId => {
  const args = {
    fileId: docId,
    fields: 'comments(quotedFileContent(value),content,replies(content))',
    pageSize: 100,
  };

  try {
    const {
      result: { comments },
    } = await gapi.client.drive.comments.list(args);

    return comments;
  } catch (err) {
    console.log(err);
  }
};

export const saveTags = async tags => {
  try {
    const batch = writeBatch(database);

    for await (const [tagRef, name] of tags.map(tag => [
      addDoc(collection(database, fields.TAGS), { name: tag || '' }),
      tag,
    ])) {
      batch.set(tagRef, { name });
    }
    await batch.commit();
  } catch (err) {
    console.log(err);
  }
};

export const getTags = async () => {
  const tags = [];
  const querySnapshot = await getDocs(
    query(collection(database, collections.TAGS), orderBy(fields.NAME))
  );
  querySnapshot.forEach(doc => {
    tags.push(doc.data());
  });

  return tags;
};

export const searchQuotes = async tag => {
  if (tag.length === 0) return [];

  const q = query(
    collection(database, collections.QUOTES),
    where('tags', 'array-contains', tag)
  );

  const docsSnap = await getDocs(q);
  const res = [];
  docsSnap.forEach(doc => {
    res.push(doc.data());
  });

  return res;
};

export const doesTagExist = async tag => {
  const querySnapshot = await getDocs(
    query(collection(database, collections.TAGS), where('name', '==', tag))
  );

  const docs = [];

  querySnapshot.forEach(doc => {
    docs.push(doc.data());
  });

  return docs.length === 1;
};
