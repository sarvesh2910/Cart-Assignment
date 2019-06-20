const PRODUCT_NAMES = {
  'Burrard Mid-Century Modern Sofa Gray': 139,
  'Roland Mid-Century Accent Chair Dark Gray': 22,
  'Levo Modern Lounge Chair Brown Leather': 85,
  'Kopos Coffee Table Light Gray': 28,
  'Equa Coffee Table Black': 31,
  'Block Party Lounge Ottoman Dark Gray': 26,
  'Fuzz Stool White': 11,
  'Pamlico Manual Glider Recliner Gray': 41,
  'Renmen TV Stand Walnut': 37,
  'Natural Ash Cleo Credenza, 70"': 97,
  'Vladimir Rug Blue Green': 26,
  'Lustre Rug 8 X 10 Sage Green': 61,
};
const generator = (length) => {
  let Max = Object.keys(PRODUCT_NAMES).length;

  let items = [];
  for(let i =0;i<length;i++){
    let number = Math.floor(Math.random() * (Max + 1))
    // items.push(PRODUCT_NAMES.);
  }
  return items

};

export default generator;