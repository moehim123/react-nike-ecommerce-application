numList = [4,7 ,8 ,9 ,2 ,3 ] 

previousNum = numList[0]     

for i in range(len(numList)): 
    
    if numList[i] > previousNum: 
        previousNum = numList[i] 
  
print(previousNum)    

