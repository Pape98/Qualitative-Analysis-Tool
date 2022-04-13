import database from '../config/firebase';
import { writeBatch, addDoc, collection } from 'firebase/firestore';

const QUOTES_COLLECTION = 'quotes';

export const saveQuotes = async quotes => {
  try {
    const batch = writeBatch(database);
    console.log(quotes.length);
    quotes.forEach(quote => {});

    for await (const quoteRef of quotes.map(q =>
      addDoc(collection(database, QUOTES_COLLECTION), q)
    )) {
      batch.set(quoteRef);
    }

    return batch.commit();
  } catch (err) {
    window.alert(err.result.error.message);
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
