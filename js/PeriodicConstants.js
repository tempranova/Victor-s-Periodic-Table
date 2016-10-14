/* Sources of information for elements */
// Define elements included
var elementsIncluded = [
  { symbol : 'H', name : 'Hydrogen', position: {x:-16,y:4} },
  { symbol : 'He', name : 'Helium', position: {x:18,y:4} },

  { symbol : 'Li', name : 'Lithium', position: {x:-16,y:2} },
  { symbol : 'Be', name : 'Beryllium', position: {x:-14,y:2} },
  { symbol : 'B', name : 'Boron', position: {x:8,y:2} },
  { symbol : 'C', name : 'Carbon', position: {x:10,y:2} },
  { symbol : 'N', name : 'Nitrogen', position: {x:12,y:2} },
  { symbol : 'O', name : 'Oxygen', position: {x:14,y:2} },
  { symbol : 'F', name : 'Fluorine', position: {x:16,y:2} },
  { symbol : 'Ne', name : 'Neon', position: {x:18,y:2} },

  { symbol : 'Na', name : 'Sodium', position: {x:-16,y:0} },
  { symbol : 'Mg', name : 'Magnesium', position: {x:-14,y:0} },
  { symbol : 'Al', name : 'Aluminium', position: {x:8,y:0} },
  { symbol : 'Si', name : 'Silicon', position: {x:10,y:0} },
  { symbol : 'P', name : 'Phosphorus', position: {x:12,y:0} },
  { symbol : 'S', name : 'Sulfur', position: {x:14,y:0} },
  { symbol : 'Cl', name : 'Chlorine', position: {x:16,y:0} },
  { symbol : 'Ar', name : 'Argon', position: {x:18,y:0} },

  { symbol : 'K', name : 'Potassium', position: {x:-16,y:-2} },
  { symbol : 'Ca', name : 'Calcium', position: {x:-14,y:-2} },
  { symbol : 'Sc', name : 'Scandium', position: {x:-12,y:-2} },
  { symbol : 'Ti', name : 'Titanium', position: {x:-10,y:-2} },
  { symbol : 'V', name : 'Vanadium', position: {x:-8,y:-2} },
  { symbol : 'Cr', name : 'Chromium', position: {x:-6,y:-2} },
  { symbol : 'Mn', name : 'Manganese', position: {x:-4,y:-2} },
  { symbol : 'Fe', name : 'Iron', position: {x:-2,y:-2} },
  { symbol : 'Co', name : 'Cobalt', position: {x:0,y:-2} },
  { symbol : 'Ni', name : 'Nickel', position: {x:2,y:-2} },
  { symbol : 'Cu', name : 'Copper', position: {x:4,y:-2} },
  { symbol : 'Zn', name : 'Zinc', position: {x:6,y:-2} },
  { symbol : 'Ga', name : 'Gallium', position: {x:8,y:-2} },
  { symbol : 'Ge', name : 'Germanium', position: {x:10,y:-2} },
  { symbol : 'As', name : 'Arsenic', position: {x:12,y:-2} },
  { symbol : 'Se', name : 'Selenium', position: {x:14,y:-2} },
  { symbol : 'Br', name : 'Bromine', position: {x:16,y:-2} },
  { symbol : 'Kr', name : 'Krypton', position: {x:18,y:-2} }
];

// List of elemental x,y,z points
var listOfElementLayouts = {
  hydrogen : [
    [{x:0,y:0,z:0}],
    [],
    [{'1s':1}],
  ],
  deuterium : [
    [{x:0.5,y:0,z:0}],
    [{x:-0.5,y:0,z:0}],
    [{'1s':1}]
  ],
  helium : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0}],
    [{'1s':2}]
  ],
  lithium : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5}],
    [{'1s':2,'2s':1}]
  ],
  beryllium : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}],
    [{'1s':2,'2s':2}]
  ],
  boron : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5}],
    [{'1s':2,'2s':2,'3p':1}]
  ],
  carbon : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5}],
    [{'1s':2,'2s':2,'3p':2}]
  ],
  nitrogen : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5}],
    [{'1s':2,'2s':2,'3p':3}]
  ],
  oxygen : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75}],
    [{'1s':2,'2s':2,'3p':4}]
  ],
  fluorine : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75}],
    [{'1s':2,'2s':2,'3p':5}]
  ],
  neon : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:0.75,y:0,z:0.75}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:-0.75,y:0,z:-0.75}],
    [{'1s':2,'2s':2,'3p':6}]
  ],
  sodium : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:0.75,y:0,z:0.75},{x:0.75,y:0.75,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:-0.75,y:0,z:-0.75},{x:-0.75,y:-0.75,z:0}],
    [{'1s':2,'2s':2,'3p':6}]
  ],
  magnesium : [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0}],
    [{'1s':2,'2s':2,'3p':6}]
  ],
};
