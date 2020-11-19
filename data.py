import os
import psycopg2
import json
import csv
import time

ELEPHANT_HOST = os.getenv("ELEPHANT_HOST")
ELEPHANT_NAME = os.getenv("ELEPHANT_NAME")
ELEPHANT_PASSWORD = os.getenv("ELEPHANT_PASSWORD")

print(ELEPHANT_HOST)

dsn = "host={} dbname={} user={} password={}".format(ELEPHANT_HOST, ELEPHANT_NAME, ELEPHANT_NAME, ELEPHANT_PASSWORD)

def test_connection():
    """Pārbauda pieslēgumu datubāzei
    
    Returns:
        string -- tekstu ar datubāzes versiju
    """
    # saformatē pieslēgšanās parametrus
    # dsn = "host={} dbname={} user={} password={}".format(ELEPHANT_HOST, ELEPHANT_NAME, ELEPHANT_NAME, ELEPHANT_PASSWORD)
    # izveido pieslēgumu
    conn = psycopg2.connect(dsn)
    # izveido kursoru
    cur = conn.cursor()
    # aizsūta kursoram SQL vaicājumu
    cur.execute("SELECT version();")
    # pieprasa no kursora atbildi
    record = cur.fetchone()
    result = "You are connected to - " + str(record)
    # aizver kursoru
    cur.close()
    # aizver peislēgumu daubāzei
    conn.close()
    return result

def ierakstit1(parametri):
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    sql="""INSERT INTO saites (url,nosaukums,atsauksme,autors) 
        VALUES ({}) RETURNING id;""" 
    cur.execute(sql.format(parametri))
    jaunais_id=cur.fetchone[0]
    conn.commit()
    cur.close()
    conn.close()
    return jaunais_id

def ierakstit2(tags,saite):
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    sql="""INSERT INTO tagi_saites (tag_id,saite_id) 
        VALUES (%s,%s) RETURNING saraksta_id;""" 
    cur.execute(sql,(tags,saite))
    conn.commit()
    cur.close()
    conn.close()
    return test_connection()


def nolasit(parametri = 0):
    conn = psycopg2.connect(dsn)
    cur = conn.cursor()
    if parametri==0:
        kverijs='''SELECT id, url, nosaukums, atsauksme, autors, tag_name FROM saites LEFT JOIN tagi_saites ON saites.id=tagi_saites.saite_id LEFT JOIN tagi ON tagi_saites.tag_id=tagi.tag_id '''
        cur.execute(kverijs)
        r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    elif parametri == 1:
        kverijs='''SELECT name FROM kategorijas '''
        cur.execute(kverijs)
        r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    elif parametri == 2:
        kverijs='''SELECT * FROM tagi ORDER BY kategorija ASC'''        
        cur.execute(kverijs)
        r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    else:
        cur.execute('''SELECT * FROM (SELECT izvele.nrpk, izvele.vards, izvele.uzvards, izvele.datums, grozi.nosaukums, datori.datoru_nosaukums, padzilinatie1.padzkurss padzkurss1, padzilinatie2.padzkurss padzkurss2, padzilinatie3.padzkurss padzkurss3, izvele.specdebates, izvele.specanglit, izvele.specfiloz, izvele.specpub, izvele.specpapangv, izvele.specpsih, izvele.specrobo, izvele.speckrv FROM izvele LEFT JOIN grozi ON izvele.izvele_id=grozi.id LEFT JOIN datori ON izvele.datori_id=datori.id LEFT JOIN padzilinatie AS padzilinatie1 ON padz_id1=padzilinatie1.id LEFT JOIN padzilinatie AS padzilinatie2 ON padz_id2=padzilinatie2.id LEFT JOIN padzilinatie AS padzilinatie3 ON padz_id3=padzilinatie3.id ORDER BY nrpk ASC) AS tabula WHERE tabula.uzvards LIKE '{}%' '''.format(parametri.teksts))
        r = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    return r
