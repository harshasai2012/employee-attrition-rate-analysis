import pandas as pd
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    data = dict()
    df = pd.read_csv('employees_new.csv')
    data["pcp_labels"] = [0 for i in range(1470)]
    data["joblevel"] = list(df.loc[:, "LevelofJob"])
    data["age"] = list(df.loc[:, "Age"])
    data["income"] = list(df.loc[:, "MonthlyIncome"])
    data["attrition"] = list(df.loc[:, "Attrition"])
    data["gender"] = list(df.loc[:, "Gender"])
    data["dept"] = list(df.loc[:, "Department"])

    return render_template('index.html', data=data)


if __name__ == "__main__":
    app.run("localhost", 7777, debug=True)
