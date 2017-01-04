/* Sources of information for elements */
// Define elements included
var elementsIncluded = [{
  symbol : 'H',
  name : 'Hydrogen',
  info : {
    group : 1,
    period : 1,
    atomicNumber : 1,
    atomicWeight : 1.008,
    atomicRadius : 25,
    state : 'Gas',
    meltingPoint : '13.99 K',
    boilingPoint : '20.27 K',
    isotopes : '<sup>1</sup>H, <sup>2</sup>H',
    electronConfig : '1s<sup>1</sup>',
    oxidationState : '+1',
    nameHistory : 'Greek <em>hydro</em> and <em>genes</em> meaning water forming.',
    link : 'http://www.rsc.org/periodic-table/element/1/hydrogen'
  },
  position: {x:-16,y:4},
  layout: [
    [{x:0,y:0,z:0}],
    [],
    [{'1s':1}],
  ]
},{
  symbol : 'He',
  name : 'Helium',
  info : {
    group : '18 (noble gas)',
    period: 1,
    atomicNumber : 2,
    atomicWeight : 4.003,
    atomicRadius : 13,
    state : 'Gas',
    meltingPoint : 'Unknown',
    boilingPoint : '4.22 K',
    isotopes : '<sup>4</sup>He',
    electronConfig : '1s<sup>2</sup>',
    oxidationState : '-',
    nameHistory : 'Greek, <em>helios</em> meaning sun.',
    link : 'http://www.rsc.org/periodic-table/element/2/helium'
  },
  position: {x:18,y:4},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0}],
    [{'1s':2}]
  ]
},{
  symbol : 'Li',
  name : 'Lithium',
  info : {
    group : '1 (alkali)',
    period : 2,
    atomicNumber : 3,
    atomicWeight : 6.94,
    atomicRadius : 145,
    state : 'Solid',
    meltingPoint : '453.6 K',
    boilingPoint : '1615 K',
    isotopes : '<sup>7</sup>Li',
    electronConfig : '2s<sup>1</sup>',
    oxidationState : '+1',
    nameHistory : 'Greek <em>lithos</em> meaning stone.',
    link : 'http://www.rsc.org/periodic-table/element/3/lithium'
  },
  position: {x:-16,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5}],
    [{'1s':2,'2p':1}]
  ]
},{
  symbol : 'Be',
  name : 'Beryllium',
  info : {
    group : '2 (alkali earth)',
    period : 2,
    atomicNumber : 4,
    atomicWeight : 9.012,
    atomicRadius : 105,
    state : 'Solid',
    meltingPoint : '1560 K',
    boilingPoint : '2471 K',
    isotopes : '<sup>9</sup>Be',
    electronConfig : '2s<sup>2</sup>',
    oxidationState : '+2',
    nameHistory : 'Greek name for beryl, <em>beryllo</em>.',
    link : 'http://www.rsc.org/periodic-table/element/4/beryllium'
  },
  position: {x:-14,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}],
    [{'1s':2,'2p':2}]
  ]
},{
  symbol : 'B',
  name : 'Boron',
  info : {
    group : 13,
    period : 2,
    atomicNumber : 5,
    atomicWeight : 10.81,
    atomicRadius : 85,
    state : 'Solid',
    meltingPoint : '2350 K',
    boilingPoint : '4273 K',
    isotopes : '<sup>11</sup>B',
    electronConfig : '2s<sup>2</sup>2p<sup>1</sup>',
    oxidationState : '+2',
    nameHistory : 'Arabic <em>buraq</em>, meaning borax.',
    link : 'http://www.rsc.org/periodic-table/element/5/boron'
  },
  position: {x:8,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5}],
    [{'1s':2,'2p':3}]
  ]
},{
  symbol : 'C',
  name : 'Carbon',
  info : {
    group : 14,
    period : 2,
    atomicNumber : 6,
    atomicWeight : 12.01,
    atomicRadius : 70,
    state : 'Solid',
    meltingPoint : '2350 K',
    boilingPoint : '4273 K',
    isotopes : '<sup>12</sup>C,<sup>13</sup>C,<sup>14</sup>C',
    electronConfig : '2s<sup>2</sup>2p<sup>2</sup>',
    oxidationState : '<u>+4</u>,+2',
    nameHistory : 'Latin <em>carbo</em>, meaning charcoal.',
    link : 'http://www.rsc.org/periodic-table/element/6/carbon'
  },
  position: {x:10,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5}],
    [{'1s':2,'2p':4}]
  ]
},{
  symbol : 'N',
  name : 'Nitrogen',
  info : {
    group : 15,
    period : 2,
    atomicNumber : 7,
    atomicWeight : 14.01,
    atomicRadius : 65,
    state : 'Gas',
    meltingPoint : '63.2 K',
    boilingPoint : '77.3 K',
    isotopes : '<sup>14</sup>N',
    electronConfig : '2s<sup>2</sup>2p<sup>3</sup>',
    oxidationState : '<u>&plusmn;3</u>,&plusmn;5,&plusmn;4,&plusmn;2',
    nameHistory : 'Greek <em>nitron</em> and <em>genes</em> meaning nitre forming.',
    link : 'http://www.rsc.org/periodic-table/element/7/nitrogen'
  },
  position: {x:12,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5}],
    [{'1s':2,'2p':5}]
  ]
},{
  symbol : 'O',
  name : 'Oxygen',
  info : {
    group : 16,
    period : 2,
    atomicNumber : 8,
    atomicWeight : 15.99,
    atomicRadius : 60,
    state : 'Gas',
    meltingPoint : '54.4 K',
    boilingPoint : '90.2 K',
    isotopes : '<sup>16</sup>O',
    electronConfig : '2s<sup>2</sup>2p<sup>4</sup>',
    oxidationState : '-2',
    nameHistory : 'Greek <em>oxy genes</em>, meaning acid forming.',
    link : 'http://www.rsc.org/periodic-table/element/8/oxygen'
  },
  position: {x:14,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75}],
    [{'1s':2,'2p':6}]
  ]
},{
  symbol : 'F',
  name : 'Fluorine',
  info : {
    group : '17 (halogen)',
    period : 2,
    atomicNumber : 9,
    atomicWeight : 18.99,
    atomicRadius : 50,
    state : 'Gas',
    meltingPoint : '53.5 K',
    boilingPoint : '85.0 K',
    isotopes : '<sup>19</sup>F',
    electronConfig : '2s<sup>2</sup>2p<sup>5</sup>',
    oxidationState : '-1',
    nameHistory : 'Latin <em>fluere</em>, meaning to flow.',
    link : 'http://www.rsc.org/periodic-table/element/9/fluorine'
  },
  position: {x:16,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75}],
    [{'1s':2,'2p':7}]
  ]
},{
  symbol : 'Ne',
  name : 'Neon',
  info : {
    group : '18 (noble gas)',
    period : 2,
    atomicNumber : 10,
    atomicWeight : 20.18,
    atomicRadius : 40,
    state : 'Gas',
    meltingPoint : '24.6 K',
    boilingPoint : '27.1 K',
    isotopes : '<sup>20</sup>Ne',
    electronConfig : '2s<sup>2</sup>2p<sup>6</sup>',
    oxidationState : '-',
    nameHistory : 'Greek <em>neos</em>, meaning new.',
    link : 'http://www.rsc.org/periodic-table/element/10/neon'
  },
  position: {x:18,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:0.75,y:0,z:0.75}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:-0.75,y:0,z:-0.75}],
    [{'1s':2,'2p':8}]
  ]
},{
  symbol : 'Na',
  name : 'Sodium',
  info : {
    group : '1 (alkali)',
    period : 3,
    atomicNumber : 11,
    atomicWeight : 22.99,
    atomicRadius : 180,
    state : 'Solid',
    meltingPoint : '370 K',
    boilingPoint : '1156 K',
    isotopes : '<sup>23</sup>Na',
    electronConfig : '3s<sup>1</sup>',
    oxidationState : '+1',
    nameHistory : 'From English <em>soda</em>.',
    link : 'http://www.rsc.org/periodic-table/element/11/sodium'
  },
  position: {x:-16,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:0.75,y:0,z:0.75},{x:0.75,y:0.75,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:-0.75,y:0,z:-0.75},{x:-0.75,y:-0.75,z:0}],
    [{'1s':2,'2p':8,'3p':1}]
  ]
},
{
  symbol : 'Mg',
  name : 'Magnesium',
  info : {
    group : '2 (alkali earth)',
    period : 3,
    atomicNumber : 12,
    atomicWeight : 24.3,
    atomicRadius : 150,
    state : 'Solid',
    meltingPoint : '923 K',
    boilingPoint : '1363 K',
    isotopes : '<sup>24</sup>Mg',
    electronConfig : '3s<sup>2</sup>',
    oxidationState : '+2',
    nameHistory : 'From Magnesia, a district in Greece.',
    link : 'http://www.rsc.org/periodic-table/element/12/magnesium'
  },
  position: {x:-14,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0}],
    [{'1s':2,'2p':8,'3p':2}]
  ]
},{
  symbol : 'Al',
  name : 'Aluminium',
  info : {
    group : '13',
    period : 3,
    atomicNumber : 13,
    atomicWeight : 26.98,
    atomicRadius : 125,
    state : 'Solid',
    meltingPoint : '933 K',
    boilingPoint : '2792 K',
    isotopes : '<sup>27</sup>Al',
    electronConfig : '3s<sup>2</sup>3p<sup>1</sup>',
    oxidationState : '+3',
    nameHistory : 'Latin <em>alumen</em>, meaning bitter salt.',
    link : 'http://www.rsc.org/periodic-table/element/13/aluminium'
  },
  position: {x:8,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0}],
    [{'1s':2,'2p':8,'3p':3}]
  ]
},{
  symbol : 'Si',
  name : 'Silicon',
  info : {
    group : '14',
    period : 3,
    atomicNumber : 14,
    atomicWeight : 26.98,
    atomicRadius : 110,
    state : 'Solid',
    meltingPoint : '1687 K',
    boilingPoint : '3538 K',
    isotopes : '<sup>28</sup>Si, <sup>30</sup>Si',
    electronConfig : '3s<sup>2</sup>3p<sup>2</sup>',
    oxidationState : '+4',
    nameHistory : 'Latin <em>silex</em> or <em>silicis</em>, meaning flint.',
    link : 'http://www.rsc.org/periodic-table/element/14/silicon'
  },
  position: {x:10,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}],
    [{'1s':2,'2p':8,'3p':4}]
  ]
},{
  symbol : 'P',
  name : 'Phosphorus',
  info : {
    group : '15',
    period : 3,
    atomicNumber : 15,
    atomicWeight : 30.97,
    atomicRadius : 100,
    state : 'Solid',
    meltingPoint : '317 K',
    boilingPoint : '553 K',
    isotopes : '<sup>31</sup>P',
    electronConfig : '3s<sup>2</sup>3p<sup>3</sup>',
    oxidationState : '&plusmn;3,&plusmn;4,<u>&plusmn;5</u>',
    nameHistory : 'From the Greek <em>phosphoros</em>, meaning bringer of light.',
    link : 'http://www.rsc.org/periodic-table/element/15/phosphorus'
  },
  position: {x:12,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0}],
    [{'1s':2,'2p':8,'3p':5}]
  ]
},{
  symbol : 'S',
  name : 'Sulfur',
  info : {
    group : '16',
    period : 3,
    atomicNumber : 16,
    atomicWeight : 32.06,
    atomicRadius : 100,
    state : 'Solid',
    meltingPoint : '388 K',
    boilingPoint : '717 K',
    isotopes : '<sup>32</sup>S',
    electronConfig : '3s<sup>2</sup>3p<sup>4</sup>',
    oxidationState : '&plusmn;2, &plusmn;4, <u>&plusmn;6</u>',
    nameHistory : 'Either from Sanskrit <em>sulvere</em>, or Latin <em>sulfurium</em>.',
    link : 'http://www.rsc.org/periodic-table/element/16/sulfur'
  },
  position: {x:14,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0}],
    [{'1s':2,'2p':8,'3p':6}]
  ]
},{
  symbol : 'Cl',
  name : 'Chlorine',
  info : {
    group : '17',
    period : 3,
    atomicNumber : 17,
    atomicWeight : 35.45,
    atomicRadius : 100,
    state : 'Gas',
    meltingPoint : '171 K',
    boilingPoint : '239 K',
    isotopes : '<sup>35</sup>Cl,<sup>37</sup>Cl',
    electronConfig : '3s<sup>2</sup>3p<sup>5</sup>',
    oxidationState : '<u>&plusmn;1</u>, &plusmn;3, &plusmn;5, &plusmn;7',
    nameHistory : 'Greek <em>chloros</em>, meaning greenish yellow.',
    link : 'http://www.rsc.org/periodic-table/element/17/chlorine'
  },
  position: {x:16,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1}],
    [{'1s':2,'2p':8,'3p':7}]
  ]
},{
  symbol : 'Ar',
  name : 'Argon',
  info : {
    group : '18 (noble gas)',
    period : 3,
    atomicNumber : 18,
    atomicWeight : 39.94,
    atomicRadius : 71,
    state : 'Gas',
    meltingPoint : '83.8 K',
    boilingPoint : '87.3 K',
    isotopes : '<sup>40</sup>Ar',
    electronConfig : '3s<sup>2</sup>3p<sup>6</sup>',
    oxidationState : '-',
    nameHistory : 'From the Greek, <em>argos</em>, meaning idle.',
    link : 'http://www.rsc.org/periodic-table/element/18/argon'
  },
  position: {x:18,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1}],
    [{'1s':2,'2p':8,'3p':8}]
  ]
},{
  symbol : 'K',
  name : 'Potassium',
  info : {
    group : '1 (alkali)',
    period : 4,
    atomicNumber : 19,
    atomicWeight : 39.10,
    atomicRadius : 220,
    state : 'Solid',
    meltingPoint : '336.7 K',
    boilingPoint : '1032 K',
    isotopes : '<sup>39</sup>K',
    electronConfig : '[Ar] 4s<sup>1</sup>',
    oxidationState : '+1',
    nameHistory : 'From English, <em>potash</em>, potassium salts.',
    link : 'http://www.rsc.org/periodic-table/element/19/potassium'
  },
  position: {x:18,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0}],
    [{'1s':2,'2p':8,'3p':8,'3d':1}]
  ]
},{
  symbol : 'Ca',
  name : 'Calcium',
  info : {
    group : '1 (alkali earth)',
    period : 4,
    atomicNumber : 20,
    atomicWeight : 40.08,
    atomicRadius : 180,
    state : 'Solid',
    meltingPoint : '1115 K',
    boilingPoint : '1757 K',
    isotopes : '<sup>40</sup>Ca',
    electronConfig : '[Ar] 4s<sup>2</sup>',
    oxidationState : '+2',
    nameHistory : 'From Latin <em>calx</em>, meaning lime.',
    link : 'http://www.rsc.org/periodic-table/element/20/calcium'
  },
  position: {x:18,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1}],
    [{'1s':2,'2p':8,'3p':8,'3d':2}]
  ]
},{
  symbol : 'Sc',
  name : 'Scandium',
  info : {
    group : '3',
    period : 4,
    atomicNumber : 21,
    atomicWeight : 44.96,
    atomicRadius : 160,
    state : 'Solid',
    meltingPoint : '1814 K',
    boilingPoint : '3109 K',
    isotopes : '<sup>45</sup>Sc',
    electronConfig : '[Ar] 3d<sup>1</sup>4s<sup>2</sup>',
    oxidationState : '+3',
    nameHistory : 'From Latin <em>scandia</em>, meaning Scandinavia.',
    link : 'http://www.rsc.org/periodic-table/element/21/scandium'
  },
  position: {x:18,y:0},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1}],
    [{'1s':2,'2p':8,'3p':8,'3d':3}]
  ]
 },{
   symbol : 'Ti',
   name : 'Titanium',
   info : {
     group : '4',
     period : 4,
     atomicNumber : 22,
     atomicWeight : 47.87,
     atomicRadius : 140,
     state : 'Solid',
     meltingPoint : '1943 K',
     boilingPoint : '3560 K',
     isotopes : '<sup>48</sup>Ti',
     electronConfig : '[Ar] 3d<sup>2</sup>4s<sup>2</sup>',
     oxidationState : '+4',
     nameHistory : 'From Greek Titans, the sons of the Earth goddess.',
     link : 'http://www.rsc.org/periodic-table/element/22/titanium'
   },
   position: {x:18,y:0},
   layout: [
     [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0}],
     [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0}],
     [{'1s':2,'2p':8,'3p':8,'3d':4}]
   ]
  },{
    symbol : 'V',
    name : 'Vanadium',
    info : {
      group : '5',
      period : 4,
      atomicNumber : 23,
      atomicWeight : 50.94,
      atomicRadius : 135,
      state : 'Solid',
      meltingPoint : '2183 K',
      boilingPoint : '3680 K',
      isotopes : '<sup>51</sup>V',
      electronConfig : '[Ar] 3d<sup>3</sup>4s<sup>2</sup>',
      oxidationState : '+5.3',
      nameHistory : 'From Old Norse <em>vanadis</em>, for the Scandinavian goddess Freyja.',
      link : 'http://www.rsc.org/periodic-table/element/23/vanadium'
    },
    position: {x:18,y:0},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0}],
      [{'1s':2,'2p':8,'3p':8,'3d':5}]
    ]
 },{
   symbol : 'Cr',
   name : 'Chromium',
   info : {
     group : '6',
     period : 4,
     atomicNumber : 24,
     atomicWeight : 52.00,
     atomicRadius : 140,
     state : 'Solid',
     meltingPoint : '2180 K',
     boilingPoint : '2944 K',
     isotopes : '<sup>52</sup>Cr',
     electronConfig : '[Ar] 3d<sup>5</sup>4s<sup>1</sup>',
     oxidationState : '+6, <u>+3</u>, +2',
     nameHistory : 'From the Greek <em>chroma</em>, meaning color.',
     link : 'http://www.rsc.org/periodic-table/element/24/chromium'
   },
   position: {x:18,y:0},
   layout: [
     [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5}],
     [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:0,y:0,z:-1.5}],
     [{'1s':2,'2p':8,'3p':8,'3d':6}]
   ]
  },{
    symbol : 'Mn',
    name : 'Manganese',
    info : {
      group : '7',
      period : 4,
      atomicNumber : 25,
      atomicWeight : 54.94,
      atomicRadius : 140,
      state : 'Solid',
      meltingPoint : '1519 K',
      boilingPoint : '2334 K',
      isotopes : '<sup>55</sup>Mn',
      electronConfig : '[Ar] 3d<sup>5</sup>4s<sup>2</sup>',
      oxidationState : '+7, +6, +4, <u>+2</u>, +3',
      nameHistory : 'Either from Latin <em>magnes</em>, meaning magnet, or from <em>magnesia nitra</em>.',
      link : 'http://www.rsc.org/periodic-table/element/25/manganese'
    },
    position: {x:18,y:0},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:0,y:0,z:-1.5},{x:-1.5,y:-0.5,z:0}],
      [{'1s':2,'2p':8,'3p':8,'3d':7}]
    ]
 },{
   symbol : 'Fe',
   name : 'Iron',
   info : {
     group : '8',
     period : 4,
     atomicNumber : 26,
     atomicWeight : 55.85,
     atomicRadius : 140,
     state : 'Solid',
     meltingPoint : '1811 K',
     boilingPoint : '3134 K',
     isotopes : '<sup>56</sup>Fe',
     electronConfig : '[Ar] 3d<sup>6</sup>4s<sup>2</sup>',
     oxidationState : '+2, <u>+3</u>',
     nameHistory : 'From Anglo-Saxon <em>iren</em>.',
     link : 'http://www.rsc.org/periodic-table/element/26/iron'
   },
   position: {x:18,y:0},
   layout: [
     [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5}],
     [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5}],
     [{'1s':2,'2p':8,'3p':8,'3d':8}]
   ]
  },{
    symbol : 'Co',
    name : 'Cobalt',
    info : {
      group : '9',
      period : 4,
      atomicNumber : 27,
      atomicWeight : 58.69,
      atomicRadius : 135,
      state : 'Solid',
      meltingPoint : '1768 K',
      boilingPoint : '3200 K',
      isotopes : '<sup>59</sup>Co',
      electronConfig : '[Ar] 3d<sup>7</sup>4s<sup>2</sup>',
      oxidationState : '<u>+2</u>, +3',
      nameHistory : 'From German <em>kobald</em>, meaning goblin.',
      link : 'http://www.rsc.org/periodic-table/element/27/cobalt'
    },
    position: {x:18,y:0},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5}],
      [{'1s':2,'2p':8,'3p':8,'3d':9}]
    ]
 },{
   symbol : 'Ni',
   name : 'Nickel',
   info : {
     group : '10',
     period : 4,
     atomicNumber : 28,
     atomicWeight : 58.69,
     atomicRadius : 135,
     state : 'Solid',
     meltingPoint : '1728 K',
     boilingPoint : '3186 K',
     isotopes : '<sup>58</sup>Ni',
     electronConfig : '[Ar] 3d<sup>8</sup>4s<sup>2</sup>',
     oxidationState : '+2, <u>+3</u>',
     nameHistory : "From German <em>kupfernickel</em>, meaning devil's copper.",
     link : 'http://www.rsc.org/periodic-table/element/28/nickel'
   },
   position: {x:18,y:0},
   layout: [
     [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5}],
     [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5}],
     [{'1s':2,'2p':8,'3p':8,'3d':10}]
   ]
  },{
    symbol : 'Cu',
    name : 'Copper',
    info : {
      group : '11',
      period : 4,
      atomicNumber : 29,
      atomicWeight : 63.55,
      atomicRadius : 135,
      state : 'Solid',
      meltingPoint : '1358 K',
      boilingPoint : '2833 K',
      isotopes : '<sup>63</sup>Cu',
      electronConfig : '[Ar] 3d<sup>10</sup>4s<sup>1</sup>',
      oxidationState : '+1, <u>+2</u>',
      nameHistory : "From Latin <em>Cyprium aes</em>, meaning metal from Cyprus.",
      link : 'http://www.rsc.org/periodic-table/element/29/copper'
    },
    position: {x:18,y:0},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5},{x:1.5,y:0.5,z:1.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5},{x:-1.5,y:-0.5,z:-1.5}],
      [{'1s':2,'2p':8,'3p':8,'3d':11}]
    ]
 },{
   symbol : 'Zn',
   name : 'Zinc',
   info : {
     group : '12',
     period : 4,
     atomicNumber : 30,
     atomicWeight : 65.39,
     atomicRadius : 135,
     state : 'Solid',
     meltingPoint : '692 K',
     boilingPoint : '1180 K',
     isotopes : '<sup>64</sup>Zn',
     electronConfig : '[Ar] 3d<sup>10</sup>4s<sup>2</sup>',
     oxidationState : '<u>+2</u>',
     nameHistory : "From Persian <em>sing</em>, meaning stone.",
     link : 'http://www.rsc.org/periodic-table/element/30/zinc'
   },
   position: {x:18,y:0},
   layout: [
     [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5},{x:1.5,y:0.5,z:1.5},{x:1.5,y:1,z:1}],
     [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5},{x:-1.5,y:-0.5,z:-1.5},{x:-1.5,y:-1,z:-1}],
     [{'1s':2,'2p':8,'3p':8,'3d':12}]
   ]
  },{
    symbol : 'Ga',
    name : 'Gallium',
    info : {
      group : '13',
      period : 4,
      atomicNumber : 31,
      atomicWeight : 69.72,
      atomicRadius : 130,
      state : 'Solid',
      meltingPoint : '303 K',
      boilingPoint : '2502 K',
      isotopes : '<sup>69</sup>Ga',
      electronConfig : '[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup>',
      oxidationState : '<u>+3</u>',
      nameHistory : "From Latin <em>Gallia</em>, meaning France.",
      link : 'http://www.rsc.org/periodic-table/element/31/gallium'
    },
    position: {x:18,y:0},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5},{x:1.5,y:0.5,z:1.5},{x:1.5,y:1,z:1},{x:1,y:1.5,z:1}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5},{x:-1.5,y:-0.5,z:-1.5},{x:-1.5,y:-1,z:-1},{x:-1,y:-1.5,z:-1}],
      [{'1s':2,'2p':8,'3p':8,'3d':13}]
    ]
 },{
   symbol : 'Ge',
   name : 'Germanium',
   info : {
     group : '14',
     period : 4,
     atomicNumber : 32,
     atomicWeight : 72.61,
     atomicRadius : 125,
     state : 'Solid',
     meltingPoint : '1211 K',
     boilingPoint : '3106 K',
     isotopes : '<sup>73</sup>Ge, <sup>74</sup>Ge',
     electronConfig : '[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>2</sup>',
     oxidationState : '<u>+4</u>',
     nameHistory : "From Latin <em>Germania</em>, meaning Germany.",
     link : 'http://www.rsc.org/periodic-table/element/32/germanium'
   },
   position: {x:18,y:0},
   layout: [
     [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5},{x:1.5,y:0.5,z:1.5},{x:1.5,y:1,z:1},{x:1,y:1.5,z:1},{x:1,y:1,z:1.5}],
     [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5},{x:-1.5,y:-0.5,z:-1.5},{x:-1.5,y:-1,z:-1},{x:-1,y:-1.5,z:-1},{x:-1,y:-1,z:-1.5}],
     [{'1s':2,'2p':8,'3p':8,'3d':14}]
   ]
  },{
    symbol : 'As',
    name : 'Arsenic',
    info : {
      group : '15',
      period : 4,
      atomicNumber : 33,
      atomicWeight : 74.92,
      atomicRadius : 115,
      state : 'Solid',
      meltingPoint : '889 K',
      boilingPoint : '889 K',
      isotopes : '<sup>75</sup>As',
      electronConfig : '[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>',
      oxidationState : '<u>&plusmn;3</u>, &plusmn;5',
      nameHistory : "From Greek <em>arsenikon</em>, meaning yellow pigment.",
      link : 'http://www.rsc.org/periodic-table/element/33/arsenic'
    },
    position: {x:18,y:0},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5},{x:1.5,y:0.5,z:1.5},{x:1.5,y:1,z:1},{x:1,y:1.5,z:1},{x:1,y:1,z:1.5},{x:1,y:1,z:1.5},{x:-1.5,y:0,z:-0.5},],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5},{x:-1.5,y:-0.5,z:-1.5},{x:-1.5,y:-1,z:-1},{x:-1,y:-1.5,z:-1},{x:-1,y:-1,z:-1.5},{x:-1,y:-1,z:-1.5},{x:1.5,y:-0,z:0.5},],
      [{'1s':2,'2p':8,'3p':8,'3d':15}]
    ]
 },{
   symbol : 'Se',
   name : 'Selenium',
   info : {
     group : '16',
     period : 4,
     atomicNumber : 34,
     atomicWeight : 78.96,
     atomicRadius : 115,
     state : 'Solid',
     meltingPoint : '494 K',
     boilingPoint : '958 K',
     isotopes : '<sup>80</sup>Se',
     electronConfig : '[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup>',
     oxidationState : '&plusmn;2, <u>&plusmn;4</u>, &plusmn;6',
     nameHistory : "From Greek <em>selene</em>, meaning moon.",
     link : 'http://www.rsc.org/periodic-table/element/34/selenium'
   },
   position: {x:18,y:0},
   layout: [
     [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5},{x:1.5,y:0.5,z:1.5},{x:1.5,y:1,z:1},{x:1,y:1.5,z:1},{x:1,y:1,z:1.5},{x:1,y:1,z:1.5},{x:-1.5,y:0,z:-0.5},{x:1,y:0,z:-1}],
     [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5},{x:-1.5,y:-0.5,z:-1.5},{x:-1.5,y:-1,z:-1},{x:-1,y:-1.5,z:-1},{x:-1,y:-1,z:-1.5},{x:-1,y:-1,z:-1.5},{x:-1,y:-0,z:1},],
     [{'1s':2,'2p':8,'3p':8,'3d':16}]
   ]
  },{
    symbol : 'Br',
    name : 'Bromine',
    info : {
      group : '17 (halogen)',
      period : 4,
      atomicNumber : 35,
      atomicWeight : 79.9,
      atomicRadius : 115,
      state : 'Liquid',
      meltingPoint : '266 K',
      boilingPoint : '332 K',
      isotopes : '<sup>79</sup>Br',
      electronConfig : '[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup>',
      oxidationState : '<u>&plusmn;1</u>, &plusmn;5',
      nameHistory : "From Greek <em>bromos</em>, meaning stench.",
      link : 'http://www.rsc.org/periodic-table/element/35/bromine'
    },
    position: {x:18,y:0},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:1,y:0,z:1},{x:1,y:1,z:0},{x:0,y:1,z:1},{x:1,y:1,z:1},{x:1.5,y:0,z:0},{x:0,y:1.5,z:0},{x:0,y:0,z:1.5},{x:1.5,y:0.5,z:0},{x:1.5,y:0.5,z:0.5},{x:0.5,y:1.5,z:0.5},{x:0.5,y:0.5,z:1.5},{x:1.5,y:0.5,z:1.5},{x:1.5,y:1,z:1},{x:1,y:1.5,z:1},{x:1,y:1,z:1.5},{x:1,y:1,z:1.5},{x:-1.5,y:0,z:-0.5},{x:1,y:0,z:-1},{x:1.5,y:0,z:-1}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1},{x:-1,y:0,z:0},{x:0,y:-1,z:0},{x:0,y:0,z:-1},{x:-1,y:0,z:-1},{x:-1,y:-1,z:0},{x:0,y:-1,z:-1},{x:-1,y:-1,z:-1},{x:-1.5,y:0,z:0},{x:0,y:-1.5,z:0},{x:-1.5,y:-0.5,z:0},{x:-1.5,y:-0.5,z:-0.5},{x:-0.5,y:-1.5,z:-0.5},{x:-0.5,y:-0.5,z:-1.5},{x:-1.5,y:-0.5,z:-1.5},{x:-1.5,y:-1,z:-1},{x:-1,y:-1.5,z:-1},{x:-1,y:-1,z:-1.5},{x:-1,y:-1,z:-1.5},{x:-1,y:-0,z:1},{x:-1.5,y:-0,z:1}],
      [{'1s':2,'2p':8,'3p':8,'3d':16}]
    ]
   },
];
