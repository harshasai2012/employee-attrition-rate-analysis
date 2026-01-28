var pcp_labels = []
var joblevel = []
var ages = []
var mincomes = []
var pie_data1 = []
var pie_data2 = []
var pie_data3 = []

var employees_data = []
var emp_data = {}
var attrs = []
var pcp_data = {}
var global_emp_data = []
var global_pcp_data = {}
var selected = {
    'LevelofJob': [],
    'MonthlyIncome': [],
    'Attrition': [],
    'Gender': [],
    'Department': [],
    'JobRole': [],
    'Age': [],
    'DistanceFromHome': [],
    'EducationField': [],
    'NumCompaniesWorked': [],
    'PercentSalaryHike': [],
    'TotalWorkingYears': [],
    'YearsAtCompany': [],
    'YearsInCurrentRole': [],
    'YearsSinceLastPromotion': [],
    'JobSatisfaction': [],
    'State': []
}

function removecharts(chart) {

    switch (chart) {

        case "barid":
            document.getElementById("scatterid").innerHTML = "";
            document.getElementById("pieid1").innerHTML = "";
            document.getElementById("pieid2").innerHTML = "";
            document.getElementById("pcpplotid").innerHTML = "";
            document.getElementById("sunburstid").innerHTML = "";
            document.getElementById("usmapid").innerHTML = "";

            break;

        case "scatterid":
            document.getElementById("barid").innerHTML = "";
            document.getElementById("sunburstid").innerHTML = "";
            document.getElementById("pieid1").innerHTML = "";
            document.getElementById("pieid2").innerHTML = "";
            document.getElementById("pcpplotid").innerHTML = "";
            document.getElementById("usmapid").innerHTML = "";

            break;
        case "sunburst":
            document.getElementById("barid").innerHTML = "";
            document.getElementById("scatterid").innerHTML = "";
            document.getElementById("pieid1").innerHTML = "";
            document.getElementById("pieid2").innerHTML = "";
            document.getElementById("pcpplotid").innerHTML = "";
            document.getElementById("usmapid").innerHTML = "";

            break;
        case "pieid1":
            document.getElementById("barid").innerHTML = "";
            document.getElementById("scatterid").innerHTML = "";
            document.getElementById("sunburstid").innerHTML = "";
            document.getElementById("pieid2").innerHTML = "";
            document.getElementById("pcpplotid").innerHTML = "";
            document.getElementById("usmapid").innerHTML = "";

            break;
        case "pieid2":
            document.getElementById("barid").innerHTML = "";
            document.getElementById("scatterid").innerHTML = "";
            document.getElementById("sunburstid").innerHTML = "";
            document.getElementById("pieid1").innerHTML = "";
            document.getElementById("pcpplotid").innerHTML = "";
            document.getElementById("usmapid").innerHTML = "";
            break;
        case "pcpplotid":
            document.getElementById("usmapid").innerHTML = "";
            document.getElementById("usmapid").innerHTML = "";
            document.getElementById("barid").innerHTML = "";
            document.getElementById("scatterid").innerHTML = "";
            document.getElementById("pieid1").innerHTML = "";
            document.getElementById("pieid2").innerHTML = "";
            break;
        case "geomap":
            document.getElementById("barid").innerHTML = "";
            document.getElementById("scatterid").innerHTML = "";
            document.getElementById("sunburstid").innerHTML = "";
            document.getElementById("pieid1").innerHTML = "";
            document.getElementById("pieid2").innerHTML = "";
            document.getElementById("pcpplotid").innerHTML = "";
            break;

        case "pcpid":
            document.getElementById("scatterid").innerHTML = "";
            document.getElementById("barid").innerHTML = "";
            document.getElementById("pieid1").innerHTML = "";
            document.getElementById("pieid2").innerHTML = "";
            document.getElementById("sunburstid").innerHTML = "";
            document.getElementById("usmapid").innerHTML = "";

    }

}



// set initial data arrays
function setInitialArrays(pcp_l, joblevel, age, income, attrition, gender, dept) {
    pcp_labels = pcp_l
    joblevels = joblevel
    mincomes = income
    ages = age
    pie_data1 = attrition
    pie_data2 = gender
    pie_data3 = dept
}

function getJsonData() {

    sales_exec_yes = employees_data.filter(row => row['Department'] === 'Sales' && row['JobRole'] === 'Sales Executive' && row['Attrition'] === 'Yes').length
    sales_exec_no = employees_data.filter(row => row['Department'] === 'Sales' && row['JobRole'] === 'Sales Executive' && row['Attrition'] === 'No').length
    Sales_Manager_Yes = employees_data.filter(row => row['Department'] === 'Sales' && row['JobRole'] === 'Manager' && row['Attrition'] === 'Yes').length
    Sales_Manager_No = employees_data.filter(row => row['Department'] === 'Sales' && row['JobRole'] === 'Manager' && row['Attrition'] === 'No').length
    sales_Rep_yes = employees_data.filter(row => row['Department'] === 'Sales' && row['JobRole'] === 'Sales Representative' && row['Attrition'] === 'Yes').length
    sales_Rep_no = employees_data.filter(row => row['Department'] === 'Sales' && row['JobRole'] === 'Sales Representative' && row['Attrition'] === 'No').length

    RD_Scientist_yes = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Research Scientist' && row['Attrition'] === 'Yes').length
    RD_Scientist_no = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Research Scientist' && row['Attrition'] === 'No').length
    LT_yes = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Laboratory Technician' && row['Attrition'] === 'Yes').length
    LT_no = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Laboratory Technician' && row['Attrition'] === 'No').length
    MD_yes = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Manufacturing Director' && row['Attrition'] === 'Yes').length
    MD_no = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Manufacturing Director' && row['Attrition'] === 'No').length
    Health_Rep_yes = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Healthcare Representative' && row['Attrition'] === 'Yes').length
    Health_Rep_no = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Healthcare Representative' && row['Attrition'] === 'No').length
    RD_Manager_yes = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Manager' && row['Attrition'] === 'Yes').length
    RD_Manager_no = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Manager' && row['Attrition'] === 'No').length
    RD_Director_yes = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Research Director' && row['Attrition'] === 'Yes').length
    RD_Director_no = employees_data.filter(row => row['Department'] === 'Research & Development' && row['JobRole'] === 'Research Director' && row['Attrition'] === 'No').length

    HR_yes = employees_data.filter(row => row['Department'] === 'Human Resources' && row['JobRole'] === 'Human Resources' && row['Attrition'] === 'Yes').length
    HR_no = employees_data.filter(row => row['Department'] === 'Human Resources' && row['JobRole'] === 'Human Resources' && row['Attrition'] === 'No').length
    HR_Manager_yes = employees_data.filter(row => row['Department'] === 'Human Resources' && row['JobRole'] === 'Manager' && row['Attrition'] === 'Yes').length
    HR_Manager_no = employees_data.filter(row => row['Department'] === 'Human Resources' && row['JobRole'] === 'Manager' && row['Attrition'] === 'No').length


    return {
        "name": "employees1",
        "children": [
            {
                "name": "Sales2",
                "children": [
                    {
                        "name": "Sales Executive3",
                        "children": [
                            {"name": "Yes4", "size": sales_exec_yes},
                            {"name": "No4", "size": sales_exec_no}
                        ]
                    },
                    {
                        "name": "Manager3",
                        "children": [
                            {"name": "Yes4", "size": Sales_Manager_Yes},
                            {"name": "No4", "size": Sales_Manager_No}
                        ]
                    },
                    {
                        "name": "Sales Representative3",
                        "children": [
                            {"name": "Yes4", "size": sales_Rep_yes},
                            {"name": "No4", "size": sales_Rep_no}
                        ]
                    }
                ]
            },
            {
                "name": "Research & Development2",
                "children": [
                    {
                        "name": "Research Scientist3",
                        "children": [
                            {"name": "Yes4", "size": RD_Scientist_yes},
                            {"name": "No4", "size": RD_Scientist_no}
                        ]
                    },
                    {
                        "name": "Laboratory Technician3",
                        "children": [
                            {"name": "Yes4", "size": LT_yes},
                            {"name": "No4", "size": LT_no}
                        ]
                    },
                    {
                        "name": "Manufacturing Director3",
                        "children": [
                            {"name": "Yes4", "size": MD_yes},
                            {"name": "No4", "size": MD_no}
                        ]
                    },
                    {
                        "name": "Healthcare Representative3",
                        "children": [
                            {"name": "Yes4", "size": Health_Rep_yes},
                            {"name": "No4", "size": Health_Rep_no}
                        ]
                    },
                    {
                        "name": "Manager3",
                        "children": [
                            {"name": "Yes4", "size": RD_Manager_yes},
                            {"name": "No4", "size": RD_Manager_no}
                        ]
                    },
                    {
                        "name": "Research Director3",
                        "children": [
                            {"name": "Yes4", "size": RD_Director_yes},
                            {"name": "No4", "size": RD_Director_no}
                        ]
                    }
                ]
            },
            {
                "name": "Human Resources2",
                "children": [
                    {
                        "name": "Human Resources3",
                        "children": [
                            {"name": "Yes4", "size": HR_yes},
                            {"name": "No4", "size": HR_no}
                        ]
                    },
                    {
                        "name": "Manager3",
                        "children": [
                            {"name": "Yes4", "size": HR_Manager_yes},
                            {"name": "No4", "size": HR_Manager_no}
                        ]
                    }
                ]
            }
        ]
    }
}


d3.csv("./static/employees_new.csv", function (error, employees) {
    emp_data = employees
    global_pcp_data = emp_data
    pcp_data = emp_data
    attrs = emp_data.columns
    employees.map(d => {
        employees_data.push(d)
        global_emp_data.push(d)
    })
    getMapData()
    drawgeomap()
    drawPieChart1()
    drawPieChart2()
    drawScatterPlot()
    drawpcp()
    drawbarchart()
    var json_data = getJsonData()
    drawSunBurst(json_data)

})

function reset() {
    location.reload()
}

function getFilteredPCPData() {
    pcp_data = global_pcp_data
    for (const sel in selected) {
        if (selected[sel].length !== 0) {
            pcp_data = pcp_data.filter(function (row) {
                if (sel === 'MonthlyIncome') {
                    return selected[sel].includes(+row[sel])
                }
                return selected[sel].includes(row[sel])
            })
        }
    }
    return pcp_data
}

function getFilteredData() {
    employees_data = global_emp_data
    for (const sel in selected) {
        if (selected[sel].length !== 0) {
            employees_data = employees_data.filter(function (row) {
                if (sel === 'MonthlyIncome') {
                    return selected[sel].includes(+row[sel])
                }
                return selected[sel].includes(row[sel])
            })
        }
    }
    return employees_data
}

function barchartlistener(joblevel) {

    if (selected['LevelofJob'].includes(joblevel)) {
        let ind = selected['LevelofJob'].indexOf(joblevel)
        selected['LevelofJob'].splice(ind, 1)
    } else {
        selected['LevelofJob'].push(joblevel)
    }


    pcp_data = getFilteredPCPData()

    pcp_data.columns = attrs

    employees_data = getFilteredData()
    pie_data1 = []
    pie_data2 = []
    mincomes = []
    ages = []
    joblevels = []

    for (const val of employees_data) {
        pie_data1.push(val['Attrition'])
        pie_data2.push(val['Gender'])
        mincomes.push(val['MonthlyIncome'])
        ages.push(val['Age'])
        joblevels.push(val['LevelofJob'])
    }

    removecharts("barid")
    drawPieChart1()
    drawPieChart2()
    drawScatterPlot()
    drawgeomap()
    drawpcp()
    var json_data = getJsonData()
    drawSunBurst(json_data)
}

function geomaplistener(state) {

    if (selected['State'].includes(state)) {
        let ind = selected['State'].indexOf(state)
        selected['State'].splice(ind, 1)
    } else {
        selected['State'].push(state)
    }


    pcp_data = getFilteredPCPData()

    pcp_data.columns = attrs

    employees_data = getFilteredData()

    pie_data1 = []
    pie_data2 = []
    mincomes = []
    joblevels = []
    ages = []
    for (const val of employees_data) {
        pie_data1.push(val['Attrition'])
        pie_data2.push(val['Gender'])
        mincomes.push(val['MonthlyIncome'])
        ages.push(val['Age'])
        joblevels.push(val['LevelofJob'])
    }

    removecharts("geomap")
    drawbarchart()
    drawPieChart1()
    drawPieChart2()
    drawScatterPlot()
    drawpcp()
    var json_data = getJsonData()
    drawSunBurst(json_data)
}

function piechartlistener1(sliceval, type) {
    console.log("hello")
    if (selected[type].includes(sliceval)) {
        let ind = selected[type].indexOf(sliceval)
        selected[type].splice(ind, 1)
    } else {
        selected[type].push(sliceval)
    }
    // selected[type].push(sliceval)
    pcp_data = getFilteredPCPData()

    pcp_data.columns = attrs

    employees_data = getFilteredData()

    pie_data1 = []
    pie_data2 = []
    mincomes = []
    joblevels = []
    ages = []
    for (const val of employees_data) {
        pie_data1.push(val['Attrition'])
        pie_data2.push(val['Gender'])
        mincomes.push(val['MonthlyIncome'])
        ages.push(val['Age'])
        joblevels.push(val['LevelofJob'])
    }

    removecharts("pieid1")
    drawPieChart2()
    drawScatterPlot()
    drawpcp()
    drawbarchart()
    drawgeomap()
    var json_data = getJsonData()
    drawSunBurst(json_data)

}

function piechartlistener2(sliceval, type) {
    if (selected[type].includes(sliceval)) {
        let ind = selected[type].indexOf(sliceval)
        selected[type].splice(ind, 1)
    } else {
        selected[type].push(sliceval)
    }

    pcp_data = getFilteredPCPData()

    pcp_data.columns = attrs

    employees_data = getFilteredData()
    pie_data1 = []
    pie_data2 = []
    mincomes = []
    joblevels = []
    ages = []
    for (const val of employees_data) {
        pie_data1.push(val['Attrition'])
        pie_data2.push(val['Gender'])
        mincomes.push(val['MonthlyIncome'])
        ages.push(val['Age'])
        joblevels.push(val['LevelofJob'])
    }

    removecharts("pieid2")
    drawPieChart1()
    drawScatterPlot()
    drawpcp()
    drawbarchart()
    drawgeomap()
    var json_data = getJsonData()
    drawSunBurst(json_data)

}

function sunburstlistener(sliceval, level) {

    if (level === '1') {
        // Handle later
        console.log("level" + level)
        removecharts("sunburst")
        drawPieChart1()
        drawPieChart2()
        drawScatterPlot()
        drawgeomap()
        drawpcp()
        drawbarchart()
        return;
    }

    switch (level) {
        case '2':
            type = 'Department';
            break;
        case '3':
            type = 'JobRole';
            break;
        default:
            type = 'Attrition'
    }

    sliceval = sliceval.slice(0, sliceval.length - 1)


    if (selected[type].includes(sliceval)) {
        let ind = selected[type].indexOf(sliceval)
        selected[type].splice(ind, 1)
    } else {
        selected[type].push(sliceval)
    }

    pcp_data = getFilteredPCPData()

    pcp_data.columns = attrs

    employees_data = getFilteredData()

    pie_data1 = []
    pie_data2 = []
    mincomes = []
    joblevels = []
    ages = []
    for (const val of employees_data) {
        pie_data1.push(val['Attrition'])
        pie_data2.push(val['Gender'])
        mincomes.push(val['MonthlyIncome'])
        ages.push(val['Age'])
        joblevels.push(val['LevelofJob'])
    }

    removecharts("sunburst")
    drawPieChart1()
    drawPieChart2()
    drawScatterPlot()
    drawpcp()
    drawbarchart()
    drawgeomap()


}

function scatterPlotListener(incomes) {
    var sliced_data = []
    for (const income of incomes) {
        sliced_data.push(income.x)
        selected['MonthlyIncome'].push(income.x)
        selected['Age'].push(income.y.toString())
    }


    pcp_data = getFilteredPCPData()

    pcp_data.columns = attrs

    employees_data = getFilteredData()
    pie_data1 = []
    pie_data2 = []
    pie_data3 = []
    mincomes = []
    ages = []
    joblevels = []
    for (const val of employees_data) {
        pie_data1.push(val['Attrition'])
        pie_data2.push(val['Gender'])
        pie_data3.push(val['Department'])
        mincomes.push(val['MonthlyIncome'])
        ages.push(val['Age'])
        joblevels.push(val['LevelofJob'])
    }

    removecharts("scatterid")
    drawPieChart1()
    drawPieChart2()
    drawpcp()
    drawbarchart()
    drawgeomap()
    var json_data = getJsonData()
    drawSunBurst(json_data)

}

function pcpListener(sliced_vals) {
    if (Object.keys(sliced_vals).length === 0)
        return;
    let len = employees_data.length
    console.log("sliced vals before filter", employees_data);
    for (const val in sliced_vals) {
        for (const s of sliced_vals[val]) {
            if (val === 'MonthlyIncome') {
                if (!selected[val].includes(+s)) {
                    selected[val].push(+s)
                }
            } else {
                if (!selected[val].includes(s)) {
                    selected[val].push(s)
                }
            }
        }
    }
    pcp_data = getFilteredPCPData()

    pcp_data.columns = attrs

    employees_data = getFilteredData()


    if (len === employees_data.length)
        return;
    pie_data1 = []
    pie_data2 = []
    pie_data3 = []
    mincomes = []
    ages = []
    joblevels = []
    for (const val of employees_data) {
        pie_data1.push(val['Attrition'])
        pie_data2.push(val['Gender'])
        pie_data3.push(val['Department'])
        mincomes.push(val['MonthlyIncome'])
        ages.push(val['Age'])
        joblevels.push(val['LevelofJob'])
    }
    removecharts("pcpid")
    drawPieChart1()
    drawPieChart2()
    drawScatterPlot()
    drawbarchart()
    drawgeomap()
    var json_data = getJsonData()
    drawSunBurst(json_data)
}


function drawpcp() {
    pcp(pcp_labels, pcp_data)
}

function drawbarchart() {
    plotBarChart(joblevels)
}

function drawPieChart1() {
    var data1 = {}, data2 = {}, data3 = {};
    for (var i = 0; i < pie_data1.length; i++) {
        data1[pie_data1[i]] = data1[pie_data1[i]] ? data1[pie_data1[i]] + 1 : 1;
    }
    plotPieChart1(data1, "Attrition");
}

function drawPieChart2() {
    var data1 = {}, data2 = {}, data3 = {};
    for (var i = 0; i < pie_data1.length; i++) {
        data2[pie_data2[i]] = data2[pie_data2[i]] ? data2[pie_data2[i]] + 1 : 1;
    }
    plotPieChart2(data2, "Gender");
}

function drawScatterPlot() {
    var data = []

    for (var i = 0; i < mincomes.length; i++) {
        data[i] = {x: parseInt(mincomes[i]), y: parseInt(ages[i])}
    }

    plotScatterplot(data)
}

function getMapData() {
    var avgIncomes = {}, nums = {};
    for (const row of employees_data) {
        if (avgIncomes[row["State"]] === undefined) {
            avgIncomes[row["State"]] = parseInt(row["MonthlyIncome"])
            nums[row["State"]] = 1
        } else {
            avgIncomes[row["State"]] += parseInt(row["MonthlyIncome"])
            nums[row["State"]] += 1
        }
    }
    var res = []
    for (let x in avgIncomes) {
        res.push({state: x, value: avgIncomes[x] / nums[x]})
        avgIncomes[x] = avgIncomes[x] / nums[x];
    }

    return res;
}

function drawgeomap() {
    res_data = getMapData()
    geomapplot(res_data)
}

function drawSunBurst(json_data) {
    plotSunBurst(json_data)
}


