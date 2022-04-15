import database from '../config/firebase';
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
  writeBatch,
  get,
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
    for await (const quoteRef of quotes.map(q =>
      addDoc(collection(database, collections.QUOTES), q)
    )) {
      batch.set(quoteRef);
    }
    await batch.commit();
  } catch (err) {
    console.log(err);
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
    window.alert(err.result.error.message);
  }
};

export const saveTags = async tags => {
  try {
    const batch = writeBatch(database);

    for await (const [tagRef, name] of tags.map(tag => [
      addDoc(collection(database, fields.TAGS), { name: tag }),
      tag,
    ])) {
      batch.set(tagRef, { name });
    }
    await batch.commit();
  } catch (err) {
    console.log('saveTags()', err);
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

export const searchQuotes = async tags => {
  // const q = query(
  //   collection(database, collections.QUOTES),
  //   where(fields.TAGS, 'array-contains', 'connecting with people')
  // );

  if (tags.length === 0) return;

  let query = database.collection(collections.TAGS);

  tags.forEach(tag => {
    query = query.where(fields.TAGS, '==', tag);
  });

  const docsSnap = await query.get();

  docsSnap.forEach(doc => {
    console.log(doc.data());
  });
};
