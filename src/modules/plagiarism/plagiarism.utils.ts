import * as snowball from 'snowball-stemmers';
import axios from 'axios';

export const json = {
  english: [
    '',
    'a',
    'about',
    'above',
    'after',
    'again',
    'against',
    'ain',
    'all',
    'am',
    'an',
    'and',
    'any',
    'are',
    'aren',
    'arent',
    'as',
    'at',
    'be',
    'because',
    'been',
    'before',
    'being',
    'below',
    'between',
    'both',
    'but',
    'by',
    'can',
    'couldn',
    'couldnt',
    'd',
    'did',
    'didn',
    'didnt',
    'do',
    'does',
    'doesn',
    'doesnt',
    'doing',
    'don',
    'dont',
    'down',
    'during',
    'each',
    'few',
    'for',
    'from',
    'further',
    'had',
    'hadn',
    'hadnt',
    'has',
    'hasn',
    'hasnt',
    'have',
    'haven',
    'havent',
    'having',
    'he',
    'her',
    'here',
    'hers',
    'herself',
    'him',
    'himself',
    'his',
    'how',
    'i',
    'if',
    'in',
    'into',
    'is',
    'isn',
    'isnt',
    'it',
    'its',
    'its',
    'itself',
    'just',
    'll',
    'm',
    'ma',
    'me',
    'mightn',
    'mightnt',
    'more',
    'most',
    'mustn',
    'mustnt',
    'my',
    'myself',
    'needn',
    'neednt',
    'no',
    'nor',
    'not',
    'now',
    'o',
    'of',
    'off',
    'on',
    'once',
    'only',
    'or',
    'other',
    'our',
    'ours',
    'ourselves',
    'out',
    'over',
    'own',
    're',
    's',
    'same',
    'shan',
    'shant',
    'she',
    'shes',
    'should',
    'shouldve',
    'shouldn',
    'shouldnt',
    'so',
    'some',
    'such',
    't',
    'than',
    'that',
    'thatll',
    'the',
    'their',
    'theirs',
    'them',
    'themselves',
    'then',
    'there',
    'these',
    'they',
    'this',
    'those',
    'through',
    'to',
    'too',
    'under',
    'until',
    'up',
    've',
    'very',
    'was',
    'wasn',
    'wasnt',
    'we',
    'were',
    'weren',
    'werent',
    'what',
    'when',
    'where',
    'which',
    'while',
    'who',
    'whom',
    'why',
    'will',
    'with',
    'won',
    'wont',
    'wouldn',
    'wouldnt',
    'y',
    'you',
    'youd',
    'youll',
    'youre',
    'youve',
    'your',
    'yours',
    'yourself',
    'yourselves',
    'could',
    'hed',
    'hell',
    'hes',
    'heres',
    'hows',
    'id',
    'ill',
    'im',
    'ive',
    'lets',
    'ought',
    'shed',
    'shell',
    'thats',
    'theres',
    'theyd',
    'theyll',
    'theyre',
    'theyve',
    'wed',
    'well',
    'were',
    'weve',
    'whats',
    'whens',
    'wheres',
    'whos',
    'whys',
    'would',
    'able',
    'abst',
    'accordance',
    'according',
    'accordingly',
    'across',
    'act',
    'actually',
    'added',
    'adj',
    'affected',
    'affecting',
    'affects',
    'afterwards',
    'ah',
    'almost',
    'alone',
    'along',
    'already',
    'also',
    'although',
    'always',
    'among',
    'amongst',
    'announce',
    'another',
    'anybody',
    'anyhow',
    'anymore',
    'anyone',
    'anything',
    'anyway',
    'anyways',
    'anywhere',
    'apparently',
    'approximately',
    'arent',
    'arise',
    'around',
    'aside',
    'ask',
    'asking',
    'auth',
    'available',
    'away',
    'awfully',
    'b',
    'back',
    'became',
    'become',
    'becomes',
    'becoming',
    'beforehand',
    'begin',
    'beginning',
    'beginnings',
    'begins',
    'behind',
    'believe',
    'beside',
    'besides',
    'beyond',
    'biol',
    'brief',
    'briefly',
    'c',
    'ca',
    'came',
    'cannot',
    'cant',
    'cause',
    'causes',
    'certain',
    'certainly',
    'co',
    'com',
    'come',
    'comes',
    'contain',
    'containing',
    'contains',
    'couldnt',
    'date',
    'different',
    'done',
    'downwards',
    'due',
    'e',
    'ed',
    'edu',
    'effect',
    'eg',
    'eight',
    'eighty',
    'either',
    'else',
    'elsewhere',
    'end',
    'ending',
    'enough',
    'especially',
    'et',
    'etc',
    'even',
    'ever',
    'every',
    'everybody',
    'everyone',
    'everything',
    'everywhere',
    'ex',
    'except',
    'f',
    'far',
    'ff',
    'fifth',
    'first',
    'five',
    'fix',
    'followed',
    'following',
    'follows',
    'former',
    'formerly',
    'forth',
    'found',
    'four',
    'furthermore',
    'g',
    'gave',
    'get',
    'gets',
    'getting',
    'give',
    'given',
    'gives',
    'giving',
    'go',
    'goes',
    'gone',
    'got',
    'gotten',
    'h',
    'happens',
    'hardly',
    'hed',
    'hence',
    'hereafter',
    'hereby',
    'herein',
    'heres',
    'hereupon',
    'hes',
    'hi',
    'hid',
    'hither',
    'home',
    'howbeit',
    'however',
    'hundred',
    'id',
    'ie',
    'im',
    'immediate',
    'immediately',
    'importance',
    'important',
    'inc',
    'indeed',
    'index',
    'information',
    'instead',
    'invention',
    'inward',
    'itd',
    'itll',
    'j',
    'k',
    'keep',
    'keeps',
    'kept',
    'kg',
    'km',
    'know',
    'known',
    'knows',
    'l',
    'largely',
    'last',
    'lately',
    'later',
    'latter',
    'latterly',
    'least',
    'less',
    'lest',
    'let',
    'lets',
    'like',
    'liked',
    'likely',
    'line',
    'little',
    'll',
    'look',
    'looking',
    'looks',
    'ltd',
    'made',
    'mainly',
    'make',
    'makes',
    'many',
    'may',
    'maybe',
    'mean',
    'means',
    'meantime',
    'meanwhile',
    'merely',
    'mg',
    'might',
    'million',
    'miss',
    'ml',
    'moreover',
    'mostly',
    'mr',
    'mrs',
    'much',
    'mug',
    'must',
    'n',
    'na',
    'name',
    'namely',
    'nay',
    'nd',
    'near',
    'nearly',
    'necessarily',
    'necessary',
    'need',
    'needs',
    'neither',
    'never',
    'nevertheless',
    'new',
    'next',
    'nine',
    'ninety',
    'nobody',
    'non',
    'none',
    'nonetheless',
    'noone',
    'normally',
    'nos',
    'noted',
    'nothing',
    'nowhere',
    'obtain',
    'obtained',
    'obviously',
    'often',
    'oh',
    'ok',
    'okay',
    'old',
    'omitted',
    'one',
    'ones',
    'onto',
    'ord',
    'others',
    'otherwise',
    'outside',
    'overall',
    'owing',
    'p',
    'page',
    'pages',
    'part',
    'particular',
    'particularly',
    'past',
    'per',
    'perhaps',
    'placed',
    'please',
    'plus',
    'poorly',
    'possible',
    'possibly',
    'potentially',
    'pp',
    'predominantly',
    'present',
    'previously',
    'primarily',
    'probably',
    'promptly',
    'proud',
    'provides',
    'put',
    'q',
    'que',
    'quickly',
    'quite',
    'qv',
    'r',
    'ran',
    'rather',
    'rd',
    'readily',
    'really',
    'recent',
    'recently',
    'ref',
    'refs',
    'regarding',
    'regardless',
    'regards',
    'related',
    'relatively',
    'research',
    'respectively',
    'resulted',
    'resulting',
    'results',
    'right',
    'run',
    'said',
    'saw',
    'say',
    'saying',
    'says',
    'sec',
    'section',
    'see',
    'seeing',
    'seem',
    'seemed',
    'seeming',
    'seems',
    'seen',
    'self',
    'selves',
    'sent',
    'seven',
    'several',
    'shall',
    'shed',
    'shes',
    'show',
    'showed',
    'shown',
    'showns',
    'shows',
    'significant',
    'significantly',
    'similar',
    'similarly',
    'since',
    'six',
    'slightly',
    'somebody',
    'somehow',
    'someone',
    'somethan',
    'something',
    'sometime',
    'sometimes',
    'somewhat',
    'somewhere',
    'soon',
    'sorry',
    'specifically',
    'specified',
    'specify',
    'specifying',
    'still',
    'stop',
    'strongly',
    'sub',
    'substantially',
    'successfully',
    'sufficiently',
    'suggest',
    'sup',
    'sure',
    'take',
    'taken',
    'taking',
    'tell',
    'tends',
    'th',
    'thank',
    'thanks',
    'thanx',
    'thats',
    'thatve',
    'thence',
    'thereafter',
    'thereby',
    'thered',
    'therefore',
    'therein',
    'therell',
    'thereof',
    'therere',
    'theres',
    'thereto',
    'thereupon',
    'thereve',
    'theyd',
    'theyre',
    'think',
    'thou',
    'though',
    'thoughh',
    'thousand',
    'throug',
    'throughout',
    'thru',
    'thus',
    'til',
    'tip',
    'together',
    'took',
    'toward',
    'towards',
    'tried',
    'tries',
    'truly',
    'try',
    'trying',
    'ts',
    'twice',
    'two',
    'u',
    'un',
    'unfortunately',
    'unless',
    'unlike',
    'unlikely',
    'unto',
    'upon',
    'ups',
    'us',
    'use',
    'used',
    'useful',
    'usefully',
    'usefulness',
    'uses',
    'using',
    'usually',
    'v',
    'value',
    'various',
    've',
    'via',
    'viz',
    'vol',
    'vols',
    'vs',
    'w',
    'want',
    'wants',
    'wasnt',
    'way',
    'wed',
    'welcome',
    'went',
    'werent',
    'whatever',
    'whatll',
    'whats',
    'whence',
    'whenever',
    'whereafter',
    'whereas',
    'whereby',
    'wherein',
    'wheres',
    'whereupon',
    'wherever',
    'whether',
    'whim',
    'whither',
    'whod',
    'whoever',
    'whole',
    'wholl',
    'whomever',
    'whos',
    'whose',
    'widely',
    'willing',
    'wish',
    'within',
    'without',
    'wont',
    'words',
    'world',
    'wouldnt',
    'www',
    'x',
    'yes',
    'yet',
    'youd',
    'youre',
    'z',
    'zero',
    'as',
    'aint',
    'allow',
    'allows',
    'apart',
    'appear',
    'appreciate',
    'appropriate',
    'associated',
    'best',
    'better',
    'cmon',
    'cs',
    'cant',
    'changes',
    'clearly',
    'concerning',
    'consequently',
    'consider',
    'considering',
    'corresponding',
    'course',
    'currently',
    'definitely',
    'described',
    'despite',
    'entirely',
    'exactly',
    'example',
    'going',
    'greetings',
    'hello',
    'help',
    'hopefully',
    'ignored',
    'inasmuch',
    'indicate',
    'indicated',
    'indicates',
    'inner',
    'insofar',
    'itd',
    'keep',
    'keeps',
    'novel',
    'presumably',
    'reasonably',
    'second',
    'secondly',
    'sensible',
    'serious',
    'seriously',
    'sure',
    'ts',
    'third',
    'thorough',
    'thoroughly',
    'three',
    'well',
    'wonder',
    'a',
    'about',
    'above',
    'above',
    'across',
    'after',
    'afterwards',
    'again',
    'against',
    'all',
    'almost',
    'alone',
    'along',
    'already',
    'also',
    'although',
    'always',
    'am',
    'among',
    'amongst',
    'amoungst',
    'amount',
    'an',
    'and',
    'another',
    'any',
    'anyhow',
    'anyone',
    'anything',
    'anyway',
    'anywhere',
    'are',
    'around',
    'as',
    'at',
    'back',
    'be',
    'became',
    'because',
    'become',
    'becomes',
    'becoming',
    'been',
    'before',
    'beforehand',
    'behind',
    'being',
    'below',
    'beside',
    'besides',
    'between',
    'beyond',
    'bill',
    'both',
    'bottom',
    'but',
    'by',
    'call',
    'can',
    'cannot',
    'cant',
    'co',
    'con',
    'could',
    'couldnt',
    'cry',
    'de',
    'describe',
    'detail',
    'do',
    'done',
    'down',
    'due',
    'during',
    'each',
    'eg',
    'eight',
    'either',
    'eleven',
    'else',
    'elsewhere',
    'empty',
    'enough',
    'etc',
    'even',
    'ever',
    'every',
    'everyone',
    'everything',
    'everywhere',
    'except',
    'few',
    'fifteen',
    'fify',
    'fill',
    'find',
    'fire',
    'first',
    'five',
    'for',
    'former',
    'formerly',
    'forty',
    'found',
    'four',
    'from',
    'front',
    'full',
    'further',
    'get',
    'give',
    'go',
    'had',
    'has',
    'hasnt',
    'have',
    'he',
    'hence',
    'her',
    'here',
    'hereafter',
    'hereby',
    'herein',
    'hereupon',
    'hers',
    'herself',
    'him',
    'himself',
    'his',
    'how',
    'however',
    'hundred',
    'ie',
    'if',
    'in',
    'inc',
    'indeed',
    'interest',
    'into',
    'is',
    'it',
    'its',
    'itself',
    'keep',
    'last',
    'latter',
    'latterly',
    'least',
    'less',
    'ltd',
    'made',
    'many',
    'may',
    'me',
    'meanwhile',
    'might',
    'mill',
    'mine',
    'more',
    'moreover',
    'most',
    'mostly',
    'move',
    'much',
    'must',
    'my',
    'myself',
    'name',
    'namely',
    'neither',
    'never',
    'nevertheless',
    'next',
    'nine',
    'no',
    'nobody',
    'none',
    'noone',
    'nor',
    'not',
    'nothing',
    'now',
    'nowhere',
    'of',
    'off',
    'often',
    'on',
    'once',
    'one',
    'only',
    'onto',
    'or',
    'other',
    'others',
    'otherwise',
    'our',
    'ours',
    'ourselves',
    'out',
    'over',
    'own',
    'part',
    'per',
    'perhaps',
    'please',
    'put',
    'rather',
    're',
    'same',
    'see',
    'seem',
    'seemed',
    'seeming',
    'seems',
    'serious',
    'several',
    'she',
    'should',
    'show',
    'side',
    'since',
    'sincere',
    'six',
    'sixty',
    'so',
    'some',
    'somehow',
    'someone',
    'something',
    'sometime',
    'sometimes',
    'somewhere',
    'still',
    'such',
    'system',
    'take',
    'ten',
    'than',
    'that',
    'the',
    'their',
    'them',
    'themselves',
    'then',
    'thence',
    'there',
    'thereafter',
    'thereby',
    'therefore',
    'therein',
    'thereupon',
    'these',
    'they',
    'thickv',
    'thin',
    'third',
    'this',
    'those',
    'though',
    'three',
    'through',
    'throughout',
    'thru',
    'thus',
    'to',
    'together',
    'too',
    'top',
    'toward',
    'towards',
    'twelve',
    'twenty',
    'two',
    'un',
    'under',
    'until',
    'up',
    'upon',
    'us',
    'very',
    'via',
    'was',
    'we',
    'well',
    'were',
    'what',
    'whatever',
    'when',
    'whence',
    'whenever',
    'where',
    'whereafter',
    'whereas',
    'whereby',
    'wherein',
    'whereupon',
    'wherever',
    'whether',
    'which',
    'while',
    'whither',
    'who',
    'whoever',
    'whole',
    'whom',
    'whose',
    'why',
    'will',
    'with',
    'within',
    'without',
    'would',
    'yet',
    'you',
    'your',
    'yours',
    'yourself',
    'yourselves',
    'the',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'co',
    'op',
    'research-articl',
    'pagecount',
    'cit',
    'ibid',
    'les',
    'le',
    'au',
    'que',
    'est',
    'pas',
    'vol',
    'el',
    'los',
    'pp',
    'u201d',
    'well-b',
    'http',
    'volumtype',
    'par',
    '0o',
    '0s',
    '3a',
    '3b',
    '3d',
    '6b',
    '6o',
    'a1',
    'a2',
    'a3',
    'a4',
    'ab',
    'ac',
    'ad',
    'ae',
    'af',
    'ag',
    'aj',
    'al',
    'an',
    'ao',
    'ap',
    'ar',
    'av',
    'aw',
    'ax',
    'ay',
    'az',
    'b1',
    'b2',
    'b3',
    'ba',
    'bc',
    'bd',
    'be',
    'bi',
    'bj',
    'bk',
    'bl',
    'bn',
    'bp',
    'br',
    'bs',
    'bt',
    'bu',
    'bx',
    'c1',
    'c2',
    'c3',
    'cc',
    'cd',
    'ce',
    'cf',
    'cg',
    'ch',
    'ci',
    'cj',
    'cl',
    'cm',
    'cn',
    'cp',
    'cq',
    'cr',
    'cs',
    'ct',
    'cu',
    'cv',
    'cx',
    'cy',
    'cz',
    'd2',
    'da',
    'dc',
    'dd',
    'de',
    'df',
    'di',
    'dj',
    'dk',
    'dl',
    'do',
    'dp',
    'dr',
    'ds',
    'dt',
    'du',
    'dx',
    'dy',
    'e2',
    'e3',
    'ea',
    'ec',
    'ed',
    'ee',
    'ef',
    'ei',
    'ej',
    'el',
    'em',
    'en',
    'eo',
    'ep',
    'eq',
    'er',
    'es',
    'et',
    'eu',
    'ev',
    'ex',
    'ey',
    'f2',
    'fa',
    'fc',
    'ff',
    'fi',
    'fj',
    'fl',
    'fn',
    'fo',
    'fr',
    'fs',
    'ft',
    'fu',
    'fy',
    'ga',
    'ge',
    'gi',
    'gj',
    'gl',
    'go',
    'gr',
    'gs',
    'gy',
    'h2',
    'h3',
    'hh',
    'hi',
    'hj',
    'ho',
    'hr',
    'hs',
    'hu',
    'hy',
    'i',
    'i2',
    'i3',
    'i4',
    'i6',
    'i7',
    'i8',
    'ia',
    'ib',
    'ic',
    'ie',
    'ig',
    'ih',
    'ii',
    'ij',
    'il',
    'in',
    'io',
    'ip',
    'iq',
    'ir',
    'iv',
    'ix',
    'iy',
    'iz',
    'jj',
    'jr',
    'js',
    'jt',
    'ju',
    'ke',
    'kg',
    'kj',
    'km',
    'ko',
    'l2',
    'la',
    'lb',
    'lc',
    'lf',
    'lj',
    'ln',
    'lo',
    'lr',
    'ls',
    'lt',
    'm2',
    'ml',
    'mn',
    'mo',
    'ms',
    'mt',
    'mu',
    'n2',
    'nc',
    'nd',
    'ne',
    'ng',
    'ni',
    'nj',
    'nl',
    'nn',
    'nr',
    'ns',
    'nt',
    'ny',
    'oa',
    'ob',
    'oc',
    'od',
    'of',
    'og',
    'oi',
    'oj',
    'ol',
    'om',
    'on',
    'oo',
    'oq',
    'or',
    'os',
    'ot',
    'ou',
    'ow',
    'ox',
    'oz',
    'p1',
    'p2',
    'p3',
    'pc',
    'pd',
    'pe',
    'pf',
    'ph',
    'pi',
    'pj',
    'pk',
    'pl',
    'pm',
    'pn',
    'po',
    'pq',
    'pr',
    'ps',
    'pt',
    'pu',
    'py',
    'qj',
    'qu',
    'r2',
    'ra',
    'rc',
    'rd',
    'rf',
    'rh',
    'ri',
    'rj',
    'rl',
    'rm',
    'rn',
    'ro',
    'rq',
    'rr',
    'rs',
    'rt',
    'ru',
    'rv',
    'ry',
    's2',
    'sa',
    'sc',
    'sd',
    'se',
    'sf',
    'si',
    'sj',
    'sl',
    'sm',
    'sn',
    'sp',
    'sq',
    'sr',
    'ss',
    'st',
    'sy',
    'sz',
    't1',
    't2',
    't3',
    'tb',
    'tc',
    'td',
    'te',
    'tf',
    'th',
    'ti',
    'tj',
    'tl',
    'tm',
    'tn',
    'tp',
    'tq',
    'tr',
    'ts',
    'tt',
    'tv',
    'tx',
    'ue',
    'ui',
    'uj',
    'uk',
    'um',
    'un',
    'uo',
    'ur',
    'ut',
    'va',
    'wa',
    'vd',
    'wi',
    'vj',
    'vo',
    'wo',
    'vq',
    'vt',
    'vu',
    'x1',
    'x2',
    'x3',
    'xf',
    'xi',
    'xj',
    'xk',
    'xl',
    'xn',
    'xo',
    'xs',
    'xt',
    'xv',
    'xx',
    'y2',
    'yj',
    'yl',
    'yr',
    'ys',
    'yt',
    'zi',
    'zz',
  ],
  englishsource: 'https://gist.github.com/sebleier/554280',
  englishregex: ['[^a-z0-9]', 'gi'],
  spanish: [
    'él',
    'ésta',
    'éstas',
    'éste',
    'éstos',
    'última',
    'últimas',
    'último',
    'últimos',
    'a',
    'añadió',
    'aún',
    'actualmente',
    'adelante',
    'además',
    'afirmó',
    'agregó',
    'ahí',
    'ahora',
    'al',
    'algún',
    'algo',
    'alguna',
    'algunas',
    'alguno',
    'algunos',
    'alrededor',
    'ambos',
    'ante',
    'anterior',
    'antes',
    'apenas',
    'aproximadamente',
    'aquí',
    'así',
    'aseguró',
    'aunque',
    'ayer',
    'bajo',
    'bien',
    'buen',
    'buena',
    'buenas',
    'bueno',
    'buenos',
    'cómo',
    'cada',
    'casi',
    'cerca',
    'cierto',
    'cinco',
    'comentó',
    'como',
    'con',
    'conocer',
    'consideró',
    'considera',
    'contra',
    'cosas',
    'creo',
    'cual',
    'cuales',
    'cualquier',
    'cuando',
    'cuanto',
    'cuatro',
    'cuenta',
    'da',
    'dado',
    'dan',
    'dar',
    'de',
    'debe',
    'deben',
    'debido',
    'decir',
    'dejó',
    'del',
    'demás',
    'dentro',
    'desde',
    'después',
    'dice',
    'dicen',
    'dicho',
    'dieron',
    'diferente',
    'diferentes',
    'dijeron',
    'dijo',
    'dio',
    'donde',
    'dos',
    'durante',
    'e',
    'ejemplo',
    'el',
    'ella',
    'ellas',
    'ello',
    'ellos',
    'embargo',
    'en',
    'encuentra',
    'entonces',
    'entre',
    'era',
    'eran',
    'es',
    'esa',
    'esas',
    'ese',
    'eso',
    'esos',
    'está',
    'están',
    'esta',
    'estaba',
    'estaban',
    'estamos',
    'estar',
    'estará',
    'estas',
    'este',
    'esto',
    'estos',
    'estoy',
    'estuvo',
    'ex',
    'existe',
    'existen',
    'explicó',
    'expresó',
    'fin',
    'fue',
    'fuera',
    'fueron',
    'gran',
    'grandes',
    'ha',
    'había',
    'habían',
    'haber',
    'habrá',
    'hace',
    'hacen',
    'hacer',
    'hacerlo',
    'hacia',
    'haciendo',
    'han',
    'hasta',
    'hay',
    'haya',
    'he',
    'hecho',
    'hemos',
    'hicieron',
    'hizo',
    'hoy',
    'hubo',
    'igual',
    'incluso',
    'indicó',
    'informó',
    'junto',
    'la',
    'lado',
    'las',
    'le',
    'les',
    'llegó',
    'lleva',
    'llevar',
    'lo',
    'los',
    'luego',
    'lugar',
    'más',
    'manera',
    'manifestó',
    'mayor',
    'me',
    'mediante',
    'mejor',
    'mencionó',
    'menos',
    'mi',
    'mientras',
    'misma',
    'mismas',
    'mismo',
    'mismos',
    'momento',
    'mucha',
    'muchas',
    'mucho',
    'muchos',
    'muy',
    'nada',
    'nadie',
    'ni',
    'ningún',
    'ninguna',
    'ningunas',
    'ninguno',
    'ningunos',
    'no',
    'nos',
    'nosotras',
    'nosotros',
    'nuestra',
    'nuestras',
    'nuestro',
    'nuestros',
    'nueva',
    'nuevas',
    'nuevo',
    'nuevos',
    'nunca',
    'o',
    'ocho',
    'otra',
    'otras',
    'otro',
    'otros',
    'para',
    'parece',
    'parte',
    'partir',
    'pasada',
    'pasado',
    'pero',
    'pesar',
    'poca',
    'pocas',
    'poco',
    'pocos',
    'podemos',
    'podrá',
    'podrán',
    'podría',
    'podrían',
    'poner',
    'por',
    'porque',
    'posible',
    'próximo',
    'próximos',
    'primer',
    'primera',
    'primero',
    'primeros',
    'principalmente',
    'propia',
    'propias',
    'propio',
    'propios',
    'pudo',
    'pueda',
    'puede',
    'pueden',
    'pues',
    'qué',
    'que',
    'quedó',
    'queremos',
    'quién',
    'quien',
    'quienes',
    'quiere',
    'realizó',
    'realizado',
    'realizar',
    'respecto',
    'sí',
    'sólo',
    'se',
    'señaló',
    'sea',
    'sean',
    'según',
    'segunda',
    'segundo',
    'seis',
    'ser',
    'será',
    'serán',
    'sería',
    'si',
    'sido',
    'siempre',
    'siendo',
    'siete',
    'sigue',
    'siguiente',
    'sin',
    'sino',
    'sobre',
    'sola',
    'solamente',
    'solas',
    'solo',
    'solos',
    'son',
    'su',
    'sus',
    'tal',
    'también',
    'tampoco',
    'tan',
    'tanto',
    'tenía',
    'tendrá',
    'tendrán',
    'tenemos',
    'tener',
    'tenga',
    'tengo',
    'tenido',
    'tercera',
    'tiene',
    'tienen',
    'toda',
    'todas',
    'todavía',
    'todo',
    'todos',
    'total',
    'tras',
    'trata',
    'través',
    'tres',
    'tuvo',
    'un',
    'una',
    'unas',
    'uno',
    'unos',
    'usted',
    'va',
    'vamos',
    'van',
    'varias',
    'varios',
    'veces',
    'ver',
    'vez',
    'y',
    'ya',
    'yo',
  ],
  spanishsource: 'https://code.google.com/archive/p/stop-words/',
  spanishregex: ['[^a-z0-9ñ]', 'gi'],
};

//// Comparison section

export function findSpaces(text: string): number[] {
  /**
   * Takes a string as input, outputs indices of spaces in the string. Also, replaces all whitespace characters with
   * spaces and adds spaces at the beggining and start so it can be separated more easily in the getWords function
   *
   * In: "Hello, my name is"
   *
   * Out: [-1, 6, 9, 14, 17]
   */
  text = text
    .replace('\n', ' ')
    .replace('\t', ' ')
    .replace('\r', ' ')
    .replace('.', ' ');
  const spaceIndices: number[] = [];
  const len: number = text.length;
  for (let i = 0; i < len; i++) {
    if (text.charAt(i) == ' ') {
      spaceIndices.push(i);
    }
  }
  spaceIndices.unshift(-1);
  spaceIndices.push(text.length);
  return spaceIndices;
}

export function getWords(text: string): [string[], number[][]] {
  /**
   * Takes text and the output of the findSpaces function as inputs, outputs list of words and list of their indices
   * in the original string in formant [start, end]
   *
   * In: "Hello, my name is", [-1, 6, 9, 14, 17]
   *
   * Out: [   [ 'Hello,', 'my', 'name', 'is' ] ,
   * [[ 0, 6 ], [ 7, 9 ], [ 10, 14 ], [ 15, 17 ]]   ]
   */
  const spaceIndices: number[] = findSpaces(text);
  const words: string[] = [];
  const indicesList: number[][] = [];
  const len: number = spaceIndices.length - 1; // One is substracted because the for
  for (let i = 0; i < len; i++) {
    // loop uses two elements
    if (spaceIndices[i + 1] - spaceIndices[i] > 1) {
      // Doesn't count two spaces in a row
      const wordStart: number = spaceIndices[i] + 1;
      const wordEnd: number = spaceIndices[i + 1];
      words.push(text.slice(wordStart, wordEnd));
      indicesList.push([wordStart, wordEnd]);
    }
  }
  return [words, indicesList];
}

export function normalizeAndRemoveStopWords(
  words: string[],
  indicesList: number[][],
  language: string = 'english',
): [string[], number[][]] {
  /**
   * Leaves only allowed characters on each word and lowers it, and then removes the stopwords (from stopwords.json)
   *
   * In: [ 'Hello,', 'my', 'name', 'is', 'jazz' ] ,  [[ 0, 6 ], [ 7, 9 ], [ 10, 14 ], [ 15, 17 ], [20,25]]
   *
   * Out: [ [ 'jazz' ], [ [ 20, 25 ] ] ]
   * (only jazz is not a stopword)
   */
  const stopwords: string[] = json[language];
  const regex: RegExp = RegExp(
    json[language + 'regex'][0],
    json[language + 'regex'][1],
  ); // All non-allowed characters
  const newWords: string[] = [];
  const newIndicesList: number[][] = [];
  const len: number = words.length;
  for (let i = 0; i < len; i++) {
    words[i] = words[i].toLowerCase().replace(regex, '');
    if (!stopwords.includes(words[i])) {
      newWords.push(words[i]);
      newIndicesList.push(indicesList[i]);
    }
  }
  return [newWords, newIndicesList];
}

export function shingleAndStemmer(
  words: string[],
  indicesList: number[][],
  shingleSize: number,
  stemmer: any,
): [string[][], number[][]] {
  /**
   * Stems the words (turns to root form) and optionally shingles them
   *
   * Read more:
   * https://en.wikipedia.org/wiki/Stemming
   * https://en.wikipedia.org/wiki/W-shingling
   *
   * In: ["like", "jazz", "my", "jazzy", "feeling"] , [[1,2], [3,4], [5,6], [7,8], [9,10]] , 2 , "english"
   *
   * Out: [ [  [ 'like', 'jazz' ],[ 'jazz', 'my' ],[ 'my', 'jazzi' ],[ 'jazzi', 'feel' ] ],
   * [ [ 1, 4 ], [ 3, 6 ], [ 5, 8 ], [ 7, 10 ] ]]
   */
  const stemmedWords: string[] = words.map(stemmer.stem);
  const shingles: string[][] = [];
  const shingledIndicesList: number[][] = [];
  const len: number = stemmedWords.length - shingleSize + 1;
  for (let i = 0; i < len; i++) {
    shingles.push(stemmedWords.slice(i, i + shingleSize));
    shingledIndicesList.push([
      indicesList[i][0],
      indicesList[i + shingleSize - 1][1],
    ]);
  }
  return [shingles, shingledIndicesList];
}

export function union<T>(array1: T[], array2: T[]): T[] {
  /**
   * Auxiliary function which unites two arrays, skipping duplicates
   *
   * In: [1,2,4,5,7] , [3,4,5,6,7,8]
   *
   * Out: [1,2,4,5,7,3,6,8]
   */
  const len: number = array2.length;
  for (let i = 0; i < len; i++) {
    if (!array1.includes(array2[i])) {
      array1.push(array2[i]);
    }
  }
  return array1;
}

export function diff<T>(array1: T[], array2: T[]): T[] {
  /**
   * Auxiliary function which finds the difference of two arrays (based on the first one)
   *
   * In: [1,2,3,4,9], [2,4,7,8]
   *
   * Out: [1,3,9]
   */
  const output: T[] = [];
  for (const element of array1) {
    if (!array2.includes(element)) output.push(element);
  }
  return output;
}

export function arraysEqual<T>(array1: T[], array2: T[]): boolean {
  /**
   * Auxiliary function which checks if the elements of both arrays are equal. If they are not arrays just checks if
   * they are equal.
   *
   * In: [1,2,3,4], [2,4,3,1]
   * Out: false
   *
   * In: [1,2,3,4], [1,2,3,4]
   * Out: true
   *
   * In: [[1]], [[1]]
   * Out: false // because they are different entities and this function isn't recursive
   *
   * In: 4,
   */
  if (array1 == array2) {
    return true;
  }
  if (array1.length != array2.length) {
    return false;
  }
  const len: number = array1.length;
  for (let i = 0; i < len; i++) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

export function findUnionAndCluster(
  shingles1: string[][],
  shingles2: string[][],
  maximumGap: number = 3,
  minimumClusterSize: number = 1,
  returnMatches: boolean = false,
): number[][][] | [number[][][], number[][]] {
  /**
   * Finds the points matching in both shingle sets, then finds the clusters in which they are close together
   * (a match)
   *
   * In: [["a"],["b"],["c"],["d"]], [["x"],["c"],["d"],["y"]], 2, 1
   * Out: [ [ [ 2, 1 ], [ 3, 2 ] ] ]
   *
   * Meaning there was one cluster, consisting of the indices 2 and 3 ("b" and "c") of the first array, and indices 1
   * and 2 of the second array (also "b" and "c")
   *
   * The returnMatches argument return the matches without any cluster done to them
   */
  const matches: number[][] = [];
  for (let i = 0; i < shingles1.length; i++) {
    for (let j = 0; j < shingles2.length; j++) {
      if (arraysEqual(shingles1[i], shingles2[j])) {
        matches.push([i, j]);
      }
    }
  }
  //clustering
  const clusters: number[][][] = [];
  for (let i = 0; i < matches.length; i++) {
    // For every matching point
    let inCluster: number | null = null; // By default it is not in any cluster
    const clustersLen: number = clusters.length; // (false == 0 so it's not used)
    for (let j = 0; j < clustersLen; j++) {
      // For each existing cluster
      const currentClusterLen: number = clusters[j].length;
      for (let k = 0; k < currentClusterLen; k++) {
        // For each point in that cluster
        if (
          Math.max(
            Math.abs(matches[i][0] - clusters[j][k][0]), // If Chebyshev distance is small enough
            Math.abs(matches[i][1] - clusters[j][k][1]),
          ) <= maximumGap
        ) {
          // to be in the same cluster
          if (inCluster == null) {
            // If it isn't in any cluster
            clusters[j].push(matches[i]); // Add it to the cluster
            inCluster = j; // Mark that it is in that cluster
          } else if (inCluster != j) {
            // Else if it already is in a cluster
            //and that cluster isn't the one it's in
            clusters[inCluster] = union(
              clusters[inCluster], //Merge both clusters
              clusters[j],
            );
            clusters[j] = [];
            break;
          }
        }
      }
    }
    if (inCluster == null) {
      // If after checking in al clusters it
      clusters.push([matches[i]]); // isn't in any, create a cluster with just itseld
    }
  }
  //Removing all clusters smaller than the minimum distance
  const newClusters: number[][][] = [];
  for (let i = 0; i < clusters.length; i++) {
    if (clusters[i].length >= minimumClusterSize) {
      newClusters.push(clusters[i]);
    }
  }
  if (returnMatches) {
    return [newClusters, matches];
  }
  return newClusters;
}

export function findClusterStartAndEnd(
  shingleStart: number,
  shingleEnd: number,
  shingledIndicesList: number[][],
): [number, number] {
  /**
   * Returns the indices of matches based on the original text.
   *
   * In: 0,2, [[1,4],[5,7],[8,9],[12,15]]
   * Out: [1, 9]
   */
  return [
    shingledIndicesList[shingleStart][0],
    shingledIndicesList[shingleEnd][1],
  ];
}

//// Search section

export function includesSubstringFromArray(
  string: string,
  array: string[],
): boolean {
  /**
   * Checks if any element in a list contains a substring of the given string
   *
   * In: "hello there", ["xyz", "thi", "re"]
   * Out: true
   */
  for (const substring of array) {
    if (string.includes(substring)) return true;
  }
  return false;
}

export function html2text(htmlCode: string): string {
  /**
   * Auxiliary function to convert html to plain text
   *
   * Modified from EpokK @
   *https://stackoverflow.com/questions/15180173/convert-html-to-plain-text-in-js-without-browser-environment/15180206
   *
   * In: "<html><head><title>Example Domain</title>..."
   *
   * Out:
   *Example Domain
   *
   *Example Domain
   *This domain is for use in illustrative examples in documents. You may use this
   *domain in literature without prior coordination or asking for permission.
   *
   *More information...
   */
  htmlCode = String(htmlCode)
    .replace(/<style([\s\S]*?)<\/style>/gi, '')
    .replace(/<script([\s\S]*?)<\/script>/gi, '')
    .replace(/<[^>]+>/gi, ' ');
  return htmlCode;
}

export function getTitle(html: string): string {
  /**
   * Gets contents inside title tag in html.
   *
   * In: "<head> ... <title >HookeJs/index.js at master · oekshido/HookeJs</title> ... "
   *
   * Out: HookeJs/index.js at master · oekshido/HookeJs
   */
  if (typeof html != 'string') {
    return '';
  }
  const a: RegExp = RegExp('title(.*?)/title', 'i');
  const b: RegExp = RegExp('>(.*?)<', 'i');
  try {
    const titleMatch = html.match(a);
    if (!titleMatch) return '';
    const contentMatch = titleMatch[0].match(b);
    if (!contentMatch) return '';
    return contentMatch[0].slice(1, -1);
  } catch {
    return '';
  }
}

export async function singleSearchScrape(query: string): Promise<string[]> {
  /**
   * Searches the given query scraping google
   *
   * In: "Jazz"
   * Out: ["https://en.wikipedia.org/wiki/Jazz", ...]
   */
  const ignore: string[] = ['google.com/preferences', 'accounts.google'];
  const url: URL = new URL('https://www.google.com/search');
  url.searchParams.append('q', query);
  const response = await axios.get(url.href, { timeout: 60000 });
  const anchorTags: string[] = response.data.match(/<a[\s]+([^>]+)>/gi);
  const urls: string[] = [];
  for (const tag of anchorTags) {
    const linkMatch = tag.match(/".*?"/);
    if (!linkMatch) continue;
    const link: string = linkMatch[0];
    const start: string = link.slice(1, 8);
    const cleanLink: string = link.slice(8, -1).split('&')[0];
    if (
      start == '/url?q=' &&
      !includesSubstringFromArray(cleanLink, ignore) &&
      !urls.includes(cleanLink)
    ) {
      urls.push(cleanLink);
    }
  }
  return urls;
}

export async function singleSearchApi(
  query: string,
  apikey: string,
  engineid: string,
): Promise<string[]> {
  /**
   * Searches the given query using the custom search engine api
   *
   * In: "Jazz"
   *
   * Out: ["https://en.wikipedia.org/wiki/Jazz", ...]
   */
  const url: URL = new URL('https://www.googleapis.com/customsearch/v1');
  url.searchParams.append('q', query);
  url.searchParams.append('key', apikey);
  url.searchParams.append('cx', engineid);
  const response = await axios.get(url.href, { timeout: 60000 });
  if (response.data != undefined && response.data.items != undefined) {
    const urls: string[] = [];
    for (const item of response.data.items) {
      urls.push(item.link);
    }
    return urls;
  } else {
    return [];
  }
}

export async function downloadWebsites(
  urls: string[],
  justText: boolean = true,
  verbose: boolean = false,
): Promise<[string[], string[]] | string[]> {
  const catchFunction = verbose ? console.log : () => {};
  const requests: Promise<any>[] = [];
  for (let i = 0; i < urls.length; i++) {
    requests.push(axios.get(urls[i], { timeout: 60000 }).catch(catchFunction));
  }
  const responses = await Promise.all(requests).catch(catchFunction);
  const htmls: string[] = [];

  if (responses) {
    for (let i = 0; i < responses.length; i++) {
      if (responses[i] != undefined) {
        htmls.push(responses[i].data);
      } else {
        htmls.push('');
      }
    }
  }

  if (!justText) {
    return htmls;
  }

  const texts: string[] = [];
  const titles: string[] = [];

  for (let i = 0; i < htmls.length; i++) {
    texts.push(html2text(htmls[i]));
    titles.push(getTitle(htmls[i]));
  }
  return [texts, titles];
}

//// Use section

class Source {
  /**
   * Class which represents a source, with the variable being source(its url), matches(array of class Match), and the
   * text
   */
  source: string;
  matches: Match[];
  text: string;
  title: string;

  constructor(source: string, matches: Match[], text: string, title: string) {
    this.source = source;
    this.matches = matches;
    this.text = text;
    this.title = title;
  }
}

export class Match {
  /**
   * Represents a specific cluster, with extra funcionality
   */
  cluster: number[][];
  source: string;
  sourceTitle: string;
  inputShingleStart: number;
  inputShingleEnd: number;
  comparedShingleStart: number;
  comparedShingleEnd: number;
  inputStart: number;
  inputEnd: number;
  comparedStart: number;
  comparedEnd: number;
  score: number;

  constructor(cluster: number[][], source: string, sourceTitle: string) {
    this.cluster = cluster;
    this.source = source;
    this.sourceTitle = sourceTitle;
  }

  contextualize(
    inputShingledIndicesList: number[][],
    comparedShingledIndicesList: number[][],
  ): void {
    /**
     * Finds the start and end of the match, and gives it an overall score equals to the amount of matches squared
     * divided by the end minus start of the cluster, or the length times density, or zero if it is len zero
     */
    const len: number = this.cluster.length;
    this.inputShingleStart = this.inputShingleEnd = this.cluster[0][0];
    this.comparedShingleStart = this.comparedShingleEnd = this.cluster[0][1];
    for (let i = 1; i < len; i++) {
      if (this.cluster[i][0] < this.inputShingleStart) {
        this.inputShingleStart = this.cluster[i][0];
      } else if (this.cluster[i][0] > this.inputShingleEnd) {
        this.inputShingleEnd = this.cluster[i][0];
      }
      if (this.cluster[i][1] < this.comparedShingleStart) {
        this.comparedShingleStart = this.cluster[i][1];
      } else if (this.cluster[i][1] > this.comparedShingleEnd) {
        this.comparedShingleEnd = this.cluster[i][1];
      }
    }

    [this.inputStart, this.inputEnd] = findClusterStartAndEnd(
      this.inputShingleStart,
      this.inputShingleEnd,
      inputShingledIndicesList,
    );
    [this.comparedStart, this.comparedEnd] = findClusterStartAndEnd(
      this.comparedShingleStart,
      this.comparedShingleEnd,
      comparedShingledIndicesList,
    );

    if (this.inputShingleEnd - this.inputShingleStart > 1) {
      this.score =
        (this.cluster.length * this.cluster.length) /
        (this.inputShingleEnd - this.inputShingleStart);
    } else {
      this.score = 0;
    }
  }

  findNearestPeriod(
    periodIndices: number[],
    margin: number = 5,
  ): number | undefined {
    /**
     * Returns given the period indices the nearest period after it
     */
    for (let i = 0; i < periodIndices.length; i++) {
      if (periodIndices[i] >= this.inputEnd - margin) {
        return periodIndices[i];
      }
    }
  }
}

interface MatchOptions {
  text?: string;
  language?: string;
  shingleSize?: number;
  apikey?: string;
  engineid?: string;
  maximumGap?: number;
  minimumClusterSize?: number;
  verbose?: boolean;
}

export async function match({
  text = '',
  language = 'english',
  shingleSize = 2,
  apikey = process.env.G_API_KEY,
  engineid = process.env.G_ENGINE_ID,
  maximumGap = 3,
  minimumClusterSize = 5,
  verbose = false,
}: MatchOptions = {}): Promise<Source[]> {
  /**
   * Takes th input text and searches the internet for similar texts, and finds matches between them.
   *
   * In: "Example Domain This domain is for use in illustrative examples in documents. You may use this domain in " +
   * "literature without prior coordination or asking for permission. More information..."
   *
   * Out: [Source{source: "http://www.example.com", matches = [Match{...}, ...], text = "Example Domain Example ..."},
   *  ...]
   */
  const stemmer = snowball.newStemmer(language);
  const inputText: string = text;
  const sources: Source[] = [];

  let [inputWords, inputIndicesList] = getWords(inputText);
  [inputWords, inputIndicesList] = normalizeAndRemoveStopWords(
    inputWords,
    inputIndicesList,
    language,
  );
  const [inputShingles, inputShingledIndicesList] = shingleAndStemmer(
    inputWords,
    inputIndicesList,
    shingleSize,
    stemmer,
  );

  const limit: number = 32; //32 word limit on google search
  const len: number = Math.ceil(inputWords.length / limit);
  const searchQueries: string[] = [];
  for (let i = 0; i < len; i++) {
    searchQueries.push(inputWords.slice(i * limit, (i + 1) * limit).join(' '));
  }

  let usedUrls: string[] = [];
  for (const query of searchQueries) {
    let comparedUrls: string[];
    if (apikey && engineid) {
      try {
        comparedUrls = await singleSearchApi(query, apikey, engineid);
      } catch {
        comparedUrls = await singleSearchScrape(query);
      }
    } else {
      comparedUrls = await singleSearchScrape(query);
    }

    comparedUrls = diff(comparedUrls, usedUrls);
    usedUrls = union(usedUrls, comparedUrls);

    const [comparedTexts, comparedTitles] = (await downloadWebsites(
      comparedUrls,
      true,
      verbose,
    ).catch(console.log)) as [string[], string[]];

    for (let i = 0; i < comparedTexts.length; i++) {
      let [comparedWordsTemp, comparedIndicesListTemp] = getWords(
        comparedTexts[i],
      );

      [comparedWordsTemp, comparedIndicesListTemp] =
        normalizeAndRemoveStopWords(
          comparedWordsTemp,
          comparedIndicesListTemp,
          language,
        );

      const [comparedShinglesTemp, comparedShingledIndicesListTemp] =
        shingleAndStemmer(
          comparedWordsTemp,
          comparedIndicesListTemp,
          shingleSize,
          stemmer,
        );

      const comparedClustersTemp = findUnionAndCluster(
        inputShingles,
        comparedShinglesTemp,
        maximumGap,
        minimumClusterSize,
      ) as number[][][];

      const matchesTemp: Match[] = [];
      for (let j = 0; j < comparedClustersTemp.length; j++) {
        matchesTemp.push(
          new Match(
            comparedClustersTemp[j],
            comparedUrls[i],
            comparedTitles[i],
          ),
        );
        matchesTemp[j].contextualize(
          inputShingledIndicesList,
          comparedShingledIndicesListTemp,
        );
      }

      sources.push(
        new Source(
          comparedUrls[i],
          matchesTemp,
          comparedTexts[i],
          comparedTitles[i],
        ),
      );
    }
  }

  return sources;
}

export async function matchPrint({
  text = '',
  language = 'english',
  shingleSize = 2,
  apikey = process.env.G_API_KEY,
  engineid = process.env.G_ENGINE_ID,
  maximumGap = 3,
  minimumClusterSize = 5,
}: MatchOptions = {}): Promise<Source[]> {
  /**
   * Runs the match function and prints it
   */
  // @ts-expect-error Temporary fix
  const sources: Source[] = await match({
    text: text,
    language: language,
    shingleSize: shingleSize,
    apikey: apikey,
    engineid: engineid,
    maximumGap: maximumGap,
    minimumClusterSize: minimumClusterSize,
  }).catch(console.log);

  return sources;
}

export function findIntervalUnionPercent(
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number {
  /**
   * Auxiliary function which finds a which fraction of the smallest intervals is intersecting the bigger one.
   *
   * In: 3,5,0,4  i.e.  [3,5], [0,4]
   *
   * Out: 0.5
   */
  if (start2 > end1 || start1 > end2) {
    return 0;
  } else {
    return (
      (Math.min(end1, end2) - Math.max(start1, start2)) /
      Math.min(end1 - start1, end2 - start2)
    );
  }
}

export function findCharacterInText(
  text: string,
  character: string,
  setLastCharacter: boolean = true,
): number[] {
  /**
   * Auxuliary function similar to findSpaces, adapted to any character and without whitespace modification.
   *
   * In: "ABC.DFGH.IJ", ".", true
   *
   * Out: [ 3, 8, 11 ]
   *
   * In: "ABC.DFGH.IJ", ".", false
   *
   * Out: [ 3, 8 ]
   */
  const indices: number[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == character) {
      indices.push(i);
    }
  }
  if (setLastCharacter) {
    indices.push(text.length);
  }
  return indices;
}

export function isSubstringUnique(string: string, substring: string): boolean {
  return string.split(substring).length == 2;
}

export function findUniqueSubstring(
  text: string,
  replacementIndex: number,
  minimumSize: number = 10,
): string {
  /**
   * Finds unique substring stopping in the given index.
   *
   * In: "abc.zbc.wcm.", 7, 2
   *
   * Out: "zbc"
   */
  while (minimumSize < replacementIndex) {
    if (
      isSubstringUnique(
        text,
        text.slice(replacementIndex - minimumSize, replacementIndex),
      )
    ) {
      //If slice is unique
      return text.slice(replacementIndex - minimumSize, replacementIndex);
    }
    minimumSize++;
  }
  return text.slice(0, replacementIndex);
}

interface AutoCitationOptions extends MatchOptions {
  replace?: boolean;
  apikey?: string;
  percentToMerge?: number;
}

export async function autoCitation({
  text = '',
  replace = false,
  language = 'english',
  shingleSize = 2,
  apikey = process.env.G_API_KEY,
  engineid = process.env.G_ENGINE_ID,
  maximumGap = 3,
  minimumClusterSize = 5,
  percentToMerge = 0.6,
  verbose = false,
}: AutoCitationOptions = {}): Promise<
  [Record<string, string>, string] | string
> {
  /**
   * Uses previous functions to automatically generate texts to be replaced and a bibliography based on the internet
   *
   * In: "Example Domain This domain is for use in illustrative examples in documents. You may use this domain in" +
   * "literature without prior coordination or asking for permission. More information. Hello there, this is not " +
   * "part of the match"
   *
   * Out: [
   * [ [ 'nformation', 'nformation[1]' ] ],
   *  '\n' +
   *      '\n' +
   *      '\n' +
   *      'Bibliography\n' +
   *      '\n' +
   *      '[1] Example Domain (n.d.). Retrieved from https://example.com/\n'
   *  ]
   *
   * In: "Example Domain This domain is for use in illustrative examples in documents. You may use this domain in " +
   * "literature without prior coordination or asking for permission. Hello there, this is not part of the match",true
   *
   * Out: `Example Domain This domain is for use in illustrative examples in documents. You may use this domain in
   * literature without prior coordination or asking for permission[1]. Hello there, this is not part of the match
   *
   *
   * Bibliography
   *
   * [1] Example Domain (n.d.). Retrieved from https://example.com/"`
   */
  const sources = await match({
    text,
    language,
    shingleSize,
    apikey,
    engineid,
    maximumGap,
    minimumClusterSize,
    verbose,
  }).catch(console.log);
  const matches: any[] = [];
  if (sources) {
    for (const source of sources) {
      matches.push(...source.matches);
    }
  }

  const finalMatches: any[] = [];
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].score < 1) {
      continue;
    }

    let willBeOnFinal = true;
    for (let j = 0; j < matches.length; j++) {
      if (
        findIntervalUnionPercent(
          matches[i].inputShingleStart,
          matches[i].inputShingleEnd,
          matches[j].inputShingleStart,
          matches[j].inputShingleEnd,
        ) >= percentToMerge
      ) {
        if (matches[i].score < matches[j].score && i !== j) {
          willBeOnFinal = false;
        } else if (matches[i].score === matches[j].score && i !== j) {
          if (i < j) {
            willBeOnFinal = false;
          }
        }
      }
    }
    if (willBeOnFinal) {
      finalMatches.push(matches[i]);
    }
  }

  const periodIndices = findCharacterInText(text, '.');
  let bibliography = '\n\n\nBibliography\n\n';
  const replacements: Record<string, string> = {};
  const usedUrls = [`placeholder because people don't count from 0`];

  for (const fMatch of finalMatches) {
    const matchPeriodIndex = fMatch.findNearestPeriod(periodIndices);
    const replacement = findUniqueSubstring(text, matchPeriodIndex);
    if (!usedUrls.includes(fMatch.source)) {
      replacements[replacement] = replacement + `[${usedUrls.length}]`;
      bibliography +=
        `[${usedUrls.length}] ${fMatch.sourceTitle} (n.d.). Retrieved` +
        ` from ${fMatch.source}\n`;
      usedUrls.push(fMatch.source);
    } else {
      replacements[replacement] =
        replacement + `[${usedUrls.indexOf(fMatch.source)}]`;
    }
  }

  if (!replace) {
    return [replacements, bibliography];
  }

  let resultText = text;
  for (const [replacedText, replacement] of Object.entries(replacements)) {
    resultText = resultText.replace(replacedText, replacement);
  }
  return resultText + bibliography;
}
