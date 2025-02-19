
#Aqui creo una matriz con los datos ya establecidos
matrix = [[1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16]]

#Este metodo es para contar los elementos de la matriz, lo iba a usar para confirmar el tamaño de la matriz, pero al final no se usa  y solo lo tengo para contar cuantos elementos hay en la matriz, pero tambien se que se puede hacer de otra forma
def elemets(matrix):
    elemetos = 0
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[i])):
            elemetos += 1
    return elemetos

#Este metodo es para imprimir la matriz, lo hice para poder visualizar la matriz de una forma mas entendible
def imprimir(matrix):
    
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[i])):
            print("["+str(matrix[i][j])+"]", end = " ")
        print()
    
 
#Este metodo fue el que usted dio, pero solo voy a explicar una cosa   
def findElements(matrix, valor):
    for i in range(0,len(matrix)):
        
        for j in range(0,len(matrix[i])):
            if (elemets(matrix) == 0):

                #no tiendo por que no entra a este if, si la matriz esta vacia
                return "No hay elementos en la matriz"
            else:
                imprimir(matrix)
                print("")

                if(matrix[-1][-1]==valor):
                    
                    return "Este es el elemento " +str(elemets(matrix)) + " Equivalente a la posicion " + str(len(matrix)) + "," + str(len(matrix[-1]))
                else:
                    #esto es para eliminar el ultimo elemento de la matriz como lo mostro en el codigo 
                    del matrix[-1][-1]

                    #esto es para eliminar la fila si no hay elementos en la fila  y asi poder avanzar a la siguiente fila
                    if (len(matrix[-1]) == 0):  
                     del matrix[-1]

                    imprimir(matrix)
                    print("")
                    return findElements(matrix,valor)
    #si no encuentra el elemento, regresa un mensaje ya que no entro al if de arriba            
    return "Elemento no encontrado"           
                


print(findElements(matrix, 15))





      
