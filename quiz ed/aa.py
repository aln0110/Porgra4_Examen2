

matrix = [[1,2,3,4],
          [5,6,7,8],
          [9,10,11,12]]


def elemets(matrix):
    elemetos = 0
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[i])):
            elemetos += 1
    return elemetos

def imprimir(matrix):
    
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[i])):
            print("["+str(matrix[i][j])+"]", end = " ")
        print()
    



def findElements(matrix, valor):
    for i in range(0,len(matrix)):
        for j in range(0,len(matrix[i])):
            if not matrix:
                print("No hay elementos en la matriz")
                return True
            elif(len(matrix) > 0):
                imprimir(matrix)
                print("")

                if(matrix[-1][-1]==valor):
                    print("Este es el elemento " +str(elemets(matrix)) + " Equivalente a la posicion " + str(len(matrix)) + "," + str(len(matrix[i])))
                    return False
                else:
                    del matrix[-1][-1]
                    if (len(matrix[-1]) == 0):  
                     del matrix[-1]
                    imprimir(matrix)
                    print("")
                    return findElements(matrix,valor)
    return "Elemento no encontrado"            
                


print(findElements(matrix, 6))
print(str(len(matrix)))




      
