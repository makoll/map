const countries: { [key: string]: Array<string> } = {
  AD: ["Andorra", "アンドラ"],
  "AD-02": ["Canillo"],
  "AD-03": ["Encamp"],
  "AD-04": ["La Massana"],
  "AD-05": ["Ordino"],
  "AD-06": ["Sant Julià de Lòria]"],
  "AD-07": ["Andorra la Vella"],
  "AD-08": ["Escaldes-Engordany"],
  AE: ["United Arab Emirates", "アラブ首長国連邦"],
  "AE-AJ": ["‘Ajmān"],
  "AE-AZ": ["Abu Dhabi"],
  "AE-DU": ["Dubai"],
  "AE-FU": ["Fujairah"],
  "AE-RK": ["Ras Al Khaimah"],
  "AE-SH": ["Sharjah"],
  "AE-UQ": ["Umm Al Quwain"],
  AF: ["Afghanistan", "アフガニスタン"],
  "AF-BAL": ["Balkh"],
  "AF-BAM": ["Bamyan"],
  "AF-BDG": ["Badghis"],
  "AF-BDS": ["Badakhshan"],
  "AF-BGL": ["Baghlan"],
  "AF-DAY": ["Daykundi"],
  "AF-FRA": ["Farah"],
  "AF-FYB": ["Faryab"],
  "AF-GHA": ["Ghazni"],
  "AF-GHO": ["Ghōr"],
  "AF-HEL": ["Helmand"],
  "AF-HER": ["Herat"],
  "AF-JOW": ["Jowzjan"],
  "AF-KAB": ["Kabul"],
  "AF-KAN": ["Kandahar"],
  "AF-KAP": ["Kapisa"],
  "AF-KDZ": ["Kunduz"],
  "AF-KHO": ["Khost"],
  "AF-KNR": ["Kunar"],
  "AF-LAG": ["Laghman"],
  "AF-LOG": ["Logar"],
  "AF-NAN": ["Nangarhar"],
  "AF-NIM": ["Nimruz"],
  "AF-NUR": ["Nuristan"],
  "AF-PAN": ["Panjshir"],
  "AF-PAR": ["Parwan"],
  "AF-PIA": ["Paktia"],
  "AF-PKA": ["Paktika"],
  "AF-SAM": ["Samangan"],
  "AF-SAR": ["Sar-e Pol"],
  "AF-TAK": ["Takhar"],
  "AF-URU": ["Urozgan"],
  "AF-WAR": ["Maidan Wardak"],
  "AF-ZAB": ["Zabul"],
  AG: ["Antigua and Barbuda", "アンティグア・バーブーダ"],
  "AG-03": ["Saint George"],
  "AG-04": ["Saint John"],
  "AG-05": ["Saint Mary"],
  "AG-06": ["Saint Paul"],
  "AG-07": ["Saint Peter"],
  "AG-08": ["Saint Philip"],
  "AG-10": ["Barbuda"],
  "AG-11": ["Redonda"],
  AI: ["Anguilla", "アンギラ"],
  AL: ["Albania", "アルバニア"],
  "AL-01": ["Berat"],
  "AL-02": ["Durrës"],
  "AL-03": ["Elbasan"],
  "AL-04": ["Fier"],
  "AL-05": ["Gjirokastër"],
  "AL-06": ["Korçë"],
  "AL-07": ["Kukës"],
  "AL-08": ["Lezhë"],
  "AL-09": ["Dibër"],
  "AL-10": ["Shkodër"],
  "AL-11": ["Tiranë"],
  "AL-12": ["Vlorë"],
  AM: ["Armenia", "アルメニア"],
  "AM-AG": ["Aragatsotn"],
  "AM-AR": ["Ararat"],
  "AM-AV": ["Armavir"],
  "AM-ER": ["Yerevan"],
  "AM-GR": ["Gegharkunik"],
  "AM-KT": ["Kotayk"],
  "AM-LO": ["Lori"],
  "AM-SH": ["Shirak"],
  "AM-SU": ["Syunik"],
  "AM-TV": ["Tavush"],
  "AM-VD": ["Vayots Dzor"],
  AO: ["Angola", "アンゴラ"],
  "AO-BGO": ["Bengo"],
  "AO-BGU": ["Benguela"],
  "AO-BIE": ["Bié"],
  "AO-CAB": ["Cabinda"],
  "AO-CCU": ["Kuando Kubango"],
  "AO-CNN": ["Cunene"],
  "AO-CNO": ["Kwanza Norte"],
  "AO-CUS": ["Kwanza Sul"],
  "AO-HUA": ["Huambo"],
  "AO-HUI": ["Huíla"],
  "AO-LNO": ["Lunda Norte"],
  "AO-LSU": ["Lunda Sul"],
  "AO-LUA": ["Luanda"],
  "AO-MAL": ["Malange"],
  "AO-MOX": ["Moxico"],
  "AO-NAM": ["Namibe"],
  "AO-UIG": ["Uíge"],
  "AO-ZAI": ["Zaire"],
  AQ: ["Antarctica", "南極"],
  AR: ["Argentina", "アルゼンチン"],
  "AR-A": [" Salta"],
  "AR-B": [" Buenos Aires"],
  "AR-C": [" Ciudad Autónoma de Buenos Aires"],
  "AR-D": [" San Luis"],
  "AR-E": [" Entre Ríos"],
  "AR-F": [" La Rioja"],
  "AR-G": [" Santiago del Estero"],
  "AR-H": [" Chaco"],
  "AR-J": [" San Juan"],
  "AR-K": [" Catamarca"],
  "AR-L": [" La Pampa"],
  "AR-M": [" Mendoza"],
  "AR-N": [" Misiones"],
  "AR-P": [" Formosa"],
  "AR-Q": [" Neuquén"],
  "AR-R": [" Río Negro"],
  "AR-S": [" Santa Fe"],
  "AR-T": [" Tucumán"],
  "AR-U": [" Chubut"],
  "AR-V": [" Tierra del Fuego"],
  "AR-W": [" Corrientes"],
  "AR-X": [" Córdoba"],
  "AR-Y": [" Jujuy"],
  "AR-Z": [" Santa Cruz"],
  AS: ["American Samoa", "アメリカ領サモア"],
  AT: ["Austria", "オーストリア"],
  "AT-1": ["Burgenland"],
  "AT-2": ["Carinthia"],
  "AT-3": ["Lower Austria"],
  "AT-4": ["Upper Austria"],
  "AT-5": ["Salzburg"],
  "AT-6": ["Styria"],
  "AT-7": ["Tyrol"],
  "AT-8": ["Vorarlberg"],
  "AT-9": ["Vienna"],
  AU: ["Australia", "オーストラリア"],
  "AU-ACT": [" Australian Capital Territory"],
  "AU-NSW": [" New South Wales"],
  "AU-NT": [" Northern Territory"],
  "AU-QLD": [" Queensland"],
  "AU-SA": [" South Australia"],
  "AU-TAS": [" Tasmania"],
  "AU-VIC": [" Victoria"],
  "AU-WA": [" Western Australia"],
  AW: ["Aruba", "アルバ"],
  AX: ["Åland Islands", "オーランド諸島"],
  AZ: ["Azerbaijan", "アゼルバイジャン"],
  BA: ["Bosnia and Herzegovina", "ボスニア・ヘルツェゴビナ"],
  BB: ["Barbados", "バルバドス"],
  BD: ["Bangladesh", "バングラデシュ"],
  BE: ["Belgium", "ベルギー"],
  BF: ["Burkina Faso", "ブルキナファソ"],
  BG: ["Bulgaria", "ブルガリア"],
  BH: ["Bahrain", "バーレーン"],
  BI: ["Burundi", "ブルンジ"],
  BJ: ["Benin", "ベナン"],
  BL: ["Saint Barthélemy", "サン・バルテルミー島"],
  BM: ["Bermuda", "バミューダ諸島"],
  BN: ["Brunei Darussalam", "ブルネイ・ダルサラーム"],
  BO: ["Bolivia, Plurinational State of", "ボリビア多民族国"],
  BQ: ["Bonaire, Saint Eustatius and Saba", "ボネール、シント・ユースタティウスおよびサバ"],
  BR: ["Brazil", "ブラジル"],
  BS: ["Bahamas", "バハマ"],
  BT: ["Bhutan", "ブータン"],
  BV: ["Bouvet Island", "ブーベ島"],
  BW: ["Botswana", "ボツワナ"],
  BY: ["Belarus", "ベラルーシ"],
  BZ: ["Belize", "ベリーズ"],
  CA: ["Canada", "カナダ"],
  "CA-AB": ["Alberta"],
  "CA-BC": ["British Columbia"],
  "CA-MB": ["Manitoba"],
  "CA-NB": ["New Brunswick"],
  "CA-NL": ["Newfoundland and Labrador"],
  "CA-NS": ["Nova Scotia"],
  "CA-NT": ["Northwest Territories"],
  "CA-NU": ["Nunavut"],
  "CA-ON": ["Ontario"],
  "CA-PE": ["Prince Edward Island"],
  "CA-QC": ["Quebec"],
  "CA-SK": ["Saskatchewan"],
  "CA-YT": ["Yukon"],
  CC: ["Cocos (Keeling) Islands", "ココス（キーリング）諸島"],
  CD: ["Congo, the Democratic Republic of the", "コンゴ民主共和国"],
  CF: ["Central African Republic", "中央アフリカ"],
  CG: ["Congo", "コンゴ共和国"],
  CH: ["Switzerland", "スイス"],
  CI: ["Côte d'Ivoire", "コートジボワール"],
  CK: ["Cook Islands", "クック諸島"],
  CL: ["Chile", "チリ"],
  CM: ["Cameroon", "カメルーン"],
  CN: ["China", "中華人民共和国 (中国)"],
  "CN-11": ["CN-BJ"],
  "CN-12": ["CN-TJ"],
  "CN-13": ["CN-HE"],
  "CN-14": ["CN-SX"],
  "CN-15": ["CN-NM"],
  "CN-21": ["CN-LN"],
  "CN-22": ["CN-JL"],
  "CN-23": ["CN-HL"],
  "CN-31": ["CN-SH"],
  "CN-32": ["CN-JS"],
  "CN-33": ["CN-ZJ"],
  "CN-34": ["CN-AH"],
  "CN-35": ["CN-FJ"],
  "CN-36": ["CN-JX"],
  "CN-37": ["CN-SD"],
  "CN-41": ["CN-HA"],
  "CN-42": ["CN-HB"],
  "CN-43": ["CN-HN"],
  "CN-44": ["CN-GD"],
  "CN-45": ["CN-GX"],
  "CN-46": ["CN-HI"],
  "CN-50": ["CN-CQ"],
  "CN-51": ["CN-SC"],
  "CN-52": ["CN-GZ"],
  "CN-53": ["CN-YN"],
  "CN-54": ["CN-XZ"],
  "CN-61": ["CN-SN"],
  "CN-62": ["CN-GS"],
  "CN-63": ["CN-QH"],
  "CN-64": ["CN-NX"],
  "CN-65": ["CN-XJ"],
  "CN-71": ["CN-TW"],
  "CN-91": ["CN-HK"],
  "CN-92": ["CN-MO"],
  CO: ["Colombia", "コロンビア"],
  CR: ["Costa Rica", "コスタリカ"],
  CU: ["Cuba", "キューバ"],
  CV: ["Cape Verde", "カボベルデ"],
  CW: ["Curaçao", "キュラソー"],
  CX: ["Christmas Island", "クリスマス島"],
  CY: ["Cyprus", "キプロス"],
  CZ: ["Czech Republic", "チェコ"],
  DE: ["Germany", "ドイツ"],
  "DE-BB": ["Brandenburg"],
  "DE-BE": ["Berlin"],
  "DE-BW": ["Baden-Württemberg"],
  "DE-BY": ["Bavaria"],
  "DE-HB": ["Bremen"],
  "DE-HE": ["Hesse"],
  "DE-HH": ["Hamburg"],
  "DE-MV": ["Mecklenburg-Western Pomerania"],
  "DE-NI": ["Lower Saxony"],
  "DE-NW": ["North Rhine-Westphalia"],
  "DE-RP": ["Rhineland-Palatinate"],
  "DE-SH": ["Schleswig-Holstein"],
  "DE-SL": ["Saarland"],
  "DE-SN": ["Saxony"],
  "DE-ST": ["Saxony-Anhalt"],
  "DE-TH": ["Thuringia"],
  DJ: ["Djibouti", "ジブチ"],
  DK: ["Denmark", "デンマーク"],
  DM: ["Dominica", "ドミニカ"],
  DO: ["Dominican Republic", "ドミニカ共和国"],
  DZ: ["Algeria", "アルジェリア"],
  EC: ["Ecuador", "エクアドル"],
  EE: ["Estonia", "エストニア"],
  EG: ["Egypt", "エジプト"],
  EH: ["Western Sahara", "西サハラ"],
  ER: ["Eritrea", "エリトリア"],
  ES: ["Spain", "スペイン"],
  "ES-AN": ["Andalucía"],
  "ES-AR": ["Aragón"],
  "ES-AS": ["Asturias, Principado de"],
  "ES-CB": ["Cantabria"],
  "ES-CE": ["Ceuta"],
  "ES-CL": ["Castilla y León"],
  "ES-CM": ["Castilla-La Mancha"],
  "ES-CN": ["Canarias"],
  "ES-CT": ["Catalunya"],
  "ES-EX": ["Extremadura"],
  "ES-GA": ["Galicia"],
  "ES-IB": ["Illes Balears"],
  "ES-MC": ["Murcia, Región de"],
  "ES-MD": ["Madrid, Comunidad de"],
  "ES-ML": ["Melilla"],
  "ES-NC": ["Navarra, Comunidad Foral de"],
  "ES-PV": ["País Vasco"],
  "ES-RI": ["La Rioja"],
  "ES-VC": ["Valenciana, Comunidad"],
  ET: ["Ethiopia", "エチオピア"],
  FI: ["Finland", "フィンランド"],
  FJ: ["Fiji", "フィジー"],
  FK: ["Falkland Islands (Malvinas)", "フォークランド（マルビナス）諸島"],
  FM: ["Micronesia, Federated States of", "ミクロネシア連邦"],
  FO: ["Faroe Islands", "フェロー諸島"],
  FR: ["France", "フランス"],
  "FR-A": ["Alsace"],
  "FR-B": ["Aquitaine"],
  "FR-C": ["Auvergne"],
  "FR-D": ["Burgundy"],
  "FR-E": ["Brittany"],
  "FR-F": ["Centre-Val de Loire[note 2]"],
  "FR-G": ["Champagne-Ardenne"],
  "FR-H": ["Corsica"],
  "FR-I": ["Franche-Comté"],
  "FR-J": ["Île-de-France"],
  "FR-K": ["Languedoc-Roussillon"],
  "FR-L": ["Limousin"],
  "FR-M": ["Lorraine"],
  "FR-N": ["Midi-Pyrénées"],
  "FR-O": ["Nord-Pas-de-Calais"],
  "FR-P": ["Lower Normandy"],
  "FR-Q": ["Upper Normandy"],
  "FR-R": ["Pays de la Loire"],
  "FR-S": ["Picardy"],
  "FR-T": ["Poitou-Charentes"],
  "FR-U": ["Provence-Alpes-Côte d'Azur"],
  "FR-V": ["Rhône-Alpes"],
  GA: ["Gabon", "ガボン"],
  GB: ["United Kingdom", "イギリス"],
  GD: ["Grenada", "グレナダ"],
  GE: ["Georgia", "ジョージア"],
  GF: ["French Guiana", "フランス領ギアナ"],
  GG: ["Guernsey", "ガーンジー島"],
  GH: ["Ghana", "ガーナ"],
  GI: ["Gibraltar", "ジブラルタル"],
  GL: ["Greenland", "グリーンランド"],
  GM: ["Gambia", "ガンビア"],
  GN: ["Guinea", "ギニア"],
  GP: ["Guadeloupe", "グアドループ島"],
  GQ: ["Equatorial Guinea", "赤道ギニア"],
  GR: ["Greece", "ギリシャ"],
  GS: ["South Georgia and the South Sandwich Islands", "サウスジョージア・サウスサンドウィッチ諸島"],
  GT: ["Guatemala", "グアテマラ"],
  GU: ["Guam", "グアム"],
  GW: ["Guinea-Bissau", "ギニアビサウ"],
  GY: ["Guyana", "ガイアナ"],
  HK: ["Hong Kong", "香港"],
  HM: ["Heard Island and McDonald Islands", "ハード島・マクドナルド諸島"],
  HN: ["Honduras", "ホンジュラス"],
  HR: ["Croatia", "クロアチア"],
  HT: ["Haiti", "ハイチ"],
  HU: ["Hungary", "ハンガリー"],
  ID: ["Indonesia", "インドネシア"],
  IE: ["Ireland", "アイルランド"],
  IL: ["Israel", "イスラエル"],
  IM: ["Isle of Man", "マン島"],
  IN: ["India", "インド"],
  "IN-AN": ["Andaman and Nicobar Islands"],
  "IN-AP": ["Andhra Pradesh"],
  "IN-AR": ["Arunachal Pradesh"],
  "IN-AS": ["Assam"],
  "IN-BR": ["Bihar"],
  "IN-CH": ["Chandigarh"],
  "IN-CT": ["Chhattisgarh[note 1]"],
  "IN-DD": ["Daman and Diu"],
  "IN-DL": ["Delhi"],
  "IN-DN": ["Dadra and Nagar Haveli"],
  "IN-GA": ["Goa"],
  "IN-GJ": ["Gujarat"],
  "IN-HP": ["Himachal Pradesh"],
  "IN-HR": ["Haryana"],
  "IN-JH": ["Jharkhand"],
  "IN-JK": ["Jammu and Kashmir"],
  "IN-KA": ["Karnataka"],
  "IN-KL": ["Kerala"],
  "IN-LD": ["Lakshadweep"],
  "IN-MH": ["Maharashtra"],
  "IN-ML": ["Meghalaya"],
  "IN-MN": ["Manipur"],
  "IN-MP": ["Madhya Pradesh"],
  "IN-MZ": ["Mizoram"],
  "IN-NL": ["Nagaland"],
  "IN-OR": ["Odisha[note 2]"],
  "IN-PB": ["Punjab"],
  "IN-PY": ["Puducherry"],
  "IN-RJ": ["Rajasthan"],
  "IN-SK": ["Sikkim"],
  "IN-TG": ["Telangana[note 3]"],
  "IN-TN": ["Tamil Nadu"],
  "IN-TR": ["Tripura"],
  "IN-UP": ["Uttar Pradesh"],
  "IN-UT": ["Uttarakhand[note 4]"],
  "IN-WB": ["West Bengal"],
  IO: ["British Indian Ocean Territory", "イギリス領インド洋地域"],
  IQ: ["Iraq", "イラク"],
  IR: ["Iran, Islamic Republic of", "イラン・イスラム共和国"],
  IS: ["Iceland", "アイスランド"],
  IT: ["Italy", "イタリア"],
  "IT-21": ["Piemonte"],
  "IT-23": ["Valle d'Aosta, Val d'Aoste (fr)"],
  "IT-25": ["Lombardia"],
  "IT-32": ["Trentino-Alto Adige, Trentino-Südtirol (de)"],
  "IT-34": ["Veneto"],
  "IT-36": ["Friuli-Venezia Giulia"],
  "IT-42": ["Liguria"],
  "IT-45": ["Emilia-Romagna"],
  "IT-52": ["Toscana"],
  "IT-55": ["Umbria"],
  "IT-57": ["Marche"],
  "IT-62": ["Lazio"],
  "IT-65": ["Abruzzo"],
  "IT-67": ["Molise"],
  "IT-72": ["Campania"],
  "IT-75": ["Puglia"],
  "IT-77": ["Basilicata"],
  "IT-78": ["Calabria"],
  "IT-82": ["Sicilia"],
  "IT-88": ["Sardegna"],
  JE: ["Jersey", "ジャージー島"],
  JM: ["Jamaica", "ジャマイカ"],
  JO: ["Jordan", "ヨルダン"],
  JP: ["Japan", "日本"],
  "JP-01": ["北海道"],
  "JP-02": ["青森県"],
  "JP-03": ["岩手県"],
  "JP-04": ["宮城県"],
  "JP-05": ["秋田県"],
  "JP-06": ["山形県"],
  "JP-07": ["福島県"],
  "JP-08": ["茨城県"],
  "JP-09": ["栃木県"],
  "JP-10": ["群馬県"],
  "JP-11": ["埼玉県"],
  "JP-12": ["千葉県"],
  "JP-13": ["東京都"],
  "JP-14": ["神奈川県"],
  "JP-15": ["新潟県"],
  "JP-16": ["富山県"],
  "JP-17": ["石川県"],
  "JP-18": ["福井県"],
  "JP-19": ["山梨県"],
  "JP-20": ["長野県"],
  "JP-21": ["岐阜県"],
  "JP-22": ["静岡県"],
  "JP-23": ["愛知県"],
  "JP-24": ["三重県"],
  "JP-25": ["滋賀県"],
  "JP-26": ["京都府"],
  "JP-27": ["大阪府"],
  "JP-28": ["兵庫県"],
  "JP-29": ["奈良県"],
  "JP-30": ["和歌山県"],
  "JP-31": ["鳥取県"],
  "JP-32": ["島根県"],
  "JP-33": ["岡山県"],
  "JP-34": ["広島県"],
  "JP-35": ["山口県"],
  "JP-36": ["徳島県"],
  "JP-37": ["香川県"],
  "JP-38": ["愛媛県"],
  "JP-39": ["高知県"],
  "JP-40": ["福岡県"],
  "JP-41": ["佐賀県"],
  "JP-42": ["長崎県"],
  "JP-43": ["熊本県"],
  "JP-44": ["大分県"],
  "JP-45": ["宮崎県"],
  "JP-46": ["鹿児島県"],
  "JP-47": ["沖縄県"],
  KE: ["Kenya", "ケニア"],
  KG: ["Kyrgyzstan", "キルギス"],
  KH: ["Cambodia", "カンボジア"],
  KI: ["Kiribati", "キリバス"],
  KM: ["Comoros", "コモロ"],
  KN: ["Saint Kitts and Nevis", "セントクリストファー・ネビス"],
  KP: ["Korea, Democratic People's Republic of", "朝鮮民主主義人民共和国 (北朝鮮)"],
  KR: ["Korea, Republic of", "大韓民国 (韓国)"],
  KW: ["Kuwait", "クウェート"],
  KY: ["Cayman Islands", "ケイマン諸島"],
  KZ: ["Kazakhstan", "カザフスタン"],
  LA: ["Lao People's Democratic Republic", "ラオス人民民主共和国"],
  LB: ["Lebanon", "レバノン"],
  LC: ["Saint Lucia", "セントルシア"],
  LI: ["Liechtenstein", "リヒテンシュタイン"],
  LK: ["Sri Lanka", "スリランカ"],
  LR: ["Liberia", "リベリア"],
  LS: ["Lesotho", "レソト"],
  LT: ["Lithuania", "リトアニア"],
  LU: ["Luxembourg", "ルクセンブルク"],
  LV: ["Latvia", "ラトビア"],
  LY: ["Libyan Arab Jamahiriya", "リビア"],
  MA: ["Morocco", "モロッコ"],
  MC: ["Monaco", "モナコ"],
  MD: ["Moldova, Republic of", "モルドバ共和国"],
  ME: ["Montenegro", "モンテネグロ"],
  MF: ["Saint Martin (French part)", "サン・マルタン島"],
  MG: ["Madagascar", "マダガスカル"],
  MH: ["Marshall Islands", "マーシャル諸島"],
  MK: ["North Macedonia, Republic of", " 北マケドニア共和国"],
  ML: ["Mali", "マリ"],
  MM: ["Myanmar", "ミャンマー"],
  MN: ["Mongolia", "モンゴル"],
  MO: ["Macao", "マカオ"],
  MP: ["Northern Mariana Islands", "北マリアナ諸島"],
  MQ: ["Martinique", "マルティニク"],
  MR: ["Mauritania", "モーリタニア"],
  MS: ["Montserrat", "モントセラト"],
  MT: ["Malta", "マルタ"],
  MU: ["Mauritius", "モーリシャス"],
  MV: ["Maldives", "モルディブ"],
  MW: ["Malawi", "マラウイ"],
  MX: ["Mexico", "メキシコ"],
  MY: ["Malaysia", "マレーシア"],
  MZ: ["Mozambique", "モザンビーク"],
  NA: ["Namibia", "ナミビア"],
  NC: ["New Caledonia", "ニューカレドニア"],
  NE: ["Niger", "ニジェール"],
  NF: ["Norfolk Island", "ノーフォーク島"],
  NG: ["Nigeria", "ナイジェリア"],
  NI: ["Nicaragua", "ニカラグア"],
  NL: ["Netherlands", "オランダ"],
  NO: ["Norway", "ノルウェー"],
  NP: ["Nepal", "ネパール"],
  NR: ["Nauru", "ナウル"],
  NU: ["Niue", "ニウエ"],
  NZ: ["New Zealand", "ニュージーランド"],
  OM: ["Oman", "オマーン"],
  PA: ["Panama", "パナマ"],
  PE: ["Peru", "ペルー"],
  PF: ["French Polynesia", "フランス領ポリネシア"],
  PG: ["Papua New Guinea", "パプアニューギニア"],
  PH: ["Philippines", "フィリピン"],
  PK: ["Pakistan", "パキスタン"],
  PL: ["Poland", "ポーランド"],
  PM: ["Saint Pierre and Miquelon", "サンピエール・ミクロン島"],
  PN: ["Pitcairn", "ピトケアン"],
  PR: ["Puerto Rico", "プエルトリコ"],
  PS: ["Palestinian Territory, Occupied", "パレスチナ"],
  PT: ["Portugal", "ポルトガル"],
  PW: ["Palau", "パラオ"],
  PY: ["Paraguay", "パラグアイ"],
  QA: ["Qatar", "カタール"],
  RE: ["Réunion", "レユニオン"],
  RO: ["Romania", "ルーマニア"],
  RS: ["Serbia", "セルビア"],
  RU: ["Russian Federation", "ロシア"],
  "RU-AD": ["Adygeya, Respublika"],
  "RU-AL": ["Altay, Respublika"],
  "RU-ALT": ["Altayskiy kray"],
  "RU-AMU": ["Amurskaya oblast'"],
  "RU-ARK": ["Arkhangel'skaya oblast'"],
  "RU-AST": ["Astrakhanskaya oblast'"],
  "RU-BA": ["Bashkortostan, Respublika"],
  "RU-BEL": ["Belgorodskaya oblast'"],
  "RU-BRY": ["Bryanskaya oblast'"],
  "RU-BU": ["Buryatiya, Respublika"],
  "RU-CE": ["Chechenskaya Respublika"],
  "RU-CHE": ["Chelyabinskaya oblast'"],
  "RU-CHU": ["Chukotskiy avtonomnyy okrug"],
  "RU-CU": ["Chuvashskaya Respublika"],
  "RU-DA": ["Dagestan, Respublika"],
  "RU-IN": ["Ingushetiya, Respublika"],
  "RU-IRK": ["Irkutskaya oblast'"],
  "RU-IVA": ["Ivanovskaya oblast'"],
  "RU-KAM": ["Kamchatskiy kray"],
  "RU-KB": ["Kabardino-Balkarskaya Respublika"],
  "RU-KC": ["Karachayevo-Cherkesskaya Respublika"],
  "RU-KDA": ["Krasnodarskiy kray"],
  "RU-KEM": ["Kemerovskaya oblast'"],
  "RU-KGD": ["Kaliningradskaya oblast'"],
  "RU-KGN": ["Kurganskaya oblast'"],
  "RU-KHA": ["Khabarovskiy kray"],
  "RU-KHM": ["Khanty-Mansiyskiy avtonomnyy okrug"],
  "RU-KIR": ["Kirovskaya oblast'"],
  "RU-KK": ["Khakasiya, Respublika"],
  "RU-KL": ["Kalmykiya, Respublika"],
  "RU-KLU": ["Kaluzhskaya oblast'"],
  "RU-KO": ["Komi, Respublika"],
  "RU-KOS": ["Kostromskaya oblast'"],
  "RU-KR": ["Kareliya, Respublika"],
  "RU-KRS": ["Kurskaya oblast'"],
  "RU-KYA": ["Krasnoyarskiy kray"],
  "RU-LEN": ["Leningradskaya oblast'"],
  "RU-LIP": ["Lipetskaya oblast'"],
  "RU-MAG": ["Magadanskaya oblast'"],
  "RU-ME": ["Mariy El, Respublika"],
  "RU-MO": ["Mordoviya, Respublika"],
  "RU-MOS": ["Moskovskaya oblast'"],
  "RU-MOW": ["Moskva"],
  "RU-MUR": ["Murmanskaya oblast'"],
  "RU-NEN": ["Nenetskiy avtonomnyy okrug"],
  "RU-NGR": ["Novgorodskaya oblast'"],
  "RU-NIZ": ["Nizhegorodskaya oblast'"],
  "RU-NVS": ["Novosibirskaya oblast'"],
  "RU-OMS": ["Omskaya oblast'"],
  "RU-ORE": ["Orenburgskaya oblast'"],
  "RU-ORL": ["Orlovskaya oblast'"],
  "RU-PER": ["Permskiy kray"],
  "RU-PNZ": ["Penzenskaya oblast'"],
  "RU-PRI": ["Primorskiy kray"],
  "RU-PSK": ["Pskovskaya oblast'"],
  "RU-ROS": ["Rostovskaya oblast'"],
  "RU-RYA": ["Ryazanskaya oblast'"],
  "RU-SA": ["Saha, Respublika"],
  "RU-SAK": ["Sakhalinskaya oblast'"],
  "RU-SAM": ["Samarskaya oblast'"],
  "RU-SAR": ["Saratovskaya oblast'"],
  "RU-SE": ["Severnaya Osetiya, Respublika"],
  "RU-SMO": ["Smolenskaya oblast'"],
  "RU-SPE": ["Sankt-Peterburg"],
  "RU-STA": ["Stavropol'skiy kray"],
  "RU-SVE": ["Sverdlovskaya oblast'"],
  "RU-TA": ["Tatarstan, Respublika"],
  "RU-TAM": ["Tambovskaya oblast'"],
  "RU-TOM": ["Tomskaya oblast'"],
  "RU-TUL": ["Tul'skaya oblast'"],
  "RU-TVE": ["Tverskaya oblast'"],
  "RU-TY": ["Tyva, Respublika"],
  "RU-TYU": ["Tyumenskaya oblast'"],
  "RU-UD": ["Udmurtskaya Respublika"],
  "RU-ULY": ["Ul'yanovskaya oblast'"],
  "RU-VGG": ["Volgogradskaya oblast'"],
  "RU-VLA": ["Vladimirskaya oblast'"],
  "RU-VLG": ["Vologodskaya oblast'"],
  "RU-VOR": ["Voronezhskaya oblast'"],
  "RU-YAN": ["Yamalo-Nenetskiy avtonomnyy okrug"],
  "RU-YAR": ["Yaroslavskaya oblast'"],
  "RU-YEV": ["Yevreyskaya avtonomnaya oblast'"],
  "RU-ZAB": ["Zabaykal'skiy kray"],
  RW: ["Rwanda", "ルワンダ"],
  SA: ["Saudi Arabia", "サウジアラビア"],
  SB: ["Solomon Islands", "ソロモン諸島"],
  SC: ["Seychelles", "セーシェル"],
  SD: ["Sudan", "スーダン"],
  SE: ["Sweden", "スウェーデン"],
  SG: ["Singapore", "シンガポール"],
  SH: ["Saint Helena, Ascension and Tristan da Cunha", "セントヘレナ・アセンションおよびトリスタンダクーニャ"],
  SI: ["Slovenia", "スロベニア"],
  SJ: ["Svalbard and Jan Mayen", "スバールバル諸島・ヤンマイエン島"],
  SK: ["Slovakia", "スロバキア"],
  SL: ["Sierra Leone", "シエラレオネ"],
  SM: ["San Marino", "サンマリノ"],
  SN: ["Senegal", "セネガル"],
  SO: ["Somalia", "ソマリア"],
  SR: ["Suriname", "スリナム"],
  SS: ["South Sudan", "南スーダン"],
  ST: ["Sao Tome and Principe", "サントメ・プリンシペ"],
  SV: ["El Salvador", "エルサルバドル"],
  SX: ["Sint Maarten (Dutch part)", "シント・マールテン（オランダ領）"],
  SY: ["Syrian Arab Republic", "シリア・アラブ共和国"],
  SZ: ["Eswatini", "エスワティニ"],
  TC: ["Turks and Caicos Islands", "タークスカイコス諸島"],
  TD: ["Chad", "チャド"],
  TF: ["French Southern Territories", "フランス領南方・南極地域"],
  TG: ["Togo", "トーゴ"],
  TH: ["Thailand", "タイ"],
  TJ: ["Tajikistan", "タジキスタン"],
  TK: ["Tokelau", "トケラウ諸島"],
  TL: ["Timor-Leste", "東ティモール"],
  TM: ["Turkmenistan", "トルクメニスタン"],
  TN: ["Tunisia", "チュニジア"],
  TO: ["Tonga", "トンガ"],
  TR: ["Turkey", "トルコ"],
  TT: ["Trinidad and Tobago", "トリニダード・トバゴ"],
  TV: ["Tuvalu", "ツバル"],
  TW: ["Taiwan, Province of China", "台湾"],
  TZ: ["Tanzania, United Republic of", "タンザニア"],
  UA: ["Ukraine", "ウクライナ"],
  UG: ["Uganda", "ウガンダ"],
  UM: ["United States Minor Outlying Islands", "合衆国領有小離島"],
  US: ["United States", "アメリカ合衆国"],
  "US-AK": ["Alaska"],
  "US-AL": ["Alabama"],
  "US-AR": ["Arkansas"],
  "US-AS": ["American Samoa"],
  "US-AZ": ["Arizona"],
  "US-CA": ["California"],
  "US-CO": ["Colorado"],
  "US-CT": ["Connecticut"],
  "US-DC": ["District of Columbia"],
  "US-DE": ["Delaware"],
  "US-FL": ["Florida"],
  "US-GA": ["Georgia"],
  "US-GU": ["Guam"],
  "US-HI": ["Hawaii"],
  "US-IA": ["Iowa"],
  "US-ID": ["Idaho"],
  "US-IL": ["Illinois"],
  "US-IN": ["Indiana"],
  "US-KS": ["Kansas"],
  "US-KY": ["Kentucky"],
  "US-LA": ["Louisiana"],
  "US-MA": ["Massachusetts"],
  "US-MD": ["Maryland"],
  "US-ME": ["Maine"],
  "US-MI": ["Michigan"],
  "US-MN": ["Minnesota"],
  "US-MO": ["Missouri"],
  "US-MP": ["Northern Mariana Islands"],
  "US-MS": ["Mississippi"],
  "US-MT": ["Montana"],
  "US-NC": ["North Carolina"],
  "US-ND": [" North Dakota"],
  "US-NE": ["Nebraska"],
  "US-NH": ["New Hampshire"],
  "US-NJ": ["New Jersey"],
  "US-NM": ["New Mexico"],
  "US-NV": ["Nevada"],
  "US-NY": ["New York"],
  "US-OH": ["Ohio"],
  "US-OK": ["Oklahoma"],
  "US-OR": ["Oregon"],
  "US-PA": ["Pennsylvania"],
  "US-PR": ["Puerto Rico"],
  "US-RI": ["Rhode Island"],
  "US-SC": ["South Carolina"],
  "US-SD": ["South Dakota"],
  "US-TN": ["Tennessee"],
  "US-TX": ["Texas"],
  "US-UM": ["United States Minor Outlying Islands"],
  "US-UT": ["Utah"],
  "US-VA": ["Virginia"],
  "US-VI": ["Virgin Islands, U.S."],
  "US-VT": ["Vermont"],
  "US-WA": ["Washington"],
  "US-WI": ["Wisconsin"],
  "US-WV": ["West Virginia"],
  "US-WY": ["Wyoming"],
  UY: ["Uruguay", "ウルグアイ"],
  UZ: ["Uzbekistan", "ウズベキスタン"],
  VA: ["Holy See (Vatican City State)", "バチカン市国"],
  VC: ["Saint Vincent and the Grenadines", "セントビンセント・グレナディーン"],
  VE: ["Venezuela", "ベネズエラ・ボリバル共和国"],
  VG: ["Virgin Islands, British", "イギリス領バージン諸島"],
  VI: ["Virgin Islands, U.S.", "アメリカ領バージン諸島"],
  VN: ["Viet Nam", "ベトナム"],
  VU: ["Vanuatu", "バヌアツ"],
  WF: ["Wallis and Futuna", "ワリスフュチュナ"],
  WS: ["Samoa", "サモア"],
  YE: ["Yemen", "イエメン"],
  YT: ["Mayotte", "マヨット島"],
  ZA: ["South Africa", "南アフリカ共和国"],
  ZM: ["Zambia", "ザンビア"],
  ZW: ["Zimbabwe", "ジンバブエ"],
};
export default countries;
