#questions

#largest Word in a text
text="python programming text"

wc={}
words1=text.split(" ")
for w in words1:
    wc[w]=len(w)   
print(max(wc,key=lambda k:wc.get(k)))
#def get_length(w):
#    return len(w)
    
#words=text.split(" ")
#print(max(words,key=get_length))


#second largest element in a tuple
num=(10,11,12,13)
print(sorted(num,reverse=True)[1])
#sum of elements in a tuple
