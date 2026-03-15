// Time Complexity : The rate at which the time, required to run a code, changes with respect to the input size, is considered the time complexi

// O(n)     ->>>        Upper Bound
// theta(n) ->>>        Average time complexity
// omega(n) ->>>>      Lower Bound

// Constant time       ->   O(1)
// Linear time         ->   O(n)
// Logarithmic time    ->   O(log(n))
// Quadratic time      ->   O(n^2)
// Cubic time          ->   O(n^3)


//     most of the modern machine can perform 10^8 operations per second;

//     1 < n < 10^6;
//     1 < n < 10^8;

//     constraints        Max time complexity you can use
//     <100            -> O(n^4);
//     <400            -> O(n^3);
//     <2000           -> O(n^2 * log(n));
//     <10^4           -> O(n^2);
//     <10^6           -> O(n*log(n));
//     <10^8           -> O(n),O(log(n));

// Space complexity : 
// int arr[5] ->  O(1);
// int arr[n] ->  O(n);


//     Comparison-Based Sorting Algorithms

// Bubble Sort
// Worst-case Time Complexity: 
// 𝑂(𝑛^2)
// Space Complexity: 
// O(1)

// Selection Sort
// Worst-case Time Complexity: 
// 𝑂(n^2)
// Space Complexity: 
// O(1)

// Insertion Sort
// Worst-case Time Complexity: 
// O(n^2)
// Space Complexity: 
// O(1)

// Merge Sort
// Worst-case Time Complexity: 
// O(nlogn)
// Space Complexity: 
// O(n)

// Quick Sort
// Worst-case Time Complexity: 
// O(n^2) {when array is sorted in dec and choose first or last point}
// (can be improved to 
// 𝑂(𝑛log𝑛) with good pivot strategy chose median)

// Space Complexity: 
// O(n) (worst case due to recursion stack)
// O(logn) (for in-place implementations)

// Heap Sort
// Worst-case Time Complexity: 
// O(nlogn)
// Space Complexity: 
// O(1)
// }



//     Merge sort vs Quick sort

//     Merge Sort: Best for stability, predictable performance, and external sorting.
//     Quick Sort: Best for in-memory sorting with average-case performance and limited additional space requirements.

// For general-purpose in-memory sorting, Quick Sort is often preferred due to its efficiency and lower space requirements. However, for applications requiring stability or predictable performance, Merge Sort is the better option.
// }


//     BFS AND DFS 

//     BFS -> traverse the tree level wise
//            (always provide the shallowest path)
//     DFS -> {Faster and require less memory compared to dfs;}
//            traverse the tree depth wise
//            does not guarantee shallowest path
//            backtracking is implemented and sometime get trapped in infinite loop;

//     Time complexity of both bfs and dfs is O(n+e) 
//     where n -> no. of nodes and e -> no. of edges

//     Space complexity of both bfs and dfs is O(n)

//     Topological sorting is used for Directed Acyclic Graphs (DAGs) to order vertices linearly such that for every directed edge 
//     u→v, vertex u comes before vertex v in the ordering.



// | Container            | Ordered | Duplicates | **Build Time (n inserts)** | **Search All (n finds)** | **Worst-Case Build** | **Traversal** | **Space** |
// | -------------------- | ------- | ---------- | -------------------------- | ------------------------ | -------------------- | ------------- | --------- |
// | `set`                | ✅       | ❌          | **O(n log n)**             | **O(n log n)**           | O(n log n)           | O(n)          | O(n)      |
// | `multiset`           | ✅       | ✅          | **O(n log n)**             | **O(n log n)**           | O(n log n)           | O(n)          | O(n)      |
// | `map`                | ✅       | ❌ (keys)   | **O(n log n)**             | **O(n log n)**           | O(n log n)           | O(n)          | O(n)      |
// | `multimap`           | ✅       | ✅          | **O(n log n)**             | **O(n log n)**           | O(n log n)           | O(n)          | O(n)      |
// | `unordered_set`      | ❌       | ❌          | **O(n)** (avg)             | **O(n)** (avg)           | **O(n²)**            | O(n)          | O(n)      |
// | `unordered_multiset` | ❌       | ✅          | **O(n)** (avg)             | **O(n)** (avg)           | **O(n²)**            | O(n)          | O(n)      |
// | `unordered_map`      | ❌       | ❌ (keys)   | **O(n)** (avg)             | **O(n)** (avg)           | **O(n²)**            | O(n)          | O(n)      |
// | `unordered_multimap` | ❌       | ✅          | **O(n)** (avg)             | **O(n)** (avg)           | **O(n²)**            | O(n)          | O(n)      |


// Built-in sort()
// sort(arr.begin(), arr.end());

// Time Complexity

// O(n log n) (introsort: quicksort + heapsort + insertion sort)

// Space Complexity

// O(log n) (recursion stack, in-place)