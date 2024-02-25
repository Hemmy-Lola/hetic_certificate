import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import pdf from 'html-pdf';
import cors from 'cors';
import pdfTemplate from './pdfTemplate'; 


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create-pdf', (req: Request, res: Response) => {
    const { lastname, firstname } = req.body;
    const pdfFileName = `${lastname}_${firstname}_diplome.pdf`;

    pdf.create(pdfTemplate(req.body), {}).toFile(pdfFileName, (err: Error | null) => {
        if (err) {
            res.status(500).send('Error');
        } else {
            res.status(200).send('created');
        }
    });
});


app.get('/fetch-pdf', (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/diplome.pdf`);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
