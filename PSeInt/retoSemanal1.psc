Algoritmo Reto_Semanal_1
	Escribir 'Tres personas deciden inveritr su dinero para crear una empresa. Cada una de ellas invierte una cantidad distinta. Cual es el porcentaje que cada quien invierte con respecto a la cantidad total invertida.'
	Escribir 'Digita la cantidad que cada inversor puso en la empresa.'
	definir inv1, inv2, inv3 Como Entero
	Leer inv1, inv2, inv3
	totalInv = inv1 + inv2 + inv3
	Escribir 'La inversion total fue de: $', totalInv, ' Dolares Americanos'
	pInv1 = 100*(inv1 / totalInv)
	pInv2 = 100*(inv2 / totalInv)
	pInv3 = 100*(inv3 / totalInv)
	Escribir 'Los porcentajes de cada inversion es de: '
	Escribir 'Inversor 1: ', pInv1, '%'
	Escribir 'Inversor 2: ', pInv2, '%'
	Escribir 'Inversor 3: ', pInv3, '%'
FinAlgoritmo
