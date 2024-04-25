import axios from "axios";

export const getDataStock = async (req, res) => {
    const { symbol } = req.params; 

    try {
        const response = await axios.get(`https://api.simplize.vn/api/historical/quote/${symbol}`);
        const stockData = response.data.data; 
        res.json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const seeHistoryTrade = async (req, res) => {
    const { symbol } = req.params; 

    try {
        const response = await axios.get(`https://api.simplize.vn/api/historical/ticks/${symbol}`);
        const stockData = response.data.data; 
        res.json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const summarizeInfoCompany = async (req, res) => {
    const { symbol } = req.params; 

    try {
        const response = await axios.get(`https://simplize.vn/_next/data/SeuxousHCOBF0tg6DbCPg/co-phieu/${symbol}/phan-tich.json`);
        const summary = response.data.pageProps.summary; 
        const stockData = {
            ticker: summary.ticker,
            name: summary.name,
            industryActivity: summary.industryActivity,
            bcEconomicSectorName: summary.bcEconomicSectorName,
            website: summary.website,
            mainService: summary.mainService,
            businessLine: summary.businessLine,
            businessStrategy: summary.businessStrategy,
            businessRisk: summary.businessRisk,
            stockExchange: summary.stockExchange,
            priceClose: summary.priceClose,
            netChange: summary.netChange,
            priceLow: summary.priceLow,
            priceHigh: summary.priceHigh,
            volume: summary.volume,
            pbRatio: summary.pbRatio,
            epsRatio: summary.epsRatio,
            evEbitdaRatio: summary.evEbitdaRatio,
            bookValue: summary.bookValue,
            imageUrl: summary.imageUrl,
            overallRiskLevel: summary.overallRiskLevel,
            beta5y: summary.beta5y,
            pricePctChg7d: summary.pricePctChg7d,
            pricePctChg30d: summary.pricePctChg30d,
            pricePctChgYtd: summary.pricePctChgYtd,
            pricePctChg1y: summary.pricePctChg1y,
            pricePctChg3y: summary.pricePctChg3y,
            pricePctChg5y: summary.pricePctChg5y,
            taSignal1d: summary.taSignal1d,

        }
        res.json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }

}

export const subCompany = async (req, res) => {
    const { symbol } = req.params;
    try {
        const response = await axios.get(`https://api.simplize.vn/api/company/sub-company/${symbol}`)
        const subCompany = response.data.data;

        const sub = subCompany.map(company => ({
            companyName: company.companyName,
            companyTicker: company.companyTicker,
            ratio: company.ratio,
            capital: company.capital
        }))
        res.json(sub);
        console.log(sub);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const Report = async (req, res) => {
    const { symbol } = req.params;
    try {
        const response = await axios.get(`https://simplize.vn/_next/data/kNhJnN0WwwnP8IELPUuMj/co-phieu/${symbol}/bao-cao.json`);
        const reports = response.data.pageProps.analysisReports
        console.log(reports);

        const analysis = reports.map(report => ({
            source: report.source,
            issueDate: report.issueDate,
            title: report.title,
            attachedLink: report.attachedLink,
            targetPrice: report.targetPrice,
            recommend: report.recommend
        }))
        console.log(analysis);
        res.json(analysis);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const foreignTrade = async (req, res) => {
    const { symbol } = req.params;
    try {
        const response = await axios.get(`https://api.simplize.vn/api/historical/foreign/trade/${symbol}`);
        const reports = response.data.data
        res.json(reports)
        console.log(reports)
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const shareholderStructure = async (req, res) => {
    const { symbol } = req.params
    try {
        const response = await axios.get(`https://api.simplize.vn/api/company/ownership/ownership-breakdown/${symbol}`)
        const reports = response.data.data
        res.json(reports)
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const internalTransactions = async (req, res) => {
    const { symbol } = req.params
    try {
        const response = await axios.get(`https://api.simplize.vn/api/company/ownership/insider-trading-timeline/${symbol}`)
        const reports = response.data.data
        res.json(reports)
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const internalInfor = async (req, res) => {
    const { symbol } = req.params
    try {
        const response = await axios.get(`https://api.simplize.vn/api/company/ownership/insider-transactions/${symbol}`)
        const reports = response.data.data
        res.json(reports)
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}

export const majorShareholder = async (req, res) => {
    const { symbol } = req.params
    try {
        const response = await axios.get(`https://api.simplize.vn/api/company/ownership/shareholder-fund-details/${symbol}`)
        const reports = response.data.data
        res.json(reports)
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Unable to fetch stock data' });
    }
}