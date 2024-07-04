import express from 'express';
const app = express();
app.use(express.static('public'));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get('/', async (req, res) => {
  res.write(`
        <html>
          <head>
            <link rel="stylesheet" href="css/water.css">
          </head>
          <body>
            <div id="app">
              Loading
            </div>
            <script src="client.js"></script>
          </body>
        </html>`);

  await delay(1000);

  res.write(`<stream-render-fragment>
               <template> Loading. </template>
             </stream-render-fragment>`);

  await delay(1000);

  res.write(`<stream-render-fragment>
               <template> Loading.. </template>
             </stream-render-fragment>`);

  await delay(1000);

  res.write(`<stream-render-fragment>
               <template> Loading... </template>
             </stream-render-fragment>`);

  await delay(1000);

  res.write(`<stream-render-fragment>
               <template> <img src=\"mandrill.jpg\" width=\"256\" height=\"256\"/> </template>
             </stream-render-fragment>`);
  res.end();
});

app.listen(3006, () => {
  console.log(`Server is running on http://localhost:3006/`);
});
