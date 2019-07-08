import json
from urllib.request import urlopen
from bs4 import BeautifulSoup as soup
import time
import concurrent.futures

counterdict=[]


url = "https://dota2.gamepedia.com/Heroes"
html = urlopen(url)
page_html = html.read()
html.close()
page_soup = soup(page_html, "html.parser")
containers = page_soup.findAll("div", {"style":"width:150px; height:84px; display:inline-block; overflow:hidden; margin:1px"})
ct = 1
def transform(container): 
    global ct
    hero={"model" : "heroes.hero"}
    counterlist=""
    x = container.a
    heroname=x["title"]
    herolink=x["href"]
#    get images
    url = "https://dota2.gamepedia.com/File:" + herolink[1:] + "_icon.png" 
    print(f"{heroname} getting image")
    html = urlopen(url)
    page_html = html.read()
    html.close()
    page_soup = soup(page_html, "html.parser")
    imagelink = page_soup.find("div", {"class":"fullImageLink"})
    imagelink = imagelink.img["src"]

#   write images
    imagename = heroname + ".png"
    f = open(heroname + ".png",'wb')
    f.write(urlopen(imagelink).read())
    f.close()
#    get counters

    herolink=x["href"]
    url = "https://dota2.gamepedia.com" + herolink + "/Counters"
    
    html = urlopen(url)
    page_html = html.read()
    html.close()
    page_soup = soup(page_html, "html.parser")
    counters = page_soup.findAll("div", {"style":"margin-bottom:5px; box-shadow:0px 0px 2px 4px red;"})
    
    for counter in counters:

        counterlist = counterlist +counter.a["title"] + ","
        ctdict={"name":heroname, "counters":counterlist, "image": "media/" + heroname + ".png"}
    hero.update({"pk":ct})
    hero.update({"fields":ctdict})
    print(f'{heroname} added')
    # counterdict.append(hero)
    
    ct+=1
    return hero
    



def scrapeit(containers):
    with concurrent.futures.ThreadPoolExecutor(max_workers=None) as executor:
        return list(executor.map(transform, containers))



if __name__=="__main__":
    starttime=time.time()
    counterdict = scrapeit(containers)
    with open("fixturestr.json", 'a+') as outfile:  
        json.dump(counterdict, outfile)
            
    endtime=time.time()
    print(f"Completed in {endtime-starttime}")

