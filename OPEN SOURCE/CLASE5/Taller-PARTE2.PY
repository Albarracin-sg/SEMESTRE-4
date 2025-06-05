def verificacion_rango():
    x = int(input("Ingrese un número: "))
    print(10 <= x <= 100)

def comparar_strings():
    a = input("Ingrese la primera cadena: ")
    b = input("Ingrese la segunda cadena: ")
    print(a.lower() == b.lower())

def igualdad_tres_variables():
    a = input("Ingrese a: ")
    b = input("Ingrese b: ")
    c = input("Ingrese c: ")
    print(a == b == c)

def presencia_en_lista():
    lista = [2, 4, 6, 8, 10]
    x = int(input("Ingrese un número para buscar en la lista: "))
    print(x in lista)

def divisibilidad_3y5():
    n = int(input("Ingrese un número: "))
    print(n % 3 == 0 and n % 5 == 0)

def orden_estricto():
    a = int(input("Ingrese a: "))
    b = int(input("Ingrese b: "))
    c = int(input("Ingrese c: "))
    print(a < b < c)

def comparacion_doble():
    x = int(input("Ingrese x: "))
    a = int(input("Ingrese a: "))
    b = int(input("Ingrese b: "))
    print(a < x < b)

def relacion_proporcional():
    a = int(input("Ingrese a: "))
    b = int(input("Ingrese b: "))
    print(a == 2 * b)

def cambio_signo_negativo():
    x = float(input("Ingrese x: "))
    if x < 0:
        x = -x
    print(f"Resultado: {x}")

def deteccion_tipo():
    x = eval(input("Ingrese un valor (número o texto): "))
    print(f"Tipo: {type(x).__name__}")

def puede_votar():
    edad = int(input("Ingrese la edad: "))
    tiene_doc = input("¿Tiene documento de identidad? (s/n): ").lower() == "s"
    print(edad >= 18 and tiene_doc)

def control_acceso():
    vip = input("¿Tiene pase VIP? (s/n): ").lower() == "s"
    pago = input("¿Pagó entrada? (s/n): ").lower() == "s"
    ebrio = input("¿Está ebrio? (s/n): ").lower() == "s"
    print(vip or (pago and not ebrio))

def validacion_xor():
    cond1 = input("Condición 1 (True/False): ") == "True"
    cond2 = input("Condición 2 (True/False): ") == "True"
    print(cond1 != cond2)

def validacion_compuesta():
    n = int(input("Ingrese un número: "))
    print(n > 0 and (n % 2 == 0 or n % 3 == 0))

def contradiccion():
    x = int(input("Ingrese un número: "))
    print(x > 5 and x < 1)

def negacion_logica():
    x = int(input("Ingrese un número: "))
    print(not (x <= 10))

def aprobacion_estudiante():
    nota = float(input("Ingrese la nota: "))
    asistencia = float(input("Ingrese el porcentaje de asistencia: "))
    print(nota >= 3.0 and asistencia >= 80)

def alarma():
    temperatura = float(input("Ingrese temperatura: "))
    humedad = float(input("Ingrese humedad (%): "))
    print((temperatura < 0 or temperatura > 38) and humedad > 80)

def contrasena_segura():
    passw = input("Ingrese una contraseña: ")
    segura = len(passw) > 8 and any(char.isdigit() for char in passw)
    print(f"¿Contraseña segura?: {segura}")

def doble_negacion():
    tiene_acceso = False
    print(not (not tiene_acceso))

def menu():
    while True:
        print("\n--- Operadores Relacionales y Lógicos ---\n")
        print("--- PARTE 2 ---\n")
        print("11. Verificación de rango")
        print("12. Comparación de strings (ignorar mayúsculas)")
        print("13. Igualdad entre tres variables")
        print("14. Presencia en lista")
        print("15. Divisibilidad por 3 y 5")
        print("16. Números en orden estricto")
        print("17. Comparación doble")
        print("18. Relación proporcional")
        print("19. Cambio de signo si negativo")
        print("20. Detección de tipo")
        print("21. ¿Puede votar?")
        print("22. Control de acceso lógico")
        print("23. Validación XOR")
        print("24. Validación compuesta múltiple")
        print("25. Condición contradictoria")
        print("26. Negación lógica")
        print("27. Aprobación de estudiante")
        print("28. Simulación de alarma")
        print("29. Contraseña segura")
        print("30. Doble negación lógica\n")
        print("0. Salir")

        opcion = input("\nSeleccione una opción: ")

        match opcion:
            case "11": verificacion_rango()
            case "12": comparar_strings()
            case "13": igualdad_tres_variables()
            case "14": presencia_en_lista()
            case "15": divisibilidad_3y5()
            case "16": orden_estricto()
            case "17": comparacion_doble()
            case "18": relacion_proporcional()
            case "19": cambio_signo_negativo()
            case "20": deteccion_tipo()
            case "21": puede_votar()
            case "22": control_acceso()
            case "23": validacion_xor()
            case "24": validacion_compuesta()
            case "25": contradiccion()
            case "26": negacion_logica()
            case "27": aprobacion_estudiante()
            case "28": alarma()
            case "29": contrasena_segura()
            case "30": doble_negacion()
            case "0":
                print("¡Chao!")
                break
            case _:
                print("Opción inválida, ñero. Intente de nuevo.")

# Ejecutar menú
menu()
