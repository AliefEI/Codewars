/*You have a cuboid with dimensions x,y,z ∈ ℕ. A subcuboid of this cuboid has dimensions length, width, height ∈ ℕ where 1≤length≤x, 1≤width≤y, 1≤height≤z. If two subcuboids have the same length, width, and height, but they are at different positions within the cuboid, they are distinct. Find the total number of subcuboids for the given cuboid.

Examples
See sample tests and the image below

27 subcuboids for a 2×2×2 cuboid

Parameter -- x,y,z
return -- total num of cubes
examples -- 
pseudocode --

*/
function subcuboids(x, y, z) {
  const s = n => n*(n+1n)/2n|0n;
  return s(x)*s(y)*s(z);
}
