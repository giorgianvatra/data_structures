// Given two crystal balls that will break if dropped from high enough
//distance, detemine the exact spot in which it will break in the most
//optimized way.

export default function two_crystal_balls(breaks: boolean[]): number {
  const jump_amount = Math.floor(Math.sqrt(breaks.length));
  let i = jump_amount;
  for (; i < breaks.length; i += jump_amount) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jump_amount;

  for (let j = 0; j < jump_amount && i < breaks.length; j++, i++) {
    if (jump_amount[j]) {
        return i; 
    }
  }

  return -1; 
}
