from flask import Flask, redirect, url_for, request, render_template
import json, datetime

d = datetime.datetime.now()

app = Flask(__name__,static_url_path='/static/')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

dataR = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success/<data>')
def success(data):
    f=open('static/resource.json', 'r')
    dataJ = json.load(f)
    return 'Temele au fost actualizate: %s' % dataJ + '  cPass: ' + str(data)
    f.close()
    

@app.route('/dev', methods=['POST', 'GET'])
def dev():
    if request.method == 'POST':
        dataR = request.form['pass']
        if(dataR == 'aham'):
            d = datetime.datetime.now()
            f=open('static/resource.json', 'w+')
            dataJ = {}#json.load(f)
            dataJ["hw1"] = request.form["hw1"]
            dataJ["hw2"] = request.form["hw2"]
            dataJ["hw3"] = request.form["hw3"]
            dataJ["hw4"] = request.form["hw4"]
            dataJ["hw5"] = request.form["hw5"]
            dataJ["hw6"] = request.form["hw6"]
            dataJ["inf"] = request.form["inf"]
            dataJ["modify"] = (d.strftime("%d"))
            #json.dump(dataJ,f,indent=2)
            f.write(str(dataJ).replace("'",'"'))
            f.close()
            return redirect(url_for('success', data=dataR))
    return render_template('dev.html')

@app.after_request
def add_header(r):
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

if __name__ == '__main__':
    app.run(debug=False, host='192.168.0.142', port=80)