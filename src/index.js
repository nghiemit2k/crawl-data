
import express from 'express';
import { getDataStock, summarizeInfoCompany, subCompany, Report, foreignTrade, shareholderStructure, internalTransactions, internalInfor, majorShareholder } from './controller/fpt/index.js';
import { seeHistoryTrade } from './controller/fpt/index.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/stock/:symbol', getDataStock);
app.get('/stock/historical/:symbol', seeHistoryTrade);
app.get('/stock/summary/:symbol', summarizeInfoCompany)
app.get('/stock/sub-company/:symbol', subCompany);
app.get('/stock/report/:symbol', Report);
app.get('/stock/foreign/:symbol', foreignTrade);
app.get('/stock/shareholder/:symbol', shareholderStructure);
app.get('/stock/internal/:symbol', internalTransactions)
app.get('/stock/internal-info/:symbol', internalInfor)
app.get('/stock/major-shareholder/:symbol', majorShareholder)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

