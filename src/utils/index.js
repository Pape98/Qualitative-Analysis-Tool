const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/drive';

export const handleClientLoad = setIsSignedIn => {
  const initClient = () => {
    gapi.client
      .init({
        apiKey: process.env.REACT_APP_API_KEY,
        clientId: process.env.REACT_APP_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(setIsSignedIn);

          // Handle the initial sign-in state.
          setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) {
          console.log(error);
        }
      );
  };

  gapi.load('client:auth2', initClient);
};

export const formatQuotes = comments => {
  const res = [];

  comments.forEach(comment => {
    const data = {
      text: comment.quotedFileContent?.value.replaceAll('&#39;', "'"),
    };
    const tags = [];
    comment.replies.forEach(reply => {
      tags.push(reply.content);
    });
    tags.push(comment.content);
    data['tags'] = tags;
    res.push(data);
  });

  return res;
};
