def intercambio_sin_aux():
    a = int(input("Ingrese el valor de a: "))
    b = int(input("Ingrese el valor de b: "))
    print(f"Antes: a = {a}, b = {b}")
    a, b = b, a
    print(f"Después del intercambio: a = {a}, b = {b}")

def suma_cuadrados():
    a = 5
    b = 3
    c = a**2 + b**2
    print(f"La suma de cuadrados es: {c}")

def conversion_tipos():
    num = int(input("Ingrese un número entero: "))
    num_str = str(num)
    num_float = float(num_str)
    num_int = int(num_float)
    print(f"String: {num_str}, Float: {num_float}, Int: {num_int}")

def redondeo_formato():
    num = 17.8567
    resultado = round(num, 2)
    print(f"Resultado: {str(resultado)}")

def concatenacion_variables():
    nombre = input("Ingrese su nombre: ")
    edad = input("Ingrese su edad: ")
    print(f"Hola, mi nombre es {nombre} y tengo {edad} años.")

def calculo_edad_actual():
    anio_actual = int(input("Ingrese el año actual: "))
    anio_nacimiento = int(input("Ingrese su año de nacimiento: "))
    edad = anio_actual - anio_nacimiento
    print(f"Tu edad es: {edad} años")

def cuenta_regresiva():
    i = 10
    while i >= 0:
        print(i)
        i -= 1

def valor_absoluto():
    num = int(input("Ingrese un número: "))
    if num < 0:
        num = -num
    print(f"Valor absoluto: {num}")

def paridad_incremento_decremento():
    n = int(input("Ingrese un número: "))
    if n % 2 == 0:
        n += 1
    else:
        n -= 1
    print(f"Nuevo valor: {n}")

def maximo_tres_numeros():
    a = int(input("Ingrese a: "))
    b = int(input("Ingrese b: "))
    c = int(input("Ingrese c: "))
    maximo = a
    if b > maximo:
        maximo = b
    if c > maximo:
        maximo = c
    print(f"El mayor es: {maximo}")

def menu():
    while True:
        print("\n--- Taller Fundamentos de Python ---\n")
        print("--- PARTE 1 ---\n")
        print("1. Intercambio sin variable auxiliar")
        print("2. Suma de cuadrados")
        print("3. Conversión de tipos")
        print("4. Redondeo y formato")
        print("5. Concatenación de variables")
        print("6. Cálculo de edad actual")
        print("7. Cuenta regresiva")
        print("8. Valor absoluto sin abs()")
        print("9. Incremento/decremento por paridad")
        print("10. Máximo entre tres números\n")
        print("0. Salir")

        opcion = input("\nSeleccione una opción: ")

        match opcion:
            case "1":
                intercambio_sin_aux()
            case "2":
                suma_cuadrados()
            case "3":
                conversion_tipos()
            case "4":
                redondeo_formato()
            case "5":
                concatenacion_variables()
            case "6":
                calculo_edad_actual()
            case "7":
                cuenta_regresiva()
            case "8":
                valor_absoluto()
            case "9":
                paridad_incremento_decremento()
            case "10":
                maximo_tres_numeros()
            case "0":
                print("Saliendo del programa.")
                break
            case _:
                print("Opción inválida, intente de nuevo.")

# Ejecutar el menú
menu()
