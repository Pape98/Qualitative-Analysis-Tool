import database from '../config/firebase';
import {
  writeBatch,
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

const QUOTES_COLLECTION = 'quotes';
const TAGS_COLLECTION = 'tags';
const TAGS_FIELD = 'tags';
const NAME_FIELD = 'name';

export const saveQuotes = async quotes => {
  // try {
  //   const batch = writeBatch(database);
  //   for await (const quoteRef of quotes.map(q =>
  //     addDoc(collection(database, QUOTES_COLLECTION), q)
  //   )) {
  //     batch.set(quoteRef);
  //   }
  //   await batch.commit();
  // } catch (err) {
  //   console.log(err);
  // }
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
      addDoc(collection(database, TAGS_COLLECTION), { name: tag }),
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
    query(collection(database, TAGS_COLLECTION), orderBy(NAME_FIELD))
  );
  querySnapshot.forEach(doc => {
    tags.push(doc.data());
  });

  return tags;
};

export const searchQuotes = async tags => {
  console.log(tags);
  const q = query(
    collection(database, QUOTES_COLLECTION),
    where(TAGS_FIELD, 'array-contains', tags[0])
  );

  const docsSnap = await getDocs(q);

  console.log(docsSnap);

  docsSnap.forEach(doc => {
    console.log(doc.data());
  });
};
