def ejercicio_1():
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))
    suma = num1 + num2
    print(f"La suma de {num1} y {num2} es: {suma}")

def ejercicio_2():
    celsius = float(input("Ingresa la temperatura en grados Celsius: "))
    fahrenheit = celsius * 1.8 + 32
    print(f"{celsius} grados Celsius son {fahrenheit} grados Fahrenheit")

def ejercicio_3():
    base = float(input("Ingresa la base del triángulo: "))
    altura = float(input("Ingresa la altura del triángulo: "))
    area = (base * altura) / 2
    print(f"El área del triángulo es: {area}")

def ejercicio_4():
    numero = int(input("Ingresa un número: "))
    if numero % 2 == 0:
        print(f"{numero} es un número par.")
    else:
        print(f"{numero} es un número impar.")

def ejercicio_5():
    a = int(input("Ingresa el primer número: "))
    b = int(input("Ingresa el segundo número: "))
    a, b = b, a
    print(f"Después del intercambio, a = {a} y b = {b}")

def ejercicio_6():
    num1 = float(input("Ingresa el primer número: ")) 
    num2 = float(input("Ingresa el segundo número: "))
    suma = num1 + num2
    resta = num1 - num2
    multiplicacion = num1 * num2
    division = num1 / num2 if num2 != 0 else "No se puede dividir entre cero."
    print(f"Suma: {suma}")
    print(f"Resta: {resta}")
    print(f"Multiplicación: {multiplicacion}")
    print(f"División: {division}")

def ejercicio_7():
    edad = int(input("Ingresa tu edad en años: "))
    meses = edad * 12
    dias = edad * 365
    print(f"Tienes aproximadamente {meses} meses y {dias} días.")

def ejercicio_8():
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))
    num3 = float(input("Ingresa el tercer número: "))
    mayor = max(num1, num2, num3)
    print(f"El número mayor es: {mayor}")

def ejercicio_9():
    num1 = int(input("Ingresa el primer número: "))
    num2 = int(input("Ingresa el segundo número: "))
    if num1 % num2 == 0:
        print(f"{num1} es múltiplo de {num2}.")
    else:
        print(f"{num1} no es múltiplo de {num2}.")

def ejercicio_10():
    salario_base = float(input("Ingresa el salario base del empleado: "))
    bono = salario_base * 0.10
    salario_total = salario_base + bono
    print(f"El salario total con bono es: {salario_total}")

def ejecutar_ejercicio():
    while True:
        print("\nElige un ejercicio (1-10):")
        ejercicio = input("Ingresa el número del ejercicio o 'salir' para terminar: ")

        match ejercicio:
            case '1':
                ejercicio_1()
            case '2':
                ejercicio_2()
            case '3':
                ejercicio_3()
            case '4':
                ejercicio_4()
            case '5':
                ejercicio_5()
            case '6':
                ejercicio_6()
            case '7':
                ejercicio_7()
            case '8':
                ejercicio_8()
            case '9':
                ejercicio_9()
            case '10':
                ejercicio_10()
            case 'salir':
                print("¡Hasta luego!")
                break
            case _:
                print("Opción inválida. Por favor, ingresa un número entre 1 y 10 o 'salir' para terminar.")

        otra = input("¿Quieres hacer otro ejercicio? (1 para sí, 2 para no): ")
        if otra == '2':
            print("¡Hasta la próxima!")
            break

# Iniciar el programa
ejecutar_ejercicio()
