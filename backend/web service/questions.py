#!/usr/bin/env python
# coding: utf-8

from Classes1 import Model
import pandas as pd
import joblib

df = pd.read_csv('Stage1.csv') 
dfs2 = pd.read_csv('Stage2.csv')


total_similarity = 0
for i in range(0,5) :
    h=df['id'][i]-1
    print(df['question'][h])
    t=df['time'][h]
    y= Model(t)
    m=y.Recording(t)
    filecompare= df['comparefile'][h]
    sim=y.Similarity( m, filecompare)
    total_similarity +=sim
    i+=1
#else:
print("finished!")

finaltotal=total_similarity/5
if(finaltotal<50):
    for i in range(6,10):
        d=df['id'][i]-1
        print(df['question'][d])
        t=df['time'][d]
        y= Model(t)
        m=y.Recording(t)
        filecompare= df['comparefile'][d]
        sim=y.Similarity( m, filecompare)
        total_similarity +=sim
        i+=1
    else:
        print("finished!")
n=total_similarity/10
if(n<50):
    f = open("fbs1.txt", "r")
    print(f.read())
else:
    total_similarity = 0
    for i in range(0,6) :
        h=dfs1['id'][i]-1
        print(dfs1['question'][h])
        t=dfs1['time'][h]
        y= Model(t)
        m=y.Recording(t)
        filecompare= dfs1['comparefile'][h]
        sim=y.Similarity( m, filecompare)
        total_similarity +=sim
        i+=1
    else:
        print("finished!")

filename = 'finalized_model.sav'
joblib.dump(cls, filename)