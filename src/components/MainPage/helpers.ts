
const colorCodes = [
    '#FFC0CB',
    '#ADD8E6',
    '#C6F4D6',
    '#D2B48C',
    '#D3D3D3',
    '#FFFACD',
    '#B5AFEE',
    'F0B74C'
];

export const fetchData = async () => {
    try {
        console.log('1111111111111111')
        // const response = await fetch('https://financialmodelingprep.com/api/v3/search?query=AA&apikey=FTpDDg9vsIYNf2Ben0i3M0gulIBzRFgS');
        // if (!response.ok) {
        //     throw new Error('Network response was not ok ' + response.statusText);
        // }
        // return await response.json();
        return [
            {
                "symbol": "AA",
                "name": "Alcoa Corporation",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAU",
                "name": "Almaden Minerals Ltd.",
                "currency": "USD",
                "stockExchange": "American Stock Exchange",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "AAT",
                "name": "American Assets Trust, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAP",
                "name": "Advance Auto Parts, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAN",
                "name": "The Aaron's Company, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAM",
                "name": "American Axle & Manufacturing Hldngs Inc",
                "currency": null,
                "stockExchange": null,
                "exchangeShortName": null
            },
            {
                "symbol": "AAL",
                "name": "American Airlines Group Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAC",
                "name": "Ares Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAA",
                "name": "AXS First Priority CLO Bond ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "AAXT",
                "name": "Aamaxan Transport Group, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAXJ",
                "name": "iShares MSCI All Country Asia ex Japan ETF",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAWW",
                "name": "Atlas Air Worldwide Holdings, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAWH",
                "name": "Ascend Wellness Holdings, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AATV",
                "name": "Adaptive Ad Systems, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AATP",
                "name": "Agape ATP Corporation",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "OTC"
            },
            {
                "symbol": "AATC",
                "name": "Autoscope Technologies Corporation",
                "currency": "USD",
                "stockExchange": "OTC Markets OTCQX",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AASP",
                "name": "Global Acquisitions Corporation",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAQC",
                "name": "Accelerate Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAPY",
                "name": "Kurv Yield Premium Strategy Apple (AAPL) ETF",
                "currency": "USD",
                "stockExchange": "Cboe US",
                "exchangeShortName": "ETF"
            },
            {
                "symbol": "AAPU",
                "name": "Direxion Daily AAPL Bull 1.5X Shares",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAPT",
                "name": "All American Pet Company, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAPL",
                "name": "Apple Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAPJ",
                "name": "AAP, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAPD",
                "name": "Direxion Daily AAPL Bear 1X Shares",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAPB",
                "name": "GraniteShares ETF Trust - GraniteShares 2x Long Tilray Daily ETF",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAON",
                "name": "AAON, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAOI",
                "name": "Applied Optoelectronics, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAMU",
                "name": "AA Mission Acquisition Corp",
                "currency": null,
                "stockExchange": null,
                "exchangeShortName": null
            },
            {
                "symbol": "AAME",
                "name": "Atlantic American Corporation",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAMC",
                "name": "Altisource Asset Management Corporation",
                "currency": "USD",
                "stockExchange": "American Stock Exchange",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "AAIN",
                "name": "Arlington Asset Investment Corp",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAIC",
                "name": "Arlington Asset Investment Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAGR",
                "name": "African Agriculture Holdings Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAGH",
                "name": "America Great Health",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "OTC"
            },
            {
                "symbol": "AAGC",
                "name": "All American Gold Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AADR",
                "name": "AdvisorShares Dorsey Wright ADR ETF",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AADI",
                "name": "Aadi Bioscience, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AACT",
                "name": "Ares Acquisition Corporation II",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AACS",
                "name": "American Commerce Solutions, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AACI",
                "name": "Armada Acquisition Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AACG",
                "name": "ATA Creativity Global",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AABB",
                "name": "Asia Broadband, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAAU",
                "name": "Goldman Sachs Physical Gold ETF",
                "currency": "USD",
                "stockExchange": "BATS",
                "exchangeShortName": "ETF"
            },
            {
                "symbol": "AAZ.V",
                "name": "Azincourt Energy Corp.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange Ventures",
                "exchangeShortName": "TSXV"
            },
            {
                "symbol": "AAZ.L",
                "name": "Anglo Asian Mining PLC",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAYYY",
                "name": "Australian Agricultural Company Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAX.V",
                "name": "Advance Lithium Corp.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange Ventures",
                "exchangeShortName": "TSXV"
            },
            {
                "symbol": "AAVXF",
                "name": "ABIVAX Société Anonyme",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAVVF",
                "name": "Advantage Energy Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAVMY",
                "name": "ABN AMRO Bank N.V.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAU.V",
                "name": "Angold Resources Ltd.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange Ventures",
                "exchangeShortName": "TSXV"
            },
            {
                "symbol": "AAU.L",
                "name": "Ariana Resources plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAUKF",
                "name": "Anglo American plc",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAUGF",
                "name": "Angold Resources Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAT.V",
                "name": "ATI Airtest Technologies Inc.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange Ventures",
                "exchangeShortName": "TSXV"
            },
            {
                "symbol": "AATRL",
                "name": "Amg Capital Trust II",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AATGF",
                "name": "ATI Airtest Technologies Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AASZF",
                "name": "Atlantic Sapphire ASA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAS.L",
                "name": "abrdn Asia Focus plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AASCX",
                "name": "Thrivent Mid Cap Stock Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AARTY",
                "name": "Airtel Africa Plc",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AARTX",
                "name": "Stone Ridge Trust VIII",
                "currency": "USD",
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAQCW",
                "name": "Accelerate Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AANTX",
                "name": "American Funds 2060 Target Date Retirement Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AANNF",
                "name": "Aroundtown SA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAMTF",
                "name": "Armada Mercantile Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAMMF",
                "name": "Almadex Minerals Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAMAF",
                "name": "Atlas Mara Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AALTX",
                "name": "American Funds 2050 Trgt Date Retire A",
                "currency": "USD",
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAL.L",
                "name": "Anglo American plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AALBF",
                "name": "Aalberts N.V.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAISX",
                "name": "American Beacon International Equity Fund Advisor Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAIRF",
                "name": "American Aires Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAIPX",
                "name": "American Beacon International Equity Fund Investor Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAIIQ",
                "name": "Alabama Aircraft Industries, Inc",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAIGF",
                "name": "AIA Group Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAIEX",
                "name": "American Beacon International Equity Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAIDX",
                "name": "Axonic Alternative Income Fund",
                "currency": "USD",
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAG.V",
                "name": "Aftermath Silver Ltd.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange Ventures",
                "exchangeShortName": "TSXV"
            },
            {
                "symbol": "AAGTX",
                "name": "American Funds 2040 Target Date Retirement Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAGRY",
                "name": "PT Astra Agro Lestari Tbk",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAGRW",
                "name": "African Agriculture Holdings Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAGPX",
                "name": "American Beacon Large Cap Value Fund Investor Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAGIY",
                "name": "AIA Group Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAGFF",
                "name": "Aftermath Silver Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAGEF",
                "name": "AAG Energy Holdings Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAFTX",
                "name": "American Funds 2035 Target Date Retirement Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAFRF",
                "name": "Airtel Africa Plc",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAF.L",
                "name": "Airtel Africa Plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAEEF",
                "name": "Altair Resources Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AADEX",
                "name": "American Beacon Large Cap Value R5",
                "currency": "USD",
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AADBX",
                "name": "American Beacon Balanced Fund R5 Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AACTF",
                "name": "Aurora Solar Technologies Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AACQU",
                "name": "Artius Acquisition Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AACIW",
                "name": "Armada Acquisition Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AACIU",
                "name": "Armada Acquisition Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AACAY",
                "name": "AAC Technologies Holdings Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AACAF",
                "name": "AAC Technologies Holdings Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AABVF",
                "name": "Aberdeen International Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AABPX",
                "name": "American Beacon Balanced Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AAALY",
                "name": "Aareal Bank AG",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAALF",
                "name": "Aareal Bank AG",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AAACX",
                "name": "Alpha Alternative Assets Fund",
                "currency": "USD",
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AA4.L",
                "name": "Amedeo Air Four Plus Limited",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAGUSD",
                "name": "AAG USD",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "AAV.TO",
                "name": "Advantage Energy Ltd.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange",
                "exchangeShortName": "TSX"
            },
            {
                "symbol": "AAVC.L",
                "name": "Albion Venture Capital Trust PLC",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAV.BK",
                "name": "Asia Aviation Public Company Limited",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "AAU.AX",
                "name": "Antilles Gold Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAT.WA",
                "name": "Alta S.A.",
                "currency": "PLN",
                "stockExchange": "Warsaw Stock Exchange",
                "exchangeShortName": "WSE"
            },
            {
                "symbol": "AATG.L",
                "name": "Albion Technology & General VCT PLC",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AASU.L",
                "name": "Amundi Index Solutions - Amundi MSCI Em Asia UCITS ETF-C USD",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AASG.L",
                "name": "Amundi Index Solutions - Amundi MSCI Em Asia UCITS ETF-C USD",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAR.AX",
                "name": "Astral Resources NL",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAPS.L",
                "name": "Leverage Shares 3x Short Apple (AAPL) ETP Securities",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAPL.L",
                "name": "LEVERAGE SHARES PUBLIC LIMITED ",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAPE.L",
                "name": "Leverage Shares 2x Apple ETC A",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAP.AX",
                "name": "Australian Agricultural Projects Ltd",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAP3.L",
                "name": "Leverage Shares 3x Apple ETC",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAP2.L",
                "name": "Leverage Shares 2x Apple ETC A",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAP1.L",
                "name": "LEVERAGE SHARES PUBLIC LIMITED ",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAM.SW",
                "name": "Anglo American plc",
                "currency": "CHF",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "AAM-PB",
                "name": "Apollo Global Management, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAM-PA",
                "name": "Apollo Global Management, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAM.AX",
                "name": "AuMEGA Metals Ltd",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AALI.V",
                "name": "Advance Lithium Corp.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange Ventures",
                "exchangeShortName": "TSXV"
            },
            {
                "symbol": "AAL.BO",
                "name": "A-1 Acid Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AAL.AX",
                "name": "Alfabs Australia Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAK.ST",
                "name": "AAK AB (publ.)",
                "currency": "SEK",
                "stockExchange": "Stockholm Stock Exchange",
                "exchangeShortName": "STO"
            },
            {
                "symbol": "AAJ.AX",
                "name": "Aruma Resources Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAIF.L",
                "name": "abrdn Asian Income Fund Limited",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAI.BK",
                "name": "Asian Alliance International Public Company Limited",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "AAI.AX",
                "name": "Alcoa Corporation",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAG.DE",
                "name": "Aumann AG",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "AAEV.L",
                "name": "Albion Enterprise VCT PLC",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AADV.L",
                "name": "Albion Development VCT PLC",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAD.DE",
                "name": "Amadeus FiRe AG",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "AAC-WT",
                "name": "Ares Acquisition Corporation Re",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAC-UN",
                "name": "Ares Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAC.ST",
                "name": "AAC Clyde Space AB (publ)",
                "currency": "SEK",
                "stockExchange": "Stockholm Stock Exchange",
                "exchangeShortName": "STO"
            },
            {
                "symbol": "AAC.PA",
                "name": "Accor Acquisition Company S.A.",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "AAC.AX",
                "name": "Australian Agricultural Company Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAB.TO",
                "name": "Aberdeen International Inc.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange",
                "exchangeShortName": "TSX"
            },
            {
                "symbol": "AAB.CO",
                "name": "Aalborg Boldspilklub A/S",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "AAAP.L",
                "name": "Anglo African Agriculture Plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AAA.PA",
                "name": "Alan Allman Associates",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "AAA.AX",
                "name": "BetaShares Australian High Interest Cash ETF",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "AAA.AS",
                "name": "AP Alternative Assets LP",
                "currency": "USD",
                "stockExchange": "Amsterdam",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "AAVEUSD",
                "name": "Aave USD",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "AARTUSD",
                "name": "ALL.ART",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "AAUC.TO",
                "name": "Allied Gold Corporation",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange",
                "exchangeShortName": "TSX"
            },
            {
                "symbol": "AASI.PA",
                "name": "Amundi Index Solutions - Amundi MSCI Em Asia",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "AASB.OL",
                "name": "Aasen Sparebank",
                "currency": "NOK",
                "stockExchange": "Oslo Stock Exchange",
                "exchangeShortName": "OSL"
            },
            {
                "symbol": "AAQC-WT",
                "name": "Accelerate Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAQC-UN",
                "name": "Accelerate Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAQ1.DE",
                "name": "aap Implantate AG",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "AAPL.NE",
                "name": "Apple Inc.",
                "currency": "CAD",
                "stockExchange": "NEO",
                "exchangeShortName": "NEO"
            },
            {
                "symbol": "AAPL.MX",
                "name": "Apple Inc.",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "AAPL.DE",
                "name": "15994",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "AALI.JK",
                "name": "PT Astra Agro Lestari Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "AALB.AS",
                "name": "Aalberts N.V.",
                "currency": "EUR",
                "stockExchange": "Amsterdam",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "AAIL.BO",
                "name": "Akar Auto Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AAIC-PC",
                "name": "Arlington Asset Investment Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAIC-PB",
                "name": "Arlington Asset Investment Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AADA.SW",
                "name": "21Shares Cardano ETP",
                "currency": "CHF",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "AADA.PA",
                "name": "21Shares Cardano ETP",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "BRU"
            },
            {
                "symbol": "AACT-UN",
                "name": "Ares Acquisition Corporation II",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AAAK.AT",
                "name": "Wool Industry Tria Alfa S.A.",
                "currency": "EUR",
                "stockExchange": "Athens",
                "exchangeShortName": "ATH"
            },
            {
                "symbol": "AAVAS.NS",
                "name": "Aavas Financiers Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AAVAS.BO",
                "name": "Aavas Financiers Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AARVI.NS",
                "name": "Aarvi Encon Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARON.NS",
                "name": "Aaron Industries Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AALR3.SA",
                "name": "Centro de Imagem Diagnósticos S.A.",
                "currency": "BRL",
                "stockExchange": "São Paulo",
                "exchangeShortName": "SAO"
            },
            {
                "symbol": "AAYUSH.BO",
                "name": "Aayush Food and Herbs Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AASHKA.BO",
                "name": "Aashka Hospitals Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AARNAV.BO",
                "name": "AARNAV FASHIONS LIMITED",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AALLON.HE",
                "name": "Aallon Group Oyj",
                "currency": "EUR",
                "stockExchange": "Helsinki",
                "exchangeShortName": "HEL"
            },
            {
                "symbol": "AAKASH.NS",
                "name": "Aakash Exploration Services Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARTECH.NS",
                "name": "Aartech Solonics Ltd",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARTECH.BO",
                "name": "Aartech Solonics Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AADIIND.BO",
                "name": "Aadi Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AAATECH.NS",
                "name": "AAA Technologies Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AAATECH.BO",
                "name": "AAA Technologies Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AASTAFIN.BO",
                "name": "Aastamangalam Finance Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AARTIIND.NS",
                "name": "Aarti Industries Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARTIIND.BO",
                "name": "Aarti Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AARSHYAM.BO",
                "name": "Aar Shyam India Investment Com",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AADA-USD.SW",
                "name": "21Shares Cardano ETP",
                "currency": "USD",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "AADA-USD.AS",
                "name": "21Shares Cardano ETP",
                "currency": "USD",
                "stockExchange": "Amsterdam",
                "exchangeShortName": "AMS"
            },
            {
                "symbol": "AARVEEDEN.NS",
                "name": "Aarvee Denims and Exports Ltd.",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARVEEDEN.BO",
                "name": "Aarvee Denims and Exports Ltd.",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AARTISURF.NS",
                "name": "Aarti Surfactants Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARTISURF.BO",
                "name": "Aarti Surfactants Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AARTIPHARM.NS",
                "name": "Aarti Pharmalabs Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARTIPHARM.BO",
                "name": "Aarti Pharmalabs Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AARTIDRUGS.NS",
                "name": "Aarti Drugs Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AARTIDRUGS.BO",
                "name": "Aarti Drugs Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AAREYDRUGS.NS",
                "name": "Aarey Drugs & Pharmaceuticals Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AAPLUSTRAD.BO",
                "name": "AA Plus Tradelink Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AANCHALISP.BO",
                "name": "Aanchal Ispat Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AANANDALAK.BO",
                "name": "Aananda Lakshmi Spinning Mills Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "AIR",
                "name": "AAR Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "0NX1.IL",
                "name": "Aalberts N.V.",
                "currency": "EUR",
                "stockExchange": "International Order Book",
                "exchangeShortName": "IOB"
            },
            {
                "symbol": "GHSTUSD",
                "name": "Aavegotchi USD",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "ARLN.F",
                "name": "Aareal Bank AG",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "ARLN.DE",
                "name": "Aareal Bank AG",
                "currency": "EUR",
                "stockExchange": "XETRA",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "ARL.DE",
                "name": "Aareal Bank AG",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "ARHUF",
                "name": "AAK AB (publ.)",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "FOMOUSD",
                "name": "Aavegotchi FOMO",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "FUDUSD",
                "name": "Aavegotchi FUD USD",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "TRFM",
                "name": "AAM Transformers ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "6579.TW",
                "name": "AAEON Technology Inc.",
                "currency": "TWD",
                "stockExchange": "Taiwan",
                "exchangeShortName": "TAI"
            },
            {
                "symbol": "ROCAF",
                "name": "Aardvark Ventures Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AHCS.QA",
                "name": "Aamal Company Q.P.S.C.",
                "currency": "QAR",
                "stockExchange": "Qatar",
                "exchangeShortName": "DOH"
            },
            {
                "symbol": "ACCMF",
                "name": "AAC Clyde Space AB (publ)",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "2686.HK",
                "name": "AAG Energy Holdings Limited",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "2018.HK",
                "name": "AAC Technologies Holdings Inc.",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "0GFN.L",
                "name": "AAC CLYDE SPACE AB AAC CLYDE SP",
                "currency": "SEK",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "BDIV",
                "name": "AAM Brentview Dividend Growth ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "SPDV",
                "name": "AAM S&P 500 High Dividend Value ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "AH-R.BK",
                "name": "AAPICO Hitech Public Company Limited",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "AH.BK",
                "name": "AAPICO Hitech Public Company Limited",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "AREYDRG.BO",
                "name": "Aarey Drugs & Pharmaceuticals Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "603580.SS",
                "name": "AA Industrial Belting (Shanghai) Co.,Ltd",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "SAWS",
                "name": "AAM Sawgrass U.S. Small Cap Quality Growth ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "SAWG",
                "name": "AAM Sawgrass U.S. Large Cap Quality Growth ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "EEMD",
                "name": "AAM S&P Emerging Markets High Dividend Value ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "SMIG",
                "name": "AAM Bahl & Gaynor Small/Mid Cap Income Growth ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "DMDV",
                "name": "AAM S&P Developed Markets High Dividend Value ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "PFLD",
                "name": "AAM Low Duration Preferred and Income Securities ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "UAA",
                "name": "Under Armour, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "SAA",
                "name": "ProShares Ultra SmallCap600",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "PAA",
                "name": "Plains All American Pipeline, L.P.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAA",
                "name": "Mid-America Apartment Communities, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "IAA",
                "name": "IAA, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "GAA",
                "name": "Cambria Global Asset Allocation ETF",
                "currency": "USD",
                "stockExchange": "BATS",
                "exchangeShortName": "ETF"
            },
            {
                "symbol": "CAA",
                "name": "1152",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "ZAAG",
                "name": "ZA Group Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "TAAG",
                "name": "Trend Aggregation Growth ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "RAAX",
                "name": "VanEck Inflation Allocation ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "RAAS",
                "name": "Cloopen Group Holding Limited",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "RAAC",
                "name": "Revolution Acceleration Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "PAAS",
                "name": "Pan American Silver Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "NAAS",
                "name": "NaaS Technology Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "NAAC",
                "name": "North Atlantic Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAAX",
                "name": "VanEck Muni Allocation ETF",
                "currency": "USD",
                "stockExchange": "BATS",
                "exchangeShortName": "ETF"
            },
            {
                "symbol": "MAAQ",
                "name": "Mana Capital Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAAL",
                "name": "The Marketing Alliance, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MAAC",
                "name": "Montes Archimedes Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LAAC",
                "name": "Lithium Americas (Argentina) Corp.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "LAAB",
                "name": "Startech Labs, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "LAAA",
                "name": "Lakeshore Acquisition I Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "JAAA",
                "name": "Janus Henderson AAA CLO ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "HAAC",
                "name": "Health Assurance Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FAAS",
                "name": "DigiAsia Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FAAR",
                "name": "First Trust Alternative Absolute Return Strategy ETF",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "DAAT",
                "name": "DAC Technologies Group International, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "CAAS",
                "name": "China Automotive Systems, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CAAP",
                "name": "Corporación América Airports S.A.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "XAARF",
                "name": "Xaar plc",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "WAAEX",
                "name": "Wasatch Small Cap Growth Fund Investor Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TAALF",
                "name": "Taal Distributed Information Technologies Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "TAAIX",
                "name": "Thrivent Aggressive Allocation Fund Class S",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TAAGX",
                "name": "Timothy Plan Aggressive Growth Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TAAAX",
                "name": "Thrivent Aggressive Allocation Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SAA.L",
                "name": "M&C Saatchi plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "SAAGF",
                "name": "Shanta Gold Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SAAFY",
                "name": "Saras S.p.A.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SAABY",
                "name": "Saab AB (publ)",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SAABF",
                "name": "Saab AB (publ)",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "RAASY",
                "name": "Cloopen Group Holding Limited",
                "currency": "USD",
                "stockExchange": "OTC Markets EXMKT",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "RAANX",
                "name": "Altegris/AACA Opportunistic Real Estate Fund N",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "RAAIX",
                "name": "Altegris/AACA Opportunistic Real Estate Fund I",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "RAACW",
                "name": "Revolution Acceleration Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "RAACU",
                "name": "Revolution Acceleration Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "RAAAX",
                "name": "Altegris/AACA Opportunistic Real Estate Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "PAASF",
                "name": "PAN AMERICAN SILVER CORP",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "PAANF",
                "name": "Pan American Energy Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "NAACW",
                "name": "North Atlantic Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "NAACU",
                "name": "North Atlantic Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAAQW",
                "name": "Mana Capital Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAAQU",
                "name": "Mana Capital Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAAQR",
                "name": "Mana Capital Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAANF",
                "name": "Maanshan Iron & Steel Company Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MAAGX",
                "name": "MFS Aggressive Growth Allocation Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MAAFF",
                "name": "MagIndustries Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MAACU",
                "name": "Montes Archimedes Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LAAAW",
                "name": "Lakeshore Acquisition I Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LAAAU",
                "name": "Lakeshore Acquisition I Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "JAAIX",
                "name": "John Hancock Fds II, Alternative Asset Allocation Fund Class I",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "JAAAX",
                "name": "John Hancock Fds II Alternative Asset Allocation Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "IAALF",
                "name": "IBC Advanced Alloys Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "HAATF",
                "name": "Haad Thip Public Company Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "HAACW",
                "name": "Health Assurance Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "HAACU",
                "name": "Health Assurance Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "GAAEX",
                "name": "Guinness Atkinson Alternative Energy Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FAATX",
                "name": "American Funds 2010 Target Date Retirement Fd Cl F-1",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FAASX",
                "name": "Fidelity Asset Manager 70% Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FAASW",
                "name": "DigiAsia Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FAAIX",
                "name": "Fidelity Advisor Asset Manager 70% Fund Class I",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "EAATF",
                "name": "Earthworks Industries Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "EAALX",
                "name": "Eaton Vance Atlanta Capital Focused Growth Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "EAAAX",
                "name": "Gabelli Enterprise Mergers and Acquisitions Fund AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CAAPX",
                "name": "Ariel Appreciation Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CAAOF",
                "name": "INDVR Brands Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "WAA.BO",
                "name": "Waa Solar Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "WAA.AX",
                "name": "WAM Active Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "SAAS.L",
                "name": "Microlise Group plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "SAAA.L",
                "name": "iShares Global AAA-AA Govt Bond UCITS ETF USD (Dist)",
                "currency": "GBP",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "RAA.SW",
                "name": "RATIONAL Aktiengesellschaft",
                "currency": "EUR",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "RAA.DE",
                "name": "RATIONAL Aktiengesellschaft",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "PAA.AX",
                "name": "PharmAust Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "MAA-PI",
                "name": "Mid-America Apartment Communities, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "IAA.AX",
                "name": "iShares Asia 50 ETF (AU)",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "IAAA.L",
                "name": "iShares Global AAA-AA Govt Bond UCITS ETF USD (Dist)",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "HAA1.F",
                "name": "Hana Microelectronics Public Company Limited",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "GAAA.L",
                "name": "iShares Global AAA-AA Govt Bond UCITS ETF",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "FAAN.L",
                "name": "LS FAANG+ ETP",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "FAA.DE",
                "name": "Fabasoft AG",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "EAAS.L",
                "name": "eEnergy Group Plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "CAA.JO",
                "name": "CA Sales Holdings Limited",
                "currency": "ZAc",
                "stockExchange": "Johannesburg",
                "exchangeShortName": "JNB"
            },
            {
                "symbol": "CAA.AX",
                "name": "Capral Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "2AAP.L",
                "name": "Leverage Shares 2x Apple ETC A",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "1AAP.L",
                "name": "LS 1x Apple Tracker ETC",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "0AAW.L",
                "name": "Brockhaus Technologies AG",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "0AAJ.L",
                "name": "PolyPeptide Group AG",
                "currency": "CHF",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "0AAI.L",
                "name": "Montana Aerospace AG",
                "currency": "CHF",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "TAASUSD",
                "name": "TaaS USD",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "NAALUSD",
                "name": "Ethernaal",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "YAAC.TA",
                "name": "Ya'acobi Brothers Group (YSB) Ltd",
                "currency": "ILA",
                "stockExchange": "Tel Aviv",
                "exchangeShortName": "TLV"
            },
            {
                "symbol": "XAAG.DE",
                "name": "Invesco Bloomberg Commodity ex-Agriculture UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "TAAT.CN",
                "name": "TAAT Global Alternatives Inc.",
                "currency": "CAD",
                "stockExchange": "Canadian Securities Exchange",
                "exchangeShortName": "CNQ"
            },
            {
                "symbol": "TAAL.CN",
                "name": "Taal Distributed Information Technologies Inc.",
                "currency": "CAD",
                "stockExchange": "Canadian Securities Exchange",
                "exchangeShortName": "CNQ"
            },
            {
                "symbol": "SAAM.BK",
                "name": "SAAM Development Public Company Limited",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "PAAS.TO",
                "name": "Pan American Silver Corp.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange",
                "exchangeShortName": "TSX"
            },
            {
                "symbol": "PAAS.BA",
                "name": "Pan American Silver Corp.",
                "currency": "ARS",
                "stockExchange": "Buenos Aires",
                "exchangeShortName": "BUE"
            },
            {
                "symbol": "MAAT.PA",
                "name": "MaaT Pharma SA",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "LAAC.TO",
                "name": "Lithium Americas (Argentina) Corp.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange",
                "exchangeShortName": "TSX"
            },
            {
                "symbol": "YAARI.NS",
                "name": "Yaari Digital Integrated Services Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "YAARI.BO",
                "name": "Yaari Digital Integrated Services Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "TAALA.HE",
                "name": "Taaleri Oyj",
                "currency": "EUR",
                "stockExchange": "Helsinki",
                "exchangeShortName": "HEL"
            },
            {
                "symbol": "SAA1V.HE",
                "name": "Sanoma Oyj",
                "currency": "EUR",
                "stockExchange": "Helsinki",
                "exchangeShortName": "HEL"
            },
            {
                "symbol": "PAASI.PA",
                "name": "Amundi ETF PEA MSCI Emerging Asia UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "YAARII.NS",
                "name": "Yaari Digital Integrated Services Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "WAAREE.BO",
                "name": "WAAREE TECHNOLOGIES LIMITED",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "VAARAD.BO",
                "name": "Vaarad Ventures Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "SAAB-B.ST",
                "name": "Saab AB (publ)",
                "currency": "SEK",
                "stockExchange": "Stockholm Stock Exchange",
                "exchangeShortName": "STO"
            },
            {
                "symbol": "PAAL-B.CO",
                "name": "Per Aarsleff Holding A/S",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "DAAWAT.NS",
                "name": "LT Foods Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "YAANENT.BO",
                "name": "YAAN ENTERPRISES LIMITED",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "TAALENT.BO",
                "name": "TAAL Enterprises Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "MAANALU.NS",
                "name": "Maan Aluminium Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "MAANALU.BO",
                "name": "Maan Aluminium Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "TAAZAINT.BO",
                "name": "Taaza International Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "RAAJMEDI.BO",
                "name": "Raaj Medisafe India Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "MAAGHADV.BO",
                "name": "MAAGH ADVERTISING AND MARKETIN",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "WAAREERTL.BO",
                "name": "WAAREE RENEWABLE TECHNOLOGIES",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "KAARYAFSL.BO",
                "name": "Kaarya Facilities and Services",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "XAR.L",
                "name": "Xaar plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "BXXUSD",
                "name": "Baanx USD",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "RDAR",
                "name": "Raadr, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "0GWL.L",
                "name": "Saab AB (publ)",
                "currency": "SEK",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "KAL.JO",
                "name": "Kaap Agri Limited",
                "currency": "ZAc",
                "stockExchange": "Johannesburg",
                "exchangeShortName": "JNB"
            },
            {
                "symbol": "KANP",
                "name": "Kaanapali Land, LLC",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "OTC"
            },
            {
                "symbol": "EGY.L",
                "name": "VAALCO Energy, Inc.",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "EGY",
                "name": "VAALCO Energy, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "002030.SZ",
                "name": "Daan Gene Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "2112.HK",
                "name": "CAA Resources Limited",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "4051.SR",
                "name": "Baazeem Trading Company",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "MGH.AX",
                "name": "MAAS Group Holdings Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "TOBAF",
                "name": "TAAT Global Alternatives Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "BWB.DE",
                "name": "Baader Bank Aktiengesellschaft",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "HTC.BK",
                "name": "Haad Thip Public Company Limited",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "600808.SS",
                "name": "Maanshan Iron & Steel Company Limited",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "0323.HK",
                "name": "Maanshan Iron & Steel Company Limited",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "BROCK.BK",
                "name": "Baan Rock Garden Public Company Limited",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "UTAA",
                "name": "UTA Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "URAA",
                "name": "Direxion Shares ETF Trust",
                "currency": null,
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "TRAA",
                "name": "Traack Technologies Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "TGAA",
                "name": "Target Global Acquisition I Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "STAA",
                "name": "STAAR Surgical Company",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SSAA",
                "name": "Science Strategic Acquisition Corp. Alpha",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SMAA",
                "name": "SMA Alliance, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "PRAA",
                "name": "PRA Group, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "OHAA",
                "name": "OPY Acquisition Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "OGAA",
                "name": "Organic Agricultural Company Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MPAA",
                "name": "Motorcar Parts of America, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MCAA",
                "name": "Mountain & Co. I Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LHAA",
                "name": "Lerer Hippeau Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LCAA",
                "name": "L Catterton Asia Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "JHAA",
                "name": "Nuveen Corporate Income 2023 Target Term Fund",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "ISAA",
                "name": "Iron Spark I Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "IRAA",
                "name": "Iris Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "HRAA",
                "name": "Health Revenue Assurance Holdings, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "OTC"
            },
            {
                "symbol": "GGAA",
                "name": "Genesis Growth Tech Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FWAA",
                "name": "Fifth Wall Acquisition Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FTAA",
                "name": "FTAC Athena Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "EFAA",
                "name": "Invesco MSCI EAFE Income Advantage ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "DNAA",
                "name": "Social Capital Suvretta Holdings Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CPAA",
                "name": "Conyers Park III Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CLAA",
                "name": "Colonnade Acquisition Corp. II",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "CHAA",
                "name": "Catcha Investment Corp",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "AZAA",
                "name": "AllianzIM U.S. Large Cap Buffer10 Apr ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "VLAAX",
                "name": "Value Line Asset Allocation Fund Investor Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "VIAAY",
                "name": "Flughafen Wien Aktiengesellschaft",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "VIAAX",
                "name": "Vanguard International Dividend Appreciation Index Fund Admiral Shares",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "UTAAW",
                "name": "UTA Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "UTAAU",
                "name": "UTA Acquisition Corporation",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "USAAX",
                "name": "USAA Mutual Funds Trust - USAA Growth Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "UBAAF",
                "name": "Urbana Corporation",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "TQAAX",
                "name": "T. Rowe Price QM U.S. Small-Cap Growth Equity Fund Advisor Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TGAAW",
                "name": "Target Global Acquisition I Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TGAAU",
                "name": "Target Global Acquisition I Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SYAAF",
                "name": "Syrah Resources Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SSAAY",
                "name": "SSAB AB (publ)",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SSAAW",
                "name": "Science Strategic Acquisition Corp. Alpha",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SSAAU",
                "name": "Science Strategic Acquisition Corp. Alpha",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SSAAF",
                "name": "SSAB AB (publ)",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SLAAF",
                "name": "Sitios Latinoamérica, S.A.B. de C.V.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SFAAX",
                "name": "Allspring Index Asset Allocation Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "RYAAY",
                "name": "Ryanair Holdings plc",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "RGAAX",
                "name": "The Growth Fund of America Class R-1 Shares",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "QCAAF",
                "name": "Quinsam Capital Corporation",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "PPAAY",
                "name": "PT Perusahaan Gas Negara Tbk",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "PPAAF",
                "name": "PT Perusahaan Gas Negara Tbk",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "OSAAW",
                "name": "ProSomnus, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "ORAAF",
                "name": "Aura Minerals Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "OHAAW",
                "name": "OPY Acquisition Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "OHAAU",
                "name": "OPY Acquisition Corp. I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "NVAAF",
                "name": "Nova Minerals Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MRAAY",
                "name": "Murata Manufacturing Co., Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MRAAF",
                "name": "Murata Manufacturing Co., Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MLAAX",
                "name": "MainStay Large Cap Growth Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MGAAF",
                "name": "Morinaga&Co., Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MCAAW",
                "name": "Mountain & Co. I Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MCAAU",
                "name": "Mountain & Co. I Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LPAAU",
                "name": "Launch One Acquisition Corp. Unit",
                "currency": null,
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LCAAW",
                "name": "L Catterton Asia Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "LCAAU",
                "name": "L Catterton Asia Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "KMAAF",
                "name": "Komax Holding AG",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "JVAAX",
                "name": "JPMorgan Value Advantage Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "JRAAX",
                "name": "Janus Henderson Research Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "JCAAX",
                "name": "Janus Henderson Global Allocation Fund - Conservative",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "IRAAW",
                "name": "Iris Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "IRAAU",
                "name": "Iris Acquisition Corp",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "HWAAX",
                "name": "Hotchkis & Wiley Value Opportunities Fund Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "HRAAX",
                "name": "Hartford Growth Allocation Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "HFAAX",
                "name": "Janus Henderson Developed World Bond Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "GGAAW",
                "name": "Genesis Growth Tech Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "GGAAU",
                "name": "Genesis Growth Tech Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "GGAAF",
                "name": "Genesis Growth Tech Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "GCAAF",
                "name": "Guardian Capital Group Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "FZAAX",
                "name": "Fidelity Advisor Balanced Fund Class Z",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FTAAW",
                "name": "FTAC Athena Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "FTAAU",
                "name": "FTAC Athena Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "DIAAF",
                "name": "Diamant Art Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "CRAAX",
                "name": "Columbia Adaptive Risk Allocation Fund A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CPAAW",
                "name": "Conyers Park III Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CPAAU",
                "name": "Conyers Park III Acquisition Corp.",
                "currency": "USD",
                "stockExchange": "NASDAQ Capital Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CMAAX",
                "name": "Calvert Moderate Allocation Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CHAAW",
                "name": "Catcha Investment Corp",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "CGAAY",
                "name": "A2B Australia Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "CFAAX",
                "name": "American Funds Bond Fund of Amer 529A",
                "currency": "USD",
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "BIAAX",
                "name": "BlackRock Impact Bond Fund - Class A",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "AYAAY",
                "name": "Ayala Land, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AYAAF",
                "name": "Ayala Land, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "ATAAY",
                "name": "Atacadão S.A.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "ASAAF",
                "name": "AT & S Austria Technologie & Systemtechnik Aktiengesellschaft",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "ARAAX",
                "name": "Horizon Active Risk Assist Fund - Advisor Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "ARAAF",
                "name": "Aclara Resources Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "APAAF",
                "name": "Appia Rare Earths & Uranium Corp.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AKAAF",
                "name": "Aker ASA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "VUAA.L",
                "name": "Vanguard S&P 500 UCITS ETF",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "V3AA.L",
                "name": "Vanguard Funds Public Limited Company - Vanguard ESG Global All Cap UCITS ETF",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "SEAA.F",
                "name": "UBS (Lux) Fund Solutions – J.P. Morgan USD EM Diversified Bond 1-5 UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "LSAA.L",
                "name": "Life Settlement Assets PLC",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "IUAA.L",
                "name": "iShares US Aggregate Bond UCITS ETF",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "INAA.L",
                "name": "iShares MSCI North America UCITS ETF",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "IGAA.L",
                "name": "iShares Emerging Asia Local Govt Bond UCITS ETF USD (Dist)",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "IEAA.L",
                "name": "iShares Core € Corp Bond UCITS ETF",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "GMAA.L",
                "name": "Gama Aviation Plc",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "CNAA.L",
                "name": "Lyxor MSCI China A (DR) UCITS ETF",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "0YAA.L",
                "name": "Nova Ltd.",
                "currency": "ILS",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "VUAA.MI",
                "name": "Vanguard S&P 500 UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Milan",
                "exchangeShortName": "MIL"
            },
            {
                "symbol": "VUAA.DE",
                "name": "Vanguard S&P 500 UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "STAA.JK",
                "name": "PT Sumber Tani Agung Resources Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "SEAA.DE",
                "name": "UBS (Lux) Fund Solutions – J.P. Morgan USD EM Diversified Bond 1-5 UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "S4AA.DE",
                "name": "SMT Scharf AG",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "PJAA.JK",
                "name": "PT Pembangunan Jaya Ancol Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "MLAA.PA",
                "name": "L Agence Automobiliere",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "INAA.SW",
                "name": "iShares MSCI North America UCITS ETF",
                "currency": "USD",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "HRAA.TO",
                "name": "Horizons ReSolve Adaptive Asset Allocation ETF",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange",
                "exchangeShortName": "TSX"
            },
            {
                "symbol": "GIAA.JK",
                "name": "PT. Garuda Indonesia (Persero) Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "ERAA.JK",
                "name": "PT Erajaya Swasembada Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "EEAA.DE",
                "name": "BNP Paribas Easy FTSE EPRA/NAREIT Eurozone Capped",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "CNAA.DE",
                "name": "Lyxor MSCI China A (DR) UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "CLAA-WT",
                "name": "Colonnade Acquisition Corp. II",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "CLAA-UN",
                "name": "Colonnade Acquisition Corp. II",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "CHAA-WT",
                "name": "Catcha Investment Corp. Redeema",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "CHAA-UN",
                "name": "Catcha Investment Corp",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "CGAA.TO",
                "name": "CI Global Asset Allocation Private Pool ETF",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange",
                "exchangeShortName": "TSX"
            },
            {
                "symbol": "3SAA.MI",
                "name": "GraniteShares 3x Short Alibaba Daily ETP",
                "currency": "EUR",
                "stockExchange": "Milan",
                "exchangeShortName": "MIL"
            },
            {
                "symbol": "3LAA.MI",
                "name": "GraniteShares 3x Long Alibaba Daily ETP",
                "currency": "EUR",
                "stockExchange": "Milan",
                "exchangeShortName": "MIL"
            },
            {
                "symbol": "UJAAS.NS",
                "name": "Ujaas Energy Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "MLAAT.PA",
                "name": "Azorean Aquatic Technologies, S.A.",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "MLAAH.PA",
                "name": "Amatheon Agri Holding N.V.",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "MLAAE.PA",
                "name": "Caire",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "EMAAR.AE",
                "name": "Emaar Properties PJSC",
                "currency": "AED",
                "stockExchange": "Dubai",
                "exchangeShortName": "DFM"
            },
            {
                "symbol": "TIAANC.BO",
                "name": "TIAAN CONSUMER LIMITED",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "HMAAGRO.NS",
                "name": "HMA Agro Industries Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "HMAAGRO.BO",
                "name": "HMA Agro Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "EMAARDEV.AE",
                "name": "Emaar Development PJSC",
                "currency": "AED",
                "stockExchange": "Dubai",
                "exchangeShortName": "DFM"
            },
            {
                "symbol": "VIAANINDUS.BO",
                "name": "Viaan Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "UIGRX",
                "name": "USAA Growth Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "PHRMASI.BO",
                "name": "Phaarmasia Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "USPRX",
                "name": "USAA 500 Index Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "UEL.NS",
                "name": "Ujaas Energy Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "ESARIND.BO",
                "name": "Esaar (India) Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "6696.T",
                "name": "TRaaS On Product Inc.",
                "currency": "JPY",
                "stockExchange": "Tokyo",
                "exchangeShortName": "JPX"
            },
            {
                "symbol": "4220.SR",
                "name": "Emaar The Economic City",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "4292.SR",
                "name": "Ataa Educational Company",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "USNQX",
                "name": "USAA NASDAQ-100 Index Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "600909.SS",
                "name": "Huaan Securities Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "USWGX",
                "name": "USAA Sustainable World Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TIEIX",
                "name": "TIAA-CREF Equity Index Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CGH.L",
                "name": "Chaarat Gold Holdings Limited",
                "currency": "GBp",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "USSCX",
                "name": "USAA Science & Technology Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TRLHX",
                "name": "TIAA-CREF Large Cap Value Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TRLCX",
                "name": "TIAA-CREF Large Cap Value Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TRGIX",
                "name": "TIAA-CREF Growth & Income Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TIIRX",
                "name": "TIAA-CREF Growth & Income Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TGIHX",
                "name": "TIAA-CREF Growth & Income Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TCLCX",
                "name": "TIAA-CREF Large Cap Value Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TSBBX",
                "name": "TIAA-CREF Core Impact Bond Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TIRTX",
                "name": "TIAA-CREF Large Cap Growth Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TILHX",
                "name": "TIAA-CREF Large Cap Growth Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "601015.SS",
                "name": "Shaanxi Heimao Coking Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "USBLX",
                "name": "USAA Growth and Tax Strategy Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "002109.SZ",
                "name": "Shaanxi Xinghua Chemistry Co.,Ltd",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "USAWX",
                "name": "USAA Sustainable World Fund Shares",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TRSCX",
                "name": "TIAA-CREF Social Choice Equity Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TRPSX",
                "name": "TIAA-CREF Social Choice Equity Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TVIIX",
                "name": "TIAA-CREF Lifecycle Index 2060 Instl",
                "currency": "USD",
                "stockExchange": "Nasdaq",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "000563.SZ",
                "name": "Shaanxi International Trust Co.,Ltd.",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "601225.SS",
                "name": "Shaanxi Coal Industry Company Limited",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "000561.SZ",
                "name": "Shaanxi Fenghuo Electronics Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "600984.SS",
                "name": "Shaanxi Construction Machinery Co.,Ltd",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "002267.SZ",
                "name": "Shaanxi Provincial Natural Gas Co.,Ltd",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "603139.SS",
                "name": "Shaanxi Kanghui Pharmaceutical Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "600343.SS",
                "name": "Shaanxi Aerospace Power Hi-Tech Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "4061.SR",
                "name": "Anaam International Holding Group Company",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "USCRX",
                "name": "USAA Cornerstone Moderately Aggressive Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "003009.SZ",
                "name": "Shaanxi Zhongtian Rocket Technology Co., Ltd",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "USSPX",
                "name": "USAA Mutual Funds Trust - USAA 500 Index Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TSBPX",
                "name": "TIAA-CREF Core Impact Bond Fund Premier Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TILPX",
                "name": "TIAA-CREF Large-Cap Growth Fund Premier Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TCLNX",
                "name": "TIAA-CREF Lifecycle 2030 Fund Retirement Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "605033.SS",
                "name": "Shaanxi Meibang Pharmaceutical Group Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "TILRX",
                "name": "TIAA-CREF Large-Cap Growth Fund Retirement Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "601568.SS",
                "name": "Shaanxi Beiyuan Chemical Industry Group Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "600379.SS",
                "name": "Shaanxi Baoguang Vacuum Electric Device Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "TRLIX",
                "name": "TIAA-CREF Large-Cap Value Fund Institutional Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TCREX",
                "name": "TIAA-CREF Real Estate Securities Fund Retail Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TSBIX",
                "name": "TIAA-CREF Core Impact Bond Fund Institutional Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "USAGX",
                "name": "USAA Mutual Fds Tr Precious Metals and Minerals Fund",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TRIRX",
                "name": "TIAA-CREF Large Cap Growth Index Fund Retirement Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TLQIX",
                "name": "TIAA-CREF Lifecycle Index 2025 Fund Institutional Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TLLIX",
                "name": "TIAA-CREF Lifecycle Index 2050 Fund Institutional Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TLIIX",
                "name": "TIAA-CREF Quant Large-Cap Growth Fund Institutional Class",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "002864.SZ",
                "name": "Shaanxi Panlong Pharmaceutical Group Limited By Share Ltd",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "600831.SS",
                "name": "Shaanxi Broadcast & TV Network Intermediary(Group)Co.,Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "600248.SS",
                "name": "Shaanxi Construction Engineering Group Corporation Limited",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "000812.SZ",
                "name": "Shaanxi Jinye Science Technology and Education Group Co.,Ltd",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "TETAA",
                "name": "Teton Advisors, LLC",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SBSAA",
                "name": "Spanish Broadcasting System, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "RBPAA",
                "name": "16197",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "RBCAA",
                "name": "Republic Bancorp, Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "PARAA",
                "name": "Paramount Global",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Select",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MCRAA",
                "name": "McRae Industries, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "GRTAA",
                "name": "Griffin Realty Trust Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "VIVAA.BO",
                "name": "Vivaa Tradecom Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "TANAA.BO",
                "name": "Taneja Aerospace and Aviation Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "NYKAA.NS",
                "name": "FSN E-Commerce Ventures Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "NYKAA.BO",
                "name": "FSN E-Commerce Ventures Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "KOZAA.IS",
                "name": "Koza Anadolu Metal Madencilik Isletmeleri A.S.",
                "currency": "TRY",
                "stockExchange": "Istanbul Stock Exchange",
                "exchangeShortName": "IST"
            },
            {
                "symbol": "ALFAA.MX",
                "name": "Alfa, S. A. B. de C. V.",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "SMSAAM.SN",
                "name": "Sociedad Matriz SAAM S.A.",
                "currency": "CLP",
                "stockExchange": "Santiago",
                "exchangeShortName": "SGO"
            },
            {
                "symbol": "RADAAN.NS",
                "name": "Radaan Mediaworks India Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "RADAAN.BO",
                "name": "Radaan Mediaworks India Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "DEYAAR.AE",
                "name": "Deyaar Development PJSC",
                "currency": "AED",
                "stockExchange": "Dubai",
                "exchangeShortName": "DFM"
            },
            {
                "symbol": "MAHAANF.BO",
                "name": "Mahaan Foods Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "DHYAANI.BO",
                "name": "DHYAANI TILE AND MARBLEZ LIMIT",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "NOVAAGRI.NS",
                "name": "Nova Agritech Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AMRAAGRI.BO",
                "name": "Amraworld Agrico Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "TITAANIUM.BO",
                "name": "Titaanium Ten Enterprise Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "SHRAAITECH.BO",
                "name": "Shradha AI Technologies Limite",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "CAN",
                "name": "Canaan Inc.",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CPKOF",
                "name": "Akwaaba Mining Ltd.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "6112.TW",
                "name": "Metaage Corporation",
                "currency": "TWD",
                "stockExchange": "Taiwan",
                "exchangeShortName": "TAI"
            },
            {
                "symbol": "RSS.V",
                "name": "RESAAS Services Inc.",
                "currency": "CAD",
                "stockExchange": "Toronto Stock Exchange Ventures",
                "exchangeShortName": "TSXV"
            },
            {
                "symbol": "RSASF",
                "name": "RESAAS Services Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "ALBA.TA",
                "name": "Albaad Massuot Yitzhak Ltd",
                "currency": "ILA",
                "stockExchange": "Tel Aviv",
                "exchangeShortName": "TLV"
            },
            {
                "symbol": "SHUAW",
                "name": "SHUAA Partners Acquisition Corp I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SHUAU",
                "name": "SHUAA Partners Acquisition Corp I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SHUA",
                "name": "SHUAA Partners Acquisition Corp I",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "TTLPF.BK",
                "name": "Talaad Thai Leasehold Property Fund",
                "currency": "THB",
                "stockExchange": "Thailand",
                "exchangeShortName": "SET"
            },
            {
                "symbol": "8060.SR",
                "name": "Walaa Cooperative Insurance Company",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "AVVH",
                "name": "AVVAA World Health Care Products, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "BOYAF",
                "name": "Boyaa Interactive International Limited",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "0434.HK",
                "name": "Boyaa Interactive International Limited",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "IISL.BO",
                "name": "Ishaan Infrastructures and Shelters Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "VISTAA.MX",
                "name": "Vista Energy, S.A.B. de C.V.",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "SAVIAA.MX",
                "name": "Savia SA de CV",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "PFIBAA.CO",
                "name": "PFA Invest Balance A",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "NYIDAA.CO",
                "name": "Nykredit Invest Danske Aktier Akk KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "NAYSAA.BO",
                "name": "Naysaa Securities Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "MMIGAA.CO",
                "name": "MMI Globale Aktier Akk. – Harding Loevner",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "MAJVAA.CO",
                "name": "Maj Invest Value Aktier Akk",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "LSIGAA.CO",
                "name": "Lån & Spar Invest - Globale Aktier Basis Akkumulerende",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "KRSNAA.NS",
                "name": "Krsnaa Diagnostics Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "KRSNAA.BO",
                "name": "Krsnaa Diagnostics Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "GISSAA.MX",
                "name": "Grupo Industrial Saltillo, S.A.B. de C.V.",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "FPIGAA.CO",
                "name": "Formuepleje Globale Aktier - Akkumulerende",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BOLSAA.MX",
                "name": "Bolsa Mexicana de Valores, S.A.B. de C.V.",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "BIVOAA.CO",
                "name": "Investeringsforeningen Bil Danmark - Selection Aktier Akk.- KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIGAA.CO",
                "name": "Investeringsforeningen Bankinvest Globale Aktier Akk A Fund",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIBAA.CO",
                "name": "Investeringsforeningen BankInvest - Børsnoterede Alternativer Akk. KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "SEIDAAP.CO",
                "name": "SEBinvest - Danske Aktier Akkumulerende AKL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "PFIBAAK.CO",
                "name": "PFA Invest Balance A Akkumulere",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "HARIAAPL.BO",
                "name": "Haria Apparels Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "BAIGAAUA.CO",
                "name": "Investeringsforeningen Bankinvest Globale Aktier Baeredygtig Udvikling A",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "SURYAAMBA.BO",
                "name": "Suryaamba Spinning Mills Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "SHIVAAGRO.BO",
                "name": "Shiva Global Agro Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "MUKTAARTS.NS",
                "name": "Mukta Arts Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "MUKTAARTS.BO",
                "name": "Mukta Arts Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "JAMNAAUTO.NS",
                "name": "Jamna Auto Industries Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "JAMNAAUTO.BO",
                "name": "Jamna Auto Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "BAIGAAUAA.CO",
                "name": "Investeringsforeningen Bankinvest Globale Aktier Baeredygtig Udvikling Akk.A",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "SEINAASRII.CO",
                "name": "SEBinvest AKL Nordamerika Aktie",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "CWIGAAKKKLA.CO",
                "name": "C WorldWide Globale Aktier - AK",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "CASUSD",
                "name": "Cashaa USD",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "MAX",
                "name": "MediaAlpha, Inc.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "SBO.OL",
                "name": "Selvaag Bolig ASA",
                "currency": "NOK",
                "stockExchange": "Oslo Stock Exchange",
                "exchangeShortName": "OSL"
            },
            {
                "symbol": "0Q92.L",
                "name": "Selvaag Bolig ASA",
                "currency": "NOK",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "4334.SR",
                "name": "Al Maather Reit Fund",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "TON.JO",
                "name": "Tongaat Hulett Limited",
                "currency": "ZAc",
                "stockExchange": "Johannesburg",
                "exchangeShortName": "JNB"
            },
            {
                "symbol": "DIAMONDYD.NS",
                "name": "Prataap Snacks Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "DIAMONDYD.BO",
                "name": "Prataap Snacks Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "3086.HK",
                "name": "ChinaAMC NASDAQ 100 ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "83188.HK",
                "name": "ChinaAMC CSI 300 Index ETF",
                "currency": "CNY",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "3143.HK",
                "name": "ChinaAMC Hong Kong Banks ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "513300.SS",
                "name": "ChinaAMC NASDAQ 100 ETF(QDII)",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "3145.HK",
                "name": "ChinaAMC Asia High Dividend ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "3088.HK",
                "name": "ChinaAMC Hang Seng TECH Index ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "3160.HK",
                "name": "ChinaAMC MSCI Japan Hedged to USD ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "3121.HK",
                "name": "ChinaAMC MSCI Asia Pacific Real Estate ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "3141.HK",
                "name": "ChinaAMC Asia USD Investment Grade Bond ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "3165.HK",
                "name": "ChinaAMC MSCI Europe Quality Hedged to USD ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "CHMCF",
                "name": "ChinaAMC ETF Series - ChinaAMC CSI 300 Index ETF",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "7261.HK",
                "name": "ChinaAMC NASDAQ-100 Index Daily (2x) Leveraged Product",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "7522.HK",
                "name": "ChinaAMC Direxion NASDAQ-100 Daily (-2x) Inverse Product",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "7331.HK",
                "name": "ChinaAMC Direxion NASDAQ-100 Daily (-1x) Inverse Product",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "7373.HK",
                "name": "ChinaAMC Direxion CSI 300 Index Daily (-1x) Inverse Product",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "7272.HK",
                "name": "ChinaAMC Direxion CSI 300 Index Daily (2x) Leveraged Product",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "3157.HK",
                "name": "ChinaAMC Hang Seng Stock Connect Hong Kong SmallCap Index ETF",
                "currency": "HKD",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "82813.HK",
                "name": "ChinaAMC Bloomberg Barclays China Treasury + Policy Bank Bond Index ETF",
                "currency": "CNY",
                "stockExchange": "HKSE",
                "exchangeShortName": "HKSE"
            },
            {
                "symbol": "GFAMSAA.MX",
                "name": "Grupo Famsa, S.A.B. de C.V.",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "CODUSAA.MX",
                "name": "548",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "BAIVGAA.CO",
                "name": "BankInvest Value Globale Aktier",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIHUAA.CO",
                "name": "BankInvest - Højt Udbytte Aktier KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIEMAA.CO",
                "name": "BankInvest Emerging Markets Aktier",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIDKAA.CO",
                "name": "BankInvest - Danske Aktier KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "VEDAVAAG.BO",
                "name": "Vedavaag Systems Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "SAMBHAAV.NS",
                "name": "Sambhaav Media Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "SAMBHAAV.BO",
                "name": "Sambhaav Media Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "BAIDKAAKA.CO",
                "name": "Bankinvest - Danske Aktier Akk. KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "SYIGEAADKK.CO",
                "name": "Sydinvest Globale EM-Aktier KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "SYIBDAADKK.CO",
                "name": "Investeringsforeningen Sydinvest Baeredygtige Aktier A Dkk",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "SUERYAAKNI.BO",
                "name": "Sueryaa Knitwear Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "NDISTAAKL1.CO",
                "name": "Nordea Invest Stabile Aktier Akkumulerende",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "AMBICAAGAR.NS",
                "name": "Ambica Agarbathies Aroma & Industries Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "AMBICAAGAR.BO",
                "name": "Ambica Agarbathies Aroma & Industries Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "SPIBDAAKKKLA.CO",
                "name": "SPARINVEST BÆREDYGTIGE AKTIER AKK",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "PMICTAAKLNEUR.CO",
                "name": "PP Capital - Tactical Asset Allocation",
                "currency": "EUR",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "300635.SZ",
                "name": "SinoDaan Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "KWS.SW",
                "name": "KWS SAAT SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "KWS.DE",
                "name": "KWS SAAT SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "KNKZF",
                "name": "KWS SAAT SE & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "MCHA",
                "name": "Matchaah Holdings, Inc.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "TTAM.TA",
                "name": "Tiv Taam Holdings 1 Ltd.",
                "currency": "ILA",
                "stockExchange": "Tel Aviv",
                "exchangeShortName": "TLV"
            },
            {
                "symbol": "TLEVISAA.MX",
                "name": "Grupo Televisa SAB",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "SUVIDHAA.NS",
                "name": "Suvidhaa Infoserve Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "SUVIDHAA.BO",
                "name": "Suvidhaa Infoserve Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "SPIBDVAA.CO",
                "name": "Sparinvest Bæredygtige Value Aktier",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "IMAGICAA.NS",
                "name": "Imagicaaworld Entertainment Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "IMAGICAA.BO",
                "name": "Imagicaaworld Entertainment Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "CYDSASAA.MX",
                "name": "Cydsa, S.A.B. de C.V.",
                "currency": "MXN",
                "stockExchange": "Mexico",
                "exchangeShortName": "MEX"
            },
            {
                "symbol": "BIVOPRAA.CO",
                "name": "BankInvest Optima Rente Akk. KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "ATLANTAA.BO",
                "name": "Atlantaa Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "ORTINLAABS.BO",
                "name": "Ortin Laboratories Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "MMIGLVAAKT.CO",
                "name": "Multi Manager Invest Globale Value Aktier",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIBDKAAUA.CO",
                "name": "BankInvest BIX DK Akt Ansvarlig",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "MMIGLVAAKTAKK.CO",
                "name": "Multi Manager Invest Globale Value Aktier",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIBDKAAUAKKA.CO",
                "name": "BankInv BIX DK Akt Ansvarl Udvi",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BRRDF",
                "name": "Borregaard ASA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "BRG.OL",
                "name": "Borregaard ASA",
                "currency": "NOK",
                "stockExchange": "Oslo Stock Exchange",
                "exchangeShortName": "OSL"
            },
            {
                "symbol": "BRGAY",
                "name": "Borregaard ASA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "TGVSL.BO",
                "name": "TGV SRAAC Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "4163.SR",
                "name": "Al-Dawaa Medical Services Company",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "BAILDKOAA.CO",
                "name": "BankInvest Lange Danske Obligationer Akk. KL",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIGOAUAA.CO",
                "name": "BankInvest Globale Obligationer Ansvarlig Udvikling Akk. A",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "JAINEX.BO",
                "name": "Jainex Aamcol Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "FICO",
                "name": "Fair Isaac Corporation",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "0TIQ.L",
                "name": "Fair Isaac Corporation",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "MTHH.CO",
                "name": "MT Højgaard Holding A/S",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "6265.TWO",
                "name": "Kuen Chaang Uppertech Corp.",
                "currency": "TWD",
                "stockExchange": "Taipei Exchange",
                "exchangeShortName": "TWO"
            },
            {
                "symbol": "APLY.NE",
                "name": "Apple (AAPL) Yield Shares Purpose ETF",
                "currency": "CAD",
                "stockExchange": "Cboe CA",
                "exchangeShortName": "NEO"
            },
            {
                "symbol": "UGOTCHIUSD",
                "name": "Unicly Aavegotchi Astronauts Collection",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "GRIEJD.CO",
                "name": "Gudme Raaschou Europæiske Ejendomsaktier",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "TLKM.JK",
                "name": "Perusahaan Perseroan (Persero) PT Telekomunikasi Indonesia Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "TLKMF",
                "name": "Perusahaan Perseroan (Persero) PT Telekomunikasi Indonesia Tbk",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "TLK",
                "name": "Perusahaan Perseroan (Persero) PT Telekomunikasi Indonesia Tbk",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "XINSA.IS",
                "name": "BIST INSAAT",
                "currency": "TRY",
                "stockExchange": "Istanbul Stock Exchange",
                "exchangeShortName": "INDEX"
            },
            {
                "symbol": "ZILLIONXOUSD",
                "name": "Zillion Aakar XO",
                "currency": "USD",
                "stockExchange": "CCC",
                "exchangeShortName": "CRYPTO"
            },
            {
                "symbol": "BGE.AX",
                "name": "Bridge SaaS Limited",
                "currency": "AUD",
                "stockExchange": "Australian Securities Exchange",
                "exchangeShortName": "ASX"
            },
            {
                "symbol": "ENKAI.IS",
                "name": "Enka Insaat ve Sanayi A.S.",
                "currency": "TRY",
                "stockExchange": "Istanbul Stock Exchange",
                "exchangeShortName": "IST"
            },
            {
                "symbol": "EKIVF",
                "name": "Enka Insaat ve Sanayi A.S.",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "601369.SS",
                "name": "Xi'an Shaangu Power Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "ICLO",
                "name": "Invesco Aaa Clo Floating Rate Note ETF",
                "currency": "USD",
                "stockExchange": "BATS",
                "exchangeShortName": "ETF"
            },
            {
                "symbol": "QLTA",
                "name": "iShares Aaa - A Rated Corporate Bond ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "TEJASSVI.BO",
                "name": "TEJASSVI AAHARAM LIMITED",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "SHVFL.BO",
                "name": "Shreevatsaa Finance and Leasing Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "APLY",
                "name": "YieldMax AAPL Option Income Strategy ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "PGAS.JK",
                "name": "PT Perusahaan Gas Negara Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "JHS.NS",
                "name": "JHS Svendgaard Laboratories Limited",
                "currency": "INR",
                "stockExchange": "National Stock Exchange of India",
                "exchangeShortName": "NSE"
            },
            {
                "symbol": "JHS.BO",
                "name": "JHS Svendgaard Laboratories Limited",
                "currency": "INR",
                "stockExchange": "Bombay Stock Exchange",
                "exchangeShortName": "BSE"
            },
            {
                "symbol": "002252.SZ",
                "name": "Shanghai RAAS Blood Products Co., Ltd.",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "PPLFY",
                "name": "PT Perusahaan Perkebunan London Sumatra Indonesia Tbk",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "PPLFF",
                "name": "PT Perusahaan Perkebunan London Sumatra Indonesia Tbk",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "LSIP.JK",
                "name": "PT Perusahaan Perkebunan London Sumatra Indonesia Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "4191.SR",
                "name": "Abdullah Saad Mohammed Abo Moati for Bookstores Company",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "TYRES.HE",
                "name": "Nokian Renkaat Oyj",
                "currency": "EUR",
                "stockExchange": "Helsinki",
                "exchangeShortName": "HEL"
            },
            {
                "symbol": "NKRKY",
                "name": "Nokian Renkaat Oyj",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "NKRKF",
                "name": "Nokian Renkaat Oyj",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "603822.SS",
                "name": "Zhejiang Jiaao Enprotech Stock Co., Ltd",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "300412.SZ",
                "name": "Zhejiang Canaan Technology Limited",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "300559.SZ",
                "name": "Chengdu Jiafaantai Education Technology Co.,Ltd.",
                "currency": "CNY",
                "stockExchange": "Shenzhen",
                "exchangeShortName": "SHZ"
            },
            {
                "symbol": "QGTA",
                "name": "IQ Leaders GTAA Tracker ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "PORF.AS",
                "name": "B.V. Delftsch Aardewerkfabriek \"De Porceleyne Fles Anno 1653\"",
                "currency": "EUR",
                "stockExchange": "Amsterdam",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "STO3.DE",
                "name": "Sto SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "KSB.DE",
                "name": "KSB SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "KSB3.DE",
                "name": "KSB SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "0G5B.L",
                "name": "Sto SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "FANG.L",
                "name": "GraniteShares FAANG ETC",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "NACP",
                "name": "Impact Shares NAACP Minority Empowerment ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "IS0Z.DE",
                "name": "iShares Global AAA-AA Govt Bond UCITS ETF USD (Dist)",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "EDL.DE",
                "name": "Edel SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "IFCM3.SA",
                "name": "Infracommerce CXaaS S.A.",
                "currency": "BRL",
                "stockExchange": "São Paulo",
                "exchangeShortName": "SAO"
            },
            {
                "symbol": "BAIKLA.CO",
                "name": "Bæredygtige Klimaaktier Akk. Kl",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "BAIBDA.CO",
                "name": "Bæredygtige Klimaaktier Akk. Kl",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "600979.SS",
                "name": "Sichuan Guangan Aaapublic Co.,Ltd",
                "currency": "CNY",
                "stockExchange": "Shanghai",
                "exchangeShortName": "SHH"
            },
            {
                "symbol": "GENK.BR",
                "name": "Genk Logistics Naamloze vennootschap",
                "currency": "EUR",
                "stockExchange": "Brussels",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "AVIV.TA",
                "name": "Mordechai Aviv Taasiot Beniyah (1973) Ltd.",
                "currency": "ILA",
                "stockExchange": "Tel Aviv",
                "exchangeShortName": "TLV"
            },
            {
                "symbol": "USTB",
                "name": "VictoryShares USAA Core Short-Term Bond ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "ULVM",
                "name": "VictoryShares USAA MSCI USA Value Momentum ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "UITB",
                "name": "VictoryShares USAA Core Intermediate-Term Bond ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "USVM",
                "name": "VictoryShares USAA MSCI USA Small Cap Value Momentum ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "UIVM",
                "name": "VictoryShares USAA MSCI International Value Momentum ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "UEVM",
                "name": "VictoryShares USAA MSCI Emerging Markets Value Momentum ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "2HRA.DE",
                "name": "H&R GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "0RRC.L",
                "name": "H&R GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "AVHNY",
                "name": "Ackermans & Van Haaren NV",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AVHNF",
                "name": "Ackermans & Van Haaren NV",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "ACKB.BR",
                "name": "Ackermans & Van Haaren NV",
                "currency": "EUR",
                "stockExchange": "Brussels",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "SOTDF",
                "name": "Ströer SE & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "SAX.DE",
                "name": "Ströer SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "HENOY",
                "name": "Henkel AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "HENOF",
                "name": "Henkel AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "HENKY",
                "name": "Henkel AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "HEN.DE",
                "name": "Henkel AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "HEN3.SW",
                "name": "Henkel AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "HEN3.F",
                "name": "Henkel AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "HEN3.DE",
                "name": "Henkel AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "HELKF",
                "name": "Henkel AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "COBH.BR",
                "name": "Brouwerij Handelsmaatschappij NV",
                "currency": "EUR",
                "stockExchange": "Brussels",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "8012.SR",
                "name": "Aljazira Takaful Taawuni Company",
                "currency": "SAR",
                "stockExchange": "Saudi",
                "exchangeShortName": "SAU"
            },
            {
                "symbol": "MUX.DE",
                "name": "Mutares SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "HLLGY",
                "name": "HELLA GmbH & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "HLKHF",
                "name": "HELLA GmbH & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "HLE.SW",
                "name": "HELLA GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "HLE.DE",
                "name": "HELLA GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "PEK",
                "name": "VanEck Vectors ChinaAMC CSI 300 ETF",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "IPCC.JK",
                "name": "PT Indonesia Kendaraan Terminal Tbk",
                "currency": "IDR",
                "stockExchange": "Jakarta Stock Exchange",
                "exchangeShortName": "JKT"
            },
            {
                "symbol": "TTRAK.IS",
                "name": "Türk Traktör ve Ziraat Makineleri A.S.",
                "currency": "TRY",
                "stockExchange": "Istanbul Stock Exchange",
                "exchangeShortName": "IST"
            },
            {
                "symbol": "XCX.DU",
                "name": "coinIX GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Dusseldorf",
                "exchangeShortName": "DUS"
            },
            {
                "symbol": "MBK.DE",
                "name": "Merkur PrivatBank KgaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "MOP.BR",
                "name": "Palmboomen Cultuur Maatschappij Mopoli (Palmeraies De Mopoli) N.V.",
                "currency": "EUR",
                "stockExchange": "Brussels",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "PGN.DE",
                "name": "paragon GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "MLECO.PA",
                "name": "Ecolutions GmbH&Co KGaA",
                "currency": "EUR",
                "stockExchange": "Paris",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "FSNUY",
                "name": "Fresenius SE & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "FSNUF",
                "name": "Fresenius SE & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "FRE.SW",
                "name": "Fresenius SE & Co. KGaA",
                "currency": "CHF",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "FRE.DE",
                "name": "Fresenius SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "0NFG.L",
                "name": "paragon GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "DWRKF",
                "name": "Drägerwerk AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "DRWKF",
                "name": "Drägerwerk AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "DRW8.DE",
                "name": "Drägerwerk AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "DRW3.DE",
                "name": "Drägerwerk AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "DGWPF",
                "name": "Drägerwerk AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "CWC.SW",
                "name": "CEWE Stiftung & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "CWC.DE",
                "name": "CEWE Stiftung & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "0MT8.L",
                "name": "Drägerwerk AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "192090.KS",
                "name": "Mirae Asset TIGER ChinaA300 ETF",
                "currency": "KRW",
                "stockExchange": "KSE",
                "exchangeShortName": "KSC"
            },
            {
                "symbol": "XBAT.DE",
                "name": "Xtrackers II Eurozone AAA Government Bond Swap UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "EVD.DE",
                "name": "CTS Eventim AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "DWS.DE",
                "name": "DWS Group GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "CEVMY",
                "name": "CTS Eventim AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "CEVMF",
                "name": "CTS Eventim AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "0SAY.L",
                "name": "DWS Group GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "FTWO",
                "name": "EA Series Trust Strive FAANG 2.",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange Arca",
                "exchangeShortName": "AMEX"
            },
            {
                "symbol": "SFNG.L",
                "name": "GraniteShares 1x Short FAANG Daily ETC",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "3SFG.L",
                "name": "GraniteShares 3x Short FAANG Daily ETC",
                "currency": "USD",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "ULUSE.IS",
                "name": "Ulusoy Elektrik Imalat Taahhüt ve Ticaret A.S.",
                "currency": "TRY",
                "stockExchange": "Istanbul Stock Exchange",
                "exchangeShortName": "IST"
            },
            {
                "symbol": "XBAI.DE",
                "name": "Xtrackers II - Eurozone AAA Government Bond Swap UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "1SXP.F",
                "name": "SCHOTT Pharma AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "GABUX",
                "name": "Gabelli Utilities Fd Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "MCC.BR",
                "name": "Immo Mechelen City Center Naamloze vennootschap",
                "currency": "EUR",
                "stockExchange": "Brussels",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "HBH.DE",
                "name": "HORNBACH Holding AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "HBH3.SW",
                "name": "HORNBACH Holding AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "HBBHF",
                "name": "HORNBACH Holding AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "PRRCF",
                "name": "ProCredit Holding AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "PCZ.DE",
                "name": "ProCredit Holding AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "0RL9.L",
                "name": "ProCredit Holding AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "COP.DE",
                "name": "CompuGroup Medical SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "CMPVF",
                "name": "CompuGroup Medical SE & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "CMPUY",
                "name": "CompuGroup Medical SE & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "0MSD.L",
                "name": "CompuGroup Medical SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "GOLDX",
                "name": "Gabelli Gold Fund, Inc. Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "GABGX",
                "name": "The Gabelli Growth Fund Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "NCH2.DE",
                "name": "thyssenkrupp nucera AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "WESWX",
                "name": "TETON Westwood Equity Fund Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "YAYLA.IS",
                "name": "Yayla Enerji Üretim Turizm ve Insaat Ticaret A.S.",
                "currency": "TRY",
                "stockExchange": "Istanbul Stock Exchange",
                "exchangeShortName": "IST"
            },
            {
                "symbol": "FMS",
                "name": "Fresenius Medical Care AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "New York Stock Exchange",
                "exchangeShortName": "NYSE"
            },
            {
                "symbol": "FME.SW",
                "name": "Fresenius Medical Care AG & Co. KGaA",
                "currency": "CHF",
                "stockExchange": "Swiss Exchange",
                "exchangeShortName": "SIX"
            },
            {
                "symbol": "FME.DE",
                "name": "Fresenius Medical Care AG & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "FMCQF",
                "name": "Fresenius Medical Care AG & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "VIGB.DE",
                "name": "VanEck iBoxx EUR Sovereign Capped AAA-AA 1-5 UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "TAT.AS",
                "name": "VanEck iBoxx EUR Sovereign Capped AAA-AA 1-5 UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Amsterdam",
                "exchangeShortName": "EURONEXT"
            },
            {
                "symbol": "TAGB.L",
                "name": "VanEck iBoxx EUR Sovereign Capped AAA-AA 1-5 UCITS ETF",
                "currency": "GBP",
                "stockExchange": "London Stock Exchange",
                "exchangeShortName": "LSE"
            },
            {
                "symbol": "WEBAX",
                "name": "TETON Westwood Balanced Fund Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "CLOA",
                "name": "BlackRock ETF Trust II - BlackRock AAA CLO ETF",
                "currency": "USD",
                "stockExchange": "NASDAQ Global Market",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "HPBK.DE",
                "name": "Heliad Equity Partners GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "GVCAX",
                "name": "The Gabelli Value 25 Fund Inc. Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "GABBX",
                "name": "The Gabelli Dividend Growth Fd Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "SGF.DE",
                "name": "SGT German Private Equity GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "GAI.DE",
                "name": "SGT German Private Equity GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "XETRA",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "UEFY.DE",
                "name": "UBS (Lux) Fund Solutions – SBI Foreign AAA-BBB 1-5 ESG UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "UEFZ.DE",
                "name": "UBS (Lux) Fund Solutions – SBI Foreign AAA-BBB 5-10 ESG UCITS ETF",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "AULRF",
                "name": "AURELIUS Equity Opportunities SE & Co. KGaA",
                "currency": "USD",
                "stockExchange": "Other OTC",
                "exchangeShortName": "PNK"
            },
            {
                "symbol": "AR4.DE",
                "name": "AURELIUS Equity Opportunities SE & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "WESRX",
                "name": "TETON Convertible Securities Fund - Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "NC5A.DE",
                "name": "NorCom Information Technology GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            },
            {
                "symbol": "GIGRX",
                "name": "Gabelli International Growth Fund, Inc. Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "GWSVX",
                "name": "The Gabelli Focused Growth And Income Fund Class AAA",
                "currency": "USD",
                "stockExchange": "NASDAQ",
                "exchangeShortName": "NASDAQ"
            },
            {
                "symbol": "ACAEUC.CO",
                "name": "Aif-Vaerdipapirfonden Accunia Invest European Clo Aaa/Aa.(Kl)",
                "currency": "DKK",
                "stockExchange": "Copenhagen",
                "exchangeShortName": "CPH"
            },
            {
                "symbol": "S6P.DE",
                "name": "Spielvereinigung Unterhaching Fußball GmbH & Co. KGaA",
                "currency": "EUR",
                "stockExchange": "Frankfurt Stock Exchange",
                "exchangeShortName": "XETRA"
            }
        ]
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
export const generateUniqueId = () => {
    const randomHex = Math.random().toString(16).slice(2, 18);
    const uniqueId = `id-${randomHex}`;

    return uniqueId;

};

export const getTwoFirstLetters = (word: string) => {
    return word.slice(0, 2).toUpperCase();
}
export const getRandomColor = () => {
    const index = Math.floor(Math.random() * colorCodes.length);
    return colorCodes[index];
}