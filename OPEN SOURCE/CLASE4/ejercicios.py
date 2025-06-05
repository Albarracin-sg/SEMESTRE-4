#PARETE 2 DEL TALLER JUAN ALBARRACIN

def ejercicio_11():
    x = int(input("Ingresa un valor para x: "))
    print(x > 10 and x < 20)

def ejercicio_12():
    a = int(input("Ingresa a: "))
    b = int(input("Ingresa b: "))
    c = int(input("Ingresa c: "))
    print(a == b or c > 100)

def ejercicio_13():
    resultado = True or False and False
    print(f"True or False and False = {resultado}")

def ejercicio_14():
    resultado = (5 > 3) ^ (2 < 1)
    print(f"(5 > 3) ^ (2 < 1) = {resultado}")

def ejercicio_15():
    a = int(input("Ingresa a: "))
    b = int(input("Ingresa b: "))
    c = int(input("Ingresa c: "))
    resultado = a >= b and b >= c
    print(f"not (a < b or b < c) es equivalente a: {resultado}")

def ejercicio_16():
    x = 10
    y = 20
    resultado = x != y and (x > 15 or y > 15)
    print(f"x = {x}, y = {y} → Resultado: {resultado}")

def ejercicio_17():
    resultado = (10 != 5) and (4 == 4) or (2 > 3)
    print(f"(10 != 5) and (4 == 4) or (2 > 3) = {resultado}")

def ejercicio_18():
    a = True
    b = False
    resultado = a ^ b
    print(f"a = True, b = False → a ^ b = {resultado}")

def ejercicio_19():
    resultado = (3 > 2) and ((2 > 1) ^ False)
    print(f"(3 > 2) and (2 > 1) ^ False = {resultado}")

def ejercicio_20():
    num1 = int(input("Ingresa el primer número: "))
    num2 = int(input("Ingresa el segundo número: "))
    resultado = (num1 > 0) ^ (num2 > 0)
    print("¿Exactamente uno es positivo?", resultado)


# Menú interactivo
while True:
    print("\n--------- MENÚ DE EJERCICIOS------\n")

    print("11. x entre 10 y 20")
    print("12. a == b o c > 100")
    print("13. Evaluar: True or False and False")
    print("14. Evaluar: (5 > 3) ^ (2 < 1)")
    print("15. Reescribir not (a < b or b < c)")
    print("16. x != y y uno > 15")
    print("17. Evaluar: (10 != 5) and (4 == 4) or (2 > 3)")
    print("18. Evaluar: True ^ False")
    print("19. Evaluar: (3 > 2) and (2 > 1) ^ False")
    print("20. Verificar si solo uno es positivo\n")
    print("0. Salir\n")

    opcion = input("Elige una opción (11-20, 0 para salir): ")

    match opcion:
        case "11": ejercicio_11()
        case "12": ejercicio_12()
        case "13": ejercicio_13()
        case "14": ejercicio_14()
        case "15": ejercicio_15()
        case "16": ejercicio_16()
        case "17": ejercicio_17()
        case "18": ejercicio_18()
        case "19": ejercicio_19()
        case "20": ejercicio_20()
        case "0":
            print("¡Hasta luego!")
            break
        case _:
            print("Opción no válida. Intenta de nuevo.")
