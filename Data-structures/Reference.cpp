In C++, a reference is an alias or an alternative name for an existing variable. Once a reference is initialized to a variable, it becomes an alternative name for that variable, meaning any operation on the reference is directly applied to the original variable.

Syntax for Declaring a Reference:
A reference is declared using the & symbol:

cpp
Copy code
int a = 10;
int &ref = a; // 'ref' is a reference to variable 'a'