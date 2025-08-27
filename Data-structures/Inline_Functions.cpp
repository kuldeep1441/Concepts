// Inline functions in C++ are functions for which the compiler attempts to expand the function's code in place where it is called, rather than performing a regular function call. This eliminates the overhead associated with function calls, such as pushing arguments onto the stack and jumping to the function’s code.

// How to Define an Inline Function:
// You can define an inline function using the inline keyword before the function declaration or definition.

// Example:

// cpp
// Copy code
// inline int add(int a, int b)
// {
//     return a + b;
// }

// int main()
// {
//     int result = add(5, 3); // The compiler replaces this call with the code '5 + 3'
//     return 0;
// }


// can't use static variables in inline function