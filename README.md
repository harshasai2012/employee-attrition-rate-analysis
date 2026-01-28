# Visual Analytics on Employee Attrition and Performance


## Dashboard

<img width="1440" height="820" alt="image" src="https://github.com/user-attachments/assets/08202673-3136-4ff0-8985-8294378a4906" />


YouTube: https://www.youtube.com/watch?v=7BsEyy_wg4Y


## Overview

Employee attrition is a critical challenge for organizations across industries, directly impacting productivity, operational continuity, and profitability. High attrition leads to increased hiring and training costs, loss of experienced talent, and disruption to business workflows.

This project leverages **visual analytics** to explore employee attrition patterns and performance trends using interactive dashboards. By identifying key factors influencing attrition, HR teams can proactively engage with at-risk employees and implement targeted retention strategies. While data-driven insights are valuable, combining analytics with human intervention remains essential for effective decision-making.

The analysis is based on a real-world HR dataset containing approximately **1,470 employee records**. Given the moderate size of the dataset, the goal is not to build a predictive model but to extract **actionable insights through visualization** that outperform random assumptions about attrition risk.

---

## Problem Statement

Employees are the backbone of any organization, and workforce stability plays a vital role in long-term success. High attrition presents several challenges:

- Increased cost and time required to recruit and train new employees
- Loss of organizational knowledge and experienced talent
- Reduced team productivity and morale
- Negative impact on overall profitability

This project aims to answer the following business questions:

1. What factors contribute most to employee attrition?
2. What measures can organizations take to improve employee retention?
3. What business value does visual analytics bring to HR decision-making?
4. Can early identification of attrition risk help reduce organizational costs?
5. Which departments or business units are most affected by attrition?

---

## Dashboard & Visualizations

The interactive dashboard consists of multiple coordinated visualizations. Each chart focuses on a specific aspect of employee attrition and performance.

### 1. Pie Charts
- **Attrition Pie Chart**  
  Shows the proportion of employees who left versus those who stayed, providing a quick overview of overall attrition.
- **Gender Distribution Pie Chart**  
  Visualizes gender composition within the organization and highlights attrition differences by gender.
- **Department Distribution Pie Chart**  
  Displays employee distribution across departments to identify areas with higher workforce concentration.

---

### 2. Geographical Heatmap (USA)
- Displays **average monthly income across U.S. states**.
- Helps identify regional compensation trends and their potential impact on employee retention.

---

### 3. Dynamic Scatter Plot
- Allows users to select **any two numerical attributes** (e.g., Monthly Income vs. Years at Company).
- Helps analyze correlations and identify patterns related to attrition and performance.

---

### 4. Interactive Bar Chart
- Visualizes employee counts and attrition trends across **different job roles**.
- Helps determine which roles experience higher turnover and may require focused retention strategies.

---

### 5. Parallel Coordinates Plot
- Enables comparison of **multiple attributes simultaneously** across employees or states.
- Useful for identifying complex relationships between experience, compensation, satisfaction, and attrition.

---

### 6. Correlation Network Graph
- Shows **positive and negative correlations** between employee attributes.
- Highlights how strongly different factors relate to attrition and performance.
- Includes an interactive slider to filter attributes based on correlation strength.

---

### 7. Sunburst Chart
- Provides a **hierarchical view** of employee data across dimensions such as Gender, Department, Job Level, and Role.
- Enables deep exploration of attrition and performance within specific organizational segments.

---

### Interactive Features
- Brushing and filtering across charts enable cross-analysis.
- Selecting data in one chart dynamically updates other visualizations.
- Supports discovery of hidden patterns and trends within the dataset.

---

## Dataset

### Data Sources

1. **IBM HR Analytics Attrition Dataset (Kaggle)**  
   https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset

2. **IBM Software Engineer Salary by State (ZipRecruiter)**  
   https://www.ziprecruiter.com/Salaries/What-Is-the-Average-IBM-Software-Engineer-Salary-by-State

---

## Dataset Description

The dataset contains employee survey data from a reputed organization across multiple U.S. states. It includes approximately **1,500 employee records** and **21 attributes**, providing a balanced mix of numerical and categorical features.

### Numerical Attributes
- Age  
- Distance From Home  
- Monthly Income  
- Number of Companies Worked  
- Percentage Salary Hike  
- Total Working Years  
- Years at Company  
- Years in Current Role  
- Years Since Last Promotion  

### Categorical Attributes
- Attrition  
- Department  
- Education Field  
- State  
- Gender  
- Job Role  
- Marital Status  
- Overtime  
- Level of Education  
- Job Level  
- Job Satisfaction  
- Performance Rating  

---

## Key Takeaways

- Visual analytics enables intuitive exploration of employee attrition drivers.
- Interactive dashboards reveal insights that static reports often miss.
- Role-based and department-level analysis supports targeted HR interventions.
- This approach can be extended to predictive analytics with larger datasets.

---

## Future Scope

- Integrate machine learning models for attrition risk prediction.
- Expand analysis using real-time HR data.
- Build role-specific dashboards for HR and leadership teams.
- Combine engagement, performance, and compensation data for deeper insights.


