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

var labelArray=["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YU"];

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
var YUTax = 0;

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
var totalYUTaxes;

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
var QPPTax = 0;
var EITaxROC = 0;
var EITaxQC = 0;
var QPIPTax = 0;

var OHIPTax = 0;

var CPPExemption = 3500;
var CPPContributionRate = 0.051;
var CPPMaxContribution = 2748.90;

var QPPExemption = 3500;
var QPPContributionRate = 0.0555;
var QPPMaxContribution = 2991.45;

var EIROCRate = 0.0162;
var EIROCMax = 860.22;

var EIQCRate = 0.0125;
var EIQCMax = 663.75;

var QPIPExemption = 2000;
var QPIPContributionRate = 0.00526;
var QPIPMaxContribution = 402.39;
var QPIPTax = 0;

var OHIPContribution = 0;


//Federal assumptions
var federalBracket1 = 47630;
var federalBracket2 = 95259;
var federalBracket3 = 147667;
var federalBracket4 = 210371;
var federalRate1 = 0.15;
var federalRate2 = 0.205;
var federalRate3 = 0.26;
var federalRate4 = 0.29;
var federalRate5 = 0.33;
var federalPersonalAmount = 12069;
var federalEligibleDivCredit = 0.150198;
var federalNonEligibleDivCredit = 0.090301;
var federalTaxCreditRate = 0.15;
var federalEmploymentAmount = 0;

var QCAbatementRate = 0.165;


//AB assumptions
var ABBracket1 = 131220;
var ABBracket2 = 157464;
var ABBracket3 = 209952;
var ABBracket4 = 314928;
var ABRate1 = 0.1;
var ABRate2 = 0.12;
var ABRate3 = 0.13;
var ABRate4 = 0.14;
var ABRate5 = 0.15;
var ABPersonalAmount = 19369;
var ABEligibleDivCredit = 0.1;
var ABNonEligibleDivCredit = 0.0204;
var ABTaxCreditRate = 0.1;

//BC assumptions
var BCBracket1 = 40707;
var BCBracket2 = 81416;
var BCBracket3 = 93476;
var BCBracket4 = 113506;
var BCBracket5 = 153900;
var BCRate1 = 0.0506;
var BCRate2 = 0.077;
var BCRate3 = 0.105;
var BCRate4 = 0.1229;
var BCRate5 = 0.147;
var BCRate6 = 0.168;
var BCPersonalAmount = 10682;
var BCEligibleDivCredit = 0.12;
var BCNonEligibleDivCredit = 0.0196;
var BCTaxCreditRate = 0.0506;

//MB assumptions
var MBBracket1 = 32670;
var MBBracket2 = 70610;
var MBRate1 = 0.108;
var MBRate2 = 0.1275;
var MBRate3 = 0.174;
var MBPersonalAmount = 9626;
var MBEligibleDivCredit = 0.08;
var MBNonEligibleDivCredit = 0.007835;
var MBTaxCreditRate = 0.108;

//NB assumptions
var NBBracket1 = 42592;
var NBBracket2 = 85184;
var NBBracket3 = 138491;
var NBBracket4 = 157778;
var NBRate1 = 0.0968;
var NBRate2 = 0.1482;
var NBRate3 = 0.1652;
var NBRate4 = 0.1784;
var NBRate5 = 0.203;
var NBPersonalAmount = 10264;
var NBEligibleDivCredit = 0.14;
var NBNonEligibleDivCredit = 0.0275;
var NBTaxCreditRate = 0.0968;

//NL assumptions
var NLBracket1 = 37591;
var NLBracket2 = 75181;
var NLBracket3 = 134224;
var NLBracket4 = 187913;
var NLRate1 = 0.087;
var NLRate2 = 0.145;
var NLRate3 = 0.158;
var NLRate4 = 0.173;
var NLRate5 = 0.183;
var NLPersonalAmount = 9414;
var NLEligibleDivCredit = 0.054;
var NLNonEligibleDivCredit = 0.035;
var NLTaxCreditRate = 0.087;

//NT assumptions
var NTBracket1 = 43137;
var NTBracket2 = 86277;
var NTBracket3 = 140267;
var NTRate1 = 0.059;
var NTRate2 = 0.086;
var NTRate3 = 0.122;
var NTRate4 = 0.1405;
var NTPersonalAmount = 14811;
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
var NUBracket1 = 45514;
var NUBracket2 = 90829;
var NUBracket3 = 147667;
var NURate1 = 0.04;
var NURate2 = 0.07;
var NURate3 = 0.09;
var NURate4 = 0.115;
var NUPersonalAmount = 13618;
var NUEligibleDivCredit = 0.0551;
var NUNonEligibleDivCredit = 0.0261;
var NUTaxCreditRate = 0.04;

//ON assumptions
var ONBracket1 = 43906;
var ONBracket2 = 87813;
var ONBracket3 = 150000;
var ONBracket4 = 220000;
var ONRate1 = 0.0505;
var ONRate2 = 0.0915;
var ONRate3 = 0.1116;
var ONRate4 = 0.1216;
var ONRate5 = 0.1316;
var ONPersonalAmount = 10582;
var ONEligibleDivCredit = 0.10;
var ONNonEligibleDivCredit = 0.032863;
var ONTaxCreditRate = 0.0505;

var ONSurtax1 = 4740;
var ONSurtax2 = 6067;
var ONSurtax1Rate = 0.2;
var ONSurtax2Rate = 0.36;

//PE assumptions
var PEBracket1 = 31984;
var PEBracket2 = 63969;
var PERate1 = 0.098;
var PERate2 = 0.138;
var PERate3 = 0.167;
var PEPersonalAmount = 9160;
var PEEligibleDivCredit = 0.105;
var PENonEligibleDivCredit = 0.0274;
var PETaxCreditRate = 0.098;

var PESurtax1 = 12500;
var PESurtax1Rate = 0.1;

//QC assumptions
var QCBracket1 = 43790;
var QCBracket2 = 87575;
var QCBracket3 = 106555;
var QCRate1 = 0.15;
var QCRate2 = 0.20;
var QCRate3 = 0.24;
var QCRate4 = 0.2575;
var QCPersonalAmount = 15269;
var QCEligibleDivCredit = 0.118;
var QCNonEligibleDivCredit = 0.0555;
var QCTaxCreditRate = 0.15;

//SK assumptions
var SKBracket1 = 45225;
var SKBracket2 = 129214;
var SKRate1 = 0.105;
var SKRate2 = 0.125;
var SKRate3 = 0.145;
var SKPersonalAmount = 16065;
var SKEligibleDivCredit = 0.11;
var SKNonEligibleDivCredit = 0.03362;
var SKTaxCreditRate = 0.105;

//YU assumptions
var YUBracket1 = 47630;
var YUBracket2 = 95259;
var YUBracket3 = 147667;
var YUBracket4 = 500000;
var YURate1 = 0.064;
var YURate2 = 0.09;
var YURate3 = 0.109;
var YURate4 = 0.128;
var YURate5 = 0.15;
var YUPersonalAmount = 12069;
var YUEligibleDivCredit = 0.1202;
var YUNonEligibleDivCredit = 0.0230;
var YUTaxCreditRate = 0.064;

//Analysis #1
var totalPreTaxIncomeOutput = document.getElementById("totalPreTaxIncomeOutput");

//Analysis #2 Assumptions
var netIncomeGoal = 0;
var grossIncomeArray = [];

var chart4;
var grossIncomeBarChart = document.getElementById("grossIncomeBarChart");


//Analysis #3 Assumptions

var provinceA = "AB";
var provinceB = "BC";

var grossIncomeLabelArray = [];
var provinceANetIncomeArray = [];
var provinceBNetIncomeArray = [];
var provinceDeltaArray = [];


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


function addInputEventListeners() {
    var inputsArray1 = document.getElementsByClassName("userInput1");
    var inputsArray2 = document.getElementsByClassName("userInput2");
    var inputsArray3 = document.getElementsByClassName("userInput3");


    for(i=0;i<inputsArray1.length;i++) {
        inputsArray1[i].addEventListener('change',refreshAnalysis1, false);
    }

    for(i=0;i<inputsArray2.length;i++) {
        inputsArray2[i].addEventListener('change',refreshAnalysis2, false);
    }

    for(i=0;i<inputsArray3.length;i++) {
        inputsArray3[i].addEventListener('change',refreshAnalysis3, false);
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

    totalTaxableIncome = employmentIncome + capitalGains * capitalGainsRate + eligibleDividends * (1+eligibleGrossUp) + nonEligibleDividends * (1+nonEligibleGrossUp) + otherIncome - RRSPContribution;

    federalEmploymentAmount = Math.min(1222,employmentIncome);

    //Analysis #2
    netIncomeGoal = Number(document.getElementById("afterTaxIncomeAssumption").value);

    //Analysis #3
    provinceA = String(document.getElementById("regionDropDownListA").value);
    provinceB = String(document.getElementById("regionDropDownListB").value);
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
    calculateYU();

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
    totalYUTaxes = federalTaxROC+YUTax+CPPTax+EITaxROC;

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
    var netIncomeYU = totalGrossIncome - totalYUTaxes;
   
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
    var YUAvgRate = totalYUTaxes / totalGrossIncome;

    totalGrossIncomeArray = [totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome,totalGrossIncome];
    federalTaxArray = [federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxROC,federalTaxQC,federalTaxROC,federalTaxROC,];
    provincialTaxArray = [ABTax,BCTax,MBTax,NBTax,NLTax,NTTax,NSTax,NUTax,ONTax,PETax,QCTax,SKTax,YUTax];
    CPPTaxArray=[CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,"n/a",CPPTax,CPPTax];
    EITaxArray=[EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxROC,EITaxQC,EITaxROC,EITaxROC];
    QPPTaxArray=["n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a",QPPTax,"n/a","n/a",];
    CPPQPPTaxArray=[CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,CPPTax,QPPTax,CPPTax,CPPTax];
    QPIPTaxArray=["n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a",QPIPTax,"n/a","n/a",];
    totalTaxesArray=[totalABTaxes,totalBCTaxes,totalMBTaxes,totalNBTaxes,totalNLTaxes,totalNTTaxes,totalNSTaxes,totalNUTaxes,totalONTaxes,totalPETaxes,totalQCTaxes,totalSKTaxes,totalYUTaxes];
    netIncomeArray=[netIncomeAB,netIncomeBC,netIncomeMB,netIncomeNB,netIncomeNL,netIncomeNT,netIncomeNS,netIncomeNU,netIncomeON,netIncomePE,netIncomeQC,netIncomeSK,netIncomeYU];
    avgTaxRateArray=[ABAvgRate,BCAvgRate,MBAvgRate,NBAvgRate,NLAvgRate,NTAvgRate,NSAvgRate,NUAvgRate,ONAvgRate,PEAvgRate,QCAvgRate,SKAvgRate,YUAvgRate];
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



function sortArrayByRank(unsortedArray, rankOrder){

    var sortedArray = [];

    for(i=0; i<unsortedArray.length; i++){
        sortedArray[i] = unsortedArray[rankOrder.indexOf(i)];
    }

    return sortedArray;
}


function calculateMarginalRates(){
    var marginalArray = [];
    var currentTotalTaxes = totalTaxesArray.slice(0);

    totalTaxableIncome += 1;

    calculateTaxes();

    var newTotalTaxes =[totalABTaxes,totalBCTaxes,totalMBTaxes,totalNBTaxes,totalNLTaxes,totalNTTaxes,totalNSTaxes,totalNUTaxes,totalONTaxes,totalPETaxes,totalQCTaxes,totalSKTaxes,totalYUTaxes];

    for(i=0; i<currentTotalTaxes.length; i++){
        marginalArray[i] = newTotalTaxes[i] - currentTotalTaxes[i];
    }

    totalTaxableIncome -= 1;

    return marginalArray;

}

function calculateCPP(){

    //CPP
    CPPTax = Math.max(Math.min((employmentIncome - CPPExemption) * CPPContributionRate, CPPMaxContribution),0);
}

function calculateQPP(){
    //QPP
    QPPTax = Math.max(Math.min((employmentIncome - QPPExemption) * QPPContributionRate, QPPMaxContribution),0);
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
    
    var fedTaxCredits = (federalPersonalAmount + CPPTax + EITaxROC + federalEmploymentAmount) * federalTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * federalEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * federalNonEligibleDivCredit;

    federalTaxROC = Math.max(fedTaxSubtotal - fedTaxCredits,0);

    //Federal (Quebec)
    var fedTaxCreditsQC = (federalPersonalAmount + QPPTax + EITaxQC + federalEmploymentAmount) * federalTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * federalEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * federalNonEligibleDivCredit;

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
    
    var ABTaxCredits = (ABPersonalAmount + CPPTax + EITaxROC) * ABTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * ABEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * ABNonEligibleDivCredit;

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

    var BCBracket1Tax = 0;
    var BCBracket2Tax = 0;
    var BCBracket3Tax = 0;
    var BCBracket4Tax = 0;
    var BCBracket5Tax = 0;
    var BCBracket6Tax = 0;

    BCBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),BCBracket1);
    BCBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket2)-BCBracket1Amount);
    BCBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket3)-BCBracket1Amount-BCBracket2Amount);
    BCBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket4)-BCBracket1Amount-BCBracket2Amount-BCBracket3Amount);
    BCBracket5Amount = (Math.min(Math.max(0,totalTaxableIncome),BCBracket5)-BCBracket1Amount-BCBracket2Amount-BCBracket3Amount-BCBracket4Amount);
    BCBracket6Amount = (Math.max(0,totalTaxableIncome)-BCBracket1Amount-BCBracket2Amount-BCBracket3Amount-BCBracket4Amount-BCBracket5Amount);

    BCBracket1Tax = BCBracket1Amount * BCRate1;
    BCBracket2Tax = BCBracket2Amount * BCRate2;
    BCBracket3Tax = BCBracket3Amount * BCRate3;
    BCBracket4Tax = BCBracket4Amount * BCRate4;
    BCBracket5Tax = BCBracket5Amount * BCRate5;
    BCBracket6Tax = BCBracket6Amount * BCRate6;

    var BCTaxSubtotal = BCBracket1Tax + BCBracket2Tax + BCBracket3Tax + BCBracket4Tax + BCBracket5Tax + BCBracket6Tax;
    
    var BCTaxCredits = (BCPersonalAmount + CPPTax + EITaxROC) * BCTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * BCEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * BCNonEligibleDivCredit;

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
    
    var MBTaxCredits = (MBPersonalAmount + CPPTax + EITaxROC) * MBTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * MBEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * MBNonEligibleDivCredit;

    MBTax = Math.max(MBTaxSubtotal - MBTaxCredits,0);
}

function calculateNB(){
    //NB Provincial
    var NBBracket1Amount = 0;
    var NBBracket2Amount = 0;
    var NBBracket3Amount = 0;
    var NBBracket4Amount = 0;
    var NBBracket5Amount = 0;

    var NBBracket1Tax = 0;
    var NBBracket2Tax = 0;
    var NBBracket3Tax = 0;
    var NBBracket4Tax = 0;
    var NBBracket5Tax = 0;

    NBBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),NBBracket1);
    NBBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),NBBracket2)-NBBracket1Amount);
    NBBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),NBBracket3)-NBBracket1Amount-NBBracket2Amount);
    NBBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),NBBracket4)-NBBracket1Amount-NBBracket2Amount-NBBracket3Amount);
    NBBracket5Amount = (Math.max(0,totalTaxableIncome)-NBBracket1Amount-NBBracket2Amount-NBBracket3Amount-NBBracket4Amount);

    NBBracket1Tax = NBBracket1Amount * NBRate1;
    NBBracket2Tax = NBBracket2Amount * NBRate2;
    NBBracket3Tax = NBBracket3Amount * NBRate3;
    NBBracket4Tax = NBBracket4Amount * NBRate4;
    NBBracket5Tax = NBBracket5Amount * NBRate5;

    var NBTaxSubtotal = NBBracket1Tax + NBBracket2Tax + NBBracket3Tax + NBBracket4Tax + NBBracket5Tax;
    
    var NBTaxCredits = (NBPersonalAmount + CPPTax + EITaxROC) * NBTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NBEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NBNonEligibleDivCredit;

    NBTax = Math.max(NBTaxSubtotal - NBTaxCredits,0);
}

function calculateNL(){
    //NL Provincial
    var NLBracket1Amount = 0;
    var NLBracket2Amount = 0;
    var NLBracket3Amount = 0;
    var NLBracket4Amount = 0;
    var NLBracket5Amount = 0;

    var NLBracket1Tax = 0;
    var NLBracket2Tax = 0;
    var NLBracket3Tax = 0;
    var NLBracket4Tax = 0;
    var NLBracket5Tax = 0;

    NLBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),NLBracket1);
    NLBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket2)-NLBracket1Amount);
    NLBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket3)-NLBracket1Amount-NLBracket2Amount);
    NLBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),NLBracket4)-NLBracket1Amount-NLBracket2Amount-NLBracket3Amount);
    NLBracket5Amount = (Math.max(0,totalTaxableIncome)-NLBracket1Amount-NLBracket2Amount-NLBracket3Amount-NLBracket4Amount);

    NLBracket1Tax = NLBracket1Amount * NLRate1;
    NLBracket2Tax = NLBracket2Amount * NLRate2;
    NLBracket3Tax = NLBracket3Amount * NLRate3;
    NLBracket4Tax = NLBracket4Amount * NLRate4;
    NLBracket5Tax = NLBracket5Amount * NLRate5;

    var NLTaxSubtotal = NLBracket1Tax + NLBracket2Tax + NLBracket3Tax + NLBracket4Tax + NLBracket5Tax;
    
    var NLTaxCredits = (NLPersonalAmount + CPPTax + EITaxROC) * NLTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NLEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NLNonEligibleDivCredit;

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
    
    var NTTaxCredits = (NTPersonalAmount + CPPTax + EITaxROC) * NTTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NTEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NTNonEligibleDivCredit;

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
    
    var NSTaxCredits = (NSTotalPersonalAmount + CPPTax + EITaxROC) * NSTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NSEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NSNonEligibleDivCredit;

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
    
    var NUTaxCredits = (NUPersonalAmount + CPPTax + EITaxROC) * NUTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * NUEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * NUNonEligibleDivCredit;

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

    var ONTaxCredits1 = (ONPersonalAmount + CPPTax + EITaxROC) * ONTaxCreditRate;

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
    
    var PETaxCredits = (PEPersonalAmount + CPPTax + EITaxROC) * PETaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * PEEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * PENonEligibleDivCredit;

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
    
    var SKTaxCredits = (SKPersonalAmount + CPPTax + EITaxROC) * SKTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * SKEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * SKNonEligibleDivCredit;

    SKTax = Math.max(SKTaxSubtotal - SKTaxCredits,0);
}


function calculateYU(){
    //YU Territorial
    var YUBracket1Amount = 0;
    var YUBracket2Amount = 0;
    var YUBracket3Amount = 0;
    var YUBracket4Amount = 0;
    var YUBracket5Amount = 0;

    var YUBracket1Tax = 0;
    var YUBracket2Tax = 0;
    var YUBracket3Tax = 0;
    var YUBracket4Tax = 0;
    var YUBracket5Tax = 0;

    YUBracket1Amount = Math.min(Math.max(0,totalTaxableIncome),YUBracket1);
    YUBracket2Amount = (Math.min(Math.max(0,totalTaxableIncome),YUBracket2)-YUBracket1Amount);
    YUBracket3Amount = (Math.min(Math.max(0,totalTaxableIncome),YUBracket3)-YUBracket1Amount-YUBracket2Amount);
    YUBracket4Amount = (Math.min(Math.max(0,totalTaxableIncome),YUBracket4)-YUBracket1Amount-YUBracket2Amount-YUBracket3Amount);
    YUBracket5Amount = (Math.max(0,totalTaxableIncome)-YUBracket1Amount-YUBracket2Amount-YUBracket3Amount-YUBracket4Amount);

    YUBracket1Tax = YUBracket1Amount * YURate1;
    YUBracket2Tax = YUBracket2Amount * YURate2;
    YUBracket3Tax = YUBracket3Amount * YURate3;
    YUBracket4Tax = YUBracket4Amount * YURate4;
    YUBracket5Tax = YUBracket5Amount * YURate5;

    var YUTaxSubtotal = YUBracket1Tax + YUBracket2Tax + YUBracket3Tax + YUBracket4Tax + YUBracket5Tax;
    
    var YUTaxCredits = (YUPersonalAmount + CPPTax + EITaxROC + federalEmploymentAmount) * YUTaxCreditRate + eligibleDividends * (1+eligibleGrossUp) * YUEligibleDivCredit + nonEligibleDividends * (1+nonEligibleGrossUp) * YUNonEligibleDivCredit;

    YUTax = Math.max(YUTaxSubtotal - YUTaxCredits,0);
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
    var YUTestNetIncome = 0;

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
    var YUGrossIncome = 0;
    
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
    var YUSwitch = 0;

    var switchTotal = 0;


    for(i=0;i<maxLoops;i++){
        employmentIncome = (i) * incomeSeekIncrement;
        totalTaxableIncome = (i) * incomeSeekIncrement;

        calculateCPP();
        calculateQPP();
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

        //YU
        if(YUSwitch==0){
            calculateYU();
            YUTestNetIncome = employmentIncome - federalTaxROC - YUTax - CPPTax - EITaxROC;
            if(YUTestNetIncome>=netIncomeGoal){
                YUSwitch = 1;
                YUGrossIncome = employmentIncome;
            }
        }

        switchTotal = ABSwitch + BCSwitch + MBSwitch + NBSwitch + NLSwitch + NTSwitch + NSSwitch + NUSwitch + ONSwitch + PESwitch + QCSwitch + SKSwitch + YUSwitch;

        if(switchTotal==13){
            break;
        }
    }

    grossIncomeArray = [ABGrossIncome,BCGrossIncome,MBGrossIncome,NBGrossIncome,NLGrossIncome,NTGrossIncome,NSGrossIncome,NUGrossIncome,ONGrossIncome,PEGrossIncome,QCGrossIncome,SKGrossIncome,YUGrossIncome];
    
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
        totalTaxableIncome = employmentIncome;

        calculateCPP();
        calculateQPP();
        calculateEI();
        calculateQPIP();
        calculateOHIP();
        calculateFedTaxes();

        executeFunctionByName(aString, window);
        executeFunctionByName(bString, window);


        grossIncomeLabelArray[i] = employmentIncome;

        if(a=="QC"){
            provinceANetIncomeArray[i] = employmentIncome - federalTaxQC - QPPTax - EIQCRate - QPIPTax - QCTax;
        } else{
            provinceANetIncomeArray[i] = eval("employmentIncome - federalTaxROC - CPPTax - EITaxROC - "+aString2); 
        }

        if(b=="QC"){
            provinceBNetIncomeArray[i] = employmentIncome - federalTaxQC - QPPTax - EIQCRate - QPIPTax - QCTax;
        } else{
            provinceBNetIncomeArray[i] = eval("employmentIncome - federalTaxROC - CPPTax - EITaxROC - "+bString2); 
        }

        provinceDeltaArray[i] = provinceANetIncomeArray[i] - provinceBNetIncomeArray[i];

    }

}


function showOutputs3(){

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
                    borderColor: "#31D0CB",
                    pointBackgroundColor: "#31D0CB",
                    fill: false,
                    data: provinceANetIncomeArray,
                    pointHitRadius: 5,
                    radius: 0,
                    lineTension: 0,
                },  
                
                {
                    label: provinceB,
                    borderColor: "#CD5C5C",
                    pointBackgroundColor: "#CD5C5C",
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
                text: "Province Comparison: "+provinceA+" vs "+provinceB,
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
                text: "Province Comparison: "+provinceA+" vs "+provinceB,
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