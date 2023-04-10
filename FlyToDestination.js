//  Explanation 
// The problem can be solved using a greedy algorithm with linear time complexity. The basic idea is to traverse the array of fuel units and keep track of the fuel available at each airport.

// We start from the first airport and hire a plane with the fuel available at the starting airport. Then, we move to the next airport using 1 unit of fuel. If we have enough fuel to reach the next airport, we simply use the fuel and continue to the next airport. Otherwise, we need to hire a new plane that has enough fuel to reach the next airport. We repeat this process until we reach the last airport.

// To minimize the number of planes required, we always choose the plane with the maximum fuel available from any previous airport. This ensures that we can reach as far as possible without having to hire a new plane. If we cannot reach the next airport even with the maximum fuel available, then we cannot reach the last airport and return -1.


// Code  in JavaScript
function minPlanesRequired(arr) {
    const n = arr.length;
    let fuel = arr[0]; // initialize fuel with the fuel at the starting airport
    let planes = 1; // initialize number of planes required with 1
    let maxFuel = arr[0]; // initialize the maximum fuel available with the fuel at the starting airport
  
    for (let i = 1; i < n; i++) {
      fuel--; // use 1 unit of fuel to move to the next airport
      if (fuel < 0) {
        // if there is not enough fuel to reach the next airport, we need to hire a new plane
        if (maxFuel === 0) {
          // if we cannot refuel from any previous airport, we cannot reach the last airport
          return -1;
        }
        fuel = maxFuel - 1; // refill fuel with the maximum fuel available from any previous airport, minus the distance to the next airport
        planes++; // hire a new plane
      }
      maxFuel = Math.max(maxFuel, arr[i]); // update the maximum fuel available
    }
    
    return planes;
  }
  
  const arr1 = [2, 1, 2, 3, 1];
  console.log(minPlanesRequired(arr1));
  
  const arr2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
  console.log(minPlanesRequired(arr2));
  
