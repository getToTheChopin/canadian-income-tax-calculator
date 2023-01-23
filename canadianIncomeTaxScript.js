var employmentIncome = 0;
var capitalGains = 0;
var eligibleDividends = 0;
var nonEligibleDividends = 0;
var otherIncome = 0;
var totalGrossIncome = 0;
var RRSPContribution = 0;
var capitalGainsRate = 0.5;
var eligibleGrossUp = 0.38;
var nonEligibleGrossUp = 0.15;
var totalTaxableIncome = 0;

var labelArray=["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"];

var chart;
var afterTaxIncomeBarChart = document.getElementById("afterTaxIncomeBarChart");

var chart2;
var totalTaxBarChart = document.getElementById("totalTaxBarChart");

var chart3;
var avgTaxRateBarChart = document.getElementById("avgTaxRateBarChart");

var graphColourArray = ["#F8F41B", "#EDE02B", "#E3CD3C", "#D9BA4D", "#CFA65E", "#C4936E", "#BA807F", "#B06C90", "#A659A1", "#9B46B1", "#9132C2", "#871FD3", "#7D0CE4"];
var graphColourArray2 = ["#084081","#125F8B","#1F7F95","#2D9E9F","#3CAA97","#4EB490","#60BE8D","#74C88D","#8AD393","#A4DDA1","#C4E7BA","#E0F1D4","#F7FCF0"];

var federalTaxROC = 0;
var federalTaxQC = 0;
var ABTax = 0;
var BCTax = 0;
var MBTax = 0;
var NBTax = 0;
var NLTax = 0;
var NTTax = 0;
var NSTax = 0;
var NUTax = 0;
var ONTax = 0;
var PETax = 0;
var QCTax = 0;
var SKTax = 0;
var YTTax = 0;

var totalABTaxes;
var totalBCTaxes;
var totalMBTaxes;
var totalNBTaxes;
var totalNLTaxes;
var totalNTTaxes;
var totalNSTaxes;
var totalNUTaxes;
var totalONTaxes;
var totalPETaxes;
var totalQCTaxes;
var totalSKTaxes;
var totalYTTaxes;

var totalGrossIncomeArray = [];
var federalTaxArray = [];
var provincialTaxArray = [];
var CPPTaxArray = [];
var EITaxArray = [];
var QPPTaxArray = [];
var CPPQPPTaxArray = []; 
var QPIPTaxArray = [];
var totalTaxesArray = [];
var netIncomeArray = [];
var avgTaxRateArray = [];
var marginalTaxRateArray = [];

var CPPTax = 0;
var enhancedCPPTax = 0;
var baseCPPTax = 0;

var QPPTax = 0;
var enhancedQPPTax = 0;
var baseQPPTax = 0;

var EITaxROC = 0;
var EITaxQC = 0;
var QPIPTax = 0;

var OHIPTax = 0;

var CPPExemption = 3500;
var CPPContributionRate = 0.0595;
var CPPMaxContribution = 3754.45;
var enhancedCPPRate = 0.003;

var QPPExemption = 3500;
var QPPContributionRate = 0.0640;
var QPPMaxContribution = 4038.40;
var enhancedQPPRate = 0.003;

var EIROCRate = 0.0163;
var EIROCMax = 1002.45;

var EIQCRate = 0.0127;
var EIQCMax = 781.05;

var QPIPExemption = 2000;
var QPIPContributionRate = 0.00494;
var QPIPMaxContribution = 449.54;
var QPIPTax = 0;

var OHIPContribution = 0;


//Federal assumptions
var federalBracket1 = 53359;
var federalBracket2 = 106717;
var federalBracket3 = 165430;
var federalBracket4 = 235675;
var federalRate1 = 0.15;
var federalRate2 = 0.205;
var federalRate3 = 0.26;
var federalRate4 = 0.2932;
var federalRate5 = 0.33;

var baseFederalPersonalAmount = 13521;
var maxEnhancedBPA = 1479;
var enhancedBPA = 0;
var totalFederalPersonalAmount = 0;
var enhancedBPAThresholdStart = 165430;
var enhancedBPAThresholdEnd = 235675;

var federalEligibleDivCredit = 0.150198;
var federalNonEligibleDivCredit = 0.090301;
var federalTaxCreditRate = 0.15;
var federalEmploymentAmount = 0;
var federalEmploymentMax = 1257;

var QCAbatementRate = 0.165;


//AB assumptions
var ABBracket1 = 142292;
var ABBracket2 = 170751;
var ABBracket3 = 227668;
var ABBracket4 = 341502;
var ABRate1 = 0.1;
var ABRate2 = 0.12;
var ABRate3 = 0.13;
var ABRate4 = 0.14;
var ABRate5 = 0.15;
var ABPersonalAmount = 21003;
var ABEligibleDivCredit = 0.0812;
var ABNonEligibleDivCredit = 0.0218;
var ABTaxCreditRate = 0.1;

//BC assumptions
var BCBracket1 = 45654;
var BCBracket2 = 91310;
var BCBracket3 = 104835;
var BCBracket4 = 127299;
var BCBracket5 = 172602;
var BCBracket6 = 240716;
var BCRate1 = 0.0506;
var BCRate2 = 0.077;
var BCRate3 = 0.105;
var BCRate4 = 0.1229;
var BCRate5 = 0.147;
var BCRate6 = 0.168;
var BCRate7 = 0.205;
var BCPersonalAmount = 11981;
var BCEligibleDivCredit = 0.12;
var BCNonEligibleDivCredit = 0.0196;
var BCTaxCreditRate = 0.0506;

//MB assumptions
var MBBracket1 = 36842;
var MBBracket2 = 79625;
var MBRate1 = 0.108;
var MBRate2 = 0.1275;
var MBRate3 = 0.174;
var MBPersonalAmount = 10855;
var MBEligibleDivCredit = 0.08;
var MBNonEligibleDivCredit = 0.007835;
var MBTaxCreditRate = 0.108;

//NB assumptions
var NBBracket1 = 47715;
var NBBracket2 = 95431;
var NBBracket3 = 176756;
var NBRate1 = 0.0940;
var NBRate2 = 0.14;
var NBRate3 = 0.16;
var NBRate4 = 0.195;
var NBPersonalAmount = 12458;
var NBEligibleDivCredit = 0.14;
var NBNonEligibleDivCredit = 0.0275;
var NBTaxCreditRate = 0.0940;

//NL assumptions
var NLBracket1 = 41457;
var NLBracket2 = 82913;
var NLBracket3 = 148027;
var NLBracket4 = 207239;
var NLBracket5 = 264750;
var NLBracket6 = 529500;
var NLBracket7 = 1059000;
var NLRate1 = 0.087;
var NLRate2 = 0.145;
var NLRate3 = 0.158;
var NLRate4 = 0.178;
var NLRate5 = 0.198;
var NLRate6 = 0.208;
var NLRate7 = 0.213;
var NLRate8 = 0.218;
var NLPersonalAmount = 10382;
var NLEligibleDivCredit = 0.063;
var NLNonEligibleDivCredit = 0.032;
var NLTaxCreditRate = 0.087;

//NT assumptions
var NTBracket1 = 48326;
var NTBracket2 = 96655;
var NTBracket3 = 157139;
var NTRate1 = 0.059;
var NTRate2 = 0.086;
var NTRate3 = 0.122;
var NTRate4 = 0.1405;
var NTPersonalAmount = 16593;
var NTEligibleDivCredit = 0.115;
var NTNonEligibleDivCredit = 0.06;
var NTTaxCreditRate = 0.059;

//NS assumptions
var NSBracket1 = 29590;
var NSBracket2 = 59180;
var NSBracket3 = 93000;
var NSBracket4 = 150000;
var NSRate1 = 0.0879;
var NSRate2 = 0.1495;
var NSRate3 = 0.1667;
var NSRate4 = 0.175;
var NSRate5 = 0.21;
var NSPersonalAmount = 8481;
var NSEnhancedPersonalAmount = 0;
var NSTotalPersonalAmount = 0;
var NSEligibleDivCredit = 0.0885;
var NSNonEligibleDivCredit = 0.0299;
var NSTaxCreditRate = 0.0879;

//NU assumptions
var NUBracket1 = 50877;
var NUBracket2 = 101754;
var NUBracket3 = 165429;
var NURate1 = 0.04;
var NURate2 = 0.07;
var NURate3 = 0.09;
var NURate4 = 0.115;
var NUPersonalAmount = 17925;
var NUEligibleDivCredit = 0.0551;
var NUNonEligibleDivCredit = 0.0261;
var NUTaxCreditRate = 0.04;

//ON assumptions
var ONBracket1 = 49231;
var ONBracket2 = 98463;
var ONBracket3 = 150000;
var ONBracket4 = 220000;
var ONRate1 = 0.0505;
var ONRate2 = 0.0915;
var ONRate3 = 0.1116;
var ONRate4 = 0.1216;
var ONRate5 = 0.1316;
var ONPersonalAmount = 11865;
var ONEligibleDivCredit = 0.10;
var ONNonEligibleDivCredit = 0.029863;
var ONTaxCreditRate = 0.0505;

var ONSurtax1 = 5315;
var ONSurtax2 = 6802;
var ONSurtax1Rate = 0.2;
var ONSurtax2Rate = 0.36;

//PE assumptions
var PEBracket1 = 31984;
var PEBracket2 = 63969;
var PERate1 = 0.098;
var PERate2 = 0.138;
var PERate3 = 0.167;
var PEPersonalAmount = 12000;
var PEEligibleDivCredit = 0.105;
var PENonEligibleDivCredit = 0.0130;
var PETaxCreditRate = 0.098;

var PESurtax1 = 12500;
var PESurtax1Rate = 0.1;

//QC assumptions
var QCBracket1 = 49275;
var QCBracket2 = 98540;
var QCBracket3 = 119910;
var QCRate1 = 0.15;
var QCRate2 = 0.20;
var QCRate3 = 0.24;
var QCRate4 = 0.2575;
var QCPersonalAmount = 17183;
var QCEligibleDivCredit = 0.117;
var QCNonEligibleDivCredit = 0.0342;
var QCTaxCreditRate = 0.15;

//SK assumptions
var SKBracket1 = 49720;
var SKBracket2 = 142058;
var SKRate1 = 0.105;
var SKRate2 = 0.125;
var SKRate3 = 0.145;
var SKPersonalAmount = 17661;
var SKEligibleDivCredit = 0.11;
var SKNonEligibleDivCredit = 0.02105;
var SKTaxCreditRate = 0.105;

//YT assumptions
var YTBracket1 = 53359;
var YTBracket2 = 106717;
var YTBracket3 = 165430;
var YTBracket4 = 235675;
var YTBracket5 = 500000;
var YTRate1 = 0.064;
var YTRate2 = 0.09;
var YTRate3 = 0.109;
var YTRate4 = 0.129;
var YTRate5 = 0.128;
var YTRate6 = 0.15;
var YTPersonalAmount = 15000;
var YTEligibleDivCredit = 0.1202;
var YTNonEligibleDivCredit = 0.0067;
var YTTaxCreditRate = 0.064;

//Analysis #1
var totalPreTaxIncomeOutput = document.getElementById("totalPreTaxIncomeOutput");

//Income Description
var moreInfoSwitch = 0;
var moreInfoButton = document.getElementById("moreInfoButton");
var incomeDescriptionDiv = document.getElementById("incomeDescriptionDiv");

//Analysis #2 Assumptions
var netIncomeGoal = 0;
var grossIncomeArray = [];

var chart4;
var grossIncomeBarChart = document.getElementById("grossIncomeBarChart");


//Analysis #3 Assumptions

var provinceA = "AB";
var provinceB = "BC";

var analysis3Para = document.getElementById("analysis3Para");

var grossIncomeLabelArray = [];
var provinceANetIncomeArray = [];
var provinceBNetIncomeArray = [];
var provinceDeltaArray = [];

//Analysis #4 Assumptions

var provinceANetIncome = 0;
var provinceBNetIncome = 0;

var netProvinceA = "BC";
var netProvinceB = "QC";

var incomeA = 0;
var incomeB = 0;

var provinceAOutputs = [];
var provinceBOutputs = [];

//Fill Table function
var mainTable = document.getElementById("mainTable");
var dataLength = 13;
var numberCol = 11;

var labelArraySorted = [];
var totalGrossIncomeArraySorted = [];
var federalTaxArraySorted = [];
var provincialTaxArraySorted = [];
var CPPTaxArraySorted = [];
var EITaxArraySorted = [];
var QPPTaxArraySorted = [];
var CPPQPPTaxArraySorted = [];
var QPIPTaxArraySorted = [];
var totalTaxesArraySorted = [];
var netIncomeArraySorted = [];
var avgTaxRateArraySorted = [];
var marginalTaxRateArraySorted = [];



//main method
addInputEventListeners();
getUserInputs();

calculateTaxes();
showOutputs();
fillTable();

seekPreTaxIncome(netIncomeGoal);
showOutputs2();

provinceComparison(provinceA,provinceB);
showOutputs3();

netPaycheckCalculator(netProvinceA,netProvinceB,incomeA,incomeB);
showOutputs4();

function addInputEventListeners() {
    var inputsArray1 = document.getElementsByClassName("userInput1");
    var inputsArray2 = document.getElementsByClassName("userInput2");
    var inputsArray3 = document.getElementsByClassName("userInput3");
    var inputsArray4 = document.getElementsByClassName("userInput4");

    for(i=0;i<inputsArray1.length;i++) {
        inputsArray1[i].addEventListener('change',refreshAnalysis1, false);
    }

    for(i=0;i<inputsArray2.length;i++) {
        inputsArray2[i].addEventListener('change',refreshAnalysis2, false);
    }

    for(i=0;i<inputsArray3.length;i++) {
        inputsArray3[i].addEventListener('change',refreshAnalysis3, false);
    }

    for(i=0;i<inputsArray4.length;i++) {
        inputsArray4[i].addEventListener('change',refreshAnalysis4, false);
    }
}


function getUserInputs(){

    //Analysis #1
    employmentIncome = Number(document.getElementById("employmentIncome").value);
    capitalGains = Number(document.getElementById("capitalGains").value);
    eligibleDividends = Number(document.getElementById("eligibleDividends").value);
    nonEligibleDividends = Number(document.getElementById("nonEligibleDividends").value);
    otherIncome = Number(document.getElementById("otherIncome").value);
    RRSPContribution = Number(document.getElementById("RRSPContribution").value);

    totalPreTaxIncomeOutput.innerHTML = "$"+(employmentIncome + capitalGains + eligibleDividends + nonEligibleDividends + otherIncome).toLocaleString();

    //Need to calculate CPP first before taxable income, given that enhanced CPP contribution is netted off of total taxable income
    calculateCPP();

    totalTaxableIncome = employmentIncome + capitalGains * capitalGainsRate + eligibleDividends * (1+eligibleGrossUp) + nonEligibleDividends * (1+nonEligibleGrossUp) + otherIncome - RRSPContribution - enhancedCPPTax;

    federalEmploymentAmount = Math.min(federalEmploymentMax,employmentIncome);

    //Analysis #2
    netIncomeGoal = Number(document.getElementById("afterTaxIncomeAssumption").value);

    //Analysis #3
    provinceA = String(document.getElementById("regionDropDownListA").value);
    provinceB = String(document.getElementById("regionDropDownListB").value);

    //Analysis #4
    netProvinceA = String(document.getElementById("netRegionDropDownListA").value);
    netProvinceB = String(document.getElementById("netRegionDropDownListB").value);

    incomeA = Number(document.getElementById("employmentIncomeA").value);
    incomeB = Number(document.getElementById("employmentIncomeB").value);

}


function calculateTaxes(){

    calculateCPP();
    calculateQPP();
    calculateEI();
    calculateQPIP();
    calculateOHIP();
    
    calculateFedTaxes();
    
    calculateAB();
    calculateBC();
    calculateMB();
    calculateNB();
    calculateNL();
    calculateNT();
    calculateNS();
    calculateNU();
    calculateON();
    calculatePE();
    calculateQC();
    calculateSK();
    calculateYT();

    //calculate total taxes
    totalABTaxes = federalTaxROC+ABTax+CPPTax+EITaxROC;
    totalBCTaxes = federalTaxROC+BCTax+CPPTax+EITaxROC;
    totalMBTaxes = federalTaxROC+MBTax+CPPTax+EITaxROC;
    totalNBTaxes = federalTaxROC+NBTax+CPPTax+EITaxROC;
    totalNLTaxes = federalTaxROC+NLTax+CPPTax+EITaxROC;
    totalNTTaxes = federalTaxROC+NTTax+CPPTax+EITaxROC;
    totalNSTaxes = federalTaxROC+NSTax+CPPTax+EITaxROC;
    totalNUTaxes = federalTaxROC+NUTax+CPPTax+EITaxROC;
    totalONTaxes = federalTaxROC+ONTax+CPPTax+EITaxROC;
    totalPETaxes = federalTaxROC+PETax+CPPTax+EITaxROC;
    totalQCTaxes = federalTaxQC+QCTax+QPPTax+EITaxQC+QPIPTax;
    totalSKTaxes = federalTaxROC+SKTax+CPPTax+EITaxROC;
    totalYTTaxes = federalTaxROC+YTTax+CPPTax+EITaxROC;

    totalTaxesArray=[totalABTaxes,totalBCTaxes,totalMBTaxes,totalNBTaxes,totalNLTaxes,totalNTTaxes,totalNSTaxes,totalNUTaxes,totalONTaxes,totalPETaxes,totalQCTaxes,totalSKTaxes,totalYTTaxes];

}


function showOutputs(){

    totalGrossIncome = employmentIncome + capitalGains + eligibleDividends + nonEligibleDividends + otherIncome;

    var netIncomeAB = totalGrossIncome - totalABTaxes;
    var netIncomeBC = totalGrossIncome - totalBCTaxes;
    var netIncomeMB = totalGrossIncome - totalMBTaxes;
    var netIncomeNB = totalGrossIncome - totalNBTaxes;
    var netIncomeNL = totalGrossIncome - totalNLTaxes;
    var netIncomeNT = totalGrossIncome - totalNTTaxes;
    var netIncomeNS = totalGrossIncome - totalNSTaxes;
    var netIncomeNU = totalGrossIncome - totalNUTaxes;
    var netIncomeON = totalGrossIncome - totalONTaxes;
    var netIncomePE = totalGrossIncome - totalPETaxes;
    var netIncomeQC = totalGrossIncome - totalQCTaxes;
    var netIncomeSK = totalGrossIncome - totalSKTaxes;
    var netIncomeYT = totalGrossIncome - totalYTTaxes;
   
    var ABAvgRate = totalABTaxes / totalGrossIncome;
    var BCAvgRate = totalBCTaxes / totalGrossIncome;
    var MBAvgRate = totalMBTaxes / totalGrossIncome;
    var NBAvgRate = totalNBTaxes / totalGrossIncome;
    var NLAvgRate = totalNLTaxes / totalGrossIncome;
    var NTAvgRate = totalNTTaxes / totalGrossIncome;
    var NSAvgRate = totalNSTaxes / totalGrossIncome;
    var NUAvgRate = totalNUTaxes / totalGrossIncome;
    var ONAvgRate = totalONTaxes / totalGrossIncome;
    var PEAvgRate = totalPETaxes / totalGrossIncome;
    var QCAvgRate = totalQCTaxes / totalGrossIncome;
    var SKAvgRate = totalSKTaxes / totalGrossIncome;
    var YTAvgRate = totalYTTaxes / totalGrossIncome;

    totalGrossIncomeArray = [totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome];
    federalTaxArray = [federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxQC,federalTaxROC,federalTaxROC,];
    provincialTaxArray = [ABTax,BCTax,MBTax,NBTax,NLTax,NTTax,NSTax,NUTax,ONTax,PETax,QCTax,SKTax,YTTax];
    CPPTaxArray=[CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,"n/a",CPPTax,CPPTax];
    EITaxArray=[EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxQC,EITaxROC,EITaxROC];
    QPPTaxArray=["n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a",QPPTax,"n/a","n/a",];
    CPPQPPTaxArray=[CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,QPPTax,CPPTax,CPPTax];
    QPIPTaxArray=["n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a",QPIPTax,"n/a","n/a",];
    totalTaxesArray=[totalABTaxes,totalBCTaxes,totalMBTaxes,totalNBTaxes,totalNLTaxes,totalNTTaxes,totalNSTaxes,totalNUTaxes,totalONTaxes,totalPETaxes,totalQCTaxes,totalSKTaxes,totalYTTaxes];
    netIncomeArray=[netIncomeAB,netIncomeBC,netIncomeMB,netIncomeNB,netIncomeNL,netIncomeNT,netIncomeNS,netIncomeNU,netIncomeON,netIncomePE,netIncomeQC,netIncomeSK,netIncomeYT];
    avgTaxRateArray=[ABAvgRate,BCAvgRate,MBAvgRate,NBAvgRate,NLAvgRate,NTAvgRate,NSAvgRate,NUAvgRate,ONAvgRate,PEAvgRate,QCAvgRate,SKAvgRate,YTAvgRate];
    marginalTaxRateArray = calculateMarginalRates();


    //rank after-tax income array
    netIncomeArraySorted = netIncomeArray.slice(0);

    netIncomeArraySorted.sort(function(a,b){
        return a - b
    });

    netIncomeArraySorted.reverse();


    //generate array of after-tax income ranks
    var netIncomeRankOrder = [];
    var netIncomeArraySortedCopy = netIncomeArraySorted.slice(0);

    for(i=0; i<netIncomeArray.length; i++){
        netIncomeRankOrder[i] = netIncomeArraySortedCopy.indexOf(netIncomeArray[i]);
        netIncomeArraySortedCopy[netIncomeRankOrder[i]] = "n/a";
    }

    //create new output arrays and sort by order of after-tax income
    labelArraySorted = sortArrayByRank(labelArray, netIncomeRankOrder);
    totalGrossIncomeArraySorted = sortArrayByRank(totalGrossIncomeArray, netIncomeRankOrder);
    federalTaxArraySorted = sortArrayByRank(federalTaxArray, netIncomeRankOrder);
    provincialTaxArraySorted = sortArrayByRank(provincialTaxArray, netIncomeRankOrder);
    CPPTaxArraySorted = sortArrayByRank(CPPTaxArray, netIncomeRankOrder);
    EITaxArraySorted = sortArrayByRank(EITaxArray, netIncomeRankOrder);
    QPPTaxArraySorted = sortArrayByRank(QPPTaxArray, netIncomeRankOrder);
    CPPQPPTaxArraySorted = sortArrayByRank(CPPQPPTaxArray, netIncomeRankOrder);
    QPIPTaxArraySorted = sortArrayByRank(QPIPTaxArray, netIncomeRankOrder);
    totalTaxesArraySorted = sortArrayByRank(totalTaxesArray, netIncomeRankOrder);
    avgTaxRateArraySorted = sortArrayByRank(avgTaxRateArray, netIncomeRankOrder);
    marginalTaxRateArraySorted = sortArrayByRank(marginalTaxRateArray, netIncomeRankOrder);

    //draw bar chart for after-tax income and total taxes paid
    var ctx = afterTaxIncomeBarChart.getContext('2d');

    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',
    
        // The data for our dataset
        data: {
            labels: labelArraySorted,
            datasets: [
                {
                    data: netIncomeArraySorted,
                    backgroundColor: graphColourArray2, 
                    borderWidth:1,
                    borderColor:"#555555",
                },                
            ]
        },
    
        //options for annual returns chart.js bar chart
        options: outputBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,

            tooltips: {
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += "$"+(Math.round(tooltipItem.xLabel)).toLocaleString();
                        return label;
                    }
                },
            },
            
            scales: {
                xAxes: [{
                    scaleLabel: {
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    ticks: {
                        fontColor: "rgb(56,56,56)",

                        min: 0,
                        maxTicksLimit: 6,

                        callback: function(value, index, values) {
                            return "$"+value.toLocaleString();
                        },
                    },

                    gridLines: {
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                yAxes: [{
                    
                    ticks: {
                        autoSkip: false,
                        fontSize: 12,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                    },

                    scaleLabel: {
                        display: true,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    gridLines: {
                        //zeroLineColor: "rgb(56,56,56)",
                        //zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {
                display: false
            },

            title: {
                display: true,
                text: "After-Tax Income",
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 8,
            },

            plugins: {
                datalabels: {
                    formatter: function(value, context) {
                        return '$' + Math.round(value).toLocaleString();                   
                    },

                    color: "#555555",

                    anchor: "end",
                    align: "end",

                    clamp: true,
                }
            }
        }
    });

    //draw bar chart for after-tax income and total taxes paid
    var ctx2 = totalTaxBarChart.getContext('2d');

    chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'horizontalBar',
    
        // The data for our dataset
        data: {
            labels: labelArraySorted,
            datasets: [
                {
                    data: totalTaxesArraySorted,
                    backgroundColor: graphColourArray2, 
                    borderWidth:1,
                    borderColor:"#555555",
                },                
            ]
        },
    
        //options for annual returns chart.js bar chart
        options: outputBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,

            tooltips: {
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += "$"+(Math.round(tooltipItem.xLabel)).toLocaleString();
                        return label;
                    }
                },
            },
            
            scales: {
                xAxes: [{
                    scaleLabel: {
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    ticks: {
                        fontColor: "rgb(56,56,56)",

                        min: 0,
                        maxTicksLimit: 6,

                        callback: function(value, index, values) {
                            return "$"+value.toLocaleString();
                        },
                    },

                    gridLines: {
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                yAxes: [{
                    
                    ticks: {
                        autoSkip: false,
                        fontSize: 12,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                    },

                    scaleLabel: {
                        display: true,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    gridLines: {
                        //zeroLineColor: "rgb(56,56,56)",
                        //zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {
                display: false
            },

            title: {
                display: true,
                text: "Total Taxes Paid",
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 8,
            },

            plugins: {
                datalabels: {
                    formatter: function(value, context) {
                        return '$' + Math.round(value).toLocaleString();                   
                    },

                    color: "#555555",

                    anchor: "end",
                    align: "end",

                    clamp: true,
                }
            }
        }
    });

    //draw bar chart for after-tax income and total taxes paid
    var ctx3 = avgTaxRateBarChart.getContext('2d');

    chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'horizontalBar',
    
        // The data for our dataset
        data: {
            labels: labelArraySorted,
            datasets: [
                {
                    data: avgTaxRateArraySorted,
                    backgroundColor: graphColourArray2, 
                    borderWidth:1,
                    borderColor:"#555555",
                },                
            ]
        },
    
        //options for annual returns chart.js bar chart
        options: outputBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,

            tooltips: {
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += (Math.round(tooltipItem.xLabel*1000)/10).toLocaleString()+"%";
                        return label;
                    }
                },
            },
            
            scales: {
                xAxes: [{
                    scaleLabel: {
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    ticks: {
                        fontColor: "rgb(56,56,56)",

                        min: 0,
                        maxTicksLimit: 6,

                        callback: function(value, index, values) {
                            return Math.round(value*100).toLocaleString()+"%";
                        },
                    },

                    gridLines: {
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                yAxes: [{
                    
                    ticks: {
                        autoSkip: false,
                        fontSize: 12,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                    },

                    scaleLabel: {
                        display: true,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    gridLines: {
                        //zeroLineColor: "rgb(56,56,56)",
                        //zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {
                display: false
            },

            title: {
                display: true,
                text: "Average Tax Rate",
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 8,
            },

            plugins: {
                datalabels: {
                    formatter: function(value, context) {
                        return (Math.round(value*1000)/10).toLocaleString()+"%";                   
                    },

                    clamp: true,

                    color: "#555555",

                    anchor: "end",
                    align: "end",
                }
            }
        }
    });

}


function refreshAnalysis1(){
    console.log("refresh analysis #1");
    chart.destroy();
    chart2.destroy();
    chart3.destroy();
    getUserInputs();
    calculateTaxes();
    showOutputs();

    var tableRows = mainTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    //delete all table rows ex header
    for (var x=rowCount-1; x>0; x--) {
        mainTable.removeChild(tableRows[x]);
    }

    fillTable();
}


function refreshAnalysis2(){
    console.log("refresh analysis #2");
    chart4.destroy();
    getUserInputs();
    seekPreTaxIncome(netIncomeGoal);
    showOutputs2();
}

function refreshAnalysis3(){
    console.log("refresh analysis #3");
    chart5.destroy();
    chart6.destroy();
    getUserInputs();
    provinceComparison(provinceA,provinceB);
    showOutputs3();
}

function refreshAnalysis4(){
    console.log("refresh analysis #4");
    getUserInputs();
    netPaycheckCalculator(netProvinceA,netProvinceB,incomeA,incomeB);
    showOutputs4();
}

function sortArrayByRank(unsortedArray, rankOrder){

    var sortedArray = [];

    for(i=0; i<unsortedArray.length; i++){
        sortedArray[i] = unsortedArray[rankOrder.indexOf(i)];
    }

    return sortedArray;
}

function calculateMarginalRates(){
    
    calculateTaxes();

    var marginalArray = [];
    var currentTotalTaxes = [];
    currentTotalTaxes = totalTaxesArray.slice(0);

    employmentIncome += 1000;
    totalTaxableIncome += 1000;

    calculateTaxes();

    var newTotalTaxes =[totalABTaxes,totalBCTaxes,totalMBTaxes,totalNBTaxes,totalNLTaxes,totalNTTaxes,totalNSTaxes,totalNUTaxes,totalONTaxes,totalPETaxes,totalQCTaxes,totalSKTaxes,totalYTTaxes];

    for(i=0; i<currentTotalTaxes.length; i++){
        marginalArray[i] = (newTotalTaxes[i] - currentTotalTaxes[i]) / 1000;
    }

    employmentIncome -= 1000;
    totalTaxableIncome -= 1000;

    calculateTaxes();

    return marginalArray;

}

function calculateCPP(){

    //CPP
    CPPTax = Math.max(Math.min((employmentIncome - CPPExemption) * CPPContributionRate, CPPMaxContribution),0);
    enhancedCPPTax = enhancedCPPRate / CPPContributionRate * CPPTax;
    baseCPPTax = CPPTax - enhancedCPPTax;
}

function calculateQPP(){
    //QPP
    QPPTax = Math.max(Math.min((employmentIncome - QPPExemption) * QPPContributionRate, QPPMaxContribution),0);
    enhancedQPPTax = enhancedQPPRate / QPPContributionRate * QPPTax;
    baseQPPTax = QPPTax - enhancedQPPTax;
}

function calculateEI(){

    //EI Rest of Canada
    EITaxROC = Math.max(Math.min(employmentIncome * EIROCRate, EIROCMax),0);

    //EI (Quebec)
    EITaxQC = Math.max(Math.min(employmentIncome * EIQCRate, EIQCMax),0);
}

function calculateQPIP(){
    //QPIP
    if(employmentIncome < QPIPExemption){
        QPIPTax = 0;
    } else{
        QPIPTax = Math.min(QPIPMaxContribution, employmentIncome * QPIPContributionRate);
    }
}

function calculateOHIP(){
    //OHIP
    if(totalTaxableIncome < 20000){
        OHIPContribution = 0;
    } else if(totalTaxableIncome < 25000){
        OHIPContribution = (totalTaxableIncome - 20000) * 0.06;
    } else if(totalTaxableIncome < 36000){
        OHIPContribution = 300;
    } else if(totalTaxableIncome < 38500){
        OHIPContribution = 300 + (totalTaxableIncome - 36000) * 0.06;
    } else if(totalTaxableIncome < 48000){
        OHIPContribution = 450;
    } else if(totalTaxableIncome < 48600){
        OHIPContribution = 450 + (totalTaxableIncome - 48000) * 0.25;
    } else if(totalTaxableIncome < 72000){
        OHIPContribution = 600;
    } else if(totalTaxableIncome < 72600){
        OHIPContribution = 600 + (totalTaxableIncome - 72000) * 0.25;
    } else if(totalTaxableIncome < 200000){
        OHIPContribution = 750;
    } else if(totalTaxableIncome < 200600){
        OHIPContribution = 750 + (totalTaxableIncome - 200000) * 0.25;
    } else {
        OHIPContribution = 900;
    }
}

function calculateFedTaxes(){

    //Federal Rest of Canada
    var fedBracket1Amount = 0;
    var fedBracket2Amount = 0;
    var fedBracket3Amount = 0;
    var fedBracket4Amount = 0;
    var fedBracket5Amount = 0;

    var fedBracket1Tax = 0;
    var fedBracket2Tax = 0;
    var fedBracket3Tax = 0;
    var fedBracket4Tax = 0;
    var fedBracket5Tax = 0;

    fedBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),federalBracket1);
    fedBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),federalBracket2)-fedBracket1Amount);
    fedBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),federalBracket3)-fedBracket1Amount-fedBracket2Amount);
    fedBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),federalBracket4)-fedBracket1Amount-fedBracket2Amount-fedBracket3Amount);
    fedBracket5Amount = (Math.max(0,totalTaxableIncome)-fedBracket1Amount-fedBracket2Amount-fedBracket3Amount-fedBracket4Amount);

    fedBracket1Tax = fedBracket1Amount * federalRate1;
    fedBracket2Tax = fedBracket2Amount * federalRate2;
    fedBracket3Tax = fedBracket3Amount * federalRate3;
    fedBracket4Tax = fedBracket4Amount * federalRate4;
    fedBracket5Tax = fedBracket5Amount * federalRate5;

    var fedTaxSubtotal = fedBracket1Tax + fedBracket2Tax + fedBracket3Tax + fedBracket4Tax + fedBracket5Tax;

    enhancedBPA = maxEnhancedBPA - maxEnhancedBPA * Math.min(1, Math.max(0, (totalTaxableIncome - enhancedBPAThresholdStart) / (enhancedBPAThresholdEnd - enhancedBPAThresholdStart)));

    totalFederalPersonalAmount = baseFederalPersonalAmount + enhancedBPA;

    
    
    var fedTaxCredits = (totalFederalPersonalAmount + baseCPPTax + EITaxROC + federalEmploymentAmount) * federalTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * federalEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * federalNonEligibleDivCredit;

    federalTaxROC = Math.max(fedTaxSubtotal - fedTaxCredits,0);

    //Federal (Quebec)
    var fedTaxCreditsQC = (totalFederalPersonalAmount + baseQPPTax + QPIPTax + EITaxQC + federalEmploymentAmount) * federalTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * federalEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * federalNonEligibleDivCredit;

    federalTaxQC = Math.max(fedTaxSubtotal - fedTaxCreditsQC,0) * (1-QCAbatementRate);
}

function calculateAB(){
    //AB Provincial
    var ABBracket1Amount = 0;
    var ABBracket2Amount = 0;
    var ABBracket3Amount = 0;
    var ABBracket4Amount = 0;
    var ABBracket5Amount = 0;

    var ABBracket1Tax = 0;
    var ABBracket2Tax = 0;
    var ABBracket3Tax = 0;
    var ABBracket4Tax = 0;
    var ABBracket5Tax = 0;

    ABBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),ABBracket1);
    ABBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),ABBracket2)-ABBracket1Amount);
    ABBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),ABBracket3)-ABBracket1Amount-ABBracket2Amount);
    ABBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),ABBracket4)-ABBracket1Amount-ABBracket2Amount-ABBracket3Amount);
    ABBracket5Amount = (Math.max(0,totalTaxableIncome)-ABBracket1Amount-ABBracket2Amount-ABBracket3Amount-ABBracket4Amount);

    ABBracket1Tax = ABBracket1Amount * ABRate1;
    ABBracket2Tax = ABBracket2Amount * ABRate2;
    ABBracket3Tax = ABBracket3Amount * ABRate3;
    ABBracket4Tax = ABBracket4Amount * ABRate4;
    ABBracket5Tax = ABBracket5Amount * ABRate5;

    var ABTaxSubtotal = ABBracket1Tax + ABBracket2Tax + ABBracket3Tax + ABBracket4Tax + ABBracket5Tax;
    
    var ABTaxCredits = (ABPersonalAmount + baseCPPTax + EITaxROC) * ABTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * ABEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * ABNonEligibleDivCredit;

    ABTax = Math.max(ABTaxSubtotal - ABTaxCredits,0);
}

function calculateBC(){
    //BC Provincial
    var BCBracket1Amount = 0;
    var BCBracket2Amount = 0;
    var BCBracket3Amount = 0;
    var BCBracket4Amount = 0;
    var BCBracket5Amount = 0;
    var BCBracket6Amount = 0;
    var BCBracket7Amount = 0;

    var BCBracket1Tax = 0;
    var BCBracket2Tax = 0;
    var BCBracket3Tax = 0;
    var BCBracket4Tax = 0;
    var BCBracket5Tax = 0;
    var BCBracket6Tax = 0;
    var BCBracket7Tax = 0;

    BCBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),BCBracket1);
    BCBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket2)-BCBracket1Amount);
    BCBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket3)-BCBracket1Amount-BCBracket2Amount);
    BCBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket4)-BCBracket1Amount-BCBracket2Amount-BCBracket3Amount);
    BCBracket5Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket5)-BCBracket1Amount-BCBracket2Amount-BCBracket3Amount-BCBracket4Amount);
    BCBracket6Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket6)-BCBracket1Amount-BCBracket2Amount-BCBracket3Amount-BCBracket4Amount-BCBracket5Amount);
    BCBracket7Amount = (Math.max(0,totalTaxableIncome)-BCBracket1Amount-BCBracket2Amount-BCBracket3Amount-BCBracket4Amount-BCBracket5Amount-BCBracket6Amount);

    BCBracket1Tax = BCBracket1Amount * BCRate1;
    BCBracket2Tax = BCBracket2Amount * BCRate2;
    BCBracket3Tax = BCBracket3Amount * BCRate3;
    BCBracket4Tax = BCBracket4Amount * BCRate4;
    BCBracket5Tax = BCBracket5Amount * BCRate5;
    BCBracket6Tax = BCBracket6Amount * BCRate6;
    BCBracket7Tax = BCBracket7Amount * BCRate7;

    var BCTaxSubtotal = BCBracket1Tax + BCBracket2Tax + BCBracket3Tax + BCBracket4Tax + BCBracket5Tax + BCBracket6Tax + BCBracket7Tax;
    
    var BCTaxCredits = (BCPersonalAmount + baseCPPTax + EITaxROC) * BCTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * BCEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * BCNonEligibleDivCredit;

    BCTax = Math.max(BCTaxSubtotal - BCTaxCredits,0);
}

function calculateMB(){
    //MB Provincial
    var MBBracket1Amount = 0;
    var MBBracket2Amount = 0;
    var MBBracket3Amount = 0;

    var MBBracket1Tax = 0;
    var MBBracket2Tax = 0;
    var MBBracket3Tax = 0;

    MBBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),MBBracket1);
    MBBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),MBBracket2)-MBBracket1Amount);
    MBBracket3Amount = (Math.max(0,totalTaxableIncome)-MBBracket1Amount-MBBracket2Amount);

    MBBracket1Tax = MBBracket1Amount * MBRate1;
    MBBracket2Tax = MBBracket2Amount * MBRate2;
    MBBracket3Tax = MBBracket3Amount * MBRate3;

    var MBTaxSubtotal = MBBracket1Tax + MBBracket2Tax + MBBracket3Tax;
    
    var MBTaxCredits = (MBPersonalAmount + baseCPPTax + EITaxROC) * MBTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * MBEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * MBNonEligibleDivCredit;

    MBTax = Math.max(MBTaxSubtotal - MBTaxCredits,0);
}

function calculateNB(){
    //NB Provincial
    var NBBracket1Amount = 0;
    var NBBracket2Amount = 0;
    var NBBracket3Amount = 0;
    var NBBracket4Amount = 0;

    var NBBracket1Tax = 0;
    var NBBracket2Tax = 0;
    var NBBracket3Tax = 0;
    var NBBracket4Tax = 0;

    NBBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),NBBracket1);
    NBBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),NBBracket2)-NBBracket1Amount);
    NBBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),NBBracket3)-NBBracket1Amount-NBBracket2Amount);
    NBBracket4Amount = (Math.max(0,totalTaxableIncome)-NBBracket1Amount-NBBracket2Amount-NBBracket3Amount);

    NBBracket1Tax = NBBracket1Amount * NBRate1;
    NBBracket2Tax = NBBracket2Amount * NBRate2;
    NBBracket3Tax = NBBracket3Amount * NBRate3;
    NBBracket4Tax = NBBracket4Amount * NBRate4;

    var NBTaxSubtotal = NBBracket1Tax + NBBracket2Tax + NBBracket3Tax + NBBracket4Tax;
    
    var NBTaxCredits = (NBPersonalAmount + baseCPPTax + EITaxROC) * NBTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NBEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NBNonEligibleDivCredit;

    NBTax = Math.max(NBTaxSubtotal - NBTaxCredits,0);
}

function calculateNL(){
    //NL Provincial
    var NLBracket1Amount = 0;
    var NLBracket2Amount = 0;
    var NLBracket3Amount = 0;
    var NLBracket4Amount = 0;
    var NLBracket5Amount = 0;
    var NLBracket6Amount = 0;
    var NLBracket7Amount = 0;
    var NLBracket8Amount = 0;

    var NLBracket1Tax = 0;
    var NLBracket2Tax = 0;
    var NLBracket3Tax = 0;
    var NLBracket4Tax = 0;
    var NLBracket5Tax = 0;
    var NLBracket6Tax = 0;
    var NLBracket7Tax = 0;
    var NLBracket8Tax = 0;

    NLBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),NLBracket1);
    NLBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket2)-NLBracket1Amount);
    NLBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket3)-NLBracket1Amount-NLBracket2Amount);
    NLBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket4)-NLBracket1Amount-NLBracket2Amount-NLBracket3Amount);
    NLBracket5Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket5)-NLBracket1Amount-NLBracket2Amount-NLBracket3Amount-NLBracket4Amount);
    NLBracket6Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket6)-NLBracket1Amount-NLBracket2Amount-NLBracket3Amount-NLBracket4Amount-NLBracket5Amount);
    NLBracket7Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket7)-NLBracket1Amount-NLBracket2Amount-NLBracket3Amount-NLBracket4Amount-NLBracket5Amount-NLBracket6Amount);
    NLBracket8Amount = (Math.max(0,totalTaxableIncome)-NLBracket1Amount-NLBracket2Amount-NLBracket3Amount-NLBracket4Amount-NLBracket5Amount-NLBracket6Amount-NLBracket7Amount);

    NLBracket1Tax = NLBracket1Amount * NLRate1;
    NLBracket2Tax = NLBracket2Amount * NLRate2;
    NLBracket3Tax = NLBracket3Amount * NLRate3;
    NLBracket4Tax = NLBracket4Amount * NLRate4;
    NLBracket5Tax = NLBracket5Amount * NLRate5;
    NLBracket6Tax = NLBracket6Amount * NLRate6;
    NLBracket7Tax = NLBracket7Amount * NLRate7;
    NLBracket8Tax = NLBracket8Amount * NLRate8;

    var NLTaxSubtotal = NLBracket1Tax + NLBracket2Tax + NLBracket3Tax + NLBracket4Tax + NLBracket5Tax + NLBracket6Tax + NLBracket7Tax + NLBracket8Tax;
    
    var NLTaxCredits = (NLPersonalAmount + baseCPPTax + EITaxROC) * NLTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NLEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NLNonEligibleDivCredit;

    NLTax = Math.max(NLTaxSubtotal - NLTaxCredits,0);
}

function calculateNT(){
    //NT Territorial
    var NTBracket1Amount = 0;
    var NTBracket2Amount = 0;
    var NTBracket3Amount = 0;
    var NTBracket4Amount = 0;

    var NTBracket1Tax = 0;
    var NTBracket2Tax = 0;
    var NTBracket3Tax = 0;
    var NTBracket4Tax = 0;

    NTBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),NTBracket1);
    NTBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),NTBracket2)-NTBracket1Amount);
    NTBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),NTBracket3)-NTBracket1Amount-NTBracket2Amount);
    NTBracket4Amount = (Math.max(0,totalTaxableIncome)-NTBracket1Amount-NTBracket2Amount-NTBracket3Amount);

    NTBracket1Tax = NTBracket1Amount * NTRate1;
    NTBracket2Tax = NTBracket2Amount * NTRate2;
    NTBracket3Tax = NTBracket3Amount * NTRate3;
    NTBracket4Tax = NTBracket4Amount * NTRate4;

    var NTTaxSubtotal = NTBracket1Tax + NTBracket2Tax + NTBracket3Tax + NTBracket4Tax;
    
    var NTTaxCredits = (NTPersonalAmount + baseCPPTax + EITaxROC) * NTTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NTEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NTNonEligibleDivCredit;

    NTTax = Math.max(NTTaxSubtotal - NTTaxCredits,0);
}

function calculateNS(){
    //NS Provincial
    var NSBracket1Amount = 0;
    var NSBracket2Amount = 0;
    var NSBracket3Amount = 0;
    var NSBracket4Amount = 0;
    var NSBracket5Amount = 0;

    var NSBracket1Tax = 0;
    var NSBracket2Tax = 0;
    var NSBracket3Tax = 0;
    var NSBracket4Tax = 0;
    var NSBracket5Tax = 0;

    NSBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),NSBracket1);
    NSBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),NSBracket2)-NSBracket1Amount);
    NSBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),NSBracket3)-NSBracket1Amount-NSBracket2Amount);
    NSBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),NSBracket4)-NSBracket1Amount-NSBracket2Amount-NSBracket3Amount);
    NSBracket5Amount = (Math.max(0,totalTaxableIncome)-NSBracket1Amount-NSBracket2Amount-NSBracket3Amount-NSBracket4Amount);

    NSBracket1Tax = NSBracket1Amount * NSRate1;
    NSBracket2Tax = NSBracket2Amount * NSRate2;
    NSBracket3Tax = NSBracket3Amount * NSRate3;
    NSBracket4Tax = NSBracket4Amount * NSRate4;
    NSBracket5Tax = NSBracket5Amount * NSRate5;

    var NSTaxSubtotal = NSBracket1Tax + NSBracket2Tax + NSBracket3Tax + NSBracket4Tax + NSBracket5Tax;
    
    NSEnhancedPersonalAmount = Math.max(0,3000-Math.max(0,(totalTaxableIncome-25000)*0.06));
    NSTotalPersonalAmount = NSPersonalAmount+NSEnhancedPersonalAmount;
    
    var NSTaxCredits = (NSTotalPersonalAmount + baseCPPTax + EITaxROC) * NSTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NSEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NSNonEligibleDivCredit;

    NSTax = Math.max(NSTaxSubtotal - NSTaxCredits,0);
}


function calculateNU(){
    //NU Territorial
    var NUBracket1Amount = 0;
    var NUBracket2Amount = 0;
    var NUBracket3Amount = 0;
    var NUBracket4Amount = 0;

    var NUBracket1Tax = 0;
    var NUBracket2Tax = 0;
    var NUBracket3Tax = 0;
    var NUBracket4Tax = 0;

    NUBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),NUBracket1);
    NUBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),NUBracket2)-NUBracket1Amount);
    NUBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),NUBracket3)-NUBracket1Amount-NUBracket2Amount);
    NUBracket4Amount = (Math.max(0,totalTaxableIncome)-NUBracket1Amount-NUBracket2Amount-NUBracket3Amount);

    NUBracket1Tax = NUBracket1Amount * NURate1;
    NUBracket2Tax = NUBracket2Amount * NURate2;
    NUBracket3Tax = NUBracket3Amount * NURate3;
    NUBracket4Tax = NUBracket4Amount * NURate4;

    var NUTaxSubtotal = NUBracket1Tax + NUBracket2Tax + NUBracket3Tax + NUBracket4Tax;
    
    var NUTaxCredits = (NUPersonalAmount + baseCPPTax + EITaxROC) * NUTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NUEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NUNonEligibleDivCredit;

    NUTax = Math.max(NUTaxSubtotal - NUTaxCredits,0);
}


function calculateON(){
    //ON Provincial
    var ONBracket1Amount = 0;
    var ONBracket2Amount = 0;
    var ONBracket3Amount = 0;
    var ONBracket4Amount = 0;
    var ONBracket5Amount = 0;

    var ONBracket1Tax = 0;
    var ONBracket2Tax = 0;
    var ONBracket3Tax = 0;
    var ONBracket4Tax = 0;
    var ONBracket5Tax = 0;

    ONBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),ONBracket1);
    ONBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),ONBracket2)-ONBracket1Amount);
    ONBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),ONBracket3)-ONBracket1Amount-ONBracket2Amount);
    ONBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),ONBracket4)-ONBracket1Amount-ONBracket2Amount-ONBracket3Amount);
    ONBracket5Amount = (Math.max(0,totalTaxableIncome)-ONBracket1Amount-ONBracket2Amount-ONBracket3Amount-ONBracket4Amount);

    ONBracket1Tax = ONBracket1Amount * ONRate1;
    ONBracket2Tax = ONBracket2Amount * ONRate2;
    ONBracket3Tax = ONBracket3Amount * ONRate3;
    ONBracket4Tax = ONBracket4Amount * ONRate4;
    ONBracket5Tax = ONBracket5Amount * ONRate5;

    var ONTaxCredits1 = (ONPersonalAmount + baseCPPTax + EITaxROC) * ONTaxCreditRate;

    var ONTaxBeforeSurtax = ONBracket1Tax + ONBracket2Tax + ONBracket3Tax + ONBracket4Tax + ONBracket5Tax - ONTaxCredits1;
    
    var ONSurtax = Math.max(0,ONTaxBeforeSurtax - ONSurtax1) * ONSurtax1Rate + Math.max(0,ONTaxBeforeSurtax - ONSurtax2) * ONSurtax2Rate;
    
    var ONTaxCredits2 = eligibleDividends * (1+eligibleGrossUp) * ONEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * ONNonEligibleDivCredit;
    
    ONTax = Math.max(ONTaxBeforeSurtax + ONSurtax - ONTaxCredits2,0) + OHIPContribution;
}


function calculatePE(){
    //PE Provincial
    var PEBracket1Amount = 0;
    var PEBracket2Amount = 0;
    var PEBracket3Amount = 0;

    var PEBracket1Tax = 0;
    var PEBracket2Tax = 0;
    var PEBracket3Tax = 0;

    PEBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),PEBracket1);
    PEBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),PEBracket2)-PEBracket1Amount);
    PEBracket3Amount = (Math.max(0,totalTaxableIncome)-PEBracket1Amount-PEBracket2Amount);

    PEBracket1Tax = PEBracket1Amount * PERate1;
    PEBracket2Tax = PEBracket2Amount * PERate2;
    PEBracket3Tax = PEBracket3Amount * PERate3;

    var PETaxSubtotal = PEBracket1Tax + PEBracket2Tax + PEBracket3Tax;
    
    var PETaxCredits = (PEPersonalAmount + baseCPPTax + EITaxROC) * PETaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * PEEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * PENonEligibleDivCredit;

    var PETaxBeforeSurtax = Math.max(PETaxSubtotal - PETaxCredits,0);

    var PESurtax = Math.max(PETaxBeforeSurtax - PESurtax1, 0) * PESurtax1Rate;
    
    PETax = PETaxBeforeSurtax + PESurtax;
}


function calculateQC(){
    //QC Provincial
    var QCBracket1Amount = 0;
    var QCBracket2Amount = 0;
    var QCBracket3Amount = 0;
    var QCBracket4Amount = 0;

    var QCBracket1Tax = 0;
    var QCBracket2Tax = 0;
    var QCBracket3Tax = 0;
    var QCBracket4Tax = 0;

    QCBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),QCBracket1);
    QCBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),QCBracket2)-QCBracket1Amount);
    QCBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),QCBracket3)-QCBracket1Amount-QCBracket2Amount);
    QCBracket4Amount = (Math.max(0,totalTaxableIncome)-QCBracket1Amount-QCBracket2Amount-QCBracket3Amount);

    QCBracket1Tax = QCBracket1Amount * QCRate1;
    QCBracket2Tax = QCBracket2Amount * QCRate2;
    QCBracket3Tax = QCBracket3Amount * QCRate3;
    QCBracket4Tax = QCBracket4Amount * QCRate4;

    var QCTaxSubtotal = QCBracket1Tax + QCBracket2Tax + QCBracket3Tax + QCBracket4Tax;
    
    var QCTaxCredits = (QCPersonalAmount) * QCTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * QCEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * QCNonEligibleDivCredit;

    QCTax = Math.max(QCTaxSubtotal - QCTaxCredits,0);
}

function calculateSK(){
    //SK Provincial
    var SKBracket1Amount = 0;
    var SKBracket2Amount = 0;
    var SKBracket3Amount = 0;

    var SKBracket1Tax = 0;
    var SKBracket2Tax = 0;
    var SKBracket3Tax = 0;

    SKBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),SKBracket1);
    SKBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),SKBracket2)-SKBracket1Amount);
    SKBracket3Amount = (Math.max(0,totalTaxableIncome)-SKBracket1Amount-SKBracket2Amount);

    SKBracket1Tax = SKBracket1Amount * SKRate1;
    SKBracket2Tax = SKBracket2Amount * SKRate2;
    SKBracket3Tax = SKBracket3Amount * SKRate3;

    var SKTaxSubtotal = SKBracket1Tax + SKBracket2Tax + SKBracket3Tax;
    
    var SKTaxCredits = (SKPersonalAmount + baseCPPTax + EITaxROC) * SKTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * SKEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * SKNonEligibleDivCredit;

    SKTax = Math.max(SKTaxSubtotal - SKTaxCredits,0);
}

function calculateYT(){
    //YT Territorial
    var YTBracket1Amount = 0;
    var YTBracket2Amount = 0;
    var YTBracket3Amount = 0;
    var YTBracket4Amount = 0;
    var YTBracket5Amount = 0;
    var YTBracket6Amount = 0;

    var YTBracket1Tax = 0;
    var YTBracket2Tax = 0;
    var YTBracket3Tax = 0;
    var YTBracket4Tax = 0;
    var YTBracket5Tax = 0;
    var YTBracket6Tax = 0;

    YTBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),YTBracket1);
    YTBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),YTBracket2)-YTBracket1Amount);
    YTBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),YTBracket3)-YTBracket1Amount-YTBracket2Amount);
    YTBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),YTBracket4)-YTBracket1Amount-YTBracket2Amount-YTBracket3Amount);
    YTBracket5Amount = (Math.min(Math.max(0,totalTaxableIncome),YTBracket5)-YTBracket1Amount-YTBracket2Amount-YTBracket3Amount-YTBracket4Amount);
    YTBracket6Amount = (Math.max(0,totalTaxableIncome)-YTBracket1Amount-YTBracket2Amount-YTBracket3Amount-YTBracket4Amount-YTBracket5Amount);

    YTBracket1Tax = YTBracket1Amount * YTRate1;
    YTBracket2Tax = YTBracket2Amount * YTRate2;
    YTBracket3Tax = YTBracket3Amount * YTRate3;
    YTBracket4Tax = YTBracket4Amount * YTRate4;
    YTBracket5Tax = YTBracket5Amount * YTRate5;
    YTBracket6Tax = YTBracket6Amount * YTRate6;

    var YTTaxSubtotal = YTBracket1Tax + YTBracket2Tax + YTBracket3Tax + YTBracket4Tax + YTBracket5Tax + YTBracket6Tax;
    
    var YTTaxCredits = (YTPersonalAmount + baseCPPTax + EITaxROC + federalEmploymentAmount) * YTTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * YTEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * YTNonEligibleDivCredit;

    YTTax = Math.max(YTTaxSubtotal - YTTaxCredits,0);
}


function seekPreTaxIncome(netIncomeGoal){

    var maxLoops = 5000;
    var incomeSeekIncrement = 500;

    //reset all assumptions to zero
    employmentIncome = 0;
    capitalGains = 0;
    eligibleDividends = 0;
    nonEligibleDividends = 0;
    otherIncome = 0;
    RRSPContribution = 0;
    totalTaxableIncome = 0;

    var ABTestNetIncome = 0;
    var BCTestNetIncome = 0;
    var MBTestNetIncome = 0;
    var NBTestNetIncome = 0;
    var NLTestNetIncome = 0;
    var NSTestNetIncome = 0;
    var NTTestNetIncome = 0;
    var NUTestNetIncome = 0;
    var ONTestNetIncome = 0;
    var PETestNetIncome = 0;
    var QCTestNetIncome = 0;
    var SKTestNetIncome = 0;
    var YTTestNetIncome = 0;

    var ABGrossIncome = 0;
    var BCGrossIncome = 0;
    var MBGrossIncome = 0;
    var NBGrossIncome = 0;
    var NLGrossIncome = 0;
    var NSGrossIncome = 0;
    var NTGrossIncome = 0;
    var NUGrossIncome = 0;
    var ONGrossIncome = 0;
    var PEGrossIncome = 0;
    var QCGrossIncome = 0;
    var SKGrossIncome = 0;
    var YTGrossIncome = 0;
    
    //initialize switches for each province (set to 1 if net income goal has been reached)
    var ABSwitch = 0;
    var BCSwitch = 0;
    var MBSwitch = 0;
    var NBSwitch = 0;
    var NLSwitch = 0;
    var NTSwitch = 0;
    var NSSwitch = 0;
    var NUSwitch = 0;
    var ONSwitch = 0;
    var PESwitch = 0;
    var QCSwitch = 0;
    var SKSwitch = 0;
    var YTSwitch = 0;

    var switchTotal = 0;


    for(i=0;i<maxLoops;i++){
        employmentIncome = (i) * incomeSeekIncrement;

        calculateCPP();
        calculateQPP();

        totalTaxableIncome = (i) * incomeSeekIncrement - enhancedCPPTax;

        calculateEI();
        calculateQPIP();
        calculateOHIP();

        calculateFedTaxes();

        //AB
        if(ABSwitch==0){
            calculateAB();
            ABTestNetIncome = employmentIncome - federalTaxROC - ABTax - CPPTax - EITaxROC;
            
            if(ABTestNetIncome>=netIncomeGoal){
                ABSwitch = 1;
                ABGrossIncome = employmentIncome;
            }
        }

        //BC
        if(BCSwitch==0){
            calculateBC();
            BCTestNetIncome = employmentIncome - federalTaxROC - BCTax - CPPTax - EITaxROC;
            if(BCTestNetIncome>=netIncomeGoal){
                BCSwitch = 1;
                BCGrossIncome = employmentIncome;
            }
        }

        //MB
        if(MBSwitch==0){
            calculateMB();
            MBTestNetIncome = employmentIncome - federalTaxROC - MBTax - CPPTax - EITaxROC;
            if(MBTestNetIncome>=netIncomeGoal){
                MBSwitch = 1;
                MBGrossIncome = employmentIncome;
            }
        }

        //NB
        if(NBSwitch==0){
            calculateNB();
            NBTestNetIncome = employmentIncome - federalTaxROC - NBTax - CPPTax - EITaxROC;
            if(NBTestNetIncome>=netIncomeGoal){
                NBSwitch = 1;
                NBGrossIncome = employmentIncome;
            }
        }

        //NL
        if(NLSwitch==0){
            calculateNL();
            NLTestNetIncome = employmentIncome - federalTaxROC - NLTax - CPPTax - EITaxROC;
            if(NLTestNetIncome>=netIncomeGoal){
                NLSwitch = 1;
                NLGrossIncome = employmentIncome;
            }
        }

        //NT
        if(NTSwitch==0){
            calculateNT();
            NTTestNetIncome = employmentIncome - federalTaxROC - NTTax - CPPTax - EITaxROC;
            if(NTTestNetIncome>=netIncomeGoal){
                NTSwitch = 1;
                NTGrossIncome = employmentIncome;
            }
        }

        //NS
        if(NSSwitch==0){
            calculateNS();
            NSTestNetIncome = employmentIncome - federalTaxROC - NSTax - CPPTax - EITaxROC;
            if(NSTestNetIncome>=netIncomeGoal){
                NSSwitch = 1;
                NSGrossIncome = employmentIncome;
            }
        }

        //NU
        if(NUSwitch==0){
            calculateNU();
            NUTestNetIncome = employmentIncome - federalTaxROC - NUTax - CPPTax - EITaxROC;
            if(NUTestNetIncome>=netIncomeGoal){
                NUSwitch = 1;
                NUGrossIncome = employmentIncome;
            }
        }

        //ON
        if(ONSwitch==0){
            calculateON();
            ONTestNetIncome = employmentIncome - federalTaxROC - ONTax - CPPTax - EITaxROC;
            if(ONTestNetIncome>=netIncomeGoal){
                ONSwitch = 1;
                ONGrossIncome = employmentIncome;
            }
        }

        //PE
        if(PESwitch==0){
            calculatePE();
            PETestNetIncome = employmentIncome - federalTaxROC - PETax - CPPTax - EITaxROC;
            if(PETestNetIncome>=netIncomeGoal){
                PESwitch = 1;
                PEGrossIncome = employmentIncome;
            }
        }

        //QC
        if(QCSwitch==0){
            calculateQC();
            QCTestNetIncome = employmentIncome - federalTaxQC - QCTax - QPPTax - EITaxQC - QPIPTax;
            if(QCTestNetIncome>=netIncomeGoal){
                QCSwitch = 1;
                QCGrossIncome = employmentIncome;
            }
        }

        //SK
        if(SKSwitch==0){
            calculateSK();
            SKTestNetIncome = employmentIncome - federalTaxROC - SKTax - CPPTax - EITaxROC;
            if(SKTestNetIncome>=netIncomeGoal){
                SKSwitch = 1;
                SKGrossIncome = employmentIncome;
            }
        }

        //YT
        if(YTSwitch==0){
            calculateYT();
            YTTestNetIncome = employmentIncome - federalTaxROC - YTTax - CPPTax - EITaxROC;
            if(YTTestNetIncome>=netIncomeGoal){
                YTSwitch = 1;
                YTGrossIncome = employmentIncome;
            }
        }

        switchTotal = ABSwitch + BCSwitch + MBSwitch + NBSwitch + NLSwitch + NTSwitch + NSSwitch + NUSwitch + ONSwitch + PESwitch + QCSwitch + SKSwitch + YTSwitch;

        if(switchTotal==13){
            break;
        }
    }

    grossIncomeArray = [ABGrossIncome,BCGrossIncome,MBGrossIncome,NBGrossIncome,NLGrossIncome,NTGrossIncome,NSGrossIncome,NUGrossIncome,ONGrossIncome,PEGrossIncome,QCGrossIncome,SKGrossIncome,YTGrossIncome];
    
}

function showOutputs2(){

    //rank gross income array
    var grossIncomeArraySorted = grossIncomeArray.slice(0);

    grossIncomeArraySorted.sort(function(a,b){
        return a - b
    });

    //generate array of after-tax income ranks
    var grossIncomeRankOrder = [];
    var grossIncomeArraySortedCopy = grossIncomeArraySorted.slice(0);

    for(i=0; i<grossIncomeArray.length; i++){
        grossIncomeRankOrder[i] = grossIncomeArraySortedCopy.indexOf(grossIncomeArray[i]);
        grossIncomeArraySortedCopy[grossIncomeRankOrder[i]] = "n/a";
    }

    //generate label array sorted by gross income order
    var labelArraySorted2 = sortArrayByRank(labelArray,grossIncomeRankOrder);

    //draw bar chart for after-tax income and total taxes paid
    var ctx4 = grossIncomeBarChart.getContext('2d');

    chart4 = new Chart(ctx4, {
        // The type of chart we want to create
        type: 'horizontalBar',
    
        // The data for our dataset
        data: {
            labels: labelArraySorted2,
            datasets: [
                {
                    data: grossIncomeArraySorted,
                    backgroundColor: graphColourArray, 
                    borderWidth:1,
                    borderColor:"#555555",
                },                
            ]
        },
    
        //options for chart.js bar chart
        options: outputBarChartOptions = {

            plugin_one_attribute: 1,
            maintainAspectRatio: false,

            tooltips: {
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += "$"+(Math.round(tooltipItem.xLabel)).toLocaleString();
                        return label;
                    }
                },
            },
            
            scales: {
                xAxes: [{
                    scaleLabel: {
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    ticks: {
                        fontColor: "rgb(56,56,56)",

                        min: 0,
                        maxTicksLimit: 6,

                        callback: function(value, index, values) {
                            return "$"+value.toLocaleString();
                        },
                    },

                    gridLines: {
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                yAxes: [{
                    
                    ticks: {
                        autoSkip: false,
                        fontSize: 12,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                    },

                    scaleLabel: {
                        display: true,
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 13,
                    },

                    gridLines: {
                        //zeroLineColor: "rgb(56,56,56)",
                        //zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {
                display: false
            },

            title: {
                display: true,
                text: "Pre-Tax Employment Income Needed to Generate $"+Math.round(netIncomeGoal).toLocaleString()+" of After-Tax Income",
                fontSize: 15,
                fontColor: "rgb(56,56,56)",
                padding: 8,
            },

            plugins: {
                datalabels: {
                    formatter: function(value, context) {
                        return '$' + Math.round(value).toLocaleString();                   
                    },

                    color: "#555555",

                    anchor: "end",
                    align: "end",

                    clamp: true,
                }
            }
        }
    });

}

function provinceComparison(a,b){

    var aString = String("calculate"+a);
    var bString = String("calculate"+b);

    var aString2 = String(a+"Tax");
    var bString2 = String(b+"Tax");

    //set defaults
    employmentIncome = 0;
    capitalGains = 0;
    eligibleDividends = 0;
    nonEligibleDividends = 0;
    otherIncome = 0;
    RRSPContribution = 0;
    totalTaxableIncome = 0;

    //arrays to be charted
    grossIncomeLabelArray = [];
    provinceANetIncomeArray = [];
    provinceBNetIncomeArray = [];

    for(i=0; i<=300; i++){
        employmentIncome = i * 1000;

        calculateCPP();
        calculateQPP();

        totalTaxableIncome = employmentIncome - enhancedCPPTax;

        calculateEI();
        calculateQPIP();
        calculateOHIP();
        calculateFedTaxes();

        executeFunctionByName(aString, window);
        executeFunctionByName(bString, window);


        grossIncomeLabelArray[i] = employmentIncome;

        if(a=="QC"){
            provinceANetIncomeArray[i] = employmentIncome - federalTaxQC - QPPTax - EITaxQC - QPIPTax - QCTax;
        } else{
            provinceANetIncomeArray[i] = eval("employmentIncome - federalTaxROC - CPPTax - EITaxROC - "+aString2); 
        }

        if(b=="QC"){
            provinceBNetIncomeArray[i] = employmentIncome - federalTaxQC - QPPTax - EITaxQC - QPIPTax - QCTax;
        } else{
            provinceBNetIncomeArray[i] = eval("employmentIncome - federalTaxROC - CPPTax - EITaxROC - "+bString2); 
        }

        provinceDeltaArray[i] = provinceANetIncomeArray[i] - provinceBNetIncomeArray[i];

    }

}

function showOutputs3(){

    analysis3Para.innerHTML = "For the chart below, positive values indicate that after-tax income is higher in "+provinceA+", while negative values mean that after-tax income is higher in "+provinceB+".";

    var ctx5 = document.getElementById('provinceChart').getContext('2d');

    chart5 = new Chart(ctx5, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: grossIncomeLabelArray,
            datasets: [
                {
                    label: provinceA,
                    borderColor: "#0071B3",
                    pointBackgroundColor: "#0071B3",
                    fill: false,
                    data: provinceANetIncomeArray,
                    pointHitRadius: 5,
                    radius: 0,
                    lineTension: 0,
                },  
                
                {
                    label: provinceB,
                    borderColor: "#B31B20",
                    pointBackgroundColor: "#B31B20",
                    fill: false,
                    data: provinceBNetIncomeArray,
                    pointHitRadius: 5,
                    radius: 0,
                    lineTension: 0,
                },  
            ]
        },
    
        // Configuration options go here
        options: {

            maintainAspectRatio: false,
        
            tooltips: {
                
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += '$'+Math.round(tooltipItem.yLabel).toLocaleString();
                        return label;
                    }
                },
            },

            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            return '$' + Math.round(value).toLocaleString();
                        },


                        fontColor: "rgb(56,56,56)",
                        max:200000,
                        min:0,
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "After-Tax Income",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                xAxes: [{
                    ticks: {
                        fontColor: "rgb(56,56,56)",
                        maxTicksLimit:15,
                        min:0,
                        max:300000,
                        minRotation:90,
                        maxRotation:90,
                        callback: function(value, index, values) {
                            return '$' + Math.round(value).toLocaleString();
                        },
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Pre-Tax Employment Income",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {
                labels: {
                    fontColor: "rgb(56,56,56)",
                    boxWidth: 13,
                    padding: 10,
                },
            },

            title: {
                display: true,
                text: "After-Tax Income: "+provinceA+" vs "+provinceB,
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 2,
            },

            plugins: {
                datalabels: {
                    formatter: function(value, context) {
                        return '$' + Math.round(value).toLocaleString();                   
                    },

                    display: false,

                }
            }

        }
    });

    var ctx6 = document.getElementById('provinceDeltaChart').getContext('2d');

    chart6 = new Chart(ctx6, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: grossIncomeLabelArray,
            datasets: [
                {
                    label: "Difference in after-tax income",
                    borderColor: "#e71a8c",
                    pointBackgroundColor: "#e71a8c",
                    fill: false,
                    data: provinceDeltaArray,
                    pointHitRadius: 5,
                    radius: 0,
                    lineTension: 0,
                },  
            ]
        },
    
        // Configuration options go here
        options: {

            maintainAspectRatio: false,
        
            tooltips: {
                
                // Include a dollar sign in the ticks and add comma formatting
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        
                        if(tooltipItem.yLabel >= 0){
                            label += '$'+Math.round(tooltipItem.yLabel).toLocaleString();
                            return label;
                        } else{
                            label += '-$'+Math.round(tooltipItem.yLabel*-1).toLocaleString();
                            return label;                           
                        }
                    }
                },
            },

            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks and add comma formatting
                        callback: function(value, index, values) {
                            if(value>=0){
                                return '$' + Math.round(value).toLocaleString();
                            }else{
                                return '-$' + Math.round(value*-1).toLocaleString();
                            }
                        },


                        fontColor: "rgb(56,56,56)",
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Difference in after-tax income",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],

                xAxes: [{
                    ticks: {
                        
                        callback: function(value, index, values) {
                            return '$' + Math.round(value).toLocaleString();
                        },
                        
                        fontColor: "rgb(56,56,56)",

                        maxTicksLimit:15,
                        min:0,
                        max:300000,
                        minRotation:90,
                        maxRotation:90,
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Pre-Tax Employment Income",
                        fontColor: "rgb(56,56,56)",
                        fontStyle: "bold",
                        fontSize: 15,
                    },

                    gridLines: {
                        drawTicks: false,
                        zeroLineColor: "rgb(56,56,56)",
                        zeroLineWidth: 2,
                    },
                }],    
            },

            legend: {
                labels: {
                    fontColor: "rgb(56,56,56)",
                    boxWidth: 13,
                    padding: 10,
                },
            },

            title: {
                display: true,
                text: "Difference in After-Tax Income: "+provinceA+" vs "+provinceB,
                fontSize: 18,
                fontColor: "rgb(56,56,56)",
                padding: 2,
            },

            plugins: {
                datalabels: {
                    formatter: function(value, context) {
                        return '$' + Math.round(value).toLocaleString();                   
                    },

                    display: false,

                }
            }

        }
    });
}

function netPaycheckCalculator(provinceA,provinceB,incomeA,incomeB){

    var aString = String("calculate"+provinceA);
    var bString = String("calculate"+provinceB);

    var aString2 = String(provinceA+"Tax");
    var bString2 = String(provinceB+"Tax");

    //set defaults
    employmentIncome = 0;
    capitalGains = 0;
    eligibleDividends = 0;
    nonEligibleDividends = 0;
    otherIncome = 0;
    RRSPContribution = 0;
    totalTaxableIncome = 0;

    //calculate net income for province A
    employmentIncome = incomeA;
    provinceAOutputs[0] = employmentIncome;

    calculateTaxes();
    totalTaxableIncome = employmentIncome - enhancedCPPTax;

    marginalTaxRateArray = calculateMarginalRates();

    if(provinceA=="QC"){
        provinceANetIncome = employmentIncome - federalTaxQC - QPPTax - EITaxQC - QPIPTax - QCTax;
        provinceAOutputs[1] = federalTaxQC;
        provinceAOutputs[2] = QCTax;
        provinceAOutputs[3] = QPPTax;
        provinceAOutputs[4] = EITaxQC;
        provinceAOutputs[5] = QPIPTax;
        provinceAOutputs[6] = federalTaxQC + QCTax + QPPTax + EITaxQC + QPIPTax;
        provinceAOutputs[7] = provinceANetIncome;
        provinceAOutputs[8] = provinceANetIncome / 12;
        provinceAOutputs[9] = provinceANetIncome / 26;
        provinceAOutputs[10] = (federalTaxQC + QCTax + QPPTax + EITaxQC + QPIPTax) / employmentIncome;
    } else{
        provinceANetIncome = eval("employmentIncome - federalTaxROC - CPPTax - EITaxROC - "+aString2); 
        provinceAOutputs[1] = federalTaxROC;
        provinceAOutputs[2] = eval(aString2);
        provinceAOutputs[3] = CPPTax;
        provinceAOutputs[4] = EITaxROC;
        provinceAOutputs[5] = 0;
        provinceAOutputs[6] = federalTaxROC + eval(aString2) + CPPTax + EITaxROC;
        provinceAOutputs[7] = provinceANetIncome;
        provinceAOutputs[8] = provinceANetIncome / 12;
        provinceAOutputs[9] = provinceANetIncome / 26;
        provinceAOutputs[10] = (federalTaxROC + eval(aString2) + CPPTax + EITaxROC) / employmentIncome;
    }

    if(provinceA == "AB"){
        provinceAOutputs[11] = marginalTaxRateArray[0];
    } else if(provinceA == "BC"){
        provinceAOutputs[11] = marginalTaxRateArray[1];
    } else if(provinceA == "MB"){
        provinceAOutputs[11] = marginalTaxRateArray[2];
    } else if(provinceA == "NB"){
        provinceAOutputs[11] = marginalTaxRateArray[3];
    } else if(provinceA == "NL"){
        provinceAOutputs[11] = marginalTaxRateArray[4];
    } else if(provinceA == "NT"){
        provinceAOutputs[11] = marginalTaxRateArray[5];
    } else if(provinceA == "NS"){
        provinceAOutputs[11] = marginalTaxRateArray[6];
    } else if(provinceA == "NU"){
        provinceAOutputs[11] = marginalTaxRateArray[7];
    } else if(provinceA == "ON"){
        provinceAOutputs[11] = marginalTaxRateArray[8];
    } else if(provinceA == "PE"){
        provinceAOutputs[11] = marginalTaxRateArray[9];
    } else if(provinceA == "QC"){
        provinceAOutputs[11] = marginalTaxRateArray[10];
    } else if(provinceA == "SK"){
        provinceAOutputs[11] = marginalTaxRateArray[11];
    } else if(provinceA == "YT"){
        provinceAOutputs[11] = marginalTaxRateArray[12];
    }


    //calculate net income for province B
    employmentIncome = incomeB;
    provinceBOutputs[0] = employmentIncome;

    calculateTaxes();
    totalTaxableIncome = employmentIncome - enhancedCPPTax;

    marginalTaxRateArray = calculateMarginalRates();

    if(provinceB=="QC"){
        provinceBNetIncome = employmentIncome - federalTaxQC - QPPTax - EITaxQC - QPIPTax - QCTax;
        provinceBOutputs[1] = federalTaxQC;
        provinceBOutputs[2] = QCTax;
        provinceBOutputs[3] = QPPTax;
        provinceBOutputs[4] = EITaxQC;
        provinceBOutputs[5] = QPIPTax;
        provinceBOutputs[6] = federalTaxQC + QCTax + QPPTax + EITaxQC + QPIPTax;
        provinceBOutputs[7] = provinceBNetIncome;
        provinceBOutputs[8] = provinceBNetIncome / 12;
        provinceBOutputs[9] = provinceBNetIncome / 26;
        provinceBOutputs[10] = (federalTaxQC + QCTax + QPPTax + EITaxQC + QPIPTax) / employmentIncome;
    } else{
        provinceBNetIncome = eval("employmentIncome - federalTaxROC - CPPTax - EITaxROC - "+bString2); 
        provinceBOutputs[1] = federalTaxROC;
        provinceBOutputs[2] = eval(bString2);
        provinceBOutputs[3] = CPPTax;
        provinceBOutputs[4] = EITaxROC;
        provinceBOutputs[5] = 0;
        provinceBOutputs[6] = federalTaxROC + eval(bString2) + CPPTax + EITaxROC;
        provinceBOutputs[7] = provinceBNetIncome;
        provinceBOutputs[8] = provinceBNetIncome / 12;
        provinceBOutputs[9] = provinceBNetIncome / 26;
        provinceBOutputs[10] = (federalTaxROC + eval(bString2) + CPPTax + EITaxROC) / employmentIncome;
    }

    if(provinceB == "AB"){
        provinceBOutputs[11] = marginalTaxRateArray[0];
    } else if(provinceB == "BC"){
        provinceBOutputs[11] = marginalTaxRateArray[1];
    } else if(provinceB == "MB"){
        provinceBOutputs[11] = marginalTaxRateArray[2];
    } else if(provinceB == "NB"){
        provinceBOutputs[11] = marginalTaxRateArray[3];
    } else if(provinceB == "NL"){
        provinceBOutputs[11] = marginalTaxRateArray[4];
    } else if(provinceB == "NT"){
        provinceBOutputs[11] = marginalTaxRateArray[5];
    } else if(provinceB == "NS"){
        provinceBOutputs[11] = marginalTaxRateArray[6];
    } else if(provinceB == "NU"){
        provinceBOutputs[11] = marginalTaxRateArray[7];
    } else if(provinceB == "ON"){
        provinceBOutputs[11] = marginalTaxRateArray[8];
    } else if(provinceB == "PE"){
        provinceBOutputs[11] = marginalTaxRateArray[9];
    } else if(provinceB == "QC"){
        provinceBOutputs[11] = marginalTaxRateArray[10];
    } else if(provinceB == "SK"){
        provinceBOutputs[11] = marginalTaxRateArray[11];
    } else if(provinceB == "YT"){
        provinceBOutputs[11] = marginalTaxRateArray[12];
    }

    console.log("Province A outputs: "+provinceAOutputs);
    console.log("Province B net income: "+provinceBOutputs);

}

function showOutputs4(){
    console.log("Show outputs for analysis #4");

    document.getElementById("headerA").innerHTML = netProvinceA;
    document.getElementById("headerB").innerHTML = netProvinceB;

    //Column A outputs
    for (i=0; i<12; i++){
        cellID = "colA"+i
        if(i<=9){
            document.getElementById(cellID).innerHTML = dollarFormat(provinceAOutputs[i]);
        } else{
            document.getElementById(cellID).innerHTML = percentFormat(provinceAOutputs[i]);
        }
    }

    //Column B outputs
    for (i=0; i<12; i++){
        cellID = "colB"+i
        if(i<=9){
            document.getElementById(cellID).innerHTML = dollarFormat(provinceBOutputs[i]);
        } else{
            document.getElementById(cellID).innerHTML = percentFormat(provinceBOutputs[i]);
        }
    }

    //Delta column outputs
    for (i=0; i<12; i++){
        cellID = "colDelta"+i
        if(i<=9){
            document.getElementById(cellID).innerHTML = dollarFormat(provinceBOutputs[i]-provinceAOutputs[i]);
        } else{
            document.getElementById(cellID).innerHTML = percentFormat(provinceBOutputs[i]-provinceAOutputs[i]);
        }
    }

}

function dollarFormat(value){
    var formattedValue = "";

    if(value>=0){
        formattedValue = '$' + Math.round(value).toLocaleString();
    } else {
        formattedValue = '($' + Math.abs(Math.round(value)).toLocaleString()+')';
    }

    return formattedValue;
}

function percentFormat(value){
    var formattedValue = "";

    if(value>=0){
        formattedValue = (Math.round(value*1000)/10).toLocaleString()+"%";
    } else {
        formattedValue = '('+Math.abs((Math.round(value*1000)/10)).toLocaleString()+"%)";
    }

    return formattedValue;
}

function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

function fillTable(){

    for(i=0; i<dataLength; i++){
        var tableRow = document.createElement('tr');
        
        tableRow.setAttribute('id','row'+(i+1));
        mainTable.appendChild(tableRow);

        for(j=0; j<numberCol; j++){
            var tableCell = document.createElement('td');
            tableCell.classList.add("column"+j);
            tableCell.setAttribute('id','row'+(i+1)+'col'+(j+1));
            tableRow.appendChild(tableCell);

            if(j==0){
                tableCell.innerHTML = labelArraySorted[i];
            }

            if(j==1){               
                if(isNaN(totalGrossIncomeArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(totalGrossIncomeArraySorted[i]).toLocaleString();
                }                
            }

            if(j==2){
                if(isNaN(federalTaxArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(federalTaxArraySorted[i]).toLocaleString();
                }  
            }

            if(j==3){
                if(isNaN(provincialTaxArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(provincialTaxArraySorted[i]).toLocaleString();
                }                                  
            }

            if(j==4){
                if(isNaN(CPPQPPTaxArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(CPPQPPTaxArraySorted[i]).toLocaleString();
                }   
            }

            if(j==5){
                if(isNaN(EITaxArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(EITaxArraySorted[i]).toLocaleString();
                }  
            }

            if(j==6){
                if(isNaN(QPIPTaxArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(QPIPTaxArraySorted[i]).toLocaleString();
                }  
            }

            if(j==7){
                if(isNaN(totalTaxesArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(totalTaxesArraySorted[i]).toLocaleString();
                }                
            }

            if(j==8){
                if(isNaN(netIncomeArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = "$"+Math.round(netIncomeArraySorted[i]).toLocaleString();
                }  
            }

            if(j==9){
                if(isNaN(avgTaxRateArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = (Math.round(avgTaxRateArraySorted[i]*1000)/10).toLocaleString()+"%";
                }                
            }

            if(j==10){
                if(isNaN(marginalTaxRateArraySorted[i])){
                    tableCell.innerHTML = "n/a";
                }else{
                    tableCell.innerHTML = (Math.round(marginalTaxRateArraySorted[i]*1000)/10).toLocaleString()+"%";
                }  
            }
        }
    }
}

function displayMoreInfo(){


    if(moreInfoSwitch==0){
        moreInfoSwitch = 1;
        incomeDescriptionDiv.classList.remove("hide");
        moreInfoButton.innerHTML = "<i class=\"fas fa-minus-circle\"></i>";
        //moreInfoButton.innerHTML = "&#9447";

    } else{
        moreInfoSwitch = 0;
        incomeDescriptionDiv.classList.add("hide");
        moreInfoButton.innerHTML = "<i class=\"fas fa-info-circle\"></i>";

    }

}