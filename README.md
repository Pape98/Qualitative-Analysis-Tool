
# Qualitative Analysis Tool
For my master's research, I had to conduct some user interviews and analyze the data. Analyzing consisted adding codes/tags to important quotes in order to generate categories and subsequently themes. The tagging process was done using Google Docs by just adding comments to quotes. The next step was to combine all the quotes with similar codes/tags. Instead of manuallay combining the quotes, I extracted all the quotes along with their tags from different documenst using the Google Drive API and created this interface to be able  to quickly search access quotes with wanted tags.'

## Installation

Install by doing the following commands:

```bash
  git clone git@github.com:Pape98/Qualitative-Analysis-Tool.git
  yarn
  yarn start
```

You will need to [create your own firebase web app project](https://cloud.google.com/firestore/docs/client/get-firebase) and in change the configuration in `/configuration/firebase.js`.' This firebase app needs to be tied to a Google cloud project.
 
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`: Your Google Cloud Project's API key.

`REACT_APP_CLIENT_ID`: Your Google Cloud Project's client ID.


## Authors

- [@Pape98](https://www.github.com/pape98)

