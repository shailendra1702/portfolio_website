from flask import Flask, g , request #g: global
from flask_cors import CORS
import pymysql
import logging
import datetime

app = Flask(__name__)
CORS(app)

@app.before_request
def before_request():
    print("making connection")
    g.db = pymysql.connect(host = 'localhost',user='root',password='Ayush17!@#&%',db = 'portfolio_website',autocommit=True)
    g.cursor = g.db.cursor()
    
    
@app.teardown_request
def teardown_request(error = None):
    print('closing connnection')
    if error:
        print(str(error))
    else:
        g.cursor.close()
        g.db.close()
    

# db = pymysql.connect(host = 'localhost',user='root',password='Ayush17!@#&%',db = 'portfolio_website',autocommit=True)

def recommendation_model(recommendations):
    res = []
    for recommendation in recommendations:
        recommendation_obj = {
        "id": recommendation[0],
        "name": recommendation[1],
        'email':recommendation[2],
        "company": recommendation[3],
        "designation": recommendation[4],
        "message": recommendation[5],
        }
        res.append(recommendation_obj)
    return res

def skills_model(skills):
    res = []
    for skill in skills:
        skill_obj = {
        "id": skill[0],
        "imageUrl": skill[1],
        'name':skill[2],
        "starsTotal": skill[3],
        "starsActive": skill[4],
        }
        res.append(skill_obj)
    return res

def projects_model(projects):
    res = []
    for project in projects:
        project_obj = {
        "id": project[0],
        "imageUrl": project[1],
        'title':project[2],
        "excerpt": project[3],
        "body": project[4],
        }
        res.append(project_obj)
    return res

@app.route("/api/recommendations",methods = ["GET"])
def get_recommendations():
    try:
        # db = pymysql.connect(host = 'localhost',user='root',password='Ayush17!@#&%',db='portfolio_website',autocommit=True)
        # cursor = db.cursor()
        query = "select * from recommendations where onShowcase=true"
        g.cursor.execute(query)
    
        recommendations = g.cursor.fetchall()
        # cursor.close()
        # db.close()
        return { "isSuccessful":True,"results":recommendation_model(recommendations)}
        
    except Exception as e:
        logging.error(e)
        return {"isSuccessful":False,"results":[]}
    
@app.route("/api/skills", methods = ['GET'])
def get_skills():
    try:
        # db = pymysql.connect(
        #     host = 'localhost',user='root',password='Ayush17!@#&%',db='portfolio_website',autocommit=True
        # )
        # cursor = db.cursor()
        query = "select * from skills;"
        
        g.cursor.execute(query)
        skills = g.cursor.fetchall()
        # cursor.close()
        # db.close()
        return { "isSuccessful":True,"results":skills_model(skills)}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful":False,"results":[]}
    
@app.route("/api/projects", methods = ['GET'])
def get_projects():
    try:
        # db = pymysql.connect(
        #     host = 'localhost',user='root',password='Ayush17!@#&%',db='portfolio_website',autocommit=True
        # )
        # cursor = db.cursor()
        query = "select * from projects where isPublished = True order by lastModified DESC;"
        
        g.cursor.execute(query)
        projects = g.cursor.fetchall()
        # cursor.close()
        # db.close()
        return { "isSuccessful":True,"results":projects_model(projects)}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful":False,"results":[]}
    
# @app.route("/api/project", methods = ['POST'])
# def add_project():
#     try:
#         project = request.json
#         print(project)
#         query = "insert into projects values(%s, %s, %s, %s, %s, %s, %s);"
#         g.cursor.execute(query,[project['id'],project['imageUrl'],project['title'],project['excerpt'],project['body'],True,datetime.datetime.now()])
#         return {'isSuccessful':True}
#     except Exception as e:
#         logging.error(e)
#         return {'isSuccessful':False }