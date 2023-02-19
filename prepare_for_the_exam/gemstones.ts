function gemstones(array: string[]): number {
  let joined: string = array.join(" ");
  let uniqueLetters = [...new Set(joined)];
  
  let result: string[] = uniqueLetters.filter((letter) => array.every((rock) => rock.includes(letter)))
  return result.length;
};
