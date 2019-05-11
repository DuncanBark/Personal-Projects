import bs4 as bs
import urllib
import unicodedata

artist = raw_input("Enter the artist: ").lower().replace(" ", "")
songtitle = raw_input("Enter the song title: ").lower().replace(" ", "")

openurl = urllib.urlopen("https://www.azlyrics.com/lyrics/" + artist + "/" + songtitle + ".html").read()
editurl = bs.BeautifulSoup(openurl, "lxml")
lyrics = ""

for div in editurl.find_all(class_="col-xs-12 col-lg-8 text-center"):
    lyrics = (div.text)
    
try:
    # from https://stackoverflow.com/questions/1207457/
    lyrics = unicodedata.normalize("NFKD", lyrics).encode("ascii", "ignore")
except:
    print "No song found, please verify artist and song title :)"
    exit()

printQuestion = raw_input("Would you like to see the lyrics? [y/n]: ").lower().replace(" ", "")

if printQuestion == "y":
    print "Lyrics to " + songtitle + " by " + artist + ":\n"
    lyrics = lyrics.strip()
    lyricsAR = lyrics.split("\n")
    lyricsAR = lyricsAR[11:len(lyricsAR) - 61]
    for lines in lyricsAR:
        print (lines)

else:
    print "Goodbye :)"


