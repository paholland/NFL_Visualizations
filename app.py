  
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
# engine = create_engine("sqlite:///NFL_db.sqlite")
# # db reflection 
# Base = automap_base()
# Base.prepare(engine, reflect = True)
# A = Base.classes.station
# # Meas = Base.classes.measurement
# # session from Python to db
# session = Session(engine)

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
@app.route (d3.json("/data".then  function here        )
    def passer_endpoint():

    conn = sqlite3.connect('NFL_db.sqlite')
    c = conn.cursor()
    results = c.execute("SELECT * FROM passer")

# ???? index from index column??

    passer_data = []
    for result in results:
        passer_dict = {}

        passer_dict["passId"] = r[0]
        passer_dict["playId"] = r[]
        passer_dict["teamId"] = r[0]
        passer_dict["playerId"] = r[]
        passer_dict["passPosition"] = r[]
        passer_dict["passOutcomes"] = r[]
        passer_dict["passDirection"] = r[]
        passer_dict["passDepth"] = r[]
        passer_dict["passLength"] = r[]
        passer_dict["passAtt"] = r[]
        passer_dict["passComp"] = r[]
        passer_dict["passTd"] = r[]

        passer_data.append(passer_dict)

    return jsonify(passer_data)


################################################# 
# draft table data
#################################################

# df2 table draft (draft merged with state_centroids)
# 'playerId', 'draft', 'round', 'pick', 'draftTradeValue', 'draftTeam',
# 'position', 'teamId', 'nameFirst', 'nameLast', 'nameFull', 'college',
# 'heightInches', 'weight', 'dob', 'ageAtDraft', 'homeCity', 'homeState',
# 'homeCountry', 'State', 'Latitude', 'Longitude'
   

@app.route (d3.json("/data".then          )
def draft_endpoint():

    conn = sqlite3.connect('NFL_db.sqlite')
    c = conn.cursor()
    results = c.execute("SELECT * FROM draft")

    draft_data = []
    for r in results:
           draft_dict = {}

            draft_dict["playerId"] = r[0]
            draft_dict["draft"] = r[1]
            draft_dict["round"] = r[]
            draft_dict["pick"] = r[1]
            draft_dict["draftTradeValue"] = r[0]
            draft_dict["draftTeam"] = r[1]
            draft_dict["position"] = r[6]
            draft_dict["teamId"] = r[1]
            draft_dict["nameFull"] = r[10]
            draft_dict["college"] = r[11]
            draft_dict["heightInches"] = r[12]
            draft_dict["weight"] = r[13]
            draft_dict["homeCity"] = r[16]
            draft_dict["homeState"] = r[17]
            draft_dict["Latitude"] = r[20]
            draft_dict["Longitude"] = r[21]

            draft_data.append(draft_dict)

    return jsonify(draft_data)


#######################################################
# salary table data
#######################################################

@app.route("/salary_2019")
def salary_endpoint():

    conn = sqlite3.connect('NFL_db.sqlite')
    c = conn.cursor()
    results = c.execute("SELECT * FROM salary_2019")

salary_data = []
    for r in results:
        salary_dict = {}

        salary_dict["salaryRk"] = r[0]
        salary_dict["position"] = r[]
        salary_dict["team"] = r[]
        salary_dict["salary"] = r[]
        salary_dict["player_name"] = r[]
        salary_data.append(salary_dict)

    return jsonify(salary_data)


###########################################################
# visualizations
###########################################################

@app.route("/visualization1")
def visualization1():

    return render_template('visualization1.html')
    
@app.route("/visualization2")
def visualization2():

    return render_template('visualization2.html')

@app.route("/visualization3")
def visualization3():

    return render_template('visualization3.html')

@app.route("/visualization4")
def visualization3():

    return render_template('visualization4.html')

if __name__ == "__main__":
    app.run(debug=True)