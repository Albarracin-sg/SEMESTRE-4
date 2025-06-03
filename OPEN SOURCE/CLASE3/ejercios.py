#ejercicio 1
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))

suma = num1 + num2
print(f"La suma de {num1} y {num2} es: {suma}")

#ejercicio 2
celsius = float(input("Ingresa la temperatura en grados Celsius: "))

fahrenheit = celsius * 1.8 + 32
print(f"{celsius} grados Celsius son {fahrenheit} grados Fahrenheit")

#ejercicio 3
base = float(input("Ingresa la base del triángulo: "))
altura = float(input("Ingresa la altura del triángulo: "))

area = (base * altura) / 2
print(f"El área del triángulo es: {area}")

#ejercicio 4
numero = int(input("Ingresa un número: "))

if numero % 2 == 0:
    print(f"{numero} es un número par.")
else:
    print(f"{numero} es un número impar.")

#ejercicio 5
a = int(input("Ingresa el primer número: "))
b = int(input("Ingresa el segundo número: "))

a, b = b, a
print(f"Después del intercambio, a = {a} y b = {b}")

#ejercicio 6
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

#ejercicio 7
edad = int(input("Ingresa tu edad en años: "))

meses = edad * 12
dias = edad * 365

print(f"Tienes aproximadamente {meses} meses y {dias} días.")

#ejercicio 8
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
num3 = float(input("Ingresa el tercer número: "))

mayor = max(num1, num2, num3)
print(f"El número mayor es: {mayor}")

#ejercicio 9
num1 = int(input("Ingresa el primer número: "))
num2 = int(input("Ingresa el segundo número: "))

if num1 % num2 == 0:
    print(f"{num1} es múltiplo de {num2}.")
else:
    print(f"{num1} no es múltiplo de {num2}.")

#ejercicio 10
salario_base = float(input("Ingresa el salario base del empleado: "))

bono = salario_base * 0.10

salario_total = salario_base + bono
print(f"El salario total con bono es: {salario_total}")