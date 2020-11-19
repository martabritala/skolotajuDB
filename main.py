import datetime
import os
import psycopg2
from json import loads
from flask import Flask, g, render_template, request, redirect
import data
# from boto.s3.connection import S3Connection

app = Flask('app')

# class objekts:
#     def __init__(self, izvele, teksts):
#         self.izvele=izvele
#         self.teksts=teksts

@app.route('/', methods=['POST','GET'])
def index_lapa():
    if request.method=='POST':
        Nosaukums = request.form['nosaukums']
        print(Nosaukums)
        print(request.json)
        elementi=data.nolasit(2)
        kategorijas=data.nolasit(1)
    else:
        elementi=data.nolasit(2)
        kategorijas=data.nolasit(1)
    return render_template('index1.html',teksts=elementi, kategs=kategorijas)

# @app.route('/gatavs', methods=['POST', 'GET'])
# def gatavs():
#     if request.method=='POST':
#         stundas = request.form.getlist('stunduskaits[]')
#         print(stundas[0])
#         stundas = stundas[0].split(',')
#         # for elem in stundas:
#         #     print(elem)
#         #     elem=int(elem)
#         print(stundas)
#         print(request.form.getlist('izvele[]'))
#         print(request.form)
#         return render_template('gatavs.html',numurs = request.form['ExNr'], klase10=int(stundas[0]), klase11=int(stundas[1]), klase12=int(stundas[2]), tresa=request.form['tresaval'], otra=request.form['otraval'], vards=request.form['vards'], uzvards=request.form['uzvards'], programma=request.form['programma'], masivs=request.form.getlist('izvele[]'))
#     else:
#         return render_template('gatavs.html', klase10=32, klase11=30, klase12=18, vards='Jānis', uzvards='Bērziņš', programma=1, masivs=[30,18,13])

@app.route('/test')
def test():
    return data.test_connection()

# @app.route('/beigas')
# def beigas():
#     return redirect('https://www.rag.lv/')

# @app.route('/suutiit', methods=['POST'])
# def suutiit():
#     parametri="'{vards}','{uzvards}',{programma},{datori},{debates},{anglit},{filoz},{publ},{papang},{psih},{robo},{krv},{padz1},{padz2},{padz3},{otraval},{tresaval},{exnumurs}".format(**request.json)
#     data.ierakstit(parametri)
#     return data.test_connection()

@app.route('/mekletajs', methods=['POST', 'GET'])
def meklet():
    if request.method == 'POST':
        # Nosaukums = request.form['nosaukums']
        # print(Nosaukums)
        # print(request.json)
        # ManaIzvele=int(request.form['izvele'])
        # MansTeksts=request.form['teksts']
        # MansObjekts=objekts(ManaIzvele,MansTeksts)
        rezultats=data.nolasit()
        kategorijas=data.nolasit(1)
    else:
        rezultats=data.nolasit()
        kategorijas=data.nolasit(1)
    return render_template('rezultati.html', linijas=rezultats, kategs=kategorijas)


