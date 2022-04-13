import database from '../config/firebase';
import {
  writeBatch,
  addDoc,
  collection,
  getDocs,
  doc,
} from 'firebase/firestore';

const QUOTES_COLLECTION = 'quotes';
const TAGS_COLLECTION = 'tags';

export const saveQuotes = async quotes => {
  try {
    const batch = writeBatch(database);

    for await (const quoteRef of quotes.map(
      q =>
        // addDoc(collection(database, QUOTES_COLLECTION), q);
        2
    )) {
      // batch.set(quoteRef);
    }
    // await batch.commit();
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
      doc(database, TAGS_COLLECTION, tag),
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
  const querySnapshot = await getDocs(collection(database, TAGS_COLLECTION));
  querySnapshot.forEach(doc => {
    tags.push(doc.data());
  });

  return tags;
};
