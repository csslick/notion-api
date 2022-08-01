// const CROS = 'https://cors-anywhere.herokuapp.com/'
const CROS = ''
const NOTION_TOKEN = 'secret_V7jX90Mu3o79uutcHlNmvecbrG6FIBxOKragt6IYPYP'
const NOTION_DB_ID = '2a9e781c8d154ef6a3ff56bd90471a18'

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + NOTION_TOKEN,
  },
  body: JSON.stringify({page_size: 100})
};

fetch(`${CROS}https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));