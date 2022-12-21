## Swift is a strongly typed language.
* Wtf does this mean?
	* It is required to state the type of each variable. For example:
	* `var String = "Apple"`

## Arrays & Sets

### Arrays

An array stores an ordered collection of values of the same data type.

```swift
var Array1 = [String]()
var Array2: [String] = []
// both create an empty array that contains strings
```

**.count property**

```swift
var randomExample: [Double] = [1.1, 1.3, 1.42, 0.12]
print(count.randomExample) // returns 4 Int
```

****`.append()` Method and `+=` Operator**

-   The `.append()` method can be called on an array to add an item to the end of the array.
-   The `+=` addition assignment operator can be used to add the elements of another array to the existing array.

```swift
var gymBadges = ["Boulder", "Cascade"] 
gymBadges.append("Thunder")
gymBadges += ["Rainbow", "Soul"] 
// ["Boulder", "Cascade", "Thunder", "Rainbow", "Soul"]
```

****`.insert()` and `.remove()` Methods**

-   The `.insert()` method can be called on an array to add an element at a specified index.
    -   It takes two arguments: `value` and `at: index`.
-   The `.remove()` method can be called on an array to remove an element at a specified index.
    -   It takes one argument: `at: index`.

```
var moon = ["🌖", "🌗", "🌘", "🌑"] 
moon.insert("🌕", at: 0) // ["🌕", "🌖", "🌗", "🌘", "🌑"] 
moon.remove(at: 4) // ["🌕", "🌖", "🌗", "🌘"]
```

****Iterating Over an Array****

-   In Swift, a `for`-`in` loop can be used to iterate through the items of an array.
-   This is a powerful tool for working with and manipulating a large amount of data.

```swift
var employees = ["Michael", "Dwight", "Jim", "Pam", "Andy"] 
for person in employees {  
	print(person)
	} 
// Prints: Michael
// Prints: Dwight
// Prints: Jim
// Prints: Pam
// Prints: Andy
```

****Swift Sets****

-   We can use a set to store unique elements of the same data type.

```swift
var paintings: Set /* IMPORTANT */ = ["The Dream", "The Starry Night", "The False Mirror"]
```

****Empty Sets****

-   An empty set is a set that contains no values inside of it.

```swift
var team = Set<String>() 
print(team)// Prints: []
```

****Populated Sets****

-   To create a set populated with values, use the `Set` keyword before the assignment operator.
-   The values of the set must be contained within brackets `[]` and separated with commas `,`.

```swift
var vowels: Set = ["a", "e", "i", "o", "u"]
```

****.insert()****

To insert a single value into a set, append `.insert()` to a set and place the new value inside the parentheses `()`.

`var cookieJar: Set = ["Chocolate Chip", "Oatmeal Raisin"] // Add a new elementcookieJar.insert("Peanut Butter Chip")`

****.remove() and .removeAll() Methods****

To remove a single value from a set, append `.remove()` to a set with the value to be removed placed inside the parentheses `()`.

To remove every single value from a set at once, append `.removeAll()` to a set.

`var oddNumbers: Set = [1, 2, 3, 5] // Remove an existing elementoddNumbers.remove(2) // Remove all elementsoddNumbers.removeAll()`

****.contains()****

Appending `.contains()` to an existing set with an item in the parentheses `()` will return a `true` or `false` value that states whether the item exists within the set.

```swift
var names: Set = ["Rosa", "Doug", "Waldo"] 
print(names.contains("Lola")) // Prints: false 
if names.contains("Waldo") {  
	print("There's Waldo!")
  } else {  
	print("Where's Waldo?")
}
// Prints: There's Waldo!
```

****Iterating Over a Set****

A `for`-`in` loop can be used to iterate over each item in a set.

```swift
var recipe: Set = ["Chocolate chips", "Eggs", "Flour", "Sugar"]
for ingredient in recipe {
  print ("Include \\(ingredient) in the recipe.")
}
```

****.isEmpty Property****

Use the built-in property `.isEmpty` to check if a set has no values contained in it.

`var emptySet = Set<String>() print(emptySet.isEmpty)  // Prints: true var populatedSet: Set = [1, 2, 3] print(populatedSet.isEmpty) // Prints: false`

****.count Property****

The property `.count` returns the number of elements contained within a set.

`var band: Set = ["Guitar", "Bass", "Drums", "Vocals"] print("There are \\(band.count) players in the band.")// Prints: There are 4 players in the band.`

****.intersection() Operation****

The `.intersection()` operation populates a new set of elements with the overlapping elements of two sets.

a intersect b

`var setA: Set = ["A", "B", "C", "D"]var setB: Set = ["C", "D", "E", "F"] var setC = setA.intersection(setB)print(setC)  // Prints: ["D", "C"]`

****.union() Operation****

The `.union()` operation populates a new set by taking all the values from two sets and combining them.

a U b

`var setA: Set = ["A", "B", "C", "D"]var setB: Set = ["C", "D", "E", "F"] var setC = setA.union(setB)print(setC) // Prints: ["B", "A", "D", "F", "C", "E"]`

****.symmetricDifference() Operation****

The `.symmetricDifference()` operation creates a new set with all the non-overlapping values between two sets.

a’ intersect b’

`var setA: Set = ["A", "B", "C", "D"]var setB: Set = ["C", "D", "E", "F"] var setC = setA.symmetricDifference(setB)print(setC) // Prints: ["B", "E", "F", "A"]`

****.subtracting() Operation****

The `.subtracting()` operation removes the values of one second set from another set and stores the remaining values in a new set.

a

`var setA: Set = ["A", "B", "C", "D"]var setB: Set = ["C", "D"] var setC = setA.subtracting(setB)print(setC) // Prints: ["B", "A"]`

## **Functions**

-   A function definition consists of a function name followed by optional parameters and a return type. If no return type is declared, it will be Void. -> Returns none. Only prints.

```swift
func washCar() -> Void {
  print("Soap")
  print("Scrub")
  print("Rinse")
  print("Dry")
}
```

-   The function body holds the function’s task.
-   A function will execute only when it is called.

```swift
washCar()
// Output: Soap \\n Scrub \\n Rinse \\n Dry
```

-   A `return` keyword is used to return a value from a function.

### Returning

-   A function’s return type is specified in the function definition followed by an `>`. If a function does not return any values, it’s return type is `Void` or the arrow and type are omitted entirely.
-   A `return` statement can be omitted if the function consists of only one expression to return. This is called an _implicit return_.
-   A parameter is a placeholder for a real value passed into a function. A parameter must be enclosed within `()` of a function definition and must have a specific type.

### Parameters

-   An argument is a real value passed in for a parameter in the function call.
-   A function can accept multiple parameters separated by commas.
-   As many parameters as a function accepts, as many arguments or real values must be passed into the function when it is called.

```swift
func convertFracToDec(numerator: Double, denominator: Double) -> Double {
  return numerator / denominator
} 
 
let decimal = convertFracToDec(numerator: 1.0, denominator: 2.0) 
print(decimal) // Prints:  0.5
```

-   A function can return multiple values in the form of a tuple.

### Parameter Types

-   Swift offers support for wide variety of parameter use cases within a function:
    -   **Default Parameter**: a parameter that sets a value to the parameter that will be used if an argument is omitted.
    -   **Variadic Parameter**: a parameter that accepts zero or more values of the parameter’s type.
    -   **In-out Parameter**: a parameter whose value is passed into a function and modified within the body.

![](Screenshot%202022-06-24%20at%201.46.53%20PM.png)
## Structures (not Classes)

-   Structures are a means of modeling real life objects programmatically.
-   How to create a structure using `struct` ?

```swift
struct Apple {
	var price = Double
	var sale = Bool
	init(Double: price, Bool: sale)
		price = self.price
		sale = self.sale
	func exampleMethod -> String {
		print("Hello World")
	}
```

-   To model individual objects, we can create instances of `structs` which may have unique property values.

-   We can access and edit properties using dot notation.
    
-   If we know that most of our instances will have a specific property value, we can assign default property values inside the struct.
    
-   Using the `init()` method allows us to provide an instance with specific values for the structures given properties.
    
-   Even without an `init()` method, structs come with a default memberwise initialization method that can assign values to declared properties inside a struct.
    
-   Structures can have methods that are functions accessible to their instances.
    
-   Structures are value types, any copied struct that has its properties altered will not affect the original structure from which it was copied.
    

**Diff between classes and structures in Swift**

-   Inheritance enables one class to inherit the characteristics of another class.
-   Classes are reference types while structures are value types.

## Classes
Also can be applied in [Python](Python%20Notes.md)
### Class Inheritance

To create a class that inherits from another, we put the name of the class we’re inheriting from (superclass) after the name of the class we’re creating (subclass), like so:

```
class Subclass: Superclass {

}
```

The subclass will inherit the properties and functions and literally everything from the superclass. However, subclasses can have special properties that are more special that superclasses do not have.

### Overriding Methods

-   A subclass can provide its own custom implementation of a property or method that is inherited from a superclass. This is known as _overriding_.
    -   To override a method, we can redeclare it in the subclass and add the `override` keyword to let the compiler know that we aren’t accidentally creating a method with the same name as the one in the parent class.

```
override func name(parameter) {

}
```

-   A class is another means of modeling real-life objects programmatically.
-   How to create a class using the `class` keyword.

```swift

// Using data types:
class Student {
  var name: String
  var year: Int
  var gpa: Double
  var honors: Bool
	init(
}

// Using default property values:
class Student {
  var name = ""
  var year = 0
  var gpa = 0.0
  var honors = false
}
```

-   Using the `init()` method allows us to provide an instance with specific values right off-the-bat during the creation of an instance.

```swift
class Fruit {
  var hasSeeds = true 
  var color: String
 
  init(color: String) {
    self.color = color
  }
}
 
let apple = Fruit(color: "red")
```

-   A class can inherit another class’s properties and methods.
    
-   When using inheritance, the subclass can use the `override` keyword to redeclare a method with the same name.
    
-   Classes are reference types, any copied class that has its properties altered will affect the original class from which it was copied.
    

#### In Swift, a **`struct`** is a value type that can hold a collection of related properties and methods. A **`class`** is a reference type that can also hold a collection of related properties and methods. An **`object`** is an instance of a class, and it contains the actual data and behavior of the class.

* The main difference between **`struct`** and **`class`** is that **`struct`** is a value type and **`class`** is a reference type. This means that when a **`struct`** is assigned to a variable or passed as an argument to a function, a copy of the **`struct`** is created and used, whereas a **`class`** is passed by reference, so the original **`class`** is used.

* In general, **`struct`** is used for simple data types that do not require inheritance or complex behavior, while **`class`** is used for more complex data types that may need to inherit from other classes or be part of a hierarchy of objects.

* Here is an example of how **`struct`**, **`class`**, and **`object`** are used in Swift:

```
struct Point { var x: Double vary: Double } class Shape { varcolor: String init(color: String) { self.color = color }func draw() { print("Drawing a shape with color: \\(color)") } }let point1 = Point(x: 1.0, y: 2.0) let point2 = point1 point2.x = 3.0 print(point1.x) // 1.0 print(point2.x)  // 3.0let shape1 = Shape(color: "red")let shape2 = shape1 shape2.color = "blue" print(shape1.color)  // blue print(shape2.color)  // blue

```

In this example, the **`Point`** struct is a value type that holds the coordinates of a point. The **`Shape`** class is a reference type that holds the color of a shape and has a **`draw`** method. When a **`Point`** instance is assigned to another variable, a copy of the **`Point`** is created and used, so changing the value of the copied **`Point`** does not affect the original **`Point`**. When a **`Shape`** instance is assigned to another variable, a reference to the **`Shape`** is used, so changing the value of the copied **`Shape`** also changes the value of the original **`Shape`**.


### In reference to my previous question, is an object also an instance of a struct?

In Swift, an **`object`** is an instance of a **`class`**, not a **`struct`**. A **`struct`** is a value type, whereas a **`class`** is a reference type, so the two are not interchangeable.

An instance of a **`struct`** is created using the struct's name and the initializer syntax, for example:

```

let point = Point(x: 1.0, y: 2.0)

```

An instance of a **`class`** is created using the **`class`** keyword and the initializer syntax, for example:

```

let shape = Shape(color: "red")

```

In both cases, the resulting value is an instance of the specified type. However, the instance of a **`struct`** is a value type, while the instance of a **`class`** is a reference type. This means that the **`struct`** instance is a copy of the original **`struct`**, while the **`class`** instance is a reference to the original **`class`**.

### Explain what are mutating functions in the context of Swift

* In the context of programming languages, a mutating function is a function that can modify the state of an object in place, rather than creating and returning a new object. In other words, a mutating function can change the value of a variable or object directly, without the need to create a copy of the object.

* In Swift, a mutating function is a function that is marked with the **`mutating`** keyword. This keyword indicates that the function can modify the properties of the object it belongs to. For example, the following code defines a **`Person`** struct with a **`name`** property and a **`changeName`** mutating function that can be used to change the value of the **`name`** property:

```
Copy code
struct Person { var name: Stringmutating funcchangeName(newName: String) { name = newName } }

```

In Swift, mutating functions are useful for modifying the state of an object in place, without the need to create a new object. However, they can also cause confusion and make code harder to reason about, so they should be used with care.