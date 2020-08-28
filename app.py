  
from flask import Flask, render_template, jsonify, after_this_request
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
import pandas as pd
import sqlalchemy
import sqlite3


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///NFL_db.sqlite")
# db reflection 
Base = automap_base()
Base.prepare(engine, reflect = True)

# Passer = Base.classes.passer
# Draft = Base.classes.draft
# Salary = Base.classes.salary_2019

# session from Python to db
session = Session(engine)

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def api_call():

    return render_template('index.html')

################################################## 
# passer table data
##################################################

#  'passId', 'playId', 'teamId', 'playerId', 'passer_dict
#  'passOutcomes', 'passDirection', 'passDepth', 'passLength', 'passAtt',
#  'passComp', 'passTd   
# 
# @app.route ("/getData_passer")
# def passer_endpoint():

#     conn = sqlite3.connect('NFL_db.sqlite')
#     c = conn.cursor()
#     results = c.execute("SELECT * FROM passer")

#     passer_data = []
#     for r in results:
#         passer_dict = {}

#         passer_dict["passId"] = r[1]
#         passer_dict["playId"] = r[2]
#         passer_dict["teamId"] = r[3]
#         passer_dict["playerId"] = r[4]
#         passer_dict["passPosition"] = r[5]
#         passer_dict["passOutcomes"] = r[6]
#         passer_dict["passDirection"] = r[7]
#         passer_dict["passDepth"] = r[8]
#         passer_dict["passLength"] = r[9]
#         passer_dict["passAtt"] = r[10]
#         passer_dict["passComp"] = r[11]
#         passer_dict["passTd"] = r[12]

#         passer_data.append(passer_dict)

#     return jsonify(passer_data)


################################################# 
# draft table data
#################################################

# df2 table draft (draft merged with state_centroids)
# 'playerId', 'draft', 'round', 'pick', 'draftTradeValue', 'draftTeam',
# 'position', 'teamId', 'nameFirst', 'nameLast', 'nameFull', 'college',
# 'heightInches', 'weight', 'dob', 'ageAtDraft', 'homeCity', 'homeState',
# 'homeCountry', 'State', 'Latitude', 'Longitude'
   

@app.route ("/getData_draft")
def draft_endpoint():

    conn = sqlite3.connect('NFL_db.sqlite')
    c = conn.cursor()
    results = c.execute("SELECT * FROM draft")

    draft_data = []
    for r in results:
        draft_dict = {}

        draft_dict["playerId"] = r[1]
        draft_dict["draft"] = r[2]
        draft_dict["round"] = r[3]
        draft_dict["pick"] = r[4]
        draft_dict["draftTradeValue"] = r[5]
        draft_dict["draftTeam"] = r[6]
        draft_dict["position"] = r[7]
        draft_dict["teamId"] = r[8]
        draft_dict["nameFull"] = r[11]
        draft_dict["college"] = r[12]
        draft_dict["heightInches"] = r[13]
        draft_dict["weight"] = r[14]
        draft_dict["homeCity"] = r[17]
        draft_dict["homeState"] = r[18]
        draft_dict["Latitude"] = r[21]
        draft_dict["Longitude"] = r[22]

        draft_data.append(draft_dict)

    return jsonify(draft_data)


#######################################################
# salary table data
#######################################################

@app.route("/getData_salary_2019")
def salary_endpoint():

    conn = sqlite3.connect('NFL_db.sqlite')
    c = conn.cursor()
    results = c.execute("SELECT * FROM salary_2019")

    salary_data = []
    for r in results:
        salary_dict = {}

        salary_dict["salaryRk"] = r[1]
        salary_dict["position"] = r[2]
        salary_dict["team"] = r[3]
        salary_dict["salary"] = r[4]
        salary_dict["player_name"] = r[5]
        salary_data.append(salary_dict)
    return jsonify(salary_data)


###########################################################
# visualizations
###########################################################
# Katie

@app.route("/visualization1")
def visualization1():

    return render_template('visualization1.html')
    
# Michelle  
@app.route("/visualization2")
def visualization2():

    return render_template('visualization2.html')

# Emmanuel
@app.route("/visualization3")
def visualization3():

    return render_template('visualization3.html')
# Polina
@app.route("/visualization4")
def visualization4():

    return render_template('visualization4.html')

@app.route("/test")    
def test():

    return render_template('test.html')


if __name__ == "__main__":
    app.run(debug=True)