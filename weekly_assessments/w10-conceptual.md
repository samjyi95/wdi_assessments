# Week 10 Conceptual - NAME: __________ `__/16` 

## All questions pertain to the Python language

```python
accounts = {'no123':  100, 'no456': -22, 'no789': 444}

def get_balance(acct):
	return accounts[acct]

```
### Assuming the Python code above has ran:

#### 1. What will the value of `bal` be after the following code runs: (1 point)

```python
bal = accounts['no789']
```
<br>

#### 2. What will the value of `bal` be after the following code runs: (1 point)

```python
acct = 'no456'
bal = accounts[acct]
```
<br>

#### 3. What will the value of `bal` be after the following code runs: (1 point)

```python
bal = get_balance('no123')
```
<br>

#### 4. What will the value of `bal` be after the following code runs: (1 point)
```python
bal = len(accounts)
```
<br>

#### 5. What is the data-type of the variable named `accounts`? (1 point)
<br>

#### Assuming the following Python code has ran, answer questions 6-10:

```python
flowers = ['rose', 'tulip', 'daisy']
num_flowers = len(flowers)

for f in flowers:
    print(f)
```


#### 6. What data type is the variable named `flowers`? (1 point)

#### 7. What is the value of `num_flowers`? (1 point)

#### 8. What is the resulting output? (1 point)
<br><br><br>

#### 9. What will the value of `bouquet` be after the following code runs: (1 point)

```python
bouquet = flowers[1:]
```
<br>

#### 10. What will the value of `flower` be after the following code runs: (1 point)

```python
flower = flowers.pop(1)
```
<br>

#### 11. What will the value of `result` be after the following code runs: (1 point)

```python
foods = ['banana', 'cheeseburger', 'taco', 'pizza']
result = [food.upper() for food in foods if food.startswith('c')]
```
<br>

#### 12. What _keyword_ is used to define functions/methods in Python? (1 point)

#### 13. When defining a function/method, the first line always ends with what character? (1 point)

#### 14. What _keyword_ is used to define a class in Python? (1 point)

#### 15. When defining a class, what is the naming convention? (1 point)

#### 16. What is the name of the special method in a class that is automatically called when creating an instance of the class? (1 point)

