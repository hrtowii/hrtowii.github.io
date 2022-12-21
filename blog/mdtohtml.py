import markdown
import datetime
import re
selectedFile = input("Enter the exact path of the markdown file you would like to convert: ")
postTitle = input("Enter the title of the post: ")
fileTitle = postTitle.lower().replace(" ","-")
fileTitle = re.sub("[^a-z\-]", "", fileTitle)
try:
    with open(selectedFile,'r') as readfile:
        tempMd = readfile.read()
    html = markdown.markdown(tempMd)
    with open('blog/' + fileTitle + '.html', 'w') as f:
        f.write(html)
except:
    print("File not found")

# very cool code i stole from someone else   
curdate = datetime.datetime.now()
day = str(int(curdate.strftime("%d"))) + "."
nicedate = day + curdate.strftime(" %B %Y")

print('Date: ' + nicedate)
