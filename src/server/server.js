import express from 'express'
import bodyParser from 'body-parser'
import path from 'path';
import history from 'connect-history-api-fallback'

const app = express();
app.use(bodyParser.json());
app.use(express.static(
    path.resolve(__dirname, '../../dist'),
    { maxAge: '1y', etag: false}
));
app.use(history());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
})
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
