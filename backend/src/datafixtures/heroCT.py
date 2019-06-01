import json

pk = 0
counterdict = []
fulldict=dict()
for heroid in range(1, 118): 
    for heroid2 in range(1, 118):
        if heroid != heroid2:
            pk += 1
            counter = {
            "model":"heroes.herocounters",
            "pk":pk,
            }


            herodict = {
                "ct1":heroid,
                "ct2":heroid2,
                "score":0,
            }
            counter["fields"]=herodict
            counterdict.append(counter)
            




with open("fixtureCT.json", 'a+') as outfile:  
    json.dump(counterdict, outfile)
        
