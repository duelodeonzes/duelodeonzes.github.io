const CLUBS=["1.FC K'lautern", "1860 Munich", "A. Bucaramanga", "A. Klagenfurt", "AC Ajaccio", "AC Arles-Avignon", "AC Horsens", "AC Milan", "ACSM Poli Iasi", "AD Alcorcón", "ADO Den Haag", "AE Larisa", "AEK Athens", "AEK Larnaca", "AIK", "AJ Auxerre", "AOK Kerkyra", "APOEL Nicosia", "AS Livorno", "AS Nancy", "ASEC Mimosas", "AVS", "AZ Alkmaar", "Aalborg BK", "Aalesunds FK", "Aarhus GF", "Aberdeen FC", "Académica", "Académico Viseu", "Adana Demirspor", "Adanaspor", "Adelaide United", "Ajax", "Akhisarspor", "Akhmat Grozny", "Akron Tolyatti", "Al-Ahli", "Al-Ain", "Al-Arabi SC", "Al-Duhail SC", "Al-Ettifaq", "Al-Fateh", "Al-Fayha", "Al-Gharafa", "Al-Hazem", "Al-Hilal", "Al-Ittihad", "Al-Jazira", "Al-Khaleej", "Al-Kholood", "Al-Najma", "Al-Nasr", "Al-Nassr", "Al-Okhdood", "Al-Orobah", "Al-Qadsiah", "Al-Raed", "Al-Rayyan", "Al-Riyadh", "Al-Sadd", "Al-Shabab", "Al-Taawoun", "Al-Wasl", "Al-Wehda", "Alania", "Alanyaspor", "Alavés", "Albacete", "Albirex Niigata", "Aldosivi", "Alianza FC", "Almere City", "Almería", "Altay SK", "Alverca", "Amiens SC", "Amkar Perm", "América", "América-MG", "América-RN", "Anderlecht", "Angers SCO", "Ankaragücü", "Anorthosis", "Antalyaspor", "Anzhi", "Anápolis", "Apol. Limassol", "Apollon Smyrnis", "Argentinos Jrs.", "Aris Saloniki", "Arm. Bielefeld", "Arouca", "Arsenal", "Arsenal Kyiv", "Arsenal Sarandí", "Arsenal Tula", "Ascoli", "Asteras Tripoli", "Aston Villa", "Atalanta", "Athletic Bilbao", "Athletico-PR", "Atl. Levante", "Atl. Madrileño", "Atl. Malagueño", "Atl. Nacional", "Atl. Tucumán", "Atlanta", "Atlas", "Atlético de Madrid", "Atlético-GO", "Atlético-MG", "Atromitos", "Auckland FC", "Augsburg", "Austin", "Austria Vienna", "Avellino", "Avispa Fukuoka", "B SAD", "BB Erzurumspor", "BJ Guoan", "Balikesirspor", "Baltika", "Banfield", "Banik Ostrava", "Barcelona", "Bari", "Barnsley", "Barracas C.", "Basaksehir", "Basel", "Bayern", "Beerschot AC", "Beerschot VA", "Beira-Mar", "Belenenses", "Belgrano", "Benevento", "Benfica", "Besiktas", "Betis", "Betis Deportivo", "Bilbao Athletic", "Birmingham", "Blackburn", "Blackpool", "Blau Weiss Linz", "Boavista", "Boca Juniors", "Bodrum FK", "Bodø/Glimt", "Bohemians 1905", "Bologna", "Bolton", "Bordéus", "Borussia Dortmund", "Borussia M'gladbach", "Botafogo", "Bournemouth", "Boyacá Chicó", "Bradford", "Braga", "Brentford", "Brescia", "Brighton", "Brisbane Roar", "Bristol City", "Bristol Rovers", "Brommapojkarna", "Bryne", "Bröndby IF", "Bucheon FC", "Burgos CF", "Burnley", "Bursaspor", "Burton Albion", "Bury", "C. Budejovice", "C. Rizespor", "CA Osasuna Yout", "CA Talleres", "CD América", "CD Basconia", "CD Cruz Azul", "CD Leganés", "CD Lugo", "CD Mirandés", "CD Tenerife", "CF Fuenlabrada", "CFR Cluj", "CRB", "CS Sedan", "CSKA de Moscovo", "CSKA-Sofia", "Cagliari", "Cardiff", "Carlisle United", "Carpi", "Casa Pia", "Catania", "Ceará SC", "Celta", "Celtic", "Central Coast", "Central Córdoba", "Cercle Brugge", "Cerezo Osaka", "Cesena", "Chamois Niort", "Chapecoense", "Charlotte", "Charlton", "Chaves", "Chelsea", "Cheltenham", "Chicago", "Chievo", "Chivas", "Chornomorets", "Cincinnati", "Cittadella", "Clermont Foot", "Club Brugge", "Club NXT", "Club Tijuana", "Colo-Colo", "Colon", "Colorado", "Columbus", "Colónia", "Como", "Copenhagen", "Corinthians", "Coritiba FC", "Coventry", "Cracovia", "Cremonese", "Crewe Alexandra", "Criciúma", "Crotone", "Cruzeiro", "Crystal Palace", "Cukaricki", "Cádiz CF", "Córdoba CF", "D.C. United", "Daegu FC", "Daejeon Hana C.", "Dallas", "Damac FC", "Danubio FC", "De Graafschap", "Defensa", "Defensor SC", "Degerfors", "Denizlispor", "Dep. Aragón", "Deportes Tolima", "Deportivo Cali", "Deportivo Pasto", "Deportivo da Corunha", "Derby", "Desna", "Desportivo das Aves", "Dijon", "Dinamo Makhach.", "Djurgården", "Dnipro", "Doncaster", "Dukla Prague", "Dundee FC", "Dundee United", "Dynamo Dresden", "Dínamo de Kiev", "Dínamo de Moscovo", "Dínamo de Zagreb", "E. Braunschweig", "EC Bahia", "EC Vitória", "Eintracht Frankfurt", "Elazigspor", "Elche CF", "Elfsborg", "Empoli", "Envigado", "Epicentr", "Ergotelis", "Esbjerg fB", "Eskisehirspor", "Espanyol", "Estoril Praia", "Estrasburgo", "Estrela Vermelha", "Estrela da Amadora", "Estudiantes LP", "Estudiantes RC", "Estugarda", "Everton", "Excelsior", "Eyüpspor", "F. Düsseldorf", "FC Anyang", "FC Arges", "FC Botosani", "FC Buzau", "FC Cartagena", "FC Dinamo", "FC Dordrecht", "FC Emmen", "FC Fredericia", "FC Groningen", "FC Helsingør", "FC Hermannstadt", "FC Ingolstadt", "FC Istres", "FC Juárez", "FC Liefering", "FC Lorient", "FC Lugano", "FC Luzern", "FC Mariupol", "FC Metz", "FC Oleksandriya", "FC Porto", "FC Rapid 1923", "FC Seoul", "FC Sevastopol", "FC Sion", "FC Sochaux", "FC St. Gallen", "FC Thun", "FC Tokyo", "FC Twente", "FC Viitorul", "FC Volendam", "FC Winterthur", "FC Zürich", "FCSB", "FCV Dender EH", "FK Csikszereda", "FK Sochi", "FK TSC", "Falkirk", "Famalicão", "Farense", "Fastav Zlin", "Fehérvár", "Feirense", "Felgueiras", "Fenerbahçe", "Ferencváros", "Ferroviária", "Feyenoord", "Figueirense FC", "Fiorentina", "Flamengo", "Fluminense", "Foggia", "Fortaleza", "Fortaleza CEIF", "Fortuna Sittard", "Freamunde", "Fredrikstad FK", "Freiburg", "Frosinone", "Fulham", "G. Ajaccio", "GAIS", "GKS Katowice", "Galatasaray", "Gamba Osaka", "Gangwon FC", "Gaziantep FK", "Gaziantepspor", "Genclerbirligi", "Genk", "Genoa", "Getafe", "Gil Vicente", "Gimcheon Sangmu", "Gimnasia", "Gimnasia (M)", "Gimnàstic", "Giresunspor", "Girona", "Go Ahead Eagles", "Godoy Cruz", "Goiás", "Granada", "Grasshoppers", "Grazer AK 1902", "Grenoble", "Greuther Fürth", "Grêmio", "Guarani", "Guaratinguetá", "Guingamp", "Gwangju FC", "Génération Foot", "Górnik Zabrze", "Göztepe", "HNK Gorica", "HNK Rijeka", "Hajduk Split", "Halmstads BK", "HamKam", "Hamburgo", "Hamilton Acad.", "Hammarby", "Hatayspor", "Haugesund", "Heart of Midl.", "Heerenveen", "Heidenheim", "Hellas Verona", "Heracles Almelo", "Hertha BSC", "Hibernian FC", "Hobro IK", "Hoffenheim", "Holstein Kiel", "Houston", "Hradec Kralove", "Huddersfield", "Hull City", "Huracán", "Hvidovre", "Häcken", "Hércules CF", "IFK Göteborg", "IK Start", "IMT Belgrad", "Incheon Utd.", "Ind. Rivadavia", "Indep. Medellín", "Indep. Santa Fe", "Independiente", "Instituto ACC", "Inter", "Inter Bogotá", "Inter Miami", "Internacional", "Inverness CT", "Ionikos Nikeas", "Ipatinga", "Ipswich", "Iraklis", "Istanbulspor", "Ituano", "J. Regensburg", "JEF Utd. Chiba", "Jablonec", "Jagiellonia", "Javor-Matis", "Jedinstvo Ub", "Jeju United", "Jeonbuk Hyundai", "Junior FC", "Juve Next Gen", "Juve Stabia", "Juventude", "Juventus", "K. Erciyesspor", "KAA Gent", "KAS Eupen", "KFUM Oslo", "KS Samara", "KSC Lokeren", "KV Kortrijk", "KV Mechelen", "KV Oostende", "KVC Westerlo", "Kallithea", "Kalmar FF", "Kansas City", "Karabükspor", "Karagümrük", "Karlsruher SC", "Karpaty Lviv", "Karvina", "Kashima Antlers", "Kashiwa Reysol", "Kasimpasa", "Kawasaki Front.", "Kayserispor", "Khimki", "Kifisia", "Kilmarnock FC", "Kocaelispor", "Kolos Kovalivka", "Konyaspor", "Korona Kielce", "Krasnodar", "Kristiansund BK", "Kryvbas", "Kuban Krasnodar", "Kyoto Sanga", "LA Galaxy", "LAFC", "LASK", "LB Châteauroux", "LDU Quito", "LNZ Cherkasy", "La Louvière", "Lanús", "Las Palmas", "Latina Calcio", "Lausanne-Sport", "Lazio", "Le Havre AC", "Le Mans FC", "Lecce", "Lech Poznan", "Lechia Gdansk", "Leeds", "Legia Warszawa", "Leicester", "Leiria", "Leixões", "Lens", "Levadiakos", "Levante", "Leverkusen", "Levski Sofia", "Leyton Orient", "León", "Libertad", "Lierse SK", "Lille", "Lillestrøm SK", "Liverpool", "Livingston FC", "Llaneros FC", "Loko Moscow", "Lommel SK", "Londrina-PR", "Ludogorets", "Luton", "Lyngby BK", "Lyon", "M. Tel Aviv", "MK Dons", "Macarthur", "Maccabi Haifa", "Machida Zelvia", "Mafra", "Mainz", "Maiorca", "Malmö", "Manchester City", "Manchester United", "Marselha", "Marítimo", "Mazatlán FC", "Melb. Victory", "Melbourne City", "Mersin IY", "Metalist", "Metalist 1925", "Metalist Kharkiv", "Metaloglobus", "Metalurg D.", "Metalurg Z.", "Middlesbrough", "Midtjylland", "Millonarios", "Millwall", "Minnesota", "Mirassol-SP", "Mito HollyHock", "Mjällby AIF", "Mlada Boleslav", "Mladost", "Modena", "Molde FK", "Monterrey", "Montpellier", "Montréal", "Monza", "Mordovia", "Moreirense", "Motherwell FC", "Motor Lublin", "Mouscron", "Málaga", "Mónaco", "NAC Breda", "NEC Nijmegen", "NEOM SC", "NK Istra", "NK Lokomotiva", "NK Maribor", "NK Osijek", "NK Varazdin", "NK Vukovar 1991", "Nacional", "Nacional (Uruguai)", "Nagoya Grampus", "Nantes", "Napoli", "Napredak", "Nashville", "Naval 1º de Maio", "Necaxa", "Neuchâtel Xamax", "New England", "New York", "New York City", "Newcastle", "Newell's", "Nice", "Nordsjaelland", "Norrköping", "Northampton", "Norwich", "Nottingham Forest", "Novara", "Novi Pazar", "Nuremberga", "Náutico", "Nîmes Olympique", "OFI Crete", "OFK Beograd", "OH Leuven", "Odense BK", "Oeste", "Oldham Athletic", "Olhanense", "Olimpik Donetsk", "Oliveirense", "Olympiacos", "Omonia Nicosia", "Once Caldas", "Orduspor", "Orenburg", "Orlando City", "Osasuna", "Osmanlispor FK", "Otelul Galati", "Oxford United", "PAOK", "PAS Giannina", "PAS Lamia", "PEC Zwolle", "PFC Lviv", "PSG", "PSV", "Pachuca", "Padova", "Pafos", "Palermo", "Palmeiras", "Panathinaikos", "Panetolikos", "Panionios", "Panserraikos", "Panthrakikos", "Paraná", "Pardubice", "Pari NN", "Paris FC", "Parma", "Partick Thistle", "Partizan", "Pau FC", "Paulista-SP", "Paços de Ferreira", "Penafiel", "Pendikspor", "Pereira", "Perth Glory", "Perugia", "Pescara", "Peterborough", "Petrolul", "Peñarol", "Philadelphia", "Piacenza", "Piast Gliwice", "Pisa", "Platanias", "Platense", "Plymouth", "Pogon Szczecin", "Pohang Steelers", "Polissya", "Ponferradina", "Ponte Preta", "Portimonense", "Portland", "Portsmouth", "Portuguesa", "Prato", "Preston", "Pro Vercelli", "Puebla FC", "QPR", "Qarabağ", "Qatar SC", "Querétaro FC", "R Charleroi SC", "RAEC Mons", "RB Bragantino", "RB Leipzig", "RFC Seraing", "RKC Waalwijk", "RWDM", "Racing", "Racing Club", "Rad", "Radnicki 1923", "Radnicki Nis", "Radomiak", "Raków", "Randers FC", "Rangers", "Rapid Vienna", "Rayo Vallecano", "Reading", "Real Madrid", "Real Murcia", "Real Oviedo", "Real SC", "Real Sociedad", "Recre Granada", "Red Star FC", "Reggiana", "Reggina", "Remo", "Rennes", "Rio Ave", "Rionegro Águila", "River Plate", "Roda JC", "Rodez AF", "Roma", "Rosario Central", "Rosenborg BK", "Ross County", "Rostov", "Rotherham", "Rotor Volgograd", "Royal Antwerp", "Rubin Kazan", "SC Bastia", "SC Cambuur", "SC Covilhã", "SC Dnipro-1", "SC Paderborn", "SC Tavriya", "SCR Altach", "SD Eibar", "SD Huesca", "SH Shenhua", "SJ Earthquakes", "SK Brann", "SKA Khabarovsk", "SM Caen", "SPAL", "SV Ried", "SV Sandhausen", "Saint-Étienne", "Salernitana", "Salgueiros", "Salt Lake", "Salzburg", "Sampdoria", "Samsunspor", "San Diego", "San Lorenzo", "San Luis", "San Martín (SJ)", "Sandefjord", "Sanf. Hiroshima", "Santa Clara", "Santos", "Santos Laguna", "Saragoça", "Sarmiento Junin", "Sassuolo", "Schalke", "Scunthorpe Utd.", "Seattle", "Sepsi OSK", "Servette FC", "Sevilha", "Shakhtar", "Sheff Wed", "Sheffield United", "Shimizu S-Pulse", "Shonan Bellmare", "Shrewsbury", "Siena", "Sigma Olomouc", "Silkeborg IF", "Sint-Truiden", "Sirius", "Sivasspor", "Slask Wroclaw", "Slaven Belupo", "Slavia de Praga", "Slovacko", "Slovan Liberec", "Southampton", "Sparta Prague", "Sparta Roterdão", "Spartak", "Spartak de Moscovo", "Spezia", "Sport Recife", "Sporting", "Sporting de Gijón", "St. Johnstone", "St. Louis CITY", "St. Mirren", "St. Pauli", "Stade Brestois", "Stade Lavallois", "Stade Reims", "Stal Mielec", "Standard de Liège", "Stevenage", "Stockport", "Stoke City", "Strømsgodset", "Sturm Graz", "Sunderland", "Suwon FC", "Swansea", "Swindon Town", "Sydney FC", "São Caetano", "São Paulo", "Sönderjyske", "TSV Hartberg", "Tambov", "Telstar", "Tenerife", "Teplice", "Ternana", "Tigre", "Tigres UANL", "Tokyo Verdy", "Toluca", "Tom Tomsk", "Tondela", "Torino", "Toronto", "Torpedo Moskau", "Torreense", "Tosno", "Tottenham", "Toulouse", "Tours FC", "Trabzonspor", "Trapani", "Treviso", "Triestina", "Trofense", "Tromsø IL", "Troyes", "U Cluj", "U. de Chile", "UNAM Pumas", "US Boulogne", "US Créteil-L", "US Orléans", "USL Dunkerque", "UTA Arad", "Udinese", "Ufa", "Ulsan Hyundai", "Union Berlin", "Union SG", "Unirea Slobozia", "Univ. Craiova", "União Madeira", "Unión Santa Fe", "Ural", "Urawa Reds", "Utrecht", "V-V. Nagasaki", "VVV-Venlo", "Valenciennes FC", "Valladolid", "Valladolid Prom", "Valência", "Vancouver", "Varese", "Varzim", "Vasco da Gama", "Vejle BK", "Vendsyssel FF", "Venezia", "Veres Rivne", "Veria NPS", "VfL Bochum", "VfL Osnabrück", "Viborg FF", "Viking FK", "Viktoria Plzeň", "Vila Nova FC", "Vilafranquense", "Villarreal", "Vissel Kobe", "Vitesse", "Vitória de Guimarães", "Vitória de Setúbal", "Vizela", "Vojvodina", "Volos NFC", "Vorskla Poltava", "Värnamo", "Västerås SK", "Vålerenga", "Vélez Sarsfield", "WSG Tirol", "Waasland-Beveren", "Walsall", "Watford", "Wellington", "Werder Bremen", "West Brom", "West Ham", "Western Sydney", "Western United", "Widzew Lodz", "Wigan", "Wisla Kraków", "Wisla Plock", "Wolfsberger AC", "Wolfsburgo", "Wolverhampton", "Wrexham", "Wycombe", "Xanthi", "Y. Malatyaspor", "Yeovil Town", "Yokohama F. M.", "Yokohama FC", "Young Boys", "Yverdon Sport", "Zaglebie Lubin", "Zelez. Pancevo", "Zenit", "Zenit S-Pb", "Zorya Lugansk", "Zulte Waregem", "Évian", "Örgryte", "Östers IF", "Ümraniyespor", "Al-Shamal SC", "Abha", "Corum FK", "Wydad AC", "Al-Diraiyah FC", "Al-Wahda", "Aktobe", "A. Baghdad SC", "Kaysar", "Persepolis FC", "Al-Ahli SC", "Santa Lucia FC", "Dep. Maipú", "Boston River", "Krasava ENY", "DL Yingbo", "GS Marko", "Derry City", "Al-Wakrah SC", "ML Vitebsk", "Júbilo Iwata", "Puerto Cabello", "ZJ FC", "AF Elbasani", "Eldense", "Arezzo", "Kalba FC", "Castellón", "Thór", "Lincoln City", "BATE Borisov", "Neftchi", "Hapoel Tel Aviv", "Mantova", "Olympiakos N.", "Raja Casablanca", "CSKA 1948", "A. Keciörengücü", "OC Safi", "GZ R&F", "Marcílio Dias", "CRAC (GO)", "Quilmes", "Pécsi MFC", "Banik Sokolov", "Paradou AC", "CA Fénix", "Zeljeznicar", "Ferro", "TOP Oss", "Rubio Ñú", "Tacuary FBC", "Luqueño", "Fréjus-St-Raph.", "O'Higgins", "Hyde United", "Goverla", "Palestino", "Thrasyvoulos", "Usti nad Labem", "1.SC Znojmo", "Olimpia", "Dinamo Tbilisi", "HJK Helsinki", "Oriente P.", "Dunajska Streda", "Levanger", "Michalovce", "FC Inter", "B. Banja Luka", "ETO FC", "Tacoma Defiance", "12 de Octubre", "Cavese", "AC Bellinzona", "Atletico Roma", "San Marino", "ND Gorica", "Marbella FC", "Bnei Yehuda", "Honvéd", "SV Mattersburg", "Rangers Talca", "Uni. Católica", "SD Aucas", "Lleida Esportiu", "Sp. Belgrano", "SFC Opava", "GKS Belchatow", "NK Olimpija", "FC Koper", "M. Petah Tikva", "Kaizer Chiefs", "Boluspor", "HB Köge", "Forest Green", "FC Malisheva", "FC Ballkani", "Antofagasta", "Stabæk", "Åsane", "Ayr United", "Queen's Park", "Dunfermline A.", "Östersund", "Örebro SK", "Assyriska FF", "Audax Italiano", "Liverpool FC", "Mvd City Torque", "Gaz Metan", "Teramo", "Spartak Trnava", "Juan Aurich", "Alianza Lima", "Tulsa", "El Paso", "Real Monarchs", "Mezőkövesd", "FC Samtredia", "Újpest FC", "Torpedo Kutaisi", "CD Olimpia", "Oita Trinita", "Monte. Yamagata", "Sagan Tosu", "Bolívar", "Helmond Sport", "Brage", "Solihull Moors", "Notts County", "Gloucester", "Accrington", "Skive IK", "Fremad Amager", "Guaraní", "Cork City", "Almirante Brown", "SV Horn", "Grödig", "ES Sétif", "Esperance", "Kongsvinger", "Odd", "Falkenbergs FF", "Varbergs BoIS", "Helsingborgs IF", "Landskrona", "CD Iquique", "Wanderers", "SU Agen", "Bayonne", "Le Puy Foot", "FC Schaffhausen", "Plaza Colonia", "Rentistas", "Pandurii", "Academica Clince", "Pirin", "Viktoria Berlin", "Bethlehem Steel", "Columbus 2", "Orange County", "Sacramento FC", "Casertana", "Mosta FC", "Sliema Wander.", "Savoia", "Pavia", "AS Gubbio", "CDS Vida", "Takushoku Univ.", "FC Saxan", "Gomel", "CS Emelec", "Gateshead", "Grimsby Town", "FC Ferizaj", "Uniautónoma", "Dundalk FC", "Montrose", "Eastleigh", "Macclesfield", "TJ Jinmen Tiger", "Guillermo Brown", "All Boys", "Juniors OÖ", "FC Den Bosch", "Rot-Weiß Erfurt", "Hallescher FC", "Portland 2", "Ranheim", "Stjørdals-Blink", "Mjøndalen", "East Stirling", "Dag & Red FC", "Aldershot", "IK Oddevold", "AFC Eskilstuna", "FC Trollhättan", "Trelleborg", "Gefle", "Huachipato", "U. Católica", "NK Dugopolje", "FC Wil 1900", "Rampla Jrs", "KF Trepca", "KF Skënderbeu", "FC Drita", "Newport County", "LD Alajuelense", "Guadalupe FC", "Switchbacks FC", "FC Dila", "Real España", "FC Aarau", "Manisaspor", "Sanliurfaspor", "Bechem United", "Isloch", "Slo. Bratislava", "Cambridge Utd.", "Badalona", "Puerto Rico FC", "Harrogate Town", "Alfreton", "Fylde", "Al-Faisaly", "JS Suning", "MSV Duisburg", "Shkendija", "FC Liria", "FC Prishtina", "Mansfield Town", "Fleetwood", "Gillingham", "Hayes & Yeading", "Barnet", "Boreham Wood", "FK Senica", "KSK Heist", "Olimpo", "Sp. Italiano", "Pribram", "SF Lotte", "Ruch Chorzow", "FC Flora", "Chorrillo FC", "Chepo FC", "Cowdenbeath", "Raith Rovers", "Elgin City", "Queen o. t. S.", "IK Frej Täby", "NK Lucko", "Segesta Sisak", "NK Sesvete", "FC Vaduz", "B. Podgorica", "Astra Giurgiu", "FC Voluntari", "D. Calarasi", "CS Avion", "Quevilly Rouen", "Condal", "K.V.V. Crossing Elewijt", "SK Vorwärts Steyr", "Aris Limassol", "Odesa", "Saint-Pierroise", "Blacktown City", "Vicenza Calcio", "The Football League XI", "Chemnitzer FC", "First Vienna", "SKN St. Pölten", "Kremser SC", "Madura United", "C.C.D. Arturo Fernández Vial", "Società Calcio Leffe", "Neza", "Cobh Ramblers", "Kickers Offenbach", "Marocaine Casablanca", "Deportivo La Coruña Brasil Futebol Clube", "Tampa Bay Mutiny", "Miami Fusion", "HSV Barmbek-Uhlenhorst", "Saarbrücken", "Rawmarsh Welfare", "Chesterfield", "Cleveland Stokers", "Hellenic", "St. Pat's", "Fort Lauderdale Strikers", "FC Goa", "Gansu Tianma", "Boston Utd", "Högaborgs BK", "Råå IF", "A.C. Legnano", "Basque Country regional football team", "Zawisza", "Reipas Lahti", "MYPA", "FC Lahti", "Hansa Rostock", "Atlanta Silverbacks", "Léopards Douala", "Tonnerre Yaoundé", "SC Toulon", "Bali United", "TBVfL Neustadt-Wildenheid", "US Thionville", "Sport Club Barueri", "São José-SP", "EC São José", "San Antonio Thunder", "Seattle Sounders", "Saipa FC", "Racing CFF", "Vegalta Sendai", "Coronel Bolognesi", "Brandsen", "FC Chiasso", "Wimbledon", "St. George Saints Football Club", "Ravenna", "RCH", "New York Cosmos", "Fort Lauderdale Sun", "Kansas City Comets", "Zug 94", "Cork Celtic", "Young Fellows Juventus", "Chester City", "Sydney Olympic", "IFK Norrköping FK", "Karlstad BK", "Nuorese Calcio", "Torres", "Americano Futebol Clube", "Clube Atlético Lençoense/Bariri", "Madureira Esporte Clube", "Club Sporting Cristal", "Tiburones Rojos de Veracruz", "Rayo Cantabria", "SD Unión Club", "KFC Uerdingen 05", "San Diego Sockers", "Atlante", "Linz", "Atlético Celaya", "Club Celaya", "Boyacá Patriotas", "Real Cartagena", "Asociación Civil Deportivo Lara", "Leones", "FC Heartland", "ACR Messina", "Unione Sportiva Altamura", "Bartınspor", "Bank Tejarat", "Al Shabab Al Arabi Club", "Sabaye Qom", "Kairat Almaty", "GZ Evergrande", "Semassi", "Hessen Combinatie '03", "AGOVV Apeldoorn", "Quick Boys", "Clausenengen FK", "ATK", "PFC Pirin Blagoevgrad", "Bayer 04 Leverkusen II", "Kerala Blasters", "Colchester Utd.", "Valur", "KR Reykjavík", "CZ Mighty Lions", "Pune", "LKS Lodz", "Legia Warsaw", "Botafogo-SP", "São Cristóvão de Futebol e Regatas", "Bonsucesso Futebol Clube", "Sport Club Brasil", "Miami Freedom", "La Calera", "Arona Calcio", "Vancouver Whitecaps", "Cannes", "Real Madrid C", "RM Castilla", "Aretxabaleta", "Spartak 2", "Volgar", "Savona F.B.C.", "Sambenedettese", "KSK Beveren", "Universitary Sport Club", "Kuwait SC", "Telford United", "Essex County Cricket Club", "Cape Town City", "AD Fafe", "Concordia Knurów", "GKS Tychy", "Marsala Football Club", "Chennaiyin FC", "Kuusankosken Kumu", "HNK Borovo", "W. Mannheim", "Alem. Aachen", "Club Atlético Lanús", "Lyon La Duchère"];
const CLUBCC=["GER", "GER", "COL", "AUT", "FRA", "FRA", "DEN", "ITA", "ROU", "ESP", "NED", "GRE", "GRE", "", "SWE", "FRA", "GRE", "", "ITA", "FRA", "", "PT", "NED", "DEN", "NOR", "DEN", "SCO", "PT", "PT", "TUR", "TUR", "AUS", "NED", "TUR", "RUS", "RUS", "KSA", "", "", "", "KSA", "KSA", "KSA", "", "KSA", "KSA", "KSA", "", "KSA", "KSA", "KSA", "", "KSA", "KSA", "KSA", "KSA", "KSA", "", "KSA", "", "KSA", "KSA", "", "KSA", "RUS", "TUR", "ESP", "ESP", "JPN", "ARG", "COL", "NED", "ESP", "TUR", "PT", "FRA", "RUS", "MEX", "BRA", "BRA", "BEL", "FRA", "TUR", "", "TUR", "RUS", "BRA", "", "GRE", "ARG", "GRE", "GER", "PT", "ENG", "UKR", "ARG", "RUS", "ITA", "GRE", "ENG", "ITA", "ESP", "BRA", "", "ESP", "", "COL", "ARG", "USA", "MEX", "ESP", "", "BRA", "GRE", "AUS", "GER", "USA", "AUT", "ITA", "JPN", "PT", "TUR", "", "TUR", "RUS", "ARG", "CZE", "ESP", "ITA", "ENG", "ARG", "TUR", "SUI", "GER", "BEL", "BEL", "PT", "PT", "ARG", "ITA", "PT", "TUR", "ESP", "ESP", "ESP", "ENG", "ENG", "ENG", "AUT", "PT", "ARG", "TUR", "NOR", "CZE", "ITA", "ENG", "FRA", "GER", "GER", "BRA", "ENG", "COL", "ENG", "PT", "ENG", "ITA", "ENG", "AUS", "ENG", "ENG", "SWE", "NOR", "DEN", "CRO", "ESP", "ENG", "TUR", "ENG", "ENG", "CZE", "TUR", "", "ARG", "COL", "", "MEX", "ESP", "ESP", "ESP", "ESP", "ESP", "ROU", "BRA", "FRA", "RUS", "", "ITA", "ENG", "ENG", "ITA", "PT", "ITA", "BRA", "ESP", "SCO", "AUS", "ARG", "BEL", "JPN", "ITA", "FRA", "BRA", "USA", "ENG", "PT", "ENG", "ENG", "USA", "ITA", "MEX", "UKR", "USA", "ITA", "FRA", "BEL", "BEL", "MEX", "", "ARG", "USA", "USA", "GER", "ITA", "DEN", "BRA", "BRA", "ENG", "POL", "ITA", "ENG", "BRA", "ITA", "BRA", "ENG", "SRB", "ESP", "ESP", "USA", "CRO", "CRO", "USA", "KSA", "", "NED", "ARG", "", "SWE", "TUR", "ESP", "COL", "COL", "COL", "ESP", "ENG", "UKR", "PT", "FRA", "RUS", "SWE", "UKR", "ENG", "CZE", "SCO", "SCO", "GER", "UKR", "RUS", "KOR", "GER", "BRA", "BRA", "GER", "TUR", "ESP", "SWE", "ITA", "COL", "UKR", "GRE", "DEN", "TUR", "ESP", "PT", "FRA", "SRB", "PT", "ARG", "ARG", "GER", "ENG", "NED", "TUR", "GER", "CRO", "ROU", "ROU", "ROU", "ESP", "ROU", "NED", "NED", "DEN", "NED", "DEN", "ROU", "GER", "FRA", "MEX", "AUT", "FRA", "SUI", "SUI", "UKR", "FRA", "UKR", "PT", "ROU", "CRO", "UKR", "SUI", "FRA", "SUI", "SUI", "JPN", "NED", "ROU", "NED", "SUI", "SUI", "ROU", "BEL", "ROU", "RUS", "SRB", "SCO", "PT", "PT", "CZE", "", "PT", "", "TUR", "", "BRA", "NED", "BRA", "ITA", "BRA", "BRA", "ITA", "BRA", "COL", "NED", "PT", "NOR", "GER", "ITA", "ENG", "FRA", "SWE", "POL", "TUR", "JPN", "CRO", "TUR", "TUR", "TUR", "BEL", "ITA", "ESP", "PT", "CRO", "ARG", "ARG", "ESP", "TUR", "ESP", "NED", "ARG", "BRA", "ESP", "SUI", "AUT", "FRA", "GER", "BRA", "BRA", "BRA", "FRA", "CRO", "", "POL", "TUR", "KOR", "KOR", "KOR", "SWE", "NOR", "GER", "SCO", "SWE", "TUR", "NOR", "SCO", "NED", "GER", "ITA", "NED", "GER", "SCO", "DEN", "GER", "GER", "USA", "CZE", "ENG", "ENG", "ARG", "DEN", "SWE", "ESP", "SWE", "NOR", "SRB", "CRO", "ARG", "COL", "COL", "ARG", "ARG", "ITA", "COL", "USA", "BRA", "SCO", "GRE", "BRA", "ENG", "GRE", "TUR", "BRA", "GER", "JPN", "CZE", "POL", "SRB", "SRB", "CRO", "CRO", "COL", "ITA", "ITA", "BRA", "ITA", "TUR", "BEL", "BEL", "NOR", "RUS", "BEL", "BEL", "BEL", "BEL", "BEL", "GRE", "SWE", "USA", "TUR", "TUR", "GER", "UKR", "CZE", "JPN", "JPN", "TUR", "JPN", "TUR", "RUS", "GRE", "SCO", "TUR", "UKR", "TUR", "POL", "RUS", "NOR", "UKR", "RUS", "JPN", "USA", "USA", "AUT", "FRA", "", "UKR", "BEL", "ARG", "ESP", "ITA", "SUI", "ITA", "FRA", "FRA", "ITA", "POL", "POL", "ENG", "POL", "ENG", "PT", "PT", "FRA", "GRE", "ESP", "GER", "", "ENG", "MEX", "", "BEL", "FRA", "NOR", "ENG", "SCO", "COL", "RUS", "BEL", "BRA", "", "ENG", "DEN", "FRA", "", "ENG", "AUS", "", "JPN", "PT", "GER", "ESP", "SWE", "ENG", "ENG", "FRA", "PT", "MEX", "AUS", "AUS", "TUR", "UKR", "UKR", "UKR", "ROU", "UKR", "UKR", "ENG", "DEN", "COL", "ENG", "USA", "BRA", "JPN", "SWE", "CZE", "SRB", "ITA", "NOR", "MEX", "FRA", "USA", "ITA", "RUS", "PT", "SCO", "POL", "BEL", "ESP", "FRA", "NED", "NED", "KSA", "KOR", "KOR", "", "KOR", "KOR", "KOR", "PT", "", "JPN", "FRA", "ITA", "SRB", "USA", "PT", "MEX", "SUI", "USA", "USA", "USA", "ENG", "ARG", "FRA", "DEN", "SWE", "ENG", "ENG", "ENG", "ITA", "SRB", "GER", "BRA", "FRA", "GRE", "SRB", "BEL", "DEN", "BRA", "ENG", "PT", "UKR", "PT", "GRE", "", "COL", "TUR", "RUS", "USA", "ESP", "TUR", "ROU", "ENG", "GRE", "GRE", "GRE", "NED", "UKR", "FRA", "NED", "MEX", "ITA", "", "ITA", "BRA", "GRE", "GRE", "GRE", "GRE", "GRE", "BRA", "CZE", "RUS", "FRA", "ITA", "SCO", "SRB", "FRA", "BRA", "PT", "PT", "TUR", "COL", "AUS", "ITA", "ITA", "ENG", "ROU", "", "USA", "ITA", "POL", "ITA", "GRE", "ARG", "ENG", "POL", "CRO", "UKR", "ESP", "BRA", "PT", "USA", "ENG", "BRA", "ITA", "ENG", "ITA", "MEX", "ENG", "", "", "MEX", "BEL", "BEL", "BRA", "GER", "BEL", "NED", "BEL", "ESP", "ARG", "SRB", "SRB", "SRB", "POL", "POL", "DEN", "SCO", "AUT", "ESP", "ENG", "ESP", "ESP", "ESP", "PT", "ESP", "ESP", "FRA", "ITA", "ITA", "BRA", "FRA", "PT", "COL", "ARG", "NED", "FRA", "ITA", "ARG", "NOR", "SCO", "RUS", "ENG", "RUS", "BEL", "RUS", "FRA", "NED", "PT", "UKR", "GER", "UKR", "AUT", "ESP", "ESP", "", "USA", "NOR", "RUS", "FRA", "ITA", "AUT", "GER", "FRA", "ITA", "PT", "USA", "AUT", "ITA", "TUR", "USA", "ARG", "MEX", "ARG", "NOR", "JPN", "PT", "BRA", "MEX", "ESP", "ARG", "ITA", "GER", "ENG", "USA", "ROU", "SUI", "ESP", "UKR", "ENG", "ENG", "JPN", "JPN", "ENG", "ITA", "CZE", "DEN", "BEL", "SWE", "TUR", "POL", "KOR", "CZE", "CZE", "CZE", "ENG", "CZE", "NED", "SRB", "RUS", "ITA", "BRA", "PT", "ESP", "SCO", "USA", "SCO", "GER", "FRA", "FRA", "FRA", "POL", "BEL", "ENG", "ENG", "ENG", "NOR", "AUT", "ENG", "CRO", "ENG", "ENG", "AUS", "BRA", "BRA", "DEN", "AUT", "RUS", "NED", "ESP", "CZE", "ITA", "ARG", "MEX", "JPN", "MEX", "RUS", "PT", "ITA", "USA", "RUS", "PT", "RUS", "ENG", "FRA", "FRA", "TUR", "ITA", "ITA", "ITA", "PT", "NOR", "FRA", "ROU", "", "MEX", "FRA", "FRA", "FRA", "FRA", "ROU", "ITA", "RUS", "CRO", "GER", "BEL", "ROU", "ROU", "PT", "ARG", "RUS", "JPN", "NED", "JPN", "NED", "FRA", "ESP", "ESP", "ESP", "USA", "ITA", "PT", "BRA", "DEN", "DEN", "ITA", "UKR", "GRE", "GER", "GER", "DEN", "NOR", "CZE", "BRA", "PT", "ESP", "JPN", "NED", "PT", "PT", "PT", "SRB", "GRE", "UKR", "SWE", "SWE", "NOR", "ARG", "AUT", "BEL", "ENG", "ENG", "AUS", "GER", "ENG", "ENG", "AUS", "AUS", "POL", "ENG", "POL", "POL", "AUT", "GER", "ENG", "", "ENG", "GRE", "TUR", "", "JPN", "JPN", "SUI", "SUI", "POL", "SRB", "RUS", "RUS", "UKR", "BEL", "FRA", "SWE", "SWE", "TUR", "", "KSA", "TUR", "", "KSA", "", "", "", "", "", "", "", "ARG", "", "", "", "GRE", "", "", "", "JPN", "", "", "", "ESP", "ITA", "", "ESP", "", "ENG", "", "", "", "ITA", "", "", "", "TUR", "", "", "BRA", "BRA", "ARG", "", "CZE", "", "", "", "ARG", "NED", "", "", "", "FRA", "", "", "UKR", "", "GRE", "CZE", "CZE", "", "", "", "", "", "NOR", "", "", "", "", "USA", "", "ITA", "SUI", "ITA", "", "", "ESP", "", "", "AUT", "", "", "", "ESP", "", "CZE", "POL", "", "", "", "", "TUR", "DEN", "ENG", "", "", "", "NOR", "NOR", "SCO", "SCO", "SCO", "SWE", "SWE", "SWE", "", "", "", "ROU", "ITA", "", "", "", "USA", "USA", "USA", "", "", "", "", "", "JPN", "JPN", "JPN", "", "NED", "SWE", "ENG", "ENG", "ENG", "ENG", "DEN", "DEN", "", "", "ARG", "AUT", "AUT", "", "", "NOR", "NOR", "SWE", "SWE", "SWE", "SWE", "", "", "FRA", "FRA", "FRA", "SUI", "", "", "ROU", "ROU", "", "GER", "USA", "USA", "USA", "USA", "ITA", "", "", "ITA", "ITA", "ITA", "", "JPN", "", "", "", "ENG", "ENG", "", "COL", "", "SCO", "ENG", "ENG", "", "ARG", "ARG", "AUT", "NED", "GER", "", "USA", "NOR", "NOR", "NOR", "SCO", "ENG", "ENG", "SWE", "SWE", "SWE", "SWE", "SWE", "", "", "KOR", "SUI", "", "", "", "", "", "", "", "USA", "", "", "SUI", "TUR", "TUR", "", "", "", "ENG", "ESP", "USA", "ENG", "ENG", "", "KSA", "", "GER", "", "", "", "ENG", "ENG", "ENG", "ENG", "ENG", "ENG", "", "BEL", "ARG", "ARG", "CZE", "GER", "POL", "", "", "", "SCO", "SCO", "SCO", "SCO", "SWE", "KOR", "KOR", "KOR", "", "", "ROU", "ROU", "ROU", "FRA", "FRA", "ESP", "BEL", "AUT", "", "UKR", "FRA", "AUS", "ITA", "", "GER", "AUT", "AUT", "AUT", "", "", "ITA", "MEX", "", "GER", "", "BRA", "USA", "USA", "GER", "GER", "", "ENG", "USA", "", "", "USA", "", "", "ENG", "SWE", "SWE", "ITA", "FRA", "POL", "", "", "", "GER", "USA", "", "", "FRA", "", "GER", "FRA", "BRA", "BRA", "BRA", "USA", "USA", "", "FRA", "JPN", "", "ARG", "SUI", "ENG", "AUS", "ITA", "NED", "USA", "USA", "USA", "SUI", "", "SUI", "ENG", "AUS", "SWE", "SWE", "ITA", "ITA", "BRA", "BRA", "BRA", "", "MEX", "ESP", "ESP", "GER", "USA", "MEX", "AUT", "MEX", "MEX", "COL", "COL", "", "", "", "ITA", "ITA", "TUR", "", "", "", "", "", "", "NED", "NED", "NED", "NOR", "", "", "GER", "", "ENG", "", "", "", "", "POL", "POL", "BRA", "BRA", "BRA", "BRA", "USA", "", "ITA", "USA", "FRA", "ESP", "", "ESP", "RUS", "RUS", "ITA", "ITA", "BEL", "ESP", "", "ENG", "ENG", "", "PT", "POL", "POL", "ITA", "", "", "KOR", "GER", "GER", "ARG", "FRA"];
const NATS=["", "Albânia", "Alemanha", "Angola", "Argentina", "Argélia", "Arménia", "Arábia Saudita", "Austrália", "Azerbaijão", "Bangladesh", "Barbados", "Benim", "Bermudas", "Bielorrússia", "Bolívia", "Brasil", "Bulgária", "Burkina Faso", "Burundi", "Bélgica", "Bósnia", "CSSR", "Cabo Verde", "Camarões", "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre", "Chéquia", "Colômbia", "Comores", "Congo", "Coreia do Norte", "Coreia do Sul", "Costa Rica", "Costa do Marfim", "Croácia", "Cuba", "Curaçau", "Dinamarca", "Djibouti", "EUA", "East Germany (GDR)", "Egito", "El Salvador", "Equador", "Eritrea", "Escócia", "Eslováquia", "Eslovénia", "Espanha", "Estónia", "Filipinas", "Finlândia", "França", "Gabão", "Gana", "Geórgia", "Grenada", "Grécia", "Guadalupe", "Guatemala", "Guernsey", "Guiana Francesa", "Guiné", "Guiné Equatorial", "Guiné-Bissau", "Haiti", "Honduras", "Hungria", "Ilhas Faroé", "Indonésia", "Inglaterra", "Iraque", "Irlanda", "Irlanda do Norte", "Irão", "Isle of Man", "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", "Jugoslawien (SFR)", "Kosovo", "Kuwait", "Letónia", "Libéria", "Lituânia", "Luxemburgo", "Líbia", "Macedonia", "Macedónia do Norte", "Madagáscar", "Malaysia", "Mali", "Malta", "Marrocos", "Martinica", "Mauritius", "Mauritânia", "Mayotte", "Moldávia", "Monaco", "Montenegro", "Moçambique", "México", "Netherlands Antilles", "New Caledonia", "Nicaragua", "Nigéria", "Noruega", "Nova Caledónia", "Nova Zelândia", "Omã", "Palestina", "Panamá", "Paraguai", "País de Gales", "Países Baixos", "Peru", "Polónia", "Portugal", "Quénia", "RD Congo", "República Centro-Africana", "República Dominicana", "Roménia", "Réunion", "Rússia", "Senegal", "Serbia and Montenegro", "Serra Leoa", "Seychelles", "Singapore", "St. Kitts & Nevis", "Suriname", "Suécia", "Suíça", "São Tomé e Príncipe", "Sérvia", "Síria", "Tanzânia", "The Gambia", "Togo", "Trindade e Tobago", "Tunísia", "Turquia", "Ucrânia", "UdSSR", "Uganda", "União Soviética", "Uruguai", "Usbequistão", "Venezuela", "Yugoslavia (Republic)", "Zaire", "Zimbabué", "Zâmbia", "África do Sul", "Áustria", "Sudão", "Tajiquistão", "República Socialista Federativa da Jugoslávia", "Império Austríaco"];
const TAGS=["bdo", "cBRA", "cENG", "cESP", "cFRA", "cGER", "cITA", "cPT", "euro", "t:Abel Ferreira", "t:Alex Ferguson", "t:Ancelotti", "t:André Villas-Boas", "t:Arne Slot", "t:Arrigo Sacchi", "t:Arsène Wenger", "t:Arteta", "t:Bielsa", "t:Bruno Lage", "t:Capello", "t:Carlos Queiroz", "t:Conte", "t:Cruyff", "t:Del Bosque", "t:Deschamps", "t:Fernando Santos", "t:Guardiola", "t:Hansi Flick", "t:Jesualdo Ferreira", "t:Joachim Löw", "t:Jorge Jesus", "t:José Mourinho", "t:José Peseiro", "t:Klopp", "t:Leonardo Jardim", "t:Lopetegui", "t:Luis Enrique", "t:Mancini", "t:Marco Silva", "t:Nuno Espírito Santo", "t:Paulo Bento", "t:Paulo Fonseca", "t:Pochettino", "t:Rafa Benítez", "t:Ranieri", "t:Roberto Martínez", "t:Rui Vitória", "t:Rúben Amorim", "t:Sarri", "t:Scaloni", "t:Scolari", "t:Simeone", "t:Sérgio Conceição", "t:Tuchel", "t:Van Gaal", "t:Vítor Pereira", "t:Xabi Alonso", "t:Zidane", "ucl", "uel", "wc"];
const DB=`Lionel Messi|AVA|4|99|127.647.442|1987||169|208||0.3.4.26.36.42.49.58.60|D
Cristiano Ronaldo|AVA|127|98|812.552.721.463.52|1985||185|234||0.2.3.6.8.10.11.20.25.30.31.40.43.45.48.50.57.58|
Pelé|AVA|16|98|777.1284|1940||173|92||60|
Maradona|AVA|4|98|150.127.601.787.611.89|1960||165|91||6.59.60|
Zinedine Zidane|MED|58|96|156.463.721.1346|1972||185|108||0.3.6.8.11.20.23.58.60|
Beckenbauer|DEF|2|95|133.408.1284|1945||181|105||0.5.8.58.60|
Eusébio|AVA|127|94|140.577.136.849|1942||175|64|110|0.7.58|
Cruyff|AVA|124|96|32.127.523.354|1947||178|48||0.3.58|
Di Stéfano|AVA|54|96|150.427.567.721.291.734|1926||178|41|4|0.3.58|
Ronaldo Fenómeno|AVA|16|96|648.127.440.721.7.234.242|1976||183|98||0.11.19.20.23.50.60|
Maldini|DEF|84|94|7|1968||186|126||6.11.14.19.58|
Platini|MED|58|94|19.763.463|1955||179|73||0.4.6.8.58|
Puskás|AVA|73|94|721.1034|1927||172|90||3.58|
Andrés Iniesta|MED|54|93|127.906|1984||171|132||3.8.23.26.35.36.54.58.60|
Xavi|MED|54|93|127.59|1980||170|145||3.8.22.23.26.36.54.58.60|
Kylian Mbappé|AVA|58|93|587.647.721|1998||178|107||4.11.24.31.34.36.42.53.56.60|
Ronaldinho|AVA|16|94|395.647.127.7.357.112.701.358.1282|1980||182|97||0.3.11.50.58.60|E
Van Basten|AVA|124|94|32.7|1964||188|58||0.6.8.14.19.22.58|
Gerd Müller|AVA|2|93|133.1249|1945||176|62||0.5.8.58.60|
George Best|AVA|79|91|552.824.367.419.717.160.1288.1249|1946||176|37||0.2.58|D
Garrincha|AVA|16|94|159.234.892.459.357|1933||170|50||60|D
Gianluigi Buffon|GR|84|93|663.463.647|1978||192|176||4.6.11.19.21.24.44.48.53.59.60|
Luka Modrić|MED|40|92|277.853.721.7|1985||174|206||0.3.11.31.35.43.57.58|
Robert Lewandowski|AVA|126|92|514.157.133.127.217|1988||185|170||3.5.11.25.26.27.33.58|
Erling Haaland|AVA|116|92|171.576.767.157.551|2000||195|59|76|2.26.58|
Baresi|DEF|84|92|7|1960||176|81||6.14.19.58.60|
Matthäus|MED|2|92|158.133.440.608|1961||174|154||0.5.6.8.59.60|
Zico|MED|16|92|357.871.482|1953||172|71||1|
Bobby Charlton|MED|76|92|552.695.556.1225|1937||173|110||0.2.58.60|
Figo|AVA|127|91|812.127.721.440|1972||180|127||0.3.6.20.22.23.31.37.50.54.58|D
Thierry Henry|AVA|58|93|587.463.93.127.608|1977||188|124||2.3.4.8.11.15.26.58.60|
Roberto Baggio|AVA|84|92|356.463.7.154.440.165.1226|1967||174|56||0.6.14.19.59|
Kaká|MED|16|92|834.7.721.637|1982||186|92||0.3.6.11.31.50.58.60|
Manuel Neuer|GR|2|92|133.782|1986||193|128||5.11.26.27.29.53.58.60|
Sergio Ramos|DEF|54|91|787.721.647.577|1986||184|180||3.4.8.11.19.23.31.35.36.42.43.57.58.60|
Toni Kroos|MED|2|90|133.524.721|1990||182|114||3.5.11.26.27.29.35.43.54.57.58.60|
Luis Suárez|AVA|157|91|598.312.32.532.127.110.395.442|1987||182|143||3.17.36.51.58|
Neymar|AVA|16|92|777.127.647.45|1992||175|130||3.4.11.30.36.42.50.53.58|
Kevin De Bruyne|MED|20|91|377.215.923.933.551.601|1991||181|127||2.21.26.31.43.45.58|
Virgil van Dijk|DEF|124|91|312.204.805.532|1991||195|100||2.13.33.54.58|
Yashin|GR|156|93|276|1929||189|74|134|0.8|
Fabio Cannavaro|DEF|84|90|601.663.440.463.721|1973||176|136||0.3.6.11.19.44.59.60|
Roberto Carlos|DEF|16|90|85.112.653.440.721.351.234|1973||168|125||3.19.20.23.50.58.60|
Romário|AVA|16|92|892.648.127.357.888.358.59.31.1249|1966||168|70||3.22.50.60|
Shevchenko|AVA|153|91|275.7.215|1976||183|111||0.6.11.31.50.58|
Steven Gerrard|MED|76|90|532.499|1980||185|114||19.43.58.59|
Zlatan Ibrahimović|AVA|142|91|550.32.463.440.127.7.647.552.499|1981||195|122||3.4.6.11.19.26.31.37.59|
Iker Casillas|GR|54|92|721.325.1348.1347|1981||185|167||3.7.8.11.19.20.23.31.32.35.39.52.58.60|
Andrea Pirlo|MED|84|91|165.440.729.7.463.609|1979||177|116||6.11.21.58.60|
Francesco Totti|AVA|84|90|737|1976||180|58||6.19.36.44.60|
Karim Benzema|AVA|58|91|541.721.46.45|1987||185|97||0.3.4.11.24.31.35.43.52.57.58|
Harry Kane|AVA|76|91|853.526.568.616.518.133|1993||188|125||5.12.21.31.42.53|
Mohamed Salah|AVA|47|91|132.215.356.737.532.856|1992||175|122||2.13.20.31.33.58|D
Rodri|MED|54|91|905.110.551.127|1996||190|74||0.2.8.26.27.36.51.58.60|
Vinicius Junior|AVA|16|91|357.721.1348|2000||176|57||3.11.31.35.56.57.58|E
Nesta|DEF|84|86|510.7.579.1364|1976||187|78||6.11.58.60|
Cafu|DEF|16|90|834.779.462.653.737.7|1970||176|142||6.11.19.50.58.60|
Nedvěd|MED|32|90|806.510.463.902|1972||177|91||0.6.19.24.44|
Gullit|MED|124|92|354.648.7.768.215|1962||191|66||0.6.8.14.19.58|
Rivaldo|AVA|16|91|667.234.653.262.127.7.242.632.834.833.12|1972||186|74||0.3.11.50.54.58.60|E
Del Piero|AVA|84|90|650.463.832|1974||173|91||6.11.14.19.21.24.44.58.60|
Batistuta|AVA|4|85|611.734.150.356.737.440.38|1969||185|78||6.17.19.44|
George Weah|AVA|92|90|587.647.7.215.551.553.47.1264|1966||182|75||0.4.6.14.15.19|
Stoichkov|AVA|17|90|195.127.663.52.483.217.247|1966||178|83||0.3.22.54.58|E
Rummenigge|AVA|2|91|133.440.786|1955||182|96||0.5.8.58|
Philipp Lahm|DEF|2|90|133.298|1983||170|113||5.11.26.29.54.58.60|
Frank Lampard|MED|76|89|925.830.215.551.609|1978||184|107||2.11.12.19.31.43.44.50.58.59|
Wayne Rooney|AVA|76|90|299.552.247.263|1985||176|120||2.10.19.31.54.58.59|
Didier Drogba|AVA|39|89|512.398.553.215.755.371.579|1978||189|105||2.11.12.31.37.50.58|
Dani Alves|DEF|16|88|279.787.127.463.647.834.865|1983||172|126||3.4.6.26.36.50.53.58.59|
Sergio Agüero|AVA|4|88|438.110.551.127|1988||170|101||2.26.37.49.59.60|
Thiago Silva|DEF|16|86|358.462.325.276.7.647.215|1984||183|113||4.6.7.11.42.50.53.58|
Eden Hazard|AVA|20|89|530.215.721|1991||175|126||2.3.4.11.21.31.43.45.48.57.58.59|E
Philippe Coutinho|MED|16|87|440.892.291.532.127.133.99.39.777|1992||172|68||3.5.6.27.31.33.42.43.44.50.58|
Alisson|GR|16|87|443.737.532|1992||193|83||2.11.13.33.58|
Thibaut Courtois|GR|20|88|377.110.215.721|1992||200|115||2.3.11.12.21.31.35.43.45.51.56.57.58.59|
Jan Oblak|GR|53|81|140.136.629.519.732.110.1043|1993||186|88||3.7.30.39.51.59|
Rui Costa (1996)|AVA|127|75|891.690.345.9.262.776.346|1996||179||||
Jude Bellingham|MED|76|90|145.157.721|2003||186|60||3.11.31.53.56.58|
Lamine Yamal|AVA|54|91|127|2007||180|37||3.8.27.60|D
Oliver Kahn|GR|2|90|479.133|1969||188|86||5.8.58.59|
Deco|MED|127|88|234.140.74.765.325.127.215.358|1977||174|75|16|2.3.7.11.20.25.31.50.58.59|
Mário Coluna|MED|127|82|140.541|1935||172|57|110|7.58|
Sócrates|MED|16|84|234.356.357.777.1338|1954||192|60|||
Michael Laudrup|MED|43|87|172.463.510.127.721.906.32|1964||183|104||3.6.22.58|
Eto'o|AVA|24|90|721.186.291.549.127.440.85.215.299.768.84.492.700|1981||180|118||3.6.23.26.31.43.45.58|
Raúl González|AVA|54|90|721.59.782.1284.1348.1347|1977||178|102||3.19.20.23.58|
Robben|AVA|124|88|312.648.215.721.133|1984||180|96||2.3.5.11.26.31.54.58|D
Bergkamp|AVA|124|86|32.440.93|1969||183|79||2.15.22.54.59|
Javier Zanetti|DEF|4|86|125.440|1973||178|145||6.17.31.37.43.44.58.59|
Bastian Schweinsteiger|MED|2|88|133.552.217|1984||183|121||5.26.29.31.54.58.59.60|
John Terry|DEF|76|87|215.617.99|1980||187|78||2.11.12.19.21.31.43.44.50.58.59|
Paul Scholes|MED|76|87|552|1974||168|66||2.10.58|
Petr Cech|GR|32|87|806.731.215.93|1982||196|124||2.11.12.15.31.43.50.58.59|
Carles Puyol|DEF|54|89|127|1978||178|106||3.8.22.23.26.54.58.60|
Ricardo Carvalho|DEF|127|87|325.909.74.215.721.587|1978||182|89||2.3.7.8.11.20.25.31.34.40.44.50.58.59|
Pepe|DEF|127|88|554.325.721.141|1984||188|141|16|3.7.8.11.20.25.28.31.40.43.45.50.52.57.58|
Casemiro|MED|16|88|834.721.325.552.442.1348|1992||188|91||3.11.31.35.43.47.50.57.58|
Gerard Piqué|DEF|54|88|552.779.127|1987||194|112||2.3.8.10.22.23.26.35.36.58.60|
Franck Ribéry|AVA|58|89|866.818.323.371.553.133.356.764|1983||170|81||5.11.24.26.54.58|E
Giorgio Chiellini|DEF|84|87|18.737.463.356.500|1984||187|117||6.8.19.21.24.37.44.48|
Radamel Falcao|AVA|33|86|734.325.110.587.552.215.371.719.567|1986||177|104||4.7.12.20.28.34.44.51.54.59|
Gareth Bale|AVA|123|89|805.853.721.500|1989||185|111||3.11.12.31.35.43.57.58|D
Ángel Di María|AVA|4|88|738.140.721.552.647.463|1988||180|145||3.4.7.11.18.30.31.42.49.53.54.58.60|D
Marcelo|DEF|16|88|358.721.632|1988||174|58||3.11.31.35.43.50.57.58|
Thomas Müller|AVA|2|89|133.889|1989||185|131||5.11.26.27.29.53.54.58.60|
Romelu Lukaku|AVA|20|87|80.215.924.299.552.440.737.601.351|1993||191|135||6.12.21.31.42.43.45.53.58|
Antoine Griezmann|AVA|58|87|725.110.127.637|1991||176|137||24.51.59.60|
Raheem Sterling|AVA|76|86|532.551.215.93.354|1994||172|82|85|2.16.26.42|D
Joshua Kimmich|MED|2|85|705.133|1995||177|116||5.11.26.27.29.53.58|
N'Golo Kanté|MED|58|87|866.759.518.215.46.351|1991||171|69||2.21.24.44.48.52.53.58.59.60|
Bruno Fernandes|MED|127|87|618.871.768.812.552|1994||183|97||25.30.32.45.47|
Bernardo Silva|MED|127|86|140.587.551.721|1994||173|115||2.4.7.25.26.30.31.34.45.58|
Rúben Dias|DEF|127|85|140.551|1997||186|84||2.7.18.25.26.45.46.58|
Ousmane Dembélé|AVA|58|91|731.157.127.647|1997||179|71||0.3.4.24.36.53.58.60|D
Alexander Isak|AVA|142|84|14.157.725.610.532|1999||190|63||13|
Phil Foden|MED|76|85|551|2000||171|49||2.26.53.58|
Raphinha|AVA|16|86|908.812.731.516.127|1996||177|43||3.11.17.27.32|E
Vitinha|MED|127|84|325.934.647|2000||172|47||4.7.25.36.39.45.52.58|
Michael Olise|AVA|58|86|720.243.133|2001||180|29|76|5.24|D
Pedri|MED|54|88|507.127|2002||174|53||3.8.27.60|
Peter Schmeichel|GR|43|90|428.172.552.812.99.551|1963||193|129||2.7.8.10.58|
Thuram|DEF|58|87|587.663.463.127|1972||182|142||6.8.11.15.19.59.60|
Sergio Busquets|MED|54|88|127.442|1988||189|151||3.8.22.23.26.35.36.58.60|
Patrick Vieira|MED|58|88|7.93.463.440.551.1346|1976||192|107|135|2.6.8.15.19.31.37.60|
Yaya Touré|MED|39|87|563.632.587.127.551.1354|1983||189|101||2.3.26.37.58|
Van Nistelrooy|AVA|124|89|414.648.552.721.408.586.1141|1976||188|70||2.3.10.19.54|
Klinsmann|AVA|2|88|298.440.587.853.133.768|1964||181|108||5.8.15.59.60|
Cantona|AVA|58|87|15.156.578.622.516.552.553|1966||188|45||2.10|
Michael Owen|AVA|76|88|532.721.610.552.825|1979||172|91||0.2.10.19.59|
Rio Ferdinand|DEF|76|87|925.160.516.552.698|1978||189|81||2.10.19.58|
Wesley Sneijder|MED|124|87|32.721.440.371.612.43|1984||170|134||3.6.31.37.43.44.54.58|
Xabi Alonso|MED|54|88|753.725.532.721.133|1981||183|119||3.5.8.11.23.26.31.43.58.60|
Fernando Torres|AVA|54|88|110.532.215.7.1079|1984||186|110||3.8.12.23.31.43.51.58.59.60|
David Villa|AVA|54|88|813.779.888.127.110.557.609.906|1981||175|100||3.8.23.26.35.51.58.60|
Cesc Fàbregas|MED|54|88|127.93.215.587.232|1987||179|110||2.3.8.15.21.23.26.31.34.48.59.60|
Nemanja Vidic‎|DEF|145|87|808.294.809.552.440|1981||190|56||2.10.37.58|
Ivan Rakitic|MED|40|88|132.787.127.60.405.782|1988||184|106|143|3.35.36.55.58.59|
David Silva|MED|54|87|753.888.203.551.725|1986||170|125||2.8.23.26.35.37.44.60|
Mats Hummels|DEF|2|86|133.157.737|1988||191|78||5.11.27.29.33.44.53.60|
Alexis Sánchez|AVA|29|87|227.871.734.127.93.552.440.553.787.579|1988||168|168||3.6.15.17.21.26.31|D
Miralem Pjanić|MED|21|86|323.541.737.463.127.141.194|1990||178|115||6.36.48|
Edinson Cavani|AVA|157|87|252.652.601.647.552.888.150|1987||184|136||4.53|
Pierre-Emerick Aubameyang|AVA|59|86|819.7.266.530.587.763.157.93.127.215.553.55.262|1989||187|86|58|3.6.11.16.33.53|
Thiago Alcántara|MED|54|87|127.133.532|1991||174|46|84|3.5.11.23.26.27.33.35.36.58|
Christian Eriksen|MED|43|86|626.32.853.440.164.552.933|1992||182|151||6.12.21.31.42.47|
Marc-André ter Stegen|GR|2|85|158.127.386.32|1992||187|45||3.27.29.36.58|
Isco|MED|54|88|888.586.721.787.142|1992||176|39||3.11.23.35.36.43.57.58|D
Kalidou Koulibaly|DEF|135|85|323.377.601.215.45|1991||188|107|58|11.30.43.48|
Jorginho|MED|84|88|416.601.215.93.357|1991||180|57|16|8.16.34.37.43.48.53.58.59|
Samuel Umtiti|DEF|58|86|541.127.513.530|1993||182|31|24|3.24.36.41.60|
Álvaro Morata|AVA|54|87|721.463.215.110.7.371.232.186.1348|1992||187|87||3.6.8.11.21.23.31.35.36.41.48.51.52.57.58.59|
Lorenzo Insigne|AVA|84|85|601.359.674.849.768.1027|1991||163|54||8.11.21.37.43.48|E
Leon Goretzka|MED|2|85|898.133.99.782|1995||189|73||5.27.29.53.58|
Serge Gnabry|MED|2|85|93.924.923.133.421|1990||181|62||5.15.27.29.53.58|
Raphaël Varane|DEF|58|88|521.721.552.232|1993||191|93||3.11.24.31.35.43.57.58.60|
Timo Werner|AVA|2|85|298.705.215.853.756|1996||180|57||27.29.53.58.59|
Riyad Mahrez|AVA|5|87|511.518.551.36.954|1991||181|120|58|2.26.44.58|D
Aymeric Laporte|DEF|54|85|101.184.144.551.52|1994||191|57|58|2.8.17.26.58.60|
Marquinhos|DEF|16|85|234.737.647|1994||183|112||4.11.36.42.50.53.58|
John Stones|DEF|76|85|129.299.551.440|1994||188|94||2.26.45.53.58|
Leroy Sané|AVA|2|85|551.133.371.782|1996||183|80|54|2.5.26.27.29.53|D
Sadio Mané|AVA|135|87|323.767.805.532.133.52|1992||174|134||2.5.30.33.58|E
Jack Grealish|AVA|76|85|99.551.299.1084|1995||180|39||2.26.53.58|E
Thomas Lemar|MED|58|84|759.587.110.386.283|1995||171|27||3.4.24.34.51.60|D
Paulo Dybala|AVA|4|86|439.652.463.737|1993||177|40||6.31.44.48.49.60|
Fabinho|MED|16|85|358.732.721.587.532.46.856.1348|1993||188|36||2.4.11.31.33.34.39.44.52.58|
Andrew Robertson|DEF|51|86|273.426.532.853.1056|1994||178|101||2.13.33.38.58|
Kingsley Coman|AVA|58|85|647.463.133.52|1996||180|61||4.5.6.11.24.26.27.30.53.58|E
José María Giménez|DEF|157|82|252.110.262|1995||185|101||3.17.51.59|
Nicolò Barella|MED|84|85|196.232.440|1997||175|73||6.8.21.37|
Marcus Rashford|AVA|76|87|552.99.127|1997||188|78||3.27.31.47.53.54.59|E
Lucas Hernández|DEF|58|86|150.110.104.133.647|1996||184|42||4.5.24.27.36.51.58.59.60|
Marcos Llorente|DEF|54|84|721.66.110.1348|1995||184|27||3.35.43.51.57.58.60|
Dani Olmo|MED|54|87|291.127.277.705|1998||176|61||3.8.27.58.60|D
Marco Asensio|MED|54|87|549.721.291.647.99.351|1996||182|38||3.4.11.35.36.43.57.58|D
Kai Havertz|AVA|2|86|524.215.93|1999||193|63||2.16.27.29.53.58|
Alessandro Bastoni|DEF|84|84|100.440.663|1999||190|46||6.8.21.37|
Gianluigi Donnarumma|GR|84|86|7.647.551|1999||196|87||4.8.26.36.37.42.58|
Martin Ødegaard|MED|116|86|826.721.414.907.725.93.1348|1998||178|77||2.16.35.43.57|
Viktor Gyökeres|AVA|142|83|170.166.817.830.236.812.93|1998||189|41||2.7.16.47|
Frenkie de Jong|MED|124|86|32.127|1997||180|70||3.27.54|
Federico Chiesa|AVA|84|85|356.463.532|1997||175|51||2.8.13.37|D
Fabián Ruiz|MED|54|85|143.142.283.601.647|1996||189|52||4.8.11.36.58.60|
Mikel Oyarzabal|AVA|54|83|725.753|1997||181|65||8.35.36.60|
Gabriel Jesus|AVA|16|85|653.551.93.127|1997||177|64||2.16.26.27|
Federico Valverde|MED|157|87|677.262.721.1348|1998||183|76||3.11.17.31.35.56.57.58|
Achraf Hakimi|DEF|102|86|721.157.440.647.1348|1998||180|103|54|4.6.21.35.36.42.57.58|
Jadon Sancho|AVA|76|85|157.552.215.99|2000||180|23||47.59|E
Lautaro Martínez|AVA|4|86|710.440|1997||174|87||6.21.49.60|
Rodrygo|AVA|16|87|777.721.1348|2001||174|37||3.11.31.56.57.58|D
Aurélien Tchouaméni|MED|58|86|156.587.721|2000||187|50||3.11.24.31.56.58|
Alphonso Davies|MED|25|85|889.133|2000||183|59|60|5.27.53.58|D
Dominik Szoboszlai|MED|73|84|318.767.705.532|2000||186|69||2.13.33|
Ryan Gravenberch|MED|124|85|32.133.532|2002||190|35||2.5.13.33.54|
Randal Kolo Muani|AVA|58|83|600.866.281.647.463.853|1998||187|32||4.24.36.44.52.58|
Khvicha Kvaratskhelia|AVA|61|85|535.745.601.647.1016|2001||183|54||4.6.21.36.58|E
Cole Palmer|MED|76|85|551.215|2002||185|14||2.26.42.53.56.58|D
Jamal Musiala|MED|2|85|133|2003||184|46||5.27.53|
Florian Wirtz|MED|2|84|524.532|2003||176|48||5.13.27.56|D
Fermín López|MED|54|83|127|2003||176|10||3.8.27|D
Eduardo Camavinga|MED|58|87|731.721|2002||182|33|3|3.11.24.31.56.58|
Willian Pacho|DEF|49|81|438.744.281.647|2001||188|41||4.36.58|
Moisés Caicedo|MED|49|83|438.166.135.215|2001||178|65||42.56|
Désiré Doué|AVA|58|83|731.647|2005||181|19||4.24.36.58|D
Van der Sar|GR|124|88|463.367.552.32|1970||197|130||2.10.11.54.58|
Hierro|DEF|54|87|887.886.721.57.155|1968||190|89||3.19.23.58|
Desailly|DEF|58|87|600.553.7.215.43.700|1968||185|116|60|4.6.8.14.19.44.58.60|
Koeman|DEF|124|88|312.32.648.127.354|1963||182|78||3.8.22.58|
Seedorf|MED|124|87|32.768.721.440.7.159|1976||176|87|141|3.6.11.19.23.54.58|
Riquelme|MED|4|85|150.127.905.89|1978||182|51||17.54|
Gheorghe Hagi|MED|132|86|335.339.721.165.127.371|1965||174|124||22.59|
Özil|MED|2|89|923.721.93.351.131.782|1988||180|92||3.15.16.29.31.55.60|
Fernando Redondo|MED|4|86|189.721.7.89|1969||186|29||3.6.11.17.19.23.58|
Fernando Gomes|AVA|127|82|325.813.812|1956||174|48||7.58|
Peyroteo|AVA|127|79|812.120|1918||0|20|3|7|
Giggs|AVA|123|88|552|1973||180|73||2.10.58|E
Van Persie|AVA|124|87|354.93.552.351|1983||183|102||2.10.15.54.55.59|
Jairzinho|AVA|16|80|159.553.242.693.1046|1944||173|81||60|D
Crespo|AVA|4|86|734.663.510.440.215.7.378|1975||185|64||6.11.17.31.37.44.59|
Miroslav Klose|AVA|2|88|0.923.133.510|1978||184|137|126|5.29.54.60|
Lúcio|DEF|16|86|443.524.133.440.463.834.653.1329.1250|1978||187|105||5.6.21.31.43.44.50.58.60|
David Beckham|MED|76|90|552.695.721.499.7.647|1975||183|115||2.3.4.10.11.19.20.58|
Ashley Cole|DEF|76|86|93.243.215.737.499.263|1980||176|107||2.11.12.15.19.31.43.50.58.59|
Nicolas Anelka|AVA|58|87|647.93.721.532.551.351.155.215.755.463.924|1979||185|69||2.6.8.11.12.15.23.50.58|
Ryan Giggs|MED|123|88|552|1973||180|73||2.10.58|E
Carlos Tevez|AVA|4|90|150.234.925.552.551.463.755|1984||173|76||2.6.10.37.58|
Daniele De Rossi|MED|84|85|737.150|1983||184|117||19.21.36.44.60|
Luca Toni|AVA|84|88|575.285.858.165.652.356.133.737.378.463.51.416.1226|1977||193|47||5.6.21.44.54.60|
Jérôme Boateng|DEF|2|88|418.408.551.133.541.764.501|1988||192|76||5.11.26.27.29.37.58.60|
Sami Khedira|MED|2|87|298.721.463.418|1987||189|77||3.5.6.11.29.31.48.58.60|
Arturo Vidal|MED|29|87|227.864.524.463.133.127.440.357.102|1987||180|147||3.5.6.11.17.21.26|
Gonzalo Higuaín|AVA|4|87|734.721.601.463.7.215.442|1987||184|75|58|3.6.31.43.48.59|
Leonardo Bonucci|DEF|84|87|440.858.681.378.128.463.7.874.351|1987||189|121||6.8.21.31.37.48|
Ivan Perišić|AVA|40|86|330.224.157.933.440.133.853.405.648|1989||186|162||5.6.21.27.33.37.58|E
Javi Martínez|MED|54|86|638.101.133.700.181|1988||192|20||5.8.11.17.23.26.27.58.60|
Juan Mata|MED|54|87|888.215.552.371.906.926.556.1348|1988||170|41||8.12.23.31.43.54.58.59.60|D
Diego Costa|AVA|54|86|163.669.110.203.67.886.719.215.112.934.159.395|1988||185|26|16|2.3.18.21.23.28.31.35.50.51.59|
Georginio Wijnaldum|MED|124|86|354.648.610.532.647.737.40.46|1990||173|96||2.4.31.33.42.52.54.58|
Mateo Kovacic|MED|40|87|277.440.721.215.551|1994||177|121|165|2.3.26.35.37.43.48.53.57.58.59|
İlkay Gündoğan|MED|2|87|620.157.551.127.371|1990||180|82||2.5.26.27.29.33.53.58|
Diego Godín|DEF|157|86|598.905.110.440.196.112.917|1986||188|161||3.21.51.59|
David Alaba|DEF|165|87|117.133.421.721.871|1992||180|117||3.5.11.26.27.54.56.58|
David de Gea|GR|54|87|104.110.552.356|1990||189|45||2.10.23.31.35.36.54.59|
Mauro Icardi|AVA|4|85|768.440.647.371|1993||181|8||4.21.37.42.53|
Koke|MED|54|85|104.110|1992||170|70||3.23.35.36.51.59|
Mario Götze|MED|2|87|157.133.648.281|1992||176|66||5.26.27.29.33.53.60|D
Sergi Roberto|MED|54|86|127.232.499|1992||178|17||3.22.26.35.36.58|
Heung-min Son|AVA|37|86|408.524.853.500|1992||183|151||21.31.40.42.59|E
Alexandre Lacazette|AVA|58|84|541.93.590|1991||175|16||15.16.24.41|
Marco Verratti|MED|84|84|674.647.38.39|1992||190|55||4.8.11.21.37.42.53|
Ciro Immobile|AVA|84|87|463.794.674.378.848.157.787.510.141.154.662|1990||182|57||6.8.21.33.37.48.53|
Stefan de Vrij|DEF|124|85|354.510.440.654|1992||189|79||6.21.43.54|
Granit Xhaka|MED|143|86|132.158.93.524.828|1992||185|152||5.15.16.56|
Paul Pogba|MED|58|88|552.463.587|1993||191|91||6.10.24.31.59.60|
Daniel Carvajal|DEF|54|88|524.721.379.1348|1992||168|52||3.8.11.23.35.36.43.56.57.58|
Saúl Ñíguez|MED|54|84|104.110.719.215.787.357|1994||183|19||3.34.35.36.51.53.59|
Marcelo Brozović|MED|40|85|592.277.440.52.59|1992||181|99||6.21.30.37|
Niklas Süle|DEF|2|85|421.133.157|1995||195|49||5.27.29.58|
Memphis Depay|AVA|124|86|648.552.541.127.110.234|1994||178|112||3.31.51.54.59|
Harry Maguire|DEF|76|87|790.426.929.518.552|1993||194|66||38.47.53|
Piotr Zielinski|MED|126|85|944.871.285.601.440|1994||180|113||6.11.25.48|
João Cancelo|DEF|127|86|140.888.440.463.551.133.127.45|1994||182|77||2.3.5.6.7.25.26.27.30.39.45.58|
Anthony Martial|AVA|58|87|541.587.552.787.12.577|1995||181|30||24.31.34.35.44.54.59|
Adrien Rabiot|MED|58|86|647.854.463.553.7|1995||191|69||4.6.11.24.48.53|
Corentin Tolisso|MED|58|83|541.133|1994||180|28||5.24.27.41.58.60|
Kepa Arrizabalaga|GR|54|85|101.184.144.688.886.215.721.160.93|1994||188|13||2.3.11.16.35.36.42.48.53.58.59|
Federico Dimarco|DEF|84|84|440.97.285.329.663.416|1997||175|38||6.21.37|
Nabil Fekir|MED|58|82|541.142.47.955|1993||173|25||24.60|
Milan Škriniar|DEF|52|84|768.440.647.351|1995||188|91||4.6.21.31.36|
Raúl Jiménez|AVA|111|83|77.110.140.934.367|1991||191|128||7.18.35.38.39.46.51.55|
Dele Alli|MED|76|84|543.853.299.141.232|1996||188|37||21.31.42|
Hakim Ziyech|AVA|102|85|414.334.32.215.371.39.159.957|1993||180|64|124|53.58|D
Ederson|GR|16|85|732.140.551.351|1993||188|32||2.7.11.26.39.46.58|
Youri Tielemans|MED|20|84|80.587.518.99.552|1997||176|93||34.45.47.59|
Luka Jović|AVA|145|84|294.140.281.721.356.7.12|1997||182|56||3.7.11.18.41.46.52.57.58|
Sergej Milinković-Savić|MED|145|83|911.377.510.45|1995||191|58|54|30.48|
Wilfred Ndidi|MED|115|83|377.518.141|1996||188|81|||
Manuel Akanji|DEF|143|85|337.132.157.551.440|1995||186|91||2.6.26.58|
Marc Cucurella|DEF|54|86|291.127.753.379.166.215.721|1998||173|35||8.31.42.60|
James Maddison|MED|76|82|236.616.26.518.853|1996||175|7||59|
Franck Kessié|MED|39|85|100.209.7.127.36|1996||183|108||3.6.48|
Naby Keïta|MED|68|84|316.767.705.532.923.352|1995||172|56||2.33.58|
Trent Alexander-Arnold|DEF|76|86|532.721|1998||175|36||2.13.31.33.53.56.58|
Christian Pulisic|MED|45|86|157.215.7|1998||177|90||41.42.52.53.58|D
Marcus Thuram|AVA|58|84|330.398.158.440|1997||192|35|84|6.24|
Ollie Watkins|AVA|76|83|164.99.45|1995||180|24||53.59|
Matthijs de Ligt|DEF|124|87|32.463.133.552|1999||189|52||5.6.47.48.53.54|
Theo Hernández|DEF|58|85|104.66.110.721.725.7.45|1997||184|49||6.24.35.41.52.57.58|
Davinson Sánchez|DEF|33|80|106.32.853.371|1996||188|87||20.21.31.42|
Nicolas Pépé|AVA|39|83|81.868.530.93.612.856.905|1995||183|60|58|16.17|D
Christopher Nkunku|MED|58|83|647.705.215.7|1997||178|18||4.24.42.53|
Dayot Upamecano|DEF|58|84|318.767.705.133|1998||186|48||5.24.53|
Mason Mount|MED|76|86|907.215.263.552|1999||181|36||21.47.48.53.58|
Benjamin Pavard|DEF|58|85|530.298.133.440.553|1996||186|55||5.6.24.27.58.60|
Cristian Romero|DEF|4|84|138.378.463.100.853.110|1998||188|60||21.48.49.59.60|
Ibrahima Konaté|DEF|58|85|330.705.532.721|1999||194|30||2.13.24.31.33|
Rafael Leão|AVA|127|85|812.530.7.371|1999||188|51||6.25.30.41.45.52|E
Dušan Vlahović|AVA|145|85|665.356.463.141|2000||190|41|||
Declan Rice|MED|76|85|925.93|1999||188|83||2.16.53|
Arthur Melo|MED|16|85|389.395.127.463.532.356.386.777|1996||171|22||3.33|
Richarlison|AVA|16|84|78.358.921.299.853|1997||184|54||11.21.38.43.59|
Marc Guéhi|DEF|76|84|215.830.243.551|2000||182|41|39|53|
Sandro Tonali|MED|84|83|165.7.610.853|2000||182|36||6.37|
Ferran Torres|AVA|54|86|888.551.127.647|2000||184|66||2.3.8.26.27.36.60|
Victor Osimhen|AVA|115|85|933.702.530.601.371|1998||186|51||6.21|
Takefusa Kubo|AVA|86|85|333.940.721.549.905.379.725|2001||169|54||11.57.59|D
Jules Koundé|DEF|58|86|156.787.127|1998||180|58||3.24.27.35.59|
Bryan Mbeumo|AVA|24|81|862.164.552|1999||171|35|58|47|D
Jurriën Timber|DEF|124|83|32.93|2001||179|26||2.16.54|
Martín Zubimendi|MED|54|82|725.93|1999||181|30||2.8.16.60|
Nahuel Molina|DEF|4|84|150.254.738.871.110.737|1998||175|65||49.51.60|
Morgan Gibbs-White|MED|76|80|934.830.790.617|2000||171|10||18.39.53|
Dejan Kulusevski|MED|142|83|100.663.463.853|2000||186|45||21.59|D
Bukayo Saka|AVA|76|86|93|2001||178|59||2.16.53|D
Cody Gakpo|AVA|124|85|648.532|1999||193|56||2.13.33.54|E
Gabriel|DEF|16|84|530.862.277.93|1997||190|24|33|2.11.16.17|
Lucas Paquetá|MED|16|83|357.7.541.925|1997||180|67||11.34.35.39|
Omar Marmoush|AVA|47|83|933.817.298.281.551.853|1999||180|58||20.26|
Douglas Luiz|MED|16|83|892.551.386.99.463.617|1998||175|18||11.26.59|
Tanguy Ndombélé|MED|58|82|75.541.853.601.371.612|1996||181|7||6.21.24.31.42|
Nick Woltemade|AVA|2|81|923.298.610.463|2002||198|14|||
Tijjani Reijnders|MED|124|82|645.22.707.7.551.55|1998||185|39||13.26.41.52|
Ansu Fati|AVA|54|85|127.166.587|2002||178|10|70|3.27|E
Reece James|DEF|76|85|215.929|1999||179|29||42.48.53.56.58|
Eberechi Eze|MED|76|83|698.936.243.93|1998||178|25||2.16.53|
Ronald Araujo|DEF|157|85|127.532.967.1109|1999||191|29||3.17.27|
Luis Díaz|AVA|33|85|459.325.532.133|1997||178|79||2.5.7.13.20.33.52|E
Jérémy Doku|AVA|20|83|80.731.551|2002||173|48||2.26.45|E
Min-jae Kim|DEF|37|84|458.122.351.601.133|1996||190|85||5.6.40.53.55|
Anthony Gordon|AVA|76|83|299.695.610.127|2001||183|28||11.27.38.43.53|E
Morgan Rogers|MED|76|84|924.551.160.147.565.99.215.983|2002||187|26||26.53.56.59|D
Matheus Cunha|AVA|16|83|329.705.418.110.934.552|1999||184|28||11.35.47.51.55|D
Jonathan David|AVA|25|82|465.530.463.110|2000||178|85|45|4.41|
Micky van de Ven|DEF|124|82|336.933.853|2001||193|28||59|
Xavi Simons|MED|124|83|647.648.705.853|2003||179|34||4.36.42|D
Elliot Anderson|MED|76|81|610.169.617.551|2002||179|21||39.53|
Julián Alvarez|AVA|4|85|734.551.110|2000||169|61||2.26.49.58.60|
Antoine Semenyo|AVA|60|82|168.828.160.551.1164|2000||185|38|76||D
Antony|AVA|16|84|834.32.552.142|2000||172|16||47|D
Rayan Cherki|MED|58|83|541.551|2003||176|18||24.26.41|D
Rasmus Højlund|AVA|43|83|233.827.100.552.601|2003||191|39||21.47|
Nuno Mendes|DEF|127|84|812.647|2002||183|53||4.7.25.36.42.45.47.58|
João Pedro (2001)|AVA|16|81|358.921.166.215|2001||186|8||11.56|
Benjamin Sesko|AVA|53|82|318.767.705.552|2003||195|45||47|
Evan Ferguson|AVA|78|77|166.925.737|2004||183|26|||
Gabriel Martinelli|AVA|16|85|450.93.45|2001||180|27||2.11.16|E
João Neves|MED|127|84|140.647|2004||171|30||4.7.36.45.58|
Bradley Barcola|AVA|58|84|541.647.532|2002||182|32||4.24.36.58|E
Nico Williams|AVA|54|83|638.101.144.184|2002||181|38||8.60|E
Hugo Ekitiké|AVA|58|82|820.893.647.281.532|2002||190|8||4.13.24.36|
Nico O'Reilly|DEF|76|83|551|2005||193|13||26.53|
Adam Wharton|MED|76|80|146.243|2004||182|4||53|
Aleksandar Pavlovic|MED|2|83|133|2004||188|17||5.53|
Warren Zaïre-Emery|MED|58|83|647|2006||178|13||4.24.36.58|
Kobbie Mainoo|MED|76|85|552|2005||175|14||47.53|
Kenan Yıldız|AVA|152|83|460.463|2005||185|31|2||E
Arda Güler|MED|152|86|351.721|2005||176|36||3.11.30.31.56|D
Dean Huijsen|DEF|54|81|586.460.463.737.160.721|2005||197|8|124|31.56|
Nico Paz|MED|4|80|721.232.1348|2004||185|14|142|3.11.49.58|
Junior Kroupi|AVA|58|77|319.160|2006||179||||
Pau Cubarsí|DEF|54|83|386.127|2007||184|23||3.27.60|
Estêvão|AVA|16|80|653.215|2007||176|14||9.11.56|D
Yan Diomande|AVA|39|81|186.705.721|2006||182|15||31|E
Vítor Baía|GR|127|84|325.127|1969||186|80||3.7.20.25.28.31.54.58.59|
Kompany|DEF|20|85|80.408.551|1986||193|89||2.26.37.45|
Stam|DEF|124|85|645.747.648.552.510.7.32|1972||191|67||2.10.11.37.54.58|
Jordi Alba|DEF|54|88|384.888.127.442|1989||170|98||3.8.22.23.35.36.58|
Makélélé|MED|58|86|818.600.553.203.721.215.647|1973||174|71|129|2.3.4.23.31.44.58|
Paulo Futre|AVA|127|84|812.325.110.140.553.728.7.925.941|1966||176|41||6.7.19.20.58|E
Mário Jardel|AVA|16|86|892.395.325.371.812.155.611.66.389.136.83.610.240.202|1973||188|10||7.25.50|
Madjer|AVA|5|82|855.325.888.700.1275|1958||178|87||7.58|E
Kluivert|AVA|124|87|32.7.127.610.888.648.530|1976||187|79||3.19.54.58|
Foden|MED|76|85|551|2000||171|49||2.26.53.58|
Forlán|AVA|157|87|438.552.905.110.440.443.208.677|1979||179|112||2.10.44.59|
Trezeguet|AVA|58|87|683.587.463.430.734.611.1335|1977||190|71||4.6.8.11.19.24.44.60|
Pablo Aimar|MED|4|83|297.734.888.779.140|1979||170|52||3.7.17.30.43.44.59|
Dejan Stankovic|MED|145|86|294.510.440|1978||181|103||6.31.37.43.44.58|
Cristian Chivu|DEF|132|85|32.737.440|1980||184|75||6.19.31.37.43.44.58|
Patrice Evra|DEF|58|87|580.612.587.552.463.553.925|1981||173|81|135|2.6.10.24.58|
Alberto Gilardino|AVA|84|86|679.416.663.7.356.154.378.652.285.674.810.1321|1982||185|57||11.58.60|
Mario Gómez|AVA|2|87|298.133.356.141.933|1985||189|80||5.29.54.58|
Víctor Valdés|GR|54|88|127.552.822.565|1982||183|20||3.8.23.26.54.58.60|
José Antonio Reyes|AVA|54|86|787.93.721.110.140.291.246|1983||178|22||3.15.19.51.59|D
Pepe Reina|GR|54|87|127.905.532.601.133.7.99.510.232|1982||183|36||5.8.23.26.35.43.48.60|
Jesús Navas|DEF|54|86|787.551|1985||170|56||2.8.23.26.35.36.59.60|D
Hugo Lloris|GR|58|86|612.541.853.500|1986||188|145||12.21.24.31.42.60|
Maicon (1981)|DEF|16|86|242.587.440.551.737.240|1981||184|76||6.24.31.37.43.44.50.58|
Javier Mascherano|MED|4|88|734.234.925.532.127.296|1984||174|147||3.17.26.36.43.58|
Diego Milito|AVA|4|85|710.378.779.440|1979||183|25||6.17.31.43.44.58|
Júlio César|GR|16|86|357.218.440.698.849.140|1979||186|87||6.7.30.31.37.43.44.46.50.58|
Edin Dzeko|AVA|21|86|840.933.551.737.440.351.356.782.1013.1001|1986||193|152||2.5.31.37.41|
Blaise Matuidi|MED|58|85|862.763.647.463.442|1987||180|84||4.6.11.24.48.60|
Mario Mandzukic|AVA|40|87|277.933.133.110.463.39.7|1986||190|89||5.6.26.51.58|
Marco Reus|MED|2|87|158.157.499|1989||180|48||29.33.53|
Marko Arnautovic|AVA|165|84|334.440.923.825.925.154.294|1989||189|137||6.31.58|
Toby Alderweireld|DEF|20|85|32.110.805.853.39.744|1989||187|127||3.31.42.45.51|
Jan Vertonghen|DEF|20|85|32.707.853.140.80|1987||189|157||7.12.30.31.42.45|
Wojciech Szczesny|GR|126|86|93.164.737.463.127|1990||196|84||3.6.15.25.27.48|
Andrej Kramaric|AVA|40|83|277.592.404.518.421|1991||180|119||2.44|
Willian|AVA|16|86|234.788.85.215.93.367.632.395|1988||175|70||2.16.21.31.38.48.50.55.59|E
Nicolás Otamendi|DEF|4|85|917.325.112.888.551.140.734|1988||183|140||2.7.12.18.26.30.31.39.41.49.55.59.60|
Henrikh Mkhitaryan|MED|6|86|563.788.157.552.93.737.440|1989||177|95||6.16.31.33.41.53.59|
César Azpilicueta|DEF|54|86|638.181.553.215.110.787|1989||178|44||2.21.23.24.31.35.36.43.48.51.53.58.59|
Nacho Fernández|DEF|54|87|721.55.1348|1990||179|29||3.8.11.23.31.35.36.43.57.58|
Jordan Henderson|MED|76|87|828.236.532.40.32.164.215|1990||182|91||2.19.33.53.56.58|
Pedro (1987)|AVA|54|87|127.215.737.510|1987||169|65||2.3.8.21.23.26.35.36.41.48.58.59.60|D
Olivier Giroud|AVA|58|87|393.316.855.578.93.215.7.500.530|1986||193|137||4.6.15.24.48.58.59.60|
Julian Draxler|AVA|2|85|933.647.140.964.782|1993||185|58||4.7.27.29.42.53.60|E
Antonio Rüdiger|DEF|2|87|298.737.215.721|1993||190|86||3.11.21.27.29.31.48.53.56.58.59|
James Rodríguez|MED|33|87|286.125.325.587.721.133.299.57.632.834.719.527.569.106|1991||180|131||3.5.7.11.12.20.35.43.44.55.57.58.59|D
Juan Cuadrado|AVA|33|85|436.871.513.356.215.463.440.100.681.567|1988||178|116||2.6.20.21.48|D
Kyle Walker|DEF|76|86|615.790.853.698.99.551.7.175|1990||178|96||2.12.19.26.42.52.58|
Marcel Sabitzer|MED|165|84|718.705.767.133.552.157|1994||176|102||5|
Stefan Savic|DEF|109|84|665.551.356.110.856|1991||187|81||2.3.37.51.59|
Emiliano Martínez|GR|4|85|93.641.789.742.934.379.720.99.215|1992||195|70||15.16.49.56.59.60|
Marcos Alonso|DEF|54|85|721.155.356.828.215.127.203.1348|1990||189|9||2.3.21.35.36.48.53.58.59|
Hakan Çalhanoğlu|MED|152|85|479.408.524.7.440|1994||176|108|2|6|
Allan (1991)|MED|16|82|892.871.601.299.159.959|1991||175|10||11.43.48|
Paco Alcácer|AVA|54|84|888.379.127.157.905|1993||174|19||3.23.35.36.39.59|
Luis Alberto|MED|54|80|787.532.586.262.510.39.972|1992||182|1||33.35.48|
Jordan Pickford|GR|76|85|828.177.198.162.695.299.1180|1994||185|93||11.38.43.53|
Nicolás Tagliafico|DEF|4|83|125.722.438.32.541|1992||172|83||41.49.60|
Rodrigo|AVA|54|83|140.155.888.516.57.43.1348.1347|1991||180|28|16|7.17.23.30.34.35.36.39|D
Yannick Carrasco|MED|20|84|587.110.60|1993||180|78||3.34.44.45.51.55.59|E
Wilfried Zaha|AVA|39|82|243.552.197.371.541.212|1992||180|38||41.54|E
Wissam Ben Yedder|AVA|58|82|854.787.587.957|1990||170|19||24.34|
Benjamin Mendy|DEF|58|82|511.553.587.551.319.338.685|1994||185|10||2.4.17.24.26.34.60|
Leandro Paredes|MED|4|84|150.218.737.285.947.647.463|1994||184|84||4.31.37.42.44.49.53.60|
Pierre-Emile Højbjerg|MED|43|84|133.115.805.853.553.782|1995||185|101||5.21.26.31|
Nathan Aké|DEF|124|84|215.720.921.160.551.351|1995||180|62||2.21.26.31.43.54.58.59|
Clément Lenglet|DEF|58|85|19.787.127.853.99.110.140|1995||186|16||3.21.24.27.38|
Mike Maignan|GR|58|85|647.530.7|1995||191|51||4.6.11.17.24.41.52|
Florian Thauvin|AVA|58|82|393.746.530.553.610.843.871.521|1993||179|13||12.17.24.43.60|D
Julian Brandt|MED|2|83|524.157.32|1996||185|48||27.29|D
Fred|MED|16|85|443.788.552.351.112|1993||169|32||31.41|
Stanislav Lobotka|MED|52|83|613.203.601|1994||170|76|84|6.21|
Andreas Christensen|DEF|43|86|215.158.127|1996||187|81||2.3.21.27.31.48.53.58.59|
Federico Bernardeschi|AVA|84|85|356.241.463.849.154|1994||185|39||6.8.37.48|D
Alessio Romagnoli|DEF|84|84|737.768.7.510.59|1995||190|13||6.37.48|
Oleksandr Zinchenko|DEF|153|85|788.872.551.648.93.617.32|1996||175|75||2.16.26|
José Gayà|DEF|54|77|888|1995||172|22||36.39|
Moussa Dembélé|AVA|58|80|367.204.541.110.40|1996||183|||3.51|
Thomas Partey|MED|60|85|104.110.549.72.93.905.60|1993||185|61||3.16.51.59|
André Onana|GR|24|85|32.440.552.856|1996||185|53||47|
Patrik Schick|AVA|32|83|806.153.768.737.705.524|1996||187|56||5.41.56|
Iñaki Williams|AVA|60|74|101.184.144|1994||186|31|54|35|D
Rodrigo De Paul|MED|4|84|710.888.871.110.442|1994||180|95||39.49.51.60|
Joe Gomez|DEF|76|83|213.532|1997||188|15||2.13.33.58|
Ángel Correa|AVA|4|83|771.110.843.734|1995||173|28||3.49.51.59.60|D
Presnel Kimpembe|DEF|58|84|647.700|1995||183|28||4.24.36.42.53.58.60|
Tomáš Souček|MED|32|82|802.804.925|1995||192|93||35.39|
Donny van de Beek|MED|124|83|32.552.299.281.386|1997||184|19|||
Ferland Mendy|DEF|58|86|511.541.721|1995||180|10||3.11.24.31.56.57.58|
Fikayo Tomori|DEF|76|83|215.166.426.263.7|1997||185|6|25|6.21.41.48.52.53|
Brahim Díaz|AVA|102|86|551.721.7|1999||170|35|54|2.3.6.11.26.31.56.57.58|D
Jarrod Bowen|AVA|76|81|426.925|1996||175|22||35.38.39.53|D
Scott McTominay|MED|51|86|552.601|1996||190|73|76|6.21.31|
Ben Chilwell|DEF|76|84|425.518.215.243.293|1996||178|21||42.44.53.58|
Hirving Lozano|AVA|111|84|649.648.601.770.499|1995||175|76||6.11|E
Lucas Torreira|MED|157|84|674.768.93.110.356.371|1996||168|43||3.16.17.51|
Dani Ceballos|MED|54|86|142.143.721.93|1996||179|13||3.11.16.35.36.56.57.58|
Çağlar Söyüncü|DEF|152|82|365.518.110.351.956|1996||185|61||31.51|
Donyell Malen|AVA|124|83|648.157.99.737|1999||179|56||54.59|D
Tammy Abraham|AVA|76|83|215.168.830.99.737.7.141|1997||190|11||21.31.41.44.48.52.58.59|
Denis Zakaria|MED|143|83|786.942.158.463.215.587|1996||191|69|||
Ben White|DEF|76|82|166.675.516.93.1164|1997||186|6||2.16.17.53|
Mikel Merino|MED|54|84|181.638.157.610.725.93|1996||188|55||2.8.16.43.53.60|
Giovani Lo Celso|MED|4|83|738.647.142.853.905|1996||177|68||4.21.31.42.49.53|
Kalvin Phillips|MED|76|82|516.551.925.447.790|1995||178|31||2.17.26.58|
Rodrigo Bentancur|MED|157|85|150.463.853|1997||185|80||6.17.21.48.59|
Teun Koopmeiners|MED|124|83|22.100.463|1998||184|33||13.54.59|
Moise Kean|AVA|84|84|463.416.299.647.356.232|2000||183|28||6.11.37.38.42.43.53|
Loïs Openda|AVA|20|81|224.907.521.705.463.541|2000||175|35||41.45|
Carlos Soler|MED|54|82|888.647.925.725|1997||183|15||4.35.36|
Alessandro Buongiorno|DEF|84|81|199.848.857.601|1999||190|12||6.21|
Nico Schlotterbeck|DEF|2|82|365.874.157|1999||191|30||27|
Nicolò Zaniolo|MED|84|81|440.737.371.99.100.356.871|1999||190|19||31.37.41|D
Moussa Diaby|AVA|58|81|241.647.524.99.46|1999||170|11||4.24.52.53.56|D
Houssem Aouar|MED|5|81|541.737.46|1998||175|26|58|24.31.52|
Pau Torres|DEF|54|82|905.586.99|1997||191|24||59|
Éder Militão|DEF|16|86|834.325.721|1998||186|38||3.11.31.52.56.57.58|
Exequiel Palacios|MED|4|82|734.524.447|1998||177|43||5.49.56.60|
Ademola Lookman|AVA|115|83|213.299.705.367.518.100.110|1997||174|45|76|38.59|E
Amine Gouiri|AVA|5|79|541.612.731.553|2000||180|27|58||E
Youssef En-Nesyri|AVA|102|83|586.105.186.787.351.46|1997||188|92||31.35.52.59|
Curtis Jones|MED|76|84|532.440|2001||185|6||2.13.33.53|
Joshua Zirkzee|AVA|124|82|133.663.80.154.552|2001||193|8||5.27.47.58|
Yann Bisseck|DEF|2|77|231.422.735.908.25.440|2000||196|2||6|
Brennan Johnson|AVA|123|80|617.853.243.299.983|2001||186|49|76|59|D
Wesley Fofana|DEF|58|82|763.518.215|2000||186|1||24.42.56|
Josko Gvardiol|DEF|40|83|277.705.551|2002||185|56||2.26|
Renan Lodi|DEF|16|82|102.110.617.553.45.112|1998||178|19||3.30.51|
Lisandro Martínez|DEF|4|85|254.611.32.552|1998||175|38||47.49.60|
Jeremie Frimpong|DEF|124|82|204.524.532|2000||171|15||5.13.56|D
Amadou Onana|MED|20|82|408.530.299.99|2001||192|33|135|45.59|
Conor Gallagher|MED|76|83|215.213.830.924.243.110.853|2000||182|22||42.53|
William Saliba|DEF|58|84|763.93.612.553|2001||192|38||2.16.24|
Karim Adeyemi|AVA|2|82|767.318.157.127|2002||176|13||27|D
Riccardo Calafiori|DEF|84|82|737.378.132.154.93|2002||188|17||2.16.31.41|
Kaoru Mitoma|AVA|86|80|485.875.166|1997||178|31|||E
Bremer|DEF|16|83|112.848.463|1997||188|8||11|
Bruno Guimarães|MED|16|83|102.541.610.93|1997||182|51||11.16|
Mason Greenwood|AVA|76|83|552.379.553.351|2001||181|1||31|D
Alexis Mac Allister|MED|4|85|89.166.150.532|1998||176|57||2.13.33.49.60|
Amad Diallo|AVA|39|84|100.552.717.828|2002||173|23||47|D
Mykhaylo Mudryk|AVA|153|82|788.94.264.215.853|2001||175|28||41.42.56|E
Mohammed Kudus|AVA|60|83|613.32.925.853|2000||175|46||35|D
Álex Baena|MED|54|82|905.386.110|2001||174|28||8.59.60|E
Santiago Gimenez|AVA|111|82|185.354.7.325|2001||182|52|4|13|
Edmond Tapsoba|DEF|18|80|520.908.524|1999||190|67||5.56|
Oihan Sancet|MED|54|80|638.101.144|2000||188|4|||
Anthony Elanga|AVA|142|82|552.617.610|2002||178|34||39|D
Levi Colwill|DEF|76|82|215.425.166|2003||187|5||42.53.56|
Iliman Ndiaye|AVA|135|81|790.553.299.551.1009|2000||180|45|58||D
Alejandro Balde|DEF|54|85|291.127|2003||175|7||3.27|
Enzo Fernández|MED|4|85|734.254.140.215.551|2001||178|51||7.42.49.60|
Ilya Zabarnyi|DEF|153|82|275.160.647|2002||189|61||4.36.58|
Piero Hincapié|DEF|49|83|438.182.524.93|2002||184|56||2.5.16.56|
Igor Thiago|AVA|16|79|242.538.224.164|2001||193|5||50|
Savinho|AVA|16|80|112.862.648.386.551.853|2004||176|13||11.26|E
Abdukodir Khusanov|DEF|158|79|521.551|2004||186|33||26|
Pablo Barrios|MED|54|81|104.110|2003||191|4||51|
Nicolas Jackson|AVA|135|83|188.905.215.133.99|2001||187|40||5.42|
Mathys Tel|AVA|58|81|731.133.853|2005||183|||5.53.59|
Álvaro Carreras|DEF|54|84|262.721.552.695.390.140|2003||186|1||18.31.56|
Mateus Fernandes|MED|127|74|812.292.805.925.853|2004||178|1||7.39.47|
Ethan Nwaneri|MED|76|82|93.553.157|2007||184|||2.16|D
Luka Vuskovic|DEF|40|79|405.714.473.853.408.166|2007||193|10|||
Leny Yoro|DEF|58|81|530.552|2005||190|1||41.47|
Victor Froholdt|MED|43|76|233.325|2006||176|16||7|
Johan Manzambi|MED|143|79|365.99|2005||182|20|||
Endrick|AVA|16|82|653.721.541|2006||173|24||9.11.31.41.56|
Carlos Baleba|MED|24|80|530.166.552|2004||179|16||41.47|
Jérémy Jacquet|DEF|58|76|731.223.532|2005||188|2|||
Murillo|DEF|16|75|234.617|2002||182|1||11.39.55|
Rayan|AVA|16|76|892.160|2006||185|7|||D
Lennart Karl|MED|2|82|133|2008||168|4||5|
Essien|MED|60|86|746.541.215.721.7.654|1982||177|59||2.4.11.12.31.43.50.58|
Juninho Pernambucano|MED|16|82|811.892.541.43.608|1975||179|40||4.50|
Rafa Márquez|DEF|111|87|109.587.127.608.527.416|1979||182|147||3.4.24.26.58|
William Gallas|DEF|58|85|759.553.215.93.853.672|1977||181|84||2.12.15.31.44|
Shaun Wright-Phillips|AVA|76|84|551.215.698.608|1981||168|36||2.19.31.37|D
Michael Carrick|MED|76|87|831.925.145.853.552|1981||188|35||2.10.19.31.54.58.59|
Mahamadou Diarra|MED|100|82|623.907.541.721.587.367|1981||183|72||3.4.19.31|
Florent Malouda|AVA|58|86|502.398.541.215.856.323|1980||184|84||2.4.11.12.43.50.58|E
Adrian Mutu|AVA|132|84|308.440.416.663.215.18.463.356.209.4.676.304.1335|1979||180|77||19.44|
Simone Perrotta|MED|84|84|729.463.128.218.737|1977||178|48|76|11.36.44.60|
Walter Samuel|DEF|4|85|611.150.737.721.440.132|1978||183|56||6.17.19.31.37.43.44.58|
Mirko Vucinic|AVA|109|84|513.737.463.47|1983||186|49||6.21.44|
Juan Carlos Valerón|MED|54|82|507.549.110.262|1975||186|46||14.44|
Joaquín|AVA|54|83|143.142.888.586.356|1981||179|51|||D
Simão|AVA|127|85|812.127.140.110.141.291|1979||170|85||7.20.25.28.42.50.54.59|E
Lukas Podolski|AVA|2|87|231.133.93.440.371.906.84.401|1985||182|130|126|5.15.29.37.60|E
Santi Cazorla|MED|54|86|905.586.93.59.723|1984||165|81||8.15.23.35.36|
Júlio Baptista|MED|16|84|834.787.721.93.737.586.242.637.191|1981||185|47||3.15.19.44.50|
João Moutinho|MED|127|84|812.325.587.934.163|1986||171|147||4.7.8.12.18.20.25.32.34.35.39.40.44.50.55.59|
Fernando Llorente|AVA|54|85|101.144.463.787.830.853.601.871.753.184|1985||195|29||6.8.11.17.23.42.59.60|
Branislav Ivanovic|DEF|145|86|624.535.215.947.924|1984||188|105||2.11.12.21.31.37.43.50.58.59|
Mario Balotelli|AVA|84|87|440.551.7.532.612.553.165.580.29.329.378|1990||189|36||2.6.21.31.33.37.58|
Stevan Jovetić|AVA|109|84|665.356.551.440.787.587.418.632.633|1989||183|95||2.34.37|
Dries Mertens|AVA|20|85|465.882.648.601.371.1324|1987||169|109||11.43.45.48|D
Paulinho (1988)|MED|16|85|704.234.853.127.36.1321.1336|1988||182|56||3.12.42.50.55|
Duván Zapata|AVA|33|82|183.296.601.871.768.100.848|1991||188|34||20.43.44.48|
Pablo Sarabia|MED|54|83|721.379.787.647.812.934.38.1348|1992||176|27||4.42.47.53.55|D
Lucas Moura|AVA|16|83|834.647.853|1992||172|37||4.21.31.42.50|D
Hulk|AVA|16|84|280.485.844.325.947.112.358.946|1986||180|49||7.12.28.50.55.59|
Joel Matip|DEF|24|85|532.782|1991||195|27|2|2.33.58|
Xherdan Shaqiri|MED|143|86|132.133.440.825.532.541.217|1991||169|125|89|2.5.26.33.37.58|D
Gylfi Sigurdsson|MED|82|84|720.793.239.421.830.853.299.540.1332|1989||186|90||11.12.38.43|
Kieran Trippier|DEF|76|84|551.129.175.853.110.610.934|1990||178|54||2.3.37.42.51.55|
Thomas Meunier|DEF|20|84|224.647.157.856.530.828|1991||190|83||4.45.53|
Thorgan Hazard|MED|20|84|521.215.949.158.157.648.80|1993||174|47||31.43.45|D
Konstantinos Manolas|DEF|63|83|12.632.737.601.764.1012|1991||187|42||11.25.34|
Suso|MED|54|83|532.72.7.378.787.245|1993||177|5||35.36.59|D
Emre Can|DEF|2|85|133.524.532.463.157|1994||184|48||5.6.27.29.33.48|
Matthias Ginter|DEF|2|83|365.157.158|1994||191|51||27.29.33.53.60|
Lucas Digne|DEF|58|85|530.647.737.127.299.99|1993||178|64||3.4.11.24.36.38.43.59|
Idrissa Gueye (1989)|MED|135|84|530.99.299.647.958|1989||174|143||4.18.38.42.53|
Alessandro Florenzi|DEF|84|85|737.241.888.647.7|1991||173|49||6.8.21.31.36.37.41.42.52.53|
Jesse Lingard|MED|76|86|552.518.145.166.263.925.617.327.234|1992||175|32||10.31.54.59|D
Alex Oxlade-Chamberlain|MED|76|85|805.93.532.141.204|1993||180|35||2.15.33|
Leandro Trossard|AVA|20|84|377.536.473.625.166.93.141|1994||172|59||2.16.45|E
Danilo (1991)|DEF|16|86|78.777.325.721.551.463.357|1991||184|75||2.3.6.7.11.26.34.35.41.43.48.50.55.57.58|
Kurt Zouma|DEF|58|84|763.215.825.299.925.54.191.62|1994||190|11||2.21.24.31.35.38.48.58|
Yussuf Poulsen|AVA|43|82|540.705.408|1994||193|87|||
Felipe Anderson|AVA|16|81|777.510.925.325.653|1993||175|2||9.48.52|E
Filip Kostić|MED|145|84|712.312.298.408.281.463.351.648|1992||184|76||31.59|D
Andrea Belotti|AVA|84|84|652.848.737.356.232.140.196.575|1993||181|44||8.18.31.37|
Eric Dier|MED|76|84|812.853.133.587|1994||188|49||5.21.28.31.34.42.53|
Domenico Berardi|AVA|84|82|781.463|1994||183|27||8.37|D
Michy Batshuayi|AVA|20|84|822.553.215.157.888.243.141.351.371.281.955|1993||185|55||2.17.21.30.45.48.53|
Sébastien Haller|AVA|39|83|15.882.281.925.32.157.186.775|1994||191|34|58||
Emerson|DEF|84|83|777.652.737.215.541.925.553|1994||175|29|16|8.35.37.48.53.58.59|
Tiemoué Bakayoko|MED|58|82|731.587.215.7.601.319.642|1994||189|1||4.6.21.24.34.48.53|
Luke Shaw|DEF|76|84|805.552|1995||178|34||31.42.47.54.59|
Ante Rebić|AVA|40|84|356.705.416.281.7.141.513.405|1993||185|42||6|E
Lucas Ocampos|AVA|4|82|734.587.553.378.7.787.32.577|1994||187|12||17.34.35.44.49.59|E
Arkadiusz Milik|AVA|126|85|401.524.115.32.601.553.463|1994||186|73||11.25.48|
Nico Elvedi|DEF|143|82|338.158.516|1996||188|77|||
Alejandro Grimaldo|DEF|54|82|140.524.110.127|1995||170|14||5.7.8.18.30.46.56.60|
John McGinn|MED|51|83|816.419.99|1994||178|93||59|
Jonathan Tah|DEF|2|83|408.302.524.133|1996||193|53||5.27.29.56|
Adama Traoré (1996)|AVA|54|86|127.99.565.934.367.925.262|1996||178|8||3.18.35.36.38.39.58|D
Alex Meret|GR|84|83|871.760.601|1997||190|3||6.8.11.21.37|
Alex Iwobi|MED|115|85|93.299.367|1996||180|101||11.15.38.43|E
Ivan Toney|AVA|76|80|615.129.610.793.783.929.675.164.36|1996||179|10||43.53|
Dominic Solanke|AVA|76|82|215.907.532.160.853|1997||187|5||21.31.33.53.59|
Unai Simón|GR|54|83|101.184.144|1997||192|69||8.60|
David Raya|GR|54|84|146.164.93|1995||184|14||2.8.16.60|
Manuel Locatelli|MED|84|85|7.781.463|1998||186|36||8.37|
Serhou Guirassy|AVA|68|82|819.530.15.231.75.731.298.157|1996||187|30|58||
Miguel Almirón|AVA|122|82|506.108.610.1369|1994||174|82|||D
Lorenzo Pellegrini|MED|84|83|737.781|1996||186|36||31.37.41.44|
Dominic Calvert-Lewin|AVA|76|82|790.615.299.516|1997||187|14||11.38.43.53|
Denzel Dumfries|DEF|124|85|807.414.648.440.721|1996||188|82||6.31.54|
Malcom|AVA|16|82|234.156.127.947.45.47|1997||171|2||3.30|D
Christoph Baumgartner|MED|165|81|421.705|1999||178|58|||
Krzysztof Piatek|AVA|126|82|944.237.378.7.418.356.764.131.39|1995||183|39||25|
Diego Carlos|DEF|16|80|834.667.292.600.787.99.351.232.663.1298|1993||186|||35.44.52.59|
Diogo Jota|AVA|127|86|668.325.110.934.532|1996||178|49||2.13.25.33.39.41.45.51|E
Robin Le Normand|DEF|54|82|818.725.110|1996||187|28|58|8|
Ismaël Bennacer|MED|5|82|5.93.855.285.7.553.277.43|1997||175|57|58|6.15.41.52|
Frank Anguissa|MED|24|84|553.367.905.601|1995||184|67||6.21.38|
Arnaut Danjuma|AVA|124|81|589.224.160.905.853.299.386.888|1997||178|6|115|54|E
Diogo Costa|GR|127|82|325|1999||192|52|143|7.25.45.52|
Sven Botman|DEF|124|80|414.530.610|2000||193|||4|
Nayef Aguerd|DEF|102|82|266.731.925.725.553|1996||190|66||35|
Dan Ndoye|AVA|143|79|509.612.132.154.617|2000||184|41|||D
Leon Bailey|AVA|85|83|377.524.99.737.632|1997||181|41||59|D
Yoane Wissa|AVA|129|81|502.81.819.4.319.164.610|1996||176|45|58||E
Edson Álvarez|MED|111|83|77.32.925.351|1997||185|102||35.39|
Giacomo Raspadori|AVA|84|80|781.601.110.100|2000||173|47||6.8.21.37.48|
Felix Nmecha|MED|2|82|551.933.157|2000||190|14||26|
Ismaïla Sarr|AVA|135|81|323.731.921.553.243|1998||180|88|||D
Francisco Trincão|AVA|127|82|163.127.934.812.36|1999||186|22||7.9.18.25.45.47|D
Nikola Milenković|DEF|145|83|665.356.617|1997||195|71||39|
Jørgen Strand Larsen|AVA|116|79|312.203.934.243|2000||193|33||43.55|
Maxence Lacroix|DEF|58|81|330.933.243.215|2000||190|11||56|
Edouard Mendy|GR|135|83|820.731.215.36.553|1992||194|60|58|53.58|
Angelo Stiller|MED|2|80|133.421.298|2001||183|9||27|
Christos Tzolis|AVA|63|79|642.616.334.302.224.93|2002||174|37||9.16|E
Mattéo Guendouzi|MED|58|83|319.93.418.553.510.351|1999||185|14||16.24.48|
Eric García|DEF|54|85|551.127.386|2001||182|24||2.3.26.27.60|
Nico González (2002)|MED|54|84|127.888.325.551.610|2002||191|||26.52|
David Neres|AVA|16|83|834.32.788.140.601|1997||175|8||6.7.21|D
Josip Stanisic|DEF|40|82|133.524|2000||186|38|2|5.53.56|
Pape Gueye|MED|135|80|511.553.787.905.921|1999||189|49|58|12|
Nico González (1998)|AVA|4|83|89.298.356.463.110|1998||180|59||49|E
Giorgi Mamardashvili|GR|61|82|888.532.1016|2000||197|42||13|
Jacob Ramsey|MED|76|80|99.270.610|2001||180||||
Tino Livramento|DEF|76|81|805.610|2002||173|6||53|
Noni Madueke|AVA|76|83|648.215.93|2002||182|16||2.16.42.53|D
Giovanni Reyna|MED|45|81|157.617.158|2002||185||76||
James Garner|MED|76|82|552.921.617.299|2001||182|5||31|
Malick Thiaw|DEF|2|81|7.610.782|2001||194|9||41.52|
Dani Vivian|DEF|54|81|66.184.144.188.101|1999||184|11||8|
Mateo Retegui|AVA|84|79|150.296.182.842.378.100.55|1999||186|28|4||
Destiny Udogie|DEF|84|79|416.871.853|2002||187|12||21.59|
Kang-in Lee|MED|37|83|888.549.647.110|2001||173|53||4.36.40.58|D
Joan García|GR|54|82|291.127|2001||194|3||3.27.60|
Bart Verbruggen|GR|124|80|80.166|2002||193|37|||
Johan Bakayoko|AVA|20|78|648.705|2003||179|18|||D
Pape Matar Sarr|MED|135|82|323.853.463|2002||185|44||21.59|
Giorgio Scalvini|DEF|84|80|100|2003||194|11||37.48.59|
Strahinja Pavlović|DEF|145|82|665.587.207.132.767.7|2001||194|59||41.52|
Jan Paul van Hecke|DEF|124|79|588.166.414.146.853|2000||189|18|||
Rayan Aït-Nouri|DEF|5|80|81.934.551|2001||180|34|58|18.26.35.39.55|
Éderson|MED|16|77|242.234.360.764.100|1999||182|5||11.48.55.59|
Castello Lukeba|DEF|58|79|541.705|2002||184|1||24|
Manu Koné|MED|58|80|854.158.737|2001||185|22||24.44|
Roméo Lavia|MED|20|82|551.805.215|2004||181|5||26.42.56|
Jarell Quansah|DEF|76|81|532.169.524|2003||190|9||2.13.33.53|
Victor Boniface|AVA|115|79|152.875.524.923|2000||189|13||5.56|
Jarrad Branthwaite|DEF|76|80|198.299.146.648|2002||195|3||11.43.53|
Jamie Gittens|AVA|76|81|157.215|2004||175|||56|E
Rico Lewis|DEF|76|82|551|2004||169|5||2.26.53.58|
Abde Ezzalzouli|AVA|102|80|430.127.638.142|2001||178|40|||E
Milos Kerkez|DEF|73|82|7.22.160.532.1024|2003||180|35|145|13|
Alberto Moleiro|AVA|54|75|507.905|2003||169||||E
Andrey Santos|MED|16|79|892.215.617.293.552|2004||180|8||11.39.42.47|
Maghnes Akliouche|AVA|58|81|587.647|2002||183|12||24.36|D
Alejandro Garnacho|AVA|4|84|552.215.99|2004||180|8|54|47.49.56|E
Can Uzun|MED|152|79|620.281|2005||186|10|2||
Alex Scott|MED|76|77|168.160|2003||178|2|66||
Myles Lewis-Skelly|DEF|76|82|93|2006||178|10||2.16.53|
Senny Mayulu|MED|58|81|647|2006||183|||4.36.58|
Ibrahim Maza|MED|5|78|418.524|2005||177|24|2||
Lamine Camara|MED|135|78|400.323.587|2004||173|50|||
Pio Esposito|AVA|84|77|440.810|2005||191|13||6|
Yankuba Minteh|AVA|148|80|626.610.354.166|2004||180|20||13|D
Franco Mastantuono|AVA|4|81|734.721.356|2007||177|6||31.49.56|D
Ayyoub Bouaddi|MED|102|78|530.551|2007||185|10|58||
Geovany Quenda|AVA|127|78|812.215|2007||172||70|7.47.56|D
Said El Mala|AVA|2|76|231|2006||183|2|||E
Dida|GR|16|86|280.242.320.234.7.693.395.443|1973||195|91||6.11.50.58.60|
Fernando Couto|DEF|127|84|325.345.27.663.127.510|1969||184|110||3.6.7.20.37.44.50.54.59|
Humberto Coelho|DEF|127|81|140.647|1950||185|64||7|
David Luiz|DEF|16|86|834.280.140.215.647.93.357.360.651|1987||189|57||2.4.7.12.16.21.30.31.43.48.50.58.59|
Mozer|DEF|16|82|357.140.553.482|1960||187|32||4.7|
Paulo Sousa|MED|127|84|140.812.463.157.440.663.654.291|1970||177|51||6.7.20.58|
Okocha|MED|115|84|281.351.647.155.700.426|1973||175|73|||
Chalana|AVA|127|80|140.156.120.295|1959||165|27||4.7|E
Simão Sabrosa|AVA|127|85|812.127.140.110.141.291|1979||170|85||7.20.25.28.42.50.54.59|E
João Vieira Pinto|AVA|127|82|149.110.104.140.812.163|1971||170|81||7.20.25|
Tomas Rosicky|MED|32|85|806.157.93|1980||180|105||5.15|
John Arne Riise|DEF|116|86|24.587.532.737.367.17.1364|1980||185|110||4.43.44.58|E
Damien Duff|AVA|78|84|146.215.610.367.557|1979||176|100||2.31.44|D
Darren Fletcher|MED|51|86|552.924.825|1984||183|80||2.10.54.58|
Jamie Carragher|DEF|76|86|532|1978||185|39||19.43.58.59|
Joe Cole|MED|76|85|925.215.532.530.99.236|1981||175|56||2.11.19.31.44.50|D
Djibril Cissé|AVA|58|84|15.532.553.828.654.510.698.43.497.746.217.1224.1226.943|1981||183|41||28.43.58|
Ricardo Quaresma|AVA|127|85|812.127.325.440.215.141.484.908|1983||175|84||6.7.8.20.25.28.31.35.40.50.58|D
Daniel Van Buyten|DEF|20|85|702.822.553.551.408.133|1978||203|83||5.26.54.58|
Ludovic Giuly|AVA|58|85|541.587.127.737.647.319|1976||164|18||3.4.24.58|D
Seydou Keita|MED|100|86|553.319.521.787.127.888.737|1980||183|102||3.26.58|
Jérémy Toulalan|MED|58|83|600.541.586.587.156|1983||183|36||4.34.44|
Antonio Cassano|AVA|84|85|128.737.721.768.7.440.663.416|1982||175|39||3.19|
Per Mertesacker|DEF|2|86|923.93|1984||200|104||15.29.60|
Andrea Barzagli|DEF|84|86|679.97.218.652.933.463|1981||187|73||5.6.21.60|
Carlos Marchena|DEF|54|84|787.140.888.905.262.1330|1979||183|69||3.8.23.43.44.59.60|
David Albelda|MED|54|82|888.905|1977||183|51||3.43.44.59|
Thiago Motta|MED|84|86|127.110.378.440.647|1982||187|32|16|3.4.6.11.21.31.43.44.54.58|
Javier Saviola|AVA|4|86|734.127.587.787.721.140.586.632.416|1981||169|39||3.7.17.24.30.54.58.59|
Daley Blind|DEF|124|86|32.312.552.133.386|1990||180|108||5.31.54.59|
Goran Pandev|AVA|97|85|440.810.510.601.371.378.663|1983||184|122||6.31.43.44.58|
Luisão|DEF|16|83|242.140|1981||193|44||7.25.30.46.50|
Ashley Young|DEF|76|86|921.99.552.440.299.447|1985||175|39||2.6.10.19.21.31.54.59|D
Darijo Srna|DEF|40|83|405.788.196|1982||182|134||41.59|
Raúl Albiol|DEF|54|86|379.888.721.601.905.681|1985||190|58||3.8.11.23.31.35.36.43.44.48.59.60|
Álvaro Negredo|AVA|54|84|719.72.721.787.551.888.565.141.51.245.886.1348|1985||186|21||2.8.23.39|
Giuseppe Rossi|AVA|84|83|552.610.663.905.356.203.523.378.760.766|1987||174|30|45|2.10.44|
Lucho González|MED|4|83|427.734.325.553.57.102|1981||186|45||4.7.17.24.28.41.55|
Fernandinho|MED|16|85|102.788.551|1985||179|53||2.26.50.59|
Álvaro Arbeloa|DEF|54|85|779.721.262.532.925.1348.1347|1983||184|56||3.8.11.23.31.43.58.60|
Juan Manuel Vargas|AVA|125|82|228.201.356.378.142|1983||180|62|||D
Antonio Valencia|DEF|49|87|905.929.552.503.701|1985||180|99||2.10.31.54.59|D
Fábio Coentrão|DEF|127|85|732.140.597.779.721.587.812|1988||178|52||3.7.11.20.25.30.31.34.40.43.57.58|D
Nani|AVA|127|88|812.552.351.888.510.637.895.556.29.295.960|1986||175|113|23|2.8.10.20.25.32.38.40.50.54.55.58|E
Sokratis Papastathopoulos|DEF|63|84|12.378.7.923.157.93.632.142|1988||186|90||6.16.25.33.53|
Axel Witsel|MED|20|85|822.140.947.157.110.386.612.946|1989||186|140||12.30.45.51|
Dušan Tadić|AVA|145|84|911.312.334.805.32.351.589.959|1988||181|115||31|D
Alexandre Pato|AVA|16|85|443.7.234.834.215.905.637|1989||180|27||6.11.50|
Marouane Fellaini|MED|20|86|822.299.552|1987||194|87||31.45.54.59|
Claudio Bravo|GR|29|86|227.725.127.551.142|1983||184|150||2.3.17.26.36|
Adam Lallana|MED|76|85|805.160.532.166|1988||172|34||2.33.42.58|
Rui Patrício|GR|127|84|812.934.737.100.37|1988||189|108||8.25.28.30.31.34.38.39.40.45|
Jonas|AVA|16|81|396.777.395.693.888.140|1984||181|12||7.18.30.46.50|
Ezequiel Lavezzi|AVA|4|84|296.771.601.647.297|1985||173|51||4.11|E
Aleksandar Mitrović|AVA|145|84|665.80.610.367.45.57|1994||189|106||30.38.43|
Javier Pastore|MED|4|84|182.427.652.647.737.283.700|1989||187|29||4.11.41|
Andriy Yarmolenko|AVA|153|83|264.275.157.925.37|1989||189|127|134||D
Bernd Leno|GR|2|84|524.93.367|1992||189|9||16.29.38|
Steven Nzonzi|MED|58|83|75.146.825.787.737.371.731.57.492.869|1988||196|20||24.41.59.60|
Nemanja Matić|MED|145|86|215.907.140.552.737.731.541.781|1988||194|48||2.7.11.21.30.31.41|
Keylor Navas|GR|38|87|67.523.721.647.617.611.865|1986||185|129||3.4.11.35.36.42.43.53.57.58|
Alex Sandro|DEF|16|85|102.777.325.463.357|1991||180|46||6.7.11.34.35.41.48.50.55|
Shinji Kagawa|MED|86|85|208.157.552.141.779.642.797|1989||175|97||2.5.10.33.53|
Kevin Volland|AVA|2|81|1.421.524.587.874|1992||179|15||29|D
Ricardo Rodríguez|DEF|143|84|338.933.7.648.848.142|1992||180|148|||
Shkodran Mustafi|DEF|2|85|299.768.888.93.523.782|1992||184|20||15.16.29.39.60|
Thomas Delaney|MED|43|82|233.923.157.787.421.80|1991||182|81||35|
Emil Forsberg|AVA|142|82|550.705.608|1991||178|92|||E
Leonardo Spinazzola|DEF|84|84|463.285.794.100.673.737.601.1226|1993||186|27||6.8.21.31.37.41.48|
Luis Muriel|AVA|33|83|260.871.390.513.768.787.356.100.637.459|1991||178|45||20.59|
Jesús Corona|AVA|111|79|577.334.325.787|1993||173|71||7.32.35.39.52|D
Rafinha|MED|16|83|127.203.440.647.725.38|1993||174|2||3.4.26.36.42.53.58|
Remo Freuler|MED|143|83|337.391.321.100.617.154.632|1992||180|98||39|
Felipe (1989)|DEF|16|81|704.234.325.110.617|1989||190|2||3.7.39.51.52|
Iñigo Martínez|DEF|54|83|725.101.127.52|1991||182|29||3.23.27.30.35.36|
Jordan Veretout|MED|58|82|600.99.763.356.737.553.541.38|1993||177|6||24.31.41|
Alassane Pléa|AVA|58|80|541.15.612.158.648|1993||180|1||24|E
Leander Dendoncker|MED|20|82|80.934.99.601.723.405|1995||178|32||18.39.45|
Giovanni Di Lorenzo|DEF|84|85|729.285.601|1993||184|56||6.8.11.21.37|
Raphaël Guerreiro|MED|127|85|759.319.157.133|1993||170|65|58|5.8.25.45.53|
Gerard Moreno|AVA|54|82|905.549.291|1992||180|21||59|
James Ward-Prowse|MED|76|81|805.925.617.175|1994||177|11||35.39.42|
Seko Fofana|MED|39|81|551.367.746.871.521.52.40.731.325|1995||183|35|58|7|
Héctor Bellerín|DEF|54|84|921.93.142.127.812|1995||178|5||3.15.16.35.36.47|
Ben Davies|DEF|123|83|830.853|1993||181|104||21.31.42.59|
Bryan Cristante|MED|84|82|7.140.652.674.100.737|1995||186|48||7.8.30.31.37.41.44.46|
Elseid Hysaj|DEF|1|84|285.601.510|1994||182|103||11.48|
Mario Pašalić|MED|40|85|405.215.283.587.7.809.100|1995||188|93|2|21.31.34.48.59|
Ruslan Malinovskyi|MED|153|82|328.788.948.377.100.553.378.856|1993||181|71||41|D
Lukas Klostermann|DEF|2|80|898.705|1996||187|22||27.29|
Ricardo Pereira|DEF|127|78|908.325.612.518|1993||175|7||7.25.32.35.39.41.46.52|
Dakonam Djené|DEF|149|76|9.797.379|1991||178|93|||
Konrad Laimer|MED|165|83|767.318.705.133|1997||179|63||5.53|
Rúben Neves|MED|127|81|325.934.45|1997||185|73||18.25.30.32.35.39.45|
Joaquín Correa|AVA|4|82|296.768.787.510.440.553.159|1994||188|20||48.49|
Wout Weghorst|AVA|124|82|310.417.22.933.175.141.552.421.32.334|1992||197|53||54|
Thilo Kehrer|DEF|2|82|647.925.587.32.782|1996||186|28||4.27.29.42.53|
Rafa Silva|AVA|127|82|349.163.140.141|1993||170|25||7.8.18.25.28.30.38.41.46.52|D
Jan Bednarek|DEF|126|82|514.805.99.325|1996||190|79||7.25|
Ayoze Pérez|AVA|54|82|189.610.518.142.905|1993||179|5||8.43|E
Harry Winks|MED|76|82|853.768.518.196|1996||178|10||21.31.42|
Gelson Martins|AVA|127|81|812.110.587.632|1995||173|21|23|25.30.34.51|D
João Palhinha|MED|127|82|582.812.120.137.163.367.133.853.140|1995||190|40||5.7.9.25.30.32.38.47|
Gregor Kobel|GR|143|83|421.115.298.157|1997||194|30|||
Joachim Andersen|DEF|43|79|334.768.541.367.243|1996||190|55||38|
Timothy Castagne|DEF|20|83|377.100.518.367|1995||180|73||38.45|
Aleksandr Golovin|MED|134|82|194.587|1996||178|53||34|E
Viktor Tsygankov|AVA|153|81|275.386.32|1997||177|71|83||D
Issa Diop|DEF|102|80|854.925.367.447|1997||194|12|58|38|
Allan Saint-Maximin|AVA|58|80|763.587.746.612.610.36.351.77.521.212|1997||173|||31.34|E
Robin Gosens|DEF|2|83|309.907.417.100.440.874.356.782|1994||181|24||27.29|
David Brooks|AVA|123|79|790.160.805|1997||173|46|76||D
Florian Neuhaus|MED|2|81|1.158.302|1997||182|10||27.29|
Álvaro Odriozola|DEF|54|83|725.721.133.356|1995||175|4||3.5.11.27.35.57.58|
Mario Hermoso|DEF|54|84|721.245.886.291.110.737.524.1348.1347|1995||184|5||3.36.44.51.56.57|
Steven Bergwijn|AVA|124|82|648.853.32.46|1997||171|35||21.31.52.54|E
Guglielmo Vicario|GR|84|81|871.895.196.673.285.853.463|1996||194|5||59|
Eric Bailly|DEF|39|83|291.905.552.553.141.723.230|1994||187|50||31.59|
Sofyan Amrabat|MED|102|84|882.354.224.416.356.552.351.142.32|1996||183|78|124|31|
Yerry Mina|DEF|33|83|261.437.653.127.299.356.196|1994||194|55||3.11.20.38.43|
Milot Rashica|AVA|89|81|907.923.616.371.141|1996||177|69|||D
Nikola Vlašić|MED|40|83|405.299.194.925.848|1997||178|69||38|
Kieran Tierney|DEF|51|83|204.93.725|1997||178|58|81|16|
Nené|MED|127|72|776.454.1360|1995||184|||7|
Albert Gudmundsson|MED|82|82|648.22.378.356.510|1997||177|49||13|
Brais Méndez|MED|54|80|203.725.230|1997||187|4||36|
Gianluca Scamacca|AVA|84|82|781.238.645.97.378.925.100|1999||195|25||37.48.59|
Matvey Safonov|GR|134|80|494.647|1999||192|18||4.36.58|
Daniel James|AVA|123|83|830.793.552.516.367|1997||171|68|76|17.38|D
Everton|AVA|16|74|395.183.140.357.777|1996||174|25||30.50|E
Jonathan Ikoné|AVA|58|80|647.578.530.356.232.662|1998||175|4||4.24|D
Justin Kluivert|MED|124|64|32.737.705.612.888.160|1999||171|14||31.41.54|D
Takehiro Tomiyasu|DEF|86|84|119.797.154.93.32.243|1998||188|46||16|
Weston McKennie|MED|45|85|463.516.782|1998||185|80||42|
Joelinton|MED|16|81|811.421.718.610|1996||186|8||11|D
Jonathan Burkardt|AVA|2|78|548.281|2000||181|8|||
Mile Svilar|GR|20|80|80.140.737|1999||189|4||7.18.30.31.44.46|
Joe Willock|MED|76|81|93.610|1999||186|||15.16.59|
Noussair Mazraoui|DEF|102|83|32.133.552|1997||183|53|124|5.47.53|
Merih Demiral|DEF|152|82|812.65.781.463.100.36|1998||192|68||6.48|
Cengiz Ünder|AVA|152|82|131.737.518.553.351.500.141.956|1997||173|51||31.41|D
Guido Rodríguez|MED|4|76|734.254.226.77.142.925.888|1994||185|30||35.39.49.60|
Artem Dovbyk|AVA|153|81|269.566.835.749.386.737.154|1997||189|41||44|
Dan-Axel Zagadou|DEF|58|80|157.298|1999||196||||
Trevoh Chalobah|DEF|76|83|215.447.425.319.243.232|1999||192|3|137|42.48.53|
Jerdy Schouten|MED|124|80|10.838.300.154.648|1997||185|17|||
Pervis Estupiñán|DEF|49|82|503.726.921.390.72.549.638.905.166.7|1998||175|58||38.59|
Antonee Robinson|DEF|45|80|299.155.929.367|1997||183|62|76|38.42.45|
Hiroki Ito|MED|86|78|599.298.133.974|1999||188|32||5|
Daichi Kamada|MED|86|84|281.797.510.243.1079|1996||180|57||48.59|
Ozan Kabak|DEF|152|81|371.298.532.616.421.782|2000||186|33||33|
Ferdi Kadıoğlu|MED|152|81|589.351.166|1999||174|35|124|30.55|D
Evan Ndicka|DEF|39|79|15.281.737|1999||192|28|58|31.44.59|
Ibrahim Sangaré|MED|39|74|854.648.617|1997||191|63||39|
Axel Disasi|DEF|58|82|662.820.587.215.99.925.243|1998||190|5||24.39.42.56|
Emile Smith Rowe|MED|76|82|93.705.425.367|2000||182|3||16.38|
Callum Hudson-Odoi|AVA|76|82|215.524.617|2000||182|3||39.48.53.56.58.59|E
Ethan Ampadu|MED|123|82|215.705.790.895.810.516|2000||182|67|76|21.48.53.59|
Ryan Sessegnon|DEF|76|81|367.853.421|2000||178|||21.31.38.42|E
Brenden Aaronson|MED|45|76|678.767.516.874.1114|2000||178|61||42|D
Davide Frattesi|MED|84|82|781.97.285.580.440.510|1999||178|38||6.37|
Boubacar Kamara|MED|58|80|553.99|1999||184|5||12.24.59|
Maxi Gómez|AVA|157|80|255.203.888.856.245.598|1996||186|32|||
Eljif Elmas|MED|97|84|351.601.705.848.100|1999||182|83||6.11.21.48|
Samuel Chukwueze|AVA|115|82|905.7.367|1999||172|60||38.41.52.59|D
Dávid Hancko|DEF|52|80|356.806.354.110|1997||188|63||13|
Yves Bissouma|MED|100|82|530.166.853.32|1996||181|50||17.21.59|
Ezri Konsa|DEF|76|83|213.164.99.93|1997||183|30||16.53.59|
Jean-Philippe Mateta|AVA|58|80|502.541.511.548.243|1997||192|7||24|
Lutsharel Geertruida|DEF|124|81|354.705.828.648|2000||184|21||13|
Quinten Timber|MED|124|80|882.354.553.243|2001||177|17||13|
Jakub Kiwior|DEF|126|81|810.93.325|2000||189|49||7.16.25|
Pedro Gonçalves|MED|127|80|934.345.812.356|1998||173|4||7.25.39.41.45.47|D
Aaron Ramsdale|GR|76|83|790.160.93.805.610.1245.1280|1998||188|5||16|
Nicolò Fagioli|MED|84|82|460.463.238.356|2001||178|9||37|
Charles De Ketelaere|MED|20|83|224.7.100|2001||192|39||45.48.59|
Martin Terrier|AVA|58|78|530.293.541.731.524|1997||183|||17.56|E
Andrea Cambiaso|DEF|84|73|378.285.463.154|2000||183|19|||
João Félix|AVA|127|85|140.110.215.127.7.52|1999||180|61||3.7.18.25.30.45.46.51.52|
Lucas Chevalier|GR|58|78|530.885.647|2001||189|1||4.24.36.41.58|
Benoît Badiashile|DEF|58|81|587.215.601|2001||194|2||24.34.42.56|
Khéphren Thuram|MED|58|81|587.612.463|2001||191|4|84|24.34|
Malik Tillman|MED|45|81|133.717.648.524|2002||187|39|2|5.42.53|
Nathan Collins|DEF|78|79|825.175.934.164|2001||193|40||35|
Kevin Schade|AVA|2|77|365.164|2001||185|7|||E
Brian Brobbey|AVA|124|82|32.705.828|2002||180|17|||
Crysencio Summerville|AVA|124|78|309.10.516.925.45.354|2001||174|10||17.35.39|E
Aaron Wan-Bissaka|DEF|129|84|243.552.925.99|1997||183|18|76|35.39|
Ian Maatsen|DEF|124|80|215.213.236.175.157.99|2002||178|1||42.53.59|D
Neco Williams|DEF|123|82|532.367.617|2001||183|61||2.33.38.39|
Folarin Balogun|AVA|45|81|93.565.820.587|2001||178|31||16.42|
Jamie Leweling|AVA|2|76|394.874.298|2001||184|6|||D
Fisnik Asllani|AVA|89|75|421.117|2002||191|20|2||
Maximilian Kilman|DEF|76|71|934.925|1997||192|||18.35.39|
Dilane Bakwa|AVA|58|74|156.293.617.530|2002||179||||D
Cheick Doucouré|MED|100|76|521.243|2000||180|14|||
Darwin Núñez|AVA|157|84|677.72.140.532.45.958|1999||187|44||2.13.17.18.30.33|
Gonçalo Inácio|DEF|127|81|812|2001||185|22||7.41.45.47|
Harvey Elliott|MED|76|82|367.532.146.99.888|2003||170|||2.13.33.59|
Yéremy Pino|AVA|54|82|905.243|2002||172|27||59.60|D
Enzo Millot|MED|58|77|587.298.36.958|2002||174|||18.34|
Maxi Araújo|DEF|157|74|697.845.812.1103|2000||176|34||7.17.41.47|D
Thiago Almada|MED|4|79|917.108.159.541.110.734|2001||171|21||41.49.60|E
Maximilian Beier|AVA|2|81|421.157|2002||182|10|||E
Pierre Kalulu|DEF|58|82|7.463|2000||182|5||6.24.41.52|
Jean-Clair Todibo|DEF|58|81|854.127.140.612.925.521.782|1999||190|2||3.24.30.35.39|
Liam Delap|AVA|76|80|551.825.695.426.447.215.617|2003||186|||2.26|
Malo Gusto|DEF|58|83|541.215|2003||179|16||24.42.56|
Georgiy Sudakov|MED|153|80|788.140|2002||177|38|134|31.38|D
Conor Bradley|DEF|79|82|532.155|2003||180|30||2.13.33|
Kaishu Sano|MED|86|77|546.482.548|2000||176|19|||
Odilon Kossounou|DEF|39|81|410.224.524.100|2001||191|40||5.48.56|
Gavi|MED|54|88|127|2004||173|32||3.27.60|
Cristhian Mosquera|DEF|54|80|888.93|2004||191|2||2.16|
Jhon Durán|AVA|33|79|286.217.99.52.351.947.140|2003||185|17||30.38|
Bilal El Khannouss|MED|102|80|377.518.298|2004||180|46|20||
Elye Wahi|AVA|39|78|578.521.553.281.612|2003||181|8|58||
Mohamed Simakan|DEF|58|78|293.705.52|2000||187|||30|
Yasin Ayari|MED|142|79|14.166.236.146|2003||172|27|||
Petar Sučić|MED|40|80|277.440|2003||183|25|21|6|
Máximo Perrone|MED|4|78|917.551.507.232|2003||178|2||2.26.49|
Lewis Hall|DEF|76|80|215.610|2004||179|6||42.53|
Nathaniel Brown|DEF|2|79|620.281.133|2003||180|10|||
Gerard Martín|DEF|54|79|127|2002||186|||3.27|
Evanilson|AVA|16|77|358.325.160|1999||181|2||7.11.52|
Matias Fernandez-Pardo|AVA|20|80|465.530.610|2005||188|7|||D
Noah Sadiki|MED|129|75|80.875.828|2004||173|26|20||
Georges Mikautadze|AVA|61|81|323.706.32.541.905|2000||175|47|58|41|
João Gomes|MED|16|78|357.934.99|2001||176|10||11.55|
Giuliano Simeone|AVA|4|81|110.104.779.66|2002||173|17||49.51|D
Mohamed Amoura|AVA|5|78|320.875.933.612.1094|2000||168|52|||
Alan Varela|MED|4|75|150.325|2001||177|||7.52|
Jobe Bellingham|MED|76|81|145.828.157|2005||191||||
Mamadou Sangaré|MED|100|75|767.318.392.949.836.718.521.164|2002||181|19|||
Tom Bischof|MED|2|79|421.133|2005||183|3||5|
Dango Ouattara|AVA|18|79|319.160.164|2002||177|44|||D
Michael Kayode|DEF|84|76|356.164|2004||179|3|||
Ange-Yoan Bonny|AVA|39|78|663.440.502|2003||189|5|58|6|
Valentín Barco|MED|4|78|150.166.787.293.215|2004||170|7||49.56|
Lucas Bergvall|MED|142|79|170.268.853|2006||187|18||59|
Tyler Dibling|AVA|76|75|805.299|2006||178||||D
Lucas Beraldo|DEF|16|81|834.647|2003||182|5||4.11.36.58|
Habib Diarra|MED|135|79|293.828|2004||179|24|||
Antonio Nusa|AVA|116|79|224.705.225.1053|2005||180|34|||E
Jorrel Hato|DEF|124|82|32.215|2006||182|10||56|
Archie Gray|MED|76|80|516.853|2006||187|||59|
Finn Jeltsch|DEF|2|73|620.298|2006||188||||
Patrick Dorgu|AVA|43|79|513.552|2004||185|16||47|E
Hugo Larsson|MED|142|64|550.281.367|2004||187|15|||
Raúl Asencio|DEF|54|75|721.1348|2003||184|||11.31.56|
Mikel Jauregizar|MED|54|77|101.184.144|2003||177|1|||
Vitor Roque|AVA|16|79|242.102.127.142.653|2005||172|2||9.11.27|
Rodrigo Mora|MED|127|79|325.737|2007||168|||7|D
Wesley (2003)|DEF|16|76|357.737|2003||173|8||11|
Bazoumana Touré|AVA|39|77|20.410.421.610|2006||175|10|||E
Christian Kofane|AVA|24|75|67.524|2006||189|7|||
Jorge Costa|DEF|127|82|325.669.554.213.822|1971||188|50||7.20.25.31.58|
Maniche|MED|127|84|140.74.325.276.215.110.440.231.812|1977||173|54||2.7.20.31.37.50.58.59|
Balakov|MED|17|82|812.298|1966||176|92||20.29|
Pauleta|AVA|127|84|776.292.262.156.647|1973||180|88||3.50|
Jordão|AVA|127|80|140.779.812.909|1952||179|43|3|7|
Yazalde|AVA|4|80|438.812.553.611.427|1946||176|10||7|
Roque Santa Cruz|AVA|122|85|133.146.551.142.586.185.528.598.1015|1981||191|112||2.5.37.58|
Claudio Pizarro|AVA|125|85|923.133.215.231.1068|1978||184|85||5.26.50.58|
Alou Diarra|MED|58|85|133.511.532.717.746.521.541.156.553.925.731.213.19|1981||190|44||4.5.24.43.58|
Martín Demichelis|DEF|4|85|734.133.586.110.551.291|1980||184|51||2.5.51.54|
Shay Given|GR|78|84|831.146.828.610.551.99.565.825|1976||185|134||2.37|
Gareth Barry|MED|76|85|99.551.299.924|1981||183|54||2.19.37.45|
James Milner|MED|76|86|516.831.610.99.551.532.166|1986||175|61||2.19.33.37.58|D
Scott Parker|MED|76|83|213.616.215.610.925.853.367|1980||175|18||2.12.19.31|
Louis Saha|AVA|58|85|323.610.367.552.299.853.828.510|1978||185|20||2.10.58|
Nigel de Jong|MED|124|85|32.408.551.7.499.371.548.964|1984||174|81||2.37.54|
Sébastien Squillaci|DEF|58|82|587.4.541.787.93.746.1265|1980||185|24||4.15.24|
Philippe Mexès|DEF|58|84|15.737.7|1982||187|29||44|
Mario Yepes|DEF|33|84|260.734.600.647.218.7.100.771|1976||186|102||6|
Massimo Ambrosini|MED|84|85|209.7.356.1226|1977||182|35||6.11.14.19.58|
Marco Borriello|AVA|84|83|859.858.7.285.729.768.378.737.463.925.199.100.196.760|1982||186|7||6.11.21.36.44.58|
Vincenzo Iaquinta|AVA|84|84|650.871.463.209|1979||189|40||6.21.44.60|
Antonio Di Natale|AVA|84|83|285.890.871|1977||170|42|||
Amauri|AVA|84|82|663.601.679.285.218.652.463.356.848.1028.1314.1249.1284|1980||186|1|16|44|
Raúl Tamudo|AVA|54|80|291.66.725.719.649|1977||180|15||42|
Paulo Ferreira|DEF|127|86|292.909.325.215|1979||183|64||2.7.11.12.20.30.31.43.50.58.59|
Luiz Gustavo|MED|16|84|192.421.133.933.553.351.52.834.102|1987||187|41||5.50.55.58|
Lorik Cana|MED|1|83|647.553.828.371.510.600|1983||186|94|89||
Diego Lugano|DEF|157|83|598.834.351.647.586.924.429.1108|1980||188|95||11|
Liedson|AVA|127|82|235.357.234.812.325|1977||175|15|16|7.20.25.32.40.55|
Alex|DEF|16|84|777.215.648.647.7|1982||188|18||2.4.11.12.31.50.58|
Dante|DEF|16|84|462.530.702.822.158.133.933.612|1983||188|13||5.26.50.58|
Sulley Muntari|MED|60|86|871.692.440.828.7.46.674.262.67|1984||179|84||6.31.43.44.58|
Yoann Gourcuff|MED|58|83|731.7.156.541.266|1986||185|31||4.11.24.58|
Mousa Dembélé|MED|20|83|135.22.367.853.993|1987||185|82||12.42.45.54|
Filipe Luís|DEF|16|85|355.32.262.110.215.357.1348|1985||182|44||2.3.30.31.50.51.59|
Fabio Quagliarella|AVA|84|84|848.356.97.768.871.601.463|1983||180|28||6.21.37.44|
Lassana Diarra|MED|58|85|511.215.93.692.721.85.535.553.647.47|1985||173|34||2.3.4.15.24.31.53|
Antonio Candreva|MED|84|85|841.871.18.463.663.209.510.440.768.764|1987||180|54||21.44|D
Salvatore Sirigu|GR|84|84|652.238.647.787.638.848.378.601.356.612.478|1987||192|28||4.8.11.21.37|
Bacary Sagna|DEF|58|85|15.93.551.139.579|1983||176|65||15.24.26|
Clint Dempsey|AVA|45|84|607.367.853.784|1983||185|141||12|
Lisandro López|AVA|4|81|710.325.541.43.443.108.780|1983||174|7||7.28|D
Samir Handanovic|GR|53|85|871.858.510.440|1984||193|81||6.21.37|
Yohan Cabaye|MED|58|83|530.610.647.243.51.763|1986||174|48||4.24|
Jakub Blaszczykowski|AVA|126|84|930.157.356.933|1985||175|110||5.25.33.53|D
Miranda|DEF|16|85|235.330.834.110.440.1183|1984||186|58||3.37.50.51.59|
Theo Walcott|AVA|76|85|805.93.299|1989||176|48||11.15.19.38|D
Diego López (1981)|GR|54|83|187.9.721.905.787.7.291.719.1348.1347|1981||196|4||3.11.19.23.58|
Roberto Soldado|AVA|54|83|721.638.379.888.853.905.351.390.523.1348|1985||179|12||3.12.19.23.42|
Felipe Melo|MED|16|83|357.242.395.549.709.72.356.463.371.440.653.358|1983||183|22||6.9.21.37.50|
Ezequiel Garay|DEF|4|84|611.709.721.140.947.888.946|1986||189|32||7.12.30.31|
Dejan Lovren|DEF|40|86|277.541.805.532.947.642|1989||188|78|21|2.33.42.58|
Fernando Gago|MED|4|85|150.721.737.888.917|1986||178|61||3.31.36|
Joe Hart|GR|76|85|793.551.147.145.848.925.175.853.204|1987||196|75||2.19.26.31.37|
Jonny Evans|DEF|79|86|744.552.828.924.518|1988||188|107||2.10.47.54.58|
André Ayew|AVA|60|83|553.319.5.830.925.351.59.617.511.588|1989||176|120|58|4.17.24|D
Moussa Sissoko|MED|58|84|854.610.853.921.600.654|1989||187|71||24.31.42.43|
Kamil Glik|DEF|126|83|680.652.128.848.587.139.237.1347|1988||190|103||4.34|
Danny Rose|DEF|76|83|516.853.921.675.168.828.610|1990||173|29||12.31.42|
Hernanes|MED|16|84|834.510.440.463.811|1985||180|27||6.37.50|
Holger Badstuber|DEF|2|84|133.298.321.782|1989||189|31||5.11.26.29.54.58|
Morgan Schneiderlin|MED|58|83|293.805.552.299.612.926.492.488|1989||181|15||11.24.31.38.42.54.59|
Fernando Muslera|GR|157|84|598.510.371.296.1103|1986||191|137|4|17.37|
Asier Illarramendi|MED|54|83|725.721.250|1990||179|7||11.35.58|
Dani Parejo|MED|54|82|698.722.721.379.888.905.1348|1989||182|4||36.39.59|
Marcos Acuña|DEF|4|80|710.812.150.787.734.1002|1991||172|62||30.32.35.49.59.60|
Kwadwo Asamoah|MED|60|85|848.871.463.440.196|1988||173|74||6.21|D
Vitolo|AVA|54|81|507.787.110.379|1989||184|12||3.23.35.51.59|E
Kevin Strootman|MED|124|83|807.882.648.737.553.378.196|1990||186|46||12.54|
Luka Milivojevic|MED|145|82|712.711.294.80.632.243.51|1991||184|38||38.40.55|
Seydou Doumbia|AVA|39|82|20.483.942.194.737.610.132.812.386.329|1987||179|37||30|
Nico Gaitán|MED|4|81|140.150.110.530.163.668.69.217.677.780|1988||173|19||7.30.46.51.59|D
Victor Wanyama|MED|128|79|135.204.805.853.1057.579|1991||188|64||31.42|
Aïssa Mandi|DEF|5|80|820.142.905.530.523|1991||186|123|58||
Stephan El Shaarawy|AVA|84|85|378.650.7.587.737.755|1992||178|32||21.31.34.37.44|E
Simone Zaza|AVA|84|82|100.768.461.97.781.463.925.888.848|1991||186|18||6.21|
Ander Herrera|MED|54|85|258.779.101.552.647.150|1989||182|2||4.17.31.35.42.53.54.59|
Marc Bartra|DEF|54|86|291.127.157.142.856|1991||184|21||3.22.23.26.35.36.53.58|
Sebastián Coates|DEF|157|82|598.532.828.812|1990||196|51||7.30.32.47|
Erik Lamela|AVA|4|84|734.737.853.787.12|1992||189|25||12.31.35.36.42.59|D
Germán Pezzella|DEF|4|82|734.142.356.677|1991||187|42||49.60|
Michael Keane|DEF|76|82|552.518.263.146.175.299|1993||191|12||10.11.38.43.54|
Carlos Bacca|AVA|33|76|459.224.787.7.905.390.260|1986||181|52||59|
Willian José|AVA|16|79|834.395.777.721.779.507.725.934.142.809.279.1348|1991||186|||11.39|
Callum Wilson|AVA|76|82|236.160.610.925.164|1992||180|9||39|
Kerem Demirbay|MED|2|78|408.0.302.421.524.371.301.484|1993||185|2||29.56|
Cédric Bakambu|AVA|129|82|330.176.905.122.553.632.371.51.142.770|1991||183|72|58||D
Geoffrey Kondogbia|MED|58|82|521.787.587.440.888.110.553|1993||188|27||3.24.34.37.44.51|
Ross Barkley|MED|76|84|299.789.516.215.99.612.539|1993||189|33||45.48.53.59|
Marten de Roon|MED|124|82|807.414.100.565.737|1991||185|44||54.59|
Danilo Pereira|MED|127|83|663.90.735.554.325.647.46|1991||188|74|70|4.7.8.25.32.35.36.39.42.45.52.53|
Matías Vecino|MED|157|84|598.356.196.285.440.510.203|1991||187|70||6.17.21.48|
Ryan Fraser|AVA|51|81|26.160.447.610.805.926.544|1994||163|26|||E
Vincent Aboubakar|AVA|24|83|580.885.319.325.141.52.411.151|1992||184|117||7.32.35.39.52|
Divock Origi|AVA|20|85|377.530.532.933.7.617|1995||185|32||2.4.33.39.41.45.52.58|
Djibril Sidibé|DEF|58|82|862.530.587.299.12.854.512|1992||183|18||4.11.24.34.38.60|
Berat Djimsiti|DEF|1|80|338.100.118.139.958|1993||190|77|143|18.59|
Takumi Minamino|AVA|86|84|208.767.532.805.587|1995||172|73||2.33|E
Matteo Politano|AVA|84|83|737.673.674.781.440.601|1993||170|20||6.21.37|D
Morgan Sanson|MED|58|79|512.578.553.99.293.612|1994||180|||12|
Sardar Azmoun|AVA|80|83|745.741.947.524.737|1995||186|93||20.31.56|
Jean-Philippe Gbamin|DEF|39|76|521.548.299.194.856.869.600.338.323.195|1995||186|24||11.38.43|
Shoya Nakajima|AVA|86|79|844.333.690.39.325.37.84.881|1994||167|19||7.52|D
Maximilian Eggestein|MED|2|79|923.365|1996||181|||29|
Florian Grillitsch|MED|165|81|923.421.32.886.163.366|1995||186|61|||
Julian Weigl|MED|2|81|1.157.140.158.55|1995||187|6||7.27.29.30.53|
Ruben Loftus-Cheek|MED|76|83|215.243.367.7|1996||191|11||2.21.31.41.48.52.53.59|
Chancel Mbemba|DEF|129|79|80.610.325.553.530.958|1994||182|117||7.18.43.52|
Álex Remiro|GR|54|80|101.184.144.523.754.725|1995||192|2||8|
Stefano Sensi|MED|84|79|209.781.236.440.768.580.83.195.1030|1995||168|9||6.21.37|
Lucas Vázquez|DEF|54|85|721.291.524.1348.1347|1991||173|9||3.11.35.43.57.58|D
Thomas Strakosha|GR|1|82|510.764.164.12|1995||186|47|63|48|
Xaver Schlager|MED|165|81|318.767.933.705.617|1997||174|59|||
Otávio|MED|127|78|443.325.908.52.55.57|1995||171|22|16|7.25.32.35.39.45.52|D
Ola Aina|DEF|115|81|215.426.848.367.617|1996||179|49|76|2.21.39.48|
Breel Embolo|AVA|143|83|132.158.587.731.108.782|1997||185|92|24||
Duje Caleta-Car|DEF|40|82|767.318.553.805.541.725.781.1140|1996||193|38||12.41|
Alexander Sørloth|AVA|116|83|739.152.312.566.243.465.856.705.725.905.110|1995||194|77|||D
Keita Baldé|AVA|135|83|510.587.440.768.196.809.291.799.580|1995||178|42|54|34.44|E
Reinildo Mandava|DEF|110|67|748.120.530.110.828.1360|1994||180|56||4.51|
Enes Ünal|AVA|152|81|176.377.551.588.334.523.905.886.379.160|1997||185|34||26|
Tyrone Mings|DEF|76|82|447.160.99|1993||196|18||59|
Yeray Álvarez|DEF|54|79|101.184.144|1995||182|1|||
Santi Mina|AVA|54|78|203.888.60|1995||177|||36|
Gianluca Mancini|DEF|84|82|673.100.737|1996||190|22||31.37.41.44|
Amir Rrahmani|DEF|89|81|277.592.416.601|1994||192|69||6.21|
Talisca|MED|16|80|279.140.141.52.351.47.1321|1994||188|||7.11.30.46|
Dean Henderson|GR|76|81|552.824.793.790.617.243.1130|1997||188|6||31.53.54|
Jefferson Lerma|MED|33|81|523.160.243|1994||179|70||20|
Kevin Danso|DEF|165|81|115.805.302.521.853.828|1998||190|39||59|
Joan Jordán|MED|54|80|291.886.787.753.66.295|1994||184|3||35.59|
Patrick Cutrone|AVA|84|80|7.934.356.888.285.232.663.580|1998||183|1||18.37.39|
Chris Führich|AVA|2|81|231.750.298|1998||181|10|||E
Nemanja Maksimovic|MED|145|81|888.379.654|1995||189|64||46|
Renato Tapia|MED|125|83|334.354.127.203.186.62|1995||185|92||43|
Angeliño|DEF|54|82|551.609.386.549.588.648.705.421.371.737.262|1997||171|1||26.44|
Borja Iglesias|AVA|54|82|888.905.203.779.291.142.524|1993||187|9||5.56.60|
Harry Wilson|AVA|123|81|239.532.426.263.160.197.367.516|1997||173|69||33.38|D
Sergio Reguilón|DEF|54|81|150.721.787.853.110.552.164.442.1348|1996||178|6||21.31.35.51.57.59|
Kasper Dolberg|AVA|43|83|32.796.612.787.421.80|1997||186|56||35|
Mattia Zaccagni|AVA|84|81|416.895.222.510|1995||176|13||37.48|E
Ramy Bensebaini|DEF|5|80|529.578.731.158.157.999|1995||188|89|||
Carles Aleñá|MED|54|79|127.142.379.66|1998||180|3||3.36|
Saïd Benrahma|AVA|5|81|612.81.368.502.164.925.541.590|1995||172|40||41|E
Hee-chan Hwang|AVA|37|82|318.767.408.705.934.782|1996||177|85||18.35.40.55|
Taiwo Awoniyi|AVA|115|84|532.589.585.465.548.874.617.236|1997||183|12||33.39|
Dodi Lukébakio|AVA|20|81|80.854.702.921.302.418.933.787.140|1997||184|38||31.38.45|D
Mehdi Taremi|AVA|80|83|43.732.325.440.632.62.963|1992||186|111||7.20.52|
Marcus Edwards|AVA|76|75|616.300.908.812.175.853|1998||176|4||7.42.47|D
Nahitan Nández|MED|157|79|677.150.196.55|1995||172|74||17.44|D
David Raum|DEF|2|81|394.421.705|1998||180|40||27|D
Mathias Jensen|MED|43|80|613.203.164|1996||180|32|||
Emiliano Buendía|AVA|4|79|379.616.99.524|1996||172|2||49.56.59|E
Tyler Adams|MED|45|80|608.705.516.160|1999||175|62||42|
Sander Berge|MED|116|81|916.377.790.175.367|1998||195|75||38|
Ermedin Demirovic|AVA|21|81|66.330.72.331.365.115.298|1998||185|48|2||
Marc Roca|MED|54|79|291.133.516.142|1996||184|2||5.27|
Konstantinos Tsimikas|DEF|63|82|632.289.532.737|1996||179|55||2.13.33.38.40|
Deniz Undav|AVA|2|81|875.166.298|1996||178|13|||
Eddie Nketiah|AVA|76|82|93.516.243|1999||180|1||15.16.17|
Caoimhín Kelleher|GR|78|81|532.164|1998||188|36||2.13.33|
Gerson (1997)|MED|16|79|358.737.356.357.553.947.242|1997||185|14||11.30.60|
Anton Stach|MED|2|78|394.548.421.516.899|1998||193|5||27|
Boubakary Soumaré|MED|58|79|530.518.787.39|1999||188|||4.17|
Mouctar Diakhaby|DEF|68|79|541.888|1996||192|18|58||
Noah Okafor|AVA|143|79|132.767.7.601.516|2000||185|26||6.21.41.52|E
Igor Zubeldia|DEF|54|79|725|1997||185|1|||
Pablo Fornals|MED|54|76|105.586.905.925.142|1996||160|9||35.36|
Ritsu Doan|AVA|86|83|372.312.648.91.365.281|1998||172|73|||D
Sergiño Dest|DEF|45|84|32.127.7.648|2000||175|46|124|42|
Julian Ryerson|DEF|116|82|901.874.157|1997||183|50|||
Marash Kumbulla|DEF|1|81|416.737.781.291.549.719|2000||192|27|84|31.41.44|
Amine Harit|MED|102|79|600.553.131.782|1997||179|23|58|52|E
Yangel Herrera|MED|159|83|551.609.754.390.291.386.725|1998||184|47||26|
Wesley Moraes|AVA|16|80|224.99.443.478.523.825|1996||191|1|||
Alexis Saelemaekers|DEF|20|84|80.7.154.737|1999||180|28||6.41.44.45.52|
Kerem Aktürkoğlu|AVA|152|82|131.151.371.140.351|1998||173|58||18|E
Lovro Majer|MED|40|81|592.277.731.933.12|1998||176|38|||
Jonas Wind|AVA|43|80|233.933.163|1999||190|37|||
Angel Gomes|MED|76|79|552.149.530.553.934|2000||168|4||31.41.55|
Harvey Barnes|AVA|76|81|518.543.129.924.610|1997||174|2||44.53|E
Amadou Haidara|MED|100|78|767.318.705.521|1998||175|54|||
Robert Sánchez|GR|54|82|166.215.232.1049|1997||197|2||42.56|
Andriy Lunin|GR|153|80|269.948.721.186.886.723|1999||191|16||3.11.31.35.56.57.58|
Vitaliy Mykolenko|DEF|153|82|275.299|1999||181|55|||
Nicolas Seiwald|MED|165|80|318.767.705|2001||179|55|||
Jhon Lucumí|DEF|33|81|260.377.154.463|1998||187|43||20|
Mats Wieffer|DEF|124|80|334.300.354.166|1999||188|15||13|
Youcef Atal|DEF|5|75|470.612.29.59.999|1996||176|55||37|
Billy Gilmour|MED|51|82|215.616.166.601|2001||170|50||6.21.53.58|
Luis Suárez (1997)|AVA|33|79|726.886.921.887.384.779.390.553.72.812|1997||185|20||20.38.41|
Matty Cash|DEF|126|81|617.99.1149|1997||185|29|76|25.59|
Lewis Ferguson|MED|51|79|409.26.154|1999||181|31|||
Nikola Krstović|AVA|109|73|294.513.100.1019|2000||185|37|160|48|
Galeno|AVA|16|76|86.325.690.732.163.36|1997||179|1||7.11.52|E
Marco Carnesecchi|GR|84|73|100.857.238|2000||191|||48.59|
Estéban Lepaul|AVA|58|73|868.81.731|2000||177|3|||
Calvin Bassey|DEF|115|78|717.32.367|1999||185|47|84|38|
Bafodé Diakité|DEF|58|77|854.530.160|2001||182|||41|
Djordje Petrovic|GR|145|74|244.433.607.215.293.160|1999||194|13||42|
Youssoufa Moukoko|AVA|2|81|157.612.233.956|2004||179|2|24|27|
Samuele Ricci|MED|84|76|285.848.7.232|2001||180|11||37|
Kenneth Taylor|MED|124|81|32.510|2002||182|6|||
Kiernan Dewsbury-Hall|MED|76|80|518.147.539.215.299|1998||178||||
Emerson Royal|DEF|16|81|689.112.142.127.853.7.357|1999||183|10||11.21.34.41.52|
Juan Foyth|DEF|4|82|296.853.905|1998||187|22||31.42.49.59.60|
Djed Spence|DEF|76|81|565.617.853.731.516.378.440|2000||185|14||21.53.59|
Daniel Muñoz|DEF|33|80|733.106.377.243.617|1996||180|53|||
Edon Zhegrova|AVA|89|76|377.132.530.463|1999||174|50|2|41|D
Evann Guessand|AVA|39|79|612.509.600.99.243|2001||185|23|58|59|D
Isak Hien|DEF|142|74|268.416.100|1999||191|32||48.59|
Senne Lammens|GR|20|80|225.224.744.552|2002||193|6||47|
Yunus Musah|MED|45|81|888.7|2002||178||||
Fábio Silva|AVA|127|79|325.934.80.648.717.507.157|2002||185|1||7.18.35.39.45.52.55|
Jesper Lindstrøm|MED|43|81|172.281.601.299.933.767|2000||181|18||21.59|D
Pepê|AVA|16|75|395.325|1997||175|2||7.52|D
Roger Ibañez|DEF|16|80|358.100.737.510.36|1998||187|8||11.31.41|
Miguel Gutiérrez|DEF|54|79|721.386.601.524.1348|2001||180|||3.11.21.58|
Nicolò Rovella|MED|84|78|378.463.580.510|2001||179|4||48|
Amine Adli|AVA|102|80|854.524.160|2000||174|17|58|5.56|E
Bryan Gil|AVA|54|79|787.186.753.853.888.386|2001||175|5||21.35.59|E
Fábio Vieira|MED|127|80|325.93.408|2000||170|||7.16.52|
Terem Moffi|AVA|115|78|470.319.612.325.408|1999||178|23||7|
Georginio Rutter|AVA|58|77|731.421.516.166|2002||182||||
Mikkel Damsgaard|MED|43|78|613.768.164|2000||180|43||44|
Sepp van den Berg|DEF|124|82|645.532.695.548.164.782|2001||192|||33|
Mohamed Camara|MED|100|72|318.836.767.587.59|2000||175|36||37|
Zeno Debast|DEF|20|80|80.812|2003||191|26||7.41.45.47|
Troy Parrott|AVA|78|79|853.568.447.543.695.300.22.142|2002||185|41||21.31.42|
Pedro Porro|DEF|54|83|127.386.551.886.812.853|1999||176|24||3.7.26.47.58.59.60|
Mika Biereth|AVA|43|77|707.583.827.587.93|2003||187|9|76|16|
James Trafford|GR|76|82|551.155.175.1086.516|2002||197|4||26|
Youssouf Fofana|MED|58|82|293.587.7.787|1999||185|25||24.41.52|
Armando Broja|AVA|1|80|215.907.805.367.299.175|2001||191|37|76|38.42.53|
Lorenzo Lucca|AVA|84|78|652.681.32.871.601.617.165.848.1226|2000||201|5||21|
Chris Richards|DEF|45|82|133.421.243|2000||188|43||5.27.42|
Martin Baturina|MED|40|80|277.232|2003||172|25|143||D
James McAtee|MED|76|78|790.551.617|2002||180|||2.26|D
Arnaud Kalimuendo|AVA|58|77|521.647.731.617.281|2002||178|||4.42.53|
Carlos Augusto|DEF|16|81|234.580.440|1999||184|4||6.11|D
Aaron Hickey|DEF|51|77|413.154.164|2002||185|25|||
Rodrigo Zalazar|MED|157|80|105.281.493.817.163.812.782|1999||178|11|54|17.41|
Ardon Jashari|MED|143|79|321.224.7|2002||180|15|||
Mario Gila|DEF|54|78|721.510.7.1348|2000||185|||11.48|
Tyler Morton|MED|76|76|146.426.532.541|2002||198|||13.33.41|
Boulaye Dia|AVA|135|81|820.905.764.510.731|1996||180|40|58|48|
Ricardo Pepi|AVA|45|79|250.115.312.648|2003||185|42||42|
Marc Casadó|MED|54|81|127.262|2003||172|2||3.27|
Wilfried Singo|DEF|39|79|848.587.371|2000||190|36|||
Igor Paixão|AVA|16|77|537.235.354.553|2000||168|||13|E
Adrien Truffert|DEF|58|78|731.160|2001||176|3|20|24|
Simon Adingra|AVA|39|80|613.166.875.828.587.32|2002||175|30|||E
Julio Enciso|MED|122|79|528.166.447.293|2004||168|39|||
Oscar Bobb|AVA|116|80|551.367|2003||169|30||2.26|D
Leon Avdullahu|MED|89|71|132.421|2004||185|11|143||
Marcos Leonardo|AVA|16|78|777.140.45.32|2003||174|||30.60|
Matías Soulé|AVA|4|76|460.463.366.737|2003||176|1||44|D
Andreas Schjelderup|AVA|116|76|613.140|2004||176|22||7.18.31.38|E
Jonathan Rowe|AVA|76|77|616.553.154.100|2003||178|||48|E
Samuel Lino|AVA|16|80|380.110.888.357|1999||178|4||11.34.51|E
Gabri Veiga|MED|54|78|203.36.325|2002||184|||7|
Brajan Gruda|MED|2|76|548.166.705|2004||178||||
Geny Catamo|AVA|110|76|812.908.554|2001||172|44||7.41.47|D
Yegor Yarmolyuk|MED|153|74|749.164|2004||176|9|||
Loïc Badé|DEF|58|77|511.521.731.617.787.524|2000||191|1||24.59|
Richard Ríos|MED|33|79|357.555.396.653.140.46|2000||187|40||9.31.38.52|
Omari Hutchinson|MED|85|78|215.447.617.7|2003||174|2|76|42|
Malick Fofana|AVA|20|77|465.541.828|2005||169|6||41|E
Robin Risser|GR|58|77|293.266.727.521|2004||193||||
Aleksandar Stanković|MED|145|75|440.321.224|2005||185|10|84||
André|MED|16|76|358.934|2001||176|13||11.55|
Danilo (2001)|MED|16|79|653.617.159|2001||177|11||9.39|
Eliesse Ben Seghir|AVA|102|78|587.524|2005||179|20|58||E
Niccolò Pisilli|MED|84|75|737|2004||181|4||31.44|
Marc Pubill|DEF|54|74|103.523.72.110|2003||191|7||60|
Santiago Castro|AVA|4|76|917.154.737|2004||179|1|||
Jack Hinshelwood|MED|76|76|166|2005||182||||
Marco Palestra|DEF|84|79|100.196.215|2005||186|2||56.59|
Kevin|AVA|16|75|653.788.367|2003||176|||9.38|E
Ismaël Koné|MED|25|80|579.921.553.731.781|2002||188|42|39||
Arthur Vermeeren|MED|20|78|744.110.705.553|2005||180|6|||
Gonzalo García|AVA|54|79|721.367.1348|2004||182|1||3.11.56|
Víctor Muñoz|AVA|54|79|721.638.532.1348|2003||173|5||11.60|E
Thierno Barry|AVA|58|75|330.919.132.905.299|2002||195||||
Jacobo Ramón|DEF|54|75|721.232.1348.1347|2005||196|||11|
Rômulo (2002)|AVA|16|73|102.402.705|2002||193||||
Vitor Reis|DEF|16|77|653.551.386|2006||186|1||9.26|
Jaydee Canvot|DEF|58|72|854.243|2006||182||||
Marc Bernal|MED|54|80|127|2007||195|2||3.27|
Assane Diao|AVA|135|78|143.142.232|2005||185|9|||E
Joaquín Panichelli|AVA|4|75|66.188.293|2002||190|1||49|
Honest Ahanor|DEF|84|77|378.100.243.215|2008||184|2||48|
Ayden Heaven|DEF|76|82|93.552|2006||189|||16.47|
Rio Ngumoha|AVA|76|82|532|2008||170|3||13|E
El Hadji Malick Diouf|DEF|135|79|861.802.925.164|2004||183|25||39|
Ibrahim Mbaye|AVA|135|82|647.99|2008||185|18|58|4.36.58|D
Max Dowman|AVA|76|82|93|2009||183|||2.16|D
Jesús Rodríguez|AVA|54|76|143.142.232|2005||185|2|||E
Óscar Cardozo|AVA|122|82|598.611.140.856.632.528|1983||193|58||7.30.40|
Martin Petrov|AVA|17|83|195.786.933.110.551.155.291|1979||179|90||37|E
Stephan Lichtsteiner|DEF|143|85|391.530.510.463.93.115|1984||181|108||6.21|
Kieron Dyer|MED|76|82|447.610.925.698.565|1978||173|36||19|
Joseph Yobo|DEF|115|84|822.553.189.299.351.616|1980||188|101|||
Craig Bellamy|AVA|123|84|616.236.610.204.146.532.925.551.197|1979||175|78||37.43|E
Jermaine Jenas|MED|76|82|617.610.853.99.698|1983||181|21||12.19|
Richard Dunne|DEF|78|84|299.551.99.698|1979||188|82|||
Tim Howard|GR|45|85|608.552.299.229|1979||191|121||2.10.45|
Sidney Govou|AVA|58|82|541.654.950|1979||175|49||4.28|E
Jérémy Mathieu|DEF|58|83|330.854.888.127.812|1983||189|5||3.24.30.32.36.58|
David Pizarro|MED|29|83|871.864.440.737.551.356.1103|1979||168|47||6.17.36.37.44|
Matuzalém|MED|16|80|280.663.601.679.165.788.779.510.378.154.416.1028|1980||175||||
Cristian Zaccardo|DEF|84|83|154.810.652.933.663.7.199.1226|1981||184|17||5.60|
Tommaso Rocchi|AVA|84|82|463.232.858.285.510.440.650|1977||177|3||6.58|
Fabrizio Miccoli|AVA|84|82|841.463.673.356.140.652.513|1979||168|10||6.19.24.25|
Albert Riera|AVA|54|83|549.156.291.551.532.632.371.921.871.1044|1982||188|16||23.37.43|D
Ivica Olic|AVA|40|84|277.194.408.133.933.1.418|1979||182|104||5.54.59|D
Mikel Arteta|MED|54|85|127.647.717.725.299.93|1982||175|||3.15|
Yossi Benayoun|MED|83|85|545.709.925.532.215.93.698.542.1045|1980||178|101||11.12.15.43.58.59|D
Salomon Kalou|AVA|39|86|20.354.300.215.530.418.159|1985||183|93||2.11.12.31.50.58|E
Tiago Mendes|MED|127|85|163.140.215.541.463.110|1981||183|66||2.3.4.20.25.28.31.40.44.50.51.59|
Michel Bastos|MED|16|81|354.300.102.395.355.530.541.37.737.834.653.811.78.782|1983||179|10||59|E
Éver Banega|MED|4|84|150.888.110.611.787.440.60.254|1988||174|65||35.55.59|
Bruno Alves|DEF|127|85|325.346.908.947.351.196.717.663.88.946.12.345|1981||189|97||7.8.20.25.28.30.31.40.50.55.58.59|
Raúl Meireles|MED|127|85|149.265.325.532.215.351|1983||180|81||7.12.20.28.40.50.55.58|
Leighton Baines|DEF|76|84|929.299|1984||170|30||11.19.38.45|
Ricardo|GR|127|82|149.812.142.518.909.629|1976||185|79||7.25.32.40.50.52|
Helton|GR|16|81|892.519.325|1978||186|3||7.12.28.32.35.41.55.59|
Aaron Lennon|AVA|76|83|516.853.299.175.486|1987||165|23||12.19.42.45|D
Thomas Vermaelen|DEF|20|86|32.707.93.127.737.906|1985||183|85||3.15.36.45|
Marco Amelia|GR|84|83|737.18.513.663.652.378.7.673.215.1226|1982||190|9||6.60|
Kevin-Prince Boateng|MED|60|85|418.853.157.692.378.7.507.281.781.127.356.141.580.782|1987||186|15|2|3.6.33|
Gökhan Inler|MED|143|83|338.871.601.518.141.131.29.1170|1984||183|89||2.43.44|
Marouane Chamakh|AVA|102|83|156.93.925.243.197|1984||188|65|58|4.15|
Riccardo Montolivo|MED|84|85|100.356.7|1985||181|66||21|
Giampaolo Pazzini|AVA|84|84|100.356.768.440.7.416.523|1984||180|25||44|
Pablo Zabaleta|DEF|4|85|771.291.551.925|1985||176|58||2.26.37|
Steve Mandanda|GR|58|83|511.553.243.731|1985||185|37|129|4.12.17.24.60|
Kévin Gameiro|AVA|58|83|293.319.647.787.110.888|1987||172|13||4.11.24.51.59|
Gary Cahill|DEF|76|86|99.175.790.155.215.243.160|1985||193|61||2.19.21.31.43.48.59|
Lars Bender|MED|2|82|1.524|1989||185|19||29|
Armando Izzo|DEF|84|79|859.601.118.378.848.580|1992||183|3||37|
Danilo|DEF|16|86|78.777.325.721.551.463.357|1991||184|75||2.3.6.7.11.26.34.35.41.43.48.50.55.57.58|
Carlos Vela|AVA|111|83|93.203.638.924.725.500.219|1989||177|72||15|D
Nikola Kalinic|AVA|40|83|405.591.146.269.356.7.110.737.416|1988||187|42||41.51|
Fredy Guarín|MED|33|84|286.150.763.325.440.755.892.567|1986||183|57||7.12.28.37.55.59|
Borja Valero|MED|54|82|721.549.924.905.356.459.440.1348.1347|1985||175|1||21.23|
Ryan Bertrand|DEF|76|82|160.215.628.616.720.617.99.805.518|1989||179|19||2.11.12.31.43.50.58.59|
Loïc Rémy|AVA|58|83|541.521.612.553.610.698.215.243.507.379.530.180.29.818|1987||185|30||2.4.21.24.31|
Cenk Tosun|AVA|152|78|281.375.141.299.243.351.484.478|1991||183|65|2|11.31.38.43|
Aleksandar Kolarov|DEF|145|85|244.624.510.551.737.440|1985||187|94||2.6.21.26.37.41|
Mamadou Sakho|DEF|58|84|647.532.243.578.1075|1990||187|29||4.11.24.33|
Joe Allen|MED|123|84|830.935.532.825|1990||168|77||33.45|
Sebastian Giovinco|AVA|84|83|463.285.663.849.45.768|1987||160|23||6.21.24.44|
Kevin Kampl|MED|53|80|524.394.899.767.157.705.1329|1990||180|28|2|33|
Ramires|MED|16|85|242.140.215.653.1183|1987||180|52||2.7.11.12.19.30.31.43.50.58.59|
Matteo Darmian|DEF|84|85|7.650.652.848.552.663.440.154|1989||182|46||6.11.21.31.37.54.58.59|
Sofiane Feghouli|MED|5|83|393.888.72.925.371.478.961|1989||178|83|58|39|
Giacomo Bonaventura|MED|84|84|100.650.7.356.60|1989||180|18||21.37|D
Maximiliano Pereira|DEF|157|83|140.325.677.734.255|1984||173|125||7.30.32.35.39.52|
Wilson Palacios|MED|72|82|145.929.853.825.1076|1984||178|97|||
Victor Moses|AVA|115|85|243.929.215.532.825.925.351.440.809.539.962|1990||177|38||2.21.31.43.45.46.48.59|D
Nicolas N'Koulou|DEF|24|82|587.553.541.848.921.90.374|1990||180|86||17.24|
José Callejón|AVA|54|84|291.721.601.356.390.1032.1348.1347|1987||178|5||3.11.23.31.35.42.43.48|D
Sergio Canales|MED|54|82|709.721.888.725.142.577.1301|1991||180|11||3.31|
Danny Welbeck|AVA|76|86|552.695.828.93.921.166.215|1990||185|42||2.10.15.19.56|
Séamus Coleman|DEF|78|83|299.147|1988||177|81||11.38.43.45|
Nolito|AVA|54|82|127.140.390.203.551.787|1986||175|16||3.23.26.30.35.36.58.59|E
Iago Aspas|AVA|54|82|203.532.787|1987||176|22||35.36.43|
Jackson Martínez|AVA|33|81|436.325.110.690.1321|1986||185|40||7.35.41.50.51.55|
Francis Coquelin|MED|58|82|93.319.365.213.888.905.600.819|1991||178|||15.59|
Yannick Bolasie|AVA|129|81|684.168.243.299.99.80.812.565.180.830.240.242.211.1192|1989||188|50|58|11.34.38|D
Laurent Koscielny|DEF|58|85|398.855.319.93.156|1985||186|51||15.24|
Salomón Rondón|AVA|159|83|507.586.745.947.924.610.194.299.734.649.723|1989||189|122||12.28.43|
Eduardo Salvio|AVA|4|82|506.110.140.150.865.1369|1990||171|14||7.18.30.46.49.51.59|D
Nico Schulz|DEF|2|80|418.158.421.157.82|1993||180|12||29|
Joshua King|AVA|116|83|552.695.158.426.146.160.299.921.351.854.48|1992||184|62||2.10.11.30|E
Marcos Rojo|DEF|4|85|296.809.812.552.150.710|1990||187|61||28.31.34.49.54.59|
Willi Orbán|DEF|73|80|0.705|1992||185|72|2||
Sead Kolasinac|DEF|21|84|93.553.100.782|1993||183|73|2|15.16.48.59|D
Jannik Vestergaard|DEF|43|81|421.923.158.805.518|1992||199|59|||
William Carvalho|MED|127|83|812.207.142.649|1992||190|80|3|8.25.28.30.34.38.40|
Chris Smalling|DEF|76|86|367.552.737.42.325|1989||194|36||2.10.19.31.41.54.59|
Jonas Hector|DEF|2|82|231|1990||185|43||29|
Chris Wood|AVA|118|83|924.129.166.145.168.568.518.447.516.175.610.617|1991||191|95||39|
Mark Uth|AVA|2|78|231.414.417.421.782|1991||185|1||29|
Phil Jones|DEF|76|86|146.552|1992||182|27||2.10.19.31.54.59|
José Campaña|MED|54|79|787.243.768.620.325.9.523.507|1993||179|1||35|
Michael Gregoritsch|AVA|165|81|421.817.898.408.115.365.172.782|1994||194|81|||D
Santiago Arias|DEF|33|82|441.812.648.110.524.390.221.279.438|1992||175|69||20.28.51|
Alphonse Areola|GR|58|82|647.521.746.905.721.367.925|1993||195|5||3.4.24.35.39.42.53.57.60|
Faouzi Ghoulam|DEF|5|79|763.601.81.411|1991||188|37|58|11.43.48|
Layvin Kurzawa|DEF|58|82|587.647.367.149|1992||182|14||4.24.34.36.38.42.44.53|
Juan Bernat|DEF|54|83|888.133.647.140.905.379.753|1993||172|11||4.5.11.23.26.35.36.42.53|
Serge Aurier|DEF|39|83|521.854.647.853.905.617.371.963|1992||176|93||4.31.39.42|
Abdoulaye Doucouré|MED|100|78|731.921.390.299.590.212|1993||184|2|58|11.38.43|
Jack Butland|GR|76|81|145.216.129.825.516.263.243.552.717.426|1993||196|9|||
Conor Coady|DEF|76|81|532.790.425.934.299.518.935.213|1993||185|10||18.35.39|
Gerard Deulofeu|AVA|54|81|127.299.787.7.921.871.508|1994||176|6||3.23.26.35.36.45.59|D
Dennis Praet|MED|20|81|80.768.518.848.744.471|1994||181|15||45|
Simone Verdi|MED|84|81|7.848.461.285.753.199.154.601.764.416.232.781.139|1992||171|4||6.11.48|
Bertrand Traoré|AVA|18|82|215.907.32.541.99.131.905.828.934|1995||177|91||21.31.55|D
Thiago Mendes|MED|16|75|389.834.530.541.57.892|1992||175|||17.34|
Leandro Damião|AVA|16|81|443.777.242.142.677.235.357.485.994|1989||187|17||50|
Matija Nastasić|DEF|145|82|665.356.551.549.186.782|1993||187|34||2.37|
Pavel Kaderabek|DEF|32|79|806.421|1992||182|48|||
Jasper Cillessen|GR|124|84|589.32.127.888.507|1989||187|65||3.36.54|
Lewis Dunk|DEF|76|77|166.168|1991||192|6|||
Christian Nørgaard|MED|43|78|540.408.172.356.164.93.299|1994||185|41||2.16|
Raúl de Tomás|AVA|54|83|721.246.886.719.140.291.972.1348.1347|1994||180|4||11.18.35.43.57|
Josef Martínez|AVA|159|77|942.332.848.108.442.579.756.226.230|1993||170|70|||
Daniele Rugani|DEF|84|80|285.463.731.196.32.356|1994||190|7||6.37.48|
Ahmed Musa|AVA|115|83|884.194.518.52.478.799|1992||170|110||44.46|E
Matt Doherty|DEF|78|79|934.419.178.853.110.790|1992||182|53||21.31.39.51.55|
James Tarkowski|DEF|76|79|628.164.175.299|1992||185|2|||
Rony Lopes|AVA|127|80|551.530.587.787.612.632.862.163.65.346.847.584|1995||174|2|16|25.34.35.59|D
Quincy Promes|AVA|124|80|387.334.809.787.32|1992||174|50||46|E
Davy Klaassen|MED|124|83|32.299.923.440|1993||179|41||6.54|
Waldemar Anton|DEF|2|80|298.157|1996||182|17|158||
Mattia Caldara|DEF|84|78|100.857.209.463.7.895.810.575|1994||187|2||37|
Jamie Vardy|AVA|76|84|518.238.175.1189|1987||179|26||2.44|
Andrija Zivkovic|AVA|145|81|665.140.642|1996||170|66||7.9.18.46|D
Yassine Bounou|GR|102|84|104.110.779.386.787.45.957|1991||195|99|25|30.35.51.59|
Djibril Sow|MED|143|82|158.942.281.787.378.338|1997||184|59||59|
Adam Webster|DEF|76|78|692.447.168.166.1150|1995||191||||
Alireza Jahanbakhsh|AVA|80|82|589.22.166.354.414.340.300|1993||180|101||13.20|D
Jérémie Boga|AVA|39|78|731.390.215.145.781.100.612.463|1997||172|25|58|21|E
Roman Yaremchuk|AVA|153|81|275.324.465.140.224.888.632.541|1995||186|72||7.30.41|
Marko Grujić|MED|145|81|294.532.197.418.325.12.525|1996||191|30||7.33.52|
Fredrik Aursnes|MED|116|77|576.354.140|1995||179|32||7.13.18.31.38|D
Mariano Díaz|AVA|131|81|721.541.787.66.1177.1348.1347|1993||181|7|54|3.11.35.57.58|
Philipp Lienhart|DEF|165|84|721.365.1348.718.1347|1996||189|45||43.57|
Wendell|DEF|16|75|537.659.395.524.325.834|1993||176|6||7.52|
Ondrej Duda|MED|52|81|517.418.616.231.416.40|1994||181|98|||
Nadiem Amiri|MED|2|80|421.524.378.548|1996||178|14||5.27.29.56|
Costinha|MED|127|83|597.587.325.276.110.100|1974||182|53||4.7.31.50.58.59|
Gabriel Barbosa|AVA|16|82|777.440.140.357.242|1996||178|18||21.34.46|
Enis Bardhi|MED|97|76|523.856.151.492.1074|1995||172|86|||
Nabil Bentaleb|MED|5|81|853.610.81.530.782|1994||187|64|58|12.41.42|
Diego Llorente|DEF|54|82|721.719.586.725.516.737.142.1348.1347|1993||185|10||11.17.31.35.36.43.57|
Zeki Çelik|DEF|152|83|176.449.530.737.463|1997||180|67||4.31.44|
Alex Telles|DEF|16|83|462.395.371.440.325.552.787.52.159|1992||181|12||7.11.37.39.52.59|
Daniel Podence|AVA|127|79|812.582.632.934.60|1995||165|1||18.25.30.35.38.39|E
Renato Sanches|MED|127|85|140.133.830.530.647.737.654|1997||176|32||4.5.7.8.11.18.25.31.36.43.46|
Aleix García|MED|54|80|905.551.386.585.308.753.524|1997||173|10||26.56|
Suat Serdar|MED|2|77|548.418.416.782|1997||183|4||29|
Davide Calabria|DEF|84|83|7.154.654|1996||176|7||6.37.41.43.52|
Vitaly Janelt|MED|2|77|705.898.164|1998||184|1|||
Antonín Barák|MED|32|80|802.871.513.416.356.484.17.1198.768|1994||190|44|||
Paul Onuachu|AVA|115|75|566.893.377.805.856|1994||202|33|||
Giovanni Simeone|AVA|4|80|734.125.378.356.196.416.601.848|1995||180|6||6.21.49|
Pau López|GR|54|79|291.853.142.737.553.386.845|1994||188|3||31.36.41.42|
Ludovic Blas|AVA|58|77|398.600.731|1997||180|4|||D
Orel Mangala|MED|20|79|298.408.617.541.299.379|1998||178|23||39.41.45|
Mauro Arambarri|MED|157|78|255.156.379.734.967|1995||175|12|||
Demarai Gray|AVA|85|80|145.518.524.299.40|1996||178|29|76|2.43.44|E
Jonathan Bamba|AVA|39|78|763.662.797.81.530.194.203.217|1996||175|10|58|4.41.43|E
Borna Sosa|DEF|40|81|277.298.32.848.243.231|1998||176|26|||
Kelechi Iheanacho|AVA|115|83|551.518.787.565.204.176|1996||185|59||26|
Arne Maier|MED|2|77|418.91.115.1074|1999||183||||
Joe Rodon|DEF|123|81|830.216.853.731.516|1997||180|62||21.31|
Gaetano Castrovilli|MED|84|80|128.356.238.510.580.209|1997||187|4||8.37|
Diadié Samassékou|MED|100|72|318.767.421.632.245.423|1996||175|41|||
Olivier Boscagli|DEF|58|76|612.622.648.166|1997||181||108||
Philip Billing|MED|43|79|425.160.601.566|1996||193|6||6.21|
Sebastian Szymanski|MED|126|78|517.276.354.351.731|1999||174|58||13.25.31|D
Rafael Borré|AVA|33|82|260.110.905.734.281.923.443|1995||179|44||20.51.59|
Vangelis Pavlidis|AVA|63|80|898.22.140|1998||186|61||18.31.38|
Jeff Reine-Adélaïde|MED|58|80|521.93.81.541.612.862.708.764.417|1998||183|||15|
Ridle Baku|DEF|2|77|548.933.705|1998||176|8||27.29|D
Manuel Lazzari|DEF|84|79|760.510|1993||174|3||37.48|D
Riqui Puig|MED|54|73|127.499|1999||166|2|||
Matteo Pessina|MED|84|81|580.513.7.201.232.100.810.416|1997||183|16||8.37|
Christian Kouamé|AVA|39|81|694.222.378.356.80.285.90|1997||193|30|||D
Gedson Fernandes|MED|127|79|140.853.371.180.141.809|1999||181|2|144|7.18.25.30.31.46|
Noa Lang|AVA|124|81|32.334.224.648.601.371|1999||176|19||21.54|E
Tyrell Malacia|DEF|124|82|354.552.648.221|1999||170|9||13.47.54|
Rico Henry|DEF|76|77|920.164|1997||170|1|||
Nathan Tella|AVA|115|79|805.175.524|1999||173|2|76|5.56|D
Kyle Walker-Peters|DEF|76|80|853.805.925|1997||173|2||31.39.42|
Fran García|DEF|54|81|719.721.142.1348|1999||169|3||3.11.35.56.57.58|
Ben Godfrey|DEF|76|79|616.793.299.100.447.790.172.717|1998||184|2||11.43.48|
Ladislav Krejci (1999)|DEF|32|79|806.386.934|1999||191|32||55|
Sean Longstaff|MED|76|80|489.147.610.516|1997||181|||43|
Ché Adams|AVA|76|79|790.145.805.848|1996||175|50|||
Nordi Mukiele|DEF|58|80|819.578.705.647.524.828|1997||187|1||4.24.36.56|
Lucas Tousart|MED|58|77|885.541.418.874.818|1997||185||||
Amadou Diawara|MED|68|81|154.601.737.80.186.978.1030|1997||183|43||11.31.41.48|
Diogo Dalot|DEF|127|85|325.552.7|1999||185|40||7.25.31.45.47.52|
Leandro Barreiro|MED|94|77|548.140|2000||170|75||18.31.38|
Raoul Bellanova|DEF|84|81|156.100.674.196.440.848|2000||188|6||44.48|
Patson Daka|AVA|163|81|767.518.318.408|1998||183|57|||
Sergio Gómez|DEF|54|81|157.754.80.551.725|2000||173|4||2.26.58|
Riccardo Orsolini|AVA|84|80|97.463.100.154|1997||183|13||37|D
Arthur Theate|DEF|20|81|472.154.731.281|2000||186|36||45|
Sasa Kalajdzic|AVA|165|74|298.934.281.501|1997||200|29||35.55|
Joakim Maehle|DEF|43|82|23.377.100.933|1997||186|63|||
Timothy Weah|AVA|45|83|647.204.530.463.553|2000||183|53||4.41.42.53|D
Tetê|AVA|16|76|395.788.541.518.371.654|2000||175|||43.46|D
Jaka Bijol|DEF|53|81|194.871.516|1999||190|77|||
Junior Firpo|DEF|131|83|143.142.127.516|1996||184|18||17|
Mathías Olivera|DEF|157|75|598.379.67.601|1997||184|40||6.17.21|
Yusuf Yazıcı|MED|152|80|856.530.194.632|1997||183|45||4.41|
Hamed Traoré|MED|39|78|285.781.160.601.15.553.378|2000||177|12|||E
Maxence Caqueret|MED|58|78|541.232|2000||174|||41|
Manor Solomon|AVA|83|79|788.367.853.516.905.356.1045.925|1999||170|52||38.39|E
Marcus Tavernier|MED|76|77|543.565.160|1999||177||||D
Dodô (1998)|DEF|16|79|235.788.908.356|1998||166|||11.41|
Gonzalo Montiel|DEF|4|82|734.787.617|1997||175|45||35.39.49.59.60|
Matt O'Riley|MED|43|78|367.543.204.166.553|2000||187|6|76||D
James Justin|DEF|76|80|539.518.516|1998||183|1|||
Konstantinos Mavropanos|DEF|63|81|643.93.620.298.925|1997||193|46||16.35.39|
Jack Harrison|AVA|76|78|609.551.565.516.299.356.607|1996||175|||17.26|E
Perr Schuurs|DEF|124|80|362.32.848.589|1999||193||||
Santiago Ascacíbar|MED|4|78|296.298.418.238.150|1997||168|3||49|
Paulinho (2000)|AVA|16|79|892.524.112.653|2000||177|1||9.11.50.56|D
Maxim De Cuyper|DEF|20|78|225.224.473.166|2000||182|28|||D
Igor Jesus|AVA|16|78|235.159.617|2001||180|5||11|
Pedro (1997)|AVA|16|79|358.356.357|1997||185|8||11.30.34|
Andreas Skov Olsen|AVA|43|77|613.154.224.933.717.131|1999||187|41|||D
Sam Beukema|DEF|124|74|387.22.154.601|1998||188|||21|
Ramon Hendriks|DEF|124|73|354.588.882.907.298|2001||184|||13|
Orkun Kökçü|MED|152|82|354.140.141|2000||175|54|124|13.18.31|
Morten Hjulmand|MED|43|81|513.812.110|1999||185|31||7.47|
Rodrigo Riquelme|AVA|54|78|104.110.160.188.386.142|2000||174|2||51|E
Oumar Solet|DEF|58|73|867.819.541.767.871|2000||192||||
Marcos Senesi|DEF|4|78|771.354.160.853|1997||184|5||13.49|
Max Aarons|DEF|76|79|616.160.888.717|2000||200||||
Facundo Medina|DEF|4|78|182.521.553.524|1999||184|15||49|
Sacha Boey|DEF|58|80|731.266.371.133|2000||178|||5|
Lloyd Kelly|DEF|76|80|168.160.610.463|1998||178||||
Musa Barrow|AVA|148|79|100.154.61.48|1998||184|54|||E
Pedro Neto|AVA|127|83|163.510.934.215|2000||173|33||9.18.25.35.39.45.56|D
Koni De Winter|DEF|20|82|463.460.285.378.7|2002||191|8|||
Krépin Diatta|DEF|135|81|224.587.921|1999||175|66|||D
Hugo Guillamón|MED|54|81|888.405.813|2000||182|3|||
Wendel|MED|16|76|358.812.947|1997||180|||7.32|
Paul Nebel|MED|2|75|548.479|2002||169||||D
Dan Ballard|DEF|79|81|93.831.147.568.828|1999||187|34|76|16|
Taylor Harwood-Bellis|DEF|76|77|551.146.80.825.175.805.99|2002||188|1||26|
Zan Vipotnik|AVA|53|77|593.156.830.1031|2002||185|30|||
Federico Gatti|DEF|84|81|366.463|1998||190|8||37|
Luis Sinisterra|AVA|33|77|634.354.516.160.242|1999||172|18||13.20.34|E
Quilindschy Hartman|DEF|124|78|354.175.291|2001||183|5||13|
Trai Hume|DEF|79|75|828|2002||180|35|||
Amar Dedić|DEF|21|79|767.318.932.553.140.610|2002||180|31|165|31|
Taty Castellanos|AVA|4|79|864.609.386.510.925.1063|1998||178|2||39.48.49|
Anastasios Douvikas|AVA|63|76|98.912.882.203.232|1999||186|24||43|
Noah Atubolu|GR|2|74|365.281|2002||190||||
Fotis Ioannidis|AVA|63|75|522.654.812|2000||187|25||41.46|
Nuno Tavares|DEF|127|81|140.93.553.617.510|2000||184|5||16.18.30.39.45.48|
Illan Meslier|GR|58|79|319.516.93|2000||193|||16.17|
Kristjan Asllani|MED|1|80|285.440.848.141.47|2002||179|46||6|
Nathan Ngoy|DEF|20|78|822.530|2003||183|12|||
Nicola Zalewski|MED|126|81|737.440.100|2002||175|40|84|25.31.44.48|
Gonçalo Ramos|AVA|127|84|140.647.7|2001||185|31||4.7.25.30.36.45.58|
Adam Hlozek|AVA|32|81|806.524.421|2002||185|50||5.56|D
Gabriel Sara|MED|16|77|834.616.371|1999||177|1|||
Emmanuel Emegha|AVA|124|76|807.744.827.293.215|2003||195|2||56|
Radu Drăgușin|DEF|132|82|460.463.768.764.378.853.356|2002||194|32||59|
Daniel Svensson|DEF|142|74|170.613.157|2002||183|19|||
Albian Hajdari|DEF|89|72|132.320.421.463|2003||189|9|143||
Dwight McNeil|AVA|76|80|175.299.243|1999||183||||E
Vitinha (2000)|AVA|127|76|163.553.378|2000||178||||
Beto|AVA|70|79|690.871.299.356|1998||194|12|127||
Leif Davis|DEF|76|76|516.160.447|1999||182|||17|
Charlie Cresswell|DEF|76|75|516.568.854.731|2002||190|||17|
Igor Matanovic|AVA|40|79|817.281.479.365|2003||194|15|2||
Toti|DEF|127|73|292.934.391|1999||187|2|70|18.35.39.45.55|
William Osula|AVA|43|78|790.263.610|2003||191|2|||
James Hill|DEF|76|71|160.413.146.1189|2002||184||||
Silas|AVA|129|77|662.298.294.548|1998||189|19|||D
Matteo Ruggeri|DEF|84|79|100.764.110.99|2002||187|2||59|
Ilaix Moriba|MED|68|80|705.127.888.379.203|2003||185|25|||
Kaio Jorge|AVA|16|81|777.463.366.242.460|2002||182|1||11.28.34|
Gabriel Veron|AVA|16|78|653.325.242.777.462.597|2002||176|||9.52|D
Reinier|MED|16|83|357.721.157.386.366.390.112.1348|2002||185|||11.30.57|
Yan Couto|DEF|16|81|235.551.386.163.157.232|2002||168|4||26|
Wilfried Gnonto|AVA|84|77|338.516.356|2003||155|13||37|D
Enzo Le Fée|MED|58|76|319.731.737.828|2000||170|||44|
Borja Sainz|AVA|54|78|101.66.779.385.616.325|2001||174|||7|E
Keane Lewis-Potter|AVA|76|75|426.164|2001||170||||D
Robin Roefs|GR|124|79|589.828|2003||193|1|||
El Bilal Touré|AVA|100|76|820.72.100.298.141.663|2001||185|30|39|48.59|E
António Silva|DEF|127|79|140.160|2003||187|20||7.18.25.31.45|
Cher Ndour|MED|84|78|140.647.163.141.356|2004||190|2||4.7.36|
Hákon Arnar Haraldsson|MED|82|76|233.530|2003||180|35||41|D
Diego Moreira|MED|20|79|140.215.541.293.7|2004||179|7||42|D
Samson Baidoo|DEF|165|75|318.767.521|2004||190|1|||
Carney Chukwuemeka|MED|165|82|99.215.157|2003||187|9||42|E
Matthis Abline|AVA|58|73|731.511.15.600.587|2003||176||||
Equi Fernández|MED|4|76|150.842.55.524|2002||170|1|||
Yuito Suzuki|AVA|86|75|791.293.172.365|2001||175|9|||D
Konstantinos Koulierakis|DEF|63|76|642.933.737|2003||188|23|||
Tarik Muharemović|DEF|21|74|932.460.781.516|2003||187|21|53||
Tolu Arokodare|AVA|115|75|231.75.377.934.32|2000||197|12||55|
Johnny Cardoso|MED|45|78|443.142.110|2001||182|23||42|
Luis Henrique|AVA|16|76|159.553.440|2001||181|||6.12.18|D
Carlos Romero|DEF|54|76|905.291.523|2001||174||||
Jon Gorrotxategi|MED|54|76|725.188|2002||177|1|||
Lesley Ugochukwu|MED|58|80|731.215.805.175.371|2004||191|||42|
Ernest Poku|AVA|124|74|22.524.141|2004||176||2||D
Tyrick Mitchell|DEF|76|78|243|1999||175|2|||
Natan|DEF|16|75|357.704.601.142|2001||185|||21|
Rodrigo Muniz|AVA|16|75|235.357.367.565|2001||185|||38|
Chemsdine Talbi|AVA|102|78|225.224.828|2005||175|10|20||D
Wilson Odobert|AVA|58|76|862.175.853|2004||182|||59|E
Kamaldeen Sulemana|AVA|60|75|613.731.805.100|2002||175|30||48|E
Pietro Comuzzo|DEF|84|74|356.848|2005||185|2|||
Luiz Henrique|AVA|16|79|358.142.159.947|2001||182|16||11|D
Renato Veiga|DEF|127|80|115.132.215.463.905|2003||190|22||45|
Conrad Harder|AVA|43|75|613.812.705.293|2005||185|1||7.47|
Alisson Santos|AVA|16|70|280.621.355.519.812.601|2002||177|||21|E
Mike Penders|GR|20|79|377.215.293|2005||200|||56|
Javi Guerra|MED|54|75|888|2003||187|1|||
Maxime Estève|DEF|58|75|578.175.705|2002||193||||
Arthur Atta|MED|58|73|323.871.356|2003||189||||
Davide Bartesaghi|DEF|84|75|7|2005||193|2||41.52|
Assan Ouédraogo|MED|2|79|705.782|2006||191|1|||
Paul Wanner|MED|165|82|133.415.648|2005||185|9||5.53|D
Neil El Aynaoui|MED|102|79|19.521.737.705|2001||185|25|58||
Roger Fernandes|AVA|127|73|163.46|2005||170||70|52|D
Mamadou Sarr|DEF|135|79|541.708.293.215.725|2005||194|9|58|56|
Lewis Miley|MED|76|78|610|2006||185||||
Kerim Alajbegovic|AVA|21|81|767.463|2007||178|17|2||E
Tyrique George|AVA|76|77|215.299|2006||181||||E
Jean-Mattéo Bahoya|AVA|58|75|81.281.516|2005||180||||E
Chris Rigg|MED|76|74|828|2007||177||||
Stefanos Tzimas|AVA|63|74|642.620.166|2006||186||||
Ousmane Diomande|DEF|39|79|566.547.812.617|2003||188|18||7.47|
Gustavo Sá|MED|127|73|345.617.632|2004||186||||
Luís Guilherme|AVA|16|77|653.925.812|2006||175|||9.35.39.41|D
Diego Gómez|MED|122|78|528.442.166|2003||185|30|||
Josh Acheampong|DEF|76|81|215|2006||190|||56|
William Gomes|AVA|16|73|834.325|2006||171|||7|D
Josh King|MED|76|74|367|2007||187|||38|
Jon Martín|DEF|54|76|725|2006||187|1|||
Charalampos Kostoulas|AVA|63|76|632.166|2007||186|6|||
Karim Coulibaly|DEF|2|73|923.293|2007||191||||
Giovanni Leoni|DEF|84|79|650.768.663.532|2006||196|||13|
Samir El Mourabet|MED|102|76|293|2005||168|9|58||
Oskar Pietuszewski|AVA|126|74|454.325|2008||179|6||7|E
Tylel Tati|DEF|58|73|600|2008||190||||
Christ Inao Oulaï|MED|39|77|746.856.356|2006||173|16|||
Manuel Bento|GR|127|81|140|1948||174|63||7|
Jorge Andrade|DEF|127|81|295.325.262.463|1978||184|53||25.30.31.44.50|
Ricardo Gomes|DEF|16|82|358.140.647|1964||189|45||4.7|
Valdo|MED|16|83|355.395.140.647.599.242.777.811.112.462.833.159|1964||174|45||4.7.20|
Nuno Gomes|AVA|127|83|149.140.356.163.146|1976||180|79||7.20.25.28.30.34.37.40.50|
Yacine Brahimi|AVA|5|79|731.223.390.325.43.57|1990||175|78|58|7.32.35.39.52|E
Gaitán|AVA|4|81|140.150.110.69.163.217.530.668.677.780|1988||173|19||7.30.46.51.59|E
Levan Kobiashvili|MED|61|81|365.418.64.1016.782|1977||183|100|||
Ivan Klasnic|AVA|40|82|817.923.600.155.548|1980||186|41|2|5.53|
Kevin Kuranyi|AVA|2|83|298.276.421.782|1982||190|53|16|29|
Diego Benaglio|GR|143|83|391.298.597.933.587|1983||194|61||5.34|
Sylvain Distin|DEF|58|81|855.647.610.551.692.299.160|1977||192|||45|
Phil Neville|DEF|76|86|552.299|1977||180|59||2.10.19.58|
Thomas Sörensen|GR|43|83|626.893.828.99.825.557|1976||193|102|||
John O'Shea|DEF|78|86|552.160.744.828.720|1981||192|118||2.10.58|
Glen Johnson|DEF|76|85|568.925.215.692.532.825|1984||182|54||2.19.31.43.44|
Stewart Downing|AVA|76|84|565.828.99.532.925.146|1984||180|36||19|E
Peter Crouch|AVA|76|85|853.698.692.99.616.805.532.825.175|1981||201|43||19.43|
Maxwell|DEF|16|83|242.32.285.647.127.440|1981||176|10||4.11.26.31.37.50|
Steven Pienaar|MED|164|84|32.157.299.853.828|1982||170|61||45|D
Jérôme Rothen|AVA|58|81|759.862.587.647.717.82.746|1978||177|13||24|D
Daniele Bonera|DEF|84|84|165.663.7.905|1981||183|16||6.11.58|
Matteo Brighi|MED|84|81|463.154.663.165.218.737.100.848.781.673.285|1981||178|4||6.11.36.44|
Alberto Aquilani|MED|84|84|737.859.532.463.7.356.812.674.781.507|1984||186|38||19.30.43|
Mohamed Sissoko|MED|100|84|15.888.532.463.647.356.523.721.755.330.1335.772.841|1985||191|34|58|3.4.11.43.44.59|
Fabricio Coloccini|DEF|4|83|150.7.771.66.110.905.262.610.69|1982||183|39||6.11.17.58|
Gaetano D'Agostino|MED|84|79|737.128.871.356.794.674.139.1314|1982||183|5||6.19|
Angelo Palombo|MED|84|81|356.768.440|1981||177|22||37|
Jonas Hofmann|AVA|2|82|421.157.548.158.524|1992||176|23||5.27.29.33.53.56|D
Juanfran|DEF|54|80|523.888.203.141.32.779.12|1976||183|11||8.23.44|
Fernando Navarro|DEF|54|82|127.67.549.787.262|1982||178|5||3.8.23.54.58.59|
Cani|MED|54|78|258.779.905.110.262|1981||178|||51|D
Bosingwa|DEF|127|84|149.363.325.215.698.856|1982||183|27|129|2.7.11.12.20.25.28.31.40.50.58|
Craig Gordon|GR|51|80|413.828.204.1204|1982||193|84|||
Alessio Cragno|GR|84|76|165.196.139.580.781.768|1994||184|2||37.44|
Darren Bent|AVA|76|83|447.213.853.828.99.367.166.263.177|1984||180|13||19|
Phil Jagielka|DEF|76|84|790.299.263.825|1982||180|41||19.38.45|
Andy Johnson|AVA|76|81|145.243.299.367.698|1981||170|8||19|
Artur Boruc|GR|126|83|517.204.356.805.160|1980||193|65||42|
Rodrigo Taddei|AVA|16|81|653.794.737.673|1980||177|||36.44.50|D
Romaric|MED|39|79|20.512.787.291.779.746.633.1354|1983||187|44||42|
Juanfran Torres|DEF|54|85|721.291.638.110.834.1348|1985||180|22||3.8.23.51.59|
Alessandro Gamberini|DEF|84|81|154.416.356.601.378.218|1981||185|8||43|
Kasper Schmeichel|GR|43|84|551.178.344.197.236.516.518.612.80.204.1084|1986||189|120||2.44|
Simone Pepe|AVA|84|84|737.652.679.196.871.463.218.674.1065|1983||178|23||6.19.21|D
Papu Gómez|AVA|4|81|95.771.201.561.100.787.580.650|1988||165|17||35.49.51.59.60|E
Andrés Guardado|MED|111|83|109.262.888.524.648.142.527|1986||172|182||39|
Rolando Bianchi|AVA|84|79|100.196.729.551.510.848.154.549.673.696|1983||188||||
Christian Maggio|DEF|84|83|356.858.768.601.139.513|1982||184|34||43.48|
Valon Behrami|MED|143|84|320.378.416.510.925.356.601.408.921.871.329.165|1985||184|83|145|43|
Federico Marchetti|GR|84|82|848.696.241.858.196.510.378.810|1983||188|11|||
Gabi|MED|54|82|104.110.379.779.59|1983||180|||3.51.59|
Brede Hangeland|DEF|116|81|901.233.367.243|1981||199|91|45||
Lukasz Piszczek|DEF|126|83|418.944.157|1985||184|66||5.33.53|
Dmytro Chygrynskyi|DEF|153|81|788.564.127.269.12.445.480|1986||189|29||3.26.59|
Juan Arango|MED|159|81|577.649.697.549.158.226.1284|1980||180|129|||
Mathieu Bodmer|MED|58|79|759.530.541.647.763.612.398.75|1982||190|1||4.11|
Mathieu Debuchy|DEF|58|82|530.610.93.156.763.885|1985||176|27||4.15.24|
Stéphane Mbia|MED|24|82|731.553.698.787.856.854.755.190.502|1986||190|68||4.24.59|
Sven Bender|MED|2|82|1.157.524|1989||186|7||5.29.33.53|
Naldo (1982)|DEF|16|81|462.923.933.587.782|1982||196|4||34|
Micah Richards|DEF|76|83|551.356.99|1988||180|13||2.19.37|
Kevin Mirallas|AVA|20|83|530.763.632.299.356.744.374.582|1987||182|60||38.45|D
Eduardo (1982)|GR|127|84|163.136.909.378.140.131.277.215.907|1982||187|36||8.20.21.25.28.30.40.48|
Daniel Osvaldo|AVA|84|82|427.100.513.356.154.291.737.805.463.440.325.150.125|1986||183|14|4|6.32.35.36.37.42|
Rodrigo Palacio|AVA|4|84|125.150.378.440.154.165|1982||175|27||37|
Bryan Ruiz|MED|38|83|465.334.367.648.812.777.1165|1985||188|147||28.30|
Milan Badelj|MED|40|83|277.592.408.356.510.378|1989||186|55|||
Alessandro Matri|AVA|84|83|7.694.196.463.356.378.510.781.165|1984||183|7||6.11.21.58|
Mathieu Valbuena|MED|58|83|553.276.541.351.632.87.474.965|1984||167|52||4.24|D
Lucas Leiva|MED|16|84|395.532.510|1987||179|33||33.43.48.50|
Yann Sommer|GR|143|84|132.391.158.133.440.224.1212|1988||183|94||5.6|
Ömer Toprak|DEF|152|82|365.524.157.923.84|1989||186|27|2||
Andrea Ranocchia|DEF|84|83|378.128.440.768.426.580.979|1988||195|21||6.21.37.38.43.44.48|
Giovani dos Santos|AVA|111|83|127.853.447.371.709.549.905.499.77|1989||174|106|||D
Bojan Krkic|AVA|54|85|127.737.7.32.825.548.66.579.906|1990||170|9||3.22.23.26.36.58|D
James McCarthy|MED|78|83|409.929.299.243.204|1990||180|43|51|38.45|
Mateo Musacchio|DEF|4|80|734.905.7.510|1990||182|6||51|
Domagoj Vida|DEF|40|83|594.524.277.275.141.12|1989||184|105|||
Lukas Hradecky|GR|57|83|289.172.281.524.587|1989||187|108|52|5.56|
Andy Carroll|AVA|76|83|610.695.532.925.720.924.75.156.1149|1989||193|9||19|
Lars Stindl|MED|2|81|479.158|1988||180|11||29|
Simon Kjær|DEF|43|85|566.652.933.737.530.351.787.100.7|1989||190|132||6.35.36.55|
Fedor Smolov|AVA|134|81|276.354.85.880.494.535.203|1990||187|45||19|
Anthony Modeste|AVA|58|78|612.81.156.146.746.421.231.763.157|1988||185||||
Adil Rami|DEF|58|84|530.888.7.787.553.351.342.149.862.1007|1985||190|36||4.24.59.60|
Fernando (1987)|MED|16|81|903.325.295.551.371.787.443|1987||183|||7.12.26.28.35.41.55.59|
Iker Muniain|AVA|54|81|101.144.771|1992||170|6||17.23.35.36|E
Lima|AVA|16|78|910.659.777.120.163.140|1983||178|||7.30.34|
Martín Cáceres|DEF|157|85|905.127.463.787.805.416.510.356.196.523.499.528.255|1987||178|116||3.6.21.26.58|
Diego Perotti|AVA|4|81|787.150.378.737.351.764|1988||179|5||41.59|E
Bas Dost|AVA|124|82|310.417.414.933.812.281.224.882.589|1989||196|18||30.32|
Sebastian Rudy|MED|2|82|298.421.133.782|1990||180|29||5.29|
Kyriakos Papadopoulos|DEF|63|81|632.524.705.408.592.42.113.644.522.782|1992||186|35||25|
Lucas Barrios|AVA|122|82|842.109.227.157.809.578.653.395.427.382.254.89.1321.1006|1984||189|36|4|5.33|
Aleksandar Dragovic|DEF|165|82|117.132.275.524.518.294|1991||186|100|||
Iago Falque|AVA|54|83|127.463.128.853.805.72.719.378.737.848.139.183|1990||174|1||3.12.58|D
Nacer Chadli|AVA|20|83|334.853.924.587.80.131.473.1324.822|1989||187|67||12.34.42.45|E
Anthony Lopes|GR|127|82|541.600.81|1990||184|14|58|8.25|
Gary Medel|MED|29|84|150.787.197.440.141.154.892.1157|1987||171|161||17.37|
Karim Bellarabi|AVA|2|77|278.524.1329|1990||183|11||29.56|D
Yuri Berchiche|DEF|54|80|725.101.853.216.886.887.753.647|1990||181|6||4|
Tomáš Vaclík|GR|32|81|806.132.787.632.425.607.67.149|1989||188|54||35.59|
Pizzi|MED|127|79|163.748.668.110.262.140.291.131.17.292.959|1989||172|17||7.18.25.30.34.40.46.51.59|D
Ganso|MED|16|81|777.834.787.75.358|1989||184|8|||
Martín Montoya|DEF|54|82|127.440.142.888.166.90|1991||174|6||3.22.26.36.37.58|
Keirrison|AVA|16|82|235.653.140.127.356.777.242.537.92|1988||184|||3.7.26.30.58|
Adem Ljajic|MED|145|82|665.356.737.440.848.141.478.619|1991||182|47||37|
Marcel Halstenberg|DEF|2|78|817.705|1991||186|9||29|
Jonjo Shelvey|MED|76|82|213.532.147.830.610.617.180.301.175|1992||184|6||43|
Rafael Tolói|DEF|84|80|389.834.737.100|1990||185|14|16|8.37.59|
Mario Gaspar|DEF|54|80|905.921.283|1990||178|3||23.59|
Danny Drinkwater|MED|76|83|552.425.197.921.129.518.215.146.175.99.484.720|1990||177|3||2.10.21.44.48.53|
Sandro|MED|16|81|443.853.698.924.84.139.378.871.120.389|1989||188|17||12|
Franco Vázquez|MED|84|80|138.652.719.787.663.238|1989||187|5|4|21.35.49.59|
Yuto Nagatomo|DEF|86|86|333.209.440.371.553|1986||170|146||12.37.44|
Josip Ilicic|MED|53|81|593.652.356.100.1044|1988||190|86|21||D
Diego Demme|MED|2|81|91.750.705.601.418|1991||170|1||6.29|
Christoph Kramer|MED|2|82|524.898.158.1329|1991||189|12||29.60|
Nathaniel Clyne|DEF|76|83|243.805.532.160|1991||175|14||33.42|
Martin Hinteregger|DEF|165|81|767.158.115.281.3|1992||184|67||59|
Stefan Lainer|DEF|165|79|767.318.761.158|1992||176|39|||
Mattia Destro|AVA|84|82|440.378.794.737.7.154.285.728|1991||182|8||6.43.58|
Aleksandr Kokorin|AVA|134|82|276.85.947.342.809.356.1222|1991||184|48||19.37|
Charles Aránguiz|MED|29|82|227.864.871.443.524.996|1989||172|103||17.56|
Alfred Finnbogason|AVA|82|82|469.414.725.632.115.540.466.1100|1989||184|73||38|
Portu|AVA|54|72|888.67.386.725.379|1992||167||||D
Wahbi Khazri|AVA|151|82|746.156.828.731.763.578|1991||176|74|58||E
Michail Antonio|AVA|85|79|720.216.805.789.617.925.1331.921|1990||180|24|76|35|
Mattia Perin|GR|84|82|378.650.674.463.652|1992||188|2||6.21.48|
Andrea Conti|DEF|84|75|100.673.7.663.768|1994||184|1||6|
Philipp Max|DEF|2|80|479.115.648.281.654.372.782|1993||178|3||29.43.46|
Neto|GR|16|83|102.356.463.888.127.160.93.159|1989||190|1||6.16|
Roberto Pereyra|MED|4|82|734.871.463.921.12|1991||182|19||6.38.49.51|
Manolo Gabbiadini|AVA|84|81|100.222.463.154.768.601.805.51|1991||181|13||21.37.44.48|
Sérgio Oliveira|MED|127|80|325.136.471.669.668.600.642.737.371.632.811|1992||181|13||7.12.25.28.31.32.34.35.39.41.52.55|
Maximilian Arnold|MED|2|80|933|1994||184|3||29|
Héctor Herrera|MED|111|83|649.325.110.423.845|1990||180|105||3.7.32.35.39.41.51.52|
Juan Fernando Quintero|MED|33|82|286.106.674.325.731.436.734.459.710.183|1993||169|53||20.32.35.39.41.52|D
Tom Cairney|MED|51|78|426.146.367|1991||183|2|76|38|
Ismaily|DEF|16|73|292.629.163.788.530|1990||177|||32.41.52|
Nikola Maksimović|DEF|145|77|294.848.601.809.378.411.578|1991||193|25||11.48|
John Brooks|DEF|45|81|418.933.140.421|1993||193|45|2|7|
Jérôme Roussillon|DEF|64|74|330.578.933.874.213.75|1993||175|17|58||
Nathan Redmond|AVA|76|80|145.616.805.141.175.789.146|1994||173|1|||D
João Pedro (1992)|AVA|84|76|112.652.908.677.777.292.196.351.395.426.772|1992||184|1|16|30.37.38|
Steven Berghuis|AVA|124|79|334.884.22.921.354.32|1991||180|46||54|D
Giannelli Imbula|MED|129|78|398.553.325.825.854.719.513.342.690.449|1992||186|2|20|17.32.35|
Francesco Acerbi|DEF|84|84|859.810.729.378.218.7.781.510.440.1122|1988||192|34||6.8.21.37.48|
Jeison Murillo|DEF|33|80|871.726.245.390.507.440.888.127.203.768.954|1992||182|32||3.20.37.44|
Danny Ings|AVA|76|82|160.175.532.805.99.925.790.936|1992||178|3||33.35|
Jesé|AVA|54|82|721.647.507.825.142.812.82.768.235.1348|1993||178|||3.4.11.31.43.53.58|E
André Carrillo|MED|125|82|812.140.921.45.55.234.1068|1991||180|109||7.18.28.30.34.38.46|
Fabian Schär|DEF|143|83|132.421.262.610.1159|1991||186|86||43|
Manuel Lanzini|MED|4|81|734.358.47.925.917|1993||170|5||49|
Willy Boly|DEF|39|77|15.163.325.934.617|1991||195|23|58|18.39.41.52|
Maximilian Philipp|AVA|2|80|365.157.276.933.923|1994||184||||
Lazar Markovic|AVA|145|80|665.140.532.351.812.426.80.367.374.856.87.244|1994||176|22||7.30.33.38.55|D
Wataru Endo|MED|86|85|792.881.797.298.532|1993||178|73||2.13.33|
Gabriel Paulista|DEF|16|82|280.905.93.888.110.141.234|1990||187|||15|
João Mário|MED|127|83|812.909.440.925.535.140.141.12|1993||173|56||7.8.18.21.25.28.30.34.38.45.47|
Robert Andrich|MED|2|82|418.274.415.874.524|1994||187|19||5.56|
Niklas Stark|DEF|2|79|620.418.923|1995||189|2||29|
Denis Suárez|MED|54|83|551.127.787.905.93.203.291.66|1994||181|2||2.3.35.36.37.59|
Mario Lemina|MED|59|82|319.553.463.805.371.367.612.934|1993||184|42||6.17.55|
Fernando Pacheco|GR|54|83|721.66.72.291.41.1348.1347|1992||187|||3.11.31|
Davide Zappacosta|DEF|84|82|118.100.848.215.737.378|1992||182|14||21.37.41.48.59|
Bernard|AVA|16|82|112.788.299.654|1992||164|14||11.38.41.50|E
Jonny Otto|DEF|54|81|203.110.934.642.66|1994||175|4||18.35.36.39.51|
Davie Selke|AVA|2|79|923.705.418.231.408.131|1995||192||||
Gaëtan Laborde|AVA|58|74|156.727.818.223.578.731.612.958|1994||181|||18|
Wylan Cyprien|MED|58|77|521.612.663.600.329|1995||181||||
Jamaal Lascelles|DEF|76|80|617.823.610.518|1993||188|||43|
Patrick Bamford|AVA|76|82|617.543.215.263.565.243.616.175.516.790|1993||185|1||17.21.31.43|
Guido Carrillo|AVA|4|78|296.587.805.186.283|1991||187|||4.34|
Alfred Duncan|MED|60|78|18.440.768.781.356.196.895|1993||178|10|||
Jhon Córdoba|AVA|33|78|286.701.291.390.548.231.418.494|1993||188|24||20|
Valentino Lazaro|MED|165|81|767.318.418.440.610.158.140.848.37|1996||180|36||21.30|D
Mohamed Elyounoussi|AVA|116|77|576.132.805.204.233|1994||178|55|102||D
Manu Trigueros|MED|54|82|905.390.722|1991||178|||59|
Sheraldo Becker|AVA|141|79|32.645.10.874.725.638.548|1995||180|23|124||E
Mahmoud Dahoud|MED|2|81|158.157.166.298.281|1996||176|2|146|29|
Nick Pope|GR|76|82|213.178.175.610.1150.1176|1992||199|10||53|
Álex Moreno|DEF|54|79|127.549.719.283.142.99.617.386.1177|1993||179|2||39|D
Lucas Alario|AVA|4|70|228.734.524.281.443.296|1992||186|9||49|
Samu Castillejo|AVA|54|81|105.185.586.905.7.888.781|1995||182|||6|D
Luca Waldschmidt|AVA|2|80|281.408.365.140.933.231|1996||177|7||29.30|
Roberto Gagliardini|MED|84|77|100.209.810.440.580.416.196.1226|1994||188|7||6.21.37|
Andrea Petagna|AVA|84|80|7.768.508.97.100.760.601.580.196.681.1226|1995||188|1||44|
Marco Benassi|MED|84|78|440.18.848.356.285.238.416|1994||184||||
Benjamin Henrichs|DEF|2|81|524.587.705|1997||183|19||27.29.34|
Andreas Pereira|MED|16|82|552.390.888.510.357.367.653|1996||177|10|20|9.11.31.38.54|
Dominik Livakovic|GR|40|82|277.351.386.127|1995||186|83||27.31|
Marko Pjaca|AVA|40|82|592.277.463.356.80.378.848.285.404.334.782|1995||185|28||6.48|E
Will Hughes|MED|76|77|263.921.243|1995||185|||38|
Sergio Rico|GR|54|81|787.367.647.549.43|1993||194|1||4.35.36.42.53.59|
Alberto Moreno|DEF|54|84|787.532.905.232.549|1992||172|5||23.33.35.58.59|
Solly March|AVA|76|76|166|1994||180||||D
Luciano Vietto|AVA|4|80|710.905.110.787.888.367.812.45.60.55.771|1993||173|||7.34.51|D
Matheus Uribe|MED|33|75|286.259.106.77.325.59|1991||182|62||7.20.52|
Óliver Torres|MED|54|80|104.110.905.325.787.577|1994||178|||3.7.35.39.51.52.59|
Calum Chambers|DEF|76|82|805.93.565.367.99.197|1995||182|3||15.16.42|
Erick Pulgar|MED|29|74|154.356.371.357.1052.1157|1994||186|54||34|
Neal Maupay|AVA|58|78|612.763.818.164.166.299.553.787|1996||173||||
Douglas Santos|DEF|16|80|621.871.390.112.408.947|1994||173|12||11|
Abdul Rahman Baba|DEF|60|83|394.115.215.820.549.642.720.782|1994||179|54||21.48.53|
Gonçalo Guedes|AVA|127|82|140.647.888.934.905.725|1996||178|35||4.7.25.30.35.40.45.46.55|E
Karol Linetty|MED|126|80|514.768.848.490.800|1995||176|47||25.44|
David Soria|GR|54|79|787.379|1993||192|||59|
Harrison Reed|MED|76|79|805.616.146.367|1995||166|||38.42|
Gerónimo Rulli|GR|4|82|296.725.551.578.905.32.553|1992||189|9||26.49.59.60|
Aritz Elustondo|DEF|54|78|725.642|1994||182|3|||
Diego Laxalt|DEF|157|83|255.440.154.285.378.7.848.204.276.677|1993||178|24||37.48|D
Nélson Semedo|DEF|127|85|140.127.934.351|1993||177|54||3.7.18.25.35.39.45.46.55|
Sofiane Boufal|MED|102|81|81.530.805.203.57.875.511.46|1993||175|46|58|34.52|D
Maxwel Cornet|AVA|39|81|323.541.175.925.805.378|1996||179|31||35.39|E
Ihlas Bebou|AVA|149|76|302.421|1994||183|38|||D
Juan Musso|GR|4|81|710.871.100.110|1994||191|4||49.59|
Pierluigi Gollini|GR|84|80|416.99.100.853.356.601.378.737|1995||194|1||6.21.37|
Salih Özcan|MED|152|81|231.422.157.933.141|1998||180|36|2||
Saša Lukić|MED|145|81|665.848.523.367.447|1996||183|66||38|
Lewis Cook|MED|76|79|516.160|1997||175|1|||
Guillermo Maripán|DEF|29|77|66.587.848.443.1157|1994||193|62||34|
Adam Armstrong|AVA|76|78|610.236.129.155.146.805.924.934|1997||172|||43.55|
Matt Targett|DEF|76|80|805.367.99.610.565.426|1995||183|||42|
Sergi Canós|AVA|54|82|127.532.164.616.632.888.886|1997||177|||3.33.58|E
Aarón Martín|DEF|54|78|291.548.203.378.709|1997||180|1|||
Jesús Vallejo|DEF|54|80|779.721.281.934.390.67|1997||183|||3.11.35.39.43.57.58|
Rob Holding|DEF|76|82|155.178.93.243.790.229|1995||189|||15.16|
Aleksey Miranchuk|MED|134|80|535.100.848.108|1995||182|56||59|
Vedat Muriqi|AVA|89|81|385.376.180.351.510.549.1186|1994||194|71||48|
Vanja Milinković-Savić|GR|145|80|911.552.515.848.760.97.822.601|1997||202|23|54|21.54|
Tosin Adarabioyo|DEF|76|82|551.924.146.367.215.853|1997||196|||26.38|
Ricardo Horta|AVA|127|77|909.586.163|1994||173|13||9.25.32.45|E
Attila Szalai|DEF|73|80|87.351.421.365.822.484.685.1072.718|1998||192|53||30.55|
Benjamin Bourigeaud|MED|58|76|521.731.39.964|1994||177||||
Hans Hateboer|DEF|124|78|312.100.731.541|1994||185|13||41.54.59|
Ryan Kent|AVA|76|80|532.236.129.365.168.717.351.784|1996||172|||33|E
Maximilian Mittelstädt|DEF|2|81|418.298|1997||178|16|||
Ainsley Maitland-Niles|DEF|76|82|93.447.924.737.805.541.299|1997||180|5||15.16.31.41|
Ellyes Skhiri|MED|151|82|578.231.281|1995||185|86|58||
Maxime Lopez|MED|58|79|553.781.356.662|1997||167|||12.17|
Moussa Niakhaté|DEF|135|77|885.323.548.617.541|1996||190|38|58|39.41|
Wout Faes|DEF|20|80|80.414.300.472.820.518.587|1998||187|28||45|
Jacob Bruun Larsen|AVA|43|80|157.298.421.80.175|1998||183|8||53|E
Josh Brownhill|MED|76|78|695.129.168.175.60|1995||180||||
Ferro|DEF|127|75|140.888.405.907.295.292|1997||191|||7.18.30|
Răzvan Marin|MED|132|81|335.822.32.196.285.12|1996||177|78||44|
David García|DEF|54|77|638.181.57|1994||186|3|||
Borja Mayoral|AVA|54|80|721.933.523.737.379.1348|1997||181|||11.31.35.41.43.57.58|
Michele Di Gregorio|GR|84|80|440.618.580.463.160|1997||187|||21|
Tom Davies|MED|76|80|299.790|1998||180|||11.38.43.45|
Lukas Nmecha|AVA|2|79|695.551.933.565.80.516|1998||185|7||2.26.27|
Javairô Dilrosun|AVA|124|78|418.156.354.77.59.500|1998||175|1||13.37|D
Andrea Pinamonti|AVA|84|78|440.366.378.285.781.510|1999||185|1||6.21.37|
Jakub Jankto|MED|32|80|871.97.768.379.806.196|1996||184|45||44|
Matteo Gabbia|DEF|84|62|7.905|1999||189|||6.41.52|
Panagiotis Retsos|DEF|63|78|632.524.790.763.416|1998||186|27|164|40|
Pepelu|MED|54|71|523.103.430.847.908.888|1998||185||||
Kristoffer Ajer|DEF|116|79|432.204.489.164.531|1998||198|61|||
Robin Koch|DEF|2|82|0.365.516.281|1996||190|15||17.27.29|
Óscar Mingueza|DEF|54|81|127.203.243|1999||184|6||43|
Todd Cantwell|MED|76|77|362.616.160.717.146|1998||177||||
Roland Sallai|DEF|73|81|652.17.365.371|1997||183|67|||
Valentin Rongier|MED|58|78|600.553.731|1994||172|||12.44.52|
François Kamano|AVA|68|75|746.156.535.251.342.955.433|1996||182|56|||E
Umar Sadiq|AVA|115|81|810.737.154.848.588.717.673.665.72.725.888|1997||192|12||41|
Unai Núñez|DEF|54|79|101.184.144.203.416.888.291|1997||186|2||43|
Zinho Vanheusden|DEF|20|78|440.822.378.22.471.1032|1999||187|1||45|
Gorka Guruzeta|AVA|54|79|101.144.184|1996||188|1|||
Reiss Nelson|AVA|76|81|93.421.354.367.164|1999||175|||13.15.16.38|E
Franco Cervi|AVA|4|80|738.140.203|1994||167|4||7.18.30.43.46.49|E
Mattias Svanberg|MED|142|79|550.154.933|1999||185|43|||
Odsonne Édouard|AVA|58|78|647.854.204.243.518.521|1998||187||||
Malang Sarr|DEF|58|78|612.215.325.587.521.590|1999||182|2||42.52.53|
Simon Banza|AVA|129|76|521.345.163.856.47.642|1996||189|18|58||
Habib Diallo|AVA|135|76|323.818.293.60.251.512|1995||185|41||55|
Jamal Lewis|DEF|79|79|616.610.921.834.695|1998||178|40|76||
Romano Schmid|MED|165|81|827.318.767.923.932.366|2000||168|42|||
Mason Holgate|DEF|85|82|129.299.924.805.790.43|1996||184|10|76|11.38.43.45|
Loren Morón|AVA|54|74|143.142.291.507.90.1032|1993||188||||
Alfonso Pedraza|DEF|54|75|905.187.516.66.142.510|1996||182|1||59|D
Alban Lafont|GR|39|80|854.356.600.654|1999||193|4|18|43|
Diogo Leite|DEF|127|78|325.163.874.510|1999||190|||7.52|
Eldor Shomurodov|AVA|158|77|741.378.737.810.196.131|1995||190|97||31.44|
Gabriel Gudmundsson|DEF|142|74|406.312.530.516|1999||180|32||41|
Jordan Teze|DEF|124|78|648.587|1999||176|4|||
Jesper Karlsson|AVA|142|74|284.22.154.513.26.882.1098.786|1998||171|14||13|E
Joël Piroe|AVA|141|77|807.648.830.516.925|1999||185|1|124|39|
André Almeida (2000)|MED|127|74|908.888.709|2000||176||||
Anel Ahmedhodzic|DEF|21|77|550.420.156.790.354.175.617|1999||195|25|||
Moatasem Al-Musrati|MED|95|74|46.908.732.163.141.587.416.36|1996||189|44|2||
Igor Julio|DEF|16|76|318.767.932.117.760.356.166.925.175|1998||184|||39|
Nicolò Casale|DEF|84|73|416.673.694.895.285.510.154|1998||191|||48|
Arthur Cabral|AVA|16|78|202.653.132.356.140.159|1998||186|||18|
Tommaso Pobega|MED|84|80|7.841.810.848.154|1999||188|3||37.41.52|
Andrea Colpani|MED|84|77|100.857.580.356|1999||184||||D
Emmanuel Latte Lath|AVA|39|74|674.100.760.331.565.108.874|1999||177|4|||
Josh Sargent|AVA|45|79|923.616.849|2000||185|29||42|
Yunus Akgün|AVA|152|77|371.29.518|2000||173|21|||D
Dennis Man|AVA|132|81|870.339.663.648|1998||183|48|||D
Mads Hermansen|GR|43|76|172.518.925|2000||187|5||39|
Dara O'Shea|DEF|78|77|924.175.447|1999||189|48|||
Oliver Skipp|MED|76|80|853.616.518.213|2000||175|||21.31.42|
Jakub Kamiński|AVA|126|77|514.933.231.140|2002||179|32||25.38|E
Calvin Stengs|MED|124|77|22.612.744.354.681|1998||187|8||13.54|D
Pascal Struijk|DEF|124|78|516.166|1999||190||20|17|
Myron Boadu|AVA|124|77|22.587.334.898.648.921|2001||183|1||13|
Wouter Burger|MED|124|76|354.300.807.132.825.421|2001||190||||
Caio Henrique|DEF|16|80|110.104.659.358.395.587.32|1997||178|5||11.51|
Victor Nelsson|DEF|43|78|613.233.371.737.416|1998||185|18||44|
Fran Beltrán|MED|54|78|719.203.386|1999||170|1||43|
Nathan Patterson|DEF|51|79|717.299.848|2001||183|30|||
Ben Brereton Díaz|AVA|29|79|617.146.905.790.805.263|1999||190|45|76||D
Roberto Piccoli|AVA|84|78|100.810.378.416.285.513.196.356.154|2001||187|1|||
Zion Suzuki|GR|86|81|881.797.663.99|2002||190|31|45||
Diant Ramaj|GR|2|75|415.281.32.157.233|2001||189||||
Jean-Ricner Bellegarde|MED|71|77|521.293.934|1998||172|17|58|55|
David Affengruber|DEF|165|77|318.767.827.283.367|2001||185|3|||
Luiz Felipe|DEF|84|80|450.510.764.142.46.553.719|1997||187|1|16|37.48|
Nicolò Cambiaghi|AVA|84|73|728.100.285.154|2000||177|3|||E
Cucho Hernández|AVA|33|79|671.921.183.754.549.379.230.142.390|1999||175|11||20.38|D
Gustav Isaksen|AVA|43|77|566.510|2001||181|19||48|D
Yann Gboho|MED|58|74|731.907.207.854.236|2001||173|1|39||E
Marcin Bulka|GR|126|77|647.307.502.612.590|1999||199|10||4.42.53|
Sergi Altimira|MED|54|76|379.142.812|2001||188|1||41|
Rocco Reitz|MED|2|75|158.797.705|2002||176||||
Armel Bella-Kotchap|DEF|2|79|898.805.648.416.895|2001||190|2|58|27|
Ivan Ilić|MED|145|81|588.416.848.294.513.551|2001||185|24||26|
Manuel Ugarte|MED|157|83|345.812.647.552.1000|2001||182|39||4.17.36.47|
Finn Azaz|MED|78|73|216.684.565.805.99.1164.924|2000||170|16|76||
Kévin Denkey|AVA|149|75|622.207.221|2000||181|50|||
Logan Costa|DEF|23|78|820.512.854.905|2001||190|27|58||
Francisco Conceição|AVA|127|83|325.32.463|2002||166|23||7.45.52|D
Enock Mwepu|MED|163|78|166.318.767|1998||184|23|||
Wilson Isidor|AVA|71|79|587.819.535.947.828.731.746|2000||186|11|58|34|
Lucas Da Cunha|MED|58|75|731.612.509.223.232|2001||174|3|||
Nicolás Domínguez|MED|4|75|917.154.617|1998||179|11||39.49|
David Carmo|DEF|127|76|163.325.632.617.723|1999||196|18||39.52|
Pavel Sulc|MED|32|79|902.179.453.541.1041|2000||177|27||41|
Luka Sucic|MED|40|76|318.767.725|2002||185|23|165||
Mohamed Ihattaren|MED|102|78|648.463.768.32.802.707.362|2002||177||124|44|D
Morten Frendrup|MED|43|75|172.378|2001||175|2|||
Eduardo Quaresma|DEF|127|76|812.847.421|2002||185|||7.41.47|
Tariq Lamptey|DEF|60|79|215.166.356.698|2000||163|11|76||
Stephen Eustaquio|MED|25|75|851.520.214.185.668.325.500.830|1996||178|64||7.52|
Pedrinho|MED|16|78|234.140.788.112|1998||172|||30.50|D
Carlos Vinícius|AVA|16|80|86.724.601.732.587.140.853.648.367.371.395|1995||190|||11.18.30.31.34.38|
Andrei Rațiu|DEF|132|80|905.10.754.719|1998||183|41|||
Lazar Samardžić|MED|145|78|418.705.871.100|2002||184|30|2|48|
Patrick Wimmer|AVA|165|80|117.91.933.421|2001||182|36|||D
Cameron Archer|AVA|76|77|99.695.565.790.805.15.1083|2001||175||||E
Anatoliy Trubin|GR|153|81|788.140|2001||199|31||18.31.38|
Thijs Dallinga|AVA|124|75|310.312.300.854.154.231|2000||190|1|||
Enzo Boyomo|DEF|24|74|67.886.638|2001||184|9|58||
Franjo Ivanović|AVA|40|75|404.875.140.521|2003||185|12|165|31.38|
Kiliann Sildillia|DEF|58|76|365.648.323|2002||186||||
Matheus Henrique|MED|16|75|833.395.781.242|1997||175|1||34|
Arsen Zakharyan|MED|134|78|276.725|2003||182|8|||
Fábio Carvalho|MED|127|80|367.532.705.426.164|2002||170|||33.38|E
Edoardo Bove|MED|84|76|737.356.921|2002||181|||31.44|
Mohammed Salisu|DEF|60|81|887.886.805.587|1999||191|22|||
Arne Engels|MED|20|75|225.115.204.925|2003||185|4||39|D
Chrislain Matsima|DEF|58|77|587.319.223.115|2002||190|||34|
Sofiane Diop|AVA|102|77|587.330.612.731|2000||176|1|58|34|E
Leonardo Balerdi|DEF|4|80|150.157.553.737|1999||187|13||12.49|
Sebastian Nanasi|AVA|142|70|550.475.293.1099|2002||178|14|||E
Armand Laurienté|AVA|58|74|868.731.319.781|1998||171||||E
Filip Jørgensen|GR|43|81|905.215.293|2002||190|4|142|56|
Gavin Bazunu|GR|78|78|692.805.822.825.155.551|2002||188|22||26|
Ryan Flamingo|DEF|124|75|71.781.907.882.648|2002||186||||
Jhon Arias|MED|33|80|534.183.437.358.934.653.1309|1997||168|46||9.55|D
Jayden Oosterwolde|DEF|124|76|334.663.351|2001||189|||31|
Aitor Paredes|DEF|54|79|101.184.144|2000||186|1|||
Azzedine Ounahi|MED|102|80|81.553.654.386|2000||182|58||43.46|
Leopold Querfeld|DEF|165|78|718.874|2003||190|5|||
Matheus Nunes|MED|127|82|292.812.934.551|1998||183|21|16|2.7.25.26.35.45.47|
Hannibal|MED|151|83|552.145.787.175|2003||177|48|58||
Jonas Urbig|GR|2|77|231.451.394.133|2003||189|2||5|
Merlin Röhl|MED|2|73|315.365.299|2002||192||||D
Unai Vencedor|MED|54|77|101.144.753.709.523.174|2000||176||||
Ander Barrenetxea|AVA|54|79|725|2001||178|1||3|E
Beñat Prados|MED|54|77|101.144.184.188|2001||179||||
Lucas Beltrán|AVA|4|79|734.228.356.888|2001||176||||
Lukas Hornicek|GR|32|77|163.610|2002||197|3|||
Beñat Turrientes|MED|54|78|725|2002||181|1|||
Lamare Bogarde|MED|124|79|169.99|2004||183|||59|
Alexsandro|DEF|16|74|214.530|1999||192|3||11.41|
Lucas Stassin|AVA|20|71|80.473.763.787|2004||183|1|||
Orri Óskarsson|AVA|82|77|233.835.725|2004||186|22|||
Diego Coppola|DEF|84|76|416.166.662|2003||192|3|||
Jaden Philogene|AVA|76|77|99.825.197.426.447|2002||181||||E
Dário Essugo|MED|127|76|812.214.507.215.293|2005||178|||7.47.56|
Youssouf Ndayishimiye|DEF|19|75|938.131.612|1998||187|30|||
Antoni Milambo|MED|124|76|354.164|2005||179|||13|
Emmanuel Agbadou|DEF|39|69|466.820.934.141|1997||192|26||55|
Jaidon Anthony|AVA|76|74|160.516.175.164|1999||183||||E
Nnamdi Collins|DEF|2|76|281|2004||191|1|||
Isaac Romero|AVA|54|75|787|2000||183||||
Salis Abdul Samed|MED|60|77|223.521.828.612|2000||179|22|||
Jacob Greaves|DEF|76|75|216.426.447|2000||193||||
Jay Stansfield|AVA|76|75|367.145|2002||187|||38|
Tim Iroegbunam|MED|76|75|99.698.299.426|2003||183||||
Daniele Ghilardi|DEF|84|73|416.768.737.987|2003||189||||
Mandela Keita|MED|20|74|625.744.663|2002||180|2|||
Nicolò Savona|DEF|84|79|460.463.617|2003||192||||
Lorenzo Bernasconi|DEF|84|70|238.100|2003||190|||48|
Jake O'Brien|DEF|78|77|831.708.541.299.1090.243|2001||197|21|||
Andy Diouf|MED|58|77|731.132.521.440|2003||187|2||6|
Guéla Doué|DEF|39|79|731.293.524|2002||187|24|58||
Ben Gannon-Doak|AVA|51|80|204.532.565.160|2005||173|21||13.33|D
Álex Jiménez|DEF|54|75|7.160.356.1348|2005||171|||41.52|D
Carlos Forbs|AVA|127|75|32.934.224|2004||169|1||45.55|D
Kévin Danois|MED|58|71|15|2004||183||||
Jayden Addai|AVA|124|73|22.232|2005||180||||D
Shea Charles|MED|79|75|551.805.789.367|2003||189|39|76|2.26|
Williot Swedberg|AVA|142|66|410.203.1208|2004||185|3||43|E
Ismaël Doukouré|DEF|58|76|885.293|2003||183||||
El Chadaille Bitshiabu|DEF|58|77|647.705.371|2005||196|||4|
Vanderson|DEF|16|76|395.587|2001||173|8||11|
Pablo|AVA|127|72|345.668.380.925|2004||184|||39|
Farès Chaïbi|MED|5|79|854.281|2002||183|37|58||D
Yáser Asprilla|AVA|33|75|286.921.386.371|2003||186|14|||D
Abdul Fatawu|AVA|60|74|812.518.447|2004||177|32||47|D
Ezechiel Banzuzi|MED|124|72|588.625.705|2005||191|1|124||
Alberto Costa|DEF|127|73|908.463.325|2003||186|||7|
Hamza Igamane|AVA|102|73|717.530|2002||181|10|||
Yarek Gasiorowski|DEF|54|75|888.648|2005||191||||
Nilson Angulo|AVA|49|78|503.80.828|2003||182|21|||E
Guillaume Restes|GR|58|77|854|2005||188|1|||
Jannik Schuster|DEF|165|71|318.767.164|2006||190||||
Jeanuël Belocian|DEF|58|75|731.524.933.709|2005||182|||56|
Valentin Atangana|MED|58|73|820.36|2005||173||24||
Nathan Zézé|DEF|58|74|600.590|2005||190||||
Noahkai Banks|DEF|45|72|115|2006||193||||
Lucas Høgsberg|DEF|43|73|613.293|2006||182|6|||
Jeff Ekhator|AVA|84|76|378.463|2006||188|1|||
Chema Andrés|MED|54|76|721.298.166.1348.1347|2005||190|||11|
Afonso Moreira|AVA|127|72|812.380.541.524|2005||175|||7.41.47|E
Santiago Mouriño|DEF|157|74|710.110.779.66.905|2002||186|2||17.51|
Ernest Nuamah|AVA|60|79|613.708.541|2003||178|24||41|D
Rodrigo Mendoza|MED|54|75|283.110|2005||182||||
Eliezer Mayenda|AVA|54|73|330.828.419.731|2005||180||||D
Aladji Bamba|MED|58|76|587.610|2006||181||||
Facundo Buonanotte|MED|4|76|738.166.518.215.516.283|2004||174|2||49|D
Sidiki Chérif|AVA|68|74|81.351.236|2006||188||||
Veljko Milosavljevic|DEF|145|75|294.160|2007||192|2|||
Martial Godo|AVA|39|71|929.367.293|2003||169|1|76|38|E
Claudio Echeverri|MED|4|79|734.551.524.386.140|2006||171|||26.38|D
Gianluca Prestianni|AVA|4|76|917.140|2006||165|3||18.31.38.49|D
Mikey Moore|AVA|76|73|853.717.231|2007||180|||59|E
Gift Orban|AVA|115|76|465.541.421.416.1053|2002||178|||41|
Ismaëlo Ganiou|DEF|18|71|521.650|2005||185|1|58||
Karl Etta Eyong|AVA|24|75|245.905.523|2003||181|8|||
Carlos Espí|AVA|54|78|103.523.721|2005||194|||31|
Fer López|MED|54|66|203.934|2004||188|||43.55|
Kacper Potulski|DEF|126|71|548|2007||195|3|||
Arthur Avom|MED|24|72|319|2004||173|16|||
Joane Gadou|DEF|58|74|767.157.318|2007||195||||
Javi Rodríguez|DEF|54|71|203|2003||178|1||43|
Robinio Vaz|AVA|58|74|553.737.330.426|2007||185||||
Kader Meïté|AVA|58|74|731.45|2007||191||||
Dayann Methalie|DEF|58|72|854.828|2006||186||||
Mateus Mané|AVA|127|73|934|2007||175|||55|
Rudy Matondo|MED|58|73|15.662|2008||180||||
Thiago Pitarch|MED|54|81|110.379.186.721.1348.1347|2007||179|||31|
Maxi Pereira|DEF|157|83|140.325.677.734.255|1984||173|125||7.30.32.35.39.52|
Rui Barros|MED|127|81|748.891.325.463.587.553|1965||159|36||7.15.20.25.59|
Trincão|AVA|127|82|163.127.934.812.36|1999||186|22||7.9.18.25.45.47|D
Roman Weidenfeller|GR|2|83|0.157|1980||188|6||5.29.33.53.60|
Sebastian Kehl|MED|2|83|365.157|1980||187|31||5.33|
Timo Hildebrand|GR|2|81|298.888.421.812.281.782|1979||186|9||5.29|
Simon Rolfes|MED|2|82|923.524.1368.1329|1982||189|29||5.29|
David Jarolim|MED|32|81|802.133.620.408.950.573|1979||174|29||5|
Tim Wiese|GR|2|81|0.923.421|1981||193|6||29|
Thomas Hitzlsperger|MED|2|85|133.99.298.510.925.933.299.1245|1982||183|52||5.29.59|
René Adler|GR|2|82|524.408.548|1985||191|12||29|
Kevin Phillips|AVA|76|81|921.828.805.99.924.145.147.243.518|1973||170|9|||
Jermaine Pennant|AVA|76|81|93.921.516.145.532.692.779.825.934.929.178.1084.1335|1983||175|||2.15.43|D
Matthew Upson|DEF|76|83|539.93.617.243.720.145.925.825.166.518.543|1979||185|21||2.15.19|
Mark Schwarzer|GR|8|83|274.0.162.565.367.215.518|1972||194|109||31.44|
Wes Brown|DEF|76|86|552.828.146.1330|1979||185|23||2.10.19.58|
Nicolás Burdisso|DEF|4|84|150.440.737.378.848|1981||182|49||6.17.31.36.37.44|
Christian Abbiati|GR|84|84|580.7.463.848.110|1977||191|4||6.11.19.58|
Mickaël Landreau|GR|58|82|600.647.530.746|1979||184|11||4.24|
Paul Robinson|GR|76|83|516.853.146.175|1979||193|41||19|
Wayne Bridge|DEF|76|84|805.215.367.551.925.828.166.720|1980||178|36||2.19.31.37.44.50|
Jussi Jääskeläinen|GR|57|81|155.925.929.1327|1975||191|56|||
Péguy Luyindula|AVA|58|81|210.293.541.553.15.523.647.608|1979||178|6|129|4.11|
Benoît Pedretti|MED|58|80|330.553.541.15.530.4.19|1980||177|22||4|
Benoît Cheyrou|MED|58|79|530.15.553.849|1981||182|||4.24|
Obafemi Martins|AVA|115|83|728.440.610.933.745.145.523.784.755|1984||170|42||6.37|
Marco Marchionni|AVA|84|81|285.663.679.463.356.768.508|1980||173|6||24.44|D
Morgan De Sanctis|GR|84|83|674.463.871.787.371.601.737.587|1977||190|14||4.6.11.34|
Sergio Almirón|MED|4|78|611.871.416.285.463.587.356.128.201|1980||180|||44|
John Mensah|DEF|60|81|378.218.575.238.731.541.828.1028.1152|1982||177|86|||
Erjon Bogdani|AVA|1|79|376.277.729.764.416.794.218.18.209|1977||191|75|||
David Di Michele|AVA|84|79|359.764.871.729.652.848.925.513.218|1976||171|6|||
Manuele Blasi|MED|84|81|737.513.673.463.663.356.601.652.674.890.1364|1980||178|8||6.19.24|
Stefan Kießling|AVA|2|82|620.524|1984||191|7||29|
Marco Donadel|MED|84|80|7.513.663.768.356.601.416.579|1983||179|||6.11.43.58|
Joseba Llorente|AVA|54|78|725.753.886.905.638|1979||185|3|||
Manuel Pablo|DEF|54|74|507.262|1976||176|13||3|
Andrés Palop|GR|54|81|888.905.787.524|1973||184|||3.8.43.44.59|
Leo Franco|GR|4|82|438.549.110.371.779.771.754|1977||188|4|||
Antonio López|DEF|54|82|104.110.638.549|1981||173|16||51.59|
Sergio García|AVA|54|82|127.523.779.142.291.57|1983||175|18||3.8.22.23.42.54|D
Jaroslav Plasil|MED|32|83|424.587.867.638.156.201|1982||183|103||24|
Nery Castillo|AVA|111|79|252.632.788.551.269.217.90.649.527.719|1984||170|21||59|D
Blerim Dzemaili|MED|143|83|338.155.848.663.601.371.378.154.579|1986||179|69|97|43|
Michael Dawson|DEF|76|82|617.853.426|1983||188|6||12.19.38|
Souleymane Diawara|DEF|135|81|511.330.213.156.553.612|1978||187|48||4.24|
Peter Odemwingie|AVA|115|82|530.535.924.197.825.168.1232.742|1981||182|65|158||D
José Moreira|GR|127|80|140.830.633.629.292|1982||185|4||7.20.25.28.30|
Danny|MED|127|79|554.812.276.947.946.802|1983||178|38|159|12.20.25.32.40|
Stipe Pletikosa|GR|40|82|405.788.809.853.741.262|1979||193|114|||
Razvan Rat|DEF|132|81|326.788.925.719.642|1981||179|113||59|
Carlos Cuéllar|DEF|54|80|638.717.99.828.616.72.1033.1045|1981||190||||
Marcell Jansen|DEF|2|83|158.133.408|1985||191|45||5.29|
Ignazio Abate|DEF|84|85|7.601.679.575.285.848|1986||180|22||6.11.21|
Manuel Fernandes|MED|127|82|140.692.299.888.141.535.494.486.88|1986||176|17||7.20.25.40.50|
Mathieu Flamini|MED|58|83|553.93.7.243.379|1984||178|3||6.11.15|
Benoît Assou-Ekotto|DEF|24|83|521.853.698.763.323|1984||178|23|58|12.42|
Hatem Ben Arfa|MED|58|83|541.553.610.426.612.647.731.886.156.530|1987||178|15||4.24|D
Heurelho Gomes|GR|16|82|242.648.853.421.921|1981||191|11||12.38|
Antonio Nocerino|MED|84|84|463.118.378.241.679.652.7.925.848.663.637.139.1314|1985||175|15||6.44|
Manuel Pasqual|DEF|84|80|858.356.285.979|1982||178|11||21|
Mauro Zárate|AVA|4|81|917.59.145.510.440.925.698.356.921.683.51.78.150.252.462|1987||176|||38.44|
Younès Kaboul|DEF|58|81|15.853.692.828.921|1986||193|5||12.38.42|
Rolando|DEF|127|82|120.325.601.440.80.553.163|1985||191|21|23|7.12.20.25.28.30.35.40.41.55.59|
Gonzalo Castro|MED|2|82|524.157.298.91|1987||170|5||29.53|
Sergio Floccari|AVA|84|79|378.100.510.663.781.154.760.1314|1981||180||||
Martin Harnik|AVA|165|82|923.302.298.408|1987||185|68|2||D
Adam Johnson|AVA|76|82|565.516.921.551.828|1987||181|12||2.19.37|D
Cristian Rodríguez|AVA|157|84|677.647.325.110.663.395.438.140.1108|1985||178|110||3.7.12.28.50.51.55.59|D
José Fonte|DEF|127|83|350.909.140.668.295.243.805.925.530.163.200|1983||191|51||4.8.25.41.42|
Asmir Begovic|GR|21|83|692.160.939.447.825.215.699.7.299.698.518.1136|1987||198|63||2.21.43|
Raúl García|AVA|54|83|638.110.101.181|1986||184|5||3.23.51.59|
Stephen Ireland|MED|78|82|551.99.610.825.155|1986||173|6||37|
Gabriel Agbonlahor|AVA|76|82|921.789.99|1986||180|3||19|
Éder (1986)|AVA|84|83|240.285.366.165.209.768.440.834.1183|1986||178|26|16|21.37|
Camilo Zúñiga|DEF|33|83|106.794.601.154.921|1985||172|61||43.48|
Caner Erkin|DEF|152|80|194.371.351.141.440.478.131.301.1171|1988||181|63||55|
Jack Cork|MED|76|82|160.215.783.805.921.236.175.830|1989||183|1||2.11.31.42.50|
Salvatore Bocchetti|DEF|84|80|97.366.378.745.809.7.416.674|1986||186|5|||
Nacho Monreal|DEF|54|85|638.586.93.725.181|1986||180|22||15.23.35|
Miguel Veloso|MED|127|82|812.378.275.416.681|1986||180|56||20.25.40.50|
André-Pierre Gignac|AVA|58|82|319.666.854.553.843|1985||187|36||17.24|
Antonio Adán|GR|54|82|721.196.142.110.812.1348.1347|1987||190|||3.7.31.35.47.51|
Domenico Criscito|DEF|84|81|768.440.728.947.378.463.849|1986||183|30||12.19.21.24.37.44|
Kieran Gibbs|DEF|76|84|93.616.924.442|1989||178|10||15.19|
Adrián López|AVA|54|82|723.262.66.586.110.325.905.638|1988||183|2||3.23.32.35.39.51.52.59|
Eric-Maxim Choupo-Moting|AVA|24|85|817.408.620.548.825.647.133.608.782|1989||191|76|2|4.5.27.53|
Pablo Hernández (1985)|MED|54|81|888.245.379.830.38.719.516.51.981|1985||173|4||17.23|D
Ante Budimir|AVA|40|81|403.592.817.241.768.549.638|1991||190|43|21||
Angelo Ogbonna|DEF|84|82|848.241.463.925.921|1988||191|13||6.21|
Simon Mignolet|GR|20|86|797.828.532.224|1988||193|35||33.45|
Fabian Delph|MED|76|83|516.99.551.299|1989||174|20||2.11.26.38.43|
Fraser Forster|GR|76|82|610.824.169.616.204.805.853.160|1988||201|6||21.59|
Josué (1979)|MED|16|81|389.834.933.112|1979||169|28||5|
Danilo D'Ambrosio|DEF|84|80|356.461.848.440.580|1988||180|6||6.21.37|
Jorge Martínez|MED|157|77|598.201.463.209.191.618.1103|1983||181|14||6.21|D
Enzo Pérez|MED|4|82|388.296.140.888.734.89.966|1986||175|26||7.30.51|
Adrien Silva|MED|127|82|812.545.27.518.587.768.732.959|1989||175|26|58|8.25.28.30.34.38.40.44|
Péter Gulácsi|GR|73|85|532.426.767.705.905|1990||191|58||43|
Jack Rodwell|MED|76|81|299.551.828.146.790.926.832|1991||188|3||2.19.37|
Roman Bürki|GR|143|82|942.332.391.365.157.815.1107|1990||187|9||53|
Maxime Gonalons|MED|58|81|541.737.787.390.223|1989||187|8||24.41|
Andros Townsend|AVA|76|81|526.939.853.543.447.921.568.516.145.698.610.243.299.539.84|1991||181|13||12.42.43|D
Roberto Soriano|MED|84|78|768.285.905.848.154.764|1991||182|9|2|21.37|
Daniel Wass|MED|43|82|172.364.140.950.203.888.110|1989||181|44||30.51|
Oriol Romeu|MED|54|82|127.215.888.298.805.386.119|1991||183|4||3.12.26.27.31.43.58|
Cheikhou Kouyaté|MED|135|82|80.470.925.243.617.708|1989||189|92||39|
Lacina Traore|AVA|39|80|191.497.85.587.299.194.813.75.891.1074|1990||203|13||34.45|
Luuk de Jong|AVA|124|83|253.334.158.610.648.787.127.325|1990||188|39|143|7.35.54.59|
Lucas Pérez|AVA|54|80|66.719.480.275.642.262.93.925.283.245.648|1988||181|2||15|
Tom Cleverley|MED|76|84|552.518.921.929.99.299|1989||175|13||2.10.38.45.54|
Adrián Ramos|AVA|33|81|183.437.418.157.390|1986||185|37||33.53|
Niclas Füllkrug|AVA|2|83|923.394.620.157.925.7|1993||188|24||27.35.39|
Tomás Rincón|MED|159|80|408.378.463.848.768.777|1988||177|143||6|
Ricardo Álvarez|MED|4|82|917.440.828.768.109|1988||188|9||37.44|
Davy Pröpper|MED|124|78|907.648.166|1991||185|19|||
Shinji Okazaki|AVA|86|84|791.298.548.518.586.754.307.797|1986||174|119||2.44.53|
Sung-yueng Ki|MED|37|82|327.204.830.828.610.549.686|1989||189|110||40.43|
Nicola Sansone|AVA|84|78|663.241.781.905.154.513|1991||173|3|2|21|E
Gökhan Töre|AVA|152|79|215.408.745.141.925.938.29.82.492|1992||176|27|2|2|D
Benjamin André|MED|58|76|4.731.530|1990||177|||4.41|
Kevin Vogt|DEF|2|78|898.115.231.421.923.874|1991||194||||
Danny da Costa|DEF|2|78|524.315.281.548.1329|1993||185|||59|
Mário Rui|DEF|127|83|140.663.810.285.737.601.1123.120|1991||170|12||6.11.25.30.48|
Mattia De Sciglio|DEF|84|85|7.463.541.285|1992||183|40||6.21.37.48|
Riccardo Saponara|MED|84|79|285.7.356.768.378.513.810.416.82.1282|1991||184|||48|
Jóhann Berg Gudmundsson|AVA|82|80|22.213.175.54|1990||186|102|||D
Marvin Plattenhardt|DEF|2|80|620.418|1992||181|7||29|
Eduardo Vargas|AVA|29|83|864.601.395.299.888.698.421.843.112.598.1061|1989||176|120||17.43.50|D
Josuha Guilavogui|MED|58|80|763.110.933.156.548.516|1990||187|7||3.24.51|
Martin Braithwaite|AVA|43|83|289.854.565.156.186.127.291.395|1991||177|69|||D
Andrea Bertolacci|MED|84|80|737.513.378.7.768.478.486.238|1991||179|5||21.36.44|
Jordan Ayew|AVA|60|83|553.330.319.99.830.243.518.790|1991||182|124|58|4.24|D
Koen Casteels|GR|20|81|377.421.923.933.55|1992||196|20||45|
Rémy Cabella|MED|58|80|578.5.610.553.763.494.530.632.600.912|1990||171|10||4.24.41|
Younès Belhanda|MED|102|81|578.275.612.371.29.954.782|1990||177|59|58|4|
Mitchell Weiser|DEF|2|80|231.133.0.418.524.923|1994||176|||5.26|
Shane Duffy|DEF|78|81|299.783.175.939.146.166.204.367.616.263|1992||193|62|79|38.45|
Hugo Mallo|DEF|54|78|203.443.90|1991||173|1||36|
Andre Gray|AVA|76|77|793.539.164.175.921.698.90.58.478.684.1357|1991||178|19||38|
John Egan|DEF|78|77|828.243.790.162.164.175.426.1190|1992||185|40|||
Juan Jesus|DEF|16|83|443.440.737.601.895|1991||185|4||6.21.37.41.50|
Andy Delort|AVA|5|76|4.622.323.855.929.759.843.854.578.612.600|1991||180|15|58||
Vlad Chiricheș|MED|132|82|339.853.601.781.238.1110|1989||184|78||11.12.42.48|
Gastón Ramírez|MED|157|82|677.154.805.426.565.768.580.771.967|1990||183|43||42.44|
Juanmi|AVA|54|79|105.586.709.805.725.142.58.245.379|1993||172|2||23.28|E
Benjamin Lecomte|GR|58|79|319.266.578.587.110.291.367|1991||186|||34.38.51|
Ben Gibson|DEF|76|77|565.684.175.616.825|1993||185||||
Mathew Ryan|GR|8|82|205.224.888.377.166.93.725.233.22.737.521.523.1225|1992||184|105||16.44|
David López|DEF|54|80|291.186.754.601.386|1989||185|2||42.43.48|
Okay Yokuşlu|MED|152|76|73.486.856.203.924.379|1994||190|47|||
Enner Valencia|AVA|49|84|649.925.299.843.351.443.150.1128|1989||174|109||30.55|D
Sergi Darder|MED|54|79|105.586.541.291.549|1993||180||||
Omar Mascarell|MED|69|80|721.263.813.281.283.549.48.1348.1347.782|1993||181|14|54|11.43|
Bartosz Bereszyński|DEF|126|78|514.517.768.601.285.652.584|1992||183|59||6.25.44|
Munas Dabbur|AVA|83|78|542.391.767.787.421|1992||182|40||35.59|
M'Baye Niang|AVA|135|83|759.7.578.378.921.848.731.36.156.15.29.285.768.376.869.957|1994||184|23|58||
Vladimír Coufal|DEF|32|72|804.802.925.421.1041|1992||174|67||35|
Roberto Inglese|AVA|84|75|218.199.663.201.601.674.764|1991||187|||11.48|
Mohamed Elneny|MED|47|84|132.93.141.47.522|1992||179|108||15.16.20|
Gabriel Pires|MED|16|75|463.696.810.674.18.186.140.43.159.358.657.693.570|1993||186|||7.18.30.46|
Chimy Ávila|AVA|4|76|771.754.638.142.438|1994||179||||
Ludwig Augustinsson|DEF|142|82|170.431.233.923.787.99.549.80|1994||181|56||35|
Hélder Costa|AVA|3|79|140.262.587.934.516.888.46.292|1994||178|12||17.25.30.34.39.46|D
Islam Slimani|AVA|5|83|812.518.610.351.587.541.818.80.235.471.473.191|1988||188|105||30.34.38.43.44.47|
Jonathan Clauss|DEF|58|79|91.521.553.612.1218.1275.950|1992||178|14||24|
Adnan Januzaj|AVA|20|83|552.157.828.725.787.131.507|1995||182|15||31.45.53.54|D
Gonçalo Paciência|AVA|127|78|325.27.632.732.909.281.203.898.775.811.776.782|1994||184|2||7.25.32.35.38.39.43.52.59|
Ally Samatta|AVA|147|76|377.99.351.744.642.511|1992||183|89||30.55|
Karim Rekik|DEF|124|79|551.692.146.648.553.418.787.47|1994||186|4||2.35.37.59|
Tonny Vilhena|MED|124|79|354.494.291.764.654.65|1995||175|15||43.46|
Kevin Mbabu|DEF|143|78|786.610.717.942.933.367.115.566.768|1995||184|25||38.43|
Victor Lindelöf|DEF|142|86|915.140.552.99|1994||187|84||7.30.31.46.47.59|
Timo Baumgartl|DEF|2|78|298.648.874.815.782|1996||190||||
Ryan Christie|MED|51|76|444.204.26.160|1995||178|74|||D
Emiliano Sala|AVA|4|80|156.868.210.759.600.197|1990||187|||44.52|
Brice Samba|GR|58|80|511.553.19.759.617.521.731|1994||186|4|35|17.24|
Tim Kleindienst|AVA|2|78|365.415.465.158|1995||194|6|||
Alexander Nübel|GR|2|81|750.133.587.298.141.782|1996||193|4||5.27.53|
Dwight Gayle|AVA|76|71|675.243.610.924.825.263.419.1149|1989||177|||43|
Joseba Zaldua|DEF|54|78|725.186.245|1992||176|2|||
Rúben Semedo|DEF|127|78|812.909.905.754.732.632.325.39.21|1994||189|3||7.25.30.38.52|
Jacob Murphy|AVA|76|79|616.147.831.783.236.610.924.789.1331|1995||176|||43|D
Andreas Cornelius|AVA|43|81|233.197.100.156.663.856|1993||193|46|||
Rick Karsdorp|DEF|124|80|354.737.648|1995||184|3||31.41|
Ibrahim Amadou|MED|58|76|19.530.787.616.186.81.323.755|1993||183||24|17.35|
Robin Quaison|AVA|142|74|14.652.548.40.90.1152|1993||180|52|||
Kenny Tete|DEF|124|80|32.541.367|1995||180|14||38|
Vincent Janssen|AVA|124|81|71.22.853.351.577.744.691|1994||180|22||42.54|
Bartłomiej Drągowski|GR|126|79|454.356.285.810.654.928|1997||192|4||25.43.46|
Paulinho (1992)|AVA|127|68|860.380.163.812.845|1992||187|5||7.9.25.45.47|
Badou Ndiaye|MED|135|74|152.639.371.825.856.478.37.90.29.670.374|1990||179|32|||
Daniel Amartey|DEF|60|80|268.233.518.141|1994||182|55||2.44|
Riechedly Bazoer|DEF|42|82|32.933.325.882.907.22.492|1996||184|18|124|52|
Munir El Haddadi|AVA|102|83|127.888.66.787.379.507.186.67|1995||175|12|54|3.23.35.36.58.59|D
Stefan Posch|DEF|165|79|421.154.100.232.548|1997||189|59|||
Matheus Pereira|MED|16|76|812.214.620.924.45.242.959|1996||175|1||11.30.32.34|D
Trezeguet (1994)|AVA|47|82|80.585.484.99.131.856.57.58|1994||180|100||20|E
Denis Bouanga|AVA|59|76|319.293.855.622.763.500|1994||175|57|58||E
Léo Dubois|DEF|58|79|600.541.371.131.301|1994||178|13||24.44.52|
Clinton N'Jie|AVA|24|81|541.853.553.276.799.326|1993||175|44||42|D
Jordan Amavi|DEF|58|79|612.99.553.379.818|1994||176|||12|
Oussama Idrissi|AVA|102|76|312.22.787.32.245.354.649|1996||183|9|124|13.35|E
Josh Cullen|MED|78|78|925.162.155.213.80.175|1996||180|47|76||
José Sá|GR|127|80|554.325.632.934|1993||192|5||7.18.35.39.45.52.55|
Pione Sisto|AVA|43|79|566.203.65.90.11|1995||171|26|155||E
Wesley Hoedt|DEF|124|78|22.510.805.203.744.80.921.60|1994||188|6|||
Emil Audero|GR|75|81|463.895.768.440.232.652.238.719|1997||192|8||6.44|
Bruno Petkovic|AVA|40|79|201.890.728.857.154.416.277.490|1994||192|42|||
Maximilian Wöber|DEF|165|77|718.32.787.767.516.158.923.782|1998||188|34|||
Gastón Pereiro|MED|157|80|598.648.196.841.378.128|1995||188|13||44|
Robert Skov|AVA|43|79|796.233.421.874|1996||183|14|54||D
Abdülkadir Ömür|MED|152|77|856.426.180.84|1999||168|14|||D
Moses Simon|AVA|115|79|32.465.523.600.662|1995||168|102|||E
Felix Uduokhai|DEF|2|77|1.933.115.141.874|1997||192||||
Ludovic Ajorque|AVA|58|75|81.223.293.548.818|1994||197||||
Óscar Rodríguez|MED|54|82|721.186.787.379.203.958.1348|1998||174|2||18.35.57|
Baptiste Santamaria|MED|58|72|855.81.365.731.612.888.642|1995||183||||
Fabián Balbuena|DEF|122|81|598.528.234.925.276.395.1004|1991||188|49||55|
Alfie Mawson|DEF|76|76|164.539.936.129.830.367.168|1994||188|||38|
Jeremiah St. Juste|DEF|124|75|414.354.548.812|1996||186|||7.47|
Nuno Santos|DEF|127|77|140.909.732.812|1995||179|||7.41.46.47|D
Josip Brekalo|AVA|40|81|277.933.298.848.356.405.484.723.418|1998||180|35|||E
Harry Souttar|DEF|8|80|825.273.740.518.790.1189|1998||198|44|51||
Oli McBurnie|AVA|51|76|162.830.169.129.790.507.426.1164|1996||188|20|76||
Jeff Chabot|DEF|2|77|807.312.768.810.231.298|1998||195|||44|
Ionuț Radu|GR|132|78|440.118.378.663.238.15.160.895.203|1997||188|11||6.21.37|
Rolando Mandragora|MED|84|82|378.674.463.241.871.848.356|1997||183|1||6.37|
Justin Bijlow|GR|124|80|354.378|1998||188|8||13.54|
Marko Rog|MED|40|81|595.277.601.787.196|1995||180|21||11.44.48|
Gustavo Hamer|MED|124|76|354.309.645.236.790|1997||169||16||
Walace|MED|16|76|395.408.871.242.280|1995||188|5||34.50|
Jota|AVA|127|78|140.886.204.46.731|1999||175|||7.18.30.46|E
Lucas Boyé|AVA|4|78|734.611.848.203.12.720.283.390.66|1996||179|1||49|
Philipp Treu|DEF|2|73|817.365|2000||172|3|||
Nicolas Kühn|AVA|2|79|718.204.232.32.158|2000||174||||D
Altay Bayındır|GR|152|83|82.351.552.203|1998||198|14||30.47.55|
Álex Berenguer|AVA|54|79|638.181.848.101|1995||175||||E
Sebastiaan Bornauw|DEF|20|78|80.231.933.516.408|1999||191|4||45|
Josh Dasilva|MED|76|80|93.164|1998||184|||15|
Cameron Carter-Vickers|DEF|45|80|853.790.447.830.825.539.160.204|1997||183|19|76|21.31.42|
Juan Miranda|DEF|54|79|127.142.154.782|2000||185|1|||
Iván Martín|MED|54|76|905.188.66.386.709|1999||178|1|||
Anders Dreyer|AVA|43|78|289.166.816.414.566.745.80.770|1998||174|9|||D
Niklas Beste|AVA|2|78|157.923.310.451.415.140.365|1999||174|||18|D
Cyle Larin|AVA|25|82|637.141.949.224.886.549.354.805|1995||188|95|||
Jorge|DEF|16|79|357.587.325.132.192.358.653.730.777|1996||184|1||4.9.28.34.52|
Jens Odgaard|MED|43|79|540.781.414.320.674.707.22.154.440|1999||188||||
Rubén Vargas|AVA|143|82|321.115.787|1998||174|67|||E
Japhet Tanganga|DEF|76|76|853.115.568.790|1999||184|||21.31.42|
Kamil Grabara|GR|126|80|25.425.233.933.463.532.1200|1999||195|6||25.33|
Luca Pellegrini|DEF|84|80|737.196.463.378.281.510|1999||178|1||37.48|
Guilherme Arana|DEF|16|79|234.102.787.100.112.358|1997||180|13||11.35.50|
Lucas Perri|GR|16|78|834.243.621.159.541.516.848|1997||197|||18.41|
Omar Alderete|DEF|122|78|382.427.132.418.888.379.828|1996||188|42|||
Amir Murillo|DEF|121|81|608.80.553.141|1996||183|100|||
Ko Itakura|DEF|86|84|485.551.312.158.32.782.1276|1997||186|44||26|
Mitchel Bakker|MED|124|80|32.647.524.100.530.589|2000||185|||4.42.53.56.59|D
Rafa Mir|AVA|54|80|888.934.507.617.754.787.283.90|1997||189|||35.39.59|
Leo Østigård|DEF|116|81|576.901.166.817.236.825.378.601.731.421|1999||182|46||6|
Thierry Correia|DEF|127|75|812.888.895|1999||176|||32|
Rasmus Nissen Kristensen|DEF|43|79|566.32.767.516.737.281|1997||176|38||31|
Pablo Rosario|MED|131|74|71.648.612.325|1997||188|17|124|7|
Arijanet Murić|GR|89|82|551.588.617.386.29.175.447.781|1998||198|53|143|26|
Diego Lainez|AVA|111|77|77.142.163.843|2000||168|33|||D
Guus Til|MED|124|79|22.809.365.354.648|1997||186|11|163|13.46.54|
Lucas Martínez Quarta|DEF|4|80|734.356|1996||181|16||49|
Marcelo Saracchi|DEF|157|78|252.734.705.371.523.150.204.423|1998||172|11||17|
Joris Gnagnon|DEF|58|78|731.787.763|1997||182|||35|
Mike Tresor|MED|20|76|589.377.175|1999||173|2|||E
Albert Sambi Lokonga|MED|20|79|80.93.243.539.787.408|1999||183|2||16.45|
Tino Kadewere|AVA|162|77|268.511.541.549.600.90|1996||190|28|||D
Alexis Claude-Maurice|MED|58|75|319.612.521.115|1998||174||||
Danilho Doekhi|DEF|124|77|300.907.874.510|1998||190||||
Yacine Adli|MED|5|80|647.156.7.356.60|2000||186||58|4.41.52.53|
Gonzalo Villar|MED|54|73|283.737.379.768.390.277|1998||181|1||31.41|
Jordan Beyer|DEF|2|75|158.408.175|2000||187||||
Yukinari Sugawara|DEF|86|81|599.22.805.923.196|2000||179|25||13|
Rhian Brewster|AVA|76|80|532.830.790.263|2000||180|||33|
Ibrahima Diallo|MED|58|75|818.805.964.39.587|1999||180|||34|
Marshall Munetsi|MED|162|69|820.934.662|1996||187|43||55|
Álvaro Valles|GR|54|63|143.507.142|1997||192||||
Tiago Djaló|DEF|127|78|530.463.325.141.7|2000||190|1||4.41.45|
Daizen Maeda|AVA|86|82|571.554.940.204.447|1997||173|33|||E
Elia Caprile|GR|84|76|128.601.285.196.218.516|2001||191|||6.17.21|
Zuriko Davitashvili|AVA|61|77|745.743.96.156.763.1016|2001||175|58|||E
Ansgar Knauff|AVA|2|79|157.281|2002||180|||59|D
Marcão|DEF|16|79|102.397.111.732.214.371.787.353|1996||184|||59|
Matías Viña|DEF|157|81|598.653.737.160.781.357.734.242|1997||183|44||9.17.31.34|
Ethan Pinnock|DEF|85|72|129.164.236.1049|1993||194|29|76||
Emmanuel Dennis|AVA|115|78|948.224.231.921.617.131.146.172|1997||174|8||39|D
Cameron Puertas|MED|54|74|509.875.55.923.62|1998||178||143||
Jorge de Frutos|AVA|54|75|721.886.719.523.1348|1997||173|1|||D
Daniel Bragança|MED|127|76|346.292.812.848|1999||169|||7.32.41.47|
Mads Bidstrup|MED|43|76|164.613.767.541|2001||175|1||41|
Torbjørn Heggem|DEF|116|71|170.924.154.1145.739|1999||192|23|||
Jayden Bogle|DEF|76|75|263.790.516|2000||178||||
Adrián Bernabé|MED|54|82|291.127.551.663|2001||170||||
Lyle Foster|AVA|164|80|587.207.908.473.175.423|2000||185|33||34|
Joe Aribo|MED|115|78|213.717.805.518|1996||183|34|76||
Sorba Thomas|AVA|123|77|425.146.600.825.1193.426|1999||185|31|76||E
Francisco Moura|DEF|127|73|27.163.345.325|1999||181|||7|
Chris Mepham|DEF|123|79|164.160.828.924|1997||191|57|76||
Mady Camara|MED|68|76|4.632.737.642|1997||182|29||31|
Moussa Djenepo|AVA|100|78|822.805.84.655|1998||177|36|||E
Maarten Vandevoordt|GR|20|76|377.705|2002||192|1|||
Ao Tanaka|MED|86|82|485.302.516|1998||177|45|||
Kyogo Furuhashi|AVA|86|81|906.204.731.145.499|1995||170|23|||
Albert Grønbaek|MED|43|74|25.152.731.805.378.408|2001||182|10|||
Flynn Downes|MED|76|75|447.539.830.925.805|1999||173||||
Fabian Rieder|MED|143|78|942.731.298.115|2002||181|37|||
Melvin Bard|DEF|58|77|541.612.516|2000||173||||
Johan Vásquez|DEF|111|75|843.577.865.378.238|1998||184|51|||
Junior Dina Ebimbe|AVA|24|74|647.511.266.281.818.782|2000||183|3|58|4.42.53|D
João Mário (2000)|DEF|127|75|325.463.154.356|2000||178|3||7.45.52|
Sebastiano Esposito|AVA|84|78|440.760.895.132.80.128.768.285.196.781|2002||186|2||21|
Tuta|DEF|16|78|281.470.39.834|1999||184|||59|
Jay Idzes|DEF|75|75|387.895.781|2000||190|18|124||
Zeki Amdouni|AVA|143|79|509.132.175.140|2000||175|37||18|
Mousa Tamari|AVA|87|80|17.625.578.731|1997||178|95|||D
Tim Lemperle|AVA|2|74|231.394.421|2002||187||||
Romain Faivre|MED|58|77|587.818.541.319.160.61.15.855|1998||180|||34|D
Quentin Merlin|DEF|58|75|600.553.731|2002||174||||
Jack Clarke|AVA|76|78|516.853.698.825.828.447|2000||181|||17.21.31.42|E
Hicham Boudaoui|MED|5|70|612.999|1999||175|37|||
Victor Kristiansen|DEF|43|79|233.518.154.654|2002||179|18||43|
Lucien Agoumé|MED|58|80|330.440.810.818.862.787|2002||185||24|6.21|
Mathias Kvistgaarden|AVA|43|73|172.616|2002||174|2|||
Fabio Miretti|MED|84|80|463.460.378.141|2003||180|1||37|
Hugo Duro|AVA|54|76|379.721.888.1348|1999||180|||3.57|
Gastón Álvarez|DEF|157|71|255.379.55.967|2000||184||||
Jon Pacheco|DEF|54|78|725.66|2001||184|1|||
CJ Egan-Riley|DEF|76|76|175.419.553.551|2003||183|||26|
Saúl Coco|DEF|69|76|507.848|1999||188|30|54||
Akor Adams|AVA|115|77|531.578.787.895|2000||190|18|||
Loum Tchaouna|AVA|58|74|731.266.764.510.175.236|2003||180||28||D
Bashir Humphreys|DEF|76|79|215.750.830.175|2003||186|||42|
Tiago Tomás|AVA|127|77|812.298.933|2002||180|||7.47|D
Mika Mármol|DEF|54|74|507.127.354|2002||182|2|||
Diego López (2002)|AVA|54|76|888|2002||172||||D
Mio Backhaus|GR|2|74|923.336.365|2004||194||||
Ameen Al-Dakhil|DEF|20|76|822.797.175.298|2002||185|6|77||
Cesare Casadei|MED|84|79|215.720.518.848|2003||185|||42|
Julen Agirrezabala|GR|54|75|101.184.144.888.709|2000||187|1|||
Vladyslav Vanat|AVA|153|78|275.220.386|2002||182|20|||
Aimar Oroz|MED|54|78|638.181|2001||177||||
Tajon Buchanan|AVA|25|81|607.224.440.905|1999||183|67||6|D
Tommaso Baldanzi|MED|84|77|285.737.378|2003||170|||44|
Oliver Provstgaard|DEF|43|72|893.510|2003||194|6||48|
Carl Rushworth|GR|76|73|920.166.830.426.236.983|2001||191||||
Aaron Ramsey|MED|76|73|216.616.565.175.518.99|2003||181||||
Martin Vitík|DEF|32|76|806.154|2003||193|11|||
Samuel Mbangula|AVA|20|75|460.463.923.154|2004||181||||E
Samú Costa|MED|127|79|163.72.549.52|2000||185|7||45|
Jon Aramburu|DEF|159|77|725|2002||176|24|||
Jota Silva|AVA|127|74|520.200.908.617.141.632.668|1999||179|2||39.45|E
Vini Souza|MED|16|76|357.536.471.291.790.933|1999||187|||30|
Rodrigo Gomes|AVA|127|74|163.292.934|2003||171|||55|D
Oussama Targhalline|MED|102|75|553.65.511.354|2002||186|14||12|
Carlos Álvarez|MED|54|74|787.523.77|2003||168||||D
Youssef Chermiti|AVA|127|76|812.299.717|2004||192|||47|
Mohamed-Ali Cho|AVA|58|77|81.725.612.426|2004||182||||D
Álvaro Djaló|AVA|70|76|163.101.43|1999||175|6|54||E
Enzo Barrenechea|MED|4|74|329.460.463.366.99.888.140|2001||186|||31.38|
Morato|DEF|16|78|834.140.617.925|2001||192|||7.18.30.39|
Juanlu Sánchez|DEF|54|77|787.188.160|2003||186|||35|
Chadi Riad|DEF|102|79|127.142.243|2003||186|10|54|3|
Antonio Vergara|MED|84|73|601.696.728|2003||182|2|84|21|D
César Tárrega|DEF|54|68|888.886|2002||194||||
Pau Víctor|AVA|54|78|386.127.163|2001||184|2||3.27|D
Ilias Akhomach|AVA|102|77|127.905.719|2004||175|14|54||D
Marcelino Núñez|MED|29|74|616.447.1157|2000||173|34|||
Antonín Kinský|GR|32|76|271.802.660.853|2003||190|1|||
Brooke Norton-Cuffy|DEF|76|77|93.742.236.568.378.426.983|2004||181|||16|
Patrick de Paula|MED|16|75|653.159.240.292.730.811|1999||178|||9.18|
Matheus França|MED|16|75|357.243.892.74|2004||182||||
Ângelo|AVA|16|78|777.215.293.52|2004||173|||30.42|D
Mamadou Coulibaly|MED|58|70|587|2004||180||||
Soungoutou Magassa|MED|58|76|587.925|2003||188|||39|
Ramón Sosa|AVA|122|77|734.382.182.617.653.1015|1999||178|32||9.39|D
Carlos Alcaraz|MED|4|79|710.805.463.357.299|2002||183||||
Kike Salas|DEF|54|75|787.189|2002||185||||
Valentín Carboni|MED|4|78|440.580.553.378.710|2005||182|3||49|
Roony Bardghji|AVA|142|80|233.127|2005||173|3|90|3.27|D
Nelson Weiper|AVA|2|74|548.827|2005||192||||
Tommy Conway|AVA|51|74|168.565|2002||185|8|76||
Noah Nartey|MED|43|73|172.541|2005||180|||41|
Pablo Pagis|AVA|58|72|622.319.819.662|2002||181||||E
Tiago Santos|DEF|127|74|292.530|2002||175|||41|
Dzenan Pejcinovic|AVA|2|74|933.302.298|2005||188||||
Omar El Hilali|DEF|102|77|291|2003||183|1|54||
Bamba Dieng|AVA|135|74|553.319.81.294|2000||178|24||12|
Arnau Martínez|DEF|54|75|386.888|2003||182|2|||
Oscar Højlund|MED|43|75|233.281|2005||184||||
Mateo Pellegrino|AVA|4|73|917.296.683.663.356|2001||192||54||
Bruno Ogbus|DEF|143|70|365|2005||188||||
Semih Kılıçsoy|AVA|152|77|141.196|2005||178|4|||
Miguel Román|MED|54|68|203|2002||178|||43|
Sverre Nypan|MED|116|76|739.551.565.536|2006||182|1||26|
Djaoui Cissé|MED|58|73|731|2004||188||||
Iván Fresneda|DEF|54|82|721.186.886.887.812|2004||182|1||7.41.47|
Andrija Maksimovic|MED|145|73|294.705|2007||182|9|||
Saïmon Bouabré|MED|58|71|587.590.45|2006||174||||
João Simões|MED|127|73|812|2007||175|||7.41.47|
Benja Domínguez|AVA|4|73|382.154.781|2003||172||||E
Abakar Sylla|DEF|39|75|224.293.600.374|2002||188|5|||
Jair Cunha|DEF|16|74|777.159.617|2005||198|2|||
Zachary Athekame|DEF|143|73|606.942.7.541|2004||181|4|43|41|
Samu Aghehowa|AVA|54|76|726.390.110.66.325|2004||193|4||7.51|
Abdoul Ouattara|DEF|39|70|293.447|2005||180||||
George Ilenikhena|AVA|115|74|75.744.587.46|2006||185|2||52|
Christian Mawissa|DEF|58|74|854.587|2005||184||||
Ngal'ayel Mukau|MED|129|77|471.530|2004||186|20|20||
Samuele Inácio|AVA|84|74|157|2008||176|1|||D
Francesco Camarda|AVA|84|77|7.513|2008||189|2|||
Montrell Culbreath|DEF|2|73|524|2007||172||||D
Pau Navarro|DEF|54|73|905|2005||185||||
Wael Mohya|MED|2|71|158|2008||179||||
Gabriel Moscardo|MED|16|79|234.647.820.163.291|2005||185|||36|
Arsène Kouassi|DEF|18|72|4.319|2004||178|6|39||
Prosper Peter|AVA|58|71|81|2007||177||||
Ibrahim Osman|AVA|60|75|613.166.354.15.145|2004||179|3|||E
Tiago Gabriel|DEF|127|68|295.513|2004||196||58||
Christantus Uche|AVA|115|75|379.243|2003||190|3|||
Malick Yalcouyé|MED|39|74|20.431.166.827.830|2005||169|3|100||
Khalis Merah|MED|58|71|541|2007||178|||41|
Alexis Vossah|MED|58|71|854|2008||181||||
Jan Virgili|AVA|54|73|549.224|2006||177||||E
Costa Pereira|GR|127|80|140|1929||188|22|110|7.58|
Damas|GR|127|79|812.709.908.690|1947||182|29||7|
Mlynarczyk|GR|126|78|928.746.325|1953||0|42||7.58|
Miguel|DEF|127|83|140.888.295|1980||180|59||20.28.30.50|D
Fernando Meira|DEF|127|82|908.140.298.371.947.779.946|1978||190|54||5.50|
Aloísio|DEF|16|80|443.127.325|1963||185|6||7.22.25|
Petit|MED|127|82|380.149.140.231|1976||172|57|58|7.25.28.50|
Carlos Manuel|MED|127|62|140.812|1962||0|||7|
Pedro Barbosa|MED|127|79|363.908.812|1970||185|22||7.20.25.32|
Toni|MED|127|79|27.140|1946||0|32||7|
Rui Águas|AVA|127|79|690.140.325.295.728|1960||179|31||7.20|
Domingos Paciência|AVA|127|81|325.189.839|1969||175|34||7.20.25|
Derlei|AVA|16|78|79.396.519.325.276.140.812.280.1298|1975||175|||7.25.31.40.58.59|
Benni McCarthy|AVA|164|83|32.203.325.146.925|1977||183|79||7.20.31.58|
Tamás Hajnal|MED|73|81|352.797.0.479.157.298.315.782|1981||170|59||33|
Cacau|AVA|2|83|620.298.208|1981||178|23|16|5.29|
Halil Altintop|MED|152|82|0.281.856.115.782.802|1982||186|39|2||
Piotr Trochowski|MED|2|82|133.408.787.115|1984||169|35|126|5.29.59|
Paolo Guerrero|AVA|125|84|133.408.234.357.443.503.710.1068|1984||185|128||5|
Richard Wright|GR|76|81|447.93.299.925.805.790.695.551|1977||188|2||2.15.37|
Joey Barton|MED|76|83|551.610.698.553.175.717|1982||180|1||19|
Paul Konchesky|DEF|76|81|213.853.925.367.532.617.518.698.1190|1981||178|2||44|
Sylvain Armand|DEF|58|79|223.600.647.731|1980||182|||4.11|
Jan Polak|MED|32|80|804.620.80.933|1981||181|57|||
Steed Malbranque|MED|58|80|541.367.853.828.763.759|1980||171||20||
Leon Osman|MED|76|81|299.198.263|1981||173|2||45|
Bernard Mendy|DEF|58|80|759.647.155.426.626.818.1364|1981||180|3|||
Pierre-Alain Frau|AVA|58|77|330.541.521.647.530.759.972|1980||175|||4|D
Kevin Nolan|MED|76|81|155.610.925.526.1084|1982||183||||
Rory Delap|MED|78|80|198.263.805.825.828.129.177|1976||183|11|76||
Bobby Zamora|AVA|76|80|169.166.853.925.367.698|1981||185|2||19|
Hilton|DEF|16|78|211.659.235.786.746.521.553.578|1977||182|||4.24|
Alexander Manninger|GR|165|83|767.93.356.291.848.154.165.794.871.463.115.392.532.1221|1977||189|33||2.6.15.21.33.37.44|
Anthony Réveillère|DEF|58|82|731.888.541.601.828|1979||180|20||4.43|
Emiliano Moretti|DEF|84|80|356.463.575.154.663.888.378.848|1981||185|2||6.21.37.44|
Rubén Olivera|MED|157|80|252.463.110.768.677.378.513.356.165.508.503|1983||184|18||6.19.24.44|
Paolo Cannavaro|DEF|84|81|601.663.416.781|1981||185|||43|
Nicola Legrottaglie|DEF|84|82|128.694.218.728.575.463.154.794.7.201|1976||189|16||6.19.24.44|
Ivan Pelizzoli|GR|84|79|100.859.737.729.535.196.650.674.359.679.1226|1980||195|2||19|
Jonathan Zebina|DEF|58|81|196.737.463.165.818.854.5.1346|1978||189|1||6.19.24.44|
Francesco Tavano|AVA|84|77|681.285.888.737.18.118.694|1979||175|||48|
Stefano Mauri|MED|84|82|575.165.871.510|1980||184|11|||
Georgios Karagounis|MED|63|84|88.654.440.140.367|1977||176|139||8.25.28.32.37|
Luciano (1975)|AVA|16|75|653.154.218.440.987|1975||180||||D
Luca Antonini|DEF|84|82|650.694.7.768.575.674.794.285.378.97.18.979|1982||182|||6.11.58|
Georgios Samaras|AVA|63|83|414.551.204.924.45.779.769|1985||192|81||25|E
Sotiris Kyrgiakos|DEF|63|82|654.717.281.532.933.828.12.1291|1979||193|61||25.43|
Ricardo Costa|DEF|127|82|325.933.888.530.642.321.390.847.149|1981||183|22||5.7.20.28.31.40.50.58.59|
Ramiro Funes Mori|DEF|4|79|250.734.299.905.52.185.296|1991||193|26||45.59|
Rob Green|GR|76|83|616.925.698.516.425.215|1980||187|13||19.48|
Per Kröldrup|DEF|43|81|871.299.356.674.629|1979||194|33|||
François Clerc|DEF|58|80|541.854.612.763.368|1983||187|13||4|
Oguchi Onyewu|DEF|45|82|323.822.610.7.334.812.586.698.789.213.678|1982||198|69||6.28|
James Collins|DEF|123|82|197.925.99.447|1983||188|51|||
João Pereira|DEF|127|82|140.380.163.812.888.856|1984||172|41||7.30.39.40.47|
Tom Huddlestone|MED|76|82|263.934.853.426.552|1986||188|4||12.19.38|
Hilário|GR|127|79|604.27.325.295.891.597.215|1975||189|2||2.7.11.12.25.30.31.43.50.58.59|
Carlos Martins|MED|127|80|812.27.140.390.137.120|1982||173|20||7.20.25.30.32.40.50|
Rio Mavuba|MED|58|80|156.905.530.806|1984||172|13||4.24|
Xabi Prieto|MED|54|80|725|1983||185|14|||
Andoni Iraola|DEF|54|82|101.144.609.184|1982||182|16||17.23|
Enzo Maresca|MED|84|82|924.463.154.679.356.787.632.586.768.652.416|1981||180|||6.11.59|
Alessandro Rosina|AVA|84|78|663.416.848.947.209.794.201.128.764|1984||168|1|||D
Nélson|DEF|127|78|765.149.140.142.638.652.72.120.137.9.13|1983||171|4|23|20.25.40|
Szabolcs Huszti|MED|73|82|352.323.947.281.348|1983||173|51|||
Gonzalo Rodríguez|DEF|4|79|771.905.356|1984||182|7||17|
José Sosa|MED|4|83|296.133.601.561.110.141.7.856.351|1985||183|19||3.5.51.54.55|
Ron-Robert Zieler|GR|2|83|552.615.518.298.231|1989||188|6||2.10.29.44.60|
Marek Cech|DEF|52|82|806.325.924.856.154.149.232|1983||183|52||7.28|
Mattia Cassani|DEF|84|82|463.768.416.652.356.378.663.128|1983||184|11||6|
Andrea Dossena|AVA|84|82|416.858.871.532.601.652.828.526.1279.679|1981||180|10||43|E
Federico Balzaretti|DEF|84|83|848.890.794.463.356.652.737|1981||179|16||19.24|
Charles N'Zogbia|AVA|58|81|610.929.99|1986||170|2||45|D
Alessandro Diamanti|MED|84|82|694.285.356.18.925.165.154.921.100.652.673.927.1321|1983||180|17||50|
Guillaume Hoarau|AVA|58|81|511.647.156.942.329.1224|1984||192|8||4.11|
Michel Vorm|GR|124|82|882.830.853.1141|1983||183|15||31.42.54|
Jonás Gutiérrez|MED|4|83|917.549.610.616.262.254.438.125|1983||185|22|||
Markus Rosenberg|AVA|142|81|550.406.32.923.709.924|1982||184|33|||
Joan Verdú|MED|54|81|127.262.291.142.356.523|1983||178|11||3.22.42.58|
José Manuel Jurado|MED|54|81|721.110.549.809.921.291.36.245.1348.782|1986||176|||59|
Steven Davis|MED|79|83|99.367.717.805|1985||170|140||42|
Aritz Aduriz|AVA|54|82|144.101.174.886.549.888|1981||182|26||17.23.35|
Guillermo Ochoa|GR|111|82|77.4.586.390.822.764.21.772.843|1985||183|154|||
Graziano Pellè|AVA|84|82|513.201.241.209.22.663.768.354.805|1985||194|20||21.54|
Germán Denis|AVA|4|80|209.95.228.438.601.871.100.1369.996.724.729|1981||182|5|||
Sebastian Larsson|MED|142|83|93.145.828.426.14|1985||178|133||15|
Patrick Herrmann|AVA|2|79|158|1991||177|2||29|D
Cheik Tioté|MED|39|81|80.735.334.610|1986||180|55||43|
Kevin Doyle|AVA|78|82|720.934.698.243.229.1090.1248|1983||182|62|||
Marcel Schmelzer|DEF|2|83|157|1988||181|16||5.29.33.53|
José Enrique|DEF|54|82|523.203.888.905.610.532.779|1986||184|||33|
Max Kruse|AVA|2|81|923.817.365.158.933.351.874.750|1988||181|14||29|
Javi García|MED|54|82|721.638.140.551.947.142.149.946.1348|1987||186|2||2.3.7.12.19.23.28.30.37|
Ola Toivonen|MED|142|82|256.550.648.731.828.854.556.951|1986||190|64|||
Shane Long|AVA|78|82|720.924.426.805.160.1090|1987||180|88|||
Winston Reid|DEF|118|82|566.925.476.164|1988||190|33|||
Felipe Caicedo|AVA|49|83|132.551.812.586.523.535.47.291.510.378.440.955|1988||183|68||37.40|
Matías Fernández|MED|29|81|227.905.812.356.7.605.459|1986||178|74|4|17.40|
Christian Träsch|MED|2|81|298.933.315.62|1987||180|10||29|
Jozy Altidore|AVA|45|82|608.905.426.176.22.828.849.607.697|1989||185|115|||
Sandro Wagner|AVA|2|79|133.923.0.418.421.1184.1137|1987||194|8||5.29|
Beñat Etxebarria|MED|54|80|101.144.143.142.544.184|1987||177|8||23|
Diego Alves|GR|16|82|112.72.888.357.203|1985||188|10||30.39.50|
Nils Petersen|AVA|2|79|133.923.365|1988||189|2||29|
Kevin Großkreutz|DEF|2|83|157.371.298.1303|1988||186|6||5.29.33.60|D
Adel Taarabt|MED|102|82|521.853.698.367.7.140.378.51|1989||185|30||7.18.30.46|E
Federico Fazio|DEF|4|83|787.853.737.764.1002|1987||195|10||31.41.42.59|
Gregory van der Wiel|DEF|124|83|32.647.351.196.849|1988||182|46||4.11.54|
Jonathan Biabiany|AVA|58|80|218.440.575.663.768.806.857|1988||176|||6.31.37.43.58|D
Kevin Trapp|GR|2|83|0.281.647.662|1990||189|9||4.27.29.53.59|
Ryan Shawcross|DEF|76|81|552.744.825.442|1987||191|1||2.10.58|
Zoran Tosic|AVA|145|82|665.552.231.194.644.574|1987||171|76||10|D
Sergio Asenjo|GR|54|80|887.886.110.586.905|1989||189|1||35.51.59|
Patrick van Aanholt|DEF|124|79|236.25.215.610.929.518.907.828.243.371.648.807|1990||175|44||11.12.31.43.45.54|
Mikel San José|MED|54|83|101.532.145|1989||188|14||17.23.43|
Henrique|DEF|16|84|235.653.524.127.709.601.358.120.234.980|1986||185|6||3.26.43.48.50.58|
Jay Rodríguez|AVA|76|79|175.129.805.924.935|1989||185|1||42|
André Santos (1983)|DEF|16|82|355.357.112.234.351.93.395.1047.1338.1250.1159|1983||182|24||15.50|E
Álvaro Pereira|DEF|157|81|191.325.440.834.296.379.89.598.996.734|1985||182|83||7.12.28.37.55.59|
Leandro Castán|DEF|16|81|112.234.737.768.848.196.892.396.395.1100|1986||184|2||50|
Cristian Ansaldi|DEF|4|83|611.745.947.110.378.440.848.663|1986||181|5||12.51|
Miguel Layún|DEF|111|81|701.100.77.921.325.787.905.577.1300|1988||178|71||7.32.35.39.52|
Ignacio Camacho|MED|54|79|104.110.586.933|1990||182|1||23.59|
Junior Hoilett|AVA|25|81|750.146.817.698.197.720.889.26.419.831|1990||174|70|||E
Cristhian Stuani|AVA|157|82|252.729.67.523.709.291.565.386|1986||186|50||42|
Jonathan dos Santos|MED|111|81|127.905.499.77|1990||172|57||3.26.58|
Senad Lulic|MED|21|78|391.942.510.1028|1986||183|57|||E
Maynor Figueroa|DEF|72|81|929.426.229.250.423.1076|1983||180|181||45|
Víctor Ruiz|DEF|54|79|291.601.888.905.141.142|1989||184|1||22.39.42|
Tomas Hubocan|DEF|52|81|947.276.553.856.633|1985||183|73|||
Étienne Capoue|MED|58|81|854.853.921.905|1988||189|7||12.24.38.42.59|
Néstor Araújo|DEF|111|76|185.778.203.77.214|1991||187|67|||
Leonardo Pavoletti|AVA|84|81|781.461.890.378.601.196.1122|1988||186|1||37.44.48|
Ashley Williams|DEF|123|83|824.830.299.825.168|1984||183|86|76|38.45|
Steven Zuber|AVA|143|82|391.194.421.298.281.12.338.113|1991||181|56|||E
Michu|AVA|54|80|723.203.719.830.601|1986||185|1||23.43|
Ander Iturraspe|MED|54|80|101.144.291.184|1989||187|8||17.23|
Clément Grenier|MED|58|80|541.737.398.731.549.709|1991||186|5||24|
Pierre-Michel Lasogga|AVA|2|79|933.524.418.408.38.516.782|1991||189|||5|
David Ospina|GR|33|85|106.612.93.601.52.1305|1988||183|130||11.15.20|
James Chester|DEF|123|84|552.675.684.198.426.924.99.825.263|1989||180|35|76|2.10.58|
Souza (1989)|MED|16|77|892.325.395.834.351.36.141.122.131|1989||188|3||7.12.55.59|
Gaël Kakuta|AVA|129|80|215.367.155.266.907.510.719.787.262.75.521.11|1991||173|30|58|2.11.12.31.43.58|D
Juraj Kucka|MED|52|83|806.378.7.856.663.921.1175|1987||186|112|||
Robin Olsen|GR|142|76|550.642.233.737.196.299.790.99|1990||196|79||11.31.41|
Marvin Martin|MED|58|79|330.530.266.820|1988||171|15|||
Jeroen Zoet|GR|124|80|648.707.882.810.22|1991||189|11||54|
Daniel Ginczek|AVA|2|78|157.898.817.620.298.933.302.1184|1991||191|||5.33|
Joselu|AVA|54|84|203.721.421.281.825.262.610.66.291.43.1348|1990||192|18|2|3.8.11.31.43.58|
Pascal Groß|MED|2|81|421.479.315.166.157|1991||181|19|||
Davide Santon|DEF|84|82|440.209.610.737|1991||187|8||6.31.37.41.43.58|
Timo Horn|GR|2|79|231.767.898|1993||192||||
Yunus Mallı|MED|152|78|548.933.874.856.484.492|1992||179|25|2|53|
Loris Karius|GR|2|82|548.532.141.874.610.782|1993||187|||33.53|
Stefan Ortega|GR|2|78|91.1.551.617.632|1992||185|||2.26.58|
Hiroshi Kiyotake|MED|86|82|208.620.787.1077.1079|1989||172|43|||D
Davide Astori|DEF|84|83|7.238.196.737.356|1987||189|14||11.21.58|
Dedryck Boyata|DEF|20|82|551.155.334.204.418.224|1990||188|31||2.37.45|
Jeffrey Bruma|DEF|124|80|215.518.408.648.933.548.484.414.707.782|1991||189|25||2.11.12.43.54.58|
Eliaquim Mangala|DEF|58|82|822.325.551.888.299.763.292.1018|1991||188|8||2.7.24.26.41.55|
Steve Cook|DEF|76|75|166.160.617.1135.1188.698.936|1991||185||||
Matt Ritchie|AVA|51|79|692.831.160.610.1149.1084.720|1989||173|16|76|43|D
Aaron Cresswell|DEF|76|79|447.925.825|1989||170|3||35|
Christian Günter|DEF|2|79|365|1993||184|8||27.29|
Robin Knoche|DEF|2|79|933.874.620.91|1992||190||||
Filip Djuricic|MED|145|81|414.140.548.805.80.768.139.781.654.17|1992||181|44||7.30.43.46|
Marko Dmitrovic|GR|145|81|294.213.9.753.787.186.291.1074|1992||194|19||35.59|
Denis Cheryshev|AVA|134|83|721.787.905.888.895.656.968.1348|1990||173|33||11.19.31.43.58.59|E
Matej Vydra|AVA|32|81|126.871.224.921.924.720.263.175.902|1992||180|48|||
Tiquinho Soares|AVA|16|68|79.597.908.325.632.159.777.570.1137|1991||187|||7.18.52|
Jordy Clasie|MED|124|81|354.300.805.224.22|1991||169|17||13.54.59|
Jeffrey Gouweleeuw|DEF|124|77|414.22.115|1991||187||||
Sam Johnstone|GR|76|83|628.552.783.920.939.270.695.99.924.243.934.204|1993||193|4||10.31.54.55|
Nampalys Mendy|MED|135|79|587.612.518.521.921.323|1992||167|35|58|44|
Ahmed Hegazy|DEF|47|76|356.673.924.46.590|1991||190|88||20.39|
Bruno Martins Indi|DEF|124|82|354.325.825.22.807|1992||187|36|127|13.32.35.39.54|
Benito Raman|AVA|20|74|465.134.135.470.797.822.302.80.769.471.782|1994||172|1||45|
Cédric Soares|DEF|127|83|812.27.805.440.93.367.834|1991||169|34|2|8.16.25.28.34.38|
Rachid Ghezzal|AVA|5|80|587.541.518.356.141.180|1992||182|22|58|34.41|D
Kaan Ayhan|DEF|152|81|281.302.781.371.782|1994||184|74|2||
Mislav Orsic|AVA|40|76|810.404.873.277.805.856.651|1992||178|28|||E
Yannick Gerhardt|MED|2|78|231.933|1994||184|1||29|
Diafra Sakho|AVA|135|78|323.866.925.731.176.19.606|1989||184|12|||
Odysseas Vlachodimos|GR|63|81|298.654.140.617.610.787|1994||191|53|2|7.18.30.39.46|
Cristiano Biraghi|DEF|84|80|100.440.461.222.201.218.390.674.356.848|1992||184|16||21.37.43.44|
Mark Flekken|GR|124|80|394.365.164.524.1368.1184|1993||194|12|||
Téji Savanier|MED|58|74|5.622.578.323|1991||172||||
Benjamin Stambouli|MED|58|79|578.853.647.29.820.323.782|1990||180|||4.42|
Robbie Brady|AVA|78|81|552.426.616.175.160.695|1992||178|73||10|E
Charlie Austin|AVA|76|80|831.175.698.805.924.167|1989||188||||
Joel Campbell|AVA|38|83|93.319.142.632.905.812.366.527.577.111.1165|1992||178|150||15.30|D
Dan Burn|DEF|76|81|367.939.145.929.166.610|1992||201|11||53|
Zé Luís|AVA|23|76|380.163.348.809.325.535.61.411.346.21|1991||170|19||7.28.32.34.52|
Youssouf Sabaly|DEF|135|77|647.950.600.156.142.39.954|1993||174|32|58||
Bruma|AVA|127|81|812.371.375.725.705.648.632.351.163.140.90|1994||173|12|70|25.28.30.31.37.45|E
Josip Drmic|AVA|143|81|338.620.524.158.408.616.404.277|1992||182|35|||
Valon Berisha|MED|116|79|901.767.510.302.820.557.501.338|1993||181|72|142||
Hany Mukhtar|MED|2|77|418.140.767.172.603|1995||174|||7.46|
Marco van Ginkel|MED|124|80|907.215.7.825.648.149|1992||186|8||21.31.48.54|
Nicolae Stanciu|MED|132|81|339.80.806.36.802.251.378.969|1993||170|90|||D
Ivan Cavaleiro|AVA|127|79|140.262.587.934.367.65.530.704.821.847.338|1993||175|2||4.7.30.34.38.39.41|E
Marco Friedl|DEF|165|81|133.923|1998||187|13||5|
Dyego Sousa|AVA|127|71|520.847.690.554.163.140.345.72.9.597|1989||190|2|16|9.18.25|
Jeffrey Schlupp|MED|60|82|518.164.243.204.616|1992||178|20|2|2.44|E
Kevin Akpoguma|DEF|115|77|479.421.302.366|1995||192|8|2||
Grégoire Defrel|AVA|58|77|663.359.209.781.737.768.575|1991||179|||41|
Soualiho Meïté|MED|58|81|15.530.949.587.156.848.7.140.238.642|1994||187|||18.30.34|
Stefano Sturaro|MED|84|81|378.575.463.812.416.478.201|1993||178|4||6.32|
Silvan Widmer|DEF|143|79|390.871.132.548.1170|1993||182|65|||
Garry Rodrigues|AVA|23|79|525.309.10.283.642.371.46.351.632.82.799.87|1990||173|65|124||D
Kenny Lala|DEF|58|75|662.885.521.293.632.818|1991||178|3|||
Vladimír Darida|MED|32|81|902.365.418.90.424.998|1990||170|80|||
Arthur Masuaku|DEF|129|80|885.632.925.141.828.521.492|1993||179|49|58|38.55|
Anwar El Ghazi|AVA|124|80|32.530.99.299.648.548.197|1995||188|2||17|D
Vincenzo Grifo|AVA|84|78|421.274.365.158|1993||181|9|2|37|E
Britt Assombalonga|AVA|129|75|921.675.617.565.29.84.1192|1992||177|10|||
Bobby De Cordova-Reid|AVA|85|74|216.168.628.684.197.367.518|1993||170|45|76|38|E
Predrag Rajković|GR|145|80|294.542.820.549.46|1995||192|44||52|
Unai López|MED|54|78|725.101.144.186.719.184|1995||170||||
Björn Engels|DEF|20|78|224.632.820.99.744|1994||193||||
Chuba Akpom|AVA|76|81|93.164.236.617.426.166.516.797.642.565.32.530.447|1995||183|||9.15|
Ivan Provedel|GR|84|76|218.681.673.575.696.285.461.810.510.440|1994||192|||48|
André Silva|AVA|127|83|325.7.787.281.705.725.923.283|1995||185|53||25.32.35.39|
Sandro Ramírez|AVA|54|82|127.888.586.299.787.725.886.754.379.507|1995||175|||3.11.36.38.58|
Milos Veljkovic|DEF|145|81|853.565.213.923.294|1995||184|39||12.42|
Roque Mesa|MED|54|78|507.830.787.186.886.523.813|1989||171|||35|
Danny Ward|GR|123|79|935.532.26.425.518|1993||191|49||33|
Ruben Aguilar|DEF|58|75|763.393.15.578.587.521|1993||172|1||24.34|
Branco van den Boomen|MED|124|75|414.253.854.32.81|1995||189||||
Romain Saïss|DEF|102|78|223.511.81.934.141.59.60|1990||190|86|58|18.37.39.55|
Oumar Niasse|AVA|135|80|757.33.535.299.426.197.177.425|1990||182|9||11.38|
Darwin Machís|AVA|159|75|726.390.908.430.754.186.871.245.317.886.183|1993||174|52||46|E
Jack O'Connell|DEF|76|76|146.742.164.790|1994||190||||
Gustavo Gómez|DEF|122|81|528.506.150.7.653.1369|1993||186|96||9.50|
Mijat Gacinovic|MED|145|81|911.281.421.654.12|1995||175|30|||D
Lucas Silva|MED|16|75|242.721.553.395|1993||182|4||34.35.43.57|
André Gomes|MED|127|84|140.888.127.299.530.230|1993||188|29||3.7.8.11.25.30.36.38.39.41.43|
Zack Steffen|GR|45|78|365.230.551.302.565.229|1995||191|30||2.26.42|
Jordan Torunarigha|DEF|2|77|418.465.408|1997||189|1|||
Franck Honorat|AVA|58|75|612.330.223.763.818.158|1996||180||||D
Atakan Karazor|MED|152|79|422.298|1996||191|2|2||
Aïssa Laïdouni|MED|151|77|81.352.874.972.1215|1996||183|59|58||
Antonio Sanabria|AVA|122|81|781.737.813.142.378.848.238.443|1996||180|50|||
Rui Silva|GR|127|76|597.390.142.812|1994||189|3||7.25.41.45|
Ozan Tufan|MED|152|79|176.351.65.921.426.856|1995||182|65||55|D
Michel Aebischer|MED|143|81|942.154.681.874|1997||183|47|||
Steve Mounié|AVA|12|76|578.622.425.818.115.65|1994||190|71|||
Adam Marusic|DEF|109|74|470.472.510|1992||185|70|145|48|
László Bénes|MED|52|75|158.422.115.408.874.486.1024.465|1997||181|42|||
Nemanja Radonjic|AVA|145|82|737.244.294.553.418.140.848.549|1996||178|46||12.30|E
Carlton Morris|AVA|76|73|641.616.409.742.793.543.129.539.263|1995||185||||
Angelo Fulgini|MED|58|73|885.81.548.521.61.48|1996||188|1|39||
Alexander Djiku|DEF|60|77|746.759.293.351.809|1994||182|38|58|31|
Finn Dahmen|GR|2|75|548.115|1998||186||||
Niklas Dorsch|MED|2|81|133.415.465.115.849|1998||175|||5.11|
Dennis Geiger|MED|2|76|421.26.589|1998||172||||
Scott McKenna|DEF|51|73|26.617.233.507.277.1055|1996||189|54||39|
Carlos Salcedo|DEF|111|77|766.219.356.281.843.849.317.185.577|1993||182|47|||
Domingos Duarte|DEF|127|75|812.120.137.214.262.390.379.834|1995||191|3||25.30.32|
Mathias Normann|MED|116|75|152.166.576.741.616.276.56.43|1996||179|12|||
Jonjoe Kenny|DEF|76|80|299.929.641.204.418.642.782|1997||176|||11.38.43.45|
Rade Krunic|MED|21|83|416.285.7.351.294|1993||184|34||6|
Jiri Pavlenka|GR|32|76|126.802.923.642|1992||196|21|||
Sandi Lovrić|MED|53|76|827.320.871.416|1998||180|49|165||
Viktor Johansson|GR|142|75|742.825.1180.99.518|1998||186|16|||
Emanuel Mammana|DEF|4|77|734.541.947.342.917|1996||184|3||37|
Gian Marco Ferrari|DEF|84|76|663.241.781.768.1123.979.764|1992||189|1||37|
Daler Kuzyaev|MED|134|82|34.947.511.745.267|1993||182|51||37|
Théo Bongonda|AVA|129|78|949.203.856.377.245.809.1182|1995||177|43|20||D
Kenedy|AVA|16|83|358.215.921.610.379.390.357.886.649|1996||182|||2.21.43.48.53|E
Moussa Marega|AVA|100|79|75.554.325.908.958.45.1095|1991||186|25|58|7.34.39.52|D
Robin Hack|AVA|2|76|421.620.91.158|1998||178||||E
Fran Navarro|AVA|54|73|469.380.325.632.163.888|1998||179|||52|
Jens Stage|MED|43|74|25.233.923|1996||187|2|||
Lys Mousset|AVA|58|76|511.160.790.764.898.622.889|1996||184||||
Sammie Szmodics|MED|78|75|168.675.146.447.263.1331|1995||168|12|76||D
Fodé Ballo-Touré|DEF|135|79|530.587.7.367.511.323|1997||182|16|58|6.17.34.38.41.52|
Walter Benítez|GR|4|77|612.648.243.996|1993||191|1||49|
Hamari Traoré|DEF|100|75|662.529.820.731.725|1992||175|62|||
Pol Lirola|DEF|54|79|463.781.356.553.283.366.416|1997||183|1|||
Mergim Berisha|AVA|2|72|318.767.501.752.351.115.421.0|1998||186|2||30.55|
Reece Oxford|DEF|76|78|925.720.158.115|1998||190||||
Azor Matusiwa|MED|124|77|32.253.312.820.731.447|1998||178||||
Myrto Uzuni|AVA|1|71|592.352.390.116|1995||178|52|||E
Romain Perraud|DEF|58|74|612.662.818.805.142.530|1997||173||||
Elijah Adebayo|AVA|76|73|216.831.823.920.539.168.367|1998||193||||
Hannes Wolf|MED|165|76|318.767.705.158.830.609|1999||179||||D
Mahdi Camara|MED|58|74|763.819.818.731|1998||178||||
Georgios Masouras|AVA|63|76|656.632.898.48.590|1994||184|63|||E
Gustavo Scarpa|MED|16|79|358.834.653.617.632.112|1994||176|1||9.39.50|D
Orbelín Pineda|MED|111|79|701.219.185.203.12.577|1996||168|96|||
Akram Afif|AVA|26|81|59.466.813.905|1996||177|142||20.35.37|E
Alex Král|MED|32|79|840.802.809.925.874.291.233.782|1998||187|52|52|46|
Abel Ruiz|AVA|54|82|163.386.127|2000||182|3|||
Oliver Burke|AVA|51|78|617.162.705.924.204.66.790.568.923.145.874|1997||189|13|||D
William|DEF|16|76|443.933.242.782|1995||176|||34|
Grady Diangana|AVA|129|78|925.924.283|1998||180|9|||D
Michaël Cuisance|MED|58|82|158.133.553.895.768.19.418.521.899|1999||181|||5.12.27|
Luca Ranieri|DEF|84|78|356.359.97.760.764|1999||187|1|||
Junya Ito|AVA|86|80|483.377.820|1993||176|77|||D
Mert Müldür|DEF|152|79|718.781.351|1999||188|48|165|31|
Faitout Maouassa|DEF|58|74|19.731.622.224.578.521.390|1998||170||||E
Cyril Ngonge|AVA|20|75|224.707.312.416.601.848.291.580|2000||179|1||6.21|D
Isi Palazón|MED|54|70|722.688.719|1994||169||||D
Josip Juranovic|DEF|40|70|405.517.204.874|1995||175|40|||
Luís Maximiano|GR|127|76|163.812.390.510.72.590|1999||190|||7.32.47.48|
Stanley Nsoki|DEF|58|77|647.612.224.421.874|1999||184|||4.53|
Gabriel Brazão|GR|16|77|663.440.67.723.242.760.841.777|2000||192|||21|
Henry Onyekuru|AVA|115|76|466.299.80.371.587.632.29.42.376|1997||175|15||34.38|E
Ilia Gruev|MED|17|76|923.516|2000||185|31|||
Jakub Moder|MED|126|78|514.166.354|1999||190|36||25|
Petar Musa|AVA|40|76|802.804.874.149.140.250|1998||190|14||7.28|
Josep Martínez|GR|54|80|127.507.705.378.440|1998||191|1||6|
Nedim Bajrami|MED|1|76|391.285.781.717.61|1999||180|45|97||D
Mads Roerslev|DEF|43|75|406.233.894.164.933.805|1999||184|1|||
Zakaria Aboukhlal|AVA|102|80|648.22.854.848|2000||179|21|124|13|D
Adam Ounas|AVA|5|79|156.601.612.196.241.530.43.59.954|1996||172|31|58|6.11.41.48|D
Keito Nakamura|AVA|86|80|372.334.797.501.820.541.1140|2000||180|33||41|E
Zian Flemming|AVA|124|78|645.589.362.568.175.447|1998||185||||
Koki Machida|DEF|86|76|482.875.421|1997||190|17|||
Joe Worrall|DEF|76|75|617.717.141.175.1149.935|1997||190|||39|
Hugo Cuypers|AVA|20|74|822.706.288.4.632.471.465.217.577|1997||185||||
Frank Onyeka|MED|115|77|566.164.115.236|1998||183|46|||
Jens Petter Hauge|AVA|116|82|152.24.7.281.465|1999||185|16||59|E
Matt Turner|GR|45|81|607.93.617.243.541|1994||191|55||16.39.41.42|
Ryan Yates|MED|76|73|617.793.783.1084|1997||190|||39|
Alexander Prass|MED|165|72|318.827.421|2001||180|24|||
Patrick Osterhage|MED|2|72|898.365|2000||184||||
Josha Vagnoman|DEF|2|77|408.298|2000||187|3|||
Jovane Cabral|AVA|23|78|812.510.764.632.295.395|1998||176|33||7.32.47.48|E
Javi Galán|DEF|54|76|246.754.203.110.725.638|1994||172|||51|E
Yehvann Diouf|GR|135|76|862.820.612|1999||190|4|58||
Alexander Bah|DEF|43|79|835.802.140.1048|1997||183|23||7.18.31.38|
Anthony Caci|DEF|58|75|293.548|1997||184||||
Benedict Hollerbach|AVA|2|74|874.548|2001||181||||E
Tijjani Noslin|AVA|124|74|362.416.510.1003|1999||181|||48|D
Mostafa Mohamed|AVA|47|78|371.600.492|1997||185|61||20|
Willem Geubbels|AVA|58|78|541.587.600.331.662.513|2001||186|||34|
Brian Rodríguez|AVA|157|77|677.500.72.77|2000||174|37||17|E
Ben Johnson|DEF|76|78|925.447.825|2000||175|||2|
Jens Cajuste|MED|142|70|951.566.820.601.447.586|1999||188|25||21|
Marcos Antônio|MED|16|74|292.788.510.642.834|2000||169|||48|
Anass Salah-Eddine|DEF|102|80|334.32.737.648.654|2002||181|15|124|43|
Lilian Brassier|DEF|58|74|885.818.731.553.281|1999||186||||
Lorenzo Pirola|DEF|84|79|440.580.764.632|2002||188|||21|
Jesús Areso|DEF|54|75|638.144.174.101|1999||183|1|||
Anass Zaroury|AVA|102|78|536.702.175.426.521.654.230|2000||176|4|20|43|E
Nehuén Pérez|DEF|4|80|110.89.345.390.871.325|2000||184|3||7.49.51|
Ben Cabango|DEF|123|78|830|2001||188|19|||
Emil Holm|DEF|142|73|431.835.810.100.154.463|2000||191|17||59|
Aster Vranckx|MED|20|76|471.933.7.781|2002||183|9|||
Tomás Araújo|DEF|127|79|140.380|2002||187|7||18.30.31.38.45|
Joe Scally|DEF|45|79|609.158|2002||184|28||42|
Luke Thomas|DEF|76|75|518.790.565|2001||181||||
Brandon Williams|DEF|76|82|552.616.447.426.742|2000||171||||
Hidemasa Morita|MED|86|82|485.776.812.426|1995||177|40||7.47|
Tanguy Nianzou|DEF|58|81|647.133.787.530|2002||191|||4.5.27.53.59|
Tomas Cvancara|AVA|32|74|453.806.158.84.204.424.1041|2000||190|8|||
Zaidu Sanusi|DEF|115|75|380.776.325|1997||182|32||7.52|
Sergio Carreira|DEF|54|74|203.188.283|2000||170|||43|
Georgios Vagiannidis|DEF|63|76|654.440.797.812|2001||181|15||21.41.46|
Yusuf Demir|AVA|165|80|718.127.371.132|2003||173|4|||D
Teden Mengi|DEF|76|81|552.263.145.539|2002||186||||
Jon Moncayola|MED|54|76|638.181|1998||189|1|||
Devyne Rensch|DEF|124|80|737.32|2003||176|2||54|
Sékou Mara|AVA|58|76|156.805.293.15|2002||183||||
Kristian Thorstvedt|MED|116|76|901.377.781|1999||190|40|||
Kirian Rodríguez|MED|54|73|507|1996||180||||
Yanis Begraoui|AVA|102|74|15.854.666.292|2001||179||58||
Jean Lucas|MED|16|78|357.777.541.818.587.279|1998||181|1||11|
Ísak Jóhannesson|MED|82|66|614.233.302.231|2003||180|48|76||
Osame Sahraoui|AVA|102|63|916.414.530|2001||164|3|116||E
Samuel Iling-Junior|AVA|76|79|460.463.99.154.565.924.681.155|2003||182||||D
Charlie Patino|MED|76|79|539.93.147.830.262.898|2003||182|||16|
Mattia Zanotti|DEF|84|74|440.331.320|2003||173||||
Gonzalo Plata|AVA|49|81|438.812.886.59.357.276|2000||178|54||7.34.47|D
Mohamed Bayo|AVA|68|77|223.869.530.511.744.374.769|1998||188|30|58|41|
Ferran Jutglà|AVA|54|78|888.127.224.203|1999||175|3|||D
Samuel Dahl|DEF|142|75|268.737.140.915.1059|2003||174|3||18.31.38.44|E
Adolfo Gaich|AVA|4|75|771.194.139.754.416.180.84.468.296|1999||190|1||49|
Isaac Price|MED|79|74|299.822.924|2003||175|36|76||
Dion Beljo|AVA|40|74|594.591.115.718.277|2002||195|4|||
Lucas Gourna-Douath|MED|58|76|763.767.737.511.318.426|2003||185|||44|
Kasey McAteer|MED|78|73|518.447.1049.1280|2001||177|8|76||D
Andrew Omobamidele|DEF|78|75|616.617.293.80|2002||188|10||39|
Urko González de Zárate|MED|54|75|66.725.291|2001||189|1|||
Giovanni Fabbian|MED|84|77|440.729.154.356.663|2003||186||||
Imrân Louza|MED|102|76|600.921.319.654|1999||178|15|58|43.44|
Tomás Händel|MED|127|71|908.294|2000||180||||
Eren Dinkçi|AVA|152|74|923.415.365|2001||188||2||D
Issa Kaboré|DEF|18|81|471.551.862.553.539.140.923.935|2001||180|59||18.26|
David Møller Wolfe|DEF|116|66|757.22.934.408.1054|2002||185|30||55|
Rafa Marín|DEF|54|75|721.66.601.905.1348|2002||191|||6.11.21|
Juan|AVA|16|75|834.805.402|2002||184||||
Jordan James|MED|123|76|145.731.518|2004||190|30|76||
Kayky|AVA|16|77|358.668.279.807.443.551|2003||175|||26|D
Marquinhos (2003)|AVA|16|80|834.93.616.600.358.242|2003||175|||16.34|D
Tanner Tessmann|MED|45|77|250.895.541|2001||188|14||41.42|
Facundo Pellistri|AVA|157|80|677.552.66.390.654|2001||174|41||17.43.46|D
Anthony Rouault|DEF|58|74|854.298.731|2001||186||||
Aljoscha Kemlein|MED|2|74|874.817|2004||185||||
Thomas Kristensen|DEF|43|73|25.871.100|2002||198|||48|
Hugo Bueno|DEF|54|78|934.354|2002||180|1||35.55|
Badredine Bouanani|AVA|5|74|612.319.298.530.717|2004||177|5|58||D
Álex Valle|DEF|54|75|523.127.204.232|2004||178||||
José Ángel Carmona|DEF|54|74|787.283.379|2002||180||||
Lorenz Assignon|DEF|58|74|746.731.175.298|2000||179||||
Luiz Júnior|GR|16|73|345.905|2001||192||||
Bryan Zaragoza|MED|54|80|726.390.133.638.203.737.291|2001||164|3||53|E
Yerson Mosquera|DEF|33|74|106.934.221.905|2001||187|4||18.35.55|
Ilan Kebbal|MED|5|72|820.869.662.156.1370|1998||169|5|58||D
Luca Koleosho|AVA|84|77|291.175.662|2004||175|2|45||D
Justin Devenny|MED|79|75|243.489.825|2003||178|18|51||
Abdallah Sima|AVA|135|76|802.166.825.81.717.818.521|2001||188|12|||E
Mert Kömür|MED|2|75|115|2005||183||||
David Datro Fofana|AVA|39|76|576.215.874.175.402.478.293.786|2002||182|3||42|
Bence Dárdai|MED|73|62|418.933|2006||189|3|2||
Tom Rothe|DEF|2|74|157.422.874|2004||193||||
Jan-Carlo Simić|DEF|145|75|7.80.46|2005||186|6|2|52|
Bradley Locko|DEF|58|75|820.818|2002||180||||
Alessandro Marcandalli|DEF|84|72|378.728.895|2002||195||||
Otávio (2002)|DEF|16|72|357.345.325.662|2002||178||||
Jackson Tchatchoua|DEF|24|74|702.416.934|2001||186|16|20|55|
Stefan Bajcetic|MED|54|78|532.767.507.203|2004||185|||13.33|
Alessandro Circati|DEF|8|78|663.140|2003||190|17|84|38|
Alejo Veliz|AVA|4|75|738.853.787.291.279|2003||187||||
Hugo Sotelo|MED|54|71|203.523|2003||180|1||43|
Martim Fernandes|DEF|127|75|325|2006||181|||7.52|
Héctor Fort|DEF|54|82|127.283.725|2006||185|||3.27|
Marc Guiu|AVA|54|80|127.215.828.705|2006||190||||
Kassoum Ouattara|DEF|58|74|75.587.141|2004||176|1|||
Saël Kumbedi|DEF|58|75|511.541.933|2005||175|||41|
Andrés Gómez|AVA|33|74|567.766.731.892|2002||171|12|||E
Romain Esse|AVA|76|73|568.243.236|2005||178||||D
Mats Rots|DEF|124|72|334.417.421|2006||178||||
Valentín Gómez|DEF|4|74|917.142|2003||185|1|||
Alex Tóth|MED|73|74|352.160|2005||181|16|||
Giovane|AVA|16|74|234.416.601|2003||184|||55|D
Lorran|MED|16|73|357.681|2006||173|||34|
Ilyas Ansah|AVA|2|73|750.874.426|2004||197||||
Jan Ziolkowski|DEF|126|74|517.737.580|2005||194|3|||
Kendry Páez|AVA|49|79|438.215.293.734|2007||177|27||56|D
Wagner Pina|DEF|23|75|137.292.856.120|2002||180|16|127||
Souza (2006)|DEF|16|74|777.853.325|2006||183||||
Harrison Armstrong|MED|76|71|299.263.695|2007||185||||
Louis Leroux|MED|58|71|600|2006||184||||
Abdelhamid Ait Boudlal|DEF|102|74|731.75|2006||190|2|||
Aarón Anselmino|DEF|4|79|150.215.157.293|2005||186|||56|
Gessime Yassine|AVA|166|73|316.869.293|2005||172|9|58||D
Ibrahima Ba|DEF|135|68|885.345.812|2005||190|||41|
Brian Madjo|AVA|94|75|323.99|2009||193|3|76||
Vicente Lucas|DEF|127|75|120.137|1935||0|20|110||
Oceano|MED|127|79|597.812.725.854|1962||175|54|23|7.20|
Sá Pinto|AVA|127|80|765.812.725.822|1972||178|45||7.20.25.32.40|
Jorge Cadete|AVA|127|78|812.909.165.204.203.162.140.295.664|1968||177|33|110|20.28|
Simon Jentzsch|GR|2|76|479.1.933.115.1303|1976||196|9||5.29|
Clemens Fritz|DEF|2|82|479.524.923.1142|1980||183|23||29|
Nelson Valdez|AVA|122|83|923.157.430.745.888.47.632.281.784|1983||178|77||5.33|
Andreas Ivanschitz|MED|165|81|718.767.654.548.523.784.902|1983||184|69||28.32.53|
Roland Linz|AVA|165|79|1.117.612.827.149.163.391.375.137.120|1981||185|39||29.30|
Robert Huth|DEF|2|82|215.565.825.518|1984||191|19||2.29.31.44|
David Bellion|AVA|58|78|828.552.925.612.156.727.1346|1982||181|||4.10|
Carlo Cudicini|GR|84|83|7.232.694.510.215.853.499|1973||185|||2.6.19.31.44.50.58|
Luke Young|DEF|76|81|853.213.565.99.698|1979||180|7|||
Shola Ameobi|AVA|115|81|610.825.375.374.243.155.1189.1084|1981||191|10|||
Jonathan Walters|AVA|78|81|146.155.426.239.129.783.935.447.825.175.1290|1983||183|55|76||D
Brad Friedel|GR|45|83|610.172.371.230.532.146.99.853|1971||188|82||12.42|
Dudu Aouate|GR|83|80|545.542.709.262.549|1977||188|78|||
Kieran Richardson|DEF|76|82|552.924.828.367.99.197|1984||173|8||2.10|D
Massimo Maccarone|AVA|84|79|575.694.7.890.285.565.663.794.652.768.167|1979||180|2||6.48|
Matthew Etherington|AVA|76|80|675.853.162.925.825|1981||178||||E
Gary Caldwell|DEF|51|81|610.419.236.263.204.929|1982||180|59||45|
Gary O'Neil|MED|76|78|692.920.197.565.925.698.616.155.168|1983||178||||
Simon Davies|AVA|123|82|675.853.299.367|1979||178|59|||D
Kader Mangane|DEF|135|74|606.942.521.731.45.828.464.368.293|1983||193|23|||
Flavio Roma|GR|84|80|510.895.359.218.679.587.7.987|1974||191|3||6.24.44|
Gaël Givet|DEF|58|81|587.553.146.5.950.855|1981||181|12||4.24|
Jérémie Bréchet|DEF|58|79|541.440.725.330.648.862.156.368|1979||187|3||4|D
Youssouf Hadji|AVA|102|77|19.746.731.38.282|1980||183|64|||
Florent Balmont|MED|58|77|541.854.612.530.266|1980||167|||4|
Camel Meriem|MED|58|78|330.156.553.587.90.5.612.87|1979||174|3|||
Zoumana Camara|DEF|58|80|763.440.285.746.553.521.516.647|1979||182|1||4.11|
Rod Fanni|DEF|58|80|521.502.612.731.553.38.213.579|1981||186|5||17.24|
Matthieu Chalmé|DEF|58|77|530.156.4|1980||175|||4|
Étienne Didot|MED|58|76|731.854.398|1983||175||||
Cristian Brocchi|MED|84|82|7.416.440.356.510|1976||173|1||6.11.14.19.58|
Sergio Pellissier|AVA|84|74|848.890.218.760|1979||175|1|||
Cesare Bovo|DEF|84|81|737.513.663.652.848.378.674|1983||181|||19|
Dario Dainelli|DEF|84|79|575.285.513.165.416.356.378.218.18.1027|1979||191|1|||
Patrick Helmes|AVA|2|80|231.524.933|1984||182|14||29|
Christian Fuchs|DEF|165|83|898.548.518.212.1035.782|1986||186|78||2.44.53|
Mario Santana|AVA|4|79|771.895.652.218.138.601.209.848.378.629.366.356|1981||178|7|||D
Luciano Zauri|DEF|84|79|100.218.510.356.768.674|1978||178|5||37|D
Paolo Sammarco|MED|84|78|7.694.218.768.871.209.810.366|1983||183|||11.58|
Lionel Scaloni|DEF|4|83|611.296.262.925.709.510.549.100|1978||182|7||3.17.60|D
Alexis Ruano|DEF|54|80|586.379.888.787.141.66.36.105.709|1985||183||||
Duda|AVA|127|79|245.586.523.787|1980||175|18||20.28.50.59|D
Matthew Taylor|MED|76|79|539.692.155.925.175.615.831|1981||178||||
Alan Hutton|DEF|51|80|717.853.828.99.617.549.155|1984||185|51|||
Hugo Almeida|AVA|127|83|519.325.149.923.141.209.497.85.12.405.27|1984||191|61||7.20.25.28.31.40.50.58|
Marc Planus|DEF|58|79|156|1982||180|1||4|
Arthur Boka|DEF|39|82|20.293.298.586.329.1354|1983||166|82||5|
Nicky Shorey|MED|76|79|526.720.99.617.367.924.168.692.1331.1335|1981||175|3||19|
Ben Foster|GR|76|82|825.168.935.552.921.145.924|1983||193|8||2.10.19.58|
Gaby Mudingayi|MED|20|80|875.465.848.510.154.440.283.209.681|1981||180|18|129||
Matt Jarvis|MED|76|80|934.925.616.920.1190|1986||173|1||19|E
Franco Brienza|MED|84|79|359.652.97.673.729.794.100.209.154.128|1979||172|2||21|
Antonio Floro Flores|AVA|84|79|601.768.673.871.378.390.781.218.979.128.1118|1983||183|||48|
Michele Pazienza|MED|84|80|359.871.356.601.463.154.728.1226|1982||175|||6.21|
Pasquale Foggia|MED|84|79|858.285.241.97.7.510.729.196.768.764|1983||167|3||11|D
Marko Basa|DEF|160|78|624.512.535.530|1982||189|42|145||
Ilan|AVA|16|76|659.102.834.330.763.443.925.4.746.393|1980||181|3|||
Nicolas Douchez|GR|58|78|511.502.854.731.647.521.727|1980||185|||4.11|
Zoltán Gera|MED|73|82|352.924.367.997|1979||183|97|||
Jean Beausejour|DEF|29|82|786.395.465.77.145.929.227.864.1008.1157|1984||198|109||17.45|
Jimmy Briand|AVA|58|80|731.541.398.156|1985||182|5|||D
Igor Budan|AVA|40|80|404.895.285.652.100.97.663.209.1028|1980||185|6||44|
Raffael|AVA|16|78|338.418.275.158.1279.782|1985||174||||
Diego Pérez|MED|157|82|677.587.154.255|1980||177|89||24|
Artur Moraes|GR|16|79|667.242.235.209.794.737.163.140.639.265.211|1981||192|||7.30.44|
Cristian Molinaro|DEF|84|81|764.463.794.298.663.848.366.895|1983||182|2||44|
Jaime Valdés|MED|29|79|128.356.513.100.812.663.227.1011.1103|1981||176|4||17|
Ferreira Pinto|AVA|16|76|673.209.100.890.513|1979||179||||D
Milan Bisevac|DEF|145|80|294.521.885.647.541.510.323|1983||185|19||11|
Javier Arizmendi|AVA|54|79|104.110.709.262.888.779.379.606.549|1984||189|1|||D
Zdravko Kuzmanovic|MED|145|81|132.356.298.440.871.586|1987||186|50|143|37|
Nikica Jelavic|AVA|40|82|405.949.718.717.299.426.925.592|1985||188|36|21|45|
Emir Spahic|DEF|21|82|850.535.578.787.85.524.408|1980||186|95|40||
Ali Al-Habsi|GR|119|81|51.155.929.166.720.45.924|1981||194|147||30.45|
Abou Diaby|MED|58|84|15.93.553|1986||190|16||15|
Sidnei|DEF|16|78|443.140.141.291.262.142.202.242.389.507|1989||185|||7.30.46|
Kiko Casilla|GR|54|82|245.291.307.721.516.283.379.1348.1347|1986||190|6||3.17.22.23.35.42.43.57.58|
James Morrison|MED|51|80|565.924|1986||180|46|76||
Max Gradel|AVA|39|79|518.160.516.763.854.799.374|1987||175|113|||E
Kenwyne Jones|AVA|150|79|805.789.825.828.197.160.47.108|1984||188|91|||
Christophe Jallet|DEF|58|82|210.319.647.541.612.75|1983||178|16||4.11.24|
Gojko Kacar|MED|145|81|911.418.408.208.115.83|1987||185|25|||
Raffaele Palladino|AVA|84|81|139.764.463.18.378.663.241.580.810|1984||182|3||6.19.24.44|E
Ederson (1986)|MED|16|79|443.462.612.541.510.357|1986||181|1|||
Lukasz Fabianski|GR|126|83|514.517.93.830.925|1985||190|57||15.35.39|
Michael Bradley|MED|45|83|608.414.158.99.218.737.849|1987||189|151|||
Gabriel Paletta|DEF|84|83|125.532.150.663.7.100.580.1183|1986||190|3|4|43|
Jonathan de Guzmán|MED|124|82|354.549.905.830.601.199.218.281.623.807|1987||173|14|25|43.48.54|
Anderson|MED|16|84|395.325.552.356.443.29.235|1988||176|8||2.7.10.28.54.58|
Tim Krul|GR|124|83|610.344.198.32.22.166.616.539|1988||193|15||43.54|
Alejandro Alonso|MED|4|76|427.156.587.763|1982||172||||
David Nugent|AVA|76|80|178.695.692.175.518.565.263|1985||180|1||19|
Ismaël Bangoura|AVA|68|79|368.512.275.731.51.600.56|1985||174|52|||
Vieirinha|DEF|127|82|325.520.642.933|1986||173|25||7.8.9.25.28.40|
Fernando Amorebieta|DEF|159|81|101.144.367.565.813.438.184|1985||192|19||17|
Robert Acquafresca|AVA|84|81|848.858.440.196.100.378.154.523.329.841|1987||185|4||6.31.37|
Miralem Sulejmani|AVA|145|80|665.414.32.140.942|1988||178|20||7.30|D
Chris Brunt|MED|79|81|565.789.924.168|1984||180|65|||E
McDonald Mariga|MED|128|81|663.440.725.508.723.1100|1987||188|40||43.44|
Mario Suárez|MED|54|81|104.110.886.203.549.356.921.888.719|1987||188|3||3.23.51.59|
Roberto|GR|54|80|104.110.384.779.140.632.291.586.925.66.886|1986||192|||30.38.51.55.59|
Rubinho|GR|16|80|234.909.378.652.18.848.463.232|1983||186|||6|
Daniel Carriço|DEF|127|80|629.812.720.787.72|1988||182|1||25.35.40.59|
Vincent Enyeama|GR|115|79|530.542.1033.1313.986|1982||180|101||17|
Kamil Grosicki|AVA|126|81|685.517.329.454.799.731.426.924|1988||180|101||25|E
Hugo Rodallega|AVA|33|80|260.577.109.605.929.367.33.856.257.279.437|1985||180|43||45|D
Cata Díaz|DEF|4|80|738.185.228.150.379.110.190|1979||183|12||17.51|
Sylvain Marveaux|MED|58|77|731.610.398.319.19.212|1986||172||||
Stéphane Ruffier|GR|58|80|587.763.1105|1986||187|3||24|
Roman Neustädter|DEF|2|79|548.158.351.276.473.782|1988||190|15|153|29|
Fabrice Abriel|MED|58|76|647.786.75.398.319.553.612.885|1979||188|||4.24|
Ricky van Wolfswinkel|AVA|124|79|907.882.812.616.763.142.132.334|1989||185|2||28.54|
Roger Johnson|DEF|76|78|936.197.145.934.789.925.213.1335|1983||191||||
Benoît Trémoulinas|DEF|58|81|156.275.763.787|1985||172|5||4.24.59|
Stefan Reinartz|MED|2|80|524.620.281|1989||189|3||29|
Esteban Granero|MED|54|82|379.721.698.725.291.1032.1348.1347|1987||180|||3.31|
Guilherme Siqueira|DEF|16|80|510.871.390.140.110.888|1986||181|||7.30.51|
Bruno Soriano|MED|54|81|905|1984||184|10||23|
Stefan Radu|DEF|132|82|308.510|1986||183|14||48|
Sebastian Rode|MED|2|82|281.133.157.1237|1990||179|||5.26.53.59|
Luca Antonelli|DEF|84|80|7.128.663.378.285|1987||184|13||11.21.58|
Emiliano Insúa|DEF|4|82|150.532.371.812.110.719.298.499.69.710|1989||179|5||3.28.43.51|
Ljubomir Fejsa|MED|145|79|665.632.140.66.36|1988||185|25||7.18.30.34.46|
Tony Jantschke|DEF|2|78|158|1990||177||||
Jordan Rhodes|AVA|51|77|641.447.164.425.146.565.147.1188.616.789|1990||185|14|76||
Nicolás Spolli|DEF|4|75|611.201.737.199.218.378.241|1983||192|||51|
Pedro León|AVA|54|78|722.523.886.379.721.865.753.190|1986||182|||3.31|D
Walter Gargano|MED|157|82|252.601.440.663.577.677.734|1984||169|64||43|
Philipp Wollscheid|DEF|2|78|620.524.548.825.933.323.1243|1989||194|2||29|
Carlos Zambrano|DEF|125|79|817.281.745.642.275.132.150.1068.782|1989||185|83|||
Markel Susaeta|AVA|54|81|101.144.372.557.544.184|1987||179|8||17.23|D
Agustín Marchesín|GR|4|75|506.778.77.325.203.395.150.1369|1945||199|8||7.43.49.52|
Leonardo Ulloa|AVA|4|78|771.95.72.166.518.981.1196.649.719|1986||185|||2.44|
Oliver Baumann|GR|2|79|365.421|1990||187|13|||
Lewis Holtby|MED|2|80|898.548.853.367.408.146.422.588.1368.782|1990||176|3||12.29.42.53|
Álvaro González (1984)|MED|157|82|150.598.510.848.109.255|1984||176|72|||
Pablo Piatti|AVA|4|80|296.72.888.291.283.849|1989||163|1||39.51|E
Mapou Yanga-Mbiwa|DEF|58|80|578.610.737.541.316|1989||184|4|130|4.24|
Marc Albrighton|AVA|76|82|99.929.518.924|1989||175|||2.44.45|D
Jake Livermore|MED|76|81|543.239.263.853.675.447.516.426.924.921|1989||181|7||12.38|
Adam Smith|DEF|76|77|853.936.160.543.516.568.263|1991||174|||12|
James Tavernier|DEF|76|77|610.198.789.543.793.742.929.168.717.1129.542|1991||175||||
Álvaro Domínguez|DEF|54|82|104.110.158|1989||189|2||23.51.59|
Ashley Barnes|AVA|76|79|641.684.166.175.616|1989||186||||
André André|MED|127|76|891.908.325.46.520|1989||177|4||7.25.32.35.39.46.52|
Vicente Guaita|GR|54|80|888.379.243.203.663|1987||191|||43|
Douglas|DEF|124|76|334.276.856.812|1988||192||16|30|
Jaume Costa|DEF|54|78|888.245.905.549.67|1988||171|||59|
Vicente Iborra|MED|54|81|103.523.787.518.905.632|1988||190|||59|
Troy Deeney|AVA|76|76|920.921.145.1049|1988||183|||38|
Víctor Laguardia|DEF|54|74|258.779.507.721.66.9|1989||185||||
Adrián San Miguel|GR|54|81|143.142.925.532|1987||190|1||2.33|
Josué (1990)|MED|127|78|748.325.669.884.668.176.163.371.639.33.517.235|1990||172|4||7.12.28.32.35.39.40.41.59|
Oliver Norwood|MED|79|81|236.552.198.783.425.720.166.367.790.824|1991||180|58|76|2.10|
Pablo Armero|DEF|33|81|183.653.871.601.925.7.357.279.396|1986||174|68||43|D
Fredy Montero|AVA|33|77|260.784.567.812.1310.1137.889|1987||176|4||30.32.34.38|
Nemanja Gudelj|MED|145|82|588.22.32.812.787.379.1321.1137|1991||187|79||32.35.59|
Jefferson|DEF|16|74|833.397.653.292.358.621.812.163.200.320.395|1988||176|||9.30.32.34.38|
Ben Mee|DEF|76|81|551.518.175.164.790|1989||180|||2.37|
Martin Dúbravka|GR|52|83|289.804.806.610.552.175.853|1989||190|61||43|
Tino Costa|MED|4|80|666.578.888.809.378.356.771.72.106.1275|1985||176|2|||
Matt Phillips|AVA|51|79|936.147.790.698.924.641.823|1991||183|16|76||D
Etrit Berisha|GR|1|81|475.510.100.760.848.285.429|1989||194|83|89||
Ryad Boudebouz|MED|5|79|330.746.578.142.203.763.36|1990||177|26|58||
Christian Kabasele|DEF|20|80|466.471.538.377.921.871|1991||187|2|129|38.45|
Maya Yoshida|DEF|86|84|599.884.805.768.499.782|1988||189|127||42.44|
Chung-yong Lee|AVA|37|81|327.155.243.898.873.434|1988||180|89||40|D
Sergi Enrich|AVA|54|76|549.9.753.688.723.754.779|1990||180||||
Hiroki Sakai|DEF|86|82|483.553.881.114|1990||185|74||12|
Marco Parolo|MED|84|83|232.416.209.663.510|1985||184|36||21|
Maicon (1988)|DEF|16|79|242.597.325.834.371.52.777.892.235|1988||191|||7.12.28.32.35.41.46.55.59|
Emanuele Giaccherini|MED|84|83|209.463.828.154.601.218.1122|1985||167|29||6.21.48|
Federico Fernández|DEF|4|80|296.601.379.830.610.283.39|1989||189|32||43|
Marco Silvestri|GR|84|75|575.218.728.650.196.516.416.871.768.285.238.478|1991||191||||
James McClean|AVA|78|82|828.929.924.825.935.971|1989||180|103|79||D
Aleix Vidal|AVA|54|84|721.291.384.72.787.127.66.658|1989||175|5||3.23.35.36.59|D
Jonathan Kodjia|AVA|39|77|820.75.759.81.168.99.43|1989||191|27|58||
Rodrigo Battaglia|MED|4|77|427.710.163.582.738.214.812.66.549.112.150|1991||186|2||30.32.41.47.49.50.52|
Sergi Gómez|DEF|54|80|127.203.787.291.74|1992||185|3||26.35.59|
Alexander Schwolow|GR|2|78|365.91.418.874.413.548.782|1992||189||||
Facundo Ferreyra|AVA|4|79|125.917.788.610.140.291.203.89.226.438.780.842|1991||183|||7.18.30.41.46|
Connor Wickham|AVA|76|79|447.828.789.516.243.197.213.1049.543.695|1993||191||||D
Youssef El Arabi|AVA|102|80|759.45.390.39.632.17.600.970|1987||183|47|58||
Óscar de Marcos|DEF|54|80|66.144.101|1989||182|1||17|
Rubén Pardo|MED|54|79|725.142.156.186.90|1992||182||||
Pedro Obiang|MED|69|81|768.925.781.580|1992||185|29|54||
Leandro Cabrera|DEF|157|77|255.110.430.779.241.379.291.1348|1991||187|||51.59|
Dominique Heintz|DEF|2|76|0.231.365.874.898.302|1993||189||||
Bruno César|MED|16|79|279.395.234.140.36.653.292.812.669.892|1988||178|2||30.55|
Francesco Bardi|GR|84|77|18.440.618.218.291.366.154.987.652.728|1992||188|||37.44|
Joël Veltman|DEF|124|83|32.166.925|1992||182|29||39.54|
Andrey Lunev|GR|134|79|850.872.947.524.699.276|1991||189|9||37.56|
Aitor Fernández|GR|54|77|101.184.144.523.638|1991||182|2|||
Rani Khedira|MED|151|79|298.705.115.874|1994||185|6|2||
Khouma Babacar|AVA|135|77|356.709.650.575.781.513.65.233.1047|1993||185|2|||
José Luis Palomino|DEF|4|76|771.89.323.538.100.196.182|1990||188|||51.59|
Marvin Ducksch|AVA|2|79|157.750.817.422.302.923.145|1994||188|2||33|
Carl Jenkinson|DEF|76|81|213.93.925.145.617.557.610|1992||185|1||15|
Adama Soumaoro|DEF|58|76|530.378.154|1992||186|||4.17|
Patric|DEF|54|80|127.510|1993||184|||48|
Ezgjan Alioski|DEF|97|77|942.320.516.36.351.1107|1992||172|92||17.30|D
Gianluca Lapadula|AVA|125|80|696.663.209.366.674.7.378.513.139.196.810.1029.1031.1282.1030.1065|1990||178|46|84|44|
Stuart Armstrong|MED|51|77|273.204.805.889.789.26|1992||183|53|||
Diego Reyes|DEF|111|79|77.325.725.291.351.186.843.701|1992||193|65||7.32.35.39.41.52|
Daniele Baselli|MED|84|76|222.100.848.196.232.650.218|1992||182|1||37|
Rogelio Funes Mori|AVA|4|80|734.140.290.577.865.527|1991||186|18||7.30|
Andreas Samaris|MED|63|81|656.632.140.362.732.235|1989||189|39||7.18.25.30.34.46|
Lei Wu|AVA|30|75|291|1991||174|101|||D
George Saville|MED|79|78|215.568.164.934.168.565.539|1993||176|64|76|12.31.43|
Saphir Taïder|MED|5|80|393.154.440.805.781.37.579|1992||180|46|58|37.42|
Jetro Willems|DEF|124|82|807.648.281.610.394.312.417.589.981|1994||177|22||54|
Gianluca Caprari|AVA|84|77|737.674.440.768.663.139.416.580.650|1993||171|1||36.37.44|
Jeff Hendrick|MED|78|80|263.175.610.698.720.789|1992||185|79|||
Paul-Georges Ntep|AVA|24|77|15.731.933.763.486.398.149|1992||180|6||24.28|E
Vitor Hugo|DEF|16|77|811.450.202.78.653.356.856.279.654.112|1991||187||||
Florian Niederlechner|AVA|2|77|1.415.548.365.115.418|1990||186||||
Jonathan Viera|MED|54|78|507.888.719.822.122.72|1989||170|1||35|D
John Lundstram|MED|76|77|299.270.939.526.147.783.641.790.717.856.426.518|1994||181|||45|
Tom Ince|AVA|76|78|532.147.243.617.426.263.425.539.1084.720.825.921|1992||178||||D
Adrien Tamèze|MED|24|75|885.612.100.416.848.19|1994||180||58||
Alfred Gomis|GR|135|76|848.241.118.209.154.764.760.266.731.232.319.652|1993||196|16|||
Adrian Grbic|AVA|165|77|752.223.319.907.885.321|1996||185|9|||
Marcel Tisserand|DEF|129|78|587.521.854.315.933.351.40.48.832.955|1993||185|37|58|4.34.44.55|
Christophe Hérelle|DEF|58|67|330.867.862.612.818.323.151|1992||188||||
Omar Colley|DEF|148|74|268.377.768.141.642.958.42|1992||192|67||44|
Moi Gómez|MED|54|78|905.379.813.754.638|1994||174|||59|
Ole Selnæs|MED|116|77|739.763.338|1994||187|32|||
Nuno Valente|DEF|127|82|812.690.554.519.325.299|1974||182|33||7.20.31.50.58.59|
Matheus|GR|16|72|78.163.32.294|1992||187|||9.32.41.52|
Janik Haberer|MED|2|77|421.898.365.874|1994||186||||
Jean-Eudes Aholou|MED|39|76|868.293.587.763.81.530|1994||188|4||34|
Abdoulaye Touré|MED|68|73|600.378.478.511|1994||187|20|58|44.52|
Álvaro González (1990)|DEF|54|76|709.779.291.905.553.52.55.189.1301|1990||183|||12|
Clinton Mata|DEF|3|76|466.702.377.224.541|1992||185|18|20|41|
Bouna Sarr|AVA|135|81|323.553.133|1992||177|13|58|5.12.27.53|D
Marius Wolf|DEF|2|81|1.281.157.418.231.115|1995||188|5|||D
Jordon Ibe|AVA|76|78|936.532.145.263.160.30.1191|1995||176|||33|D
Bastos|DEF|3|75|741.510.37.36.159.360|1991||184|58||18|
Marvin Friedrich|DEF|2|77|115.874.158.782|1995||193||||
Rubén Blanco|GR|54|72|203.553.386.940|1995||188|||36|
Josh Murphy|AVA|76|75|616.929.543.197.641.692.695|1995||173||||E
Danilo Cataldi|MED|84|77|510.241.378.139.356|1994||180|||48|
Marco Sportiello|GR|84|76|100.199.356.366.7|1992||192|||41.48.52|
Alex Pritchard|MED|76|78|853.675.831.164.924.616.425.828.145.799|1993||171|||12.42|
Angus Gunn|GR|51|80|551.616.805.825.617.756|1996||196|29|76|26|
Flavien Tait|MED|58|71|502.81.731.769.736|1993||177||||
Isaac Hayden|MED|76|81|93.426.610.616.822.698.692.526|1995||187|17||15.43|
Tin Jedvaj|DEF|40|82|277.737.524.115.535.37.654.60|1995||184|26||43.46|
Dawid Kownacki|AVA|126|79|514.768.302.923.418|1997||185|7||44|
Roger Martí|AVA|54|76|523.103.779.886.283.245|1991||179||||
Rubén García|AVA|54|76|103.523.813.638|1993||171||||D
Connor Roberts|DEF|123|76|830.939.169.565.175.516|1995||173|65|||
Daley Sinkgraven|DEF|124|77|414.32.524.507.362|1995||179|||56|
Adrien Thomasson|MED|58|73|950.600.293.521.731|1993||182|||44.52|
Carlos Fernández|AVA|54|78|787.262.390.725.188.245.723|1996||188|||35|
Óscar Romero|MED|122|75|710.755.66.771.150.670.159.443.427|1992||176|55|||
Kiril Despodov|AVA|17|74|195.196.827.538.642|1996||180|60|||D
Florent Mollet|MED|58|73|266.867.323.578.600.509.782|1991||174||||
Fábio Martins|AVA|127|72|265.163.668.214.345.60.48.44.959|1993||178|||9.32.41|E
Freddie Woodman|GR|76|75|610.489.26.830.160.695.532|1997||188|||13.43|
Alen Halilovic|MED|40|84|277.127.813.408.507.7.822.414.145.720.404.362|1996||170|10||36|
Jaime Mata|AVA|54|72|386.886.379.507.1039.709|1988||185|1|||D
Jony|AVA|54|79|723.813.586.66.510.638.307|1991||179|||48|E
Yoshinori Muto|AVA|86|82|333.548.610.753.906|1992||178|29||43|D
Wanderson|AVA|16|74|135.134.529.379.767.494.443.242|1994||175|||34|E
Rubén Peña|DEF|54|75|887.886.186.753.905.638|1992||170|||59|D
Przemyslaw Frankowski|DEF|126|80|515.454.217.521.371.731|1995||175|55||25|
Lukas Haraslin|AVA|52|78|663.515.781.806.41|1996||175|56|||E
Denis Vavro|DEF|52|80|233.510.754.933.902|1996||190|35||48|
Vaclav Cerny|MED|32|80|32.882.334.933.717.141|1997||178|30|||D
Glen Kamara|MED|57|79|93.273.272.717.516.731.60.1331.698|1995||181|72||15|
Rubén Alcaraz|MED|54|75|386.72.886.245.390|1991||180|1|||
Edimilson Fernandes|MED|143|79|329.925.356.548.91.942.818|1996||190|34|||
Shon Weissman|AVA|83|76|545.932.886.390.764.148|1996||175|33|||
Jonas Omlin|GR|143|78|321.132.578.158.524|1994||190|4|||
Diego Rico|DEF|54|78|258.779.186.160.725.379.638|1993||181||||
Johannes Eggestein|AVA|2|78|923.501.744.817.117|1998||183||||
Pablo Maffeo|DEF|54|78|551.386.298.754.549.632.888|1997||173|||26|
José Luis Morales|AVA|54|71|190.103.753.523.905.723|1987||180||||D
DeAndre Yedlin|DEF|45|70|784.853.828.610.371.442.221.766|1993||173|81||42.43|
Rúben Vezo|DEF|127|78|909.888.390.523.632.301|1994||182|||39|
João Carvalho|MED|127|77|909.140.617.72.632.292|1997||172|||46|
Diogo Gonçalves|AVA|127|76|140.617.345.233.766.492|1997||178|||7.18.30.46|E
Álvaro Fidalgo|MED|111|75|721.77.142.981.1348|1997||174|10|54|57|
Michael Olunga|AVA|128|76|268.386.483.38.39|1994||190|69|||
Kasim Adams|DEF|60|77|186.549.942.421.302.132.786|1995||190|16|||
Víctor Camarasa|MED|54|78|523.142.197.66.243.723.978|1994||183||||
Youssef Aït Bennasser|MED|102|79|19.587.759.763.156.30.769.486|1996||184|24|58|34|
Adam Buksa|AVA|126|78|515.944.685.607.521.84.566.871.549|1996||191|25||25|
Júnior Alonso|DEF|122|76|530.203.150.112.494.108|1993||185|77||17|
Marlon (1995)|DEF|16|80|358.127.612.781.788.580.500|1995||185|||36|
Youssouf Koné|DEF|100|77|530.820.541.283.411.862.4.708|1995||174|17||17|
Samuel Gigot|DEF|58|76|5.470.465.809.553.510|1993||187|||46.48|
Marco Richter|MED|2|77|115.418.548.408|1997||176||||
Marin Pongracic|DEF|40|82|1.767.933.157.513.356|1997||193|24|2||
Carles Pérez|AVA|54|79|127.737.203.379.90.386|1998||172|||31.41.43|D
Iñaki Peña|GR|54|83|371.127.283.654|1999||185|||3.27.43|
Ignacio Pussetto|AVA|4|74|427.871.921.768.865.438|1995||180||||D
Conan Ledesma|GR|4|73|738.245.734|1993||186||||
Jonathan Calleri|AVA|4|76|150.834.925.507.66.291.638.1139|1993||179||||
Florian Müller|GR|2|76|548.365.298|1997||190||||
Jorge Meré|DEF|54|78|813.231.77.555.245.669|1997||182||||
Dejan Ljubicic|MED|165|78|718.231.277.782|1997||187|9|||
Boschilia|MED|16|77|834.587.822.600.235.1024.443|1996||172|||4.34|
Andoni Gorosabel|DEF|54|77|725.66.101.291|1996||174|1|||
Xeka|MED|127|75|748.163.530.266.731.59.292|1994||186|||4.17.32|
Filip Benkovic|DEF|40|79|277.518.204.168.197.625.871.278.856.14|1997||194|1|||
Amir Hadziahmetovic|MED|21|78|492.141.180.426.538.1001|1997||179|37|43||
Thiago Maia|MED|16|78|777.530.357.443|1997||179|||17|
Javi Ontiveros|AVA|54|74|586.905.754.105.190.245.638.886|1997||172||||E
Patrick Berg|MED|116|76|152.521|1997||178|52|||
Karlan Grant|AVA|76|74|213.425.924.1176.197|1997||183||||
Dominik Greif|GR|52|78|549.541.1175|1997||197|8||41|
Nikola Moro|MED|40|78|277.276.154|1998||185|10|||
Paul Bernardoni|GR|58|77|862.156.223.622.81.763.492.943.75|1997||190||||
Jean-Victor Makengo|MED|58|75|759.612.854.871.319|1998||177||||
Yann Karamoh|AVA|58|78|759.440.156.663.478.848.578.325.768|1998||185||39|7.21|E
Marvelous Nakamba|MED|162|80|19.907.224.99.539.655.789|1994||178|40|||
Mama Baldé|AVA|70|63|265.266.862.541.818|1997||181|39|||D
Luis Abram|DEF|125|75|917.390.185.108.1299|1996||184|47|||
Franco Cristaldo|MED|4|74|150.283.719.254.773.206.427.395.182|1996||170||||
Chiquinho (1995)|MED|127|73|520.592.27.140.582.163.385.632|1995||174|||7.18.30.46|
Toma Bašić|MED|40|73|405.156.510.764.895|1996||189|2||48|
Linton Maina|MED|2|74|231|1999||173||||E
Senne Lynen|MED|20|75|224.838.875.923|1999||185||||
Pierre Kunde|MED|24|80|104.390.548.632.898.113|1995||181|41|||
Stephy Mavididi|AVA|76|81|93.213.695.463.460.266.578.518.921|1998||182|2||15.48|E
Maduka Okoye|GR|115|75|807.921.871.302|1999||198|21|2||
Hamza Choudhury|MED|10|80|177.518.921.790|1997||178|13|76|44|
Diego Conde|GR|54|73|104.186.379.905.110.142|1998||188|||51|
Axel Tuanzebe|DEF|129|81|552.99.601.825.447.175.15|1997||185|19||31.54|
Sebastian Walukiewicz|DEF|126|74|685.196.285.848.781|2000||188|10||25.44|
Jonathan Cafu|AVA|16|69|149.689.834.538.156.294.44.1338.234|1991||173|||55|D
Romain Del Castillo|AVA|58|75|541.622.731.818.638|1996||172||||D
Frédéric Guilbert|DEF|58|73|759.156.99.293.513.600|1994||178||||
Shamar Nicholson|AVA|85|74|702.809.223.226.973|1997||192|62|||
M'Bala Nzola|AVA|3|64|27.199.857.810.356.521.681.781.196|1996||185|15|||
Jordan|AVA|45|76|820.502.731.942.874.158.847.394|1996||190|9|||
Sergio Akieme|DEF|54|74|719.72.820|1997||175||||
Mounir Chouiar|AVA|102|74|521.266.938.131.484.538.75.338|1999||180|2|58||E
Rúben Vinagre|DEF|127|78|587.934.632.345.812.299.426.416.517|1999||174|||18.34.39.47|
Florentino|MED|127|79|140.587.379.175.447|1999||183||3|7.18.30.31|
Fernando Calero|DEF|54|77|105.887.886.291.586|1995||184||||
Bright Osayi-Samuel|DEF|115|78|147.698.351.145|1997||175|37||30.31.55|D
Jurgen Ekkelenkamp|MED|124|78|32.418.744.871|2000||188||||
Berke Özer|GR|152|77|351.473.690.301.953.530|2000||190|2||55|
Mateo Cassierra|AVA|33|75|260.32.312.710.120.342.947.112|1997||186|3|||
Bernardo (1995)|DEF|16|77|689.767.318.705.166.898.421|1995||186||||
José Manuel Arnáiz|AVA|54|81|886.887.127.186.638.390|1995||172|||3|E
Andreas Hanche-Olsen|DEF|116|72|465.548.217.1053|1997||185|22|||
Myziane Maolida|AVA|34|76|541.612.418.820.419.49|1999||180|20|58||E
Kristijan Jakic|MED|40|76|592.591.277.281.115.642|1997||181|19||59|
Ismail Jakobs|DEF|135|79|231.587.371|1999||184|34|2||
Romário Baró|MED|127|76|325.292.200.132.714|2000||180||70|7.52|
Matías Vargas|AVA|4|75|917.291.29.41.383|1997||168|1||49|E
Michael Folorunsho|MED|84|80|601.128.729.416.356.196.580|1998||190|2||6.11.21|
Pierre Lees-Melou|MED|58|74|266.612.616.818.662|1993||185||||
Riccardo Sottil|AVA|84|76|356.674.196.7.513|1999||180|||52|E
Sam Lammers|AVA|124|76|648.414.100.281.285.768.717.882.334|1997||191|||59|
César Montes|DEF|111|76|577.291.72.535|1997||191|71|||
Auston Trusty|DEF|45|78|678.229.93.145.790.204.1114|1998||191|14||16.42|
Chiedozie Ogbene|AVA|78|75|164.742.539.447.790.1090.983|1997||181|38|115||D
Batista Mendy|MED|58|73|600.81.856.787|2000||191||||
Javi Montero|DEF|54|79|104.110.262.141.408.92.186.586.709|1999||185|||51|
Rémi Oudin|MED|58|74|820.156.513.768|1996||185||||D
Nikolas Nartey|MED|43|76|231.298.762.1261|2000||183|2|||
Rogério|DEF|16|79|781.463.933|1998||178||||
Edgar González|DEF|54|73|143.142.723.72.405|1997||193|1|||
Rabbi Matondo|AVA|123|79|825.207.717.757.419.782|2000||175|15|76||E
Javi Puado|AVA|54|79|291.779|1998||177|3|||E
Rodrigo Becão|DEF|16|80|279.194.7.871.351.484|1996||191|||31|
Lucas Veríssimo|DEF|16|78|777.140.234.39.972|1995||189|2||7.28.30|
Brenner|AVA|16|74|834.358.221.871.892|2000||175||||
Giorgi Chakvetadze|MED|61|76|465.408.921.1016.1175.871|1999||183|43|||E
Keinan Davis|AVA|76|75|99.617.921.871|1998||189||||
David Okereke|AVA|115|76|810.224.895.238.848.374.139|1997||181||||
Ragnar Ache|AVA|2|79|807.281.394.0.231|1998||183|||59|
Uros Racic|MED|145|77|294.888.189.345.163.781.924.90|1998||193|13|||
Veljko Birmancevic|MED|145|77|665.711.244.550.854.806.379.352|1998||179|17|||E
George Hirst|AVA|51|75|625.518.742.692.146.447.789.825|1999||191|10|76||
Ghislain Konan|DEF|39|76|20.908.820.52.42.174.380.934|1995||176|57||32.55|
Meschack Elia|AVA|129|78|942.600.65|1997||173|71|||
Samuel Kalu|AVA|115|75|465.156.921.509|1997||177|16|||D
Mark McKenzie|DEF|45|77|678.377.854.1114|1999||184|30||42|
Mateusz Bogusz|MED|126|74|516.500.185.423.1200|2001||177|5||17|
Toni Fruk|MED|40|77|356.403.404|2001||174|7|||
Tommy Doyle|MED|76|79|408.197.790.551.934.145|2001||172|||26.55|
Luiz Araújo|AVA|16|77|834.530.108.357.395.570|1996||175|||4.17.34|D
Santiago Bueno|DEF|157|82|386.934.77|1998||190|8||17.55|
Daniel Boloca|MED|84|66|366.781|1998||188|1|||
Óscar Melendo|AVA|54|77|291.390.245|1997||167|1|||D
Joseph Okumu|DEF|128|74|284.465.820.1071|1997||193|20|||
Gabriel Strefezza|AVA|16|74|760.461.238.513.232.632.663.652|1997||168||||D
Marco Brescianini|MED|84|74|7.580.366.100.356|2000||191|2|||
Eddie Salcedo|AVA|84|76|378.440.416.810.128.623.978.745|2001||178|||21|
Caleb Okoli|DEF|84|74|100.760.238.366.518|2001||191||||
Juan Brunetta|MED|4|71|95.138.388.663.778.843|1997||178||||
Santiago Cáseres|MED|4|73|905.77.917|1997||177||||
Cristian Cásseres Jr.|MED|159|74|608.854|2000||176|50|||
Vitinho|DEF|16|74|242.207.175.159|1999||175|2||11|
Jan Thielmann|AVA|2|75|231|2002||178||||D
Alexandre Penetra|DEF|127|72|345.22.956|2001||186||||
Félix Correia|AVA|127|74|463.460.663.554.380.530.551.787|2001||178|||26|E
Christos Mandas|GR|63|71|113.623.510.160|2001||189|3||48|
David Strelec|AVA|52|77|810.729.565.1175|2001||185|43|||
Gustaf Lagerbielke|DEF|142|71|915.284.256.204.334.163.14|2000||193|15|||
Lorenzo Colombo|AVA|84|78|7.238.760.513.580.285.378|2002||183|||41.52|
Ibrahima Niane|AVA|135|75|400.323.81|1999||187||||
Benjamín Rollheiser|AVA|4|73|734.296.140.777|2000||166|||18|D
Mattia Viti|DEF|84|74|285.612.781.356.768|2002||190||||
Víctor Gómez|DEF|54|76|291.188.586.163|2000||171||||
Antonio Blanco|MED|54|76|721.245.66.1348|2000||191|1||11|
Montassar Talbi|DEF|151|79|180.139.745.319.1095|1998||190|67|58||
Miguel Crespo|MED|127|74|163.292.351.719.131.48|1996||186||58|30.55|
Chidera Ejuke|AVA|115|75|916.414.194.418.744.787|1998||176|14|||E
Adrià Pedrosa|DEF|54|78|291.787.283.719|1998||172||||
Gianluca Busio|MED|45|74|476.895|2002||175|17||42|
Ryan Giles|DEF|76|76|934.793.236.742.197.146.565.539.426.1357|2000||183|||18.35.39|
Sergio Camello|AVA|54|77|104.110.188.719|2001||177|||51|
Simon Sohm|MED|143|74|338.663.356.154.895|2001||188|4|||
Aidan Morris|MED|45|62|230.565.1115|2001||175|14||42|
Julián Araujo|DEF|111|77|499.127.507.160.204|2001||175|19|45||
Vítor Tormena|DEF|16|74|380.690.163.494.395.834|1996||192||||
Largie Ramazani|MED|20|76|552.72.516.888.175|2001||167||||E
Luca Netz|DEF|2|75|418.158.617|2003||184||||
Valentin Mihăilă|AVA|132|78|877.663.100.180|2000||180|41|||E
Sergio Arribas|MED|54|75|721.72.1348|2001||172|||11.57|
Naouirou Ahamada|MED|58|75|460.298.243.731.15|2002||183||||D
Daniel Maldini|MED|84|82|7.810.285.580.100.510.196|2001||181|9||6.48|
Luca Jaquez|DEF|143|77|321.298|2003||187|5|||
José Juan Macías|AVA|111|74|527.219.379.778.865|1999||178|5|||
Brandon Soppy|DEF|58|74|731.871.100.848.509.782|2002||181||||
Fabiano Parisi|DEF|84|72|118.285.356.139|2000||178||||
Fernando (1999)|AVA|16|76|653.788.812.767.704|1999||176|||41|
Matej Kovar|GR|32|80|831.177.552.806.524.648|2000||183|24||5.56|
Kacper Kozlowski|MED|126|73|685.166.875.907.374|2003||177|8||25|
Nathanaël Mbuku|AVA|129|76|820.115.763.277.578.797|2002||170|26|58||E
Hyun-seok Hong|MED|37|74|873.501.465.548.600.1140.566|1999||177|16|||
Josh Doig|DEF|51|73|419.416.781.1056|2002||189|2|||
Lassine Sinayoko|AVA|100|75|15.662|1999||186|33|||
Mohamed Daramy|AVA|43|76|233.32.820|2002||180|13|||E
Hugo Souza|GR|16|76|357.214.234|1999||198|2||11.30|
Bright Arrey-Mbi|DEF|2|74|133.231.163|2003||187||24||
Andrej Ilic|AVA|145|73|602.455.916.530.874|2000||189|1|||
Johann Lepenant|MED|58|75|759.541.600|2002||176|||41|
Nicolai Remberg|MED|2|71|422.408|2000||187||||
Pep Chavarría|DEF|54|76|779.719.215|1998||174|||56|
Justin Njinmah|AVA|2|73|923.157.422|2000||184||||D
Eric Martel|MED|2|75|705.117.231.548|2002||188||||
Faris Moumbagna|AVA|24|72|495.835.152.553.238.1114|2000||185|8|||
Alfie Doughty|MED|76|73|213.825.197.539.568|1999||183||||
Iván Jaime|MED|54|74|105.345.325.888.579.507.586|2000||180|||52|D
Marcos Paulo|AVA|127|76|358.110.345.188.834.708.149.462|2001||186||16|51|E
Jens Castrop|MED|37|66|620.158|2003||178|8|2||
Manu Sánchez|DEF|54|79|104.110.638.203.66.523|2000||179|||3.43.51|
Robin Hranac|DEF|32|74|660.902.421|2000||190|20|||
Joris Chotard|MED|58|76|578.818|2001||179||||
Gorby|MED|58|66|163.668|2002||181||||
Saud Abdulhamid|DEF|7|79|46.45.737.521|1999||178|58||30.37.44|
Aurèle Amenda|DEF|143|77|942.281.236|2003||194|7|||
Martín Satriano|AVA|157|74|440.818.285.521.541.379|2001||187|1||17.41|
Abner|DEF|16|75|689.102.142.541|2000||181|4||11.41|
Tyrhys Dolan|AVA|76|76|695.146.291|2001||170||||D
Moustapha Mbow|DEF|135|73|820.622.706.662|2000||192|1|||
Dion Lopy|MED|135|75|820.72.46|2002||184|5||52|
Anton Kade|AVA|2|71|418.132.115|2004||179||||D
Gabriel Slonina|GR|45|75|217.215.466.129|2004||193|1||42.56|
Soumaïla Coulibaly|DEF|58|74|157.744.818.293.921|2003||191||||
Warren Bondo|MED|58|74|19.580.729.7.238|2003||177||||
Félix Lemaréchal|MED|58|73|587.818.207.293.224|2003||180||||
Bilal Nadir|MED|102|76|553.408.612|2003||172||58||
Mikayil Faye|DEF|135|73|127.731.238.620|2004||186|1|||
Tom Cannon|AVA|78|76|299.695.518.825.790|2002||180|7|76|43|
Kamory Doumbia|MED|100|74|820.818|2003||170|35|||
Noah Saviolo|AVA|129|71|908.856|2004||181||20||E
Sergi Cardona|DEF|54|75|384.507.905|1999||185|2|||
Juan Cabal|DEF|33|73|106.416.463|2001||186|3|||
Jacopo Fazzini|MED|84|75|285.356.196|2003||178||||
Etienne Green|GR|76|74|763.175.311|2000||192||||
Joel Chima Fujita|MED|86|75|844.940.797.817|2002||175|8|||
Freddie Potts|MED|76|74|936.692.925.224|2003||183|||35.39|
Manu Silva|MED|127|68|349.908.140|2001||189|||31.38|
Sinaly Diomandé|DEF|39|77|541.15|2001||184|10|||
Warmed Omari|DEF|34|74|731.541.408|2000||185|15|58|41|
David Da Costa|MED|127|74|521.691|2001||168||||D
Roberto Fernández|AVA|54|76|586.163.291.105|2002||183|1|||
Arijon Ibrahimovic|MED|2|80|133.366.510.415.115|2005||176|||5.53|
Cristian Volpato|MED|8|78|737.781|2003||187|4||31|D
Amin Sarr|AVA|142|63|550.572.414.541.933.416|2001||188|||41|
Jaouen Hadjam|DEF|5|75|662.600.942.166|2003||184|24|58||
Arouna Sangante|DEF|135|74|511.787|2002||189||||
Alidu Seidu|DEF|60|78|223.731.612|2000||173|25|||
Ayoube Amaimouni-Echghouyab|AVA|102|62|281|2004||178|4|54||D
Léo Scienza|MED|16|70|415.805|1998||175||||D
Clément Akpa|DEF|39|73|15.868.323|2001||181|2|58||
Felipe Loyola|MED|29|72|438.681.1233.227.1156|2000||180|23|||
Petar Ratkov|AVA|145|76|343.767.510.523|2003||193|3|||
Oumar Diakité|AVA|39|78|20.767.318.820.207.827|2003||182|32|||
Kosta Nedeljkovic|DEF|145|75|294.99.705.717|2005||184|14|||
Bénie Traoré|AVA|39|73|429.790.600.132.609|2002||172|2|||E
Nasser Djiga|DEF|18|75|132.622.294.934.717|2002||187|15||55|
Matteo Prati|MED|84|72|760.196.848.709.1282|2003||185|||44|
Simone Pafundi|MED|84|74|871.509.768|2006||166|1||37|D
Obed Vargas|MED|111|75|784.110.1025|2005||175|13|45||
Cuiabano|DEF|16|73|395.159.617.892|2003||179||||
Antoine Mendy|DEF|135|77|612|2004||187|7|58||
Hugo Álvarez|AVA|54|72|203|2003||180|||43|E
Amir Richardson|MED|102|77|511.820.356.233|2002||195|9|58||
Ethan Mbappé|AVA|58|81|647.530|2006||180|||4.36|D
Nelson Deossa|MED|33|73|296.459.106.649.577.142|2000||185||||
Federico Redondo|MED|4|75|89.442.283|2003||188||54||
Keisuke Goto|AVA|86|77|80.797.365.974|2005||191|6|||
Oliver Scarles|DEF|76|73|925|2005||180||76|35.39|
Lennon Miller|MED|51|74|583.871|2006||182|4|||
Sascha Britschgi|DEF|143|71|321.663|2006||182|4|||
Tom Watson|AVA|76|75|828.166.568.518|2006||190||||E
Gustavo Puerta|MED|33|75|524.620.426.709.632|2003||172|14||5.56|
Jahmai Simpson-Pusey|DEF|76|73|551.204.231|2005||187|||26|
Mario Martín|MED|54|76|721.886.379.1348|2004||177|||3.11.56|
Álvaro Rodríguez|AVA|157|75|721.379.283.160.1348|2004||193||54|3.11|
Pape Demba Diop|MED|135|72|949.293.620.854|2003||178||||
Nhoa Sangui|DEF|58|71|820.662|2006||177||||
Pablo García|AVA|54|74|143.142.709|2006||175||||D
Jacques Ekomié|DEF|59|71|156.81.935|2003||179|24|||
Tani Oluwaseyi|AVA|25|73|569.905|2000||188|31|115||
Reda Belahyane|MED|102|73|612.416.510|2004||169|1|58|48|
Niccolò Fortini|DEF|84|73|356.461.848|2006||185|1|||
Kauã Santos|GR|16|74|281|2003||196||||
Alysson|AVA|16|71|395.99|2006||182||16||D
Wesley (2005)|MED|16|77|234.52.725.242|2005||180|||30.55|E
Mathis Amougou|MED|58|74|763.215.293.854|2006||183||||
Oso|DEF|54|68|787.293.105|2003||183||||
Mario Dorgeles|MED|39|71|613.163|2004||177|4|39||
Mamadou Diakhon|AVA|58|73|820.224|2005||180|2|||E
Maroan Sannadi|AVA|102|65|66.101|2001||192|3|54||
Mathias de Amorim|MED|127|70|156.345|2004||174||58||
Dro Fernández|MED|54|79|127.647|2008||182|||3.4.27.36.58|
Luca Reggiani|DEF|84|73|157|2008||194|1|||
Deivid Washington|AVA|16|76|777.215.293|2005||185|||42|
Moïse Bombito|DEF|25|70|229.612|2000||190|23|||
Kojo Peprah Oppong|DEF|60|63|614.612.351|2004||185|8|||
Juma Bah|DEF|137|75|886.551.521.612.14.115.887|2006||195|9||26|
Yassir Zabiri|AVA|102|68|345.731.709|2005||177|1|||
Mariano Troilo|DEF|4|68|138.663|2003||190||||
Rémi Himbert|AVA|58|71|541|2008||178|||41|E
Juan Rodríguez (2005)|DEF|157|70|677.196.967|2005||190|2|157||
Adrian Lahdo|MED|142|62|410.232|2007||179||||
Kauã Prates|DEF|16|73|242.157|2008||184||16|34|
Believe Munongo|MED|58|71|323|2009||191||||
Rui Jorge|DEF|127|81|325.732.812.120|1973||170|45||7.25.32.50|
Anderson Polga|DEF|16|80|395.812.234|1979||183|11||7.25.32.40.60|
Jaime Pacheco|MED|127|80|325.812.909.668.163.732|1958||170|26||7.58|
Paulo Assunção|MED|16|80|653.597.325.110.834.262.522.12|1980||173|||7.25.28.50.51.59|
Martin Stranzl|DEF|165|81|1.298.809.158|1980||190|56|||
Manuel Friedrich|DEF|2|81|548.923.524.157|1979||189|9||29.33|
Emanuel Pogatetz|DEF|165|80|827.524.809.565.933.925.620.230.874.1170.392.501|1983||190|61|||
Mike Hanke|AVA|2|81|933.158.365.782|1983||185|13||29|
Patrick Owomoyela|DEF|2|80|899.750.91.923.157.408|1979||187|11||5.33|
Paul Scharner|MED|165|79|117.767.757.929.924.408|1980||191|40||45|
Titus Bramble|DEF|76|80|447.610.929.828.1331|1981||185|||45|
Ian Harte|MED|78|81|516.523.828.147.198.720.160|1977||175|64|||
Chris Baird|MED|79|82|805.920.921.367.720.175.924.263|1982||179|79|||
Aaron Hunt|MED|2|80|923.933.408|1986||182|3||29|
Niklas Moisander|DEF|57|82|32.645.22.768.923.550|1985||183|62||54|
Sylvain Monsoreau|DEF|58|75|330.541.587.763.862|1981||186|||4|
Ariza Makukula|AVA|127|76|908.186.600.886.787.384.554.140.155.486.909.623.1171|1981||192|5|129|30.50.59|
Giovanni Pasquale|DEF|84|78|440.794.663.18.871.848|1982||181|||6.37|
Ferdinando Coppola|GR|84|79|601.154.97.728.729.679.7.100.794.848.416.737|1978||188|||6.11.19.21.58|
Giuseppe Sculli|AVA|84|80|463.241.575.218.165.378.510.674.1314|1981||178|||6.11.19.24|E
Luca Castellazzi|GR|84|79|580.890.650.674.165.729.201.768.440.848|1975||192|||43.44|
Kalu Uche|AVA|115|80|291.930.156.72.606.484.57.523.1327.1335|1982||179|40||42|
Gabriel Tamas|DEF|132|81|308.371.809.203.15.924.191.270.921.339.197.676.1214.326.1215.863|1983||188|67|||
Daniele Gastaldello|DEF|84|79|650.463.218.241.794.768.154.165|1983||185|1||6|
Javier Pinola|DEF|4|78|104.110.710.620.738.150.734|1983||181|2|||
David Navarro|DEF|54|79|888.549.606.523.9|1980||188|||3.43.44.59|
Daniel Aranzubia|GR|54|80|101.144.262.110.184|1979||186|1||3.51|
Albano Bizzarri|GR|4|78|710.721.886.384.201.510.378.218.674.871.359.673|1977||193|||23.58|
Mario Abrante|DEF|54|77|104.886.127.379.142.779.772|1982||178||||
Marcel Schäfer|DEF|2|79|1.933|1984||184|9||5.29|
Gustavo Munúa|GR|157|79|598.262.586.523.356|1978||189|21|||
Sejad Salihovic|MED|21|80|418.421.408.331|1984||182|47|||
Michael Turner|DEF|76|78|213.526.164.426.828.616.367.789|1983||193||||
Jaroslav Drobny|GR|32|79|179.656.367.10.447.898.418.408.923.302|1979||192|7|||
Steve Sidwell|MED|76|81|93.164.166.720.215.99.367.825.1354|1982||178|||2.15|
Quim|GR|127|81|163.140.265|1975||182|32||7.25.28.30.32.34.50|
José Nunes|DEF|127|75|163.765.380.549|1977||181|||28|
Ángel López|DEF|54|79|507.203.905.142|1981||180|5|||
Borja Oubiña|MED|54|78|203.145|1982||180|2||36|
Phil Bardsley|DEF|51|80|552.744.175.717.99.790.828.825.824|1985||180|13|76|2.10.58|
Cesare Natali|DEF|84|77|100.580.154.871.848.356.781|1979||191||||
Albert Meyong|AVA|24|76|909.120.523.67.163.1282|1980||184|12||30|
Hérita Ilunga|DEF|129|78|731.763.854.925.270.867|1982||180|32|||
Derek Boateng|MED|60|80|654.623.14.231.379.269.367.719.753|1983||183|47||25|
Curtis Davies|DEF|137|81|539.924.99.518.145.426.263.216|1985||188|3|76|38|
Christian Gentner|MED|2|80|298.933.874.321|1985||189|5||5.29|
Marco Storari|GR|84|81|673.601.7.523.196.356.768.463.1314|1977||187|||6.11.21|
Dennis Aogo|DEF|2|81|365.408.298.782|1987||184|12||29|
Dusan Basta|DEF|160|80|294.456.871.513.510|1984||183|18|145||D
Boško Janković|AVA|145|81|294.456.549.652.378.416|1984||183|31|||D
Willy Caballero|GR|4|83|150.283.95.586.551.215.805|1981||186|5||21.26.48.49.59|
Gelson Fernandes|MED|143|83|329.551.763.218.518.871.812.365.731.281|1986||183|67|23|28|
Jussiê|AVA|16|78|242.483.521.156.62|1983||181||||
Christian Terlizzi|DEF|84|75|209.652.768.201.890.674.794.857.1065|1979||195|1||51|
Daniele Mannini|AVA|84|75|681.165.601.768.794.513|1983||183||||D
Giulio Migliaccio|MED|84|79|128.841.100.652.356.1121|1981||180||||
Hugo Campagnaro|DEF|4|83|679.768.601.440.674|1980||181|17||37|
Andrea Cossu|MED|84|78|416.196.1295|1980||170|2|||
Abdoulay Konko|DEF|58|81|463.241.794.378.787.510.100|1984||182|||6.19|
Antonio Mirante|GR|84|80|463.241.794.768.663.154.737.7|1983||194|||6.19.24.41.44|
Francesco Modesto|DEF|84|74|652.97.729.378.154.663.674.650.241.895|1982||177||||D
Loïc Perrin|DEF|58|78|763|1985||180||||
Anders Lindegaard|GR|43|81|626.24.552.924.695.175.1100|1984||193|5||2.10.54|
Benoît Costil|GR|58|79|759.193.731.156.15.530.764|1987||188|1||24.41|
Túlio de Melo|AVA|16|79|112.512.652.530.950.211.886.811.23.119|1985||193|||4|
Riki|AVA|54|79|262.390.379.1348.1347|1980||187||||
Barreto|AVA|16|77|858.871.128.848.895|1985||171|||21|
Gianluca Curci|GR|84|79|737.794.768.154.548.410.1152|1985||191|||36|
Jonas Olsson|DEF|142|80|589.924.268.929.1101|1983||193|25|||
Maxi López|AVA|4|81|734.127.549.395.201.7.768.218.848.871.892.241.1353|1984||186|||3.51.58|
Óscar Serrano|AVA|54|76|291.709.523.66|1981||175|7||22|D
Danijel Subasic|GR|40|83|405.587|1984||192|44||4.34.44|
Francisco Rodríguez|DEF|111|81|219.648.298.77.185|1981||191|108|||
Chory Castro|AVA|157|79|598.549.725.586.734|1984||176|5|||E
Julien Féret|MED|58|75|210.820.19.731.759.15|1982||187|1|||
Mile Jedinak|MED|8|83|595.205.376.84.243.99|1984||191|79|||
Nedum Onuoha|DEF|76|80|551.828.698.766|1986||188||115|2.37|
Ryan Nelsen|DEF|118|81|247.146.853.698|1977||185|49|||
Ibson|MED|16|78|357.325.809.777.234.811.154.569.446|1983||177|||7.28|
Paulinho (1986)|AVA|16|74|462.18.38.238|1986||176||||
Zlatko Junuzovic|MED|165|79|117.923.392.767|1987||172|55|21||
Silvestre Varela|AVA|127|83|812.200.909.295.325.924.663.486.120|1985||180|32||7.12.25.28.32.35.39.40.41.55.59|E
Mark Noble|MED|76|80|925.447.426|1987||180||||
Pedro Geromel|DEF|16|79|653.214.908.231.549.395|1985||190|2||50|
Luca Cigarini|MED|84|79|663.100.601.787.768.196.241.728.1353|1986||175|||44|
Tom Heaton|GR|76|84|552.831.744.197.698.936.168.175.99|1986||188|3||2.10.47.58|
Srdjan Lakic|AVA|40|77|418.417.0.933.421.281.750|1983||186||||
Lasse Schöne|MED|43|83|414.253.589.32.378|1986||178|51|||
Toño|GR|54|75|430.709.390.283.719|1979||182||||
Andrea Consigli|GR|84|79|100.781.1353|1987||189||||
Craig Gardner|MED|76|80|99.145.828.924|1986||178||||
Marc Torrejón|DEF|54|76|291.709.0.365.105.874|1986||187|||42|
Daniel Caligiuri|AVA|2|80|365.933.115.782|1988||182||||D
Juan Pablo Carrizo|GR|4|82|734.510.779.201.440.577|1984||189|12||37|
Borna Barisic|DEF|40|79|594.277.592.717.856.186|1992||186|41|||
Augusto Fernández|MED|4|82|734.763.917.203.110.245|1986||178|16||36.51|
Ivan Strinic|DEF|40|82|512.405.269.601.768.7|1987||186|49||48|
Mauro Boselli|AVA|4|79|150.296.929.378.652.527.234.105|1985||182|4||45|
James McArthur|MED|51|80|409.929.243|1987||178|32||45|
Havard Nordtveit|DEF|116|81|412.93.531.620.158.925.421.367|1990||186|52||15|
Sven Kums|MED|20|76|80.529.470.414.949.465.921.871|1988||176||||
Jelle Vossen|AVA|20|77|377.207.565.175.224.949.135|1989||180|12|||
André Hahn|AVA|2|74|115.158.408.1237|1990||185|1||29|D
Clément Chantôme|MED|58|80|647.854.156.731.521.727|1987||179|1||4.11.24|
Erik Pieters|DEF|124|81|882.648.825.75.175.924.539.263|1988||184|18||54|
Jorge Fucile|DEF|157|80|325.777.598.307.1062|1984||177|49||7.12.28.41.55.59|
Juan Albín|MED|157|77|598.379.291.676.255.308.633.1160.1300|1986||179|||42|D
Wayne Hennessey|GR|123|83|168.934.824.939.243.175.617|1987||196|109||39|
Sammir|MED|40|79|102.353.667.833.277.379.1183.592.811.976|1987||178|7|16||
Nenê|AVA|16|77|242.446.597.196.416.810.128.582.520.904.21|1983||183||||
Sotiris Ninis|MED|63|80|654.663.642.702.471.912.643.488.1045|1990||173|33|1|25.28.32|D
Fagner|DEF|16|79|234.280.648.892.933.242|1989||168|10||34.55|
William Vainqueur|MED|58|76|600.822.276.737.553.84.587.854|1988||180|||34|
Roberto Rosales|DEF|159|80|465.334.586.291.186.13.811.975|1988||174|96|||
Rickie Lambert|AVA|76|82|147.824.169.805.532.924.197.1136|1982||187|11||42|
Sebastian Jung|DEF|2|81|281.933.479|1990||179|1||29|
Carlos Sánchez|MED|33|82|252.734.885.283.99.356.291.925.921.771.130.437|1986||182|88|||
Mikel Rico|MED|54|79|754.390.101.307.184|1984||179|4|||
Ángel Rodríguez|AVA|54|78|189.283.523.753.779.379.549.181.190.1348|1987||172||||
Bruno Saltor|DEF|54|78|384.291.72.888.166|1980||181||||
Albert Crusat|AVA|54|76|291.719.72.929|1982||165|||45|E
Benjamin Hübner|DEF|2|77|315.421|1989||193||||
Fabiano (1988)|GR|16|74|834.79.629.325.351.633|1988||197|8||7.32.35.39.41.52.55|
Tolgay Arslan|MED|2|78|408.141.351.871.557.775.1368|1990||179||||
Jonathan|DEF|16|78|242.777.440.663.358.102|1986||170|||37.44|
John Fleck|MED|51|77|717.147.236.790.146.1245|1991||170|5|||
Ciprian Tatarusanu|GR|132|82|339.356.600.541.7.955|1986||198|74||6.44|
Nordin Amrabat|AVA|102|80|71.884.648.486.371.586.921.186.52.12.426.882.957|1987||169|64|124|37.38.46|D
Marco Sau|AVA|84|76|196.359.461.768.139|1987||169|1|||
Javi Fuego|MED|54|79|813.523.719.888.291.905|1984||181|||39|
Fahid Ben Khalfallah|AVA|151|75|75.819.81.759.885.156.862.556.167|1982||174|14|58||D
Jean-Armel Kana-Biyik|DEF|24|76|511.731.854.486.374.323|1989||180|6|58||
Iván Marcano|DEF|54|79|709.905.379.632.745.325.142.737.1301|1987||189|||7.32.35.39.52|
Diego Castro|AVA|54|76|586.813.379.672.105|1982||174|2|||E
Tobias Strobl|MED|2|77|421.231.158.115|1990||186||||
Julian Schieber|AVA|2|80|298.620.157.418.115|1989||186|||33|
Craig Cathcart|DEF|79|83|744.552.684.921.147.470|1989||188|73||2.10.38.58|
Fabián Orellana|AVA|29|80|871.390.203.888.753.886.1061.1157|1986||169|44||17.36|D
James Tomkins|DEF|76|80|925.263.243|1989||190||||
Jack Colback|MED|76|80|828.447.610.617.698|1989||176|||43|
Conor Hourihane|MED|78|77|828.447.684.129.99.830.790.263|1991||181|36|||
Neil Etheridge|GR|56|79|367.213.169.239.628.920.197.145|1990||191|82|76||
Ryan Mason|MED|76|80|853.939.270.568.319.831.160.426|1991||175|1||12.38.42|
Fábio|DEF|16|81|358.552.698.197.565.600.395|1990||172|2||2.10|
Mohammed Abdellaoue|AVA|116|77|916.298|1985||182|33|||
Roberto Torres|MED|54|76|638.384.181|1989||178|5|||
Leroy Fer|MED|124|82|354.334.616.698.830.65.51|1990||188|11||54|
Franck Tabanou|DEF|58|76|854.763.830.390.398|1989||178||||D
Neil Taylor|DEF|123|82|935.830.99.565|1989||176|43|||
Borja García|MED|54|76|719.246.386.754.1348|1990||175|||57|
Roman Zozulya|AVA|153|79|275.269.142.719.67.190|1989||176|33|||
Mohamed Diamé|MED|135|81|719.929.925.426.610.190.964.521|1987||185|31|58|43.45|
Pedro Mendes|DEF|127|77|812.724.786.721.663.781.731.578.295.1168.349.1348|1990||187|1|143|3.25.28.31.40|
Davide Faraoni|DEF|84|76|440.871.921.673.618.241.416.356.674|1991||180|||44|
Elias|MED|16|79|621.689.234.110.812.357.279.112|1985||173|35||28.30.34.50|
Felipe Pardo|AVA|33|75|260.436.163.632.600.845.649.733.70|1990||178|3||28.38.40.52|D
Alfred N'Diaye|MED|135|76|19.176.290.828.142.905.426.934.60.586|1990||188|28|58|38.39|
Lukasz Skorupski|GR|126|81|401.737.285.154|1991||188|20||25|
Celso Borges|MED|38|81|364.14.262.402.1165|1988||186|170|||
André Almeida (1990)|DEF|127|77|120.140.519|1990||186|8||7.18.25.30.40.46|
Sílvio|DEF|127|74|732.163.110.262.140.909.908.904.934|1987||178|8||7.30.40.46.51.59|
Francesco Caputo|AVA|84|74|128.764.794.285.781.768|1987||181|2||21.37|
Fabián Rinaudo|MED|4|76|382.812.201.738|1987||174|4||28.34|
Álex Fernández|MED|54|77|721.291.404.720.283.245.1348|1992||180|||31|
Iván Marcone|MED|4|71|95.506.185.150.283.438.1369|1990||184|1||49|
Frederik Sörensen|DEF|43|79|540.463.154.416.231.165.674.841.942|1992||193|1||6.21|
Ja-cheol Koo|MED|37|81|457.933.115.548.43|1989||183|76||40|
Víctor Ibarbo|AVA|33|80|106.196.737.921.654.183.1079.883|1990||188|15|||D
Leonardo Bittencourt|MED|2|78|157.231.421.923|1993||171|||33|
Muhamed Besic|MED|21|79|408.352.299.565.790.808.624|1992||177|47|2|11.38.45|
Erik Durm|DEF|2|82|157.425.281.0|1992||183|7||29.33.53.59.60|
Sergio Escudero|DEF|54|80|722.379.787.390.886.262.779.782|1989||176|||35.59|
Marko Livaja|AVA|40|80|405.440.320.209.100.745.285.507.12|1993||182|21||44|
Takashi Inui|AVA|86|83|940.208.898.281.753.142.66.791.906.974|1988||169|36|||E
Romain Alessandrini|AVA|58|75|223.731.553.499|1989||173|||17|D
Pelé (1991)|MED|70|79|120.378.7.94.629.137.140.668.349.732.587.345.617.720|1991||183|23|127|34.46|
Joel Robles|GR|54|80|104.110.719.929.299.142.516.55.292|1990||195|||45.51.59|
Sébastien Corchia|DEF|58|78|512.330.530.787.140.291.600.75.1346|1990||174|1||7.18.24.35.46|
Artjoms Rudnevs|AVA|91|80|514.408.231|1988||183|38|||
Lucas Castro|AVA|4|75|382.710.201.218.196.760.478.29.780.427.69|1989||182|||51|D
Yuya Osako|AVA|86|83|482.1.231.923.906|1990||182|57|||
Lorenzo Tonelli|DEF|84|79|285.601.768|1990||183|||11.44.48|
Massimo Bruno|AVA|20|76|702.80.705.767.176.470|1993||178||||D
Rubén Pérez|MED|54|78|104.110.262.379.142.283.848.390.186.654.488|1989||178|||46.51.59|
Juanpe|DEF|54|75|507.709.390.726.886.386.772|1991||190||||
Jordan Ferri|MED|58|78|541.622.578.768|1992||172||||
Alessandro Schöpf|MED|165|82|133.620.91.889.932.501.782|1994||178|35|||
Dominik Kohr|DEF|2|80|524.115.281.548.1329|1994||193||||
Craig Dawson|DEF|76|79|924.155.921.925.934|1990||188|||55|
Rômulo (1987)|MED|84|79|462.211.242.102.356.416.463.378.510.165|1987||178||16|6|
Wellington Nem|AVA|16|76|355.358.788.92.242.280.360.834|1992||165|3||41.50|D
Sam Clucas|MED|76|74|426.830.1245.983.1188.628.742.793.825|1990||178|1||38|
Jardel|DEF|16|75|280.777.450.292.629.140|1986||191|||7.18.30.46|
Luca Marrone|DEF|84|79|463.794.781.199.416.949.241.580.128.238|1990||186|||6.21|
Lisandro López (1989)|DEF|4|78|95.379.140.440.378.150.226.48.174.138.1015|1989||187|4||7.18.30.46|
Pontus Jansson|DEF|142|79|550.848.516.164|1991||194|27||17|
Florian Lejeune|DEF|58|77|316.905.818.386.551.753.610.66.719|1991||189|||43|
Matz Sels|GR|20|79|529.465.610.80.293.617|1992||188|13||39.43.45|
Nathaniel Chalobah|MED|76|81|921.215.617.565.175.601.720.367.213.789.924|1994||187|1|137|2.21.31.38.43.48|
Alexandru Maxim|MED|132|80|291.298.548.374.141.1177.1110|1990||178|55||42|
Julien De Sart|MED|20|75|822.565.263.949.470.465.57|1994||187||||
Kevin Lasagna|AVA|84|67|199.871.416.478.128.650|1992||186|7||37|
Sverrir Ingi Ingason|DEF|82|78|901.469.390.741.642.566.654|1993||188|66||9.43.46|
Marçal|DEF|16|78|397.851.597.140.375.398.541.934.159|1989||178|||18.39.46|
Paulo Oliveira|DEF|127|74|908.669.812.753.163.42|1992||187|1||25.30.38.46|
Anthony Limbombe|AVA|20|74|377.529.589.224.600.822.71.919|1994||182|12||45|E
Jordan Lukaku|DEF|20|79|80.472.510.744.688.30|1994||177|8||45.48|
Tomas Koubek|GR|32|78|424.806.804.731.115|1992||198|11|||
Tomas Kalas|DEF|32|80|795.215.907.231.565.367.168.782|1993||183|31||11.12.21.31.43.48.58|
Nikola Vukcevic|MED|109|74|163.523.964.1213|1991||184|48||9.32.41.52|
Aderllan Santos|DEF|16|74|860.163.888.834.280.36.732.21|1989||193|||28.32.52|
Adrien Trébel|MED|58|73|600.822.80.509.702|1991||170||||
Marvin Schwäbe|GR|2|77|421.899.274.172.231|1995||189||||
Marc Oliver Kempf|DEF|2|78|281.365.298.418.232|1995||185||||
Marc Stendera|MED|2|80|281.315.1230|1995||171||||
Gonzalo Melero|MED|54|74|688.754.523.72.186.1348.1347|1994||183|||57|
Connor Goldson|DEF|76|72|793.216.166.717.87.1222|1992||191||||
Jack Stephens|DEF|76|76|684.805.831.565.236.160|1994||185|||42|
Paddy McNair|DEF|79|81|552.828.565.770.924.426|1995||183|85||54|
Paul Dummett|DEF|123|81|610.816.198.1129.929|1991||185|5|76|43|
Stéphane Bahoken|AVA|24|75|612.816.293.81.484.486|1992||185|22|58||
Prince Gouano|DEF|58|77|511.463.100.707.732.155.375.908.75.1226|1993||186|||6.21|
Lucas Piazón|MED|16|83|215.586.907.281.720.367.218.732.163.159.21|1994||182|||18.21.31.43.48|D
Andraz Sporar|AVA|53|79|132.91.812.163.565.654.65.1043.1175|1994||180|69||7.46.47|
Wallace Oliveira|DEF|16|77|358.215.440.907.199.395.355|1994||174|||21.31|
Lucas Lima|DEF|16|74|443.659.159.389.92.600.36.131.1047.240|1991||178|||44.52|
Carlos Mané|AVA|70|78|812.298.874.732.486|1994||172|12|127|30.32.34.38|D
Bruno Varela|GR|23|79|886.140.909.32.908.44|1994||191|8|127|18.46|
Wesley Saïd|AVA|58|73|731.819.266.854.521.954|1995||171||||D
Callum Robinson|AVA|78|75|99.695.168.790.924.197|1995||178|38|76||
Nicolás López|AVA|157|78|598.737.871.416.390|1993||175||||
Carlos Gruezo|MED|49|79|438.298.250.115.756.503.778|1995||171|64|||
Cristian Ramírez|DEF|49|74|438.302.620.352.494.535|1994||171|22|||
Alan Ruiz|MED|4|76|382.771.395.228.812.69.95.92.811.295|1993||183|||30.32|D
Edgar Ié|DEF|70|79|127.137.120.530.600.856.354.131.308.349|1994||176|6||17.25|
Ryan Gauld|MED|51|76|273.812.909.265.346.419.889|1995||169|6||30.32.38|
Diego Rolán|AVA|157|79|156.586.262.186.66.317.677.255|1993||179|25|||
Simy|AVA|115|72|690.380.241.764.663.139.54|1992||198|4|||
Albian Ajeti|AVA|143|77|132.115.331.925.204.827.374.320|1997||183|11|||
Timon Wellenreuther|GR|2|76|479.549.80.354.782.933|1995||186|||13|
Alberto Grassi|MED|84|79|100.601.760.663.196.285.238|1995||183|||11.48|
Ander Capa|DEF|54|78|101.753.523|1992||176|5|||D
Alberto Cerri|AVA|84|80|663.463.416.196.760.674.673.232.285.764.209.979|1996||194|||44|
Caleb Ekuban|AVA|60|78|218.516.856.378.416|1994||182|13|84|17|
George Pușcaș|AVA|132|80|440.128.139.618.652.720.681.378.151.308|1996||184|46||37|
Samu García|AVA|54|76|586.905.186.745.523.105|1990||179||||D
Alexandru Mitriță|AVA|132|76|335.339.674.877.609.36.642.56.976|1995||167|26|||E
Dimitrios Pelkas|MED|63|74|642.909.351.426.131|1993||175|47||9.30.55|D
Lucas Torró|MED|54|76|430.723.638.281.721.1348|1994||188|||57|
Matheus Dória|DEF|16|78|159.553.834.390.938.778.109|1994||188|1||17.50|
Thomas Foket|DEF|20|75|465.472.820.80|1994||177|10||45|D
Almamy Touré|DEF|100|76|587.281.0.156|1996||182|1||4.34.44.59|
Paulo Otávio|DEF|16|75|933.59.102.235.315.501|1994||173|||37|
Léo Baptistão|AVA|16|79|719.110.142.905.291.777.72|1992||181|||3.51|D
Jean-Pierre Nsame|AVA|24|75|81.75.786.942.895.232.517.331.685|1993||188|4|||
Patrick Roberts|AVA|76|80|367.551.204.386.616.565.828.145.263.862|1997||167|||26|D
Morten Thorsby|MED|116|81|414.768.874.378.238.1053|1996||186|32||44|
Jaume Doménech|GR|54|71|905.427.888|1990||187||||
Zinedine Ferhat|MED|5|72|622.65.81.511|1993||180|14|||D
Kortney Hause|DEF|76|76|936.934.99.921.1190|1995||191|||39|
Grischa Prömel|MED|2|78|479.421.874.298|1995||180||||
Alexis Blin|MED|58|75|512.854.75.513.652|1996||184||||
Timo Hübers|DEF|2|75|231|1996||190||||
Florent Hadergjonaj|DEF|89|75|942.315.425.484.65|1994||182|40|143||
Luiz Phellype|AVA|16|67|822.292.136.349.668.812.776.623.333.192.792|1993||188|||38.47|
Matías Kranevitter|MED|4|81|734.110.787.947.577.478.710|1993||179|9||37.51|
Jaïro Riedewald|MED|124|81|32.243.744.790|1996||186|3|||
Antonio Barreca|DEF|84|74|848.222.196.587.610.378.356.513.650.768|1995||184|||34.43.44|
Pedro Chirivella|MED|54|78|532.387.600.654|1997||178|||33.43|
Pere Pons|MED|54|72|386.66.13|1993||177|2|||
Tarik Tissoudali|AVA|102|76|838.511.747.884.253.135.465.642|1993||175|17|124|13|D
Bartosz Kapustka|MED|126|81|237.518.365.625.517|1996||179|22||25.44|
Kevin Bonifazi|DEF|84|74|848.139.760.871.154.366.513.781.1118|1996||187||||
Christopher Martins|MED|94|76|541.862.942.809|1997||188|83||46|
Sergio Herrera|GR|54|75|188.66.754.638|1993||192||||
Brendan Chardonnet|DEF|58|72|818|1994||181||||
Philipp Köhn|GR|143|77|705.767.587.318.1159|1998||190||2||
Semi Ajayi|DEF|115|79|213.93.197.239.742.924.426.1280|1993||193|59|76|15|
Álex Granell|MED|54|68|245.386.1177.1080.536|1988||175|1|||
Iñigo Lekue|DEF|54|78|184.144.101|1993||180|1|||
Sergi Guardiola|AVA|54|74|9.726.31.722.246.379.886.719.245.978.390|1991||185||||
Filippo Romagna|DEF|84|76|463.618.165.196.781.728|1997||185||||
Wilson Manafá|DEF|127|62|136.891.690.325.390.755|1994||174|||7.52|D
Simone Bastoni|DEF|84|72|810.794.857.618.285.209|1996||181||||
Aurélio Buta|DEF|127|74|744.281.820.233.834|1997||172||3||
Chang-hoon Kwon|AVA|37|74|266.365.381.458.457|1994||174|43||40|D
Ui-jo Hwang|AVA|37|78|372.156.617.632.327.616.65|1992||184|62||39.40|
Eduard Löwen|MED|2|76|620.418.115.898.815.756|1997||188||||
Isaac Mbenza|AVA|20|72|885.822.578.425.75.700.702|1996||187||58||D
Filip Krovinovic|MED|40|73|732.140.924.617.405.395|1995||175|||7.18.30.46|
Antonio Puertas|AVA|54|72|726.72.390.753.67|1993||175||||D
Cristian Arango|AVA|33|68|286.567.265.847.500.649.766.756.106.140|1995||178|2||18.46|
Roger Assalé|AVA|39|75|942.186.266.923|1993||167|21|||
Nicolás Ibáñez|AVA|4|76|382.772.110.649.843.185|1994||179|||51|
Daniel-Kofi Kyereh|AVA|60|70|817.365.899|1996||179|18|||
Cristian Espinoza|AVA|4|77|427.66.905.886.150.756.603|1995||172||||D
Elvis Rexhbecaj|MED|2|77|933.231.898.115|1997||182|18|89||
Ianis Hagi|MED|132|80|335.356.377.717.66.65|1998||182|57|152||D
Birger Meling|DEF|116|73|739.622.731.233.1053|1994||173|39|||
Emiliano Rigoni|AVA|4|78|138.438.947.100.768.283.834.116.527|1993||180|2||37.44|D
Paul Jaeckel|DEF|2|74|933.394.874.278|1998||188||||
Moritz Nicolas|GR|2|75|158.874.899.735|1997||193||||
Adam Masina|DEF|102|78|154.921.871.848|1994||189|28|||
Joe Lolley|AVA|76|63|425.783.617.832.610|1992||178|1|||D
Jérémy Gélin|DEF|58|70|731.744.75.657.19|1997||182||||
Adrián Embarba|AVA|54|71|719.291.72|1992||173||||D
Samuel Bastien|MED|129|74|80.118.218.822.175.484.362|1996||177|8|20||
Hassane Kamara|DEF|39|73|502.820.867.612.921.871|1994||168|7|58||
Jean Butez|GR|58|72|530.585.744.232|1995||189|||17|
Jordan Hugill|AVA|76|68|695.925.565.197.1129.616.698.742.924|1992||183||||
Amer Gojak|MED|21|74|277.848.352.404|1997||184|35|||
Dimitrios Giannoulis|DEF|63|77|642.897.83.113.616.115|1995||175|34||9|
Ezequiel Ponce|AVA|4|80|611.737.390.530.12.809.283.423|1997||178|||17.46|
Tyler Roberts|AVA|123|78|924.920.516.698.145.1188.615.641.793|1999||180|20|76|17|
Toni Martínez|AVA|54|76|641.925.886.187.345.325.66|1997||180|||7.52|
Landry Dimata|AVA|20|77|472.933.80.291.589.769.651|1997||185||129||
Percy Tau|AVA|164|77|166.875.224.80.700|1994||170|52|||D
Otávio (1994)|MED|16|74|102.156.112.358|1994||176|||50|
Léo Duarte|DEF|16|78|357.7.131.112|1996||183||||
Jordan Lotomba|DEF|143|76|509.942.612.354.204|1998||177|8|143||
Toni Lato|DEF|54|79|888.648.638.549|1997||173||||
Flavius Daniliuc|DEF|165|76|612.764.767.416.132|2001||188|3|||
Arnaud Nordin|AVA|58|76|763.19.578.548.731|1998||170||||D
Filip Uremovic|DEF|40|74|277.745.790.418.405.485.1043|1997||184|6|||
Oliver Abildgaard|MED|43|74|23.745.204.416.232.681.768|1996||192|1|||
Karol Świderski|AVA|126|78|454.642.212.416.654.928|1997||184|55||9.25.43|
Amos Pieper|DEF|2|75|91.923|1998||192||||
Mërgim Vojvoda|DEF|89|80|822.797.585.848.232.871|1995||187|79|2||
Andrea Cistana|DEF|84|74|165.128.694.810|1997||187||||
Irvin Cardona|AVA|58|77|587.207.818.115.763.291|1997||185|11||4.34|D
Michel Vlap|MED|124|74|414.80.91.334.964|1997||189||||
Fiete Arp|AVA|2|79|408.133.422.626|2000||184|||27|
Erhan Masovic|DEF|145|72|244.224.6.898.911|1998||187|5|||
Nathan Broadhead|AVA|123|78|177.828.299.929.447.935|1998||178|20||11.38.43|E
Kelvin Amian|DEF|58|64|854.810.600|1998||180||||
Tahith Chong|MED|42|84|552.923.224.145.539.790|1999||185|12|||D
Matthieu Udol|DEF|58|73|323.706.521|1996||178||||
Xadas|MED|127|77|163.554.585.1137|1997||179|||9|
Conor Chaplin|MED|76|74|692.236.129.447.518|1997||168||||D
Federico Baschirotto|DEF|84|73|238.97.513|1996||184||||
Gaëtan Perrin|MED|58|75|541.868.15.494.530|1996||169||||D
Giulio Maggiore|MED|84|73|810.764.128|1998||187||||
Rick van Drongelen|DEF|124|76|807.408.874.471.769.1261.654|1998||185|||43|
Jorge Sánchez|DEF|111|79|778.77.32.325.185.642.109|1997||175|64||52|
Gautier Larsonneur|GR|58|75|818.885.763|1997||181||||
Domagoj Bradarić|DEF|40|76|405.530.764.416|1999||178|5||4|
Joseph Aidoo|DEF|60|76|410.377.203.886|1995||184|17||43|
Rafa Mujica|AVA|54|75|516.723.507.92.59|1998||183|||17.37|D
Pietro Pellegri|AVA|84|79|378.587.7.848.285|2001||188|1||6.34.37|
Pape Abou Cissé|DEF|135|78|4.632.763.29.954|1995||198|16|||
Moussa Wagué|DEF|135|77|466.127.612.642.403.83.657.977|1998||177|21||9|
Francis Guerrero|AVA|54|75|142.72.143|1996||185||||D
Nathaniel Phillips|DEF|76|80|532.298.160.204.197.263.924|1997||190|||13.33|
Ibrahima Sissoko|MED|100|75|818.293.898.600|1997||193|4|58||
Adryelson|DEF|16|76|811.62.159.541.80|1998||182|||18.41|
Selim Amallah|MED|102|78|585.822.886.888|1996||186|31|20||
Arnór Sigurdsson|MED|82|68|614.194.895.146.550|1999||177|39|||E
Gerzino Nyamsi|DEF|24|74|502.731.293.535|1997||195|2|58||
Matheus Reis|DEF|16|72|834.279.582.732.812.194|1995||184|||7.47|
Lyanco|DEF|16|79|834.848.154.805.43.112|1997||188||||
Santi Comesaña|MED|54|76|719.905|1996||184||||
Cédric Zesiger|DEF|143|74|606.391.942.933.115|1998||194|6|||
Fabien Centonze|DEF|58|74|950.223.521.323.600.416|1996||190||||
Gabriel Suazo|DEF|29|66|227.854.787|1997||178|46|||
Alberto Dossena|DEF|84|73|673.100.794.118.196.232|1998||188|||44|
Szymon Żurkowski|MED|126|79|401.356.285.810|1997||185|7|||
Noah Weißhaupt|AVA|2|71|365.817.517|2001||181||||E
Hjalmar Ekdal|DEF|142|77|170.410.798.268.175.312.1060.1208|1998||188|14|||
Gabriele Zappa|DEF|84|72|674.196.416.440|1999||187|||44|
Nadir Zortea|DEF|84|75|100.238.764.781.366.196.154|1999||186|||59|
Felix Agu|DEF|115|77|899.923|1999||180|1|2||
Filip Ugrinic|MED|143|74|321.310.942.888|1999||184|3|||
Andreaw Gravillon|DEF|64|78|440.139.674.781.97.319.820.848.29|1998||188|15|58|21|
Elisha Owusu|MED|60|77|541.330.465.15.121|1997||182|23|58||
Sam Surridge|AVA|76|75|160.939.628.830.825.617.603|1998||191||||
Mathieu Cafaro|MED|58|74|854.820.822.763.662.600|1997||178||||D
Yannik Engelhardt|MED|2|72|923.302.232.158.365|2001||184|1|||
Tom Krauß|MED|2|76|705.620.548.539.898.231.782|2001||182||||
Yan Valery|DEF|151|78|805.145.81.789.942|1999||180|26|58||
Peter Etebo|MED|115|74|349.507.825.379.371.921.90.376|1995||176|44|||
Teddy Teuma|MED|101|74|866.727.875.820.822.1120|1993||176|54|58||
Sikou Niakaté|DEF|100|74|885.398.323.163|1999||186|18|58||
Keven Schlotterbeck|DEF|2|75|365.874.898.115.805|1997||189||||
Hervé Koffi|GR|18|77|20.530.120.585.702.521.81.875|1996||183|76||17|
Yahia Fofana|GR|39|78|511.81.180|2000||194|39|58||
Vladyslav Supryaga|AVA|153|75|749.275.768.948.287.269|2000||182||||
Justin de Haas|DEF|124|72|592.345.888|2000||194||||
Omar Richards|DEF|76|77|720.133.617.632.732.90|1998||174|||5.39|
Vladan Kovacevic|GR|21|73|715.812.517.616|1998||192|||7.47|
Hans Nicolussi Caviglia|MED|84|68|460.673.663.764.463.895.356|2000||184|||48|
Rihito Yamamoto|MED|86|75|844.372.797.365|2001||179||||
John Victor|GR|16|74|777.443.886.159.617|1996||192|||28|
Tino Anjorin|MED|76|80|535.425.692.215.285.848.402|2001||185|||42.53.58|
Adam Idah|AVA|78|77|616.204.830|2001||190|44|||
Ardian Ismajli|DEF|1|79|405.810.285.848.1187|1996||187|52|145||
Kilian Fischer|DEF|2|71|620.933|2000||182||||
Nahuel Bustos|AVA|4|72|182.649.551.386.834.771.437.677|1998||176|||26|
Valentin Rosier|DEF|58|76|736.266.812.141.612.186.638|1996||175|||47|
Will Smallbone|MED|78|75|805.825.568.518|2000||173|15|76||
Juan Manuel Sanabria|DEF|157|77|104.779.110.772.766|2000||173|10|45|17.51|
Hamza Mendyl|DEF|102|79|530.266.374.625.90.782.912|1997||179|20||17|
Alejandro Catena|DEF|54|75|719.638.1032|1994||194||||
Dylan Bronn|DEF|151|77|210.465.323.764.786.1346|1995||185|53|58||
Junior Adamu|AVA|165|72|318.767.331.365.204.782|2001||183|10|115||
Lucas Robertone|MED|4|73|917.72|1997||169||||
Moritz Jenz|DEF|2|74|509.319.204.933.548.942.782|1999||190||||
Gustavo Assunção|MED|16|76|345.371.21.87|2000||178||||
Kjell Scherpen|GR|124|74|310.32.166.472.907.827.875.447|2000||204||||
Casper Tengstedt|AVA|43|75|566.6.739.140.416.354.854|2000||184|||7.18|D
Ander Guevara|MED|54|77|725.66|1997||180|2|||
Yukhym Konoplya|DEF|153|77|788.264.158|1999||180|27||41|
Léo Jabá|AVA|16|78|234.34.642.892.295|1998||178|||9|D
Noah Katterbach|DEF|2|76|231.132.408.278|2001||180||||
Zaydou Youssouf|MED|58|76|156.763.345.41|1999||182|11|||
Steven Alzate|MED|33|77|526.831.166.822.426.108|1998||177|7|76|20|
Marcos André|AVA|16|66|887.886.188.888.50|1996||184||||
Martín Aguirregabiria|DEF|54|75|66.345.307.779.188|1996||178|2|||
Ki-Jana Hoever|DEF|124|78|532.934.648.825.15.790.806|2002||180|||18.33.35.39.55|
Ludovit Reis|MED|124|77|312.899.408.224.923|2000||178||||
Franco Israel|GR|157|76|463.460.812.848|2000||190|3||7.17.47|
Jorge Cuenca|DEF|54|78|9.127.72.905.379.367|1999||189|||38|
Mujaid Sadick|DEF|54|74|262.377.719|2000||183||||
David Jurásek|DEF|32|76|573.802.140.421.141|2000||183|18||18.31|
Joe Gelhardt|MED|76|76|516.426.828.929|2002||179|||17|
Tomás Esteves|DEF|127|75|325.681.128.720|2002||180|||7.52|
Hassane Bandé|AVA|18|77|471.32.332.591.75.1017|1998||178|38|||E
Becir Omeragic|DEF|143|75|338.578.132|2002||187|7|||
Leonidas Stergiou|DEF|143|75|331.298.415|2002||181|6|||
Anthony Musaba|AVA|124|72|589.587.207.414.323.789.769.351.616|2000||182||||E
João Batxi|AVA|3|71|214.494|1998||175|3|127||D
Oliver Sørensen|MED|43|74|311.566.407.663.204|2002||180||||
Aihen Muñoz|DEF|54|77|725|1997||175|2||3|E
Walid Cheddira|AVA|102|78|663.128.366.601.291.781.513.118.979.987|1998||187|6|84|6.21|
Manu Vallejo|AVA|54|74|245.888.66.386.723.779.709|1997||167||||D
Fisayo Dele-Bashiru|MED|115|75|789.411.510|2001||176|19||48|
Ethan Laird|DEF|76|80|552.145.160.543.698.830|2001||177||||
Ignatius Ganago|AVA|24|76|612.521.600.607|1999||176|15|||
Eliot Matazo|MED|20|77|587.744.426|2002||170|||34|
Arthur Zagré|DEF|58|79|647.587.266.882.300|2001||168|3||4.34.53|
Giulian Biancone|DEF|58|78|587.207.862.617.632.80|2000||187|||34|
Han-Noah Massengo|MED|58|77|587.168.15.175.115|2001||178|||34|
Timothée Pembélé|DEF|58|77|647.156.828.511|2002||182|||4.42.53|
Tomas Suslov|MED|52|79|312.416|2002||173|48|||D
Billal Brahimi|AVA|5|75|512.820.81.612.818.797.777.295.565|2000||183|4|58||D
Stefano Turati|GR|84|74|781.729.366.580|2001||188||||
David Zima|DEF|32|76|802.848.795|2000||190|26|||
Osman Bukari|AVA|60|80|80.465.600.294.116.928|1998||170|18|||D
Tomás Tavares|DEF|127|76|140.66.346.132.809.501.21.931.554|2001||182|||18.30|
Shuto Machino|AVA|86|75|940.792.422.158|1999||185|15|||
Abdel Abqar|DEF|102|76|105.66.379.586|1999||188|3|||
Lewis O'Brien|MED|76|73|162.425.617.247.565.500.830.935|1998||173|||39|
Michel Adopo|MED|58|75|848.100.196|2000||187|||59|
Jeremy Sarmiento|AVA|49|78|166.924.447.175.238.565|2002||183|26|54||E
Dennis Cirkin|DEF|76|74|828.698|2002||182|3|78||
Javi López|DEF|54|75|66.725.723.354|2002||183||||
Adam Obert|DEF|52|79|196|2002||188|24||44|
Issa Soumaré|AVA|135|65|868.135.511.15.1218.731|2000||182|2|||E
Umut Tohumcu|MED|2|73|421.422.767|2004||175||||
Valentin Gendrey|DEF|58|73|75.513.421|2000||179||||
Roberto López|MED|54|75|725.188.189.186.978|2000||179||||
Nico Melamed|MED|54|76|291.72|2001||173||||E
Christopher Wooh|DEF|24|76|19.521.731.809|2001||191|25|58||
Ruben Kluivert|DEF|124|80|882.309.200.541|2001||187|||41|
Eiran Cashin|DEF|78|71|263.166.145.146|2001||184||76||
Marcus Pedersen|DEF|116|75|861.576.354.781.848.632|2000||184|37||13|
Kelvin Yeboah|AVA|84|70|918.827.378.115.578.822.569|2000||182||60||
Niels Nkounkou|DEF|58|75|299.822.197.763.281.848.553.612|2000||180|||11.12.43|
Himad Abdelli|MED|5|73|511.81.553|1999||185|10|58||
Marius Mouandilmadji|AVA|28|74|325.265.706.769.632|1998||190|27||52|
Max Rosenfelder|DEF|2|73|365|2003||186||||
William Bøving|AVA|43|73|233.827.548.620|2003||176||||
Matías Arezo|AVA|157|71|734.390.677.395|2002||180|3||17|
Fran Pérez|AVA|54|73|888.719|2002||176||||D
Raúl Moro|AVA|54|77|510.841.723.886.32.638|2002||169|||48|E
Gabriel Silva (2002)|AVA|16|70|653.776.163|2002||177|||9|E
Filip Stevanovic|AVA|145|75|665.414.776.707.536.551|2002||177|||26|E
Iván Romero|AVA|54|73|787.189.523|2001||172|||35|
Rodri Sánchez|MED|54|75|143.142.38|2000||175||||D
Nicolò Bertola|DEF|84|71|810.871|2003||192||||
Étienne Youté Kinkoué|DEF|58|71|511.509|2002||196||||
Rav van den Berg|DEF|124|72|645.565.231|2004||190||||
Juan Larios|DEF|54|70|805.779.978|2004||170||||
Ángel Alarcón|AVA|54|80|127.325.882|2004||181|||3.7|E
Nicolás Capaldo|DEF|4|77|150.767.408|1998||177|1|||
Adam Karabec|MED|32|74|806.408.541|2003||187|7||41|D
Rassoul Ndiaye|MED|135|72|330.511|2001||179|3|58||
Jacob Ondrejka|MED|142|73|284.744.663.312.1101|2002||180|1|||E
Zito Luvumbo|AVA|3|70|232.196.549|2002||171|34||44|D
Maestro|MED|3|71|295.29.65|2003||173|27|||
Matheus Martins|AVA|16|74|358.871.921.159|2003||179||||E
Leonardo Lelo|DEF|127|68|629.200.163.72.690|2000||175||||
João Victor|DEF|16|75|234.111.140.600.892.194|1998||187|||55|
Bertuğ Yıldırım|AVA|152|73|411.84.731.379.131|2002||191|5|||
Isidro Pitta|AVA|122|75|754.462.704.1006.1015|1999||183|6|||
Samuel Edozie|AVA|76|74|805.80.551|2003||179|||26|E
Younes Ebnoutalib|AVA|2|68|673.281|2003||191|2|||
Romaine Mundle|AVA|76|74|822.828|2003||180||||E
Kacper Urbański|MED|126|77|515.154.580.517.401|2004||183|14|||
Isaak Touré|DEF|58|73|511.553.15.319.871|2003||206||||
Kevin Paredes|DEF|45|63|247.933.882|2003||170|3||42|E
Pablo Torre|MED|54|81|709.127.386.549.1301|2003||173|||3.27|
Luca Lipani|MED|84|73|378.781|2005||185|2|||
Clayton|AVA|16|65|903.235.200.892.732.632.462|1999||184||||
Jonas Adjetey|DEF|60|76|132.933|2003||188|13|||
Nicolás Fernández Mercau|AVA|4|72|771.283.609|2000||172||||D
Jordán Carrillo|AVA|111|72|778.813.865.219|2001||168|2|||E
Mohamed Touré|AVA|8|74|31.820.662.716.616|2004||186|13|68||
Kaiky|DEF|16|73|777.72.67|2004||187||||
Emersonn|AVA|16|73|102.402.854|2004||186||||
Elias Baum|DEF|2|73|281|2005||178||||
Caleb Wiley|DEF|45|78|108.293.215.921.695|2004||180|3||56|
Yoann Cathline|AVA|58|73|398.319.71.882|2002||176||||E
Lukas Ullrich|DEF|2|75|418.158|2004||180||||
Muhammed Damar|MED|2|73|421.933|2004||185||||
Djeidi Gassama|AVA|105|76|647.466.789.717|2003||177|3|105||E
Paxten Aaronson|MED|45|73|678.281.907.882.229.1114|2003||175|4||42|
Dennis Seimen|GR|2|71|298.750|2005||192||||
Ousmane Camara|MED|58|72|662.81|2003||197|11|||
Ismaël Gharbi|MED|151|75|647.163.115.186|2004||173|20|58|4.36.42|E
Agustín Álvarez|AVA|157|74|677.781.768.283.580.182|2001||180|6||17|
Luca Marianucci|DEF|84|73|285.601.848|2004||186|||21|
Julien Duranville|AVA|20|76|80.157.132.541|2006||173|2||41|E
Damion Downs|AVA|45|75|315.231.805.408.815|2004||192|7|2|42|
Derry Scherhant|AVA|2|73|418.365|2002||185|2|||E
Unai Gómez|MED|54|77|101.184.144.871|2003||183||||
Marin Ljubicic|AVA|40|74|405.501.874.302|2002||183||||
Matija Frigan|AVA|40|71|404.473.663|2003||185||||
Max Alleyne|DEF|76|79|551.921.175|2005||185|||26|
Metinho|MED|129|74|358.862.536.807.132|2003||178||||
Ashley Phillips|DEF|76|75|146.853.684.825.565|2005||192||||
Alan Matturro|DEF|157|74|255.378.523.788|2004||189||||
Rafik Belghali|DEF|5|71|536.471.416.848|2002||186|17|20||
Demir Ege Tıknaz|MED|152|73|141.732.163|2004||193|4|||
Adam Daghim|AVA|43|73|25.767.318.933.421|2005||186|4|||D
Jeffinho|AVA|16|73|159.541|1999||181|||18|E
Junior Olaitan|MED|12|73|210.862.393.402.141|2002||174|44|||
Marius Broholm|AVA|116|71|739.495.530.882|2004||176||||D
Saba Goglichidze|DEF|61|73|285.871.921.580.1075|2004||193|13|||
Pablo Marín|MED|54|76|725|2003||178||||
Edoardo Motta|GR|84|70|728.510|2005||194||||
Max Moerstedt|AVA|2|72|421|2006||194||||
Samuel Amo-Ameyaw|AVA|76|72|805.293|2006||174||||D
Rafiu Durosinmi|AVA|115|71|481.902.681.377|2003||192|3|||
Diogo Sousa|MED|127|70|908.293|2006||176||||
Adam Aznou|DEF|102|79|133.886.299.586|2006||178|3|54|5|
Vasilije Adžić|MED|109|76|463.1213.460.781|2006||185|9|||
César Palacios|MED|54|79|721.367.1348|2004||182||||
Bastien Meupiyou|DEF|58|75|600.934.74|2006||191|||55|
Nestory Irankunda|AVA|8|81|31.133.391.921.812|2006||175|20|147|41|D
Jones El-Abdellaoui|AVA|102|74|916.467.203|2006||184||116||D
Ebenezer Akinsanmiro|MED|115|71|440.768.681.580|2004||184|1||6|
Jeremy Arévalo|AVA|49|76|709.298.1301|2005||182|3|54||
Arthur|DEF|16|75|78.524.923|2003||173|1||5.11.56|
Ibrahim Sulemana|MED|60|72|416.196.100.154.781|2003||180|7||44.48|
Andrija Bulatovic|MED|109|73|521.1213|2006||180|12|||
Alessandro Vogt|AVA|143|71|331.421.415|2005||188||||
Julio Soler|DEF|4|74|506.160.1369|2005||175||122||
Junior Mwanga|DEF|58|71|156.293.511.600|2003||184||||
Kaye Furo|AVA|20|70|225.224.164|2007||190||||
Adrian Przyborek|MED|126|73|685.510|2007||184||||
Nobel Mendy|DEF|135|74|662.143.142.719.426|2004||187|2|||
Yasin Özcan|DEF|152|72|484.99.80.141|2006||185|1|||
Trey Nyoni|MED|76|80|532|2007||180|||13|
Jay Robinson|AVA|76|71|805.580|2007||176||76||E
Oumar Camara|AVA|58|70|908|2007||176||||E
Quentin Ndjantou|AVA|58|78|647|2007||182|||4.36.58|E
Adrián Liso|AVA|54|73|258.779.379.549|2005||182||||E
Andrés García|DEF|54|74|103.523.99.379|2003||185||54|59|D
Axel Tape|DEF|58|75|647.524.523|2007||180|||4.36|
Amorim|MED|16|67|360.74.378|2005||177||16||
Herba Guirassy|AVA|68|73|600.942|2006||177||58||E
Eivind Helland|DEF|116|71|757.154|2005||196|1|116||
Kento Shiogai|AVA|86|75|940.589.933|2005||180|6|||
Cyriaque Irié|AVA|18|71|266.862.365|2005||185|11|39||D
Rayan Fofana|AVA|58|71|521.511|2006||180|2|||
Darryl Bakola|MED|58|71|553.781|2007||178||||
Mahamadou Nagida|DEF|24|72|731|2005||176|12|||
Idrissa Gueye (2006)|AVA|135|68|400.323.871|2006||185|1|||
Jorge Cestero|MED|54|73|721.1348.1347|2006||178|||31|
Ricardo Rocha|DEF|127|79|345.163.140.853.822.692|1978||183|8||7.25.28.50|
Abel Xavier|DEF|127|82|295.140.128.723.648.299.532.371.737.565.499|1972||189|20|110|7|
Dimas|DEF|127|80|27.295.908.140.463.351.822.812.553|1969||185|44|164|6.7.29|
Hanno Balitsch|MED|2|78|231.524.548.620.1367|1981||183|1||33|
Peer Kluge|MED|2|77|158.620.418.91.1228.782|1980||179|2|||
Raphael Schäfer|GR|2|76|620.298|1979||190||126||
Alexander Meier|AVA|2|79|817.408.281.926|1983||196||||
Andreas Wolf|DEF|2|75|620.923.587|1982||182||167|44|
Alexander Madlung|DEF|2|78|418.933.281.302|1982||194|5||5.29|
Quique de Lucas|MED|54|78|291.647.215.66.722.307.203.430|1978||175|||44|
Jérémie Aliadière|AVA|58|80|93.204.925.934.565.319|1983||183|||2.15|
Hugo Viana|MED|127|82|812.610.888.638.163.62|1983||178|29||7.20.32.34.40.50|
Steve Harper|GR|76|80|610.162.824.425.166.426.828.1129|1975||188||||
Tony Hibbert|DEF|76|81|299|1981||172|||45|
Jason Roberts|AVA|62|79|934.168.169.924.692.929.146.720|1978||185|15|76||
George McCartney|DEF|79|80|828.925.516|1981||183|34|||
Malik Fathi|DEF|2|75|809.548.486.1.418|1983||185|2||29.53|
Bogdan Lobont|GR|132|82|326.32.308.356.737|1978||185|86||36.44|
Steve von Bergen|DEF|143|79|606.338.418.209.378.652.942|1983||186|50|||
Hélder Postiga|AVA|127|84|325.853.763.654.812.779.888.510.262.732.1327|1982||182|73||7.20.28.31.40.50.59|
Souleymane Camara|AVA|135|77|587.398.612.578|1982||174|35||4.24|D
Mauro Cetto|DEF|4|75|738.600.854.652.530.771|1982||182||||
Grégory Pujol|AVA|58|74|600.80.193.885.368|1980||183||||
Romain Pitau|MED|58|74|521.867.612.330.578|1977||178|||4|
Cédric Kanté|DEF|100|78|293.316.612.654.330.4|1979||182|45|58|28|
Marc-Antoine Fortuné|AVA|58|76|530.818.882.19.924.204.270.929.236.1245|1981||183||||
Olivier Sorlin|MED|58|75|578.731.587.642.950|1979||183|||25|
Cédric Barbosa|MED|58|75|578.731.862.323.950|1976||179||||E
Thomas Manfredini|DEF|84|76|760.871.356.201.100.154.378.781.1226|1980||182||||
Giampiero Pinzi|MED|84|79|510.871.218.165.650|1981||179|1||6|
Roberto Guana|MED|84|76|165.196.97.652.154.218.209.674|1981||178||||
Stefano Lucchini|DEF|84|77|238.841.285.768.100.209|1980||186||||
Francesco Lodi|MED|84|76|285.366.871.201.378.663.859.1226|1984||183||||
Abdoulaye Faye (1978)|DEF|135|81|521.316.155.610.825.925.426|1978||188|36|||
Fabrice Pancrate|MED|58|77|398.512.647.142.330.610.11.600|1980||185||||D
Yohann Pelé|GR|58|75|512.854.330.553|1982||196|||12|
Maurizio Domizzi|DEF|84|79|18.510.7.575.768.165.97.601.871.895|1980||185|||11|
Steven Reid|MED|78|80|568.146.698.924.175|1981||180|23|76||D
Carlos Gurpegui|DEF|54|79|101.144.184|1980||181|7||17|
José María Movilla|MED|54|78|586.110.779.722.719|1975||170||||
Óscar González|MED|54|76|887.886.779.632|1982||181||||
Gorka Iraizoz|GR|54|80|144.753.291.101.386.184|1981||191|12||17|
Alberto Lopo|DEF|54|79|291.262.379.384|1980||186|9|||
Miguel Ángel Corona|MED|54|76|779.67.72.167.1348.1347|1981||176||||
Rui Fonte|AVA|127|78|93.243.812.909.291.140.137.120.163.367.530.292.345.668|1990||181|||15.30.32.40.41.42.46|
Shaun Maloney|MED|51|80|204.99.929.217.426|1983||171|47|99|38.45|D
Mike Williamson|DEF|76|80|805.270.936.921.692.610.934.1129.641|1983||193||||
Franck Béria|DEF|58|76|323.530|1983||180|||4|
Franck Signorino|DEF|58|75|323.600.379.307.702.819.820|1981||175||||
Jean-Pascal Mignot|DEF|58|74|15.763.330|1981||183||||
Hassan Yebda|MED|5|78|15.819.512.140.692.601.390.871.137.120|1984||188|26|58|7.30|
Silvio Proto|GR|20|74|80.135.472.632.510|1983||184|13|||
Michaël Ciani|DEF|58|79|702.15.193.319.156.510.812.291.499.1275|1984||192|1||38|
Grant Holt|AVA|76|79|789.617.147.793.616.929.99.425.934.419|1981||183||||
Dean Whitehead|MED|76|78|641.828.825.565.425|1982||180||||
Custódio|MED|127|79|812.276.908.163.33|1983||180|11||25.28.32.34.40.52|
Tonel|DEF|127|78|325.27.554.812.277.136.349.120.137|1980||185|7||20.40.50|
Alan (1979)|AVA|16|75|446.554.325.908.163|1979||174|||7.28.30.32.34.41.52|D
David Vaughan|MED|123|81|239.725.147.828.617.1084|1983||170|42|||
Eliseu|DEF|127|81|120.891.586.510.779.140|1983||176|30||7.8.20.25.28.30.40.46|D
Antolín Alcaraz|DEF|122|81|710.356.136.224.929.299.507.528.1015|1982||185|23||45|
Scott Carson|GR|76|83|516.532.789.213.99.924.176.929.263.551|1985||190|6||2.19.26.43|
Moisés Hurtado|MED|54|77|291.753.632.390.386|1981||185|1||22.42|
Josep Lluís Martí|MED|54|78|549.189.787.725|1975||180|||43.59|
Esteban|GR|54|77|723.110.787.203.72|1975||176|3|||
Juan Rodríguez (1982)|MED|54|78|586.262.379.105.549|1982||185||||
Mickaël Chrétien Basser|DEF|102|76|19.176.293|1984||179|36|58||
Orestis Karnezis|GR|63|83|623.654.871.390.921.601.530|1985||189|49||11.25.28.32.38|
Marcin Wasilewski|DEF|126|82|800.931.514.80.518.930|1980||186|60||2.44|
Felipe (1984)|DEF|16|77|871.356.209.794.663.440.760|1984||188|||37|
Steven Taylor|DEF|76|79|610.936.447.675.691.1144.922|1986||188||||
Karim Haggui|DEF|151|78|293.524.298.302.331|1984||190|82|||
Michael Krohn-Dehli|MED|43|83|32.707.807.172.203.787.262|1983||170|62||36.59|
François Modesto|DEF|58|77|746.196.575.587.632|1978||184|6||24.34|
Víctor Montaño|AVA|33|75|567.316.578.731.845.634|1984||177|1|||
Jérémy Clément|MED|58|78|541.717.647.763.19|1984||180|||4|
Panagiotis Kone|MED|63|80|448.165.154.871.356.390.12.927|1987||183|28|1|25|
Pablo Barrientos|MED|4|74|771.201.296.598.845|1985||175|1||51|D
Júlio Sérgio|GR|16|77|777.462.737.513.1338|1978||184|||36.44|
Daniele Conti|MED|84|77|737.196|1979||178||||
Brett Holman|MED|8|82|354.300.589.22.99.51.167|1984||177|63||54|
Simone Tiribocchi|AVA|84|75|510.285.848.139.794.218.513.100.696.1121.1226|1978||178||||
Simone Vergassola|MED|84|75|768.848.794|1976||174|||21|
Daniele Cacia|AVA|84|74|679.841.760.356.513.729.650.416.154.97.209.618|1983||181||||
Davide Biondini|MED|84|78|209.729.196.100.378.781.1226|1983||178|2|||
Luca Rigoni|MED|84|77|729.679.218.652.378.663.1226|1984||185||||
Cristian Raimondi|MED|84|75|100.696.652.18.979.1226|1981||182||||
Emanuele Calaiò|AVA|84|79|848.841.674.601.794.378.201.810.1314.663.764|1982||179|||21.43|
Weligton|DEF|16|77|659.669.391.586|1979||186|||28|
Daniele Galloppa|MED|84|79|737.859.97.794.663.575.238|1985||181|2|||
Cédric Hengbart|DEF|58|73|759.15.4.1330.1119|1980||183||||
Asier Riesgo|GR|54|78|753.725.638.386.186|1983||185|11|||
Laurent Bonnart|DEF|58|77|855.512.553.587.530.4.502|1979||170|||4.24|
Dariusz Dudka|DEF|126|79|930.15.523.145.514|1983||183|65|||
Rúben Amorim|MED|127|81|120.140.163.972|1985||178|14||7.30.32.40.46|
Evaldo|DEF|16|75|102.325.554.163.812.262.380.582.851|1982||184|||28.30.31.34|
Rubén Castro|AVA|54|79|507.67.262.709.384.754.719.142.307.586|1981||174||||
Matteo Contini|DEF|84|79|7.18.760.580.118.663.601.779.794.100.461.128.841|1980||184|||6.11.44|
Andrea Pisanu|AVA|84|74|196.794.416.890.663.154.694.579.1120|1982||178|||44|
Javier Flaño|DEF|54|75|638.283.188.181|1984||177||||
Grégory Arnolin|DEF|58|74|647.727.380.554.908.813.668.1250|1980||187|3||41|
Miguel Ángel Moyá|GR|54|81|549.888.379.110.725|1984||186|||51.59|
Iván Ramis|DEF|54|77|549.886.929.523.753|1984||188|||45|
Ragnar Klavan|DEF|55|82|916.417.22.115.532.196.1201|1985||185|130||33.54|
Robert Koren|MED|53|81|531.924.426.557|1980||175|62|||
Simon Vukcevic|MED|160|78|665.812.146.911.480.522.214.1213|1986||179|50|109|40|D
Diego Colotto|DEF|4|78|296.109.262.291.1369.1335.996|1981||184|||42|
Damià Abella|DEF|54|78|127.709.142.638.565|1982||188|4||3.58|
Massimo Gobbi|MED|84|79|858.196.356.663.218|1980||183|1|||
Alessandro Lucarelli|DEF|84|78|679.652.165.356.18.729.794.378.663|1977||182||||
Gennaro Bracigliano|GR|58|75|19.81.553.1364|1980||182|||24|
Olivier Sorin|GR|58|74|19.15.731|1981||189||||
Davide Moro|MED|84|74|285.890.18.764.238|1982||176|||48|
Michael Agazzi|GR|84|81|100.859.781.359.196.218.7.565.97.209.238|1984||189||||
Jesús Gámez|DEF|54|79|586.110.610.105|1985||182|||28.43.51|
Nino|AVA|54|75|283.523.189.638|1980||169||||
Ivo Ilicevic|AVA|40|79|898.394.0.408.85.620.1320|1986||174|8|2||E
Marco Motta|DEF|84|80|100.871.848.737.463.201.154.378.921.213.72.633|1986||186|1||6.21.44|
Alberto Rodríguez|DEF|125|77|163.812.732.1068.1299.459|1984||182|75||30.39|
Maxi Moralez|MED|4|78|710.917.100.527.609|1987||158|1|||
Darío Cvitanich|AVA|4|79|125.32.649.150.612.182.710|1984||170||||
Marco Ruben|AVA|4|78|738.734.905.275.950.843.102|1986||179|1|||
Emmanuel Culio|MED|4|75|438.710.191.371.635.558.262.62.507.779.549.996|1983||176||||
Chu-young Park|AVA|37|80|327.587.93.203.921.60.873|1985||182|68||15|
Fabian Johnson|DEF|45|79|1.933.421.158|1987||183|57|2||E
Lorenzo De Silvestri|DEF|84|80|510.356.768.848.154|1988||187|6||21|
André Luiz (1980)|DEF|16|74|242.446.112.19.653|1980||185||||
Joe Ledley|MED|123|82|197.204.243.263.213.610.1164|1987||183|77|||
Julian Baumgartlinger|MED|165|80|1.117.548.524.115|1988||181|84||53|
Mariano Andújar|GR|4|80|427.652.296.201.601|1983||194|11||43.48.51|
Ángel Lafita|AVA|54|77|258.779.262.379.47|1984||188||||E
Simone Missiroli|MED|84|73|729.858.196.781.760.209|1986||191||||
Nathan Dyer|AVA|76|79|175.805.790.830.518|1987||165|||2.44.45|D
Somen Tchoyi|MED|24|77|767.924.115.1097.1053|1983||190|15|||
Manu del Moral|AVA|54|79|104.110.379.787.283.753.886.384|1984||186|1||23|
Danny Simpson|DEF|76|81|744.552.828.447.146.610.698.518.168.425|1987||178|||2.10.44.58|
Onyekachi Apam|DEF|115|78|717.612.731.784|1986||175|14|||
Imanol Agirretxe|AVA|54|79|101.725.981|1987||187|5|||
Ádám Szalai|AVA|73|81|548.421.132.1348.782|1987||193|86||35.53|
Nicolai Müller|AVA|2|77|394.762.548.408.281.205.926|1987||175|2||29.53|D
Brad Guzan|GR|45|83|99.426.565.108|1984||193|64|||
Victor Anichebe|AVA|115|82|299.924.828|1988||190|11|||
Hélder Barbosa|AVA|127|75|325.27.860.909.163.72.12.33.655.411.62.891|1987||172|1||7.28.32.34.40|E
Morgan Amalfitano|MED|58|79|193.319.553.924.925.530.731|1985||176|1||24|
Leon Britton|MED|76|80|925.830.790|1982||165|||45|
Sven Ulreich|GR|2|82|298.133.408|1988||192|||5.11.26.27.53|
Nicolás Pareja|DEF|4|80|80.291.809.787.89.109|1984||183|1||42.59|
Gary Hooper|AVA|76|78|526.783.204.616.789.1192.1330.633.922|1988||175||||
Kévin Constant|MED|68|79|854.502.218.378.7.856.154.329|1987||184|28|58||
Chris Gunter|DEF|123|82|197.853.617.720.213.1280|1989||180|109|||
Pedro Mosquera|MED|54|79|721.379.283.262.754.9.1348.1347|1988||184|1||35|
Cédric Mongongu|DEF|129|75|587.950.290.578.8|1989||189|40|||
Antunes|DEF|127|81|363.668.737.513.520.18.656.586.275.379.812|1987||175|13||7.20.25.36.40.41.44.47.50|
Paolo De Ceglie|DEF|84|82|463.794.378.663.553.786|1986||184|||6.21.24.44|D
Fernando Forestieri|AVA|4|77|378.794.871.586.285.128.921.789.1226|1990||173|6||21.28|D
Valentin Stocker|MED|143|78|132.418|1989||178|36|||E
Miguel Torres|DEF|54|80|721.379.632.586.1348.1347|1986||183|||3.19|
Gabriel Mercado|DEF|4|82|710.296.734.787.57.443|1987||181|25||49|
Claudio Yacob|MED|4|76|710.924.427.598.617.738|1987||198|2||51|
Joel Obi|MED|115|81|440.663.848.218.65.764.729|1991||177|17||37.43.44|
Glenn Murray|AVA|76|78|198.824.166.243.720.160.617.921|1983||183||||
Modibo Maïga|AVA|100|77|512.330.925.698.323.52.980.989|1987||185|59|||D
Filip Djordjevic|AVA|145|80|294.711.600.510.218|1987||186|14|||
Nenad Tomovic|DEF|145|77|711.294.378.513.356.218.760.13.244|1987||184|22|||
Ibrahima Traoré|AVA|68|79|418.298.158.115|1988||170|49|58||E
Sam Vokes|AVA|123|80|160.934.516.168.616.790.175.166.1190.825.936|1989||186|64|76||
Milos Ninkovic|MED|145|80|244.275.950.294.832.926|1984||180|28|||
Bradley Johnson|MED|76|77|615.823.516.166.616.263.146.1176.543|1987||183||||
Andreas Weimann|AVA|165|82|99.921.263.934.168.924.146.718.216|1991||188|26|||
Dale Stephens|MED|76|75|178.628.805.213.166.175.1009|1989||185||||
Ignacio Scocco|AVA|4|76|611.865.37.443.828.12.734|1985||177|1|||
Mané|DEF|54|77|104.110.72.379.542|1981||174||||
Zanka|DEF|43|81|233.648.425.351.302.164.80.499|1990||191|37|||
Kolbeinn Sigthórsson|AVA|82|82|22.32.600.371.14.431|1990||186|64||44.52|
Gonzalo Bergessio|AVA|4|81|683.439.710.140.771.763.201.721.768.109.598.917|1984||179|3||3.51|
Dimitrios Siovas|DEF|63|76|445.656.632.186.754.362.644|1988||192|20||25.34.38.40.55|
André Dias|DEF|16|78|659.357.389.834.510|1979||184||||
Alberto Botía|DEF|54|79|127.813.787.283.632.45.63.488|1989||187|||3.26.30.38.40.55|
Maurício (1988, Portimonense)|MED|16|66|358.34.947.642.654.690|1988||184|0|16|9.12.37|
Bastian Oczipka|DEF|2|80|524.817.281.874.91.1261.782|1989||184||||
Sebastián Blanco|MED|4|73|561.924.1369.691.771|1988||168|2|||
Ilija Nestorovski|AVA|97|80|803.652.871.97.801|1990||183|52|||
Marco Höger|MED|2|78|231.1368.782.1367|1989||186||||
Emmanuel Mayuka|AVA|163|77|542.942.805.330.323|1990||180|61||42|
Harry Arter|MED|78|75|213.160.198.197.367.617.1084|1989||176|19|76|39|
Luís Neto|DEF|127|75|891.597.794.947.351.812|1988||187|19||7.12.25.37.40.47|
Fabien Lemoine|MED|58|75|731.763.319|1987||175||||
Fabiano Santacroce|DEF|84|76|232.165.601.663.650.841.461|1986||181||16||
Jordon Mutch|MED|76|77|145.270.921.197.698.243.24.544.720.889.926|1991||175||||
Lamine Koné|DEF|39|78|502.319.828.293.509.512|1989||189|9|58||
Florin Gardos|DEF|132|76|339.805.877.8.1111|1988||194|14|||
Christopher Schindler|DEF|2|75|1.425.620|1990||189||||
Daniel Didavi|MED|2|79|298.620.933|1990||179||||
Castro|MED|127|74|325.629.813.484.402.163.582|1988||180|||7.12.28.41.55.59|
Marco Estrada|MED|29|78|864.578.959|1983||177|33||4.17|
Bruno Ecuele Manga|DEF|59|78|156.736.81.319.197.266.210|1988||186|118|||
Facundo Roncaglia|DEF|4|79|150.291.296.356.378.203.888.638.1222.780|1987||175|14||42|
Barry Bannan|MED|51|81|99.263.147.516.243.155.789.568|1989||169|28|||
Emmanuel Rivière|AVA|58|79|763.854.587.610.638.323.241|1990||182|5||43.44|
Petr Jiracek|MED|32|80|902.933.408.806.453.347.998|1986||180|28|||
Libor Kozak|AVA|32|80|510.165.99.128.18.804.806.979.347.1041.803|1989||193|9|||
Bernardo Espinosa|DEF|33|74|709.787.813.565.386.291.106.1032|1989||192||||
Jordi Masip|GR|54|79|127.886|1989||179|3||3.36|
Kyle Naughton|DEF|76|79|790.853.565.518.616.830|1988||180|||12.42|
Lisandro Magallán|DEF|4|74|382.150.738.254.32.66.241.80.283.865.917|1993||181||||
Fabián Monzón|DEF|4|79|150.142.612.541.358.201.864.107.1340|1987||179|7|||
Ryan Bennett|DEF|76|75|675.616.934.518.1176.1130.830|1990||188|||39|
Marco Fabián|MED|111|76|219.185.281.843.59.317.555.678|1989||170|43|||
Alberto Paloschi|AVA|84|79|7.663.378.218.830.100.760.196.794|1990||182|||11|
Javi Márquez|MED|54|77|291.549.283.390.384.1284|1986||174|2||22.42|
Nélson Oliveira|AVA|127|80|140.732.668.262.731.830.617.616.720.12.642.492.908.346|1991||186|17||7.25.30.40.46|
Marc Muniesa|DEF|54|78|127.825.386.38.540|1992||181|2||3.22.26.58|
İsmail Köybaşı|DEF|152|76|375.141.351.390.180.856.402|1989||178|28|||
Franco Jara|AVA|4|76|95.140.390.771.296.632.649.250.138.439|1988||179|4||7.30.55|
Liam Cooper|DEF|51|76|426.425.198.516.195.1245.789|1991||188|19|76|17|
Ezequiel Muñoz|DEF|4|79|150.652.768.378.186.506.438.296.383.1369|1990||185||||
Kiko Femenía|DEF|54|79|430.9.66.921.905.379.1348|1991||174|||38|
Miguel Britos|DEF|157|80|154.601.921.1000.1103|1985||188|||38.43|
Eiji Kawashima|GR|86|82|599.485.529.822.273.323.293.974|1983||185|95|||
Jefferson Montero|AVA|49|81|438.905.523.142.830.379.924.145.701.1128.1038|1989||169|64|||E
Genki Haraguchi|MED|86|82|881.418.302.874.298.135|1991||177|74|||
Nolan Roux|AVA|58|77|521.818.530.763.323.398.622.502|1988||182||||
Stefan Bell|DEF|2|77|548.1.281|1991||192|||53|
Timothée Kolodziejczak|DEF|58|79|541.521.612.787.158.843.763.662.782|1991||185|||59|
Rúben Micael|MED|127|80|878.597.325.110.779.163.668.909.1334.542|1986||175|17||7.12.28.32.40.51.52.59|
Mirko Valdifiori|MED|84|77|209.285.601.848.760.1255.1122.674|1986||185|1||21.48|
Enda Stevens|DEF|78|75|99.270.615.692.790.1084.1248.825|1990||183|26|||
Giulio Donati|DEF|84|80|440.513.650.524.548.580.1282|1990||179|3||6.31.43.44.58|
André Martins|MED|127|72|812.724.120.632.517|1990||169|2||28.30.34.38.40|
Laurent Depoitre|AVA|20|73|585.472.465.325.425|1988||191|1||39|
Ashley Westwood|MED|76|76|239.99.175.212|1990||170||||
Pablo Hernández (1986)|MED|29|76|107.710.247.203.89.255.438.1008|1986||184|30|4||
Denys Boyko|GR|153|79|275.496.269.141.586.687|1988||194|7|||
Alex McCarthy|GR|76|78|720.939.164.516.447.698.243.805.1150.1176.518|1989||193|1|||
Ciaran Clark|DEF|78|83|99.610.790.825|1989||185|36|76|43|
Romain Hamouma|AVA|58|77|819.759.763.4|1987||177||||D
Artur Ioniță|MED|107|79|416.196.139.681.575.859.979.1170|1990||185|81|||
Federico Santander|AVA|122|77|854.710.842.233.154.729.598.1089.1006|1991||187|20|||
Luigi Sepe|GR|84|78|601.681.285.356.663.764.510|1991||185|||11.43.48|
Djamal|MED|95|72|765.292.136.163.380|1983||188|16||28.32.34|
Kevin Stöger|MED|165|77|298.0.750.898.302.548.158|1993||175|5|||
Frederik Rönnow|GR|43|75|6.289.172.281.874.782|1992||188|10|||
Emmanuel Badu|MED|60|75|871.176.416|1990||173|78|||
Dodô (1992)|DEF|16|80|234.279.737.440.768.112.242.777|1992||177|||37.44|
Eduardo (1989)|MED|16|75|450.358.292.325.612.45.36.159.242.570.395|1989||184|||18.30.34.35.38.41|
Javier Aquino|DEF|111|79|185.905.719.843.219.317|1990||165|54|||D
Giancarlo González|DEF|38|82|916.230.652.154.499.1165|1988||186|90|||
Ezequiel Schelotto|DEF|84|79|209.100.201.781.440.663.218.812.166.69.710|1989||187|1|4|30.37.51|D
Tom Carroll|MED|76|79|526.263.853.698.830.99.447.543.720|1992||171|||12.42|
Grant Hanley|DEF|51|81|146.610.616.145.419|1991||188|70||43|
Nicolas de Préville|AVA|58|72|316.820.530.156.323.0.472.862|1991||182||||
Zakaria Labyad|MED|102|80|648.812.907.367.882.32.234.969|1993||170|23|124|28.30.34.38|
Marco Bizot|GR|124|78|32.747.312.377.22.818.99|1991||183|1||13.59|
Pape Souaré|DEF|135|78|530.820.243.862.213.583|1990||178|22||4|
Loïs Diony|AVA|58|71|600.266.763.81.168.294.633|1992||183||||
Kenny McLean|MED|51|76|816.26.616|1992||183|61|||D
Valentin Eysseric|MED|58|76|587.612.763.356.600.416.484.478|1992||181|||44|
Mexer|DEF|110|77|812.629.597.731.156.292.991|1988||181|77||52|
Carles Gil|MED|54|77|888.283.99.262.607|1992||170|||39|
Liam Moore|DEF|85|78|162.518.164.168.720.615.825|1993||186|10|76|44|
Andre Wisdom|DEF|76|78|532.263.924.616.767.971.552|1993||186|||33.47|
Junior Malanda|MED|20|76|530.949.933|1994||181||||
Jeremy Toljan|DEF|2|80|421.157.204.781.523|1994||182||||
Pajtim Kasami|MED|143|80|652.367.321.632.617.329.132.768.337.1028|1992||188|12|97|38.40.55|
Hördur Magnússon|DEF|82|81|810.463.209.168.194.654.522.113|1993||194|57||21.46|
Alfredo Donnarumma|AVA|84|73|201.232.222.674.764.165.1123.285.1065.841|1990||178|||51|
Kenneth Omeruo|DEF|115|84|215.10.565.484.65.186.191|1993||185|69||21.31.43.48|
Karim Ansarifard|AVA|80|81|638.656.632.617.12.633.90.963.1274|1990||181|104||20|
Nicola Leali|GR|84|78|165.463.810.209.366.632.949.673.359.97.378.416|1993||192|||40|
Papy Djilobodji|DEF|135|79|600.215.923.828.266.398.374.484.478|1988||193|17|||
Gino Peruzzi|DEF|4|73|917.201.150.1068.107.598.771|1992||177|5|||
Ricardo Esgaio|DEF|127|76|812.27.163.478.380|1993||171|||7.9.28.30.34.38.47|
Ryan Fredericks|DEF|76|79|853.164.568.565.168.367.925.160|1992||181|||12.42|
Ladislav Krejci (1992)|AVA|32|80|806.154.424.840|1992||179|41|||E
Kemar Roofe|AVA|85|77|924.615.216.641.516.80.717.1331.263.920|1993||178|5|76|17|
Kara Mbodj|DEF|135|76|861.377.80.600|1989||192|47|||
Álvaro Vázquez|AVA|54|79|291.379.830.384.779.813.1177.1250.1330.688|1991||182|6||22.42|
Nicolás Castillo|AVA|29|76|224.548.366.185.219.140.77.462.605.1157.865|1993||178|24||7.18.46|
George Baldock|DEF|63|79|543.615.641.790.654|1993||178|12|76||
Sebastian Andersson|AVA|142|75|475.268.614.874.231.0.620|1991||190|9|||
Abdoulay Diaby|AVA|100|78|193.585.530.224.812.141.379.80.47.670.149.980|1991||173|31|58|32.47|D
Miha Zajc|MED|53|79|285.351.378.854.277.1043|1994||178|41||30.31.55|
Nicolás Blandi|AVA|4|76|150.771.950.89.130.227.252.254.879|1990||181||84||
Benjamin Corgnet|MED|58|75|266.319.763.293|1987||180||||
Erik Thommy|MED|2|76|115.0.451.298.302.476.499|1994||174||||D
Michael Hector|DEF|85|78|720.793.216.26.215.281.426.789.367.1150.1192.213.1149.1133|1992||193|45|76|21.38.48|
Andreas Bouchalakis|MED|63|74|288.632.617.492.418.655.623|1993||186|47||38.40.55|
Ernesto Torregrossa|AVA|159|73|416.580.232.241.857.165.768.681.764|1992||184|5|84|44|
Javier Manquillo|DEF|54|80|104.110.532.553.828.610.203|1994||180|||3.43.51|
Cauly|MED|16|70|750.538.279.834.1184|1995||172||||
Stole Dimitrievski|GR|97|81|726.390.384.719.888|1993||188|94|||
Brian Oliván|DEF|54|75|195.887.886.726.245.386.549.291.813|1994||175|1|||
Lukas Lerager|MED|43|78|900.949.156.378.233.928|1993||188|10|||
Paolo Faragò|MED|84|73|618.196.154.232.513|1993||187|8|||
Levin Öztunali|MED|2|78|524.923.548.874.1329.408|1996||185||||
Jairo Samperio|AVA|54|77|709.787.548.507.408.1034.1072.586.1301|1993||170|||59|D
Nicola Murru|DEF|84|77|196.768.848.1123|1994||180|||44|
Helton Leite|GR|16|75|446.240.159.833.149.140.84.262.360.903|1990||196|||30|
Rubén Duarte|DEF|54|78|291.66.865|1995||172||||
Florin Andone|AVA|132|79|246.262.166.371.245.507.981.978|1993||182|25|||
Tiago Ilori|DEF|127|82|812.532.390.156.99.720.149.668.120.1168.319|1993||190||76|28.33.47|
Dani García|MED|54|79|725.753.101.632.113|1990||180|5|||
Sergi Samper|MED|54|78|127.390.507.906.584|1995||182|2||3.36.58|
Massimo Luongo|MED|8|81|853.447.831.698.789.565.568|1992||176|45||12|
Hernani|MED|16|74|102.947.763.663.378.729.580.652|1994||188|||37|
Jean-Paul Boëtius|MED|124|79|354.132.377.548.418.707|1994||174|10|||D
Manolis Siopis|MED|63|74|632.682.656.90.65.856.197.654.478|1994||171|42||43|
Jean-Charles Castelletto|DEF|24|78|15.224.585.727.818.600.39|1995||185|35|58||
Stefano Denswil|DEF|141|77|32.224.154.856.486|1993||188|15|124||
Emil Krafth|DEF|142|81|952.154.75.610.14.1100|1994||181|52|||
Ahmed Hassan|AVA|47|78|732.163.632.492.65.670.511.40|1993||191|32||9.20.32.39.41|
Marek Rodák|GR|52|74|742.367.40.1086|1996||188|26||38|
Leonardo Koutris|DEF|63|73|288.643.632.549.302.685|1995||175|7|16||
Ángelo Henríquez|AVA|29|81|864.552.929.779.109.277.360.124.644|1994||175|14||10.45.54|
Uros Djurdjevic|AVA|109|77|711.907.652.665.632.813.109.577|1994||182|12|145||
William Troost-Ekong|DEF|115|82|853.312.309.412.465.176.871.921.764.642.49.964|1993||191|82|124||
Iuri Medeiros|AVA|127|76|92.582.149.812.378.517.620.163.51.1074|1994||174|||30.32|D
Joe Bryan|DEF|76|75|168.684.367.612.568|1993||170|||38|
Renato Steffen|AVA|143|78|332.942.132.933.320|1991||170|41|||D
Pascal Stenzel|DEF|2|78|157.365.298|1996||183|||53|
Charlie Taylor|DEF|76|78|516.162.444.175.805.924.263.1189|1993||176||||
John Swift|MED|76|75|742.215.831.164.692.720.924|1995||182|||31|E
Pedro Rebocho|DEF|127|74|582.140.398.141.668.514.48|1995||171||||
Isaac Kiese Thelin|AVA|142|79|614.550.156.80.919.524.484.881.761|1992||189|33|||
Christopher Jullien|DEF|64|77|15.365.266.854.204.578.340|1993||196||58||
Farid Boulaya|MED|5|74|316.223.746.386.323.43.433.972|1993||180|8|58||
Adrien Hunou|AVA|58|75|731.223.569.81|1994||176||||
Viktor Kovalenko|MED|153|82|788.100.810.285.1222.988|1996||182|33||41.59|
Saman Ghoddos|MED|80|78|75.164.980.1154.1058|1993||176|73||20|D
Marco Ilaimaharitra|MED|98|74|330.702.470.822|1995||177|31|58||
Ibrahima Mbaye|DEF|135|78|440.18.154.191|1994||188|8||37|
Pablo Marí|DEF|54|81|549.384.386.551.588.262.357.93.871.580.356.45|1993||193|||16.26.30|
Kiki Kouyaté|DEF|100|75|862.323.578.744.48|1997||192|36|||
Dimitri Oberlin|AVA|143|74|338.767.318.132.285.949.785.30.332.752.786|1997||182|1|24||
Virgil Misidjan|AVA|141|75|538.620.645.334.352.589.707|1993||173|13|124||E
Lucas Olaza|DEF|157|75|734.102.203.252.182.150.886.283.494|1994||173|7||17|
Srdjan Babic|DEF|145|78|911.725.294.345.72.809|1996||192|13|21||
Arbër Zeneli|AVA|89|76|284.414.820.29|1995||176|33|142||E
Luciano (1993)|AVA|16|75|111.234.186.654.358.395.834|1993||178||||
Ivo Grbic|GR|40|77|405.592.110.530.790.180.478.538|1996||195|2||51|
Ivan Šunjić|MED|21|79|277.592.145.418.651|1996||184|18|||
Ridgeciano Haps|DEF|141|75|22.387.354.895.378|1993||175|28|124||
Bersant Celina|MED|89|82|551.334.447.830.266.484.825.14.40|1996||177|38||26|D
Tom Lawrence|MED|123|80|552.198.742.939.518.146.197.447.263.717.672|1994||175|23||44|
Gilberto|DEF|16|76|159.443.356.416.508.892.358.140.279.102|1993||179|||7.30|
Lucas João|AVA|127|75|597.789.146.720.953.963|1993||192|7||25|
Famara Diédhiou|AVA|135|73|368.330.223.81.168.65.390.197|1992||192|27|||
Simone Scuffet|GR|84|79|871.232.484.810.17.191.196.601.681|1996||190|1||6.21.44|
José Mauri|MED|84|80|663.7.285.182.476.780|1996||169||4||
Stijn Spierings|MED|124|74|22.807.707.525.854.521.172.766|1996||187||||
Josh Onomah|MED|76|80|853.99.367.147.1016.695.789|1997||185|||38.42|
Lucas Höler|AVA|2|69|762.365|1994||184||||
Ken Sema|DEF|142|76|921.871.651.614.1058|1993||177|35|||
Samir Caetano|DEF|16|76|357.871.390.416.921.843.555.50|1994||188||||
Álvaro García|AVA|54|73|726.390.709.245.719|1992||168||||E
Carl Starfelt|DEF|142|75|170.431.745.204.203|1995||185|22||43|
Umut Bozok|AVA|152|74|622.319.862.484.856.301.131.323|1996||178|1|58||
Johan Mojica|DEF|33|74|260.534.719.886.386.100.283.905.638.549.379|1992||182|49||20|
Pep Biel|MED|54|75|258.779.233.632.115.212|1996||167||||D
Jason Remeseiro|AVA|54|75|523.103.67.888.379.66.92.42|1994||178||||D
Matt Grimes|MED|76|77|830.146.516.236.615|1995||178||||
Firmin Mubele|AVA|129|73|731.854.964|1994||174|44|||D
Brian Fernández|AVA|4|73|254.710.323.1091.1000.228.1002.1343.605.691.780|1994||168||||
Sergi Palencia|DEF|54|75|156.127.763.186.500|1996||170||||
Marcus Ingvartsen|AVA|43|76|613.377.874.548.770|1996||187|1|||
Philip Zinckernagel|AVA|43|76|313.835.152.921.617.632.822.224.217.1048|1994||175||||D
Harold Moukoudi|DEF|24|75|511.763.565.12|1997||192|18|58||
Augusto Batalla|GR|4|72|734.107.842.771.390.719.1343.1008|1996||185||||
Kieffer Moore|AVA|76|79|939.901.447.742.129.929.197.160.790.935.1049|1992||195|58|||
Martin Valjent|DEF|52|77|841.218.549|1995||186|20|||
Alberth Elis|AVA|72|73|149.156.818.1076.423.554.577|1996||184|64||28|D
Luis Milla|MED|54|75|9.190.189.390.379.232|1994||175||||
Augusto Solari|AVA|4|74|734.296.710.203.109.738.879|1992||180||||D
Monchu|MED|54|75|127.386.390.886.90.317|1999||173||||
Rasmus Nicolaisen|DEF|43|74|566.692.854|1997||191||||
Carlos Júnior|AVA|16|74|112.443.659.732.776.60.590|1995||172|||55|D
Germán Conti|DEF|4|72|228.140.109.279.78.535.710.382|1994||194|||7.18.30.46|
Krystian Bielik|MED|126|82|517.93.145.920.213.263.197.924|1998||189|11||15.25|
Antonino La Gumina|AVA|84|75|652.285.768.139.188.209.232.764.841|1996||184|||44|
Léo Jardim|GR|16|75|395.732.530.149.892|1995||188|||50|
Alessandro Murgia|MED|84|74|510.760.673.314.863|1996||185||||
Kevin Rüegg|DEF|143|74|338.416.320.942.132|1998||173||||
Eric Smith|DEF|142|75|406.614.465.861.817|1997||192|4|||
Woo-yeong Jeong|MED|37|78|133.365.298.874|1999||179|22||40|
Antonio Sivera|GR|54|70|66.72|1996||184||||
Mikel Vesga|MED|54|79|144.101.813.186.72|1993||191|2|||
Rey Manaj|AVA|1|81|238.440.674.681.390.67.127.810.921.799|1997||182|49||37|
Alfonso Espino|DEF|157|75|598.245.719.710|1992||172||||
Lewis Morgan|AVA|51|76|816.204.828.442.608.770.849|1996||178|7|||E
Ramadan Sobhi|AVA|47|79|825.425|1997||183|37||20|E
Dael Fry|DEF|76|75|565.145.742|1997||185||||
Chris Willock|AVA|76|79|93.140.197.425.698.924|1998||178|||2.15|E
Jae-sung Lee|MED|37|80|458.422.548|1992||180|110||40|D
Timothy Fosu-Mensah|DEF|124|83|552.243.367.524|1998||185|3||31.56.59|
Cyriel Dessers|AVA|115|76|625.469.588.882.417.377.354.238.717.654|1994||186|11|20|13.43|
Benson Manuel|AVA|20|76|529.377.585.744.645.175.545.830|1997||169|9|||D
Derek Cornelius|DEF|25|78|455.889.655.550.553.717|1997||187|48|||
André Horta|MED|127|74|909.140.163.500.632.72|1996||175|||7.9.46|
Junior Sambia|DEF|58|70|210.578.764.285.223|1996||181|1|||D
Idrissa Touré|MED|2|76|705.460.907.681.463.580|1998||187|||48|
Dejan Joveljić|AVA|145|79|294.281.80.932.499.476.784|1999||180|11|21||
Giuseppe Pezzella|DEF|84|78|652.871.378.663.100.513.285.238|1997||185||||
Toni Villa|AVA|54|75|887.886.386.753|1995||175||||E
Jordan Morris|AVA|45|75|784.830|1994||181|55|||D
Cristo|AVA|54|77|189.721.871.754.188.886.813.92.59.1348|1997||180|||35.37|E
Andrea Favilli|AVA|84|80|463.378.416.18.97.118.128.580.841|1997||191|||6|
Alessio Castro-Montes|MED|20|72|466.465.875.231.797|1999||174||||
Alfie Jones|DEF|25|75|816.426.565.1190.805|1997||191|2|76||
Kévin N'Doram|MED|58|78|587.323.49|1996||184|||4.34|
David Turnbull|MED|51|75|583.204.197|1999||185|5|||
Radoslaw Majecki|GR|126|74|517.821.587.207.818.651|1999||191|1|||
Dany Mota|AVA|127|72|460.580.463|1998||180||94|48|
Luan Peres|DEF|16|72|693.450.689.358.224.777.553.351|1994||190|||28.30|
Juninho Bacuna|MED|42|79|312.717.145.63.374.336|1997||185|57|124||
Sead Haksabanovic|AVA|109|77|406.925.586.614.745.268.204.825.550|1999||174|36|142||E
Lincoln|MED|16|74|395.180.78.776.351.704.426.74.176|1998||178|||30.31|D
Léo Santos|DEF|16|78|234.358.689.353.202.396.597|1998||186|||55|
Bruno Henrique (1990)|AVA|16|79|242.389.933.777.357|1990||184|2||30.34|D
Samuel Moutoussamy|MED|129|79|541.600.362.799.113|1996||174|64|58|44.52|
Martin Erlić|DEF|40|80|781.810.154.566|1998||193|13|||
Simone Canestrelli|DEF|84|64|285.241.681.232|2000||192||||
Gianluca Gaetano|MED|84|79|601.238.196.100|2000||183|||6.11.21.44.48|
Chidozie Awaziem|DEF|115|79|325.600.180.186.149.65.405.221.229.492|1997||189|40||28.39.44.52|
Jean-Philippe Krasso|AVA|39|77|763.512.4.294.662.319|1997||187|27|2||
Jack Hendry|DEF|51|75|664.929.793.543.272.204.557.472.224.238.40|1995||188|43|||
Adama Traoré (1995)|AVA|100|76|323.868.352.376|1995||177|61|||D
Bartol Franjic|DEF|40|73|277.933.788.895|2000||180||||
Mads Bech Sørensen|DEF|43|75|6.164.612.312.566.1280|1999||193||||
Wuilker Fariñez|GR|159|75|567.521.733.441|1998||175|42|||
Afonso Sousa|MED|127|74|120.514.769|2000||174||||
Tyrese Campbell|AVA|76|75|825.790.793|1999||183||||
Allan (1997)|MED|16|75|532.797.418.87.281.358.112.357.234|1997||172|||33.34|
Lassana Coulibaly|MED|100|74|746.81.717.207.764.513|1996||183|61|||
Óscar Estupiñán|AVA|33|72|634.908.257.426.323.279.317|1996||182|1||32|
Mateu Morey|DEF|54|77|549.157.386|2000||172||||
Marco Grüll|AVA|165|73|761.718.923|1998||182|10|||E
Derrick Köhn|DEF|60|78|371.923.874|1999||180|3|2||
Danny Namaso|AVA|24|75|720.325.15|2000||182|15|76|7.52|E
Enrico Delprato|DEF|84|76|100.18.729.663|1999||183||||
Douglas Augusto|MED|16|77|358.234.279.642.600.494|1997||173|||9|
Felix Bacher|DEF|165|70|918.292.541|2000||190|1||41|
Emanuel Vignato|AVA|84|73|218.154.285.681.764.11|2000||175||||D
Alexis Flips|AVA|58|74|4.820.80.82.702.530|2000||173|||17|D
Antoine Bernede|MED|58|79|647.767.509.416|1999||177|||4.53|
Alessandro Zanoli|DEF|84|75|601.768.764.378.871|2000||188|||6.21|
Martin Hongla|MED|24|79|726.390.480.744.416.886.90|1998||183|35|||
Adam Gnezda Cerin|MED|53|74|620.404.654.959|1999||175|56||43.46|
Michal Karbownik|DEF|126|76|517.166.632.131.302.418|2001||175|4||25|
Giorgi Kochorashvili|MED|61|76|103.523.812.787.981|1999||178|30|||
Yorbe Vertessen|AVA|20|76|648.875.874.767|2001||176||||D
Ronaël Pierre-Gabriel|DEF|58|77|763.587.548.818.293.291.600.277.912|1998||177|||34|
Bruno Viana|DEF|16|75|242.632.163.357.487.235.44.374.65|1995||187|||9.40|
Pol Lozano|MED|54|77|291.386.390|1999||176|1|||
Arnaud Bodart|GR|20|75|822.323.530.511|1998||184||||
Muhammed Cham|MED|165|74|223.894.856.802.294|2000||180|5|||
Lebo Mothiba|AVA|164|74|885.530.293.862|1996||181|17||17|
Luan Cândido|DEF|16|74|653.705.704.395.811.280|2001||187||||
Márton Dárdai|DEF|73|78|418|2002||188|20|2||
Aaron Connolly|AVA|78|76|166.565.426.526.539.568.828.895|2000||174|9|||
Ronaldo Vieira|MED|70|76|516.768.416.848.756|1998||178|1||44|
Sydney van Hooijdonk|AVA|124|72|588.154.414.616.209.295|2000||190||||
Daan Heymans|MED|20|70|473.919.536.895.702.377|1999||186||||
Junior Messias|AVA|16|77|241.7.378|1991||178|||6|D
Josh Maja|AVA|115|77|156.828.367.511.825.924|1998||180|1|76||
Adrian Benedyczak|AVA|126|75|685.663.484|2000||190||||
Róbert Boženík|AVA|52|79|354.302.149.825|1999||188|59||13|
András Schäfer|MED|73|80|378.218.874.1019|1999||179|49|||
Robson Bambu|DEF|16|75|777.102.612.234.892.92.163.772|1997||184|||55|
Matteo Lovato|DEF|84|75|650.416.100.196.764.848.285.781|2000||188||||
Patrizio Masini|MED|84|72|378.618.97.366.1353|2001||182||||
Oleg Reabciuk|DEF|107|77|668.632.809.80|1998||177|66|||
Nuno Moreira|AVA|127|66|910.200.892|1999||175||||D
Nahuel Ferraresi|DEF|159|78|582.292.834.159.551.1063|1998||188|47||26|
Ben Wilmot|DEF|76|75|823.921.871.825.830|1999||188||||
Daniel Peretz|GR|83|74|542.133.408.805|2000||195|14||5.53|
Berkan Kutlu|MED|152|74|329.65.371.378.492.490|1998||186|8|143||
Jacob Brown|AVA|51|74|129.825.539.1245.692.720|1998||178|8|76||
Ransford Königsdörffer|AVA|60|73|274.408.548|2001||183|7|2||D
Hugo Magnetti|MED|58|73|746.818|1998||180||||
Bryan Reynolds|DEF|45|73|250.737.470.473.731|2001||191|7||31.41|
Matteo Tramoni|MED|58|72|4.196.165.681|2000||175|2|||D
Jean Marcelin|DEF|58|74|15.587.207.156.718|2000||197|1|||
Diogo Travassos|DEF|127|68|295.812.582.163|2004||185|||47|
Edo Kayembe|MED|129|76|80.466.921|1998||183|50|||
Vitezslav Jaros|GR|32|78|532.824.827.32.1084.1248|2001||190|2||2.13.33|
Facundo Colidio|AVA|4|74|67.440.797.842.734.892|2000||182|||21|
Julián Carranza|AVA|4|74|125.442.678.354.518.605|2000||182||||
Paulo Bernardo|MED|127|74|140.668.204.401|2002||180|||30|
Edu Expósito|MED|54|77|262.753.291|1996||178|1|||
Naci Ünüvar|AVA|152|78|32.856.334.291.417|2003||161||124||E
Sivert Mannsverk|MED|116|71|576.32.197.806|2002||185||||
Rodrigão|DEF|16|74|112.353.380.342.947.294|1995||191||||
Ellis Simms|AVA|76|73|147.299.236.413.828|2001||191|||11.43|
Alexander Lind|AVA|43|73|796.681.613|2002||185||||
Yusuf Sarı|AVA|152|76|553.223.856.180.29.131|1998||168|6|58||D
Willyan Rocha|DEF|16|75|690.194.47.395|1995||193||||
Iago|DEF|16|74|443.115.279.834|1997||181||||
Isak Jansson|AVA|142|64|475.307.718.612|2002||180||||E
Alexis Beka Beka|MED|58|74|759.535.612.505.1170|2001||178||||
Costinha (2000)|DEF|127|73|732.632.166|2000||181||||
Kevin Pina|MED|23|77|631.214.494|1997||181|38|||
Lameck Banda|AVA|163|72|96.513.1045|2001||160|20|||E
Germán Valera|AVA|54|78|104.189.110.779.888.283.725|2002||170|||51|E
Matteo Cancellieri|AVA|84|74|416.510.285.663|2002||185|1||37.48|D
Filip Stanković|GR|145|77|440.336.768.895|2002||189|2|84||
Bruno Méndez|DEF|157|78|234.443.390.845.1103|1999||180|7||17.55|
Vítor Carvalho|MED|16|75|235.380.163|1997||183||||
Filip Marchwinski|MED|126|75|514.513.237|2002||187|2|||
Jorge Herrando|DEF|54|73|638.181|2001||192|1|||
Martín Payero|MED|4|76|125.182.565.150.871.238.921|1998||182||||
Leo Román|GR|54|64|549.723.262|2000||189|1|||
Robert Navarro|AVA|54|81|638.127.587.725.245.549.101|2002||178||||D
Nicolás Castro|MED|4|72|611.377.283.845|2000||183||||
Mikael Egill Ellertsson|MED|82|74|810.760.895.378|2002||182|34|||
Charles Vanhoutte|MED|20|71|207.875.612.354|1998||182|1|||
Lázaro|AVA|16|74|357.72.653.50.42|2002||180|||9|E
Denso Kasius|DEF|124|73|336.154.718.22|2002||178||||
Hugo Siquet|DEF|20|76|822.365.207.224|2002||180|1|||
Joelson Fernandes|AVA|127|75|812.132.411.380|2003||172||70||E
Medon Berisha|MED|1|74|513.942|2003||186|4|143||
Festy Ebosele|DEF|78|74|263.871.921.131.121|2002||180|13|||
Jesurun Rak-Sakyi|AVA|76|74|243.213.790.180.825.484|2002||178|1|||D
Aune Heggebø|AVA|116|73|757.924|2001||185|2|||
Stipe Biuk|AVA|40|73|405.500.886.928|2002||184||||E
Luís Esteves|MED|127|65|597.380.109.908|2002||171||||
Andrew|GR|16|66|159.380.357|2001||189|||34|
Gaetano Oristanio|MED|84|73|336.440.196.895.663.848|2002||183|||44|
Marko Stamenić|MED|118|76|233.294.617.632.830.1048.922|2002||188|46||39|
Henrique Araújo|AVA|127|73|140.921.345.92.200|2002||182|||7.18.31|
Mohamed Bamba (2001)|AVA|39|70|932.319|2001||187||||
Olivier Deman|DEF|20|74|207.923.744|2000||181|3|||D
Rumarn Burrell|AVA|76|73|565.162.489.344.177.698.1130|2000||184|6|||
Álvaro Núñez|DEF|54|75|101.184.144.283.203|2000||174|1|||
Lewis Dobbin|AVA|76|77|299.263.99.924.616.695.805|2003||175|||43|E
Nathan Ngoumou|AVA|24|74|854.158.612|2000||182|2|58||D
Jordan Zemura|DEF|162|75|160.871.921|1999||173|22|76||
Miguel Rodríguez|AVA|54|76|203.882.66|2003||179|1||43|D
André Amaro|DEF|127|72|908.57|2002||188|||34|
Carlos Miguel|GR|16|71|234.617.653.443|1998||204|||9.39.55|
Kieron Bowie|AVA|51|71|615.419.416.367.1205.781|2002||190|6||38|
Boubacar Traoré|MED|100|75|323.934|2001||183|4||35.55|
Javi Rueda|DEF|54|70|722.203.67.1348|2002||177|||43|
Jean Onana|MED|24|74|520.530.585.156.521.141.553.378|2000||189|14|||
Cristian Olivera|AVA|157|68|72.677.500.395.279.967.1109|2002||170|12||17|D
Hugo Bolin|AVA|142|71|550.256.158|2003||179|3|||E
Nazinho|DEF|127|74|812.207.587|2003||178|||47|
Divin Mubama|AVA|76|78|925.551.825.805|2004||182|||26|
James Beadle|GR|76|74|239.641.789.166.145|2004||201||||
Jovan Mijatovic|AVA|145|77|294.609.625.278|2005||185||||
Abdoulaye Ndiaye|DEF|135|74|746.862.818.663|2002||185|1|||
Tim Jabol-Folcarelli|MED|58|70|4.856.1106.731|1999||187||||
Joan González|MED|54|74|513|2002||190|1|||
José Córdoba|DEF|121|64|438.525.616|2001||187|35|||
Vanja Vlahović|AVA|145|66|665.100.810.987|2004||184|||48|
Kévin Boma|DEF|149|73|736.292.81.767.855|2002||193|13|58||
Darlin Yongwa|DEF|24|68|210.319.616|2000||177|15|||
Kevin Carlos|AVA|54|71|754.143.943.132.612.196|2001||180||||
Andrés Castrín|DEF|54|71|187.787|2003||188||||
Aaron Zehnter|DEF|2|73|115.750.933|2004||180||||
Zaid Romero|DEF|4|71|388.503.296.224.379|1999||195||||
Gabriel Pereira|DEF|16|70|904.380.233.892|2000||188||||
Emirhan İlkhan|MED|152|75|141.848.768.131|2004||175||||
Thiago Borbas|AVA|157|72|734.704.723.112|2002||186|2||17|
Daniel Jebbison|AVA|25|74|790.177.160.921.695|2003||190|9|||
Obed Nkambadio|GR|58|75|662|2003||190||||
Tom Louchet|MED|58|71|612.642|2003||176||||
Omri Gandelman|MED|83|74|465.513|2000||188|6|||
Benjamin Bouchouari|MED|102|74|735.763.856|2001||165||20||
Benjamin Tahirović|MED|21|77|737.32.172.377|2003||193|35|142|31|
Gvidas Gineitis|MED|93|77|848.760|2004||191|35|||
Saïdou Sow|DEF|68|75|763.293.600.223|2002||185|28|||
Bamo Meïté|DEF|39|74|819.319.553.578|2001||183|1|||
Yassin Belkhdim|MED|102|71|81|2002||175||58||
Max Finkgräfe|DEF|2|71|231.705|2004||183||||
Jordy Makengo|DEF|58|74|365.15|2001||191|1|||
Pedro Malheiro|DEF|127|70|149.856.62|2001||179|||28|
Nidal Celik|DEF|21|75|521|2006||192|2|||
Ibrahima Bamba|DEF|84|72|908.39|2002||185||||
Telasco Segovia|MED|159|77|768.200.442.1311|2003||175|20|||
Nicolás Valentini|DEF|4|76|150.69.356.416.66|2001||187||||
Nacho Ferri|AVA|54|71|281.470.473.354|2004||192||||
Adson|AVA|16|71|234.600.892|2000||171|||55|D
Felix Afena-Gyan|AVA|60|75|737.238.460|2003||175|11||31|E
Joel Roca|AVA|54|74|386.188.632|2005||176|1|||E
Noel Aseko|MED|2|73|418.133.281|2005||178|||53|
Gabri Martínez|AVA|54|73|386.188.163|2003||185||||E
André Luiz (2002)|AVA|16|68|357.295.732.632.476|2002||180||||D
Dominik Prpić|DEF|40|71|405.325|2004||188|||7|
Ibrahim Salah|AVA|102|75|465.731.818.132.744|2001||185||20||D
Francis Onyeka|MED|2|72|898.524|2007||186|||56|
Jovan Milosevic|AVA|145|74|911.298.331.665.923.163|2005||192|2|||
Damián Pizarro|AVA|29|73|227.871.511.710.1061|2005||187|1|||
Ümit Akdağ|DEF|132|72|65.402.854.141|2003||182||||
Alphadjo Cissè|MED|84|73|416.7|2006||181||||
Santiago Hidalgo|AVA|4|70|438.854|2005||174||||
Tomás Palacios|DEF|4|74|182.435.440.580.296|2003||196|1|||
Junior Diaz|DEF|39|68|600.862.818|2003||193|1|58||
Christian Ordóñez|MED|4|70|917.663|2004||177||||
Deniz Gül|AVA|152|74|410.325.371|2004||190|14|142|7|
Sadibou Sané|DEF|135|73|400.323.587|2004||185|2|||
Thiago Fernández|AVA|4|71|917.905.723.523|2004||175||||E
Matías Moreno|DEF|4|68|138.356.523.895|2003||193||||
Keita Kosugi|DEF|86|68|268.281|2006||168||||
Amadou Koné|MED|39|72|820.590|2005||178|1|100||
Modou Kéba Cissé|DEF|135|72|501.99|2005||191||||
Paul Mendy|AVA|135|65|196|2007||196||||
Renato Nhaga|MED|70|71|200.371|2007||172|10|||
Neno|GR|127|76|908.140.909|1962||182|9|23|7.20|
Juary|AVA|16|76|777.118.440.97.238.325.693.149|1959||168|2||7.58|E
Tom Starke|GR|2|81|524.408.750.421.133.1184|1981||194|||5.11.26|
Sérgio da Silva Pinto|AVA|2|76|523.302.1368.782|1980||182||127||D
Nikolce Noveski|DEF|97|78|548.1261|1979||190|64||33.53|
Maik Franz|DEF|2|77|933.479.281.418|1981||190|1|||
Markus Feulner|MED|2|78|133.231.548.157.620.115|1982||181|||5.33|
Patrick Ochs|AVA|2|80|281.133.933.421|1984||179|||5|D
Michael Rensing|GR|2|80|133.231.524.302.1329|1984||189|||5.54|
Chris|DEF|16|79|235.443.817.281.933.421.1338|1978||185||||
Roberto Hilbert|MED|2|80|394.298.141.524|1984||182|8||5.29|
Jerome Thomas|AVA|76|78|93.698.213.692.924.516.243.742|1983||178|||2.15|E
Boaz Myhill|GR|123|81|99.825.168.162.824.426.924.145.1136|1982||191|19|45||
Liam Ridgewell|DEF|76|80|160.99.145.924.691.929.166.426|1984||188||||
Glenn Loovens|DEF|124|78|354.300.253.197.204.779.789.828|1983||188|2||59|
Kamel Chafni|MED|102|75|330.502.4.15.818.980.957|1982||181|10|58||E
Gaël Danic|MED|58|74|731.398.393.862.319.885.541.746.819|1981||176||||E
Johan Audel|AVA|58|77|612.530.319.885.298.600|1983||180|5|||E
Fabien Audard|GR|58|75|854.746.319.587|1978||189|||24|
Mauricio Pinilla|AVA|29|82|218.440.203.812.709.413.864.892.87.652.196.378.100|1984||187|45||17.32.40|
Giuseppe Colucci|MED|84|74|359.737.156.416.575.165.729.18.201.218.209.674|1980||180|||19|
Stefano Morrone|MED|84|77|285.510.679.895.652.218.18.663.508.681|1978||179||||
Henri Bedimo|DEF|24|77|393.854.511.502.521.578.541.553|1984||180|51||4|
Juanma Ortiz|DEF|54|75|104.110.638.72.717.390.430.13|1982||179||||
Borja Fernández|MED|54|82|721.549.886.379.262.753.72.1327.1348.1347|1981||188|4||3.20.58|
Nano|DEF|54|76|127.110.379.245.638.66.709|1982||187|||54|D
Fernando Soriano|MED|54|75|258.779.72.638|1979||189||||
Rob Hulse|AVA|76|76|239.924.516.790.263.698.213.568.1009|1979||185||||
Sylvain Marchal|DEF|58|74|323.502.319.763.746|1980||184||||
Guirane N'Daw|MED|135|78|330.600.763.779.145.447.98.323.521|1984||190|41|||
João Tomás|AVA|127|75|27.140.142.908.163.38.57.149.732|1975||188|6||28.30.39.50|
Karl Henry|MED|76|78|825.216.934.698.155.162|1982||183||||
Ashkan Dejagah|AVA|80|80|418.933.367.38.617|1986||181|59||5.20|D
Wayne Routledge|AVA|76|79|243.853.692.367.197.99.698.610.830|1985||170||||E
Geoffrey Dernis|AVA|58|75|530.763.578.818.11|1980||171|||4|E
Aristide Bancé|AVA|18|76|469.563.135.548.769.115.302.20.1017.1237|1984||193|79|39|53|
Nicola Pozzi|AVA|84|78|209.7.601.674.285.768.794.663.218.1226|1986||182|||11|
Ayoze Díaz|DEF|54|75|189.709.549.262|1982||175|||43|
Danny Guthrie|MED|76|81|552.532.805.155.610.720.367.146.920|1987||170|||2.43|
Slawomir Peszko|MED|126|81|931.514.231.934.663.515.930|1985||173|44|||E
Julien Sablé|MED|58|76|763.521.612.746|1980||181||||
Michele Canini|DEF|84|79|100.196.378.218.333.97.238.663.1353|1985||187||||
Andrea Lazzari|MED|84|77|100.209.679.196.356.871.199.128.681|1984||184||||
Eugen Polanski|MED|126|81|158.379.548.421|1986||183|18||53|
Emmerson Boyce|DEF|11|79|539.243.929.147|1979||184|12|76|45|
David Barral|AVA|54|78|190.813.635.523.390.17.245.1348.709.1347|1983||183||||
Arnold Mvuemba|MED|129|76|731.692.319.541|1985||172|1|58||
Federico Peluso|DEF|84|80|696.841.100.463.781|1984||188|3||6|
Giovanni Marchese|DEF|84|75|858.848.218.201.128.764.378|1984||180|||21.51|
Stefano Sorrentino|GR|84|79|510.463.848.461.890.218.652.12|1979||186|||6.25|
Andrea Campagnolo|GR|84|75|222.737.378.859.196.729.201.794.209|1978||184|||19.51|
Marco Rossi|MED|84|77|764.356.232.378|1978||179|||37|
Guglielmo Stendardo|DEF|84|79|601.768.764.201.673.510.463.513.100.674|1981||190|||44|
Daniel Congré|DEF|58|75|854.578.266|1985||185||||
Ronald Zubar|DEF|58|78|759.553.934.4.608.727|1985||186|2|||
Emil Hallfredsson|MED|82|82|853.550.729.129.416.871.366.650|1984||185|73|||
Javier Garrido|DEF|54|80|725.551.510.616.507.13|1985||180|5||37|
Alberto Rivera|MED|54|81|721.553.523.142.813.283.1348.1347|1978||170|||3.19.23.58|
Reginaldo|AVA|16|77|858.356.663.794.452.892.201.580.696.724.729.857.871|1983||175|||21|
Geoffrey Jourdren|GR|58|75|578.19|1986||181|||4|
Joris Marveaux|MED|58|73|319.223.578.368|1982||178|3||4|
Wes Hoolahan|MED|78|81|533.147.616.924.610.1176|1982||168|43|||
Bruno Grougi|MED|58|72|759.223.818|1983||171|3|||
Claudiu Keseru|AVA|132|79|600.855.81.746.339.43.538.870|1986||178|47|||
Michael Kightly|AVA|76|78|934.921.825.175.177|1986||175||||E
Valter Birsa|MED|53|80|330.15.378.848.7.218.196.1031|1986||185|91|||D
Marcos Angeleri|DEF|4|76|296.828.586.771.89.598|1983||182|4||51|
Jesús Vázquez (1980)|MED|54|75|189.262|1980||182||||
Antonio Rukavina|DEF|145|82|665.157.1.886.905|1984||177|59|||
Andrea Coda|DEF|84|78|285.871.663.18.768.674.1123|1985||190||||
Andrea Raggi|DEF|84|78|285.652.768.154.128.587|1984||187|||4.34.44|
Tiberio Guarente|MED|84|78|100.416.787.154.201.218.285|1985||182|||48|
Paulo Machado|MED|127|75|325.295.519.520.763.854.632.277.265|1986||171|6||7.28.34.40|
Javier Camuñas|AVA|54|77|379.719.638.905.262|1980||175||||D
Pedro Ríos|AVA|54|74|379.523.246|1981||175||||D
John Ruddy|GR|76|80|920.299.824.935.168.239.583.616.934.145.610.1176.1290|1986||193|1||18.39.55|
Marc Wilson|DEF|78|76|939.692.539.160.825.924.155.828|1987||188|25|79||
Renato Civelli|DEF|4|76|125.553.382.771.612.176.530.427|1983||193|||51|
Geoff Cameron|DEF|45|75|423.825.221.698|1985||191|55|||
Antonio Barragán|DEF|54|81|532.262.886.888.565.142.283|1987||182|1||39.43|
Przemyslaw Tyton|GR|126|80|735.648.283.298.262.221.32.334|1987||195|14|||
Ryan Taylor|MED|76|78|929.610.426.1327.1189|1984||173||||
Mouhamadou Dabo|DEF|58|77|763.787.541.862.759|1986||176||135||
Siaka Tiéné|DEF|39|78|20.763.820.885.647.578|1982||176|96||4.11|
Andrea Masiello|DEF|84|76|118.463.794.378.128.100|1986||185|||19.21|
Xisco|AVA|54|78|262.610.709.246.549.638.677.9|1986||188||||
Stephen Ward|DEF|78|81|934.166.175.825.447.920|1985||185|50|||D
Stefan Aigner|MED|2|76|91.1.281.229.1303|1987||183||||D
Lewis Grabban|AVA|76|77|243.628.583.568.164.742.160.616.36.99.617.720.828|1988||183||||
Mikel González|DEF|54|78|725.779.13|1985||190|7|||
Miguel Flaño|DEF|54|76|638.246.181|1984||177||||
Javier Balboa|AVA|69|77|127.721.140.307.67.136.292.1182.1348.709.1347|1985||182|32|54|3.7.19.30.38|D
Dennis Oliech|AVA|128|77|38.600.15.4|1985||181|76|||D
Fernando Tissone|MED|4|78|871.100.768.549.586.480.265.597.1369|1986||182||||
Marco Andreolli|DEF|84|79|440.737.781.218.787.196.1226|1986||187|||6.37.44|
Perparim Hetemaj|MED|57|78|334.165.218.139.729.12.1017|1986||176|49|145||
Abel Aguilar|MED|33|80|260.97.871.430.779.262.854.137.120.250|1985||186|71|||
DJ Campbell|AVA|76|77|823.164.145.518.147.263.698.447.146.568|1981||178|2|||
David Cobeño|GR|54|78|688.719.721.787.72.1348.1347|1982||189|||59|
Sebastian Prödl|DEF|165|82|827.923.921.871|1987||194|73||38|
Garry Bocaly|DEF|58|74|553.578.5|1988||180|||4.24|
Federico Di Francesco|AVA|84|75|674.663.238.154.781.760.285.513.652.1123|1994||178||||E
Makoto Hasebe|DEF|86|82|881.933.620.281|1984||180|114||5.59|
Romain Danzé|DEF|58|74|731|1986||184||||
Pape Diop|MED|135|77|731.855.384.709.523.291.753|1986||180|20|||
Mathieu Coutadeur|MED|58|74|512.587.319.819.4|1986||170||||
Alaixys Romao|MED|149|79|854.393.319.553.632.820.398.445.474|1984||188|97|58|17.40|
Stefan Ilsanker|MED|165|78|767.705.281.378.1035|1989||189|61||59|
Manuel Iturra|MED|29|77|864.519.722.586.390.871.719.605.905.1102.545|1984||174|33||17|
Gonzalo Jara|DEF|29|82|227.924.166.617.548.864.296.555.226.1156.1343|1985||178|115||17|
Liam Bridcutt|MED|51|79|215.939.921.824.166.828.516.147.155.983.617|1989||175|2|76|2.11.50|
Manuel Schmiedebach|MED|2|76|418.874|1988||170||||
Modibo Diakité|DEF|58|78|674.510.828.356.262.196.366.768.128.841|1987||192|||48|
Philipp Bargfrede|MED|2|78|923|1989||174||||
Dennis Diekmeier|DEF|2|78|923.620.408.762|1989||188||||
Sone Aluko|AVA|115|79|145.26.147.717.426.367.447.720|1989||173|7|76||D
Fabian Lustenberger|MED|143|78|321.418.942|1988||180|3|||
Fraizer Campbell|AVA|76|80|744.552.426.853.828.197.243.425|1987||172|1||2.10.58|
Darron Gibson|MED|78|83|552.744.934.299.828.929|1987||183|28|79|2.10.45.58|
Timo Gebhart|MED|2|76|1.298.620.339.1261.1113|1989||182||||
Fran Mérida|MED|54|83|127.93.725.110.163.430.102.754.638.719.291.187.1137|1990||175|||3.15.51.59|
Yannick Djaló|AVA|127|76|812.200.140.854.756.581.909|1986||171|2|70|30.40.46|E
Rudy Mater|DEF|58|73|885.1346|1980||180||||
Ikechukwu Uche|AVA|115|78|379.779.390.905.843.586.384.709|1984||172|46|||
Beram Kayal|MED|83|77|545.204.166.213|1988||178|47|||
Jonathan Howson|MED|76|78|516.616.565|1988||180||||
Felipe Lopes|DEF|16|75|396.80.597.933.298.214|1987||189||||
Fabri|GR|54|77|262.886.142.141.367.549|1987||180|||38|
Sergio Álvarez (1986)|GR|54|78|203.709|1986||177|1||36|
Chris Martin|AVA|51|77|616.539.243.831.263.168.169.367.426.698.720|1988||178|17|76||
Duje Cop|AVA|40|78|405.597.277.196.586.813.822.886.592.404|1990||187|14|||
Jason Puncheon|MED|76|78|543.684.805.568.698.147.243.425.83.1192.651.1280|1986||173|||42|
Jonas Lössl|GR|43|79|566.398.548.425.299.164|1989||195|1||11.38|
Billy Sharp|AVA|76|78|790.783.270.805.617.720.516.426.499|1986||175|||42|
Timothy Chandler|DEF|45|79|620.281|1990||186|29|2|59|
Licá|AVA|127|74|27.860.292.325.719.908.617.390.137.120.346|1988||181|1||12.32.35.38.40.41.52|E
Peter Pekarík|DEF|52|82|933.486.418.179|1986||176|138|||
Marcel Risse|MED|2|77|524.620.548.231|1989||183|||53|D
Darren Randolph|GR|78|81|213.178.583.145.925.565.160.1086.1190|1987||188|51|||
Raúl Bobadilla|AVA|122|79|734.391.158.90.942.132.115.89.1170.1107.358.1089|1987||180|11|4||D
Domingo Cisma|DEF|54|76|104.72.709.110.283.246|1982||184|||51|
Henri Saivet|MED|135|80|156.81.610.763.799.176.223.666.759|1990||174|31||4.43|
Ermin Bicakcic|DEF|21|78|298.278.421.1001|1990||185|43|||
Didier Digard|MED|58|77|511.647.565.612.142.638|1986||184||||
Marquinho|MED|16|78|653.159.355.358.737.416.46.871.36.102.892|1986||182||||
Jonathan Cristaldo|AVA|4|75|917.561.154.710.185.577.611.1018.653|1989||174|1|||
Alan Kardec|AVA|16|77|892.443.140.777.653.834.102.112.462|1989||188|||30.50|
Caiuby|AVA|16|75|353.834.234.833.397.933.315.115.391.1184|1988||184|||5|E
Maicosuel|MED|16|75|659.242.653.159.421.871.112.395.834|1986||180||||E
Steven Vitória|DEF|25|80|325.629.748.292.140.678.515.582.214.149|1987||195|46||7.28.30.38.46|
Miguel de las Cuevas|MED|54|77|430.110.813.638.810.246|1986||175||||D
Nicolas Höfler|MED|2|74|365|1990||181||||
Simone Padoin|MED|84|81|100.463.196.97.1226|1984||179|||6|
Cheikh M'Bengue|DEF|135|75|854.731.763|1988||182|26|58||
Damien Da Silva|DEF|58|75|210.502.223.759.731.541.556.544|1988||183|2|||
Foued Kadir|MED|5|77|75.885.553.731.142.5.9.1346.316.379|1983||179|25|58|17|
Andrés Fernández|GR|54|76|638.754.325.390.905.72.181.523|1986||184|||32.35.39|
Roberto Canella|DEF|54|76|813.262.187|1988||183||||
Jorge Molina|AVA|54|74|283.142.379.390|1982||189||||
Adrián Colunga|AVA|54|77|507.779.379.813.166.390.549.83.1250|1984||172||||
Miku Fedor|AVA|159|77|888.384.379.204.43.719.262.633.975.722|1985||182|51||44|
Carlos Martínez|DEF|54|78|725.723.174|1986||188|3|||
David Abraham|DEF|4|78|438.384.132.379.421.281.427|1986||188||||
Javi Varas|GR|54|77|787.203.886.507.390.754|1982||182|||59|
Claudio Beauvue|AVA|58|77|862.502.746.398.541.203.186.759.262.866|1988||174|3|||D
Mário Felgueiras|GR|127|74|812.690.163.909.732.191.492.668.83|1986||184|||30.34.40|
Fernando Varela|DEF|23|78|292.860.349.339.642.200.74|1987||182|51|127|9|
Marwin Hitz|GR|143|80|331.943.337.933.115.157.132|1987||191|2||5|
Miguel Lopes|DEF|127|79|732.325.142.163.812.541.390.33.486.295|1986||182|4||7.12.28.30.34.38.40.55.59|
Maciej Rybus|DEF|126|79|517.34.541.535.809.745|1989||173|66|||
Maxime Le Marchand|DEF|58|77|511.731.612.367.744.293|1989||185||||
Kévin Théophile-Catherine|DEF|58|76|731.197.763.277|1989||183||||
Davide Lanzafame|AVA|84|77|463.128.652.663.165.201.673.618.29.352.1034.1226|1987||180|||21.24.44|D
Callum McManaman|AVA|76|76|929.147.924.789.828.539.556|1991||174|||45|D
André Santos (1989)|MED|127|75|812.519.262.908.123.323.92.120.391.631.877.891.909|1989||178|2||28.40.46|
Marco Matias|AVA|127|73|812.891.724.908.363.597.789.120.346|1989||177|||40.46|E
Stefan Johansen|MED|116|72|152.826.204.367.698.924|1991||182|55|||
Vegard Forren|DEF|116|75|576.805.166.757|1988||186|33||42|
Scott Dann|DEF|76|79|920.236.145.146.243.720|1987||194||||
Víctor Sánchez|MED|54|77|127.379.606.291.386.927|1987||174|4||3.26.42.58|
Nikolaos Karelis|AVA|63|76|288.76.654.377.642.164.10.655.657.1120|1992||178|19|||
Aron Gunnarsson|MED|82|81|22.236.197.38.43.700.982|1989||181|111||54|
Andreu Fontàs|DEF|54|80|386.127.549.203.476|1989||186|4||3.22.26.36.58|
Timm Klose|DEF|143|78|132.332.620.933.616.168|1988||193|17|2||
Innocent Emeghara|AVA|143|75|338.337.391.319.794.18.699.756.478|1989||170|9|115||
Ahmed Elmohamady|DEF|47|81|828.426.99|1987||182|92||38|
Ángel Rangel|DEF|54|73|386.830.698|1982||188|||45|
Luke Freeman|MED|76|79|93.939.823.168.790.617.1192.1190.539.568.698|1992||181|||15|D
Gary Madine|AVA|76|74|198.236.789.147.155.197.1245.790|1990||191||||
Dídac Vilà|DEF|54|79|291.7.142.753.12|1989||184|2||22.42|
Anthony Pilkington|AVA|78|77|824.425.616.197.146.1189.929|1988||183|9|76||E
Luke Ayling|DEF|76|75|93.939.168.516.565|1991||183|||15.17|
Maurício (1988, Spartak de Moscovo)|DEF|16|66|192.653.395.693.280.811.812.510.809|1988||185|0|16|34.38.50|
Paulo Victor (1987)|GR|16|73|357.375.395.554.40.57.65|1987||187||||
Jens Stryger|DEF|43|78|172.613.117.871.856.550|1991||180|54|||
El Fardou Ben|AVA|34|77|511.897.632.522.656.294.17.945|1989||173|46|58|38.40|
Ignasi Miquel|DEF|54|78|93.518.616.688.187.586.379.386.186.754.390.523|1992||193|||15|
Jonathan Schmid|MED|58|78|365.421.115|1990||179||||
Darko Lazović|AVA|145|80|294.378.416.959|1990||181|29|||D
Filippo Falco|AVA|84|75|513.729.461.857.154.209.139.673.674.294.196.191.1122|1992||171|||44|D
Gaizka Toquero|AVA|54|79|66.725.753.101.779|1984||182|7||17|D
Franco Zuculini|MED|4|77|710.421.378.779.95.154.416.228.255.760.895|1990||176|1|||
Alberto de la Bella|DEF|54|78|725.632.507.307|1985||182|4||22.40|
Pedro Morales|MED|29|76|864.277.586.889.227.1156|1985||181|12||17|
Ronny Rodelin|AVA|58|75|736.600.862.530.759.585.398.786|1989||192||||D
Osvaldo|AVA|16|76|360.163.202.834.36.358.811.280|1987||170|2||50|D
Tjaronn Chery|MED|141|75|334.10.747.310.312.698.486.545.589.744|1988||170|10|124||
Cheick Diabaté|AVA|100|78|156.4.19.639.323.139.43.963|1988||194|39||4|
Martin Kelly|DEF|76|81|532.425.243.924.929|1990||191|1||43|
Sean Morrison|DEF|76|75|831.425.720.197.742|1991||193||||
Grégory Sertic|MED|58|76|156.521.553.338|1989||181|||4.12|
Moritz Leitner|MED|2|80|1.157.298.510.115.616.338|1992||176|||5.33.53|
Lukas Rupp|MED|2|77|479.158.750.298.421.616.90|1991||178||||
Albert Adomah|AVA|60|79|168.565.99.617.197.698.1192.920|1987||185|19|76||D
Diego Farias|AVA|16|75|218.416.359.650.781.196.285.513.810.139|1990||172||||E
Éder|AVA|127|82|27.163.830.530.535.56|1987||189|35|70|8.12.17.25.28.32.40.52|
Andre Hoffmann|MED|2|75|302.990.1184|1993||190||||
Mikel Balenziaga|DEF|54|79|725.101.886.262|1988||177|7|||
Jordi Amat|DEF|54|79|291.719.830.142.466|1992||185|27||22.42|
Rubén Sobrino|AVA|54|80|688.386.551.66.888.245.656.1348.1347|1992||185|||26|
Gueïda Fofana|MED|58|76|511.541|1991||182||||
Matthias Zimmermann|DEF|2|77|479.158.394.762.298.302|1992||178||||
Cote|DEF|54|79|813.737.725.325.905.753.638|1989||182|||32.35.36.39|
Junior Stanislas|AVA|76|78|925.175.160|1989||183||||E
Alejandro Faurlín|MED|4|77|738.734.439.698.652.185.379.549.1032|1986||185||||
Rubén Botta|MED|4|75|842.18.440.218.649.771.254.128.228.182.598.1353|1990||175|||37|
Luca Caldirola|DEF|84|78|907.440.165.209.923.139.580|1991||189|||43.44|
Felix Klaus|AVA|2|75|394.365.933.302|1992||179||||D
Robert Beric|AVA|53|75|593.827.718.763.80.217.1044.1137|1991||188|25|||
Sammy Ameobi|AVA|76|79|610.565.197.155.617|1992||192|||43|E
Joel Ward|DEF|76|78|160.692.243.830|1989||188||||
Mateusz Klich|MED|126|78|237.933.645.0.334.516.882.247.108|1990||183|41||17|
Tolga Cigerci|MED|152|77|933.158.418.371.351.131.82.799|1992||185|4|2||
Stanislav Kritsyuk|GR|134|75|732.163.494.120.380.947|1990||192|2||28.39.41.52|
Karl Darlow|GR|123|79|617.920.610.426.516.552.1164|1990||185|15|76|43.47|
Matthew Lowton|DEF|76|79|790.352.99.175.425|1989||180||||
Gotoku Sakai|DEF|86|82|68.298.408.906|1991||176|42|45||
Kléber|AVA|16|77|554.112.325.653.292.122.452.941|1990||189|2||7.35.41.55|
Luis Advíncula|DEF|125|77|751.421.689.909.176.611.843.719.150.1068.1299.1067|1990||177|130|||D
Bram Nuytinck|DEF|124|75|589.80.871.768|1990||191||||
Steve Morison|AVA|123|78|615.823.568.616.516.793|1983||188|28|76||
Florian Kainz|MED|165|80|827.718.923.231|1992||174|28|||
Lucas Orbán|DEF|4|77|734.842.156.888.523.378.710|1989||184|2||39.51|
Arnaud Souquet|DEF|58|74|530.662.585.266.612.465.578.217|1992||180|||4|
Neeskens Kebano|AVA|129|76|647.759.702.377.367.47.565|1992||180|35|58|11.38|E
Allan Nyom|DEF|24|80|5.871.390.921.924.186.379|1988||186|18|58||
Ryan Mendes|AVA|23|78|511.530.617.486.51.478.490|1990||178|120|||E
Fransérgio|MED|16|72|102.659.240.443.202.397.554.163.156.235|1990||187|||9|
Romaine Sawyers|MED|140|79|924.793.920.164.825.197.169.1280|1991||173|60|76||
Gabriel Silva (1991)|DEF|16|77|653.618.390.871.199.378.763|1991||179|||50|
Guilherme|MED|16|77|693.234.871.262.632.59|1991||177|2||35.37|
Koray Günter|DEF|2|78|157.371.378.416.768.478.402.53.980|1994||184|||33|
Xavier Chavalerin|MED|58|71|855.727.820.862|1991||178||||
Tae-hee Nam|MED|37|77|885.39.59.940.457.167|1991||174|54||40|D
Ivan Ordets|DEF|153|76|788.322.276.898.960|1992||195|12||41.59|
Loris Benito|DEF|143|77|338.140.942.156.329.1170|1992||182|13||7.30|
Diego Falcinelli|AVA|84|74|781.461.673.241.356.154.222.294.575.810|1991||185|1|||
Karim Onisiwo|AVA|165|77|767.548.1035|1992||188|24|||D
Adam Forshaw|MED|76|76|299.164.929.565.516.146.616.684|1991||185|||17|
Markus Henriksen|DEF|116|76|739.22.426.168|1992||187|58||38|
Sargis Adamyan|AVA|6|76|451.421.224.231.1261|1993||184|36|||
Mathew Leckie|AVA|8|80|31.158.315.418.557|1991||180|81|||E
Maxime Poundjé|DEF|58|75|156.622.509|1992||179||||
Jonathan Gradit|DEF|58|72|855.759.521.1105.156|1992||180||||
Iñigo Ruiz de Galarreta|MED|54|77|101.144.188.779.186.507.549.184|1993||175|1||17|
Ali Ahamada|GR|34|76|854.486.757.1096|1991||189|36|58||
Jonas Martin|MED|58|76|578.75.142.293.731.530.818.866|1990||182|||41|
Nacho Martínez|DEF|54|72|719.886.181.189.307|1989||175||||
Ibai Gómez|AVA|54|79|144.101.66.262|1989||177|4||17|E
Ravel Morrison|MED|85|80|552.925.145.197.698.510.109.790.565.10.263.247.1058|1993||175|21|76|2.10|
Giannis Fetfatzidis|AVA|63|80|632.378.218.36.90.760.17|1990||164|27||25.34|D
Stiven Mendoza|AVA|33|74|286.183.260.234.609.279.75.202.777.29.527.102.1364|1992||171|2||20|E
Choco Lozano|AVA|72|74|888.189.386.245.379.72.778.1076|1993||183|64|||
Jesse Joronen|GR|57|78|367.823.6.233.165.895.652.1086.1176.1260|1993||197|23|||
Jere Uronen|DEF|57|78|377.818.212.14.113.1100.782|1994||177|75|||
Felipe Gutiérrez|MED|29|78|334.142.443.476.864.62.229.1157|1990||170|35||17|
Nick Powell|MED|76|82|239.552.929.518.426.162.824.825|1994||183|||2.10.54|E
Samba Diakité|MED|100|75|19.698.921.46.727|1989||186|9|58||
Tomás Pina|MED|54|76|549.905.224.66.722|1987||184||||
Aleksandar Katai|AVA|145|76|911.623.632.682.294.66.217.499|1991||182|13||34|D
Daniel Bessa|MED|16|73|440.629.807.154.232.378.416.389.980.1226|1993||173|||37|
Anthony Ujah|AVA|115|78|531.548.231.923.874.278|1990||180|7||53|
Raúl Navas|DEF|54|77|787.887.886.203.753.725.638.188.307.507|1988||185||||
Pantelis Hatzidiakos|DEF|63|75|22.196.233.642|1997||181|41||13.44|
Tim Ream|DEF|45|81|608.155.367.212|1987||186|86||38.42|
Sergio León|AVA|54|76|143.142.722.283.638.523.886.1177.753|1989||178||||
Majeed Waris|AVA|60|76|429.809.885.856.319.325.600.293.83|1991||172|31||7.52|D
Michael Frey|AVA|143|74|942.530.321.338.351.620.919.744.698.391.782|1994||188||||
Yvon Mvogo|GR|143|79|942.705.648.319|1994||186|14|24||
Cristian Lema|DEF|4|74|95.611.842.138.140.677.150.1369.251.1138.996|1990||190|||7.18.46|
Louis Schaub|MED|165|79|718.231.408.321|1994||177|31|2||
Nicolas Isimat-Mirin|DEF|58|77|885.587.648.141.854.476.907.474|1991||189|||34.44|
Naldo (1988)|DEF|16|77|627.689.242.395.154.390.871.379.812.494.291.84.61.520.709|1988||188|||30|
Konstantinos Stafylidis|DEF|63|78|642.524.367.115.825.421.898.17.1329.1261|1993||178|32||25|
Ewerton (1989)|DEF|16|74|811.627.163.85.812.620.0.408|1989||188|||30.34.38|
Recio|MED|54|74|586.390.186.753.87.105.246|1991||183|||28|
Christopher Lenz|DEF|2|78|874.422.281.705.421.302|1994||180|||59|
Ivica Ivusic|GR|40|75|694.440.591.632.594.651.405|1995||195|6||37|
Antonio Colak|AVA|40|76|479.620.515.0.421.315.404.642.550.717.663.810.517|1993||189|3|2|9|
Robin Zentner|GR|2|75|548.422|1994||194||||
Álvaro Vadillo|AVA|54|76|143.142.390.291.203.586.709.753.754|1994||180||||E
Adam Reach|DEF|76|73|565.793.162.695.789.983.924.936|1993||185||||E
Moses Odubajo|DEF|76|74|526.164.426.789.698.90.12.633|1993||177|||38|
Pedro Henrique|DEF|16|70|908.63.111.389|1992||190|||32.52|
Raúl Silva|DEF|16|73|730.102.811.240.537.355.554.202.163.292.877.346|1989||191|||9|
Kelvin|AVA|16|79|659.325.732.653.834.159.235.358.621.730.892.903|1993||175|||7.32.35.39.41.52.55|D
Renaud Emond|AVA|20|70|919.822.600.466|1991||185||||
Juan Sánchez Miño|DEF|4|75|150.848.296.242.283.1369.228.438.842|1990||175||||D
Callum Paterson|AVA|51|75|413.197.543.789|1994||183|17|||
Salih Uçan|MED|152|78|351.737.329.285.65.141.131.376|1994||188|3||55|
Nahki Wells|AVA|13|72|198.162.425.175.698.168.539|1990||170|32|||
Joel Pohjanpalo|AVA|57|78|524.302.874.180.895.652.1017.408|1994||186|93|||
Robin Lod|MED|57|77|654.813.569.217.1017|1993||180|85|||D
Óscar Duarte|DEF|38|81|224.291.523.63|1989||184|76|114||
André Ramalho|DEF|16|75|767.318.524.548.648.234|1992||182||||
Isaac Cuenca|AVA|54|80|436.127.32.262.176.390.1079.1276|1991||181|1||22.26|E
Jota Peleteiro|MED|54|77|203.753.164.145.99.66.1348|1991||180|1||36|D
Emrah Başsan|AVA|152|67|670.84.371.180.362.909.121.486.799|1992||177||||D
Charly Musonda Jr.|AVA|20|78|215.142.204.907.83.523|1996||173|||21.48.53|E
Thomas Didillon-Hödl|GR|58|75|323.706.80.377.207.587|1995||193||||
Koffi Djidji|DEF|39|75|600.848.241.18|1992||184||58|44.52|
Kalifa Coulibaly|AVA|100|75|702.465.600.294.1218.759|1991||197|31||44|
Mitchell Dijks|DEF|124|77|32.414.616.154.907.362|1993||192||||
Yassine Benzia|MED|5|78|541.530.351.632.266.411.699.42|1994||179|20|58|17|
Matteo Luigi Brunori|AVA|84|66|663.1314.979.97.460.463.652.674.728.768|1994||180|3|16||
Marcel Hartel|MED|2|75|231.874.91.817.815|1996||176||||
Rodrigo Aguirre|AVA|157|77|871.285.673.320.598.159.503.438.605.677.577.77.843.1062|1994||186|13||17.48|
Derley|AVA|16|71|202.554.140.486.265.1296.1298|1987||183|||7.30.46|
Paul Arriola|AVA|45|75|226.247.830.250.784|1995||167|50|||D
Gerrit Holtmann|AVA|56|74|278.548.750.898.84|1995||183|7|2||E
Anthony Briançon|MED|58|74|622.763.666|1994||185||||
Baptiste Reynet|GR|58|73|266.319.854.622|1990||185||||
Jackson Irvine|MED|8|81|204.489.740.177.426.419.817.208|1993||179|86|||
Ulisses Garcia|DEF|143|76|391.923.620.942.553.781|1996||185|11|127||
Rachid Alioui|AVA|102|74|398.819.622.81.470.1265|1992||186|18|58||
Sequeira|DEF|127|68|520.597.163.670.1360|1990||178|||9|
Kristoffer Olsson|MED|142|78|93.566.14.494.80|1995||178|47||15|
Salem Al-Dawsari|AVA|7|81|45.905|1991||171|114||30.34.37|E
Joe Ralls|MED|76|72|197.939.684|1993||178||||
Michael Zetterer|GR|2|74|923.3.645.281.516|1995||187||||
Harry Toffolo|DEF|76|75|616.831.742.675.783.270.568.425.617.212.983|1995||183|||39|
Lewis Baker|MED|76|79|215.543.789.907.516.302.856.146.176.565.720.825|1995||182|||17.21.31.48.53|
Davide Biraschi|DEF|84|75|118.378.478.366|1994||182||||
Mattia Aramu|MED|84|74|848.857.18.696.794.895.378.128.987.841|1995||180||||
Kevin Stewart|MED|85|77|239.853.532.177.216.831.147.426|1993||182|2|76|12.33|
Gennaro Tutino|AVA|84|71|601.118.128.416.1123.199.285.652.663.764.768.1226|1996||177|||11.43.48|
Pedro Bigas|DEF|54|76|549.507.753.283|1990||180||||
Tozé|MED|127|72|325.292.908.582.51.44.58|1993||174|||32.35.41.52|
Xavi Quintillà|DEF|54|80|905.776.9.17.186.968.1039.616|1996||183||||
Opa Nguette|AVA|135|74|885.323|1994||181|10|58||E
Rúnar Alex Rúnarsson|GR|82|76|613.266.93.625.65.197.233.1333|1995||185|27||16|
Eduard Sobol|DEF|153|77|564.788.563.561.948.802.453.224.293.377|1995||186|29||41|
Jimmy Cabot|AVA|58|74|862.319.81.521|1994||164||||D
Kévin Rodrigues|DEF|127|76|854.266.725.186.753.719.29.55.484.374.376|1994||170|3|58|25|
Joshua Brenet|DEF|42|80|648.421.907.334.57.533.486|1994||181|23|124||
Prince Owusu|AVA|60|75|91.1.750.451.849.579|1997||191|2|2||
Jozabed Sánchez|MED|54|75|688.719.203.187.367.386.586|1991||180||||
Mirko Marić|AVA|40|73|277.592.348.594.580.241.404.895|1995||186|2|21||
Felipe Avenatti|AVA|157|75|734.841.154.470.822.744.875.135.967.1006.677|1993||196||||
Julio Tavarès|AVA|23|74|266.958.1182.56|1988||187|46|||
Nacho Vidal|DEF|54|78|430.888.638.549.723|1995||180||||
Aleix Febas|MED|54|77|779.67.549.586.283.203.1348.1347|1996||172|||57|
Alexander Szymanowski|AVA|4|72|172.186|1988||175||||E
Issiaga Sylla|DEF|68|73|854.368.521.578.98|1994||180|92|||
Olivier Ntcham|MED|24|80|551.378.204.553.830.769|1996||180|9|58|26|
Lautaro Giannetti|DEF|4|74|917.871.84.611|1993||184||||
Ricardo Centurión|AVA|4|74|710.378.130.150.1018.771.772.834.917|1993||174|||49|E
Bruno Gaspar|DEF|3|75|908.356.812.632.889.87|1993||180|4|127|32.46.47.52|
Renaud Ripart|AVA|58|71|622.862.746|1993||181||||D
Sam Byram|DEF|76|78|516.925.617.616.565|1993||180||||
Silvan Hefti|DEF|143|74|331.942.378.578.408.247|1997||183||||D
Dereck Kutesa|AVA|143|75|786.132.321.331.820.949.12|1997||176|3|||E
Filip Bradaric|MED|40|80|405.404.196.203.37.36|1992||185|6|||
Wladimiro Falcone|GR|84|75|768.232.18.513.1352|1995||195|||44|
Francesco Vicari|DEF|84|74|618.760.128.728|1994||190||||
Yoan Cardinale|GR|58|75|612.1265|1994||181||||
Federico Bonazzoli|AVA|84|72|440.768.165.760.650.848.764.416.238|1997||182|||37.44|
Lorenzo Montipò|GR|84|72|618.794.199.139.416.895|1996||191||||
Fede Cartabia|AVA|4|75|888.246.262.163|1993||170|||39|D
Cedric Itten|AVA|143|77|132.321.331.717.394.942.302.923|1996||189|19|||
Milan Gajic|DEF|145|74|624.156.294.194|1996||178|2|40||
Jon Gorenc Stankovic|MED|53|74|425.827|1996||190|33|||
Takuma Asano|AVA|86|83|775.93.298.665.898.549|1994||173|53||15|D
Izzy Brown|AVA|76|79|924.215.907.166.516.789.425.539.695.742|1997||182|||2.17.21.31.48|D
Nikola Vasilj|GR|21|79|948.817.958|1995||193|30||18|
Paweł Dawidowicz|DEF|126|80|515.898.652.416.140.715|1995||188|17||25|
Berkay Özcan|MED|152|75|298.408.131.180.478|1998||174|7|2||
Pasquale Mazzocchi|DEF|84|74|663.673.895.764.601.416|1995||183|1||6.21.37|
Christian Fassnacht|AVA|143|77|337.332.942.616|1993||185|24|||D
Niclas Eliasson|AVA|142|64|14.614.168.622.12.1098.443|1995||178|9|||D
Iñigo Córdoba|AVA|54|77|101.184.144.66.387.362.174.981|1997||180||||E
Asier Villalibre|AVA|54|79|101.184.144.886.66.709|1997||184|3|||
Álvaro Medrán|MED|54|75|721.379.888.66.719.217.61.40.1348.1347|1994||176|||11.43.57|
Patrick Ciurria|MED|84|72|810.794.580|1995||178||||
Daniele Verde|AVA|84|76|737.366.674.118.416.886.12.810.764.478|1996||169||||D
Daniel Iversen|GR|43|78|518.628.742.625.695.825|1997||193||||
Hayao Kawabe|MED|86|73|775.391.934.822.974|1995||178|8||35|
Riad Bajic|AVA|21|74|492.871.131.97.165.385.82.13.1001|1994||189|12|||
Vukasin Jovanovic|DEF|145|77|294.947.156.753.87.244.433|1996||188||||
Gonzalo Escalante|MED|4|75|150.201.753.510.66.238.245|1993||175|||48|
Renzo Saravia|DEF|4|78|138.710.325.443.159.112.888|1993||178|9||49.50.52|
Andrei Girotto|DEF|16|77|395.78.653.498.211.600.61.1182|1992||186|||44|
Lucas Evangelista|MED|16|76|834.871.654.292.600.908.704.653|1995||181|||9|
Jérôme Onguéné|DEF|24|76|330.298.767.378.281.786.676.301.318|1997||190|10|||
Jamiro Monteiro|MED|23|75|747.417.323.678.756.374.645.589|1993||175|61|124|13|
Manu García|MED|54|80|551.588.854.813.66.90.476|1998||170|1||26|D
Bruno Henrique (1989)|MED|16|75|537.693.234.652.653.46.443.112|1989||180|||39.50|
Rominigue Kouamé|MED|100|75|530.662.207.862.245.217.223|1996||177|7|39|17|
Sebastiano Luperto|DEF|84|78|601.696.285.241.196.238|1996||191|||11.48|
Lukas Mühl|DEF|2|73|620.117.810.337.451|1997||189||||
Dmitriy Skopintsev|DEF|134|73|705.318.741.124.494.276|1997||176||||D
Lukas Klünter|DEF|2|76|231.418.91.1367|1996||184||||
Emre Mor|AVA|152|81|613.157.203.371.632.478.351.301.589|1997||167|15|43|30.31.53|D
Roger Martínez|AVA|33|71|710.69.905.77.61.60.1183|1994||180|28||19.20|D
Assane Dioussé|MED|135|75|285.763.218.82.623.15|1997||175|3|||
Enock Kwateng|DEF|58|75|600.156.82|1997||183|||44.52|
Phillip Tietz|AVA|2|72|278.750.115.548|1997||190||||
Jon Bautista|AVA|54|77|725.466.186.753|1995||182|2|||
Jon Guridi|MED|54|76|725.188.66.787|1995||179|1|||
Ashley Fletcher|AVA|76|76|552.129.925.147.425.565.608.789.828.921.929|1995||185|||54|
Qazim Laci|MED|1|77|632.17.522.4.806.180|1996||179|48||38.40|
Sada Thioub|AVA|135|75|612.622.81.763.398.746.759|1995||179|7|58||D
Habib Maïga|MED|39|76|763.96.323.352|1996||181|13|||
Isaac Success|AVA|115|77|726.390.921.586.871.62|1996||186|4||38|
Félix Eboa Eboa|DEF|24|72|398|1997||182|1|||
Miro Muheim|MED|143|79|338.331.408.215|1998||182|13||21|
Erick Cabaco|DEF|157|76|598.19.523.379.390.292.709.1109|1995||186||||
Nuno da Costa|AVA|23|74|885.293.617.585.759.15.484.131.84|1991||182|14|||D
Benjamin Tetteh|AVA|60|75|822.803.153.806.938.426.323.593.980|1997||193|7|||E
Masaya Okugawa|MED|86|73|498.318.767.422.91.115.408.1035|1996||176||||E
Fede San Emeterio|MED|54|74|709.886.390.245.688|1997||174||||
Giangiacomo Magnani|DEF|84|74|728.673.463.781.165.416.768.652|1995||190||||
Georgios Kyriakopoulos|DEF|63|75|98.288.644.781.154.580.654|1996||182|11||43|
Carel Eiting|MED|124|78|32.425.377.336.334.807.633|1998||179||||
Isac Lidberg|AVA|142|68|410.432.407.170.387.882.158.1155|1998||186|3|||
Enrico Brignola|AVA|84|77|139.781.18.366.760.841|1999||168||||D
Andrés Cubas|MED|122|74|150.674.254.182.622.889|1996||163|40|4||
Fabio Depaoli|MED|84|74|218.768.100.139.416|1997||178|||44|
Dimitrios Limnios|AVA|63|76|113.642.231.334.654.362.17|1998||178|26||9.43.46|D
Youssef Maleh|MED|102|71|209.895.356.513.285.238.1282|1998||179|1|84||
Raúl Guti|MED|54|74|283.258.779|1996||177||||
Valery Fernández|AVA|54|80|386.549.779.28|1999||179||||D
Kristian Pedersen|DEF|43|76|874.145.231.830.789.311.1048|1994||189|1|||
Maxim Leitsch|DEF|2|74|898.548|1998||188||||
Kevin Diks|DEF|75|80|907.356.354.285.25.233.158|1996||186|16|124||
Dani Martín|GR|54|75|813.142.189.978.586|1998||187||||
Manu Morlanes|MED|54|76|905.72.291.549|1999||178||||
Deyovaisio Zeefuik|DEF|124|75|32.312.418.416.146|1998||185||||
Amath Ndiaye|AVA|135|77|104.110.189.379.549.886|1996||173|4||51|E
Iké Ugbo|AVA|25|80|207.862.377.87.129.197.215.543.735.783.789|1998||186|9|76|21.48|
Dani de Wit|MED|124|78|32.22.898.882|1998||183|||13|
Philippe Sandler|DEF|124|80|645.551.80.862.354.589|1997||190|||13.26|
Álex Pozo|DEF|54|76|787.390.549.753.72.454.10|1999||174|1||35.59|D
Yannik Keitel|MED|2|75|365.298.115|2000||184||||
Enzo Ebosse|DEF|24|75|512.81.871.454.416.848.521|1999||185|3|58||
Ben Woodburn|MED|123|82|532.147.413.641.695.790|1999||174|11|76|33|
Lazar Carević|GR|109|73|911.345|1999||195|2|||
Antonin Bobichon|AVA|58|71|622.81.819.19.666.746|1995||170||||D
Gauthier Hein|AVA|58|74|323.855.885.15.612|1996||170||||D
Kamil Piątkowski|DEF|126|76|944.715.767.465.390.484.517|2000||191|8||25|
Andi Zeqiri|AVA|143|77|509.166.115.132.377.822.928|1999||181|18|||
Lyndon Dykes|AVA|51|77|533.698.145.213.568.1207|1995||188|53|8||
Leonardo Lopes|MED|127|73|675.929.426.207.465.1190|1998||168||||
Darnell Furlong|DEF|76|72|698.615.924.1176.447.831|1995||180||||
Lucas Perrin|DEF|58|76|553.293.408.207.813.600|1998||187|||12|
Robert Gumny|DEF|126|77|514.115|1998||182|6||25|
Alfon González|AVA|54|71|67.709.722.203.787.905|1999||172||||E
Yordan Osorio|DEF|159|78|847.325.908.947.663.259|1994||189|38||7.52|
Alfa Semedo|MED|70|78|904.582.140.291.617.720.908.590.42|1997||190|38||7.18.30.46|
Mamadou Loum|MED|135|76|163.582.325.66.720.56.92.813|1996||188|3||7.52|
Falaye Sacko|DEF|100|73|797.908.763.578.1074|1995||180|40||32|
Fousseni Diabaté|AVA|100|77|368.518.799.75.856.402.385.665.509.484.398.820|1995||175|11|58||D
Jailson|MED|16|75|395.211.351.653.203.360.500|1995||187|||9|
Ante Palaversa|MED|40|74|405.551.472.379.470.862.26|2000||187|||26|
Ivor Pandur|GR|40|77|404.416.362.426.717|2000||187||||
Vakoun Bayo|AVA|39|74|204.854.465.702.921.871.1019|1997||184|9|||
Njegos Petrovic|MED|145|75|711.294.390.911|1999||185|3|||
Jakub Piotrowski|MED|126|77|685.377.919.302.538.871|1997||184|14|||
Aitor Ruibal|AVA|54|75|143.142.307.186|1996||176||||D
Adrian Fein|MED|2|77|451.408.133.648.394.274.300.1367|1999||186|||27|
Victor Sá|AVA|16|76|501.933.47.159.494.834|1994||178|||18|E
Luca Kilian|DEF|2|74|750.548.231|1999||190||||
Juan Iglesias|DEF|54|73|379.787.887|1998||185||||
Domingos Quina|MED|127|77|925.921.390.367.129.283.742.871.910.651|1999||173||70||
Antonino Gallo|DEF|84|74|513|2000||183||||
Lennard Maloney|MED|45|74|874.157.415.548.1228|1999||187|2|2|42|
Jonathan Panzo|DEF|76|77|587.207.266.617.236.197.822.732.145.522|2000||185|||34.39|
James Sands|MED|45|74|609.717.817|2000||180|14||42|
Jusuf Gazibegovic|DEF|21|75|318.827.231.767.928|2000||174|23|165||
Rafik Guitane|AVA|5|74|511.731.554.820.292.163|1999||164|2|58||D
Peter Vindahl|GR|43|75|613.22.620.806.768|1998||195||||
Samuel Essende|AVA|129|72|466.666.759.910.115.942|1998||192|10|58||
Gédéon Kalulu|DEF|129|70|4.319.1222|1997||178|30|58||
Jimmy Dunne|DEF|78|73|413.828.175.698.1086.1189|1997||183|4|||
Toni Borevković|DEF|40|70|732.908.405.769.277|1997||193||||
Gideon Mensah|DEF|60|77|318.827.767.949.908.156.15.231|1998||178|46|||
Hernán Toledo|AVA|4|76|507.89.125.1369.296.356.917|1996||180||||E
Braian Cufré|DEF|4|73|917.549.586.609.206.730.69|1996||179||||
Tomás Conechny|AVA|4|65|691.388.66.710.1144.771|1998||170||||E
Kwang-song Han|AVA|36|74|196.673.39.460.463|1998||178|21||48|
Marcus Forss|AVA|57|79|164.155.426.565.985.1280|1999||182|21|||D
Ayumu Seko|DEF|86|77|208.391.511|2000||185|20|||
Marlon (1997)|DEF|16|74|240.358.149.856.82.242.395|1997||173|||34|
Mads Andersen|DEF|43|67|172.6.129.539.1048|1997||194||||
Maik Nawrocki|DEF|126|73|923.517.204.521|2001||185||2||
Jerome Opoku|DEF|60|78|684.893.92.131.1086.367|1998||194|16|76|38|
Afimico Pululu|AVA|129|75|132.606.394.454.44|1999||175|1|3||
Thomas Henry|AVA|58|73|600.625.895.416.652.822.1007.728|1994||192||||
Dani Raba|AVA|54|76|905.754.390.186.888|1995||184|||59|D
Kanya Fujimoto|MED|86|75|844.380.145|1999||175||||
Richie Laryea|DEF|25|77|637.849.617.889|1995||175|84||39|
Théo Leoni|MED|20|73|80.820|2000||174||20||
Jesper Daland|DEF|116|70|432.207.197.302.901|2000||189||||
Lenny Pintor|AVA|58|76|818.541.862.763.501.301.746|2000||179||||E
Jesús Ramírez|AVA|159|63|554.597.908.1061.956|1998||187|8|||
Tom van de Looi|MED|124|73|312.589.165.345|1999||186||||
Bernard Tekpetey|AVA|60|77|302.538.750.752.782|1997||172|2|||D
Álex Centelles|DEF|54|72|888.345.72.525|1999||185||||
Joaquín Pereyra|MED|4|71|738.345.107.569|1998||181||||
Tom Holmes|DEF|76|73|720.539.340.742|2000||178||||
Riley McGree|MED|8|76|31.224.610.557.212.145.565|1998||178|35||43|
Alan (2000)|MED|16|74|653.396.811.582.908|2000||161|||9|
Jordan Holsgrove|MED|51|71|720.203.668.632.292|1999||180||||
Olimpiu Moruțan|AVA|132|77|863.305.339.371.681.82.90.326|1999||172|19|||D
Paul Akouokou|MED|39|76|143.142.541.779|1997||190|4||41|
Tiago Dantas|MED|127|76|140.133.847.642.22.594.404|2000||170|||5.18.27.30|
Andrew Irving|MED|51|73|344.413.3.925.806|2000||177|1||35.39|
Samuel Grandsir|AVA|58|77|862.587.293.818.499.511.759|1996||170|||34|D
Arvin Appiah|AVA|76|75|617.72.187.189.586.742.597.75.169|2001||173||124||D
Tudor Băluță|MED|132|78|335.166.10.275.800.877|1999||191|16|||
Sofiane Alakouch|DEF|102|75|622.323.509.662|1998||175|4|58||
Lazare Amani|MED|39|73|466.702.292.875.822.488.207|1998||172|7|||
Gonzalo Maroni|MED|4|75|150.182.768.109.771.842.611.130.439|1999||170|||44|
Didier Lamkel Zé|AVA|24|73|210.744.487.323.470.411.478.797.1019.530.957|1996||192|1|||E
Ylber Ramadani|MED|1|74|893.26.513.956.1163.1131.1187|1996||183|53|2||
Michael Obafemi|AVA|78|78|805.830.175.568.684.898.147|2000||169|12|||
Peru Nolaskoain|MED|54|75|101.144.262.753|1998||186|||3|
Ross Stewart|AVA|51|74|816.740.828.805.830|1996||188|4|||
Jessic Ngankam|AVA|2|74|418.394.281.548.932|2000||182||||
Carlos Neva|DEF|54|74|726.390.67.1032.709|1996||174||||
Abdul Mumin|DEF|60|76|613.908.719.386.1048|1998||188|4|||
Jon Morcillo|AVA|54|74|144.101.886.67.72.184|1998||183|1|||E
Samuele Mulattieri|AVA|84|73|336.440.241.366.781.262.416.810|2000||183|||21|
Antoine Makoumbou|MED|35|72|4.593.196.769.768|1998||187|17|58|44|
Loïc Mbe Soh|DEF|58|78|647.617.398.71.135.797.806|2001||187||24|4.39.53|
Halil Dervişoğlu|AVA|152|76|807.164.334.371.175.411.374.180|1999||183|16|124||
Arnau Tenas|GR|54|78|647.905.549|2001||185|2||4.36|
Lucas Rosa|DEF|16|75|460.887.886.32|2000||177||||
Yvan Neyou|MED|24|73|193.819.763.186.379.53.912|1997||180|11|||
Marvin Pieringer|MED|2|73|750.415.782|1999||189||||
Oliver Christensen|GR|43|77|626.418.356.764.827|1999||190|1|||
Bojan Miovski|AVA|97|75|26.386.717|1999||189|45|||
Aron Dønnum|AVA|116|74|916.407.822.854|1998||179|17|||D
Tiago Gouveia|AVA|127|75|140.292.612.376|2001||176|||18.31.38|D
Gonçalo Borges|AVA|127|72|325.354|2001||184|||52|D
Andrea Carboni|DEF|84|74|196.580.895|2001||187||||
Matty Longstaff|MED|76|79|610.26.849.579.1331.1188|2000||171||||
Nicolas Cozza|DEF|58|74|578.933.600.509|1999||178||||
Filip Krastev|MED|17|71|536.862.747.525.500.645.641.402|2001||179|30|||E
Cezary Miszta|GR|126|73|517.714.732|2001||193||||
Ibrahima Koné|AVA|100|72|412.29.319.72.53|1999||190|23|||
Andy Pelmard|DEF|58|74|612.132.223.513.507.454|2000||180|3|||
João Klauss|AVA|16|76|501.421.822.797.815.499.1017|1997||190||||
Leo Kokubo|GR|86|76|140.797|2001||193|1|||
Rhys Williams|DEF|76|80|532.830.147.26|2001||195|||13.33|
Nathan Wood|DEF|76|74|565.239.419.830.805|2002||188||||
Víctor Mollejo|AVA|54|78|104.110.262.379.549.189.779.174|2001||176|||51|D
Nathan Ferguson|DEF|76|75|924.243|2000||184||||
Darian Males|AVA|143|72|321.440.378.132.942.928|2001||189|||21|
Felix Mambimbi|AVA|143|74|942.747.331.511|2001||171||||E
Óscar Valentín|MED|54|73|719|1994||178||||
Ousseynou Ba|DEF|135|74|368.632.131|1995||192|2|||
José Copete|DEF|54|64|688.549.888|1999||192||||
Santiago Arzamendia|DEF|122|73|245.296|1998||172|31|4||
Modibo Sagnan|DEF|100|75|521.725.188.847.882.578.180|1999||187|5|58||
Pathé Ciss|MED|135|73|878.345.190.719|1994||186|35|||
Ricardo Velho|GR|127|74|346.376.90|1998||188|1|||
Kike Pérez|MED|54|71|187.887.886.283.719.895|1997||184||||
Tobias Bech|AVA|43|68|900.315.25|2002||189||||D
Harry Clarke|DEF|76|73|628.740.419.825.447.790.213.93.695|2001||180|||16|
Sam Greenwood|MED|76|73|516.565.695.685.168|2002||180|||17|
Luke Cundle|MED|76|75|934.830.684.825.568|2002||170|||18.35.39.55|
Facundo Garcés|DEF|99|73|228.66|1999||188|2|4||
Nahuel Tenaglia|DEF|4|76|108.182.66|1996||181||||
Bartosz Bialek|AVA|126|71|944.933.907.466|2001||191||||
Janis Antiste|AVA|58|73|854.810.781.75.728.620.718.401|2002||180|6|||
Louis Munteanu|AVA|132|77|335.356.191.247|2002||184|8|||
Martim Neto|MED|127|73|380.140.732.283|2003||185|||18|
Rodrigo Pinheiro|DEF|127|71|345|2002||183||||
Szymon Wlodarczyk|AVA|126|73|517.401.827.764.300|2003||192||||
Ruan (1999)|DEF|16|72|395.781.834.112|1999||187||||
Christian Oliva|MED|157|75|598.196.888.182.317.777|1996||178||||
André Silva (1997)|AVA|16|68|732.92.908.834|1997||181||||D
Kazeem Olaigbe|AVA|20|72|740.207.731.856.492.132.1179.805|2003||178||||E
Mohamed Abdelmonem|DEF|47|77|612|1999||184|38||20|
Ebrima Colley|AVA|148|78|100.416.810.478.942.492|2000||179|31|||E
Naatan Skyttä|MED|57|72|854.901.626.869.0|2002||170|6|||
Filipe Relvas|DEF|127|66|690.908.12|1999||192||||
Koba Koindredi|MED|58|76|888.723.292.812.509.132.521|2001||184||44|7.47|
Maxime Busi|DEF|20|72|702.663.820.588.744|1999||187||||
Hrvoje Smolcic|DEF|40|74|404.281.501.490.956|2000||185||||
Vasco Sousa|MED|127|70|325.582|2003||164|||52|
Josh Wilson-Esbrand|DEF|76|80|551.236.820.197.825.714|2002||176|||26.58|
Federico Viñas|AVA|157|76|77.527.723.845|1998||183|16||17|
Yvann Maçon|DEF|64|68|869.763.662.542.11.393|1998||177|6|58||
Jan Schöppner|MED|2|72|415|1999||190||||
Enzo Loiodice|MED|58|73|266.507.934|2000||176|||39|
Juan Cruz|AVA|54|73|586.105.143.142.186|2000||177||4||E
Sebastian Sebulonsen|DEF|116|65|901.172.231.1147|2000||187|1|||
Nikola Stulic|AVA|145|72|665.713.702.513|2001||188|4|||
Bruno Duarte|AVA|16|72|693.646.908.251.346.294.892|1996||183||||
Alessandro Bianco|MED|84|71|356.728.580.642.575|2002||173||||
Jamil Siebert|DEF|2|72|302.513|2002||193||||
Nediljko Labrovic|GR|40|77|404.115|1999||196|1|||
Wahid Faghir|AVA|43|75|893.298.613|2003||190||||
Sidny Lopes Cabral|DEF|23|78|295.140.856.1142|2002||176|15|124|31|
Mirko Topić|MED|145|72|911.345.616|2001||190|4|||
Cenk Özkacar|DEF|152|77|73.541.625.888.886.231.856|2000||190|9|||
Jenson Seelt|DEF|124|71|828.933.648.830|2003||195||||
Tanguy Coulibaly|AVA|58|76|298.578.769|2001||178||||D
Haissem Hassan|AVA|47|76|502.188.813.905.723.204|2002||178|8|58||D
Jesús Vázquez (2003)|DEF|54|74|888|2003||182||||
Lautaro Valenti|DEF|4|71|506.663.1369|1999||188||||
Adrian Barisic|DEF|21|71|594.366.132.163|2001||193|15|2||
Fer Niño|AVA|54|76|905.549.174.283|2000||190|||59|
Gabriele Piccinini|AVA|84|65|728.681|2001||184||||
Filippo Terracciano|MED|84|74|416.7.238|2003||186|||41.52|
Alejandro Francés|DEF|54|75|779.386.258|2002||182||||
Calvin Ramsay|DEF|51|81|26.695.155.929.489.532.816|2003||177|1||13.33|
Rafael Luís|MED|127|73|293.140.376|2005||188|||31|
Peque Fernández|AVA|54|73|709.787|2002||172||||
Rafa Obrador|DEF|54|77|549.721.262.140.848.1348.781|2004||181|||31.38|
Manuel Ángel|MED|54|74|721.367.1348|2004||170||||
Malcom Bokele|DEF|24|64|156.402.323|2000||183|2|58||
Formose Mendy|DEF|135|75|225.75.319.921|2001||191|10|||
Youssouph Badji|AVA|135|73|224.818.702.25.655|2001||192|3|||
Myron van Brederode|AVA|124|73|22.302.471|2003||174||||E
Toby Collyer|MED|76|75|552.924.426|2004||180|||47|
Alan Virginius|AVA|58|74|330.530.223.942|2003||175|||41|E
Serdar Saatçı|DEF|152|72|141.163.856.51.956|2003||190||||
Léo Realpe|DEF|49|69|438.704.345|2001||186|4|||
Abel Bretones|DEF|54|71|723.638|2000||188||||D
Federico Gattoni|DEF|4|75|771.787.80.734.97|1999||183||||
Mathias Løvik|DEF|116|70|576.663.856|2003||183||116||
Yassine Kechta|MED|102|75|511.186|2002||174||58||
Hugo Novoa|DEF|54|76|705.132.882.66.188|2003||182||||D
Marcelo Flores|AVA|25|80|93.723.843|2003||164|5||16|E
Kota Takai|DEF|86|76|485.853.158.797|2004||193|4|||
Lukas Ambros|MED|32|72|803.802.933.401.80|2004||182|14|||
Daouda Guindo|DEF|100|75|767.318.331.818.820|2002||183|7|||
Jay Enem|AVA|124|71|895.624.294.154|2003||195||||
Matthew Hoppe|AVA|45|78|549.565.419.756.835.782|2001||191|8|||
Denis Huseinbasic|MED|21|73|231.163.1237|2001||184|7|2||
Philip Otele|AVA|115|73|870.191.132.408.959|1999||185|5|||E
Serge-Philippe Raux-Yao|DEF|58|72|15.207.736.718|1999||197||||
Calegari|DEF|16|71|358.499.345.301|2002||176||||
Morgan Guilavogui|AVA|68|75|662.521.817.766.1265|1998||188|20|58||D
Clemens Riedel|DEF|2|73|291|2003||186||||
Linus Gechter|DEF|2|74|418.278|2004||188||||
Chiquinho (2000)|AVA|127|74|292.934.825.345.549.74|2000||179|||35.55|E
Tim Oermann|DEF|2|72|898.932.524.827|2003||189||||
Enis Destan|AVA|152|73|856.426.473.492|2002||185||||
Joel Mvuka|AVA|116|73|152.319.942.204.1054|2002||173||||
Keke Topp|AVA|2|71|923.782|2004||192||||
Andréas Hountondji|AVA|12|70|759.868.736.175.822.817.1218|2002||190|20|58||
Finn van Breemen|DEF|124|71|10.132.345|2003||193||||
Samuele Angori|DEF|84|70|673.285.681|2003||186||||
Iker Muñoz|MED|54|74|181.638|2002||179||||
Jon Karrikaburu|AVA|54|76|725.66.186.709.174|2002||183||||
Bernardo (2002)|GR|16|62|847|2002||196||16||
Andreas Ntoi|DEF|63|71|632.732|2003||190|3|||
Alfie Devine|MED|76|74|684.853.473.695|2004||182|||21|
Jérémy Le Douaron|AVA|58|72|818.652.862|1998||189||||
Youssef Enríquez|DEF|102|73|66.1348.721.1347|2005||170||54|11|
Iker Bravo|AVA|54|75|524.871.507.1348.921|2005||182|||56|
Stanis Idumbo|MED|20|71|787.587|2005||170||58||D
Noah Mbamba|MED|20|77|225.224.524.302.340.319|2005||187|||5.56|
Alieu Fadera|AVA|148|64|949.377.232.781.196|2001||182|16|||E
Kaio César|AVA|16|73|235.908.45.234|2004||160||||D
Théo Le Bris|MED|58|73|319.398|2002||165||||
Luka Romero|AVA|4|81|549.510.7.72.66.185|2004||169||111|41.48.52|D
Simon Ebonog|MED|58|68|511.19|2004||186||24||
Rafiki Saïd|AVA|34|74|818.622.862.822.934|2000||178|16||55|E
Willy Kambwala|DEF|58|77|552.905.232|2004||192|1|129||
Khalil Fayad|MED|58|71|578.405|2004||172||||
Alfie Gilchrist|DEF|76|75|215.526.790.924|2003||183|||42|
Ange N'Guessan|DEF|58|68|848.841.804.521.802|2003||187||||
MT|DEF|16|65|892.776|2001||185||||
Antonio Raimondo|AVA|84|73|154.841.895.764.366|2004||185||||
Hennes Behrens|DEF|2|72|421.415.115|2005||177|1|||
Lautaro Blanco|DEF|4|73|738.283.150|1999||176||||
Alejandro Rego|MED|54|75|101.184.144|2003||192||||
Luis Vázquez|AVA|4|74|150.80.379.145|2001||190||||
Milos Lukovic|AVA|145|74|433.293.414.507.695.0|2005||184||||
Maxi Oyedele|MED|126|73|517.293.1049.552|2004||183|2|76||
Cole Campbell|AVA|45|76|157.421|2006||170|1|||D
Sorriso|AVA|16|70|462.704.345|2001||176||||E
Taichi Fukui|MED|86|75|133.690.92.1079|2004||172|||53|
Tadeo Allende|AVA|4|75|439.388.203.442|1999||185||||D
Diego González|AVA|122|72|510.109.778.1308|2003||168|2|122|48|D
Biel|AVA|16|64|358.395.279.812.112.61.651|2001||169|||7.41|E
Arthur Chaves|DEF|16|71|28.421.115.159|2001||187||||
Amario Cozier-Duberry|AVA|76|68|166.146.155.565|2005||170||76||D
David Odogu|DEF|2|74|933.7.854|2006||191||||
Lazar Jovanovic|AVA|145|72|911.294.624.298.871|2006||184||||D
Chissumba|DEF|127|68|163.74|2005||180||||
Louis Mouton|MED|58|68|763.666.81|2002||189||||
Fábio Baldé|AVA|127|73|408.293|2005||182||2||E
Henrik Meister|AVA|43|68|731.681.263.1088|2003||191||||
Tochukwu Nnadi|MED|115|73|949.553|2003||176|5|115||
Steve Ngoura|AVA|58|71|511.207|2005||185||||
Lucas Pires|DEF|16|75|777.245.175|2001||182||||
Krisztián Lisztes|MED|73|73|352.281|2005||183||||
Anrie Chase|DEF|86|75|298.767.318|2004||187||||
Tidiam Gomis|AVA|58|73|759.705|2006||183||||E
Buba Sangaré|DEF|54|72|737.283.523|2007||183||54|44|
Patrik Mercado|MED|49|71|438|2003||177|3|||
Diego Rodrigues|MED|127|66|163|2005||185||||
İsak Vural|MED|152|68|410.366.681|2006||189||142||
Benja Cremaschi|MED|45|76|442.663|2005||182|3||42|
Dehmaine Tabibou|MED|58|71|600|2005||181||||
Harry Amass|DEF|76|76|552.789.616|2007||181||76|47|
Xavi Espart|DEF|54|77|127|2007||175|||3.27|
Chido Obi|AVA|43|81|552|2007||181|||47|
Artem Stepanov|AVA|153|71|524.620.882|2007||192|||56|
Jeremy Agbonifo|AVA|142|71|429.521.132.454|2005||178||||D
Matteo Palma|DEF|2|68|871.768|2008||194||||
Lorenzo Venturino|AVA|84|73|378.737|2006||178||||D
Jonah Kusi-Asare|AVA|142|72|14.133.367|2007||196|||5.38|
Aleksa Damjanovic|AVA|145|71|294.524|2008||199||||
Seny Koumbassa|DEF|58|66|854|2007||194||58||
Noah Edjouma|AVA|58|72|854.530.818|2005||181||||D
Wisdom Mike|AVA|2|71|133.224.225|2008||176|||5|E
Anísio Cabral|AVA|127|71|140|2008||187|||38|
Kaïl Boudache|AVA|58|68|612.541|2006||0|||41|D
Abdoul Koné|DEF|58|71|820.705|2005||192||||
Daniel Banjaqui|DEF|127|68|140|2008||184||127|31.38|
Yunus Konak|MED|152|73|799.164.641.983|2006||181||||
Alpha Touré|MED|135|70|400.323|2006||180||||
Abdoulaye Faye (2004)|DEF|135|63|429.951.524.319.203|2004||191||||
Soriba Diaoune|AVA|58|68|530|2007||174||||E
Love Arrhov|MED|142|72|170.281|2008||178||||
Pedro Lima (2006)|DEF|16|73|811.934.834|2006||178||16|55|
Alexander Røssing-Lelesiit|AVA|116|71|531.408|2007||184||||E
Suleman Sani|AVA|115|71|705|2006||175||||E
Branimir Mlacic|DEF|40|73|405.871.921|2007||192||||
Nathan Mbala|AVA|129|66|323|2008||179||||D
Christian Lell|DEF|2|79|133.231.418.523|1984||180|||5.54|
Daniel Baier|MED|2|76|1.933.115|1984||174|||5|
Cédric Varrault|DEF|58|74|612.763.656.266|1980||182||||
Toifilou Maoulida|AVA|58|76|578.731.323.587.553.15.521.746.622.855|1979||184||||D
José Javier Barkero|MED|54|75|725.854.753.67.523.779|1979||180||||
Toni Doblas|GR|54|77|143.142.779.754.601.1017|1980||184|||43|
Álvaro Rubio|MED|54|74|258.779.67.886|1979||178||||
César Peixoto|MED|127|77|120.325.908.291.163.140.380|1980||182|1||7.20.28.30.31.58.59|
Almen Abdi|MED|143|79|338.512.871.921.789|1986||182|6|89||
Wes Morgan|DEF|85|81|617.518|1984||186|30|76|2.44|
Alexander Tettey|MED|116|77|739.731.616|1986||180|34|60||
Hugo|DEF|127|74|163.768.812.909.136|1976||182|||7.25.32.34.40|
Zé Castro|DEF|127|78|27.110.262.719|1983||183|3||20|
Ben Watson|MED|76|78|243.698.929.924.921.617.213|1985||178|||38.45|
Bo Svensson|DEF|43|77|233.158.548|1979||190|3||33.53|
Bruno Gama|AVA|127|76|163.325.909.732.262.269.90.9.13|1987||175|||7.28|E
Jamie Mackie|AVA|51|78|543.684.698.617.720.641.1280|1985||173|9|76||D
Juan Calatayud|GR|54|75|586.379.709.430.549.348.1327.105|1979||191||||
Marco Russ|DEF|2|80|281.933|1985||190||||
Nicolas Maurice-Belay|MED|58|77|587.193.330.156|1985||180||||
Steeve Elana|GR|58|74|759.818.530.368.855|1980||185|7|||
Carlitos|AVA|127|73|292.140.909.329.132|1982||175|||7.25.38|D
Sébastien Roudet|MED|58|74|502.612.885.521.330|1981||174||||
Per Ciljan Skjelbred|MED|116|78|739.408.418.1145|1987||175|43|||
Rémy Riou|GR|58|75|541.319.15.854.600.65.702.759.662|1987||189|||4.52|
Renaud Cohade|MED|58|76|622.156.293.885.763.323|1984||180||||
Goran Popov|DEF|97|76|294.522.414.275.924.12|1984||189|46|||D
Corentin Jean|AVA|58|75|862.587.854.521.330.442.502|1995||170|||4.34|
Andrea Mantovani|DEF|84|76|848.859.218.652.154.673.618|1984||185|3|||
Leandro Rinaudo|DEF|84|77|652.890.764.209.794.601.463.618.18.128|1983||191||||
Jérémy Morel|DEF|98|80|319.553.541.731|1984||172|15|58|17.24|
Simon Pouplin|GR|58|75|731.365.330.612|1985||187||||
Paul McShane|DEF|78|80|552.920.166.924.828.426.129.243.720|1986||183|33||10|
Momo|AVA|54|74|507.67.262.709.142|1982||177||||E
Pedro López|DEF|54|75|888.709.886.523.754|1983||174|||44|
Erwin Hoffer|AVA|165|79|718.601.0.281.302.479.135|1987||177|28|||
Hernán Pellerano|DEF|4|74|917.72.611.226.438.503.1015|1984||183||||
Gerson Magrão|MED|16|75|242.354.357.446.275.777.355.812.192.78.280.353.450.689|1985||181|||34|
Riccardo Meggiorini|AVA|84|77|440.810.222.128.154.378.618.848.218.1122|1985||182|||6.37|
Danny Graham|AVA|76|79|565.263.516.147.198.921.830.828.426.934.146|1985||185||||
Cyril Théréau|AVA|58|76|868.81.702.339.80.218.871.356.196|1983||189||||
Edinho|AVA|127|75|163.668.380.909.586.642.554.27.464.349.12.1172.851|1982||182|6||20.25.28.40|
Julian Schuster|MED|2|78|298.365|1985||190||||
Daniele Dessena|MED|84|78|663.768.196.165.674|1987||183|||44|
Óscar Trejo|MED|4|77|150.549.283.719.813.854|1988||177||||
Zé Love|AVA|16|75|653.693.102.446.704.242.811.395.360.353.833.78.777.378.794.235.389.1182.280.355.627|1987||179||||
Haris Medunjanin|MED|21|79|22.807.886.542.375.262.678.221.981.645|1985||188|60||54|
Mariano Izco|MED|4|74|842.201.218.241.461|1983||180|||51|
Damien Perquis|DEF|126|79|862.763.330.142.849.617.368|1984||184|14|58||
Georg Niedermeier|DEF|2|79|133.298.365.556|1986||188||||
Leon Barnett|DEF|76|76|539.924.236.616.197.929.178.615|1985||185||||
Cristiano|MED|16|72|668.642.812.136.240.909|1983||175|||25|E
Vito Mannone|GR|84|80|93.129.426.828.720.569.289.587.319.530|1988||191|||15.41|
Modou Sougou|AVA|135|75|519.909.27.191.553.950.789.582|1984||178|12||12.17|D
Sinan Bolat|GR|152|78|377.822.325.486.371.224.597.92.744.465.473.484|1988||186|12||32.35.39.41|
Mohamed Fofana|DEF|100|75|854.820.521|1985||181|5|58||
Nilson|GR|18|74|280.621.908.582.1296.963.878|1975||185|1|16|46|
Lazaros Christodoulopoulos|MED|63|80|642.654.154.416.768.12.632.113.83.90.448|1986||183|35||25.28.32|D
Vladimir Stojkovic|GR|145|82|294.600.907.812.379.929.665.288.545.617.42.712.244|1983||196|84||40.45|
Kamil Vacek|MED|32|74|795.91.806.218.573.680.545.800.626.153.660|1987||184|9|||
Fin Bartels|AVA|2|76|422.817.923.1261|1987||176||||D
Sebastian Boenisch|DEF|126|81|923.524.1.782|1987||191|14|||
Ion Ansotegi|DEF|54|77|753.725.549|1982||192|6|||
Michael Mancienne|DEF|138|80|215.698.934.408.617.607.177|1988||184|5|76|2.11.31.50|
Adrian Mariappa|DEF|85|78|921.720.243.168.177.544|1986||180|73|76|38|
Sergio Sánchez|DEF|54|79|291.709.787.586.654.745.67.245.1348|1986||185|||42|
Johannes Flum|MED|2|76|365.281.817|1987||190||||
Razak Boukari|AVA|149|76|502.521.731.934.330|1987||182|19|||D
Tomas Pekhart|AVA|32|81|805.853.802.453.806.620.315.12.507.517.374.271|1989||192|26|||
Diego Contento|DEF|2|83|133.156.302.762|1990||177|||5.26.54.58|
Alejandro Alfaro|AVA|54|77|787.189.549.886.246.430|1986||173|||59|E
Nuno André Coelho|DEF|127|73|325.822.690.295.812.163.123.476.214|1986||190|1||7.28.32.34|
Lino Marzorati|DEF|84|75|7.285.196.781.575.1027.461.694|1986||182|||11|
Takayuki Morimoto|AVA|86|80|844.201.618.51.452.485.119.1006|1988||180|10||51|
Samir Ujkani|GR|1|80|652.618.218.378.508.180.848.285.238.681|1988||186|56|89||
Nivaldo|DEF|16|74|227.621.235.360.667.120.763.59.886.542.732|1980||187|||30.39|
Paul Baysse|DEF|58|76|156.193.818.763.612.586.759|1988||184||||
Ervin Zukanovic|DEF|21|80|340.466.470.465.218.768.737.100.378.36.760.478.98.1303.1001|1987||189|38|||
Rafael Bracali|GR|16|71|667.462.597.325.629.655.92.149|1981||175|||7.28.52.55|
Paulão|DEF|16|74|112.78.892.604.163.763.142.772.629|1982||188||||
Paulo Vinícius|DEF|16|73|776.520.629.519.163.149.87.191.339.86|1984||186|||28.32.34|
Jean-Sylvain Babin|DEF|58|75|502.321.9.390.813.542|1986||182|16|||
George Boyd|AVA|76|78|823.675.617.426.175.789|1985||185|8|||E
Alexander Esswein|AVA|2|77|0.933.274.620.115.418.298.1184.762|1990||181|||5|D
Manuel Gulde|DEF|2|76|421.750.479.365|1991||179||||
Marco Stiepermann|MED|2|75|157.874.394.616.1368.750.898|1991||190|||5.33|
Adam Le Fondre|AVA|76|77|824.742.720.197.155.934.929.832.419.552|1986||177|||47|
Juan Pablo Pino|AVA|33|76|436.587.702.371.52.632.746.1310|1987||176|6||34|D
Marco Biagianti|MED|84|75|356.201.18|1984||180|||51|
Casto|GR|54|76|67.143.142.722.507.72.9|1982||181||||
Slobodan Medojevic|MED|145|75|911.933.281|1990||183||||
James Perch|MED|76|78|617.610.929.698.1188.783|1985||180||||
Jan Kirchhoff|DEF|2|77|548.133.828.155.1303.782|1990||195|||5.26.53|
Djalma|AVA|3|75|554.325.484.492.376.642.65.346.860|1987||176|46||7.35.41.55|D
Markel Bergara|MED|54|78|753.725.379|1986||180||||
Luis Aguiar|MED|157|76|295.325.27.163.276.677.812.771.280.1068.1062.598.1108|1985||183|||7.28.30.41|
Kike Sola|AVA|54|78|101.638.522.379.565.181|1986||185|2|||
Wellington Paulista|AVA|16|75|570.659.777.66.159.242.653.240.925.443.235.358.689.78.211.360|1984||183|||50|
Joaquín Larrivey|AVA|4|79|427.196.917.228.719.203.1305.452.864|1984||185||||
Diego Cavalieri|GR|16|79|653.532.209.358.159.243|1982||191|3||50|
Jonathan Pereira|AVA|54|78|905.709.142.719.886.187.9.384.723|1987||167|2|||
Juan Forlín|DEF|4|78|150.291.57.701.1177.974.1348.723|1988||180|||42|
Evandro|MED|16|76|102.653.389.112.280.294.292.325.426.211.777|1986||180|||28.32.35.38.39|
Hernán Barcos|AVA|4|76|710.294.427.755.503.653.395.812.1068.106.242.1089.1137.917|1984||189|4||30.50|
Egidio Arévalo Ríos|MED|157|78|677.577.252.159.226.652.217.843.109.528.710.772.1300|1982||170|90|||
Gabriel Hauche|AVA|4|74|710.218.226.69.89.1343.567.780.845|1986||168|5||51|
Mauro dos Santos|DEF|4|74|125.722.72.753.186.68.189.388|1989||180||||
Leonel Vangioni|DEF|4|78|611.734.7.528.577.996|1987||181|3|||
Ukra|AVA|127|73|325.891.629.163.732.41.195.776|1988||175|1||7.12.25.28.34.39.55.59|D
José María Basanta|DEF|4|79|296.577.356.1196|1984||188|12||51|
Andreas Bjelland|DEF|43|78|540.613.334.164.233|1988||188|29|||
Karim Aït-Fana|AVA|102|75|578.622.957|1989||175|3|58|4|E
Jamel Saihi|MED|151|75|578.81|1987||181|19|58|4|
Petar Skuletic|AVA|145|74|501.911.713.665.535.376.578.799.343|1990||190|6|109||
André Pinto|DEF|127|77|325.776.909.690.629.654.163.812.41.346.308|1989||194|1||7.12.25.28.30.32.41.52.55.59|
Miguel Rosa|MED|127|74|140.292.120.137.295.909|1989||174|||7.30|
Heinz Lindner|GR|165|79|117.281.391.132.329.875.942.338|1990||188|37|||
Dani Aquino|AVA|54|73|722.886.723.110.104.13.680.709|1990||174|||51|D
David Zurutuza|MED|54|78|753.725|1986||184|5|58||
Jérémy Pied|DEF|58|76|323.541.612.398.805.530|1989||173|||4|
Theodor Gebre Selassie|DEF|32|82|802.804.923|1986||181|54|||
Jack Collison|MED|123|80|925.160.447.929.675|1988||183|16|76||
Guido Marilungo|AVA|84|76|768.513.100.209.285.674.810.841|1989||176||||
Pablo Granoche|AVA|157|73|734.845.859.218.618.890.650.209.575.810.1300|1983||182|1|||
Federico Macheda|AVA|84|80|552.768.698.298.270.145.197.617.618.654.82.17.98|1991||184|||2.10|
Panagiotis Tachtsidis|MED|63|80|12.378.209.416.737.201.848.196.632.617.513.42.191.730|1991||193|25||25|
Nathan Baker|DEF|76|77|99.568.168.983|1991||191||||
Ryder Matos|AVA|16|78|356.279.246.653.199.871.416.285.321.673.857|1993||182||||D
Pietro Iemmello|AVA|84|75|356.696.618.359.810.781.139.673.507.366|1992||180||||
Giuseppe De Luca|AVA|84|73|890.100.128.191.201.859.1226|1991||168||||
Tiago Pinto|DEF|127|74|812.860.163.732.262.709.639.82|1988||177|||39.40|
Vaclav Pilar|AVA|32|81|424.902.933.365.804.795.453.153|1988||169|22|||D
Sebastián Fernández|AVA|157|80|125.586.719.598.252.255.1062|1985||166|14||28|
Xavi Torres|MED|54|76|127.586.523.379.142.813.187.283.672|1986||184|||26.28|
Míchel Herrero|MED|54|76|888.262.430.523.379.723.886.189.993|1988||182||||
Henri Bienvenu|AVA|24|74|942.351.779.290.862.1095|1988||180|3|||
Hal Robson-Kanu|AVA|123|82|720.831.924|1989||183|46|76||D
Renan Bressan|MED|14|76|64.732.17.214.659.462.192.240.903.960.984.1127|1988||182|28|16||
Kyle Bartley|DEF|76|80|93.790.717.830.145.516.924|1991||191|||15|
Rubén Rochina|AVA|54|78|146.779.719.390.745.523|1991||182||||D
Jonás Ramalho|DEF|3|78|101.144.386.638.586.184|1993||183|1|54|17|
Baba|AVA|135|75|554.787.523.379.31|1988||185||||
Raffaele Di Gennaro|GR|84|79|440.222.508.841.810.674.1123|1993||188|||6.37.58|
Chechu Dorado|DEF|54|76|258.754.142.905.719.779|1982||180||||
Xabi Etxeita|DEF|54|79|144.101.307.283.754.379.753|1987||186|4||23|
Iago Herrerín|GR|54|79|101.184.144.104.186.56.888.13.261|1988||187|2||17|
Coke|DEF|54|79|719.787.523.782|1987||182|||59|
Niko Gießelmann|DEF|2|75|394.302.874|1991||182||||
Rene Krhin|MED|53|80|440.154.246.390.600.981.927|1990||189|48||6.31.37.44.58|
Ørjan Nyland|GR|116|82|576.315.99.616.160.720.705.787|1990||192|79|||
Jason Steele|GR|76|78|565.615.146.828.166|1990||188||||
Hernán Pérez|AVA|122|80|528.905.632.291.886.66.964.235.1005|1989||180|41|||D
Aleksandar Ignjovski|MED|145|78|624.1.923.281.365.422|1991||175|12|||
Abdelhamid El Kaoutari|DEF|102|76|578.652.820.746.19.957|1990||180|13|58|4|
Jonathan Urretaviscaya|AVA|157|76|734.140.677.262.908.668.649.967.577.710.1109.1103|1990||171|6||7.30.41.46|D
Adlène Guédioura|MED|5|81|193.867.470.702.934.617.243.921.565.43.790.39.177.972|1985||183|63|58||
Willians|MED|16|76|357.871.443.242.234.192.389.833|1986||175||||
Carlos Carmona|MED|29|82|729.100.108.227.1008|1987||178|50||17|
Abdelkader Ghezzal|AVA|5|79|241.794.128.209.523.508.663.232|1984||183|28|58||
Damián Suárez|DEF|157|76|255.813.283.379.159.677|1988||172|7|||
Rajiv van La Parra|AVA|124|76|759.414.934.166.425.565.294.88.71.135|1991||181||||E
Teófilo Gutiérrez|AVA|33|83|459.856.710.506.185.734.812.738.260.2.1369.1310|1985||178|51||30.51|
Daniel Ayala|DEF|54|78|532.426.263.616.617.565.146.742|1990||190|||43|
Serdar Dursun|AVA|152|73|290.257.478.394.351.65.490.374.963.1172|1991||190|10|2|30.55|
Janis Blaswich|GR|2|75|158.274.417.705.767.524.1261|1991||193||||
Denis Alibec|AVA|132|78|335.440.471.154.339.486.191.113.1214|1991||187|45||43.44|
Ivo Pinto|DEF|127|77|325.380.909.748.519.732.191.277.616.345.362|1990||184|||7.12.28.59|
Yoric Ravet|AVA|58|75|393.763.81.509.391.942.365|1989||178||||D
Aridane Hernández|DEF|54|73|887.66.390.245.638.719.72.978.307|1989||186||||
Marcelo Díaz|MED|29|80|864.132.408.203.865.710.528.1061|1986||166|62|||
Lucas Mendes|DEF|26|82|235.553.39.43.972|1990||183|22|16|20.35|
Iván Balliu|DEF|1|77|92.323.72.719|1992||175|24|54||
Luca Siligardi|MED|84|77|128.440.679.859.154.18.416.663.241.728.760|1988||180|||6.21.31.43.58|D
Marvin Zeegelaar|DEF|124|76|32.300.291.282.147.732.812.921.871|1990||186|||30.38|
Nick Viergever|DEF|124|77|807.22.32.648.394.882.645|1989||182|3||54|
Richard Strebinger|GR|165|74|418.923.451.718.517.761|1993||194|1|||
Tom Trybull|MED|2|75|923.817.394.10.616.146.762.147.626.1261|1993||181||||
Kevin Möhwald|MED|2|72|620.923.874.466.1142|1993||183||||
Darko Brasanac|MED|145|77|665.142.186.66.638.586|1992||178|3|||
Serdar Gürler|AVA|152|73|330.282.856.464.376.639.754.402.84.492.131.301.956|1991||173|9|58||D
Cicinho|DEF|16|73|450.627.653.787.279|1986||173|||50|
Lago Júnior|AVA|39|76|753.384.188.549.754.187.586.709|1990||185|5|||E
Édgar Badía|GR|54|72|726.283.189.291.779|1992||181|3||42|
Rafael Cabral|GR|16|80|777.601.768.720.242.395.766|1990||186|3||43.48.50|
Raphael Holzhauser|MED|165|76|718.298.115.117.391.135.625.1.1354|1993||194|2|||
Ikechi Anya|MED|51|77|936.615.787.203.245.390.921.263|1988||170|29|||
Facundo Bertoglio|MED|4|74|228.275.395.950.842.98.17.644.69.90.912.448|1990||173|1|25||
Onel Hernández|AVA|2|76|91.923.933.278.616.565.145.213|1993||172|15|41||E
Sergio Araujo|AVA|4|76|150.842.507.12|1992||180||||
Lorenzo Crisetig|MED|84|79|440.663.810.241.196.154.366.139.188.650.729|1993||183|||37.44|
Eric Bauthéac|MED|58|75|266.612.530.167.1346.633|1987||168||||D
Greg Cunningham|DEF|78|77|518.551.617.168.695.197.146|1991||183|4||2.37|
Bruno Zuculini|MED|4|79|710.551.888.246.565.719.12.416.734.598|1993||178|8||26.39.51|
Marcus Bettinelli|GR|76|81|367.565.215.551.1086|1992||194|||26.42.53|
Carlos Izquierdoz|DEF|4|72|506.108.778.150.813.1369|1988||191||||
Kevin Behrens|AVA|2|76|762.874.933.320.1368.1243|1991||184|1|||
Aron Jóhannsson|AVA|45|78|25.22.923.410.514.1332|1990||184|19|||
Junya Tanaka|AVA|86|79|483.812.906|1987||181|4||30.38|
Sanjin Prcic|MED|21|75|330.731.848.673.523.293|1993||181|17|58||
Marcin Kamiński|DEF|126|79|514.298.302.931.782|1992||191|7|||
Joris Kayembe|DEF|129|75|325.92.732.600.702.377|1994||180|33|20|32.35.39.44.45|
Gaku Shibasaki|MED|86|81|482.189.379.262.186|1992||175|60|||
Hyun-jun Suk|AVA|37|80|32.312.554.36.597.909.325.856.862.820|1991||190|15||39.52.55|
Pedro Santos (1988)|AVA|127|73|200.520.909.163.732.230.247.1214|1988||173|||28.32.39.41.52|D
Samu Saiz|MED|54|74|379.104.754.516.386.799.301.670.110.1348.1347|1991||174|||17.51|
André Simões|MED|127|73|776.582.12.345.520|1989||177||||
Mehdi Bourabia|MED|102|74|393.525.492.781.810.366.486.530|1991||184|8|58||
Diego Lopes|MED|16|73|140.732.486.655.78|1994||171|||30.39.46|
Lindsay Rose|DEF|104|75|819.885.541.319.746.90.517.785|1992||184|29|58||
Daniel Bentley|GR|76|77|164.168.934.236|1993||188|||55|
Alejandro Arribas|DEF|54|77|719.638.787.262.865.723.317|1989||182|||59|
Haris Belkebla|MED|5|71|855.818.81.885|1994||177|11|58||
Diego Maurício|AVA|16|73|357.64.811.909.55.704.1334.373|1991||183||||
Francisco Portillo|MED|54|73|586.142.379.72.105.186.723.754|1990||169|||28|D
Stefan Mitrovic|DEF|145|76|470.140.886.365.465.293.379.665|1990||189|36|||
Jens Jønsson|MED|43|75|25.492.245.12|1993||182|9|||
Onur Bulut|DEF|152|75|898.365.278.65.180.486.141.131|1994||181|4|2||
Mikael Ishak|AVA|142|77|231.331.663.241.716.620.514.1060|1993||184|7|||
Fábio Cardoso|DEF|127|76|668.909.717.776.325.37.787|1994||187|||7.52|
Maxime Colin|DEF|58|74|866.862.80.164.145.323|1991||179||||
Unai Bustinza|DEF|54|77|101.144.186.586.184|1992||175|1|||
Stuart Dallas|DEF|79|76|164.615.516|1991||183|65||17|D
Leonardo Mancuso|AVA|84|69|222.674.979.232.285.463.987.580.652.1353|1992||182|1|||D
Valerio Verre|MED|84|77|737.378.794.871.652.673.674.768.416.285|1994||180|||36.44|
Federico Ceccherini|DEF|84|74|18.241.356.416.478.238.981|1992||187||||
Manuel Pucciarelli|AVA|84|73|285.218.557.674|1991||174|||48|
Nicolas Benezet|MED|58|74|622.950.759.398.229.784.849|1991||171||||E
Gen Shoji|DEF|86|80|482.854.372.546|1992||182|20|||
Federico Viviani|MED|84|73|737.650.674.508.416.154.760.366.18.165.841|1992||180|||36|
Pedro Tiba|MED|127|67|909.163.886.214.514.380|1988||174|||9.32.41.52|
Andrew Hjulsager|MED|43|75|172.203.390.472.465.893|1995||175||||
Eddy Gnahoré|MED|58|75|145.601.199.241.673.652.75.97.308.339|1993||188|||48|
Edenilson|MED|16|79|234.378.871.443.112.395.159|1989||175|2||50|
Daniel Johnson|MED|85|78|99.939.628.695.825.478.129.1245|1992||174|26|||
Dimitri Foulquier|DEF|64|77|731.390.921.293.379.888|1993||183|2|58|38|
Jean-Daniel Akpa Akpro|MED|39|76|854.764.510.285.580.416|1992||180|17|58|48|
Sasa Zdjelar|MED|145|77|624.632.549.665.194.947|1995||183|9||38.40|
Pablo Insua|DEF|54|76|262.186.754.813.390.779.782|1993||183||||
Hernâni|AVA|127|71|908.325.632.523.63.507.732.50.353.594|1991||180|||7.32.35.38.39.46.52|E
Fabrício|AVA|16|75|450.234.462.159.690.482.881.976|1990||180||||
Rafał Wolski|MED|126|76|517.356.128.471.930.515.931.714|1992||179|7|||
Michael Santos|AVA|157|76|734.586.813.186.233.182.317.917.206|1993||175|2|||
Victorien Angban|MED|39|80|215.797.390.919.323.342.267.984|1996||180|10||21.48|
Diego Rubio|AVA|29|77|227.812.886.476.116.229.1110|1993||180|12||28.34.38|
Josip Elez|DEF|40|75|405.510.25.404.596.1034|1994||190||||
Joe Rothwell|MED|76|78|552.129.147.641.146.160.805.516.717.790|1995||185|||54|
Petar Stojanović|DEF|53|80|593.277.285.768.764.517|1995||178|73|||
Ambroise Oyongo|DEF|24|75|608.579.578.494|1991||175|51|||
Giorgi Kvilitaia|AVA|61|75|718.465.83.17.323.1222.1016.1024.1168.422|1993||193|43|||
Mike van der Hoorn|DEF|124|78|882.32.830.91.13|1992||190||||
Luka Djordjevic|AVA|109|76|947.334.768.688.96.535.893.342.984.955|1994||185|11||12.37|
Gonzalo Bueno|AVA|157|75|598.497.878.296.72.967.1309.228.252.255.1062|1993||176||||E
Jonathan Silva|DEF|4|78|296.812.150.737.186.379.67.390.651|1994||175|2||30.32.38|
Emiliano Velázquez|DEF|157|76|252.110.379.163.719.317.598.777|1994||185|1||32.51|
Juan Ramírez|MED|4|73|89.229.72.182.771.150.506.1369|1993||174||||
Nicolas Haas|MED|143|74|321.100.652.366.285.18|1996||178||||
Nabil Ghilas|AVA|5|76|582.910.325.246.523.375.402.909|1990||183|8|58|32.35.39.41|
Paulo Gazzaniga|GR|4|79|805.719.853.283.367.386.1190|1992||196|1||31.38.42.49|
Robert Glatzel|AVA|2|73|415.197.548.408.0.933|1994||194||||
Rafa Soares|DEF|127|73|27.325.732.367.690.908.753.642.345.295|1995||184||||
Filip Helander|DEF|142|76|550.416.154.717.626.633.429|1993||192|23|||
Federico Ricci|AVA|84|75|737.241.781.378.139.97.580.673.729.810|1994||175||||D
Haris Tabakovic|AVA|21|79|942.391.117.418.421.158.1159.767|1994||194|15|143||
Zakaria Bakkali|AVA|20|79|648.888.262.80.135.707|1996||164|2|||E
Matus Bero|MED|52|75|856.907.898.352|1995||181|50|||
Cedric Teuchert|AVA|2|76|620.874.815.782|1997||182||||
Mateusz Wieteska|DEF|126|77|517.401.223.196.642.490|1997||187|6||25.44|
Igor Lichnovsky|DEF|29|76|864.325.813.886.605.185.60.843.77.478|1994||187|17||32.35.39|
Mariusz Stępiński|AVA|126|77|928.620.930.600.218.416.513.633.493.1222.1200|1995||183|4||44.52|
Ali Abdi|DEF|151|77|662.759.612.1095|1993||183|49|||
László Kleinheisler|MED|73|79|348.923.352.594.654.405.392.341|1994||173|53||46|D
Óscar Plano|MED|54|75|9.886.186.283.1348.1347|1991||180||||D
Jesper Karlström|MED|142|74|170.268.514.871|1995||179|30|||
Sergio Peña|MED|125|75|726.390.847.310.550.642.1068.624|1995||178|51|||
Valentín Vada|MED|4|76|156.763.72.189.779.745.251.590|1996||172||||
Luca Mazzitelli|MED|84|74|737.165.781.378.681.580.366.232.196.652|1995||184||||
João Novais|MED|127|70|520.732.163.65.50|1993||180|||9|
Jannes Horn|DEF|2|76|933.231.898.620.815.718|1997||186||||
Birger Verstraete|MED|20|73|224.585.470.465.231.744.471.90.625|1994||171|1||45|
Oussama Tannane|AVA|102|77|414.417.763.507.882.907.402.589|1994||177|15|||D
Fernando Andrade|AVA|16|74|906.396.669.776.325.799.180.42.200.86.121.151.833|1993||182|||7.52|E
Aiyegun Tosin|AVA|12|73|338.319|1998||179|28|115||
Anastasios Donis|AVA|63|78|463.781.320.612.298.820.884.17.90.714|1996||178|11|76||E
Charles Pickel|MED|129|77|132.391.606.393.345.238.291.1107|1997||180|36|143||
Fredrik Jensen|MED|57|77|334.115.90|1997||183|37|||
Jack Stacey|DEF|76|73|720.198.160.1192.539.616|1996||180||||
Wilfrid Kaptoum|MED|24|76|127.143.142.72.607.507.13.657.384|1996||170|||36|
Chico Geraldes|MED|127|76|812.582.732.12.292.281.978.922|1995||175|||30.32|
Guga|MED|127|70|655.345.732.122.50.651|1997||167||||
Jari Vandeputte|MED|20|70|465.238|1996||174||||
Ryan Manning|DEF|78|75|698.742.830.805|1996||173|27|||
Marcelo Meli|MED|4|75|228.150.812.69.138.1128.206.280.437.1062.710|1992||170|||30|
Matías Nahuel|AVA|54|77|905.142.632.262.189.723.800.545.454|1996||175||4||E
Baptiste Guillaume|AVA|20|73|521.530.293.81.622.885.398.71.512.156|1995||189||||
Arkadiusz Reca|DEF|126|70|931.100.760.241.810.517|1995||187|15|||
Fabrizio Angileri|DEF|4|72|388.734.379.234|1994||179||||
Gerard Gumbau|MED|54|77|127.186.386.283.390.719|1994||187|2||3.36|
Henrique Dourado|AVA|16|74|211.777.570.693.653.242.908.159.357.358|1989||186|||50.52|
Jhonder Cádiz|AVA|159|76|878.597.582.909.140.266.603.345.527.649|1995||191|19||18.30|
Mihailo Ristic|DEF|145|76|294.494.806.578.140.203|1995||183|9|21|7.43|
Ionuț Nedelcearu|DEF|132|78|308.872.12.241.652.35|1996||190|27|||
Antonio Raíllo|DEF|54|76|143.291.688.549|1991||184||||
Luis Rioja|AVA|54|74|72.66.888.1032.1347|1993||176||||D
Vincent Sierro|MED|143|76|329.365.331.942.854.60.663|1995||185|17|||
Iván Alejo|AVA|54|76|104.9.753.379.586.245.17.886|1995||186||||D
Cheikh N'Doye|MED|135|72|867.81.145.1346.727|1986||190|30|||
Ivi López|AVA|54|74|379.523.886.813.754.688.715.448|1994||174||||
Gerson Rodrigues|AVA|94|80|838.275.82.862.301.63.799.21.974.1175.948|1995||190|72|127||
Jacob Rasmussen|DEF|43|76|626.817.739.285.356.907.354.172.767.0|1997||190|||13|
Tommaso Augello|DEF|84|73|810.768.196.652|1994||180|||44|
Tiago Sá|GR|127|72|163|1995||188|||9|
Mats Köhlert|DEF|2|75|408.414.172|1998||168||||E
Adrián Dalmau|AVA|54|74|549.417.882.807.9.493.680.709|1994||181||||
Kamil Jóźwiak|AVA|126|76|514.370.263.212.390.454|1998||176|22|||E
Luca Sangalli|MED|54|76|725.307.586|1995||167|1|||
Yann Bodiger|MED|58|74|854.245.189.981.246.307.390|1995||186||||
Alexandre Mendy|AVA|70|74|612.293.622.398.156.818.759.578.1182|1994||184|7|58||
Cédric Yambéré|DEF|130|74|156.85.17.266.40.708.868|1990||192|13|58||
Jean-Luc Dompé|AVA|58|74|885.797.822.466.75.465.949.408.492|1995||170||||E
Dimitrios Nikolaou|DEF|63|77|632.285.810.128.623.652|1998||188|1||40|
Keidi Bare|MED|1|79|104.110.586.291.779.105.912|1997||174|29|||
Mikey Johnston|AVA|78|76|204.908.924|1999||176|19|51||E
Kike Barja|AVA|54|76|638.181|1997||178|1|||D
Eray Cömert|DEF|143|80|132.320.329.888.600.886.848|1998||183|23|||
Matt Clarke|DEF|76|74|447.692.166.263.565.924|1996||188||||
Dario Maresic|DEF|165|73|827.820.501.591.405|1999||183||||
Paolo Ghiglione|AVA|84|73|366.378.238.650.696.760.764|1997||188||||D
Ben Sheaf|MED|76|74|93.823.270.236.935|1998||185|||15.16|
Ricardo Mangas|DEF|127|74|265.149.156.908.809.812.580|1998||181|||28.41|
Aymen Barkok|MED|102|64|281.302.548.418.989.782|1998||188|18|2|59|
Luca de la Torre|MED|45|79|367.417.203.770.212|1998||175|32||42.43|
Vincent Thill|MED|94|73|323.666.868.597.913.14.1367.1059|2000||176|65|||D
Adrian Semper|GR|40|74|277.592.218.378.232.681.41|1998||192||||
Florian Krüger|AVA|2|72|91.312.278.135.1184.1243|1999||186||||
Dennis Hadzikadunic|DEF|21|80|550.741.549.408.768.405.1154|1998||190|33|142||
Timothé Cognat|MED|58|75|541.786|1998||173||||
Akim Zedadka|DEF|5|74|316.521.223.530.15.779.680|1995||173|1|58|41|
Gil Dias|AVA|127|73|587.891.732.356.617.632.390.345.140.298.517|1996||183|||30.34|D
Jordi Mboula|AVA|54|76|587.207.754.549.292.709.416.380.488|1999||183|||34|D
Jón Dagur Thorsteinsson|AVA|82|66|894.25.625.418.757.367|1998||177|57|||E
Juan Otero|AVA|33|75|361.296.75.778.77.813|1995||179||||D
Deiver Machado|DEF|33|75|106.70.567.465.854.521.600|1993||172|16||20|
Emmanuel Boateng|AVA|60|73|732.582.523.54.374.986|1996||175|6|||
Sebastian Vasiliadis|MED|63|70|750.91.1261.1243|1997||177||2||
Ovie Ejaria|MED|76|81|532.828.717.720.723|1997||183|||33|E
Claud Adjapong|DEF|84|75|781.416.97.513.729|1998||180||||
Hannes Delcroix|DEF|71|77|80.707.175.830.320|1999||185|14||45|
Thibault De Smet|DEF|20|74|465.797.820.135.662|1998||182||||
Abdelhamid Sabiri|MED|102|80|620.425.750.97.768.356.42.61.301|1996||186|11|||
Zan Celar|AVA|53|79|737.132.222.238.302.320.593.698|1999||187|20||41|
Jaime Seoane|MED|54|74|721.379.723.754.187.649.1348|1997||175|||35.57|
Güven Yalçın|AVA|152|77|141.513.378.478.92.65.484|1999||184|3|2||
Adrián Dela|DEF|54|71|905.523.1348|1999||179||||
Nabil Alioui|AVA|102|74|207.511.29.251.587|1999||175||58|34|
Jean-Kévin Duverne|DEF|71|76|521.818.600.470.465.633|1997||184|21|58||
Andreas Poulsen|DEF|43|73|566.158.117.315.23.796|1999||188||||
Dujon Sterling|DEF|76|80|215.236.929.147.825.717|1999||186|||21.48.53|
Danel Sinani|AVA|94|78|616.919.425.929.817.768|1997||185|83|145||D
Matheus Fernandes|MED|16|76|159.653.127.886.102.704|1998||183|||9|
Faïz Selemani|AVA|58|73|210.319.855.4.875.470.44.58.700|1993||181|41|||E
Florian Sotoca|AVA|58|75|578.393.521|1990||187||||
Cristián Borja|DEF|33|78|437.845.812.163.65.77|1993||179|8||7.20.47|
Diogo Queirós|DEF|127|75|325.585.345.886.335.869.50|1999||188||||
Filipe Soares|MED|127|71|292.582.642.345.346.597|1999||177||||
Jayson Molumby|MED|78|75|568.166.695.924|1999||176|40|||
Mark Travers|GR|78|75|160.831.825.565.299|1999||191|6|76||
Sandro Kulenović|AVA|40|74|517.277.404.592.848|1999||191||||
Davide Bettella|DEF|84|77|100.674.580.652.366.461|2000||185||||
Jordy Caicedo|AVA|49|77|280.195.843.799.109.813.427.1037|1997||187|26|||
Tymoteusz Puchacz|DEF|126|74|514.370.874.856.654.0.422.684|1999||180|16||25|
Carlos Eduardo|AVA|16|69|389.653.102.704.292.65.280.570|1996||173|||9|D
Moussa Koné|AVA|135|74|338.274.622.501.149.1019.992|1996||175||||
Fredrik Bjørkan|DEF|116|76|152.418.354|1998||180|22||13|
Ádám Nagy|MED|73|79|352.154.168.681.810|1995||187|88|||
Doğukan Sinik|AVA|152|72|84.426.411|1999||180|6|||E
Florian Ayé|AVA|58|73|15.223.165.786.490|1997||184||||
Kristijan Bistrovic|MED|40|77|801.194.484.478.513.362.124.35|1998||183||||
Martijn Kaars|AVA|124|71|336.817.1081|1999||183||||
Patrick Sequeira|GR|38|73|187.200|1999||190|20|||
Omar Traoré|DEF|2|65|899.415.1303.871.921|1998||187||||
Maximilian Bauer|DEF|2|72|394.115.0.91|2000||189||||
Philipp Sander|MED|2|71|422.158|1998||185||||
Lamine Fomba|MED|58|73|15.622.763.786|1998||188||||
Mert Çetin|DEF|152|73|376.737.416.486.513.29.82.1047|1997||189|2||41|
Leon Flach|MED|45|73|817.678.454.899|2001||178||||
Mitchell van Bergen|AVA|124|73|907.414.820.334.807|1999||170||||D
Emanuel Aiwu|DEF|165|73|718.238.145.827.87|2000||184||||
Santiago Colombatto|MED|4|75|681.196.857.673.416.797.527.345.723|1997||175||||
Wilfried Kanga|AVA|39|78|647.867.81.486.942.418.822.197.277.465.41|1998||189|2|58||D
Davidson|AVA|16|72|360.748.214.908.65.131.811|1991||177||||E
Siebe Van der Heyden|DEF|20|74|472.875.549.817.465|1998||185|1||45|
Rafael Camacho|AVA|127|80|532.812.732.120.90.596|2000||175|||33.47|D
Liziero|MED|16|74|834.443.235.943.597|1998||175||||
Arthur Gomes|AVA|16|74|777.211.111.292.812.242.276|1998||175|||28.47|E
Gabriel Batista|GR|16|74|357.776.159|1998||188|||30|
Mamadou Fofana|DEF|100|75|65.323.75.607|1998||186|50|||
Dario Špikić|AVA|40|74|403.277.90.732.405|1999||183||||D
Aleksa Terzic|DEF|145|76|294.356.285.767.366|1999||184|18|||
Denis Drăguș|AVA|132|78|335.822.241.378.374.856.301.339|1999||185|28|||
Zé Pedro (1997)|DEF|127|68|295.325.196.1360.910|1997||187|||7.52|
Emil Bohinen|MED|116|73|194.764.378.366.895.209.1053|1999||189||76||
Bakaye Dibassy|DEF|100|62|75.193.569.885|1989||183|4|58||
Giorgi Kvernadze|AVA|61|71|366|2003||183|9|||E
Erik Botheim|AVA|116|74|739.152.494.764.550.1053.901|2000||187|2|||
Dimitri Lavalée|DEF|20|74|822.548.797.471.827|1997||187||||
Juninho|AVA|16|75|690.355.903.292.214.699.357.865.102.397|1996||179||||
Bosko Sutalo|DEF|40|74|594.100.416.277.822.237.90|2000||188||||
Ola Solbakken|AVA|116|70|152.737.632.881.285.613.1145|1998||186|11||31.44|D
Alessio Zerbin|AVA|84|76|601.209.696.366.580.895.238|1999||182|1||6.11.21.37.48|
Álex Sola|AVA|54|75|725.66.379.390.72|1999||178|1|||D
Callum Styles|DEF|73|78|178.129.568.828.924|2000||167|31|76||D
Bruno Tabata|AVA|16|74|690.812.653.700.443|1997||175|||7.9.47|D
Gaizka Larrazabal|DEF|54|72|144.101.779.200.155|1997||181|1|||D
Iddrisu Baba|MED|60|77|549.72.665.186|1996||182|29|||
Patrick Burner|DEF|103|74|612.622.1167|1996||170|10|58||
André Franco|MED|127|71|292.325.217|1998||177|||52|
Enea Mihaj|DEF|1|75|655.642.345.108|1998||183|19|63|9|
Marco John|MED|2|71|421.394|2002||184||||
David Nemeth|DEF|165|71|827.548.817.1035|2001||191||||
Álvaro Fernández|GR|54|78|638.587.754.164.291.787.262.181|1998||186|1||34|
Nicolás Fonseca|MED|157|71|618.734.527.723.235.1103|1998||181|7|84|17|
Nicolas Madsen|MED|43|73|566.414.473.698|2000||194||||
Christopher Operi|DEF|39|74|502.465.511.131.759|1997||183|13|||
Melayro Bogarde|DEF|141|74|421.312.645.501|2002||184|1|124||
Reggie Cannon|DEF|45|74|250.149.698.229|1998||180|30||28|
Allahyar Sayyadmanesh|AVA|80|75|351.449.948.426.473.514|2001||182|9||55|D
João Ferreira|DEF|127|70|140.908.732.921.871.163.763|2001||185|||18.30|
Sotiris Alexandropoulos|MED|63|74|654.812.632.822.302|2001||186|10||41.47|
Matthias Braunöder|MED|165|71|117.232.128|2002||173||||
Filippo Ranocchia|MED|84|72|460.580.463.285.652.673|2001||186|||48|
Ignace Van der Brempt|DEF|20|76|224.767.408.232.781|2002||187||||
Seid Korac|DEF|94|70|289.256.911.895.416|2001||188|23|||
Braian Ojeda|MED|122|74|254.617.766.637.1015|2000||172|20|||
Jackson Porozo|DEF|49|76|777.149.862.632.484.186.226|2000||192|13||28|
Frantzdy Pierrot|AVA|71|76|229.585.398.545.12.180|1995||194|57|||
Karl Hein|GR|55|79|720.93.886.923|2002||193|49||16|
Víctor Chust|DEF|54|81|721.245.283.1348|2000||184|||11|
Devis Vásquez|GR|33|78|7.789.97.285.737.141.1309.1089|1998||195|||41.52|
Dion Sanderson|DEF|76|74|934.145.146.197.263.698.828|1999||188|||18.35.39|
Iván Angulo|AVA|33|67|286.653.242.159.690.637|1999||170|||9|E
Koki Saito|AVA|86|74|941.536.807.698|2001||170|1|||E
Jeremy Ngakia|DEF|76|76|925.921|2000||184||||
Samuel Soares|GR|127|73|140|2002||190|||7.18.31.38|
George Bello|DEF|45|74|108.91.501|2002||173|7|115||
Claudio Spinelli|AVA|4|70|842.773.378.241.89.382.324.506.255.438.892.1369.1044|1997||180||||
Livan Burcu|AVA|152|71|762.874|2004||180||2||E
Mickaël Biron|AVA|58|72|19.472.708.625.620|1997||170|17|||D
Grégoire Coudert|GR|58|67|855.75.818.175|1999||188||||
Luke McNally|DEF|78|68|641.175.236.825.168.1248|1999||184||||
Chris Ramos|AVA|54|71|886.187.245.159.723|1997||193||||
Bryan Okoh|DEF|143|70|767.318.509.15|2003||191||45||
Giorgi Gocholeishvili|DEF|61|76|788.233.408.245|2001||178|20|||
Carlos Vicente|AVA|54|73|258.66.145.709|1999||179||||D
Oliver Sonne|DEF|125|73|796.175.806.1048|2000||184|20|43||
Anis Ben Slimane|MED|151|76|172.790.616|2001||188|44|43||
Isaac Lihadji|AVA|58|77|553.530.38.39.828|2002||177|||4.12.41|D
Neto Borges|DEF|16|74|410.377.892.847.223.168.565|1996||185||||
Alemão|AVA|16|74|498.240.443.723.649.719|1998||182||||
Randy Nteka|MED|58|70|190.719.283|1997||189|15|||
Cheikh Sabaly|AVA|135|74|400.323.666.889.1218|1999||168|12|||D
Armindo Sieb|MED|2|73|394.133.548.500|2003||175|||27|
Tommaso Barbieri|DEF|84|72|618.460.463.681.238|2002||181||||
Doğan Alemdar|GR|152|75|486.731.862.131.141|2002||189|2|||
Augustine Boakye|MED|60|76|932.763|2000||178|2|||D
Joe Mendes|DEF|142|69|410.14.163.132.769|2002||177|1|||
Kevin Agudelo|MED|33|76|378.356.810.51.959|1998||178||||
Victor Parada|DEF|54|73|66.188.809|2002||187||||
Ilyas Chaira|AVA|102|74|386.188.723|2001||179||54||E
Brian Ocampo|AVA|157|76|598.245.235|1999||172|1|||E
Mohammad Mohebi|AVA|80|74|776.741.404|1998||176|40|||E
Gabriel Vidovic|MED|40|75|133.907.277.548.750|2003||180||2|5.53|E
Makhtar Gueye|AVA|135|73|763.19.472.779.708.146.755|1997||186||||
Leonardo Campana|AVA|49|77|934.345.391.442.607|2000||188|20||18.35.39|
Oscar Fraulo|MED|43|74|566.158.882.263|2003||180||||
Nemanja Jovic|AVA|145|73|665.292.980|2002||178|2|21||E
Carlos Martín|AVA|54|75|104.110.188.66.719.405|2002||184|||51|E
Kristoffer Lund|DEF|45|73|566.289.429.652.231.145|2002||184|7|43||
Jon Ander Olasagasti|MED|54|75|725.523|2000||176|1|||
Jofre Carreras|AVA|54|75|291.188|2001||173|1|||D
Raúl Torrente|DEF|54|73|726.390.277.512|2001||193||||
Cheikh Niasse|MED|135|75|530.654.942.416.376|2000||188|1||17|
Elias Achouri|AVA|151|77|292.860.900.233.770|1999||177|33|58||E
James Abankwah|DEF|78|74|871.213.921.1248|2004||182|7|||
Samuele Vignato|MED|84|72|580.404.218|2004||172||||
Óscar Aranda|AVA|54|70|345.1348|2002||181||||E
Diogo Nascimento|MED|127|71|910.632.732|2002||166||||
Abdoullah Ba|MED|58|71|511.828.869|2003||180|1|||
John Mercado|AVA|49|70|904.21.806.102|2002||186|10|||E
Beni Mukendi|MED|3|71|860.200.908|2002||180|3|||
Souleymane Faye|AVA|135|72|726.143.390.812.319|2003||179|1||41|D
Wagner Leonardo|DEF|16|73|777.621.360.242.690.280.395|1999||183|||28|
Leo Walta|MED|57|70|613.572.798.830.1048.500|2003||170|18|||
Santiago Pierotti|AVA|4|69|228.513|2001||184||||D
Jacen Russell-Rowe|AVA|25|71|230.854.1115|2002||183|12|||
John Tolkin|DEF|45|75|608.422|2002||170|10||42|
Zidane Iqbal|MED|77|79|552.882.273|2003||181|28|76||
Rayan Philippe|AVA|58|72|266.19.278.408.750.1265|2000||183||||D
Abu Kamara|AVA|76|71|616.692.426.379|2003||183||||D
Cheick Condé|MED|68|70|347.338.895.148.919|2000||185|10|||
Bruno Onyemaechi|DEF|115|73|349.149.632|1999||184|32|||
Figueiredo|AVA|16|66|892.235.78.74|2001||178||||E
Sambou Soumano|AVA|135|70|319.466.736.666.1218.820|2001||182||||
Ugo Raghouber|MED|58|66|530.512.869.523.175|2003||188||58|41|
Thierno Baldé|DEF|58|71|862.19.511.647|2002||182|||42|
Samed Bazdar|AVA|21|77|665.779.454.797|2004||186|16|145||
Jhoanner Chávez|DEF|49|73|438.279.521.806|2002||181|7|||
Mory Gbane|MED|39|70|487.380.820|2000||188|2|||
Justin Diehl|AVA|2|74|231.298|2004||174||||E
Andrew Moran|MED|78|70|146.825.166.500.695|2003||177|4|||
Roni|MED|16|71|234.111.570.21|1999||174|||55|
Stefan Mitrović|AVA|145|74|713.294.416.625.300.98.911|2002||181|10|||E
Rodrigo Ribeiro|AVA|127|73|812.617.21.115|2005||185|||7.39.47|
Tomas Rigo|MED|52|67|802.126.825|2002||184|16|||
Welington|DEF|16|73|834.805|2001||170||||
Santi García|MED|54|70|379.380|2001||184||||
Ronnie Edwards|DEF|76|73|675.805.698.1192|2003||180||||
Amine El Ouazzani|AVA|102|71|398.163.81|2001||188||58||
Jhon Solís|MED|33|74|106.386.145|2004||186|2|||
Brahim Traoré|DEF|58|66|759.237.822|2004||190||||
Chico Lamba|DEF|127|71|812.92.763|2003||189||70|47|
Josué Casimir|DEF|71|75|511.15.276|2001||178|13|58||D
Ismaël Boura|DEF|34|73|521.511.862|2000||173|1|58||
Marco Pellegrino|DEF|4|66|683.7.764.438.427.150|2002||184|||41.52|
Lasse Nordås|AVA|116|63|152.861.539.414.237|2002||194||||
Ramón Terrats|MED|54|76|386.905.379.291|2000||181|2|||
Pablo Ibáñez|MED|54|74|638.66.181|1998||179|1|||
Erison|AVA|16|70|355.159.292.834.485.452|1999||180|||18|
Oscar Schwartau|MED|43|73|172.616|2006||186||43||
Frank Magri|AVA|24|74|746.854.81|1999||178|20|58||
Ayman Kari|MED|58|68|647.319|2004||182|||36|
Lucas Michal|AVA|58|71|587.323.207|2005||185||||D
Tim Drexler|DEF|2|72|421.620.767|2005||183||||
Ilyes Housni|AVA|102|73|647.59.511.19|2005||176||58|4.36|
Max Weiß|GR|2|70|479.175|2004||190||||
Maurice Krattenmacher|MED|2|73|133.418|2005||180||||
Lilian Raolisoa|DEF|58|70|81|2000||178||||
Mateo Joseph|AVA|54|75|516.549|2003||180||||
Gaspar|DEF|3|71|295.513|1997||193|59|||
Ignacio Miramón|MED|4|73|382.530.150|2003||173|||41|
Mihajlo Ilić|DEF|145|73|665.154.80.209|2003||192||||
Juan Carlos Gauto|MED|4|72|427.132.262.683|2004||170||||D
Amine Sbaï|AVA|102|75|393.41.81|2000||175|3|||E
Étienne Camara|MED|58|74|425.871.702.654|2003||191|||43|
Skelly Alvero|MED|58|71|330.541.923.75|2002||202||||
Mohamed Belloumi|AVA|5|72|346.426|2002||177|4|||D
Nesta Elphege|AVA|58|63|210.393.663.855|2001||196||||
Marvin Elimbi|DEF|58|65|293.868.851.380|2003||186||||
Rosen Bozhinov|DEF|17|63|195.744.681.990|2005||179|5|||
Gonçalo Nogueira|MED|127|63|908.668|2003||185||||
Reuell Walters|DEF|76|63|539.93.147|2004||186||76|16|
Riyad Idrissi|DEF|84|70|196.575|2005||182||||
Djé D'Avilla|MED|39|63|519.27.217.45|2003||191||39|34|
João Marques|AVA|127|71|909.292.163.380.200.851|2002||179||||E
Noah Darvich|MED|2|75|298|2006||184||||
Sebastián Boselli|DEF|157|73|255.734.296.379|2003||183||||
Pablo Durán|AVA|54|73|203|2001||176|||43|
Thérence Koudou|DEF|58|71|820.666.471|2004||178||||
Jun-ho Bae|MED|37|75|249.825|2003||180|13|||E
Lucas Cepeda|AVA|29|75|227.283.1103|2002||177|18|||E
Shavy Babicka|AVA|59|74|854.294.478.1222|2000||179|24|||D
Rémy Labeau Lascary|AVA|58|68|521.819.818.15|2003||185||||
Lewis Koumas|AVA|123|74|532.825.145.426|2005||182|16|76|13.33|E
Noé Lebreton|MED|58|68|759.589|2004||178||||
Chuki|MED|54|71|887.886.923|2004||176||||
Martim Marques|DEF|127|69|320|2004||173||||
Zach Abbott|DEF|76|72|617.805|2006||188|||39|
Ángel Ortiz|DEF|54|71|143.142|2004||167||||
Yoel Lago|DEF|54|69|203|2004||185|||43|
Nectarios Triantis|MED|63|71|926.205.828.419.569|2003||191|5|8||
Naves|DEF|16|70|653.74.605|2002||180|||9|
Dermane Karim|MED|149|72|536.470.319.354.862|2003||178|33||13|
Óscar Cortés|AVA|33|74|567.521.717.813.427|2003||177|1|||E
Alex Freeman|AVA|45|77|637.905|2004||188|26||42|D
Brayan Medina|DEF|33|62|183.361.847|2002||195||33||
Massimo Pessina|GR|84|66|154|2007||188||||
Thiago Helguera|MED|157|74|598.163.188.104|2006||179||||
Mathys de Carvalho|MED|127|70|541.958|2005||183||58|18.41|
Tyler Bindon|DEF|118|79|720.617.790.213|2005||188|32|||
Florian Hellstern|GR|2|63|298.394|2007||188||||
Felipe Chávez|MED|125|73|133.231|2007||177|1|2|5|
Prosper Obah|AVA|115|69|910.504.788|2003||180||||D
Gustavo Silva|AVA|16|63|597.908|1999||180||16||D
Rafael Nel|AVA|127|69|812|2005||182|||41.47|
Otto Stange|AVA|2|71|408|2007||185||||
Enso González|AVA|122|74|528.934|2005||169|1||55|E
Emmanuel Biumla|DEF|58|66|156.81|2005||185||39||
Deniz Zeitler|AVA|2|63|315.421.750|2006||181||||E
Patrice Covic|MED|40|74|923.274|2007||182||2||
Luis Engelns|MED|2|66|750.421|2007||190||||
Juan Arizala|DEF|33|70|436.871|2005||183||||
Mirza Catovic|MED|2|69|298|2007||190||145||
Nils Zätterström|DEF|142|73|550.790.378.715|2005||186|1|||
Stephan Zagadou|DEF|58|66|511|2008||186||||
Diego León|DEF|122|76|552|2007||177|1|122|47|
Uchenna Ogundu|AVA|115|65|65.115.1172|2006||180||||
Bara Sapoko Ndiaye|MED|135|78|133|2007||180|4||5|
Martin Lanig|MED|2|77|421.394.298.231.281.17|1984||190|||27|
Dean Marney|MED|76|76|853.831.698.616.426.175.1189.1190|1984||183||||
Dominik Reinhardt|DEF|2|75|620.115|1984||188||||
Hugo Leal|MED|127|78|140.74.110.647.325.27.163.120.860.909.292|1980||180|2||28.30.38.44|
Anthony Seric|DEF|40|80|405.663.416.165.510.654.141.477.629|1979||181|16|8||
Henok Goitom|AVA|50|77|871.722.886.72.14.756.379|1984||189|4|142||
Francesco Magnanelli|MED|84|75|218.356.781.1123|1984||181||||
Sébastien Grax|AVA|58|73|587.862.330.763.398|1984||178|||24|
Ricardo Vaz Tê|AVA|127|78|155.426.656.419.129.925.33.213.690|1986||188||||D
David Marshall|GR|51|79|204.616.197.426.929.263.698.419|1985||190|47||38|
Daniel Fernandes|GR|127|79|203.451.642.898.947.654.448.191.657.334.623.658.346.531|1983||195|2|25|20.25.28.50|
Alexander Farnerud|MED|142|77|293.298.172.942.848.1279.1100.429.431.1101|1984||181|8||5|
Lionel Carole|DEF|58|75|600.140.193.862.371.787.293.486.759|1991||182|||30|
Grégory Bourillon|DEF|58|76|819.731.647.319.820.81.502|1984||187||||
Yann Jouffre|MED|58|74|622.398.319.323|1984||176||||
Andy Wilkinson|DEF|76|77|825.664.793.147.568|1984||180||||
Matty Fryatt|AVA|76|77|198.920.518.426.789.617|1986||178||||
Cláudio Pitbull|AVA|16|74|395.462.777.46.325.358.27.909.326.554.279.380.1171|1982||173|||7.28|
Cadú|DEF|127|74|668.149.191.380.520|1981||182|2|||
Miguel Garcia|DEF|127|74|812.729.629.163.635.549.1250|1983||179|||25.32.40|
Dániel Tőzsér|MED|73|78|371.352.377.378.921.663.698.12|1985||188|31|||
Rafa López|DEF|54|76|887.886.753.379.750.1335|1985||179||||
Alessandro Potenza|DEF|84|79|440.663.218.549.356.378.201.575.359.1118.1364|1984||185|||6.37.51|
Roberto Lago|DEF|54|77|203.379.17|1985||178|3|||
Thomas Mangani|MED|58|75|587.818.4.19.81.218|1987||183||||
Gladstone|DEF|16|74|242.463.416.812.653.621.693.192.380.396.1338|1985||184|||19.40|
Tobias Weis|MED|2|78|421.281.898|1985||170|1||29|
Martin Latka|DEF|32|74|179.802.145.656.302.804|1984||193|1|||
Laurent Ciman|DEF|20|80|702.224.470.822.579.500.266.849|1985||180|20||45|
Alexis Thébaux|GR|58|73|600.266.759.818.662.746.950|1985||185||||
Thiago Ribeiro|AVA|16|76|156.834.57.242.196.777.112.279.537.704.211.395.396.1109|1986||183||||E
Diogo Valente|AVA|127|72|149.214.325.554.520.163.27.191.380.363.631.765.1172|1984||176|3||7.28.52|E
Lino|DEF|16|75|234.833.355.834.279.358.462.27.325.642.537|1977||184|||7.25.28.52|
Tobias Werner|AVA|2|75|115.298.620|1985||176||||E
Nicolas Fauvergue|AVA|58|75|530.293.193.820.323.4.662|1984||193|||4|
Mensur Mujdza|DEF|21|80|365.0|1984||185|37|40||
Cícero|AVA|70|73|163.276.908.631.732.668.582.92.136.765.1172.860|1986||189|14|127|28.41|
Paolo Dellafiore|DEF|84|76|440.810.858.652.848.663.209.618.794.650.508.987.673.724|1985||186||4|6.37|
Stefan Babovic|MED|145|77|665.624.600.354.779|1987||178|4|109||
Niko Bungert|DEF|2|74|548.1237|1986||188|||53|
Xabier Castillo|DEF|54|77|101.725.507.66|1986||185|||17|
Emiliano Armenteros|MED|4|76|125.438.787.719.638.778|1986||184||||E
Tobias Levels|DEF|2|76|158.302.315|1986||186||||
Markus Suttner|DEF|165|76|117.315.166.302|1987||177|20|||
Nick Proschwitz|AVA|2|75|933.332.321.750.426.129.164.236.797.807.278.1212.421|1986||192||||
Danny Fox|DEF|51|78|299.920.236.204.175.805.617.929|1986||183|4|76|42|
Tobias Sippel|GR|2|77|0.158|1988||180||||
Boukary Dramé|DEF|135|78|647.330.725.218.100.760|1985||181|15|58||
Lukas Jutkiewicz|AVA|76|77|831.299.684.425.583.236.565.155.175.145|1989||185||||
Stefano Celozzi|DEF|2|77|479.298.281.898|1988||171||||
Alex Smithies|GR|76|75|425.698.197.518|1990||185||||
Kevin Lejeune|AVA|58|73|15.600.855.323.4|1985||181||||E
Tarantini|MED|127|65|748.690.732|1983||188|||39|
Aleandro Rosi|AVA|84|79|737.218.18.794.663.781.378.356.366.241.673.1295|1987||184|||36.44|D
Richard Stearman|DEF|76|78|518.934.447.367.790.425.263.1083|1987||191||||
Draman Haminu|MED|60|80|294.376.535.497.5.380.212|1986||173|43|||E
Dusan Svento|DEF|52|77|802.767.231|1985||178|47|||E
Joey O'Brien|DEF|78|79|789.155.925|1986||180|5|||
Banel Nicolita|AVA|132|79|339.763.600.335.1222|1985||177|37|||D
Simone Bentivoglio|MED|84|75|218.575.128.768.650.165.987.794.895|1985||184||||
Mehdi Lacen|MED|5|78|819.66.709.379.586|1984||175|43|58||
Víctor Casadesús|AVA|54|76|549.725.384.523.189.9|1985||180||||
Ustaritz|DEF|54|78|101.144.142.92.669.184.1016|1983||183|||17|
Francesco Pisano|DEF|84|77|196.155.118|1986||174||||
Pavle Ninkov|DEF|145|76|711.244.294.854|1985||181|9|||
Helgi Danielsson|MED|82|75|675.952.284.14.120.137.25.1261|1981||183|33|142||
Gaëtan Bong|DEF|24|78|323.855.885.632.929.166.617|1988||187|16|||
Tommy Elphick|DEF|76|76|166.160.99.425.426.720|1987||187||||
Philipp Hosiner|AVA|165|77|762.117.731.231.1228.274.1229.1237.827.874|1989||178|5|||
Nabil El Zhar|AVA|102|79|532.642.523.507.186.964|1986||170|10|58|43|D
Mateus|AVA|3|77|812.200.380.149.597.92.519.669.851|1984||174|68|||E
Juanito Gómez|AVA|4|64|859.416.1123.238|1985||165||||E
Jordi Gómez|MED|54|80|127.291.830.929.828.146.719.525.633|1985||178|||42.45|
Sebastian Langkamp|DEF|2|76|408.479.115.418.923.672|1988||191||||
Mario Vrancic|MED|21|75|548.750.616.404.825|1989||187|6|40|33.53|
Thomas Kraft|GR|2|79|133.418|1988||187|||5.54|
Leandro Greco|MED|84|77|737.416.681.679.632.18.378.128.238.359.673|1986||184|||19.34.36.44|
Régis Gurtner|GR|58|72|293.866.511.75.521|1986||183||||
Paco Montañés|AVA|54|76|127.9.779.291.189.523|1986||172||||E
Dominic Maroh|DEF|53|76|620.231.1303|1987||186|7|2||
Michele Paolucci|AVA|84|77|463.97.871.100.201.794.652.508.676.1226|1986||182|||21.24|
André Leão|MED|127|73|363.136.191.668.886.765.860.891|1985||182|||41.46|
Georgios Tzavellas|DEF|63|79|16.656.281.587.642.65.12.670.113|1987||183|50||25.44|
Elliott Bennett|AVA|76|77|934.239.178.166.616.168.146.793|1988||175||||D
Daniel Brosinski|DEF|2|75|231.394.548.479.1184|1988||178||||
Kévin Monnet-Paquet|AVA|58|75|521.319.763.1222|1988||183||||E
Adrián González|MED|54|78|203.721.384.379.709.719.283.753.586.190.1348.779|1988||183|||3|
Christian Clemens|AVA|2|77|231.548.515.782|1991||181||||D
Itay Shechter|AVA|83|76|0.830.600.545.986.542|1987||180|27|||
Vítor Silva|MED|127|68|669.878.668.812.262.349|1984||169|||34.41|
Henri Lansbury|MED|76|79|93.783.921.616.925.620.99.168.539.617|1990||183|||15|
Dan Gosling|MED|76|79|684.299.610.147.160.921.1084|1990||183||||
Carlos Saleiro|AVA|127|70|812.909.27.786|1986||186|||40|
Sercan Sararer|AVA|152|75|394.298.302.479|1989||180|12|2||D
Nauzet Alemán|MED|54|73|886.507.72|1985||178||||D
Pereirinha|MED|127|76|812.908.510.102.137.120|1988||174|||28.40|D
Mato Jajalo|MED|40|78|801.794.231.404.652.871.895|1988||182|13|21|21|
Danijel Aleksic|AVA|145|76|911.378.394.763.5.515.331.938.36.131.492.956|1991||181|2|40||
Elias Kachunga|AVA|129|75|158.418.899.750.315.425.155.1176.789.1083|1992||176|1|2||
Francesco Bolzoni|MED|84|77|440.366.378.794.652.618.128.320.810|1989||183|||6.21.31|
Alexander Kacaniklic|AVA|142|79|367.921.175.233.600.405.410|1991||180|21||44.52|D
Jens Hegeler|MED|2|78|524.620.418.168.115.1329|1988||193||||
Rémi Gomis|MED|135|74|819.759.885.523.600.1159|1984||180|15|58||
Georg Margreitter|DEF|165|73|501.117.934.233.620.1245.391|1988||187||||
Marco Mancosu|MED|84|73|196.285.139.513.760.1118|1988||180|||44|
Jay Spearing|MED|76|80|532.518.155.146.147|1988||168|||13.33.43|
Davide Di Gennaro|MED|84|78|7.154.378.729.18.650.575.810.652.196.510.128.209.461.764.1226|1988||181|||6.11|
Felipe Mattioni|DEF|16|80|395.7.549.291.299.270.235.1271.462|1988||180|||11.42.45|
Chris Basham|MED|76|76|155.147.790|1988||190||||
Adam Matuszczyk|MED|126|80|231.302.278.944.1303|1989||183|21|||
Nicolás Bertolo|AVA|4|78|150.598.125.652.779.185.734.683|1986||179|2||49|E
Renan (1986)|MED|16|74|112.203.360.811.908.136.191.768.51.889|1986||186|||34|
Fabian Giefer|GR|2|77|524.302.168.115.782|1990||196||||
Lars Unnerstall|GR|2|76|302.884.648.334.1170.782|1990||198||||
Renny Vega|GR|159|74|871.176.257.227.878|1979||180|70|||
Leonardo Sigali|DEF|4|74|506.905.388.277.710.592.69.1369|1987||179||84||
Cristian Álvarez|GR|4|77|738.291.771.719.779|1985||185|||42|
Milton Caraglio|AVA|4|71|738.607.674.95.917.109.185.226.1036|1988||188||||
Scott Arfield|MED|25|80|344.425.175.717.212.155.533|1988||178|21|51||
Christoph Moritz|MED|2|77|548.0.1368.408.451.782|1990||188|||53|
Mauro Formica|MED|4|76|611.146.652.185.138.228.865|1988||176|1|15||
Carlos Matheu|DEF|4|74|438.196.100.794.254.125.427.677.996|1985||183|1|||
Daniel Candeias|AVA|127|75|325.891.732.668.690.597.140.620.390.323.65.717.376.27.30.490.631|1988||180|||7.28.30.46|D
Erwin Mulder|GR|124|78|354.300.414.830.387|1989||193|1|||
Almog Cohen|MED|83|75|620.315.986|1988||170|27|||
Alexandre Oukidja|GR|5|75|530.585.293.323.433.1105.1094|1988||184|7|58|4|
Sebastien De Maio|DEF|58|76|165.366.378.80.356.154.871.987.575|1987||189||||
Francesco Della Rocca|MED|84|76|154.118.781.165.673.652.356.794.650.764.1353|1987||182|2|||
Diego Fabbrini|MED|84|76|285.871.652.921.794.568.145.565.810.723.305.195.308.97.1353|1990||182|1|||E
Hanno Behrens|MED|2|74|408.620.1261|1990||187||||
Kévin Anin|MED|58|72|511.330.612|1986||189||||
Lucas Deaux|MED|58|74|820.600.465.398.622.19.266|1988||180||||
Antoine Devaux|MED|58|71|511.866.854.820.855|1985||185||||
Romain Thomas|DEF|58|65|818.81.759.885|1988||193||||
Alberto Lora|DEF|54|75|813.633|1987||168||||
Míchel Madera|MED|54|76|813.145.379.545.699.12|1985||183||||
Yoel Rodríguez|GR|54|78|203.187.888.719.753.886.709|1988||185|||36.39|
Boris Vukcevic|MED|2|77|421|1990||182||40||D
Maximilian Beister|AVA|2|76|408.302.548.1.315.1303.556|1990||180||||D
Alfredo Morales|MED|45|75|418.315.302.609.756.815|1990||183|16|2||
Lolo|MED|54|76|586.787.638.779.283.430.1335|1984||182||||
Emilio Nsue|DEF|69|79|549.725.565.17.87.145.981|1989||178|51|54||D
Prince Oniangué|MED|35|76|731.81.855.820.934.746.759|1988||188|41|58|39|
Yannick Sagbo|AVA|39|76|587.950.426.934.954|1988||178|2|58||
Garra Dembélé|AVA|100|76|15.316.25.525.365|1986||183|7|58||
Camillo Ciano|AVA|84|76|601.241.650.118.663.209.366.139.1118.1027|1990||176|||43|D
Jonathan Hogg|MED|76|77|99.692.921.425|1988||170||||
Charlie Daniels|DEF|76|79|853.526.160.1245.1331.1190.692.793|1986||178||||
Abdoulaye Bamba|DEF|39|75|266.81|1990||182|4|||
Nathan Delfouneso|AVA|76|79|99.175.518.147.236.146.178.831.155.162.1086.1181|1991||185||||
Michele Camporese|DEF|84|74|356.209.128.285.139.7.18.359.729|1992||186|||52|
Luis Hernández|DEF|54|79|813.518.586.542.245.1348.1347|1989||182|||44|
Jan Moravek|MED|32|79|153.0.115.782|1989||180|3|||
Fran Rico|MED|54|75|390.753.1348|1987||178|1||35|
David Lombán|DEF|54|77|888.283.390.753.586|1987||188||||
Josef Husbauer|MED|32|75|126.806.196.802.83.274.968.1198|1990||182|21|||
Matías Rodríguez|MED|4|75|150.501.598.864.768.395.254.1038|1986||178|||50|D
Sam Baldock|AVA|76|75|543.925.168.166.263.641.720|1989||170||||
David Stockdale|GR|76|78|367.742.518.684.447.426.166.145.936.236.823.789|1985||191|1|||
Jorge Pulido|DEF|54|77|104.110.719.67.797.754.72.1348|1991||181|||51.59|
Marco Terrazzino|AVA|2|76|421.479.365.898.274.515.750|1991||176||||E
David Meyler|MED|78|80|828.426.720.236.1090|1989||189|26||38|
Claudemir (1988)|MED|16|76|907.233.224.163.799.910.36.801|1988||185|||9|
Vujadin Savic|DEF|145|75|294.711.156.274.91.921.17.1043|1990||194||||
Stefanos Kapino|GR|63|80|654.548.632.617.923.762.91.655.337|1994||196|9||25.28.38.40|
Vagner|GR|16|72|102.450.292.585.149.597.699.851|1986||185|||38|
Saber Khalifa|AVA|151|74|950.553.1095.1356|1986||183|46||17|
Brek Shea|MED|45|74|250.825.129.145.637.889.108.442|1990||191|34|||D
Anaitz Arbilla|DEF|54|76|101.144.430.719.291.753.184|1987||178|2|||
Oriol Riera|AVA|54|78|127.203.246.9.638.929.262.190.926|1986||184|2|||
Álex Bergantiños|MED|54|77|262.390.384.813|1985||177|2|||
Vasco Regini|DEF|84|79|209.768.359.285.601.760.663.729|1990||185|||44.48|
Álvaro Cejudo|AVA|54|75|143.507.638.142.709.926|1984||180||||D
Adam Clayton|MED|76|78|551.198.516.675.543.425.565.145.162.270|1989||180|||37|
Vid Belec|GR|53|81|440.241.629.492.199.768.139.764.17|1990||192|21||37.43.44|
Jordi Xumetra|AVA|54|75|386.283.523.779|1985||172|1|||D
Emiliano Alfaro|AVA|157|74|771.62.510.1327.1062.1335|1988||173|1|||
Saúl Berjón|AVA|54|74|507.9.722.753.723.174.865|1986||178||||E
Everton Luiz|MED|16|77|689.653.704.192.240.320.331.665.760.766.772.919|1988||175|||50|
Radosav Petrovic|MED|145|78|456.665.146.376.275.812.732.17.72.779|1989||193|44||30.32|
Kristoffer Nordfeldt|GR|142|78|170.414.830.376.14|1989||190|23|||
Christian Gytkjaer|AVA|43|75|540.613.412.739.1.580.895.128.514|1990||185|9|||
Marco Pérez|AVA|33|71|161.382.779.438.138.436.259.56.260.634.733.459.671.1008|1990||185||||
Raúl Albentosa|DEF|54|76|283.722.245.753.263.586.262.384.195.308.893|1988||193||||
Will Buckley|AVA|76|76|921.166.828.516.145.155.789|1989||183||||D
Geoffroy Serey Dié|MED|39|77|329.215.132.298.1094.1170.459.606|1984||179|61|||
Thomas Kaminski|GR|20|79|135.134.625.80.83.233.470.465.146.539.213.633|1992||190|1|||
Christoph Zimmermann|DEF|2|76|616|1993||194||||
Bamba Anderson|DEF|16|78|357.524.899.302.158.281|1988||188||||
Sonny Kittel|MED|2|78|281.315.408.715.391.926|1993||178||||E
Simon Zoller|AVA|2|75|479.899.0.231.898.817|1991||179||||
Darío Lezcano|AVA|122|74|332.321.315.227.317.1159.1005|1990||178|20|||
Fausto Rossi|MED|84|77|463.165.886.246.696.728.857.877.1226|1990||177|||6|
Robbin Ruiter|GR|124|71|336.882.828.648.747.613|1987||196||||
Gianluca Sansone|AVA|84|74|794.366.781.848.768.154.128.1118.618|1987||173||||
Matteo Ardemagni|AVA|84|75|7.673.859.222.100.650.575.218.199.810.97.118.366.1122.728.794|1987||185|||11.58|
Sami|AVA|70|73|265.554.163.325.908.33.92|1988||184|11||32.35.39.46.52|E
Yohan Tavares|DEF|127|71|136.822.292.218.909.847.120.819.17.512.862|1988||188||58|34.38|
Aleksandar Tonev|AVA|17|77|195.514.99.204.366.241|1990||178|29|||E
Valentin Roberge|DEF|31|74|90.554.828.820.13.87.398.647|1987||185|5|58||
Marcelo Larrondo|AVA|29|75|734.794.356.848.842.738.1061.254.966.1343.1008|1988||191||4|21|
Diego Novaretti|DEF|4|73|138.845.510.527.701.738|1985||194||||
Eneko Bóveda|DEF|54|78|101.144.753.262.184.988|1988||182|3|||
Yassine El Ghanassy|AVA|20|74|465.924.414.37.472.600.56.1053.1074|1990||175|2||44|E
Santiago García|DEF|4|75|738.652.618.923.1068.1343.1036.845|1988||191||||
Héldon|MED|23|74|554.812.246.732.908.54.61|1988||174|52||30.32.38|E
Joe Bennett|DEF|76|78|565.99.166.160.789.197.641.929|1990||177||||
Barry Douglas|DEF|51|75|273.514.492.934.516.146.814.1056|1989||175|1||17.39|
Ryan Shotton|DEF|76|75|825.129.929.263.145.556.565|1988||191|||45|
Dani Torres|MED|33|72|437.106.436.66.67.779.981|1989||181|14|||
Lukas Kübler|DEF|2|73|231.762.365|1992||183||||
Steven Skrzybski|AVA|2|75|874.302.422.782|1992||173||||
Kike García|AVA|54|78|722.565.753.638.66.291|1989||186||||
Renan Ribeiro|GR|16|74|112.834.292.812.36.295|1990||188|||32.47|
Kévin Bérigaud|AVA|58|74|950.578.81.651|1988||178||||
Scott Malone|MED|76|75|934.177.160.568.197.425.1176.263.367.1190.1074|1991||189||||D
Ángel Trujillo|DEF|54|73|72.523|1987||179||||
Luca Ceppitelli|DEF|84|74|673.128.663.196.895|1989||189|||48|
Lee Tomlin|MED|76|76|675.565.160.168.197.270.617.920|1989||180|2|||
Abdoulaye Ba|DEF|135|77|325.748.27.908.719.351.65.1.262.308.582.92.1182.847|1991||197|6||7.12.32.35.39.41.46.55.59|
Adam Matthews|DEF|123|79|197.204.828.168.213.633|1992||178|14|||
Laurens De Bock|DEF|20|77|469.224.516.472.828.10.949.113|1992||179|||17|
Dennis Appiah|DEF|58|76|587.759.80.600.763|1992||179|||44|
Yeni Ngbakoto|AVA|129|74|323.698.398.654.19.926.893|1992||173|2|58||D
Maxime Barthelmé|MED|58|72|319.662.398.502.1275.862|1988||176||||
Tomer Hemed|AVA|83|77|545.549.72.166.698.1033.213.922.926|1987||182|38|||
Jakub Brabec|DEF|32|75|806.377.180.902.90.732|1992||189|40|||
Nikola Stojiljkovic|AVA|145|73|711.244.163.486.149.346.49.58.294.549.680|1992||184|4||9.32.41|
Enric Gallego|AVA|54|73|754.638.379.1177.189|1986||190||||
Marius Bülter|AVA|2|72|874.421.231.782|1993||188||||E
Paweł Olkowski|DEF|126|75|944.370.401.231.155.374.1362|1990||184|13|||
Pablo Chavarría|AVA|4|73|138.80.470.466.521.820.549.586.710|1988||185||||
Marcel Sobottka|MED|2|75|302.898|1994||185||||
Mario Rondón|AVA|159|75|668.136.597.191.714.27.1334.1064.785|1986||182|13||34.46|
Federico Dionisi|AVA|84|72|764.18.629.366.97.1029.841|1987||179||||
Daniel Bachmann|GR|165|78|825.935.740.178.921.489.262.526|1994||191|14||38|
Joe Mason|AVA|78|77|684.197.155.934.177.229.543.692|1991||178||76|39|
Tommy Smith|DEF|76|74|425.825.565|1992||186||||
Ahmad Benali|MED|95|77|551.165.652.674.241.681.128|1992||173|8|76|2.37|
Tobias Figueiredo|DEF|127|75|812.597.617.426.360.240.102.457|1994||188|||30.38|
Michel|AVA|16|73|669.668.163.140.972|1986||181|||30.32|
Nico Yennaris|MED|30|77|93.160.164.936.122.1084.755|1993||174|13|76|15|
Hugo Vieira|AVA|127|77|292.380.813.140.163.850.294.940.799.156|1988||178|||28.30|
Nathaniel Méndez-Laing|AVA|76|75|934.675.790.692.793.197.565.789.263.543.1176|1992||178|19|||D
Luis Fariña|MED|4|74|710.140.262.719.864.98.265.1089|1991||177||29|30.46.51|
Toño García|DEF|54|71|523.981.753|1989||179||||
Juan Rafael Fuentes|DEF|54|74|246.291.638.617|1990||176||||
Alexander Hack|DEF|2|75|548.55.608.338|1993||193||||
Vincent Pajot|MED|58|76|866.731.763.81.323|1990||180||||
Thomas Monconduit|MED|58|72|15.75.319.763|1991||184||||
Álex López|MED|54|77|203.789.886.813.167.709|1988||175|1||36|
Phillipp Mwene|DEF|165|78|0.548.648|1994||170|34|||
Bo-kyung Kim|MED|37|80|208.197.929.458.483.873.303.1077|1989||178|44||40|D
Alejandro Gálvez|DEF|54|77|905.813.719.923.753.507.700|1989||188||||
Marcello Trotta|AVA|84|77|367.936.921.164.129.118.781.241.366.345.97.859|1992||188||||
Luíz Carlos|MED|16|70|446.363.668.163.639.36.1339|1985||175|||28.41.52|
Ryo Miyaichi|AVA|86|80|354.93.155.929.334.817.940|1992||183|5||15.45|D
Víctor Rodríguez|AVA|54|77|258.779.283.379.813.1177.1250.784|1989||170|2|||D
Zeca|MED|63|76|200.909.654.233|1988||181|34|127|28.46|
Ramon Azeez|MED|115|76|72.187.390.307|1992||169|6|||
Patrick Mainka|DEF|2|74|91.415|1994||194||||
Edgar Méndez|AVA|54|76|143.72.189.390.66.185.605.1347|1991||188||||D
Carlos Carbonero|MED|33|76|634.296.95.734.209.768.260.1000.1002.534|1990||178|5|||
Charalampos Mavrias|MED|63|76|654.828.302.479.404.419.633.87.655|1994||177|13||25.28|D
Danilo Dias|AVA|16|72|389.111.446.554.699.878.78|1985||173||||E
Sergio Álvarez (1992)|MED|54|75|813.753|1992||180||||
Achraf Lazaar|DEF|102|77|890.652.610.139.789.690.618.921|1992||184|19||43|
Nicolas Pallois|DEF|58|76|759.885.819.210.156.600.820.1218|1987||190|||44|
Tiago Rodrigues|MED|127|72|908.325.597.554.44.195.376.669.872|1992||177|||32.35.39.41.46|
Zeki Fryers|DEF|76|76|552.822.853.243.742.1152.129.447.824.831|1992||183|||10.12|
David Texeira|AVA|157|74|312.250.799.908.582.255|1991||183|7||32|
Peter Ankersen|DEF|43|77|289.893.739.767.233.378.613|1990||180|27|||
Mikel Agu|MED|115|77|325.224.909.176.908.190.792|1993||184|8||32.35.39.52|
Somália|MED|16|75|659.352.854.60.1298|1988||181||||
Fidel|AVA|54|74|283.246.72.507.67.978|1989||177||||E
Léo Lacroix|DEF|143|74|329.763.132.408.927|1992||197|1|||
Vicente Gómez|MED|54|66|507.262.1330.937|1988||187||||
Bebé|AVA|127|78|295.908.552.141.732.668.140.246.719.753.779.709|1990||190|26||2.7.10.30.39.46|E
Khaled Narey|AVA|2|74|750.394.408.302.642.48.53.1329|1994||180|8|||D
Kingsley Schindler|MED|60|74|422.231.769|1993||180|8|2||D
Charles (1984)|AVA|16|76|349.246.72.203.586.753|1984||179|||36|
Wesley Lautoa|DEF|58|74|193.319.266|1987||184||||
Salvador Agra|AVA|127|75|891.629.142.794.163.27.597.140.265.390.245.517.847.149.520|1991||166|||18.28.46.52|D
Javi Eraso|MED|54|77|101.144.186.184|1990||182|4|||
Cyrus Christie|DEF|78|79|236.263.565.367.617.830.426.155|1992||188|30|76|38|
Sergio Postigo|DEF|54|73|186.810.523.181.188|1988||185||||
Jordan Obita|AVA|76|73|720.692.628.641.936.419.1192.1190|1993||183|6|||D
Pablo Ceppelini|MED|157|71|677.196.593.1028.1068.106.967.185.252.863.1103|1991||176||||
Federico Rodríguez|AVA|157|73|677.378.154.679.320.1068.967.252.1103|1991||185||||
Amato Ciciretti|AVA|84|76|139.663.1314.97.218.232.285.508.601.737|1993||170|||11|D
Benno Schmitz|MED|2|77|318.767.705.231.391|1994||182||||
Mame Thiam|AVA|135|79|118.440.463.949.642.285.484.351.486.670.301.956|1992||185|4||44|
Dimitri Bisoli|MED|84|65|694.165.209|1994||180||||
David Juncà|DEF|54|76|386.753.203.930.384|1993||175||||
Loïck Landre|DEF|58|72|647.223.368.521.378.681.622.488.954.956.885|1992||182|||11|
José Rodríguez|MED|54|77|721.262.371.548.586.542.362.190.545.875.29.986.1348|1994||180|||11.31|
Mamadou Sylla|AVA|135|76|709.291.466.465.949.797.636.386.66.719.886.58.46|1994||184|||52|
Luca Rizzo|MED|84|74|768.681.575.154.100.760.18.199.359.696|1992||185||||
Filip Mladenovic|DEF|145|80|294.231.822.515.517.654.478.574.984|1991||180|34||43.46|
Lubomir Satka|DEF|52|79|610.514.769.1019.633|1995||188|42||43|
Alhassan Wakaso|MED|60|71|690.732.319.908.445.520.988|1992||180|1||32.39|
Cauley Woodrow|AVA|76|74|539.367.177.168.129.146.936|1994||184||||
Massadio Haïdara|DEF|100|76|19.610.521.818.490|1992||179|18|58|43|
Jérémie Bela|AVA|3|74|521.266.67.145.223|1993||173|6|58||E
Leo Stulac|MED|53|72|895.663.285.652.728.591.1044|1994||175|8|||
Branimir Hrgota|AVA|142|81|158.281.394.817|1993||187|3|21||
Jay Fulton|MED|51|73|344.830.628.929|1994||178||76||
Diogo Figueiras|DEF|127|77|668.582.787.378.632.163.732.345|1991||171|||9.40.41.59|
Rúben|DEF|127|71|554.908.214.748|1990||183||||
Mattia Bani|DEF|84|76|728.696.218.154.378.663.652|1993||188||||
Thom Haye|MED|75|75|22.513.10.588.414.71|1995||187|25|124||
Philipp Förster|MED|2|72|620.762.298.898.302.479.1367|1995||188||||
Antonio Milic|DEF|40|76|405.472.80.719.514|1994||190|3|||
Thievy Bifouma|AVA|35|77|291.507.924.72.390.820.746.639.799.82.938.176.623.488.963|1992||180|41|58|42|E
Mauro|MED|16|71|163.111.380|1990||178|||9.28.32.41.52|
Ben Pearson|MED|76|76|552.129.695.160.825|1995||176|||54|
Paul Seguin|MED|2|77|933.394.874.274.418.782|1995||186||||
Alexis Rolín|DEF|157|75|598.201.150.436.1015.1109|1989||183||||
Kristoffer Peterson|AVA|142|76|532.882.735.417.830.302.362|1994||185|1|||E
Rodrigo Lindoso|MED|16|66|358.240.554.159.202.443.1298|1989||182||||
Marko Bakic|MED|109|75|848.356.810.137.120.163.9.585.623.1213.963|1993||185|37||9.32|
Patrick Twumasi|AVA|60|73|76.66.374.651.458|1994||176|2|||D
Bruno González|DEF|54|74|189.142.379.523.886.186.813|1990||185||||
Modou Barrow|AVA|148|70|614.830.146.617.516.720.257.458.36.799.955.434.1099.1058|1992||176|18|||E
Paul Nardi|GR|58|76|19.587.731.207.319.465.698.15|1994||187|||34|
Mats Møller Dæhli|MED|116|79|552.576.197.365.817.377.620|1995||172|36|||
Dimitrios Goutas|DEF|63|74|937.632.470.797.514.113.799.197.376|1994||189|3||38.40|
Jordan Lefort|DEF|58|72|75.942.662.81.1218|1993||183|4|||
Sabin Merino|AVA|54|78|101.144.186.262.772.779.184.709|1992||187|2|||D
Carlos Clerc|DEF|54|74|291.386.638.523.283.886|1992||182||||
Patrick Erras|DEF|2|73|620.923.422|1995||195||||
Liam Henderson|MED|51|75|204.739.419.128.416.285.513.652.768|1996||183||||
José Pozo|MED|54|78|551.72.719.800.685.964|1996||170||||
Saidy Janko|DEF|148|79|552.155.204.129.763.325.617.942.886.898|1995||178|10|143|52.54|
Sinan Gümüş|AVA|152|77|371.378.84.351.301|1994||179||2|55|D
David Kinsombi|MED|2|74|548.281.479.408.422.750.762|1995||183||||
Kenan Kodro|AVA|21|79|725.638.548.391.233.101.886.348.352.374.779.623|1993||190|15|54||
Cédric Hountondji|DEF|12|73|731.502.15.368.525.223.81.609|1994||194|31|58||
Jacek Goralski|MED|126|75|931.454.898.1320.538|1992||172|21|||
Pierre-Yves Hamel|AVA|58|73|319.223.662.731|1994||189||||
Tom Lockyer|DEF|123|75|169.213.539.556|1994||180|16|||
Brendan Galloway|DEF|162|79|543.299.924.539.684.828|1996||186|7||38.45|
Gustavo Henrique|DEF|16|78|777.357.351.886.234|1993||193|||30|
Mauricio Cuero|AVA|33|74|441.125.523.109.138.226.438.1015.1196.778|1993||176||||D
Florian Tardieu|MED|58|73|316.330.949.862.763.578|1992||182||||
Alexy Bosetti|AVA|58|74|612.855.819.1070.1106|1993||172||||
Eduardo Henrique|MED|16|74|396.834.112.120.812.241.1182.56.102.443|1995||184|||47|
Joakim Nilsson|DEF|142|74|284.91.815|1994||185|14|||
Todor Nedelev|MED|17|72|548.538|1993||176|44|||D
Jacopo Petriccione|MED|84|73|513.241.128.139.356.841|1995||176||||
Ben Osborn|DEF|76|76|617.790.263.824|1994||176||||
Sassá|AVA|16|67|159.621.627.554.235.240.242|1994||174|||50|
Joaquín Fernández|DEF|54|75|72.886.856.188.476.754|1996||190||||
Mikkel Desler|DEF|43|73|626.412.854.116|1995||187||||D
Tana|MED|54|70|507.67.976|1990||169||||D
Patrick Pentz|GR|165|77|117.820.524.172|1997||186|18||56|
Wilder Cartagena|MED|125|73|909.388.637.1068.980.1300|1994||180|44|||
Pere Milla|AVA|54|76|379.753.283.291.1039|1992||184|2|||E
Oscar Benítez|AVA|4|72|163.89.107.140.150.1369.772|1993||183|||18.32.46|E
Cléber Reis|DEF|16|71|667.689.234.408.235.627.659.777|1990||186|||28|
Robert Muric|AVA|40|76|32.674.404.492.801|1996||179||||D
Josip Misic|MED|40|74|594.404.810.812.642.277|1994||187|4||9.32.47|
Younes Namli|AVA|43|75|414.645.494.229.807.511|1994||180||||D
Benedikt Gimber|DEF|2|73|421.762.479.451.315.415.390|1997||185||||
Sam Gallagher|AVA|76|77|805.543.146.145.825|1995||193|||42|D
Jorge Miramón|DEF|54|74|104.186.754.523.13.258.1039|1989||176||||
Julian Pollersbeck|GR|2|76|408.541.0.319.451|1994||195||||
Ali Sowe|AVA|148|74|218.461.674.508.575.513.694.195.741.82.180.1162|1994||186|14|||
Adama Mbengue|DEF|135|65|759.502.637|1993||178|8|||
Jaromir Zmrhal|AVA|32|74|802.165.87.573.1175|1993||189|23|||E
Sheyi Ojo|AVA|76|81|929.934.532.367.820.717.197.568.470.960.593|1997||177|||33|D
Tiago Silva|MED|127|73|120.137.349.617.632.908.57|1993||170||||
Rhys Healey|AVA|76|75|197.272.543.854.1331.425.1164.921|1994||180||||
Laurent Abergel|MED|58|75|553.4.19.319.612|1993||170|||17|
Maximilian Ullmann|DEF|165|71|501.718.895.932.391.1140|1996||179|1|||
Lorenzo Venuti|DEF|84|74|356.674.165.139.513.768|1995||180||||
Riccardo Gagliolo|DEF|142|76|199.663.764.13.97.729|1990||180|1|84||
Filippo Bandinelli|MED|84|73|139.285.356.508.673.781.810|1995||180||||
Thomas Ouwejan|DEF|124|74|22.871.589.546.782|1996||172|||13|
Manolis Saliakas|DEF|63|74|632.644.643.817|1996||178|7||38.40.55|
Edoardo Goldaniga|DEF|84|70|652.681.673.781.366.378.196.232|1993||193|||44|
Aaron Tshibola|MED|129|76|720.99.617.543.489.919.265.376.644.522|1995||191|18|76||
Vasyl Kravets|DEF|153|74|480.187.186.514.813.913.749.687.560.948|1997||183||||
Stipe Perica|AVA|40|75|215.588.871.366.484.585.921.542.822.308.985.404|1995||192|||31|
Matt Miazga|DEF|45|82|608.215.907.600.720.80.66.221.609|1995||191|28||21.48.53|
Burgui|AVA|54|76|291.813.66.1348.1347.779|1993||184|||57|E
Duncan Watmore|AVA|76|69|828.419.565.568.742|1994||175||||D
Chema Rodríguez|DEF|54|75|523.379.9.104.283.617.709.753|1992||189||||
Pawel Bochniewicz|DEF|126|71|729.871.726.401.414|1996||193|3||25|
Gautier Lloris|DEF|58|75|612.368.15.511.818|1995||188||||
Ertuğrul Ersoy|DEF|152|71|176.180.511.374.449|1997||187|2|||
Fali|DEF|54|68|103.427.384.245.523.888|1993||186|||39|
Lawrence Ati Zigi|GR|60|75|318.767.330.331|1996||188|31|||
Jamilu Collins|DEF|115|73|404.750.197.591|1994||178|29|||
Samuel Gustafson|MED|142|73|429.848.673.416.238.881|1995||186|13|||
Awer Mabil|AVA|8|78|31.566.289.668.484.245.806.981.391.557|1995||179|39|128||E
Juanpi|MED|159|71|105.586.754.37.655.912.1165|1994||171|28|||
Duane Holmes|MED|45|73|425.178.939.783.263.695.423|1994||172|2|||
Yuri Ribeiro|DEF|127|74|732.140.617.517.163.146|1997||178|||18.46|
Kasey Palmer|MED|85|75|425.263.146.168.830.236.426.539.215|1996||175|25|76|21.48|
Calvin Verdonk|DEF|75|77|354.645.589.334.345.530|1997||174|20|124||
Vinícius Araújo|AVA|16|74|242.822.888.811.546.1078.754.1079.779.892|1993||176|||39|
Cameron Borthwick-Jackson|DEF|76|83|552.934.516.783.628.177.800.740|1997||183|||31.54|
Max Lowe|DEF|76|71|263.793.26.790.617.789|1997||175||||
Kieran Dowell|MED|76|79|299.617.790.263.929.616.717.145.426|1997||175|||11.38.45|
Gabriel Fernández|AVA|157|72|255.710.677.203.779.317.865.185|1994||186||||
Anton Mitryushkin|GR|134|74|809.329.302.274.487.535.1350|1996||190|3|||
Iván Arboleda|GR|33|72|125.719.611.83.567.733.780|1996||183|1||20|
Asger Sörensen|DEF|43|73|566.767.318.451.620.806.233|1996||190||||
Yony González|AVA|33|75|286.459.358.140.499.234.202.260.690.111.733.436|1994||182|||30|D
Clifford Aboagye|MED|60|71|871.726.390.83.109.226.697.701|1995||167||||
Uche Agbo|MED|115|68|871.726.390.822.719.163.960.262.1175.921|1995||185|1||9|
Reece Burke|DEF|76|76|925.162.929.155.426.539.213|1996||188||||
Robin Fellhauer|MED|2|70|115|1998||182||||
Ajdin Hrustic|MED|8|79|312.281.416.417.764.51|1996||183|39||59|
Pablo Santos|DEF|16|72|554.163.745.411.582.56|1992||188|||9|
Mathias Rasmussen|MED|116|74|432.613.757.875.817|1997||170||||
César Martins|DEF|16|71|689.140.357.597.909.776.346.1080.240.395.462|1992||190|||7.30.46|
Lucão (1996)|DEF|16|76|834.292.389.570.396.623.78|1996||185||||
Arnaud Lusamba|MED|129|74|19.612.207.75.65.670|1997||180|2|58||
Kingsley Ehizibue|DEF|124|76|645.231.871.378|1995||189||2||
Ivan Saponjic|AVA|145|76|665.949.110.245.348.1175.953|1997||189|||51|
Felix Passlack|DEF|2|80|157.421.616.362.898.419|1998||170|||53|
Niklas Schmidt|MED|2|72|923.899.854|1998||184||||
David Costas|DEF|54|76|203.549.723.127.72|1995||184|||36|
Erik Palmer-Brown|DEF|45|78|476.325.470.588.551.117.862.654|1997||185|4||26.43.46|
José Carlos Lazo|AVA|54|75|187.291.72.67.379.1348|1996||180|||57|E
Javi Muñoz|MED|54|78|721.66.723.189.188.753.507.379.72.1348.1347|1995||175|||11.57|
Adrián Guerrero|DEF|54|66|888.189.320.338|1998||174||||
Pablo Martínez (1989)|DEF|58|74|622.368.81.293.262|1989||182||||
Aarón Escandell|GR|54|76|905.888.586.105.726.390.307.507.723|1995||187||||
Federico Ricca|DEF|157|75|252.586.224.625.138|1994||176|1|||
Emanuele Ndoj|MED|1|75|165.97.201.508|1996||189|6|84||
Tim Skarke|MED|2|73|415.874.782|1996||181||||
Sébastien Salles-Lamonge|MED|58|73|731.511.746.772|1996||170||||
Mads Pedersen|DEF|43|74|613.115.338.418|1996||180||||
Yakou Méïté|AVA|39|73|647.720.330.197.251|1996||184|2|58|4|D
Aaron Leya Iseka|AVA|20|76|80.553.949.854.323.129.30.623.195|1997||182||||
Álvaro Tejero|DEF|54|78|721.67.753.779.291.90.186.1348.1347|1996||173|||3.35.57|
Rochinha|AVA|127|73|155.822.149.908.812.484.345.200|1995||172|||47|E
Moreto Cassamá|MED|70|75|820.633|1998||165|30|||
Nanu|DEF|70|73|136.554.325.250.776.769.295.17.448|1994||177|33|127|52|
Janni Serra|AVA|2|73|898.422.91.25.620|1998||193||||
Chris Bedia|AVA|39|72|702.949.862.330.786.874.426.942.51.855|1996||190||||
Leo Suárez|AVA|4|75|150.905.886.549.77.778.865.296|1996||164||||D
Koji Miyoshi|MED|86|80|485.940.744.145.898|1997||167|5|||D
Souleyman Doumbia|DEF|39|73|128.391.731.81.822.212.647.1226|1996||175|8|58||
Steffen Tigges|AVA|2|76|899.157.231.750|1998||195||||
Liam Cullen|MED|123|75|830.518.983|1999||178|17|||
Pontus Almqvist|AVA|142|75|614.741.882.685.513.663.1099|1999||178||||D
Francesco Cassata|MED|84|76|781.366.378.97.463.663.810.841|1997||183||||
Jhon Murillo|AVA|159|74|140.847.484.772.109.183|1995||171|51|159|46|D
Jan Mlakar|AVA|53|77|356.895.593.698.166.929.75.405.681|1998||183|30|||D
Lennart Czyborra|DEF|2|73|417.100.378.91.645.918|1999||181||||
Timothy Tillman|MED|45|75|620.394.500|1999||183|3|2|42|
Pablo Galdames|MED|29|73|917.378.238.892.174.438|1996||175|12|||
Jeffrey de Lange|GR|124|75|334.387.553|1998||191||||
Kaj Sierhuis|AVA|124|78|32.312.820.417.362.589|1998||180||63||
Andrija Balic|MED|40|75|405.871.362.673.1019.1158|1997||180||||
Jake Clarke-Salter|DEF|76|81|215.169.828.907.145.236.698|1997||188|||21.48.53|
Karlo Letica|GR|40|74|405.224.760.768.191.314.509.321|1997||201|||44|
Felix Beijmo|DEF|142|74|170.268.923.550.394.25.233|1998||185|1|||
Joël Schmied|DEF|143|72|942.329.231.1212.1159|1998||188||||
James Bree|DEF|76|76|129.99.447.539.805.213|1997||172||||
Ahmed Touba|DEF|5|75|224.625.707.131.513.471.654.511|1998||184|17|58|43|
Smail Prevljak|AVA|21|72|705.318.767.466.418.591.277.1035|1995||187|27|||
Carlo Boukhalfa|MED|2|69|365.451.817.331|1999||186||||
Kemal Ademi|AVA|143|74|606.132.351.478.487.750.762.321.594.331|1996||197||2||
Jonathan Klinsmann|GR|45|74|418.331.499.209|1997||194||||
Finn Becker|MED|2|73|817.421.620|2000||177||||
Jean Manuel Mbom|MED|2|73|923.900.898.1303|2000||179||||
Florent Muslija|MED|89|75|479.750.365.302|1998||172|40|2||E
Abdu Conté|DEF|127|72|582.862.942.200|1998||183||70||
Pedro Ferreira|MED|127|63|547.891.23.776.812|1998||183|||30.32|
Daam Foulon|DEF|20|69|919.139.471.744|1999||180||||
Giovanni González|DEF|157|77|734.677.549.494|1994||173|17|||
Tete Morente|AVA|54|63|104.384.187.586.283.513|1996||184||||E
Jorge Sáenz|DEF|54|75|189.203.186.188.554.813.888|1996||192||||
Javi Sánchez|DEF|54|75|721.886.92.1348|1997||186|||35.57|
Théo Valls|MED|58|73|622.393.786|1995||179||||
Jorge Fernandes|DEF|127|72|325.847.484.908.41|1997||193|||52|
Christoph Klarer|DEF|165|68|302.145.1230.805|2000||191||||
Allan Campbell|MED|51|72|583.539.568.213.273.816|1998||175|1|||
João Amaral|MED|127|74|909.140.514.668.490.8.1360.631|1991||172|||46|D
Marcus Coco|DEF|58|77|398.600.191.986|1996||184|6|||D
Sory Kaba|AVA|68|75|283.266.566.625.197.507|1995||191|21|||
Miguel Luís|MED|127|75|812.908.715.655|1999||178|||32|
André Pereira|AVA|127|74|891.325.909.908.779.732|1995||188|||7.52|
Pedro Díaz|MED|54|74|813.156.719|1998||180||||
Malte Amundsen|DEF|43|73|739.278.893.609.230.1115.1048|1998||179||||
Gabriel Osho|DEF|115|73|169.939.539.15.197.1150.720|1998||185|2|76||
Alexandru Dobre|AVA|132|77|160.178.939.929.266.345.326|1998||178|7|||D
Maximiliano Caufriez|DEF|20|74|919.797.809.223.888.767|1997||189|||46|
Cryzan|AVA|16|73|102.776.111.207.627|1996||191||||
Brian Mansilla (1997)|AVA|4|73|710.382.909.346.683.636.34.996|1997||178||||E
Vincent Marchetti|MED|58|72|4.19.662|1997||181||||
Manuel De Luca|AVA|84|71|848.768.238.218.575.673|1998||192||||
Marius Marin|MED|132|77|781.681.51|1998||180|36|||
Noah Fadiga|DEF|135|73|336.417.818.465.90.224|1999||180||20||
Daniel Mancini|AVA|4|70|611.156.855.15.90.654.17|1996||179|||43.46|D
Aiden O'Neill|MED|8|75|175.628.205.167.557.822.609.1189|1998||178|35|||
Julien Laporte|DEF|58|73|223.319.578|1993||185||||
Darko Churlinov|AVA|97|78|231.298.175.454.490.685.782|2000||180|43|||E
Przemysław Wiśniewski|DEF|126|73|401.895.810.928|1998||195|9|||
Róber Pier|DEF|54|71|262.523.813.109|1995||182||||
Sam Field|MED|76|76|924.213.698.616|1998||186||||
Luther Singh|AVA|164|73|214.582.668.233.163.244.369|1997||171|16||9|E
Assan Ceesay|AVA|148|74|320.338.899.513.251.1279|1994||188|41|||
Ricard Sánchez|DEF|54|74|104.110.390.187.292|2000||175|||3.51|
Salvatore Esposito|MED|84|73|760.218.810.1282.768|2000||178|1||37|
Patric Pfeiffer|DEF|60|73|408.115.942|1999||196|1|2||
Marco Sala|DEF|84|74|440.781.760.241.652.232.513.118.979|1999||182||||
Casimir Ninga|AVA|28|75|578.759.81.799.83|1993||186|29|||
Sofian Kiyine|MED|102|74|218.764.510.895.625.359.859|1997||182||20|48|D
Víctor Campuzano|AVA|54|75|291.813.832.1348|1997||174||||
Rayyan Baniya|DEF|152|68|416.478.856.652.492.987|1999||192||84||
Charles Traoré|DEF|100|75|862.600.746|1992||180|10|58||
Marios Vrousai|DEF|63|74|632.732|1998||183|5|||D
Giuseppe Caso|AVA|84|65|378.366.979.356.575.580|1998||172||||E
Beni Baningime|MED|129|77|299.929.263.413|1998||178|||11.38|
Kevin Van Den Kerkhof|DEF|5|73|746.323.702.319|1996||179|10|58||
Lukas Petkov|AVA|17|73|115.394|2000||183|13|2||D
Ignacio Ramírez|AVA|157|72|763.598.611.811.1062|1997||180||||
Morlaye Sylla|MED|68|66|92.251|1998||185|44|||
Luquinhas|AVA|16|73|904.265.517.608.360.776.714.140|1996||167|||46|E
Reda Khadra|MED|2|73|146.166.790.145.820.511.699|2001||175||||D
Bruno Rodrigues (1997)|AVA|16|72|659.689.834.345.242.653.102|1997||177|||9|E
Moritz Broschinski|AVA|2|72|898.132.479|2000||188||||
Justin Hoogma|DEF|124|73|417.421.817.882.394|1998||184||||
Joel Latibeaudiere|DEF|85|79|551.334.830.236|2000||180|34|76|26|
Shurandy Sambo|DEF|42|77|807.648.175|2001||174|13|124||
Abdou Harroui|MED|102|74|807.781.366.416|1998||182||124||
Charles Abi|AVA|58|74|763.398.885|2000||187|3|||
Giorgi Tsitaishvili|AVA|61|78|275.913.220.930.514.390.323.719|2000||171|33|83||E
Elias Cobbaut|DEF|20|74|471.80.663.806|1997||188|1||45|
Josh Tymon|DEF|76|74|426.825.345.543.830|1999||178|||38|
Javi Hernández|DEF|54|73|723.186.386.245.38.654.208.1348|1998||182|||43|
Mathias Pereira Lage|MED|127|71|223.81.818.817|1996||180||58||E
José Luis Rodríguez|AVA|121|79|465.591.66.187.813.345.294.317.1202|1998||180|75|||E
Stéphane Diarra|AVA|39|71|950.512.319.763.74.731|1998||173||||D
Tom Edwards|DEF|76|73|825.129.1189.425.608|1999||175||||
Roberto Massimo|AVA|2|75|91.298.28.394.401|2000||184||60||D
Tomás Ribeiro|DEF|127|70|120.391.908.346|1999||185||||
Scott Twine|MED|76|71|831.543.175.426.168.1164|1999||174||||
Michele Collocolo|MED|84|66|209.97.238|1999||188||||
Bendegúz Bolla|DEF|73|72|348.934.391.786.718|1999||179|37||18.35|
Mateo García|AVA|4|74|439.507.638.9.90.294.109.611|1996||167||||E
Houboulang Mendes|DEF|70|74|819.319.72.188.862.362.786|1998||184|4|58||
Emanuele Valeri|DEF|84|73|513.209.238.366.663|1998||180||||
Heri Tavares|AVA|23|72|582.149.818.345.688.292.877|1997||181|6|127||E
Ryan Porteous|DEF|51|75|419.921.695.500|1999||188|13|||
Álvaro Aguado|MED|54|74|246.886.190.291|1996||175||||
Gaius Makouta|MED|58|73|90.748.149.65.511|1997||180|20||28|
Shinta Appelkamp|MED|2|74|302.394|2000||175||86||
Tomás Alarcón|MED|29|70|245.227.307.1008.779|1999||174|12|||
Emil Kornvig|MED|43|73|540.810.835.222.757.928|2000||187||||
Jack Taylor|MED|78|71|675.447.1192|1998||185|11|76||
Gennaro Borrelli|AVA|84|71|674.461.366.165.196.180|2000||194||||
Samuele Birindelli|DEF|84|70|681.580|1999||175||||
Oliver Villadsen|DEF|43|72|613.620.172|2001||173||||
Filip Stojilkovic|AVA|143|62|329.0.624.237.681.1170.326.1159.338|2000||185||||
Liberato Cacace|DEF|118|75|922.797.285.935|2000||183|40|||
Jayden Braaf|AVA|124|74|871.416.362.529.551.764|2002||180|||26|E
Boris Popović|DEF|145|71|207.92.587.855|2000||189||58|34|
Luis Binks|DEF|76|71|579.154.232.236.172|2001||188|3|||
Regan Slater|MED|76|73|790.198.783.426|1999||171||||
Kady Borges|AVA|16|75|235.537.292.904.699.494.352|1996||170||||D
Liam Millar|AVA|25|81|489.532.426.132.145.213.695|1999||181|47||33|E
Alberto Soro|AVA|54|68|779.721.390.910.308.214.258|1999||173|||57|D
Magnus Kofod Andersen|MED|43|73|613.895.806|1999||179||||
Thórir Jóhann Helgason|MED|82|71|513.278.895|2000||187|20|||
Ismaila Coulibaly|MED|100|74|790.135.14.501.505|2000||183|1|||
Mickaël Nadé|DEF|58|74|763.1218|1999||186||||
Lamine Diaby-Fadiga|AVA|68|72|612.662.454.715|2001||183|2|58||
Andrias Edmundsson|DEF|74|71|931.416.828|2000||193|25|||
Aziz Yakubu|AVA|60|72|910.908.292.732.791|1998||187||||
Alejandro Gómez|DEF|111|70|109.149.778.226|2002||183|3|||
Slobodan Tedic|AVA|145|71|244.551.645.129.213.35|2000||190|||26|
Lukas Engel|DEF|43|71|893.796.565.221.766.1088|1998||178||||D
Malcolm Ebiowei|AVA|76|72|263.243.426.708.641.147|2003||185|2|||D
Fali Candé|DEF|70|66|200.690.323.895.781|1998||184|33|127||
Kaio|DEF|16|72|353.776.494.159|1995||186||||
Oier Zarraga|MED|54|77|101.184.144.871|1999||175|1|||
Kenneth Schmidt|DEF|2|71|365.302.274|2002||187||||
Daniel Elfadli|MED|95|73|408.501|1997||188|4|2||
Marc Aguado|MED|54|68|258.779.283|2000||178||||
Di'Shon Bernard|DEF|76|80|552.426.692.789|2000||189|19|||
Cody Drameh|DEF|76|75|516.197.539.145.426.378|2001||175|||17|
Lee Buchanan|DEF|76|74|923.145.263|2001||179||||
Shandon Baptiste|MED|62|76|641.164.539|1998||175|3|||
Jamie Shackleton|MED|76|74|516.568.790|1999||168|||17|
Kays Ruiz-Atil|MED|58|79|647.15|2002||182|||42.53|
Ibrahim Karamoko|MED|58|71|218.848.822.398|2001||190||||
Jessy Deminguet|MED|58|72|759.293.323|1998||178||||
Jonathan Fischer|GR|43|72|420.364.323|2001||197||||
Rasmus Carstensen|DEF|43|74|796.465.377.231.514.25|2000||183||||
Rhys Norrington-Davies|DEF|123|76|790.539.825.698|1999||180|17|7||
Óscar Gil|DEF|54|75|283.291.625|1998||175|1|||
Yoël Armougom|DEF|58|71|759.330.223.657|1998||173||||
Sander Tangvik|GR|116|77|739.408|2002||193||||
Ilario Monterisi|DEF|84|66|513.366|2001||190||||
Demba Seck|AVA|135|74|760.848.366.665|2001||190|1|||D
Nahuel Estévez|MED|4|68|296.780.810.241.663.652|1995||183||||
Yasser Larouci|DEF|5|79|532.862.790.921.488.512|2001||176|2||33|
José Gragera|MED|54|76|813.291.262.174|2000||186||||
Noah Ohio|AVA|124|74|907.117.705.822.426.882.886|2003||185||||
José Marsà|DEF|54|74|812.813.471|2002||185|||47|
Million Manhoef|AVA|124|74|907.825|2002||179||||D
Borja Garcés|AVA|54|78|110.104.186.189.190.283|1999||175|||51|
Lamine Gueye|AVA|135|71|400.666.323.662|1998||178||||D
Papa Ndiaga Yade|AVA|105|72|323.862.324.504.1218|2000||187|13|135||E
Pablo Martínez (1998)|MED|54|63|9.103.523.188.754.586|1998||182||||
Julien Ponceau|MED|58|73|319.736.622.886|2000||170||3||
Tim Breithaupt|MED|2|71|479.115.0.302|2002||192||||
Joyskim Dawa|DEF|24|75|587.380.322.305.339|1996||194|10|58||
Mateusz Legowski|MED|126|73|685.764.943.301.584|2003||181|1|||
Darlan|MED|16|72|395.462.211.525.776|1998||179||||
Ivan Smolcic|DEF|40|72|404.232|2000||181|3|||
Kristoffer Askildsen|MED|116|76|768.513.566.901.1053|2001||190|1||44|
Garcia|DEF|16|74|653.597.345|2002||169|||9|
Adrian Bajrami|DEF|143|75|140.321.163|2002||188|5||31|
Aiham Ousou|DEF|146|74|429.369.802.702.245.1152|2000||186|15|142||
Gonçalo Cardoso|DEF|127|75|149.132.143.547.554.668.925|2000||189||||
Pelle Mattsson|MED|43|70|796.616|2001||181||||
Bartlomiej Wdowik|DEF|126|73|454.163.1200|2000||184|1|||E
Andreas Jungdal|GR|43|78|7.752.238.473|2002||195||139||
Fabio Gruber|DEF|125|66|620.548|2002||188|5|2||
Arkadiusz Pyrka|DEF|126|72|680.817|2002||177|3|||D
Mattia Felici|AVA|84|71|513.652.859.196|2001||182||||E
Luca Moro|AVA|84|69|650.201.781.366.810.378.760|2001||189||||
Frans Krätzig|MED|2|79|620.133.117.298.415.767|2003||170|||53|
Louis Oppie|DEF|2|66|91.817|2002||184||||
Melker Ellborg|GR|142|63|550.828.1154|2003||191||||
Lucas Ribeiro|DEF|16|75|421.202.280.389.443|1999||190||||
Tomoya Ando|DEF|86|71|119.817.1077|1999||191|3|||
Vasilios Zagaritis|DEF|63|74|654.663.71.414|2001||178||||
Drissa Camara|MED|39|69|663.374|2002||179||||
Giorgio Cittadini|DEF|84|70|100.575.580.378.366|2002||193|||48|
Erencan Yardımcı|AVA|152|71|371.301.65.670.421.827.278.0|2002||188||||
Colin Kleine-Bekel|DEF|2|66|422.898.331|2003||192||||
Juanmi Latasa|AVA|54|74|721.379.886.1348|2001||193|||11|
Carlos Dotor|MED|54|72|203.723.586.1348.813|2001||180|||43|
Danley Jean Jacques|MED|71|76|323.678|2000||180|38|||
Kalidou Sidibé|MED|58|73|854.34.398.502.662.1218|1999||200|2|||
Iván Azón|AVA|54|74|779.232.447.258.379|2002||192||||
Kaique Rocha|DEF|16|71|777.768.443.102.200|2001||197|||44|
Alexander Bernhardsson|AVA|142|70|951.284.422.933|1998||185|18|||D
Carlos Domínguez|DEF|54|74|203.723|2001||187|1||43|
Sang-bin Jeong|AVA|37|73|934.391.569.815|2002||175|3||35.40|D
Bruno Amione|DEF|4|72|138.416.729.768.778|2002||187||||
Zanocelo|MED|16|69|689.353.777.360.292.202|2001||185||||
Riccieli|DEF|16|63|570.345.280|1998||184||||
Thelo Aasgaard|MED|116|79|929.539.717.80|2002||188|12|76||
Léo Leroy|MED|58|70|502.578.132.695|2000||185||||
Armin Gigovic|MED|21|78|741.626.566.422.942.1100|2002||187|28|142||
Magnus Knudsen|MED|116|73|531.741.25.422|2001||175||||
Leonardo Buta|DEF|127|71|871.380.582.753.732.163.727|2002||182||||
Saba Sazonov|DEF|61|75|947.276.848.285.379|2002||192|4|134||
Sidney Lima|DEF|16|66|350.349.776.665|1997||180||||
Fabiano (2000)|DEF|16|66|27.163.484.582.202.280|2000||175||||
Joaquín Sosa|DEF|157|73|598.154.277.579.227.437.1062.728.1109|2002||189||||
Víctor Meseguer|MED|54|70|722.188.390.886.709.930|1999||184||||
Edouard Michut|MED|58|78|647.828.29.362|2003||178|||4.36.42|
Gabriel Charpentier|AVA|35|73|118.378.729.97.366.663.237.304.600|1999||188|3|58||
Dinis Pinto|DEF|127|63|163.582|2000||178||||
Darko Gyabi|MED|76|74|516.426.684|2004||196||||
Daniel Fila|AVA|32|72|573.802.840.895.285.118|2002||190||||
Paul Mukairu|AVA|115|73|84.80.233.720.685.1047|2000||182||||D
Samir Chergui|DEF|5|75|15.662|1999||185|7|58||
Maksym Taloverov|DEF|153|75|179.802.804.501.684.825|2000||195|8|134||
Gonçalo Franco|MED|127|69|520.582.830|2000||176||||
João Mendes (2000)|DEF|127|63|325.908.669|2000||179|||7.52|
Bernardo Vital|DEF|127|71|292.779.454|2000||187||||
Noah Cadiou|MED|64|70|866.727.736.319.1218|1998||191|5|58||
Serginho (2001)|AVA|23|71|292.631.900.62|2001||183|1|127||D
Mateja Stjepanović|MED|145|71|665.582|2004||185||||
Marko Lazetić|AVA|145|77|294.7.752.362.343.26|2004||192|||41.52|
Ruairi McConville|DEF|79|71|166.616|2005||193|16|||
Marko Ivezic|DEF|145|73|422.419|2001||191|1|||
Peter Federico|AVA|131|75|888.379.886.401.1348.721|2002||180|16|54|11|D
Adama Boiro|DEF|54|75|638.181.144.101.925|2002||183||135|39|
Hamzat Ojediran|MED|115|73|521.229|2003||172||||
Fabio Chiarodia|DEF|84|73|923.158|2005||186|2|2||
Bosun Lawal|DEF|78|70|204.825.1189|2003||190|2|||
Gonçalo Esteves|DEF|127|73|812.292.22.871.943.74|2004||171|||47|
Igor Miladinovic|MED|145|74|244.763.665|2003||166||||
Maxence Rivera|AVA|58|75|763.869.414.1106|2002||168||||E
Nathan|DEF|16|66|892.149.777.345.443.462.730|2001||183|||28|
Cláudio Braga|AVA|127|66|24.413.732|1999||180||||
Caden Clark|MED|45|73|608.705.894.569.579.247.784|2003||180|2||42|D
William Mikelbrencis|DEF|58|73|323.408|2004||176||||
Edan Diop|MED|58|72|587.207|2004||185||||
Joseph Nonge|MED|20|73|460.463.862.786.490.818|2005||184||||
Jozhua Vertrouwd|DEF|124|72|719.981.336|2004||187||||
Telmo Arcanjo|AVA|23|75|847.908|2001||180|20|127||D
Mayckel Lahdo|AVA|142|64|410.22.600.172.1208.550|2002||179||||D
Justin Che|DEF|45|72|250.421.172.10.608|2003||185||||
Jacques Siwe|AVA|58|69|266.398.745|2001||190||||
Rareș Ilie|MED|132|72|326.612.542.509.285.987|2003||186||||
Martin Adeline|MED|58|72|820.736.862.408|2003||180||||
Tiago Morais|AVA|127|71|149.520.530.732.200|2003||168|||28|E
Pedro Lima (2003)|MED|16|66|653.594.21.812.616|2003||171||16|9.41|
José Salinas|DEF|54|73|283.188.291.586|2000||179||||
Check Keita|DEF|100|70|820.746.702|2003||185|2|58||
Fally Mayulu|AVA|58|71|148.718.168.827.92|2002||193||||
Julián Malatini|DEF|4|71|182.254.923.221|2001||190||||
Marvin Senaya|DEF|60|75|293.330.736.509.15|2001||181|6|58||
Gino Infantino|MED|4|76|738.356.37.89|2003||178||||D
Álex Padilla|GR|111|71|101.184.144.865|2003||190|1|54||
Hugo Rincón|DEF|54|75|638.101.144.184.188.386|2003||185|1|||
Gonzalo Abrego|MED|4|69|388.238.771|2000||184||||
Serginho (1999)|MED|127|63|350.631.776.525|1999||181||||
Enzo Tchato|DEF|24|74|578.366|2002||182|5|58||
Tobias Slotsager|DEF|43|72|626.416|2006||189||||
Moïse Sahi Dion|AVA|39|70|293.340|2001||175||||
Kjell Wätjen|MED|2|73|157.898.566|2006||184||||
Almugera Kabar|DEF|2|73|157.589|2006||186||||
Lovro Zvonarek|MED|40|75|801.133.827.391.295|2005||180|||53|
Santiago Homenchenko|MED|157|70|677.649.723.188.701|2003||185||||
Farid Alfa-Ruprecht|AVA|2|65|524.898.418.551|2006||181|||26|D
Kerwin Vargas|AVA|33|72|349.212.102|2002||180||||D
Mohamed Kaba|MED|68|69|885.513.600|2001||185||58||
Tyler Fredricson|DEF|76|72|552.509|2005||188||76|47|
Francesco Coppola|DEF|84|63|681|2005||195||||
João Rego|MED|127|71|140.200|2005||182||127|18.31.38|
Gustavo Varela|AVA|127|70|140.380.580|2005||184|||18.31|
Alieu Njie|AVA|142|70|848.356|2005||185||||E
David Jiménez|DEF|54|72|721.1348.1347.723|2004||170|||56|
Hugo Picard|MED|58|70|398.230.862|2003||168||||E
Zinedin Smajlović|DEF|142|71|513.774.632|2003||191|3|||
Adama Camara|MED|58|65|662.1275|1996||180|1|||
Pathé Mboup|AVA|135|71|708.666.818.541|2003||175||||E
Oumar Ngom|MED|105|70|666.295.513.210|2004||190|13|58||
Amine Salama|AVA|58|72|869.81.820.759.848.588|2000||192||||
Terry Yegbe|DEF|60|66|284.323.514|2001||195|2|60||
Min-hyeok Yang|AVA|37|75|373.853.698.692.236.473|2006||176|2|||D
Sandro Vidigal|AVA|127|63|163.466|2007||172||127||D
Jan Bürger|DEF|2|67|933.645|2007||180||||
Luis Balbo|DEF|159|71|356.827|2006||177|6|||
Óscar Perea|AVA|33|71|106.293.21.77|2005||180||||E
Coba da Costa|AVA|54|70|379.80.49|2002||182||54||E
Fallou Fall|DEF|135|70|820.364.815|2004||192||||
Guille Fernández|MED|54|73|127.549|2008||181||||
Mahamadou Diawara|MED|58|74|541.511.744.727|2005||187|||41|
Ruan (2005)|AVA|16|65|462.690.65|2005||172||||
Fran González|GR|54|75|721.1348.1347.787|2005||199|||56|
Jaurès Assoumou|AVA|39|69|862.769|2002||182||||E
Rayane Messi|AVA|58|71|266.293.666.590.40|2007||175||||E
Romelle Donovan|MED|76|67|145.177.164.790|2006||171||76||D
Kingstone Mutandwa|AVA|163|67|196.761.786|2003||185|3||44|
David Santos Daiber|MED|127|71|133|2007||183||94|5|
Ángel Pérez|AVA|54|67|754.66.1301|2002||183||54||D
Joseph Liteta|MED|163|65|196|2006||175|1|||
Luck Zogbé|DEF|39|72|818|2005||183|1|39||
Pharell Hensel|MED|2|62|933|2007||188||2||
Tomás Pérez|MED|4|69|611.325.112|2005||182||||
Pape Moussa Fall|AVA|135|65|706.323.505|2004||203|3|||
Mohamed Bamba (2004)|MED|39|65|820.380|2004||177||39||
Kenny Quetant|AVA|58|69|511.923|2006||189|3|||
Dastan Satpaev|AVA|27|76|215.175.1320|2008||176|8||56|
Kyllian Antonio|DEF|58|71|521|2008||183||||
Bogdan Popov|AVA|153|63|285|2007||193||||
José Neto|DEF|127|67|140|2008||184||127|31.38|
Noham Kamara|DEF|58|76|647.541|2007||185|||4.36.41|
Selton Sánchez|MED|54|74|101.184.144|2007||185||||
Jocelin Ta Bi|AVA|39|63|828|2005||175||39||D
Carlos Macià|MED|54|69|905|2008||190||||
Romuald Peiser|GR|58|72|647.524.326.862.604.27.1212.1303|1979||187|||52|
Moreno|MED|127|71|908.518.597|1981||188|1||30.32.46.52|
Manú|AVA|127|74|74.575.140.295.554.517.122.909.12.904|1982||172|||7.25|D
Paulo César|AVA|16|73|903.380.908.732.519.163|1980||175|||30.32.34|D
Zé Pedro (1978)|MED|127|69|149.909.120|1978||187|||30|
Tony|DEF|127|73|214.295.191.908.668.669|1980||178||58|41|
Ricardo Nunes|GR|127|72|891.27.519.325.909.214|1982||188|||12.32.35.39.52|
Bruno China|MED|127|72|520.549.732.27.137.120|1982||182|||52|
Paulo Jorge|MED|127|72|149.140.586.554.46.380.120.137|1981||176|||25|D
Targino|AVA|127|71|908.716.909.629.454.1171.860|1986||180|||46.52|D
Dani|MED|127|72|910.668.191.448.937.909|1982||177||||
Mário Camora|DEF|132|70|136.604.191|1986||178|10|127||
Henrique Sereno|DEF|127|76|908.345.886.325.231.486.548.1327.72.1364|1985||188|3||7.12.40.55.59|
Rúben Ribeiro|MED|127|70|520.669.136.668.732.380.149.812.37.411.214|1987||175|||30.39.41|
Rafael Miranda|MED|16|71|112.102.554.279.908.353|1984||179|||32|
Jorge Luiz|DEF|16|71|443.892.112.202.397.833.909.396.570|1982||192||||
Marafona|GR|127|75|891.554.265.582.668.163.65|1987||190|1||9.25.32.41|
Bruno Moreira|AVA|127|70|891.582.597.195.214.668.732.690.860|1987||185|||41|
Luísinho|DEF|127|74|582.732.265.668.140.262.754.520|1985||175|||30|
Chris Malonga|AVA|35|74|19.587.509.908.819|1987||183|19|58|44.46|E
Rúben Lima|DEF|127|75|140.265.909.136.405.277.404.878.582.120.345.295|1989||177|||7.30.34|
Orlando Sá|AVA|127|76|163.325.597.367.517.720.542.822.586|1988||188|1||7.12.20.28.30.59|
Issam El Adoua|MED|102|74|521.600.908.523.265.1356.957|1986||189|35||46|
Pato Rodríguez|AVA|4|74|438.777.296.12.582.1080.610|1990||170|||43|E
Rafik Halliche|DEF|5|80|140.597.367.27.700.292.582|1986||187|41||7.30.52|
David Simão|MED|127|77|140.668.27.554.92.195.149.744.12.582|1990||183||58|7.30.46|
Diogo Amado|MED|127|70|724.812.519.292.789.43|1990||177|||38.40|
Diogo Viana|AVA|127|74|325.884.265.669.380.195.137.120.163.346.304.349.860|1990||173|||7.12.28.59|D
Cauê Silva|MED|16|75|520.629.582.120.68.119.986|1989||184|||52|
Braga|MED|127|66|765.520.732.669.214.265|1983||179|||39|
João Aurélio|DEF|127|71|597.908.582.651|1988||185|||32|
Leonel Olímpio|MED|16|72|573.192.79.380.668.908.519.891|1982||184|||46|
Roderick Miranda|DEF|127|74|140.786.262.732.934.632.345.374.556|1991||194|||30.39|
Osama Rashid|MED|77|71|346.776.374.910.300.1141|1992||178|41|||
Renan (1990)|GR|16|73|234.280.292.396.704.1338|1990||192|||38|
Henrique Almeida|AVA|16|75|834.280.811.390.159.279.235.395.120.78.211.385.389.693.903|1991||177||||
Enzo Zidane|MED|54|81|721.66.509.265.736.72.190.1348.1347|1995||184||58|57|
Antonio Briseño|DEF|111|71|109.843.317.349.219.845.1300|1994||185||||
Flávio Ferreira|DEF|127|70|27.748.586|1991||180|||12|
Vincent Sasso|DEF|58|72|600.136.163.789.137.120.786.149.869.511|1991||190|||28.41.52|
Bebeto (1990)|DEF|16|70|279.554.847.667|1990||174|||60|
Juankar|DEF|54|77|721.163.779.142.390.586.654.90.1348.1347|1990||178|||28.32.34.41.52|D
Joãozinho|DEF|127|70|547.136.812.163.878.470.847.292.17.1214.851|1989||185|||28.41.52|
Josué Sá|DEF|127|74|908.214.80.484.754.538.542.732.380|1992||183|||46.52|
Tomané|AVA|127|74|908.655.92.847.294.769.17.346.21.1184|1992||182|||46.52|
Diogo Salomão|AVA|127|75|200.724.812.262.549.308.44.339.776.74.295|1988||176|||28.30.34.38|D
Jubal|DEF|16|75|903.777.92.908.149.909.15.494|1993||190|||32|
Luís Leal|AVA|144|74|582.292.519.36.120.375.17.137.41.95.226.980.611|1987||176|29|127|38.55|
Bruno Cortez|DEF|16|77|159.834.140.240.68.395.570|1987||179|1||7.30|
Joel Tagueu|AVA|24|75|537.235.242.777.554.597.44.159|1993||178|6|||
Fábio Sturgeon|MED|127|71|120.137.908.349.937.623.547.715|1994||183|||32|
Alexandre Guedes|AVA|127|70|265.908.345.668.1182.68.349.554.715.1276|1994||185||||
Tyler Boyd|AVA|118|70|922.908.847.82.141.799.180.499.603.500|1994||177|15||32.52|E
Naby Sarr|DEF|58|75|541.812.213.425.720.727|1993||196|||38|
Mohamed Bouldini|AVA|102|73|631.27.776.190.523.262.28.390.989|1995||184||||
Ewerton (1992)|MED|16|78|690.325.79.358.1298.667.669.881.1276|1992||179|||52|
Joel Pereira (1996, Lech Poznan)|DEF|127|66|28.633.380.514|1996||178|0|127||
Mattheus|MED|16|74|357.292.812.908.235.547.346.51|1994||185|||30.32.47|
Amr Warda|AVA|47|76|655.642.113.11.912.83.87.657.448.989|1993||176|30||9|E
Aaron Appindangoyé|DEF|59|70|149.950.819.953.799.490|1992||183|73|||
Douglas Coutinho|AVA|16|74|102.242.163.202.360.903|1994||183|||41|
Uri Busquets|MED|54|80|127.334.223.92.466|1999||185||||
Caio Rangel|AVA|16|73|196.92.242.211.240.353.462.659|1996||172||||D
Dylan Batubinsika|DEF|129|75|744.345.545.763.11.339|1996||184|16|58||
Samu|MED|127|71|149.910.908.1360|1996||170||||
Fabio Abreu|AVA|3|71|554.582.122.669|1993||182|8|76||
Saviour Godwin|AVA|115|68|472.200.53|1996||173|1|||E
Mikel Villanueva|DEF|159|66|105.586.245.384.776.908.42.1311|1993||190|31|||
Tyronne Ebuehi|DEF|115|78|10.140.334.895.285|1995||187|13|124|18.30.46|
Pedro Pereira|DEF|127|76|768.140.378.168.241.580.65.376|1998||174|||7.18.30.46|
Racine Coly|DEF|135|73|165.612.345.75.292.449|1995||185|4|||
Jérémy Livolant|AVA|58|72|398.866.502.330.156.200|1998||176||||D
Felipe Pires|AVA|16|73|318.767.421.117.653.360.404.582.749.10.462.912.1075|1995||178|||50|E
Mehrdad Mohammadi|AVA|80|66|265.38|1993||178|5|||D
Renat Dadashov|AVA|9|73|281.292.934.668.391.847.411.82.714.584|1999||186|48|2|18.25.39|
Gustavo Sauer|AVA|16|72|659.249.149.159.180|1993||181|||18.28|D
Miguel Silva|GR|127|66|910.908.554|1995||189|0|127|32.52|
Lumor Agbenyenu|DEF|60|75|325.690.1.812.402.549.90.586.488.761|1996||175|13||32.47|
Bruno Costa|MED|127|76|325.690.668.885.910.597.191|1997||170|||7.52|
Miguel Cardoso|AVA|127|70|724.262.878.847.276.837.120.486.121|1994||176||||E
Aylton Boa Morte|AVA|127|66|765.292.690.486|1993||182||||D
Dylan Saint-Louis|AVA|35|71|763.950.819.662.135.862.411.910|1995||175|10|58||D
Rodrigo Pinho|AVA|16|73|163.597.554.140.235.295.21.1298|1991||185||2|7.30.32.41|
Dani Silva|MED|127|70|908.416.566.651.928|2000||180||||
Ole Pohlmann|AVA|2|71|157.732.394|2001||183||||D
Gelson Dala|AVA|3|78|812.732.84.972|1996||175|57||30.32|
Bruno Jordão|MED|127|77|519.163.510.934.345.391.776.714.195|1998||185|||9.18.32.35.39|
Koffi Kouao|DEF|39|70|910.582.345.323.985|1998||173||||
Tiago Araújo|DEF|127|70|92.292.465.140|2001||178|||30|
Erick|AVA|16|68|621.280.380.202.834.163|1997||173|||9|D
Anderson Silva|AVA|16|68|396.345.122.908.65.651.397|1997||186||||
Miguel Baeza|MED|54|73|203.688.732.188.597.1348|2000||177|||43|
Alejandro Marqués|AVA|159|73|460.188.292.390.463|2000||189|5|||
Milutin Osmajic|AVA|109|74|245.910.695.378|1999||186|40|||D
Show|MED|3|70|120.149.538.545.250.490.530|1999||180|65|||
Yuki Soma|AVA|86|76|599.482.200.546|1997||165|22|||E
Brandon Aguilera|MED|38|76|617.169.732.292.1165|2003||168|29||39|
Amadou Dante|DEF|100|74|827.836.338.92|2000||179|22|||
Hugo Félix|MED|127|70|847|2004||170||||D
Adriano Firmino|MED|16|71|242.776|1999||187|||50|
Vinícius Lopes|AVA|16|70|389.159.708.776|1999||180|||18|D
Luis Asué|AVA|69|75|582.755.186|2001||184|32|||
Hyun-ju Lee|MED|37|72|686.92|2003||172|1|||D
Danilo Veiga|DEF|127|67|350.380.404.295.513|2002||183||||
Maga|DEF|127|69|908|2002||175||||
Stefan Lekovic|DEF|145|73|294.905.580.295|2004||192||||
Moisés Mosquera|DEF|33|67|554.317.476|2001||188||||
Facundo Cáseres|MED|4|69|917.591.346.380.778|2001||178||||
Hélio Varela|AVA|23|76|690.465.542|2002||176|24|127||E
Marko Milovanović|AVA|145|74|665.72.74.692|2003||196||||
Mateo Tanlongo|MED|4|73|738.812.233.732.651|2003||183|||41.47|
Zé Vítor|DEF|16|65|78.279.597|2001||189||||
João Costa|AVA|127|71|737.40.242|2005||178||16|31|D
João Tornich|DEF|16|69|690.501|2002||194||||
Antoine Joujou|AVA|58|71|511.663.345.600|2003||189||||E
Salvador Blopa|DEF|127|67|812|2007||188|||41|D
Ricardo Silva (1975)|DEF|127|71|325.554.519.908.149.136.909|1975||188|5||7.25.31.59|
Fary Faye|AVA|135|74|136.149.265|1974||177|4||34|
Tiago Gomes|DEF|127|74|140.295.944.638.120.292.163.323.349.74.87.863|1986||175|1||25.32.38.41.52|
Miguel Fidalgo|AVA|127|67|597.13.878.27.909|1982||177|||12|
Danielson|DEF|16|71|732.487.668.597.633.380.582.765|1981||189||||
João Paulo (1980)|AVA|127|70|265.149.349.909.891.136.292.189.668.519.326.520.87.345.988|1980||184|1||7.30.38|
Joeano|AVA|16|71|360.27.909.92.732.519|1979||182|||39|
Pawel Kieszek|GR|126|73|163.909.325.735.292.732.246.519.586.930|1984||187|||7.12.30.55.59|
Ricardo Silva (1980)|DEF|23|71|345.363.136.668.908.349|1980||186|16|127|41|
Bruno Amaro|MED|127|71|669.597.27.909.92.350|1983||181|1||12|
Vasco Fernandes|DEF|127|73|629.156.520.203.283.136.682.90.909.953.214.200.1110|1986||182|||52|
Rui Miguel|MED|127|71|28.748.604.944.668.908.494.326.860.1214|1983||175||||
Paulo Lopes|GR|127|76|140.380.765.295.860.349|1978||184|1||7.30.46|
Rúben Fernandes|DEF|127|70|690.891.292.797.380.346|1986||186|||38|
Marcelo Boeck|GR|16|73|443.554.812.211.360|1984||190|||28.30.34.38|
Muriel|GR|16|72|443.693.137.120.279.280.358.621|1987||190||||
João Guilherme|DEF|16|72|443.554.17.41|1986||185||||
Arthuro|AVA|16|75|240.565.709.813.66.246.339.34.203.357.519.878.292.1301|1982||190||||
Djalmir|AVA|16|68|345.120.765.349.629|1976||185|||52|
Gonçalo Santos|MED|127|70|27.776.265.292.277.904|1986||185|||12.38|
Fernando Alexandre|MED|127|70|140.547.295.163.520.629.27.582|1985||182|||25.34.52|
Gottardi|GR|16|71|443.693.627.462.519.597.554|1985||193||||
Bakary Bouba Saré|MED|18|74|80.739.191.277.37.908.582.137.120|1990||182|7|39|46.52|
João Ribeiro|AVA|127|71|604.27.908.635.629|1987||176|||12.46|E
Nuno Coelho|MED|127|75|748.519.325.27.140.136.90.92.120.214.690|1987||183|||7.12.28.30|
Mario Martínez|MED|54|72|507.149.988.682.1178|1985||174||||
Bruno Teles|DEF|16|72|395.693.811.462.908.468.892.732.668.27.78.214|1986||183|||46|
Maximilian Haas|DEF|2|75|133.565.519.163|1985||190|||32.54|
Felipe Garcia|GR|16|71|777.659.621.358.693.582.86.111.811|1988||193||||
Felipe Menezes|MED|16|72|389.667.140.159.811.653.689.192.202.240|1988||185|||7.30|
Ânderson Luís|DEF|16|67|355.292.570.92.397.833.903|1988||175|||38|
Edno|AVA|16|76|648.902.930.355.102.693.234.159.843.208.689.280.582.78.1338.730|1983||183||||
Marcos Díaz|GR|4|71|776.150.182.228.427|1986||186||||
Rabiola|AVA|127|71|908.325.629.265.349.163.680.669.27.1360.350.668.910|1989||182|||7.12.28.59|
Marinho|AVA|127|65|604.27.904|1983||166|||52|D
Rui Pedro (1988)|AVA|127|77|325.295.690.380.520.191.27.195.352.1072|1988||178|19||7.12.20.28.59|
Jorge Teixeira|DEF|127|74|200.545.338.794.822.213.797.21.120|1986||188||||
Javier Cohene|DEF|120|72|629.734.668.909.1006|1987||187|1|122|41.46|
Jean Sony Alcénat|DEF|71|74|520.732.676.339.349.1215|1986||174|67|||
Douglas Jesus|GR|16|68|777.446.908.1338|1983||188|||32.46.52|
Nuno Reis|DEF|127|75|812.207.629.323.654.909.525.1364.557|1991||181||143|28.34.38.52|
Caetano|AVA|127|69|668.380.669.265.891|1991||165|||41.46|D
Júlio Alves|MED|127|72|732.110.141|1991||178|||39|
Fredy|AVA|3|72|137.120.300.84.301.151.956|1990||170|69|||D
Patrick Bauer|DEF|2|74|298.554.213.1176.695.1280|1992||192||||
Marlon de Jesús|AVA|49|73|395.734.545.577.697.92.173.1128|1991||186|5|||
Rafael Martins|AVA|16|72|395.258.211.909.523.582.908.200.776.1360.520.976|1989||177|||32|
Lassad Nouioui|AVA|151|80|4.502.262.204.92.333|1986||189|3|58||
Carlão|AVA|16|72|519.163.482.668.1334.345.606.1339|1986||190|||32.34|
Florent Hanin|DEF|58|73|511.520.163.582.655.529.826.331.137.908.662.81.120|1990||177|||28.32|
Amido Baldé|AVA|70|75|776.812.207.908.204.919.323.554.847.51.986|1991||193|4||46|
Jean Barrientos|MED|157|71|710.908.930.937.912.11.1196|1990||174|||46|
Matt Jones|GR|76|68|776.878.120.137.847.678.1114|1986||190||||
José Francisco Cevallos Jr.|MED|49|74|503.463.469.690.960.1128|1995||186|5|||
Igor Rossi|DEF|16|72|443.554.413.346.1182.980|1989||189||||
João Carlos Teixeira|MED|127|79|164.532.166.325.163.908.354.345.755|1993||177|||9.13.33.39.52|D
Zainadine|DEF|110|72|597.554.1137|1988||178|64|||
Emin Mahmudov|MED|9|74|809.846.468.581.149|1992||175|65||25|
Mika (1991)|GR|127|75|519.140.149.828.120.27.909.582|1991||184||143|30|
Rúben Pinto|MED|127|75|140.668.120.137.195.348.547.851|1992||181|||30.41|
Junior Tallo|AVA|39|74|218.737.128.4.746.530.908.769.305.75.1074|1992||187|8||32|
Cláudio Ramos|GR|127|71|908.847.325|1991||183|1||7.25.46.52|
Claudemir (1984)|MED|16|71|892.659.597.986.1298|1984||173||||
Uri Rosell|MED|54|75|476.812.908.120.137.690.637.499|1992||181|1||30.38.52|
Douglas Tanque|AVA|16|72|659.446.397.689.68.668.769.490.791.234.396|1993||188||||
Simeon Slavchev|MED|17|74|812.87.155.525.515.699|1993||185|25||30.38|
Frederico Venâncio|DEF|127|72|909.789.908.187.753.776|1993||186||||
Hélder Lopes|DEF|127|74|663.847.136.668.507.12.27|1989||179|||41|
Jorge Rojas|AVA|122|72|137.120.382.226.438.1015.701|1993||170|16|||D
Charles (1994)|GR|16|71|892.554.910.908.988|1994||186||||
Seba Pérez|MED|33|75|106.150.771.649.149.200|1993||175|10||20.28|
Welthon|AVA|16|71|668.908.86.111.730.851|1992||180||||
Juan Delgado|DEF|29|76|227.384.847.668.605.789|1993||177|15|||D
João Afonso (1990)|DEF|127|62|908.292.246.776.851.847|1990||188|||32.46.52|
Filipe Augusto|MED|16|74|279.732.888.163.140.65.251|1993||182|||7.18.39.41.46|
Ivo Rodrigues|MED|127|72|908.325.92.668.744.345.48.582.584|1995||182|||32.35.39.46.52|D
Sardor Rashidov|AVA|158|72|597.47.1356.700|1991||184|50|||D
Sebastián Rincón|AVA|33|66|691.842.908.69.130.427.437.1144.780|1994||179|||32|D
Miguel Rodrigues|DEF|127|70|519.597.655.732.27.292|1993||188||||
Maurides|AVA|16|72|443.111.92.355.137.195.303.714.817.120|1994||189||||
Salim Cissé|AVA|68|72|27.812.92.909.8.979.629|1992||185|5|||
Tomas Dabo|DEF|127|70|163.92.346.562|1993||173|6|70|28|
Saleh Al-Shehri|AVA|7|78|136.36.56.45.46.547|1993||177|59||30.34.37.52.55|
Jonatan Álvez|AVA|157|74|252.908.503.106.967.443.459.1063.879|1988||183|||46|
Ali Alipour|AVA|80|71|554.380.963|1995||181|15||20|
Malick Evouna|AVA|59|74|492.776.597.1137.957|1992||185|37|||
Guillermo Celis|MED|33|71|459.140.908.228.259.634.733|1993||178|6||7.32.46|
Nikola Maras|DEF|145|75|711.214.72.719.66.523.813.188|1995||189|2|||
Komnen Andric|AVA|145|71|712.624.137.277.872.223.120.404.592.1075|1995||189||||
Rúben Lameiras|AVA|127|73|853.236.684.345.908.214.200|1994||175|||42|D
Iván Rossi|MED|4|72|554.125.227.252.427.459.683.734.1353|1993||183||||
Tomás Martínez|MED|4|73|734.189.254.163.69.423|1995||171|||32|
Héctor Hernández|AVA|54|76|104.110.283.67.586.190.214.234.380.507|1995||180|||51|
Djavan|DEF|16|70|349.192.27.140.163.214.582|1987||184|||30.32.41.52|
Gastón Campi|DEF|4|72|710.296.214.856.478.92.938.771.130|1991||193|||51|
Bozhidar Kraev|MED|17|73|525.566.380.345.922.926|1997||175|27|||
Kento Misao|MED|86|78|844.482.776.625|1996||181|6|||
Adrián Marín|DEF|54|74|905.186.66.390.345.380.163.637|1997||178||||
Yan Eteki|MED|24|75|390.200.9.72.307.787|1997||180|2|||
Pedro Sá|MED|127|64|891.690.295.669|1993||175||||
Andre Green|AVA|76|78|99.692.695.213.789.742.657.21.1330.1175|1998||180||||E
Eboue Kouassi|MED|39|74|494.204.377.92.519|1997||185||||
Pedro Amaral|DEF|127|75|655.732.48.644.292|1997||178||||
Nélson Monte|DEF|127|72|732.214.72.246.586.749|1995||187||||
Miguel Campos|DEF|127|66|136.629.324|1996||188||||
Gui Ramos|DEF|127|74|547.349.91.408.776.122|1997||191||||
Maurício Antônio|DEF|16|75|690.554.881.235.396|1992||183||||
Ponck|DEF|23|72|346.668.214.265.131.180.582.21.140|1995||182|23||46|
Bruno Paulista|MED|16|73|279.812.537.892|1995||190|||30.32.47|
Neris|DEF|16|62|443.811.659.149.62.44.242.280.360|1992||192||||
Sidy Sarr|MED|135|73|470.622.214.319.502|1996||196|6|||
Godfried Frimpong|DEF|124|72|582.484|1999||180||||
Ignacio de Arruabarrena|GR|157|70|92.63.1103|1997||181||||
Flávio|MED|16|70|280.353.149.279.856.385.61.1182|1996||177||||
Pedro Álvaro|DEF|127|70|120.292.90|2000||186||||
Thiago Santana|AVA|16|72|355.621.909.776.791.881.883|1993||184||||
Marc Gual|AVA|54|76|787.779.386.9.749.454.517.732.1320.1348|1996||186||||
Jandro Orellana|MED|54|70|292.245|2000||177||||
Matheusinho|MED|16|68|78.240.776.811.202.111|1998||164||||D
João Basso|DEF|16|70|659.292.724.92.777|1997||187||||
Lucas Fernandes|MED|16|74|834.690.159.21.462|1997||177|||18|
Matheus Jesus|MED|16|79|689.292.777.690.372.627.234.704.462.621.883|1997||187|||55|
Sylvester Jasper|AVA|17|75|419.169.690.800.945.1331.367.822|2001||180||76|38|E
Joe Hodge|MED|78|73|934.698.425.847.971.551.583|2002||172|1|76|18.26.35.55|
João Mendes (1994)|MED|127|67|631.847.27.292.214.908.486|1994||175||||
Henrique Pereira|AVA|127|65|200.776.214.349|2002||178||||E
Sidnei Tavares|MED|127|67|518.325.229.582.146.931|2001||188||||
Kévin Zohi|AVA|100|72|293.910.27.330.819.851|1996||177|1|39||D
Lawrence Ofori|MED|60|66|520.349.345.92.582.200|1998||181||||
João Goulart|DEF|127|63|547.200.812|2000||191|||47|
Christian Marques|DEF|127|67|120.943.847.1049.934|2003||188||143|18.35.39|
Ianis Stoica|AVA|132|71|339.676.562.863.314.295.1216|2002||180||||E
Matous Trmal|GR|32|70|803.908.554.573.840|1998||196||||
Hernán de la Fuente|DEF|4|73|917.345.107.427.439|1997||178||||
Madson|AVA|16|74|111.360.627.295.582.317.234|1999||164|||55|E
Patrick William|DEF|16|64|202.903.345.292.732.498.173|1997||185||||
Oday Dabbagh|AVA|120|74|92.702.26|1998||179|59|83||
Musa Juwara|AVA|148|76|218.154.149.241.626.893.685|2001||170|6|||D
André Clóvis|AVA|16|65|690.292.28.397.443.520|1997||186||||
Pedro Brazão|MED|127|73|612.509.345.151.545|2002||176||||D
Junior Kadile|AVA|58|66|345.731.819.71.786.521|2002||180|1|||E
Mohanad Ali|AVA|77|66|39.690.90|2000||183|73|||
Gabriel Poveda|AVA|16|63|396.74.102.462.903.730.1080|1998||183||||
Naïs Djouahra|AVA|58|71|725.188.404.186.92|1999||171||||E
José Fontán|DEF|54|74|203.387.307.92|2000||183|||43|
Antoñín|AVA|54|74|105.586.390.719.908.83.187.384.493.430|2000||179||||
Zé Carlos (1998)|DEF|127|67|765.520.163.380.732|1998||177||||
Yanis Hamache|DEF|5|71|727.612.149.749.92.324|1999||177|1|58|28|
Bruno Rodrigues (2001)|DEF|127|65|163.478.214|2001||192||||
Luan Patrick|DEF|16|72|102.78.704.416.295|2002||190||||
Capita|AVA|3|72|860.585.295.714.476.530|2002||171|3|||E
Alaa Bellaarouch|GR|102|64|293.163.308|2002||188|5|||
Rodri Alonso|MED|54|67|67.582|2003||172||||
Diogo Prioste|MED|127|75|140|2004||179|||31.38|
Silas Andersen|MED|43|71|882.429.812|2004||190|||41|
Matchoi Djaló|MED|127|72|668.131.931.597|2003||175||70||
Igor Formiga|DEF|16|63|689.234.242.690.462.570.395|1999||177|||55|
Abraham Marcus|AVA|115|70|349.690.714.325.295|2000||178|2||52|D
Léo Bolgado|DEF|16|66|27.74.520.200.191.326|1998||190||||
Fábio Ronaldo|AVA|127|65|732.295.584|2001||178||||D
Elias Manoel|AVA|16|71|395.608.766.159.776.226|2001||176||||D
Matheus Dias|MED|16|70|443.597|2002||189||||
Andrian Kraev|MED|17|71|525.200.986|1999||191|22|||
Pedro Santos (2003)|AVA|127|70|582.345|2003||178||||D
Nuno Lima|DEF|127|65|668.350.65|2001||184||||
Pedro Bondo|DEF|3|70|345|2004||183|13|||
Tom Lacoux|MED|58|71|156.345.403.1074|2002||182||||
Ronald|AVA|16|63|86.396.295.830.111|2001||177||||D
Paulo Victor (2001)|DEF|16|65|159.443.892.202.346.776.701|2001||180||||
Vasconcelos|MED|127|65|163.776|2005||180||||
Zé Carlos (2001)|MED|127|69|891.908.346.380|2001||172||||
Diogo Bezerra|AVA|16|62|624.732.353|2002||186||16||D
Matija Mitrović|MED|145|67|945.908|2004||178||||
Kaique Pereira|GR|16|69|653.346.597.812|2003||190|||9.41|
Jalen Blesa|AVA|54|65|877.209.732.1187|2001||187||54||
Tony Strata|DEF|132|71|4.908|2004||177|2|58||
Afonso Patrão|AVA|127|69|163.473.651|2007||182||||
Gonçalo Oliveira|DEF|127|65|140.731|2006||183|||31|
Markus Berger|DEF|165|73|761.27.220.432.880.380.847.1093|1985||186|||12|
Manuel José|MED|127|75|325.908.27.909.149.191.668.520|1981||176|3||7.31.41.46.58.59|
Márcio Abreu|AVA|127|73|554.494.850|1980||169||||D
Gonçalo Brandão|DEF|127|74|120.213.794.663.209.191.137.292.509|1986||182|2||20.21.30|
Ricardo Fernandes|DEF|127|71|765.582.597.326.732.1360|1978||187|1|||
Luís Filipe|DEF|127|74|27.104.163.812.519.554.140.908.629|1979||182|3||7.25.28.30.52|
Christian Kinkela|AVA|129|71|727.819.855.875.75.662.866.4.193.582.502.511.1275.759|1982||175|25|||D
Milhazes|DEF|127|66|891.149.732.908.214.623.522|1981||182||||
Pedro Moreira (1983)|DEF|127|63|669.136|1983||177|||34|
Nuno Piloto|MED|127|69|27.448.629|1982||177|||52|
Artur|MED|127|70|136.220.554.92|1984||175|||34|
Tiago Valente|DEF|127|71|668.265.515.669.909.891|1985||186|||41|
China (1982)|DEF|127|71|604.120.563.812.904|1982||171||||
Diego|GR|16|72|462.102.358.520.909|1979||188||||
Pedro Botelho|MED|16|81|93.203.307.719.523.102.112.292.149.192.280|1989||186|||15|
Ladji Keita|AVA|135|71|74.732.113.909.163.122.597|1983||188|||34|
Filipe Gonçalves|MED|127|70|163.520.909.668.860.582.292.597.631.800|1984||185|||28.38|
Semedo (1985)|MED|127|74|812.200.349.196.213.789.909|1985||183|||32.40|
Peçanha|GR|16|72|357.668.554.326.676.335.349.28.27.1012|1980||173||||
Ronny|AVA|16|72|79.240.338.668.755.136.191.732|1983||183|||34.39|
Robert Ahman-Persson|MED|142|74|14.900.550.137.120.798.1059|1987||186||||
Hélder Guedes|AVA|127|66|669.668.732.909.214|1987||184||||
Vítor Gomes|MED|127|72|732.196.348.582.123.137.265.633.120|1987||181|||39|
Bédi Buval|AVA|58|73|155.727.716.656.515.349.402.27.893.668.629.658|1986||188|1|||
Mourtala Diakité|MED|100|72|136.149.308.120.554.137|1980||188|4|||
Said Ahmed Said|AVA|84|74|440.378.580.629.405.732.469.304.657.876.987|1993||180||60||
Cássio|GR|16|72|892.668.163.92.732.61.350|1980||186|||41.46|
Kayke Rodrigues|AVA|16|78|357.903.861.429.23.659.111.597.940.777.211.279.355.358.389.700.811|1988||182||||
Giorgi Makaridze|GR|61|75|512.349.582.909.732.554.72.1016.688.748|1990||193|17|||
Aarón Ñíguez|AVA|54|78|888.448.717.203.72.283.163.189.978.586.723|1989||170|||41|D
Hugo Ventura|GR|127|72|325.629.690.812.732.120.137|1988||186|||7.12.28.39.52.55.59|
Thiago Carleto|DEF|16|74|777.888.283.834.78.358.689.159.92.46.102.202.235.280.1015.903|1989||172||||
Pedro Moreira (1989)|MED|127|74|149.325.380.690.732.314.92|1989||182|||7.12.28.35.41.55.59|
Wíres|MED|16|63|732.86|1982||176|||39|
João Diogo|DEF|127|71|554.120.137.335.27.292.1064.1066|1988||175||||
Bruno Wilson|DEF|127|71|847.163.189.910.756|1996||192|2||41|
Bruno Gallo|MED|16|72|892.520.909.554.214.1011.700|1988||182||||
Lionn|DEF|16|70|851.908.629.732.191.214.345.860|1989||182|||39|
Ramón Cardozo|AVA|122|70|669.909.597.598.582.438.1005|1986||190|1|||
José Luis Fernández|AVA|4|73|710.140.296.629.388.738.107.206.254|1987||168|1||30.52|E
Eñaut Zubikarai|GR|54|74|753.725.847.114|1984||185||||
Shuichi Gonda|GR|86|78|333.690.791.906.1092.1079|1989||188|38|||
Babanco|MED|23|71|92.629.292.349.214.519|1985||177|62||38.52|
Marcelo Toscano|AVA|16|73|570.667.509.659.908.355.903.78.457|1985||184|||46|
John Ogu|MED|115|72|519.27|1988||192|26||52|
André Claro|AVA|127|70|345.92.909.292.149.27.28.520.904|1991||183||||
Cristiano Figueiredo|GR|127|73|163.910.27.655.137.120.909.314.191.308.350.668|1990||192||2|28.41.52|
Adriano Facchini|GR|16|71|149.79.878.380.477.597.265.385.904|1983||187||||
Ulises Dávila|MED|111|80|219.907.215.246.189.909.778.544.922|1991||174|||12.31.43.58|
Fábio Espinho|MED|127|72|520.582.538.586.149.349|1985||171||||
Érick Moreno|AVA|33|70|671.567.163.655.886.847.631.965|1991||183|||32.41.52|
José Valencia|AVA|33|70|691.738.438.349.2.206.437.1196.634.671|1991||186||||
Rui Rêgo|GR|127|65|214.136|1980||176|||34|
Jeferson|DEF|16|62|732.159.349|1986||189||||
Edgar Costa|AVA|127|68|878.597.582.554|1987||180||||D
Gus Ledes|MED|127|74|732.13.981|1992||173|||39|
Márcio Rosário|DEF|16|71|462.79.47.159.358.621.554|1983||187||||
Betinho|AVA|127|72|812.909.164.120.137.878|1993||179|||28.34.38|
Ricardo Ferreira (1992)|DEF|25|76|7.285.629.668.163.120.346|1992||190|2||9.25.32.41.48|
Marko Petkovic|DEF|145|74|624.294.809.847.343.713.1034|1992||185|4|||
Luís Carlos|AVA|16|70|380.493.582.944.878.1257|1987||170||||E
Kosuke Nakamura|GR|86|78|483.119.690.208|1995||184|8|||
Esmaël Gonçalves|AVA|127|76|149.612.732.816.17.897.83.40.413.533.1364.1205|1991||184|1|70|39|D
Arsénio|AVA|127|70|120.137.582.92.42.195.519|1989||180||||E
Yusupha Njie|AVA|148|63|149.777.346.972|1994||188|6||28|
Dellatorre|AVA|16|73|443.325.102.698.17.111.235.570.1078.903|1992||182||||
Saleh Gomaa|MED|47|73|597.1182|1993||175|15|||
Jean Cleber|MED|16|65|554.79.202.446|1990||180||||
Anderson Conceição|DEF|16|73|777.240.355.549.111.279.78.678.214.1114.192.892|1989||188||||
Luís Martins|DEF|127|74|140.380.390.638.554.214.476.889|1992||176|||30|
Lucas|DEF|16|73|321.644.690.308.51.102.111.234.446|1992||193||||
Dener|MED|16|66|834.667.396.79.690.730|1992||187||||
Wilmar Jordán Gil|AVA|33|72|195.214.1364.286.345.693.1137|1990||179||||
Aleksandar Palocevic|MED|145|67|624.911.92.597.686.327|1993||180|1|89||
Luís Silva|MED|127|69|520.163.380.214.597.137.891.904.21.28.120|1992||184|||28.41.52|
Gonçalo Silva|DEF|127|63|163.120.137.714.346.908|1991||186|||46|
Víctor García|DEF|159|70|325.597.908.9.345.582.754|1994||175|8||32.35.39|
Gerso|AVA|70|69|27.292.582.137.476.457.434.120|1991||172|||38|E
Raphael Guzzo|MED|127|71|214.847.345.910.389.554|1995||177||16||
Francisco Ramos|MED|127|77|325.908.776.597.668.714|1995||181|||32.39|
João Schmidt|MED|16|77|834.909.100.732.599.485.777|1993||184||||
Victor Andrade|AVA|16|75|777.140.908.292.1.1338.211.353.389.462.689.693.730.829.903|1995||171|||7.46.52|E
Ricardo Alves|MED|127|71|120.690.326.636.468.1320.1043|1993||184||||
Maxime Dominguez|MED|143|72|786.338.509.606.715.380.892.849.237.554|1996||166||||
Fran Varela|DEF|54|74|143.142.120.1177.723|1994||174||||
Bruno Mendes|AVA|16|72|396.159.102.908.119.208.903|1994||184|||52|
Lucas Souza|MED|16|71|659.629.663.582.847.17.1182.48.122|1990||186||||
Amir Abedzadeh|GR|80|76|554.688.981.1116.963|1993||186|11||20|
Eugeni|MED|54|72|384.67.754.92.1177.245.1039.1032.779|1994||182||||
Carlinhos|MED|16|73|524.451.443.332.292.822.396.909.892.690.1170.1356.700|1994||179||||
Dankler|DEF|16|73|280.159.292.909.36.208.521.903.906|1992||188||||
Hugo Basto|DEF|127|66|891.92.214.292.520.860|1993||188||||
Leandrinho|MED|16|74|777.732.909.547|1993||178||||
Erdal Rakip|MED|142|76|550.140.243.84.1059|1996||179|2||18.46|
Renato Augusto|MED|16|72|653.582.689.355.791|1992||185||||
Fahd Moufi|DEF|102|73|541.193.847.690.405.636.124.957|1996||175||58||
Artur Jorge|DEF|127|71|363.163.585.339.909.17.582.346|1994||186|||9.32|
Claude Gonçalves|MED|127|73|4.847.862.380.538.517.593|1994||173||58||
Seung-woo Lee|AVA|37|78|127.416.797.690.829.458|1998||170|12||40|E
Raphael Silva|DEF|16|63|149.1182.240.389.689|1992||190||||
Ivan Zlobin|GR|134|74|140.345|1997||191|||18|
Samuel Portugal|GR|16|73|235.86.690.325.53.380.693|1994||188|||52|
Vinícius|GR|16|74|653.689.192.690.360|1994||194|||9.50|
Ibrahim Blati Touré|MED|18|72|950.1152.36.246.633.908|1994||185|46|39||
Ricardo Valente|AVA|127|70|349.520.908.668.554.847.445.1360.1064|1991||181|||52|
Koki Anzai|DEF|86|77|844.482.690|1995||172|5|||
Matheus Savio|MED|16|75|357.292.483.881|1997||172||||D
Iago Santos|DEF|16|63|27.582.60.61|1992||188|||55|
Gustavo|AVA|16|77|597.234.240.279.360.389.443.458|1994||189||||
Rafael Assis|MED|16|72|163.214.668.42.50.136.242.279.355.446.537.860.891|1990||170|||9|
Philipe Sampaio|DEF|16|73|777.667.149.34.349.847.398.159.708.111|1994||191|||18|
Fernando Fonseca|DEF|127|77|325.292.380.668.21.520|1997||182|||39|
Murilo (1994)|AVA|16|74|159.462.597.163.813.549.380.498.443|1994||176|||9|D
Joel Soñora|MED|45|75|554.95.125.182.228.317.427.435.917|1996||177||||
Nuno Tomás|DEF|127|69|137.120.28.195.724.748|1995||184||||
Gustavo Dulanto|DEF|125|71|149|1995||194||||
Nico Mantl|GR|2|72|767.23.900.92.148.318.489|2000||193||||
Jean|MED|16|75|554.159.202.234.280.380.395.462.659.892|1994||178||||
Hélder Ferreira|AVA|127|75|908.668.83|1997||179|||32|D
Andrezinho|MED|127|69|668.292.519.808.860|1995||174|||41|
Ryoya Ogawa|DEF|86|75|333.908.797.482|1996||182|5|||
João Gamboa|MED|127|72|891.163.554.214.292.625.685.458|1996||187|||32.41|
Guilherme Schettine|AVA|16|72|397.693.776.163.72.910.391.880.582.102.1137|1995||180||||
Paulo Moreira|MED|127|63|891.350.295.345|2000||181||||
Allano|AVA|16|74|159.242.292.176.776.240.279.389|1995||177||||E
Leandro Antunes|AVA|127|70|904.519.349.58|1997||183||127||D
Kobamelo Kodisang|AVA|164|63|582.21.163|1999||169|1|164||D
Úmaro Embaló|AVA|127|75|362.307.732.908|2001||170||70||D
Weverson|DEF|16|67|704.92.360.380.834|2000||185||||
Lucão (2001)|GR|16|73|892.704.380|2001||190||||
João Queirós|DEF|127|72|214.547.349|1998||192||||
Rodrigo Conceição|DEF|127|62|582.325.338.847.454|2000||175|||52|D
André Vidigal|AVA|127|70|362.554.17.27.74.292.825.936|1998||176|1|||E
Afonso Freitas|DEF|127|67|908.597.554.350|2000||181||||
João Silva (1999)|DEF|127|69|591.470.811.847.66.636.812|1999||189|||47|
Antoine Baroan|AVA|58|71|210.337.538.326.21|2000||188||||
Antoine Leautey|AVA|58|68|380.75.210.820.866|1996||172||||D
Rúben Ismael|MED|127|63|582.350.547.597.280|1999||190||||
Dani Figueira|GR|127|66|292.520.380|1998||189||||
Issah Abass|AVA|60|74|548.882.334.404.214.456.713.1043|1998||173||||E
Juan Manuel Boselli|AVA|157|71|255.102.78.847.380.661.494|1999||174||||
Pedro Ganchas|DEF|127|69|668.796|2000||190||||
Noah Holm|AVA|116|73|908.739.820.757|2001||186||43||
Patrick|MED|16|71|776.120.240.395|1998||176||||
Quaresma|DEF|16|65|537.92|1996||181||||
Paulinho Paula|MED|16|68|149.60.42.892.443|1997||173||||
André Luis|AVA|16|71|149.355.214.582.755.570.159.395|1994||184||||
Fábio Gomes|AVA|16|64|627.68.608.112.892.668.462.832.555.1080|1997||173|||50|
Nelson Abbey|DEF|76|70|720.632.830.732|2003||187||||
Yassin Oukili|MED|102|73|907.707.200.362|2001||175||124||
Pedrão|DEF|16|72|653.78.102.597.690.545|1997||193|||9.50|
André Duarte|DEF|127|65|74.295.728.594.339.292.1074|1997||195||||
Junior Brandão|AVA|16|64|732.111.192.353.389.396.538.1232.963|1995||187||||
Espen van Ee|MED|124|71|414.92|2003||183||||
Sam McCallum|DEF|76|72|236.616.698.790|2000||177||||
Benji Michel|AVA|45|71|637.92.766.873.1017.1071|1997||177||||E
Vaclav Sejk|AVA|32|71|806.840.453.735.944.345.414.795|2002||180|2|||
Bruno Langa|DEF|110|74|909.214.72.651.295.699|1997||169|38|||
João Veloso|MED|127|65|140.582|2005||185||127|18.31.38|
Ángel Algobia|MED|54|69|379.523.21|1999||180||||
Maranhão|AVA|16|62|811.353.355.847|1999||172||16||D
Lucas Barros|DEF|16|72|159.748.380.847.911|1999||180||||
Pedro Santos (2000)|MED|127|63|163.92|2000||183||||
Kewin|GR|16|67|704.570.582.251|1995||189||||
Gabriel Brás|DEF|127|67|325.589|2004||186||||
Ulisses|DEF|16|67|892.903.597|1999||183||||
Sam Silvera|AVA|8|74|205.668.200.610.565.692.147.543|2000||173|8|76||E
Nilton|DEF|127|73|120.295.135.554|2001||182|2|||D
Lucas Soares|DEF|16|64|74.908.200.776|1998||174||||
Gui Guedes|MED|127|71|908.72.187|2002||185||||
Loide Augusto|AVA|3|72|346.547.65.892.180|2000||185|6|||D
Roméo Beney|AVA|143|67|132.345|2005||187||||E
Derik Lacerda|AVA|16|70|27.582.688.811.124.485|1999||190||||
Silvano Vos|MED|124|73|32.7|2005||189|||41.52|
Alfonso Trezza|AVA|157|67|598.92|1999||166||||D
Rafael Fernandes|DEF|127|69|92.530.717.554|2002||191||||
Simon Elisor|AVA|58|70|316.4.706.819.323.862.345.877|1999||185||||
Adriel|GR|16|63|395.21.279.851|2001||195||16||
Gilberto Batista|DEF|70|67|582|2003||185|2|||
Tamble|AVA|70|63|350.690.732|2000||191|8|127||
Nuno Félix|MED|127|67|140|2004||182|||31.38|
Gonçalo Ribeiro|GR|127|73|325|2006||187||||
Kiko (2002)|DEF|127|67|582|2002||180||127||
Ageu|MED|16|63|242.776.120.74.413|2002||181||||
Francisco Petrasso|DEF|4|63|435.732|2002||191||4||
Djibril Soumaré|MED|135|69|597.163.790.825|2003||185||||
Adriano|AVA|16|63|520.715|2002||175||||D
Gonçalo Sousa|AVA|127|67|325.490|2006||186||127||D
Marcos Peña|MED|54|63|72.345.1032|2005||180||||
Gustavo Mancha|DEF|16|67|360.632.732|2004||190||16||
João Afonso (2007)|GR|127|62|776.325|2007||187||127||
Rafael Lobato|AVA|16|62|159.732|2006||170||16||D
Miguel Nogueira|AVA|127|63|908|2005||182||127||D
Johnny Leoni|GR|143|79|329.338.633.554|1984||189|1|||
Pedro Costa|DEF|127|70|149.345.163.27.92|1981||166|||12.28|
Briguel|DEF|127|71|554|1979||174||||
Pape Sow|MED|135|72|330.502.519.27.654.282.732.113.1022|1985||180||||
Vasco Faísca|DEF|127|72|812.440.27.120.650.97.682.1226|1980||184|||7.30|
Luís Manuel|MED|127|64|520.597.910.380.519.265|1981||182||||
Rui Duarte|MED|127|69|629.120.604.520.295.346|1978||175|||52|
Miguel Pedro|MED|127|70|765.265.27.83.349.909.363|1983||176||||
William Kwabena Tiero|MED|60|72|908.604.27.195.629.55.380|1980||174|9||12|
Hélder Cabral|DEF|127|72|908.582.295.893.27.17.909.633.629|1984||180|||12.30|
João Real|DEF|127|64|748.604.27|1983||185|||52|
David Caiado|AVA|127|72|812.292.860.944.908.751.561.688.314.339.669.27.1064.988|1987||176||94|40.46|D
João Vilela|MED|127|71|140.380.120.137.519.1107|1985||178||||
Marcelo Oliveira|DEF|16|73|234.395.113.17.582.776|1981||185||||
Serge N'Gal|AVA|24|71|818.519.384.27.1022|1986||173||||D
Nuno Pinto|DEF|127|72|149.860.597.525.751.909.1214|1986||176||||
Mano|DEF|127|70|120.522.292.909|1987||168|||30.38|
Ney Santos|DEF|16|71|79.295.163.909.102.235.279.280.811|1981||181||||
Diego Barcelos|MED|16|73|443.777.355.811.597.1321.891|1985||173||||
Marcel Correia|DEF|127|73|0.278.451.750|1989||186||2||
Luciano Amaral|DEF|16|69|240.279.192.908.79.235.554.87.380|1982||181||||
Emídio Rafael|DEF|127|73|812.200.724.690.27.325.163.682.292|1986||182|||7.12.32.40.55.59|
Rafael Defendi|GR|16|64|265.86.570.704.668.345.346.357|1983||191|||41|
Kermit Erasmus|AVA|164|74|354.300.731.909.1152.1359.521|1990||167|15|||D
Rodrigo Antônio|MED|16|68|892.554.446.120.668.629.748|1987||181|||41|
Ytalo|AVA|16|76|554.443.667.397.102.834.192.279.353.704.730|1988||177||||
Edimar|DEF|16|75|242.396.446.163.191.937.732.218.246.834.704.892.192|1986||180|||30.39|
Ozéia|DEF|16|73|235.450.668.395.240.909.45|1982||191|||46|
Theo Weeks|MED|92|70|639.82.180.402.554|1990||180|25|||
Nathan Júnior|AVA|16|74|758.847.28.41.1168.1073.668|1989||184||||
Daniel Heuer Fernandes|GR|2|76|898.899.750.408|1992||188||||
Ricardo Dias|MED|127|71|325.776.136.137.120.349.27.21.74.904|1991||189|||7.12.59|
Adilson (1982)|AVA|16|64|554.1338.202.292.349.629|1982||192|||38|
Manassé Enza-Yamissi|DEF|130|71|15.622.330.75.676.380.868|1989||190|19|||
Rodney Wallace|AVA|38|77|247.691.92.811.609.476|1988||180|31|||D
Héctor Quiñónes|DEF|33|72|325.668.183.260.459.567.669|1992||178|||7.35.41.55|
Aníbal Capela|DEF|127|69|163.910.748.582.27.732.199.859|1991||181|||28.32.34.52|
Tiago Ferreira|DEF|127|71|949.878.877.519.668.860|1993||176||||
Maciej Makuszewski|AVA|126|74|454.34.515.909.514|1989||176|5|||E
André Geraldes|DEF|127|73|214.732.265.131.120.137.812.909.813.542.17.200|1991||181|||30.32.38.41|
Nildo Petrolina|MED|16|70|860.136.348.92.582.265.61.520|1986||170||||E
Manoel|AVA|16|63|306.669.86.27.280|1989||185|||52|
Gegé|DEF|23|69|295.860.748.554.92.668.42|1988||184|33|||
Rafa Lopes|AVA|127|70|891.909.582.669.27.214.149.13.83.237.517.633|1991||185||||
Tiago Lopes|DEF|127|71|847.860.748.191.486.257|1989||178||||
Nii Plange|AVA|18|68|20.812.908.27.597|1989||175|3|60|28.46|E
Filipe Ferreira|DEF|127|66|120.137.668.827.597.847.149|1990||178|||28|
Daniel Giraldo|MED|33|71|260.629.261.437.567.459.462|1992||178|1|||
Giorgi Aburjania|MED|61|74|83.384.187.334.723.307.380.411.21.1168|1995||187|39|||
Bas Kuipers|DEF|124|74|32.300.10.335.589.387.334.92.807|1994||180||||
Minhoca|MED|127|63|776.668.851.891|1988||175|||41|
Lazar Rosic|DEF|145|72|712.713.911.163.597.582.11.21|1993||190|||9.32|
Charalampos Kyriakou|MED|31|72|87.292.308.13|1995||180|79|||
Baptiste Aloé|DEF|58|73|553.885.135.92.308.19|1994||183|||17|
Rui Moreira|MED|127|65|325.307.988.891|1996||172||||
Rafael Barbosa|MED|127|73|878.690.668.292.847.346.714.21.520|1996||170||||
Pedro Miguel|DEF|26|78|346.59.964|1990||188|112|127|20.35.37|
Luís Rocha|DEF|127|72|908.655.517.237.488.847|1993||174|||46.52|
Wallyson|MED|16|71|812.612.582.822.909.292.520|1994||183|||30.32.38|
Rui Correia|DEF|16|63|690.597.668.120.295|1990||188||127||
Shihao Wei|AVA|30|75|149.349.520.122.1321|1995||177|47|||E
Deni Júnior|AVA|16|66|358.726.668.847.345.1182.112.280.396.834.903|1995||185||||
Easah Suliman|DEF|76|73|216.310.908.99.1130.597.904|1998||188|13|||
Stéphane Sparagna|DEF|58|76|553.15.149.904.727|1995||186|||17|
Felipe Macedo|DEF|16|69|389.690.669.748|1994||187||||
Sessi D'Almeida|MED|12|77|156.647.847.87.129.147.666.885.939|1995||177|52|58||
Branimir Kalaica|DEF|40|76|140.592|1998||192|||7.18.30.46|
André Moreira|GR|127|74|582.110.878.137.163.99.349.120.391.56.912.191|1995||192|||51|
Rui Pedro (1998)|AVA|127|75|325.149.891.726.520.669.411.1043|1998||182|||39.52|D
Dinis Almeida|DEF|127|73|137.937.744.538.120.195.587|1995||190|||34|
Ivanildo Fernandes|DEF|23|73|582.856.180.72.910.597.980|1996||194|2|127||
Iago Maidana|DEF|16|74|240.834.78.112.380.659.811|1996||195||||
Léo Natel|AVA|16|74|200.17.234.360.395.557.651.834|1997||179|||55|E
Walter González|AVA|122|70|92.776.1089.527.1006.1015.649|1995||175||||
Takuma Nishimura|AVA|86|79|194.690.940.786.546.1276|1996||178|5|||D
Hamdou Elhouni|AVA|95|74|776.214.265.36.140.1095.909.957|1994||172|35||46.55|E
Bruno Almeida|AVA|127|64|860.776.346.292|1996||172||||D
Thomas Rodríguez|MED|29|71|125.378.909.864.174.1061.1343|1996||185||||D
Alex Pinto|DEF|127|70|908.380.346.92.1019|1998||187||||
Kennedy Boateng|DEF|149|72|501.761.776.308.41.1140|1996||191|16|60||
Naoufel Khacef|DEF|5|64|847.374.156|1997||179|9|||
Sandro Cruz|DEF|3|69|140.214.380.1175|2001||187|7|127||
Paulinho Bóia|AVA|16|76|834.690.462.559.78.498.570.597.561.928|1998||171||||E
Léo Cordeiro|MED|16|69|380.904.547.295.880|1995||178||||
Rafa Rodrigues|DEF|127|67|21.37|2002||174||||
Owen Beck|DEF|123|71|345.155.272.532.146.263|2002||177|||13.33|
Kelian Nsona|AVA|58|72|759.418.310.200.736|2002||189||||E
Daniel Mantilla|AVA|33|63|27.441.106.260.605.567.534|1996||173||||E
Enzo Martínez|DEF|157|72|677.847.917.701.649.255.382.1062|1998||183||||
Loreintz Rosier|MED|58|70|292.362.44.955.330.662|1998||190||||
Felippe Cardoso|AVA|16|71|689.777.202.358.200.34.50.1276.976|1998||187|||28|
Zié Ouattara|DEF|39|71|908.690.519.714|2000||176||||
Nikolaos Athanasiou|DEF|63|65|113.632.732.623|2001||177||||
Gerson Sousa|AVA|127|67|295.488.140|2002||178|||18|D
Simão Rocha|DEF|127|64|668.724.851.191|2000||186||||
Hevertton|DEF|16|64|295.698.908.380.525|2001||182||||
Otso Liimatta|MED|57|71|345.914.406.798|2004||169||||
Jorge Meireles|AVA|127|67|295.21|2004||180||||E
Daniel Jr|MED|16|71|242.34.280.78.693.597|2002||177||||
Xander Severina|AVA|42|71|10.665.545.200|2001||185|5|124||D
Tiago Almeida|DEF|127|65|847.214|2001||177||||
N'Dri Koffi|AVA|39|65|819.820.668.330.512|2002||183||||D
Rildo|MED|16|65|279.395.776.690.462.389.693.525|2000||178||||D
Rémy Vita|DEF|34|73|862.129.362.75.847|2001||170|6|58||
Benchimol|AVA|23|76|292.35|2001||187|26|||
Houssem Mrezigue|MED|5|70|910.267|2000||185|12|||
Diego Callai|GR|16|64|349.812|2004||192|||41.47|
Alan Núñez|DEF|122|72|597.89|2004||176||||
Paulo Vitor|DEF|16|65|597.35.908.21.54|2001||190||||
Brian Mansilla (2002)|AVA|157|69|677.255.92|2002||176||||E
André Vilas Boas|MED|127|71|732.325.554.690|1983||185|||31.39|
Paulo Sérgio|MED|127|74|812.27.120.295.265.690.629.908.92.1266|1984||165|2||25.32.40.46|D
Rodrigo Defendi|DEF|16|76|853.871.737.118.653.659.908.159.280.593.265.1334.292|1986||188|||46|
Pedro Taborda|GR|127|70|363.325.910.604.748.582|1978||190|||7|
Bruno Veríssimo|GR|127|66|629|1976||173|0|127||
Ricardo Batista|GR|3|75|367.543.936.812.629.597.909.200.1064|1986||185||127|40|
Cris|MED|127|68|349.27.98|1984||178|||12|
Ivanildo|AVA|70|71|325.519.27.380.690.629|1986||175|16||7.28.52|D
Vítor Vinha|DEF|127|67|27.295.265.629.380.136.345|1986||181|||52|
Olberdam|MED|16|70|554.163.102.326|1985||182||||
Ricardo Pateiro|MED|127|68|851.597.519.732|1980||178|||39|
Pintassilgo|MED|127|70|908.582.92.350.1110.690.748.891|1985||168||||
Halisson|DEF|16|66|777.693.380.627.1338.446.903|1985||189||||
Christian Pouga|AVA|24|72|338.520.554.625.639.529.149.1028.1170|1986||193||||
André Schembri|AVA|101|75|278.352.656.633.149.87.1364|1986||178|94|||
Vinicius|MED|16|71|597.878.265.629.163.582.17.988|1986||186|||32.34|
Dejan Mezga|MED|40|70|593.405.87.597.595|1985||175||||
Celestino|MED|127|74|812.292.295.120.191.629.335|1987||177||23|40|
Rene Mihelic|MED|53|74|593.597.525.1364|1988||177|3|||
Diogo Cunha|MED|127|63|629.349.582.214.345|1986||170||||
Rui Sampaio|MED|127|70|214.669.136.196.629.92.727.27.363|1987||186|||34.52|
Tozé Marreco|AVA|127|71|645.66.786.265.878.604.136.847.629.585.214.27.345|1987||183||||
Zequinha|AVA|127|69|909.658.92.597.11.1327.120.380.629.669|1987||183||||D
Vladan Giljen|GR|109|67|597.624|1989||187||||
Diogo Rosado|MED|127|71|812.724.669.349.146.909.5.668.335.1064.765|1990||185|||40.41|
João Gonçalves (1988)|DEF|127|72|812.629.908|1988||180|||28.40.46.52|
Tiago Terroso|MED|127|64|732.891.519.220.629.909|1988||178||||
Paulo Tavares|MED|127|64|520.292.909|1985||179||||
Leandro Pimenta|MED|127|72|140.136.380.1360.363.748|1990||179|||7.30.34|
Zezinho|MED|16|71|462.777.279.102.211.597.111.202.659|1992||174||||E
Dejan Skolnik|MED|40|70|593.597.987|1989||181||53||
Jaime Simões|DEF|127|68|136.191.87.878.520.748|1989||188|||34|
Bolívia|AVA|15|75|102.353.355.397.604.792.582|1985||180|11|16||
Viktor Lundberg|AVA|142|73|14.716.554.1100.429.951|1991||183||||
Palmeira|DEF|127|66|163.295.910.847.120.137.200.724|1989||187|||30.32.34|
Alex Gonçalves|AVA|16|72|358.443.79.582.938.1338.1110.863|1990||182||||
Assis|GR|16|64|120.363.908.149.520|1989||187|||46.52|
Adama François|DEF|135|67|149.909.122.48.954|1989||194||||
Luisinho|AVA|127|64|28.149.27.847|1990||170||||D
Pedro Queirós|DEF|127|70|668.631.349.909.214.1214.292|1984||182|||46|
Nélson Pedroso|DEF|127|64|909.668.27.265.295.631.690|1985||180|||41|
Sebastian Mladen|DEF|132|68|737.335.629.655.474|1991||183|||36|
Sema Velázquez|DEF|159|74|905.654.92.74.1311.519.598.975.776.1300|1990||184|29|||
Mika (1987)|DEF|127|64|349.92.363.860|1987||180||58||
Khalil Chemmam|DEF|151|73|908.1095|1987||180|26||46|
Freire|DEF|16|73|667.811.659.908.597.87.214.791.792.883|1989||187|||46|
Fidelis|AVA|16|71|554.669.690|1989||185||||
Zé Manuel|AVA|127|71|163.910.149.325.909.930.349.776.732.597.631.1064.891|1990||178|||30.39.52|D
Elizeu|MED|16|71|811.159.570.597.292.280.689.443|1989||183|||38|
Afonso Taira|MED|127|70|246.292.314.120.200.955.49.50|1992||177||||
Renato Santos|AVA|127|71|732.582.265.847.149.912.586.988.851|1991||175|||39|D
Siaka Bamba|MED|39|64|214.349.908|1989||178|||34.46|
João Silva (1990)|AVA|127|76|265.299.519.909.525.128.652.668.118.764.349.295.445.350|1990||189||||
Ricardo Nascimento|DEF|16|71|653.669.690.582.27.1214|1987||191||||
Rafaël Dias|MED|127|70|330.5.867|1991||180||||
Nwankwo Obiora|MED|115|73|722.440.663.650.191.246.27.522.149.214.1123|1991||186|8||43|
Marco Baixinho|DEF|127|64|547.668.27.83.519|1989||186||||
Kadú|GR|3|74|325.891.74.631.860|1994||190|3||41.55|
Buatu|DEF|3|73|822.377.367.919.732.585.265.797.301.885.380|1993||187|57|20||
Jason Davidson|DEF|8|74|668.748.417.924.425.312.404.672.873.556.466.657.1043|1991||180|23||46|
Semedo (1988)|MED|23|68|690.554.629.380.349.87.520.748|1988||184|6|127||
Edder Farías|AVA|159|64|878.459.634.1037|1988||184|9|||
Rafael Crivellaro|MED|16|70|397.908.860.930.92.349.1364|1989||183|||46|
Peter Suswam|DEF|115|64|909|1991||185|2|||
Adilson Goiano|MED|16|65|92.79.240.395.689.903|1988||180||||
Marwan Mohsen|AVA|47|77|380|1989||188|35|||
Frédéric Mendy|AVA|58|70|292.582.878.909.457.873|1988||192|24||38|
Renê Santos|DEF|16|74|395.485.554.56.111.1016.280.396.659|1992||184||||
Bruno Lopes|AVA|16|73|355.78.903.86.68.292.353.1232.1078.659|1986||167|||38|
Quentin Beunardeau|GR|58|71|512.19.323.265.380.1346.520.727|1994||185||||
Leandro Barrera|AVA|4|71|756.554.1139.89.547.773|1991||179||||E
Abel Camará|AVA|70|72|120.295.136.676.137.547.1182.238.282.349.651|1990||186|5|||
Rafael Costa|MED|16|73|582.149.140.240.251.396.397.659|1991||183|||30|
André Micael|DEF|127|71|582.629.668.1182.1064.891.1257|1989||187|||52|
Miguel Lourenço|DEF|127|66|909.200.776.547.878|1992||186||||
Kuca|AVA|23|72|214.292.477.120.137.732.92.149.314.349.519|1989||181|19|||E
Mateus Silva|MED|16|67|668.192.396.570.597.689|1991||184||||
Brayan Beckeles|DEF|72|73|149.605.1076.1124.1312.603|1985||186|66|||
Alireza Haghighi|GR|80|79|745.748.669.554.1152.963|1988||193|25||20|
Caio Secco|GR|16|68|192.280.663.241.349.554.669.582.159.520.1030|1990||194||||
César|GR|16|72|357.689.353.279.149|1992||194|||30|
Mica Pinto|DEF|94|73|120.137.878.362.807.907.195.309|1993||176|43|||
Bruno Brígido|GR|16|72|240.235.396.349.295.28.78|1991||187||||
Cláudio Winck|DEF|16|72|443.416.211.811.892.554.484|1994||183||||
João Teixeira|MED|127|72|140.908.934.617.909.214.732.380|1994||178|||30.46.52|
Tomás Podstawski|MED|127|75|909.1033.668.685.1200.1053|1995||182||||
Leandro Silva|MED|127|71|27.668.92.519|1994||173||||
Franck Bambock|MED|58|73|754.807.246.554.393.348.655.1045|1995||181||24||
Éber Bessa|MED|16|65|579.242.554.909.597.74.1266.159|1992||168||||
Uche Nwofor|AVA|115|74|717.884.414.529.149|1991||184|9|||
Omri Altman|MED|83|72|367.542.654.92.13.912.986|1994||181|3|||
Ygor Nogueira|DEF|16|73|465.358.355.192.380.555.462.776.214.741|1995||187||||
André Sousa (1990)|MED|127|71|136.748.28.120.137.813.374.904.597|1990||181||||
Lucas Tagliapietra|DEF|16|67|409.149.690.503.669|1990||194||||
Fernando Ferreira|MED|127|70|200.724.28.847.120.137.554|1986||183||||
Joel Pereira (1996, RKC Waalwijk)|GR|127|66|552.137.909.413.707|1996||189|0|143|31.47.54|
Nino Galović|DEF|40|74|801.404.92.1079|1992||186||||
Vítor Gonçalves|MED|127|70|690.380.597.200.346.547|1992||174||||
Jander|DEF|16|68|462.629.380.582.87.265.294.651.937|1988||183|||52|
Arnold|AVA|129|68|214.909.759.346.748|1992||185|1|||D
Andreas Karo|DEF|31|72|87.651.510.764.554.17.623.314.1045|1996||190|28|||
Larry Azouni|MED|151|76|553.319.622.470.597.1182.1095|1994||175|10|58||
Talocha|DEF|127|63|345.910.149.113.380.346.847.891.631|1989||180||||
Alex Soares|MED|127|63|657.554.633.582.912.292.690|1991||179||||
Avto|AVA|61|65|631.380.597.214.28.83.1215.520|1991||178|3|||E
Gabriel Moura|DEF|16|71|669.380.83.785.308.78.1064|1988||170||||
Douglas Grolli|DEF|16|72|211.395.833.537.242.689.554.119.279.690|1989||190|||50|
Vaná Alves|GR|16|73|211.235.349.325.345.1222|1991||194|||7.52|
Jhonatan|GR|16|65|582.908.732.74|1991||189||||
Matheuzinho|MED|16|69|704.234.397.292.79.111.317.462.903|1993||171||||
Miguel Vieira|DEF|127|70|668.265.131.919.187.932|1990||190||||
Igor Julião|DEF|16|71|358.476.353.910.554|1994||175||||
Jonatan Lucca|MED|16|73|737.102.397.120.346.21.1250.1335.1053|1994||184||||
Pedro Pinto|DEF|127|68|909.92.349.520|1994||185||||
Cleyton|MED|16|64|27|1990||176|||52|
Adam Dzwigala|DEF|126|72|454.515.401.931.265.817|1995||185||||
Afonso Figueiredo|DEF|127|73|149.731.525.732.265.582.295.669|1993||170||||
Santiago Montoya|MED|33|71|892.908.2.1139.259.567.671|1991||173|1||52|D
Pecks|DEF|23|71|380.204.765|1993||192|4|||
Xavier|AVA|127|64|349.520.554.668.847.654.292.522.27.1033|1992||180||||E
Platiny|AVA|16|66|86.349.265.214.200.554.582.668|1990||178||||
Jordi|GR|16|72|892.668.395|1993||192||||
Perdigão|AVA|16|63|345.265.214.149.519|1991||185||||D
Uillian Correia|MED|16|65|668.349.202.242.192.235.280.353.627.704|1989||184|||41|
Xande Silva|AVA|127|74|908.925.90.108.266.986.448.617.815|1997||177|||32.52|D
Georgemy|GR|16|70|242.292.908.396.192.903.240.570.395|1995||198||||
Ji-su Park|DEF|37|63|434.829.381.690.458.1321|1994||184|16||40|
Welinton Junior|AVA|16|76|265.690.192.235.353.373.389.570.792|1993||178||||D
Crislan|AVA|16|73|102.621.163.847.173.791.792.1276|1992||186|||9.32.41|
Felipe Abner|DEF|16|75|235.292.102.346.708.869.1348|1996||171|||57|
Flávio Ramos|DEF|16|65|349.376.668.621|1994||191||||
Didi (1994)|MED|127|63|908.92|1994||177||||
Christian|MED|16|63|17.86.191.597.668.27.200.349|1989||181||||
Sandro Lima|AVA|16|66|86.732.28.214.292.380.376.399.670.111.74.1137|1990||186|||39|
André Ferreira|GR|127|71|520.265.776.668.390.886.582|1996||193||||
Pedro Pacheco|DEF|127|64|132.547.776.1289|1997||189||127||
Carraça|DEF|127|70|149.847.776.325.120.380.214|1993||177|||52|
Simãozinho|DEF|127|64|860.163.214.292.520.669.851|1995||180|||41|D
Danielzinho|MED|16|62|659.353.627.570.834.112.395|1994||166||||
Kuni|MED|86|74|200.119.458|1997||173||||
José Gomes|DEF|127|70|163.669.214.597|1996||185||||
Amine Oudrhiri|MED|102|70|727.600.5.193.520.346.732.295.851|1992||184||58||
Lucas Possignolo|DEF|16|70|690.834.976|1994||188||||
Diego Moreno|MED|33|64|286.554.436|1996||186||||
Brayan Riascos|AVA|33|73|234.860.704.345.631.597.559.391.48.554.374.561|1994||183||||
Rivaldinho|AVA|16|73|149.443.308.525.335.877.237|1995||186||||
Bruno Paz|MED|3|74|812.346.492.640.988|1998||182|10|127|32.47|
Nicolas Janvier|MED|58|74|731.908.65|1998||173||||
Óscar Barreto|AVA|33|67|732.776.441.567|1993||173||||D
João Virgínia|GR|127|79|93.299.720.812.747.934|1999||193|||11.38.43.47.55|
Erick Ferigra|DEF|49|74|848.97.507.668.11|1999||180|1|||
Patrick Andrade|MED|23|74|582.665.140.345.699.765|1993||190|29||30|
Bruno Santos|DEF|16|62|363.668.87.389|1993||183||||
Seydou Sy|GR|135|75|587.597|1995||192|||4.34|
Pedro Nuno|MED|127|72|27.140.847.582.120.30.493.640|1995||174|||46|
Ricardinho (1994)|DEF|127|70|380.676.1215|1994||179||||
Zé Gomes|AVA|127|72|140.690.515.191.863.220.977|1999||178||70|7.18.30.46|
Caju|DEF|16|75|777.17.163.389.808.1222|1995||185||||
Rafael Silva|AVA|16|72|693.380.450.892.242.396.1232|1990||182||||
Zakaria Naidji|AVA|5|64|380.819.999.666|1995||178|1|||
Marlos Moreno|AVA|33|80|106.262.551.386.357.778.690.536.470.862.492.189|1996||172|8||26|E
Ronie Carrillo|AVA|49|65|503.183.690.462.1338.1128.1038.1037|1996||188||||
Mateus Pasinato|GR|16|62|582.78.350.903|1992||192||||
Witi|AVA|110|73|597|1996||178|56|||E
Dénis Duarte|DEF|127|66|851.908.669.846|1994||190|||32|
João Lameira|MED|127|68|325.519.27.724.851.124.640.877|1999||175||||
Júnior Tavares|DEF|16|74|768.690.395.621.689.811.834|1996||178||||
Valeriy Bondarenko|DEF|153|72|324.788.908.913.491.94.1075|1994||194||||
Sergio Bermejo|MED|54|73|203.779.283.380|1997||170||||D
Maracás|DEF|16|70|280.79.627.668.582.959|1994||184||||
Wellington Carvalho|AVA|16|67|690.149.214.355.669|1992||182||||D
Kelechi Nwakali|MED|115|78|93.884.325.754.9.688.214.129|1998||181|4||15|
Kikas|AVA|127|67|120.904.547.519.295.466|1998||176||||
Lucas Taylor|DEF|16|70|653.240.659.646.292.749.642.788.687.1338|1995||177|||50|
Jadson|DEF|16|70|690.1340.892|1991||186||||
Till Cissokho|DEF|58|73|223.295.736.156.1017.1218|2000||200||||
Yann Kitala|AVA|129|72|319.330.511.71.910.335.541|1998||186||58||
Rodrigo Escoval|DEF|127|73|591.404.83.912.910.35|1997||187||||
Diogo Calila|DEF|110|72|120.776|1998||180|8|127||
Rui Pires|MED|127|75|668.862|1998||182||||
Aleksandar Busnic|MED|145|69|711.911.910|1997||191|1|||
Pedro Marques|AVA|127|69|309.380.812.345.589.87.1141.448|1998||181|||32.47|
Tashan Oakley-Boothe|MED|76|75|147.295.1057.983.825.853|2000||182|||31.42|
Mamadou Traoré|DEF|100|63|554.122.969.283.295.851.911|1994||191|4|||
Rafael Gava|MED|16|69|668.1338.389.443.537|1993||178||||
Jhon Velásquez|MED|33|63|437.534.346.361|1995||174||||
Romain Correia|DEF|127|71|325.430.554|1999||187||58||
Kevin Krygård|MED|116|66|412.200.531|2000||184||||
Lucas França|GR|16|72|242.597.202.396.776|1996||194|||50|
Hamidou Keyta|AVA|58|70|763.335.305.776.699.492.15.1216.511|1994||186||||E
Tianyu Guo|AVA|30|70|910|1999||192||||
Claudio Falcão|MED|16|65|265.346|1994||170||||
Daniel Fuzato|GR|16|76|653.737.380.379.753.892|1997||190|||31.41|
Benny (1997, Kifisia)|MED|127|66|520.860.668.214.748.904.21.582.488|1997||176|0|127||
Mehdi Merghem|AVA|58|71|502.398.19.346.746.273|1997||185|6|||D
Celton Biai|GR|127|70|908.309.300|2000||188|1|||
Pablo Moreno|AVA|54|65|554.181.386.460.551.1032|2002||178|||26|
Bobsin|MED|16|70|395.776.248.249|2000||182||||
Kyosuke Tagawa|AVA|86|78|333.776.413.482.1079|1999||182|2|||
Radivoj Bosic|AVA|145|66|294.665.597.808.455.713.343.973.1159.1043|2000||183||||E
Georgios Liavas|MED|63|70|655.732|2001||175||||
Rodrigo Fernandes|MED|127|73|812|2001||184|||47|
Tchamba|DEF|24|73|293.826.835.200.730|1998||191|5|||
Antef Tsoungui|DEF|20|70|536.354.309.625.292.166|2002||185|||13|
Reynaldo|DEF|16|65|582.235.242.280.389.462.689.730|1997||186||||
Nélson da Luz|AVA|3|63|908|1998||177|12|||E
Iván Barbero|AVA|54|73|638.72.9.262.92.181|1998||187||||
Samuel Obeng|AVA|60|71|723.754.200.67.957|1997||183||||
Gabrielzinho|AVA|16|65|102.732.582.62|1996||181||||E
Ricardo Matos|AVA|127|64|97.629.690.120.137.306.304.1118|2000||181||||
João Tomé|DEF|127|69|732|2003||185||||
Ivan Dolcek|AVA|40|71|801.405.345.273.1019.594|2000||181||||E
Francisco Meixedo|GR|127|71|325.295.349|2001||190|||7.52|
Diego Collado|AVA|54|65|905.380.978.754|2001||183||||E
Frederik Winther|DEF|43|72|540.115.172.292.410|2001||186||||
Tiago Esgaio|DEF|127|63|851.120.163.92|1995||175||||
Kiko Bondoso|AVA|127|67|910.542.732.582|1995||169||||E
Pablo Roberto|MED|16|64|903.730.200.111.279.360.462|1999||183||||
Tiago Manso|DEF|127|62|860.137.847|1999||174||127||
Jeremy Antonisse|AVA|42|77|648.310.582.488|2002||184|32|124||E
Dudu Teodora|AVA|16|70|358.689.597.555.811|1999||179||||
Samuel Teles|MED|127|64|349.640.877|1997||180||||
Matheus Teixeira|GR|16|70|279.240.732.1077|1999||188||||
Pedro Pelágio|MED|127|67|554.214.651|2000||179||||
João Paulo (1998)|MED|23|74|349.640.339|1998||176|46|||
Paulo Eduardo|DEF|16|64|776.74.242.395|2002||187||||
Matheus Bueno|MED|16|76|235.380.396.791.482|1998||178||||
Tamás Nikitscher|MED|73|70|886.732.997|1999||193|9|||
Kevin Villodres|AVA|54|69|380.105.246.586|2001||173||||E
Pedro Bicalho|MED|16|69|242.653.776.280.74.699|2001||179|||9|
Rhaldney|MED|16|64|621.111.402.74|1998||184||||
Fabio Blanco|AVA|54|70|554.908|2004||173||||E
Luquinha|MED|16|65|537.690.1338|2000||167||||
Vasco Moreira|MED|127|62|350.74|2001||180||127||
Vinicius Mingotti|AVA|16|72|102.570.279.582|2000||182||||
Jesús Castillo|MED|125|77|380.1299.1095|2001||185|16|||
Vladislav Morozov|AVA|14|71|92.668.1174|2000||188|16|||
Juan Castillo|GR|33|69|361.908|2003||190||||
Rodrigo Varanda|AVA|16|63|234.211.78.776.1270|2003||180|||55|D
Ricardinho (1998)|AVA|127|65|776.851.317.732|1998||178||||E
Yaw Ackah|MED|60|70|149.486.121.991|1999||169||||
Malik Abubakari|AVA|60|74|582.200.550.900.540.1360.1017.1175.851|2000||185||||
Daniel Rivas|DEF|122|71|598.21|2001||177||||
Jhonata Robert|AVA|16|69|345.240.242.395|1999||179||||D
Bernardo Folha|MED|127|71|325.959|2002||180|||52|
Cristian Devenish|DEF|33|71|149.106.732.21.323.910|2001||185||||
Samuel Justo|MED|127|69|200.346|2004||178||||
Jajá (2001)|AVA|16|72|192.242.102.850.200.651|2001||177||||E
David Sousa|DEF|16|71|159.207.708.200|2001||190|||18|
Pastor|DEF|16|67|537.353.520.690.346.195|2000||176||||
Wallisson|MED|16|63|689.242.582.78.235.570|1997||184||||
André Lacximicant|AVA|127|65|200.292.520|2001||190||||E
Roberto Hinojosa|AVA|33|63|690|1999||170||||D
Stênio|AVA|16|62|242.21.480.78.575.848|2003||182|||50|D
Renato Júnior|AVA|16|71|690.389.900.62|2002||183||||
Baptiste Roux|DEF|58|67|398.21.343.877|1999||190||||
Alioune Ndoye|AVA|135|69|786.908|2001||191||||
Miguel Menino|MED|127|64|812.346|2003||181|||7.47|
Lucas Freitas|DEF|16|65|887.886.653.582.211.462.892|2001||184|||9|
Makan Aïko|AVA|58|71|512.362.847.584|2001||180||||E
Cauê|AVA|16|65|536.380.200.240.234.395|2002||184|||55|
Vando Félix|AVA|70|67|851.908.911.520|2002||179|1|70||E
Tobías Medina|AVA|4|65|771.732|2004||170||||E
Diogo Spencer|DEF|127|64|140.21.74|2004||178|||18.31|
Dylan Nandín|AVA|157|65|710.92|2002||179||||
Ryan Guilherme|MED|16|63|149.519.242.732.360|2002||188||16|28.34|
Issiaka Kamate|MED|58|67|440.21.575.104|2004||186||||D
Óscar Rivas|DEF|54|67|9.908|2000||193||||
Eric da Silva Moreira|DEF|2|71|817.617.732.300|2006||185|||39|
Diogo Fernandes|GR|127|62|325|2005||185||127||
Henrique Arreiol|MED|127|71|812.517|2005||187|||7.47|
Arthur Sales|AVA|16|71|668.279.536.892|2002||184||||
Yago Cariello|AVA|16|69|690.373.873.976|1999||185||||
Yellu Santiago|MED|54|72|379.416.92.554.888|2004||192||||
Martín Tejón|MED|54|67|888.554|2004||165||||D
Karem Zoabi|AVA|83|67|732.851|2006||184||||
Thiago Balieiro|DEF|16|63|908.520|2003||190||16||
Agustín Moreira|AVA|157|64|380|2001||187||||D
Omar Fayed|DEF|47|74|619.351.135.92.366|2003||198|||31|
Miro|AVA|3|65|380.847.267|2003||183|7|||
Theofanis Bakoulas|MED|63|63|632.732|2005||180||||
Mateo Flores|MED|54|69|143.142.92|2004||178||||
Jonatás Noro|DEF|127|63|163.651|2005||187||||
Juanse Rodríguez|MED|49|64|503.847|2006||175||||
Renan Santana|DEF|16|62|345|2005||182||16||
Umar Abubakar|AVA|115|69|345.465|2006||190|1|||
Leandro Santos|DEF|127|69|140.582|2005||181|||18|
Landerson|AVA|16|63|582|2006||168||||E
Filipe Anunciação|MED|127|66|349.668.265.149.582|1979||179|||41.46|
Amoreirinha|DEF|127|71|74.140.292.295.191.870.27.909.776.669|1984||180|||7.12.25|
Barge|DEF|127|64|349.292.120.631|1984||174||127||
Filipe da Costa|MED|127|72|163.728.445.11.516.195.525.597.292.657.897|1984||180||||E
Bruno Miguel|DEF|127|70|891.519.292.28.74.1214|1982||188|||38|
André Marques|DEF|127|69|812.519.363.909.448.136.329.582|1987||186|1||34.40|
Miguel Oliveira (1983)|DEF|127|71|163.292.582.92.214.910|1983||186|||28|
João Coimbra|MED|127|70|140.597.554.380.292.28.326.1330.519.860|1986||183|||25.38|
Cédric Collet|AVA|58|71|193.855.818.703.822.820.136.867|1984||182|13|||E
David Fleurival|MED|58|72|855.149.703.502.323.136.210.11.1257|1984||184|24|||
Igor Stefanovic|GR|145|70|713.776.92.214.582.246.520|1987||192||||
Selim Bouadla|MED|58|72|511.662.27.819.801|1988||171||||
Tengarrinha|MED|127|74|325.295.629.776.909.195.363.214.149|1989||187|||7.12.28.59|
João Luiz|MED|16|64|554.136.30|1985||182|||34|
Tiago Cintra|AVA|127|63|520.136.265.363.891|1989||185||||
Félix Micolta|AVA|33|72|2.634.259.260.106.554.436.317.119.183.355.437.697.1132|1989||179||||D
Elízio|DEF|16|64|903.669.86.380.582.87.597.631.891.910|1988||176||||
João Dias|DEF|127|70|325.694.776.860.27.149.519.748|1986||180|||7.52|
Trigueira|GR|127|66|149.732.860.878.27.909.582.847.904.21|1988||192||||
Manuel Curto|MED|127|70|295.851.292.604.519.944.529|1986||186||||
Kalidou Yero|AVA|135|72|316.325.690.631.380.669.363.765.819|1991||196|2|58|7.12.28.59|
Luís Felipe|DEF|16|68|653.704.240.140.909.627.833|1991||180|||30.46.50|
Fábio Pacheco|MED|127|70|909.554.582.21.631.668.847.891|1988||178|||46|
Luís Ribeiro|GR|127|63|292.74.349.520.547.669.724.904|1992||185||||
André Fontes|MED|127|67|27.349.604.669.582.214.380.519|1985||179|||12|
Emiliano Albín|DEF|157|74|677.150.92|1989||170||||
Tony Taylor|AVA|121|66|292.633.607.609.668|1989||183|3|45|38|D
David Bruno|DEF|127|73|325.860.363.847.292.74.1214.582.776.851|1992||176|||7.12.28.32.35.39.41.55.59|
Pierre Sagna|DEF|135|70|582.120.776.655.74.214.266.885|1990||183||||
Ramazotti|AVA|16|72|380.119.338.704.249.317|1988||193||||
Vítor Bruno|DEF|127|65|669.191.349.149.27.28.74.520.904|1990||171||||
Vasco Rocha|MED|127|63|265.668.349.860.891|1989||182|||41|
Diego Galo|DEF|16|66|847.631.92.878.582.265.214.519|1984||185||||
Filipe Melo|MED|127|66|136.92.604.582.789.668.214.346.904|1989||189|||34|
Hélder Tavares|MED|23|67|136.640.847.73.385.1215|1989||180|14|127||
Michael Uchebo|AVA|115|75|717.884.207.149|1990||204|5|||
Fábio Nunes|AVA|127|72|690.325.663.146.508.120.137.847.16.346.928|1992||177|||7.59|E
João Amorim|DEF|127|64|908.363.28.120.137.92.265.520.891|1992||178||16|46|
Vinicio Angulo|AVA|49|67|438.668.1128.527.772|1988||189|||41|
Edu Machado|DEF|127|65|214.363.847.149.520.904|1990||175||||
Afonso|AVA|16|68|372.27.192.1338|1991||172||||
Daniel Martins|DEF|127|64|136.137.120.669.748.863.867|1993||189||||
André Teixeira|DEF|127|67|120.137.520.547.860.488.83|1993||170||||
Ricardo Ribeiro|GR|127|68|582.292.28.629.120.137.668.27.520.631|1990||183|||38|
Nemanja Petrovic|DEF|145|71|665.214.602.711.343.574|1992||176|1|||
Marllon|DEF|16|73|357.149.111.689.234.279.242.202.730|1992||186||||
Josip Vukovic|MED|40|67|405.591.630.554.594.670.490.1182.1158|1992||186||||
Ousmane Dramé|AVA|58|72|650.97.513.895.812.582.120|1992||174|||30.38|E
Reiner Ferreira|DEF|16|71|86.240.62.396.462.27.29.829|1985||185|||52|
João Meira|DEF|127|71|909.547.120.137.217.916.520|1987||185||||
Anderson Carvalho|MED|16|74|777.906.149.852.776|1990||174||||
Abdullah Al-Jawaey|AVA|7|69|554.61.251.60.42|1995||167|1||37.55|E
Tiago Galvão|AVA|16|67|667.244.214|1989||185||||
Bruno Pirri|DEF|16|65|909.102.187.202.355|1992||184||||
Yves Baraye|AVA|135|71|218.461.663.380.120.554.650.1295.911|1992||177||||D
Jô|AVA|16|68|519.582.591.405.303.1270|1988||170||||D
Filipe Chaby|MED|127|70|812.878.137.120.27.292.597.748|1994||174|||47|
Alhassane Keita|AVA|68|70|323.866.529.554.120.1230|1992||183|2|||
João Nunes|DEF|127|72|515.654.200.1074|1995||188||||
Carlos Santos|DEF|127|62|149.631.765|1989||188||||
Mansur|DEF|16|73|279.280.112.357.811.659.776.295.113|1993||181||||
Mauro Caballero|AVA|122|72|528.325.669.265.27.92.1212.1015.631.1011.1075|1994||175||||
Magique|AVA|39|65|27.860.349.1172.910|1993||180|||52|E
Nelson Bonilla|AVA|48|70|335.597.374.631|1990||178|65|||
Erivelto|AVA|16|64|149.396.397.1298.748|1988||184||||
Lolo Plá|AVA|54|70|887.886.187.245.283.384.605|1993||182||||
Wellington|AVA|16|68|349.1110|1987||186||||
Luís Aurélio|MED|127|70|582.847.597.349.191.27.1064|1988||179||||
Kukula|AVA|23|70|554.349.520.748.860.910|1993||175||||
Davi Mbala|AVA|129|63|669.149|1993||175|1|||E
Nelsinho|DEF|16|64|690.92.904|1988||175||||
Edson Farias|AVA|16|64|348.668.349.1360.21.27.173.669.904|1992||170|||41|D
Fabijan Buntic|GR|40|72|315.910.699.346|1997||194||2||
Heinz Mörschel|MED|131|72|422.274.910.1303.1074|1997||190|27|||
Martin Chrien|MED|52|72|902.179.140.776.1072|1995||182|1||46|
João Graça|MED|127|69|349.92.631.520.547.732|1995||177||||
Luís Mata|DEF|127|76|944.307.1320.685.690|1997||181||||
Pedro Delgado|MED|127|77|265.969|1997||186||||
João Camacho|AVA|127|71|597.582.478|1994||174||||D
Kiki (1994)|DEF|127|67|732.380.629.349.350.120.910.880.21.1149|1994||181|||39|
Sebastián Ayala|MED|33|66|441.597.1309.261.567|1995||181||||
Berto|AVA|127|72|617.517.615.909.690.863|1996||177|2|||D
Rafael Ramos|DEF|127|68|637.776.202.217.234.334|1995||170|||55|
João Góis|DEF|127|63|878.214.668.292.350|1990||174||||
Bruno Lourenço|MED|127|65|265.292.149.21.1043|1998||179||||D
Madi Queta|AVA|127|74|346.547.669.904|1998||180|4|70||E
Breno Lorran|DEF|16|71|395.908.355.389.537.621|1995||178|||46.50.52|
Barnes Osei|AVA|60|70|668.878.27.92.1016|1995||171|||41|D
Ronan|AVA|16|73|358.395.732.847.891|1995||195|||50|
Joca|MED|127|67|163.847.732.520.376.912|1996||167||||D
Jaume Grau|MED|54|74|638.187.847.779.21.1348.1137|1997||182||||
Leonardo Ruiz|AVA|33|72|106.812.149.948.891.292.732.327|1996||185|||30.32.47|
Rodrigo Borges|DEF|127|63|163.346.554.631.851|1998||187||||
Tiago Castro|MED|127|67|909.349.519|1996||176||||D
Joseph Amoah|MED|60|70|908.1360.519|1994||198|||32.46.52|
Rodrigo Abascal|DEF|157|70|677.149.908.58.1000|1994||187|||28|
Roko Baturina|AVA|40|75|352.514.593.709.380.586.6.277.1170|2000||187||||
Lenny Vallier|DEF|58|68|820.666.210.398.597.869|1999||178||||
Lucas Marques|MED|16|62|776.211.280.292.355.443.537.547.909|1995||176||||
Emmanuel Hackman|DEF|149|63|149.690.380.265.574|1995||187|5|60||
Carles Soria|DEF|54|70|13.292.643.644.912.448|1996||173||||
Ziga Frelih|GR|53|71|380.188.214.1021.1043.1066|1998||197||||
Messias|DEF|16|72|732.78.202.389.462.777|1994||190||||
Renato Pantalon|DEF|40|65|732.295.453.191|1997||194||||
Álex Millán|AVA|54|72|905.207.875.345.723.346.307.186|1999||185||||
Fuki Yamada|AVA|86|74|498.844.597.333|2001||180||||D
Capixaba|AVA|16|71|112.353.78.211.903.462.208.791.395|1997||170||||E
Benny (1997, B SAD)|MED|127|66|137.120|1997||177|0|127||
Murilo (1996)|AVA|16|68|847.732.668.211.292.547.570.891|1996||174||||E
Abou Ouattara|AVA|18|73|471.530.908.75.885|1999||176|9|39||D
Álex Bermejo|AVA|54|72|189.174.346|1998||183||||E
Andrés Sarmiento|AVA|33|64|585.106.70.2.910.183|1998||170||||E
Marian Huja|DEF|127|68|676.685.191.989.1048|1999||193||||
Miguel Reisinho|MED|127|69|149|1999||184|||28|
Rodrigo Valente|MED|127|64|292.776.350.669|2001||173||||
Leonardo Rocha|AVA|127|71|536.466.708.714.715.944.452.529.587|1997||200|||34|
Nabil Touaizi|DEF|102|71|291.104.67.74|2001||183||54||
Rafael Brito|MED|127|67|554.200.640|2002||180||||
Harouna Sy|DEF|58|66|727.869.75.912.292|1996||170||||
David Luís|DEF|16|66|908|1995||180|0|16||
Bandeira|DEF|127|63|75.28.496.460.463|2001||182|||48|
Alex Méndez|MED|45|75|910.1070.317.365|2000||178||||
Duarte Valente|MED|127|66|292.120|1999||182||||
Yusuf Lawal|AVA|115|71|469.92|1998||175||||E
Cedric Teguia|AVA|54|70|104.723.67.246.307.582|2001||180||24||E
Léo Andrade|DEF|16|69|462.554.487.644.730.235|1998||189||||
Khalid Hachadi|AVA|127|70|909.27.74.860|1998||190||102||
Abdullahi Tanko|AVA|115|64|380.214.765.126.660|1998||171||||D
Hélder Sá|DEF|127|64|908.714.732.349|2002||187||||
Talys|DEF|16|62|594.651.801.346|1999||179||||
Pedro Amador|DEF|127|72|163.582.108|1998||181||||
Chico Banza|AVA|3|65|83.690.295.520.554|1998||182|7|||E
Guilherme Montóia|DEF|127|65|295.454.616|2003||185||||
Anderson Oliveira|AVA|16|69|537.690.389.829.327|1998||169||||E
Ibrahima Camará|MED|68|71|582.149.714|1999||190|8|||
Ángel Torres|AVA|33|73|74.205.275.301|2000||182||||D
Momo Diaby|MED|58|67|776.668.690.789.349.765|1996||197||||
Pablo Gozálbez|MED|54|69|888.92|2001||171||||
Yevgeniy Serdyuk|AVA|153|71|149.990.200|1998||185|||47|
André Oliveira|MED|127|62|325|2005||186||127||
Andrézinho|AVA|127|64|74.200.547.776.640.1019|1996||174||||E
Shaquil Delos|DEF|58|63|292.19.393.505|1999||183||||
Mor Ndiaye|MED|135|70|292.474.685|2000||185||||
Dailon Livramento|AVA|23|74|735.416.200|2001||185|26|124||
Jota Gonçalves|DEF|127|67|847.910|2000||186||||
Nachon Nsingi|AVA|20|66|625.869.554.505.736|2001||176||||D
Jajá (1998)|AVA|16|66|149.240.305.51.333.693.389.730.1079|1998||175||||E
Marcelo Alves|DEF|16|69|892.280.847.342.1298|1998||188||||
Diogo Ferreira|GR|127|64|140|2007||191||127||
Mamadou Tounkara|DEF|58|70|908.214|2001||192||||
Matheus Índio|MED|16|64|833.860.908.911.111.452|1999||182||||
Cédric Nuozzi|AVA|20|65|74.377|2006||177||||E
Joshua Wynder|DEF|45|63|140.607|2005||183|||31.38|
Ítalo|DEF|16|65|355.776.880|2002||191||||
Konstantinos Kostoulas|DEF|63|65|632.732.623|2005||187||63||
Tunde Akinsola|AVA|115|71|887.886.21.207|2003||175||||E
Joel Silva|MED|127|65|149.597|2003||185||||
André Dhominique|DEF|16|64|279.295.537|2003||178||||
Habraão|DEF|16|63|360.211.776.102.811|2001||184||||
Saná Fernandes|AVA|127|70|510.588.461|2006||165||70|48|E
David Moreira|DEF|23|65|812.380|2004||171|3|127||
Kelliano|MED|3|72|295.34|2003||185|24|||
Fabrício Garcia|AVA|23|64|292.74|2001||172|6|||D
Pedro Carvalho|DEF|127|63|137.292.120|2003||196||||
Djé|MED|23|63|776.74|2003||178|2|||
Igor|AVA|16|72|163.909.295.446.523.386.189.658|1980||190|||28|
Luís Olim|DEF|127|67|554|1981||178||||
Ricardo Pessoa|DEF|127|70|909.690.582|1982||176|1||30|
António Filipe|GR|127|64|668.214.292.597.295.27|1985||187||127|41.46|
Cristóvão Ramos|AVA|127|70|669.520.83.525.492.633|1983||174||58||D
Luis Tinoco|DEF|127|65|380.136.582.292.604.92.847.350.631.878|1986||186|||34.38|
Furtado|AVA|127|71|200.195.668.519.445.643.12.657|1983||181||23||
Guima|AVA|127|65|349.28.631.191|1986||190||||
Duarte Machado|DEF|127|65|200.120.137.629|1983||175||||
Gonçalo Abreu|AVA|127|66|554.891.349.669.380.547.878|1986||190||||D
Igor Rocha|DEF|127|62|909.149.349.604.776.860.910|1984||186||||
Pedro Correia|DEF|127|73|140.629.241.908.27.709.904|1987||180||115|25.46.52|
Bura|DEF|127|73|325.690.748.380.669.668.136.214.28.519.520.547.631|1988||191|||7.12.28.46.59|
Ricardo Ferreira (1989)|GR|127|70|163.629.554.690.1019|1989||186|||30|
Yago Fernández|DEF|127|71|380.550.386.12.429.519.523|1988||192||||
Rafa Sousa|MED|127|66|669.597.582|1988||186||||
Jorge Monteiro|AVA|127|72|325.295.748.776.582.13.448.136.690|1988||171|||7|E
Pires|AVA|127|64|910.265.349.582.690.669|1981||178|||41|
Fábio Ervões|DEF|127|64|748.878.669.149.910|1987||188||||
Daniel|DEF|127|66|380|1987||185|0|127||
Vítor Bastos|DEF|127|64|908.910.363.629.591.727.631|1990||190|||46|
Paulo Regula|MED|127|65|909.629.604|1989||184|||52|
Elton Monteiro|DEF|143|72|224.27.509.93|1994||192|||15.52|
Élio Martins|AVA|127|64|214.136.878|1985||185|||34|
Tiago Mesquita|DEF|127|65|66.604.860.363.149.349.28.668|1990||177||||
Romeu|MED|16|73|668.11.358.522.658|1985||179||||
Coronas|DEF|127|69|669.909.582.554.27.520|1990||176||||
Rúben Brígido|MED|127|68|519.554.640|1991||172||||E
Nuno Lopes|DEF|127|65|149.631.136.732.87.1222.292.878|1986||184|||39|
Feliz|MED|127|66|732|1989||164|0|127||
João Reis|DEF|127|63|346.214.776.847.891.295.910.690|1992||178||||
Tiago Caeiro|AVA|127|63|120.137.904|1984||192||||
João Patrão|MED|127|62|520.214.292|1990||175||||
Ruca|DEF|127|70|380.847.547.909.27.349.669|1990||189||||
Luís Machado|AVA|127|66|847.349.582.363.714|1992||168||||E
Cristian Ponde|AVA|127|74|812.748.480.391.346.554.349.876|1995||179||132|38|D
Kiko (1993)|DEF|127|66|909.28.83.92.988.633|1993||183||||
Diogo Verdasca|DEF|127|75|325.188.779.800|1996||185||||
João Vieira|AVA|127|65|519.554.851.214.582.910.200.349.891.904|1991||189||||
Frédéric Maciel|AVA|127|66|585.582.380.891.851.640.990|1994||175||58||D
Nuno Campos|DEF|127|71|597.214.547.690.851|1993||176||||
Adriano Castanheira|AVA|127|63|748.668.214.519.669|1993||170||143||E
Joel Ferreira|DEF|127|73|292.27.92.214.520.547.860|1992||180||||
Pedro Silva|GR|127|65|847.910.292.74.1048.547.669|1997||189||||
Paulo Henrique|DEF|127|72|776.668.748.669.714.554|1996||180||||
Carlos Fortes|AVA|127|67|163.910.877.904.1064.1301.1172|1994||188|1||32|
Pedro Monteiro|DEF|127|67|363.163.87.668.292.28.349.520.1232.1075|1994||192|||32.41.52|
David Sualehe|DEF|127|69|668.27.346.1043|1997||183||||
André Sousa (1998)|DEF|127|70|909.21.593.597.668|1998||174||||
André Pedrosa|MED|127|68|909|1997||185||||
Gonçalo Costa|DEF|127|64|690.292|2000||179||||
Asumah Abubakar|AVA|127|68|167.320.321.391|1997||183||60||
Miguel Nóbrega|DEF|127|69|391.732.680.908.519|2000||189||||
China (1992)|DEF|127|67|554|1992||179||||
Théo Fonseca|AVA|127|63|350.345.1360.631|2000||178||58||D
Tomás Silva|AVA|127|70|812.910.891.454|1999||173|||7.47|E
João Valido|GR|127|65|909.92.214|2001||185||127||
Pedro Aparício|MED|127|63|136.547.582|1995||171||||
Rodrigo Martins|AVA|127|62|748.547.292.690.520.676|1998||177||||E
João Gonçalves (2000)|GR|127|65|149.21.877.597|2000||188|||28|
Braima|MED|127|64|120.547.859|2001||181||||
Luís Semedo|AVA|127|72|828.460.582.223|2003||192||||
Tiago Freitas|MED|127|65|140|2006||186|||31.38|
José Silva|DEF|127|63|812.92.380|2005||180|||7|
Paulo Monteiro|DEF|127|64|163.316.335.213.776.28.214.878.349.1360.547.724|1985||191|||28|
Bruno Pinheiro|DEF|127|70|149.928.380.88.1222.1250|1987||185||16||
Thierry Moutinho|MED|143|72|786.67.549.189.191.339.246.522.474.11|1991||178||||D
Marco Paixão|AVA|127|73|409.800.806.515.73.474.1172|1984||185||||
Marco Pereira|GR|127|65|149.860.349.363.776|1987||184||||
Traquina|AVA|127|68|27.292.604.748.120.137.1360.860|1988||177|||12|D
Rafael Veloso|GR|127|63|120.137|1993||192||||
Augusto|DEF|127|62|582.867.136.800|1987||180||||
Weldinho|DEF|16|73|667.234.653.627.355|1991||181||||
Hugo Sousa|DEF|127|69|919.90.785.445.488.1214|1992||184||||
Sérgio Marakis|MED|127|71|554.812.597.304.690.1092.878|1991||178||164||
Julián Montenegro|AVA|4|66|910.149.346|1989||188||||
Diogo Coelho|DEF|127|69|597.748.27.82.214.490.1172.904|1993||183||||
Rúben Macedo|AVA|127|74|214.265.554.597.891|1996||171||||E
Rui Areias|AVA|127|67|908.1360.92.547.669.748.891|1993||188|||32.46.52|
Miguel Oliveira (1994)|GR|127|67|582.520.669|1994||196||127||
Adilson (1987)|AVA|127|63|120.878.137.629.891|1987||180||||D
Marcos Valente|DEF|127|64|669.265.908.668.292.860.904|1994||196|||32|
Jucie Lupeta|AVA|127|72|348.909.305.173.304.1045.1043|1993||186||||
Rúben Oliveira|MED|127|66|265.776.120.349.891|1994||170||||
Vítor São Bento|GR|127|64|891.346.597.937.295.350.748.860|1992||190||||
Eri|AVA|127|67|163.554.28.265.349.520.860|1994||178|||28|D
Pité|MED|127|71|136.847.92.547.851|1994||188||||
Hugo Seco|AVA|127|62|28.27.349.346|1988||178||||D
Jorge Silva|DEF|127|71|520.668.1043|1996||183||||
João Lucas|DEF|127|74|776.27.74.120.520|1996||180||||
Sérgio Conceição|DEF|127|63|706.690.27.83.214.295.349.350|1996||177||||
Paulo Estrela|MED|127|72|690.1162|1999||171||||
Mésaque Djú|AVA|127|74|623.403.547.631.690|1999||178||70||D
Rúben Freitas|DEF|127|62|597.27.547.669.765.904|1993||180||||
Diga|DEF|127|70|349.547.1043.597|1998||173||||
Diogo Pinto (1999)|MED|127|65|97.904.295.200.308.1043|1999||175||||D
Tomás Domingos|DEF|127|62|776.28.547.554|1999||175||||
Schürrle|MED|127|64|163.631.860|2001||173||||
Diogo Almeida|AVA|127|71|668.28.547.748|2000||184||||
Kiki (1998)|AVA|127|65|520.200.860|1998||172||||D
Cláudio Silva|DEF|127|62|349|2000||188||127||
Miguel Sousa|MED|127|63|554.547.200.520|1998||176||||
Robinho (1997)|DEF|127|66|120.28.669|1997||171||||
Diogo Rodrigues|DEF|127|63|690.748.870.676|1999||183||||
Herculano Nabian|AVA|127|69|908.285.991.519|2004||182||70||
Gustavo Mendonça|MED|127|64|21.1320|2003||178||||
Diogo Pinto (2004)|GR|127|69|812.295|2004||192|||7.47|
Diogo Monteiro|DEF|127|71|786.92.516|2005||187||143||
Luís dos Santos|AVA|127|64|149.860.349|2000||175|||28|D
Brian Araújo|GR|127|65|380.346|2000||189||58||
Leonardo Barroso|DEF|127|69|217|2005||170||127||
Miguel Falé|AVA|127|69|163.657.981.547.668|2004||178||||D
Tiago Parente (2004)|DEF|127|65|292.350|2004||180||127||
Afonso Rodrigues|AVA|127|65|345.668.847.27|2002||178||||D
Ivan Lima|AVA|127|64|140.680|2005||174|||31|E
João Muniz|DEF|127|65|732.812|2005||190||127|41|
Vivaldo Semedo|AVA|127|71|871.336.74.910.921|2005||192||3||
Pedro Gomes|DEF|127|64|149.340|2003||185||||
João Aragão|AVA|127|69|163|2008||170||127||D
Tiago Parente (2006)|DEF|127|62|140.830|2006||181||127|18.31.38|
Cardoso Varela|AVA|127|73|277|2008||0||3||E
Afonso Assis|MED|127|64|582|2006||183||||
João Pinho|GR|127|63|631.363.668|1992||189||||
Rui Mendes|AVA|127|67|310.312.838|1999||180||||D
João Fonseca|DEF|127|62||2006||188||127||
Diogo Batista|MED|127|63|669.314.265.292.350|2000||184||127||
Frederico Duarte|AVA|127|64|904.655.930|1999||177||||E
André Gonçalves|AVA|127|62|687.896|2003||178||127||E
Julian Quiñones|AVA|111|66|55|1997||180|0|||
Barış Alper Yılmaz|AVA|152|80|371.991|2000||186|41|||D
Uğurcan Çakır|GR|152|72|371.856|1996||191|45|||
Abdülkerim Bardakcı|DEF|152|74|371.29.73.257.385.492.769|1994||190|30|||
Hans Vanaken|MED|20|77|224.536.469|1992||194|44||45|
Bento|GR|16|76|52.102|1999||190|7||11.30|
Lucas Zelarayán|MED|6|74|138.843.230.41|1992||180|26|4||
Ismael Saibari|MED|102|82|648.133|2001||185|37|54||
Abderrazak Hamdallah|AVA|102|78|60.992.24.993.57.52.46.45.61|1990||185|29||30.39.46|
Joey Veerman|MED|124|81|648.336.414.157|1998||185|20|||
Rodinei|DEF|16|77|632.994.234.995.689.357.443.777|1992||179|||30|
Evander|MED|16|75|221.892.566.691|1998||178||||
Alistair Johnston|DEF|25|79|204.603.579|1998||180|63|||
Milan Borjan|GR|25|79|58.150.493.598.734.996.711.799.538.713.294.1175|1987||193|80|40||
Mert Günok|GR|152|81|141.351.176.131|1989||196|39|||
İrfan Can Kahveci|AVA|152|80|351.131.376.484|1995||175|49||30.31.55|D
Dénes Dibusz|GR|73|72|352.997|1990||188|47|||
Bryan Heynen|MED|20|75|377|1997||181|1|||
Marcelino Moreno|MED|4|71|506.108.182.1369.235|1994||168||||
Lukáš Provod|AVA|32|75|802.998.179.902|1996||189|41|||E
Sem Steijn|MED|124|74|354.10.334.884|2001||173|1|||
Oscar Dorley|MED|92|71|802.804.61|1998||174|54|||
Adem Zorgane|MED|5|66|875.999.702|2000||184|28|||
Mykola Shaparenko|MED|153|80|275.322|1998||178|52|||
Leonardo Fernández|MED|157|71|677.843.1000.358.845.864|1998||166||||
Edin Višća|AVA|21|76|856.1001.131|1990||172|55|||D
Oğuz Aydın|AVA|152|75|351.65|2000||183|16|124|31|E
İsmail Yüksek|MED|152|80|351.123.29.176|1999||183|38||30.31.55|
Nicolas Raskin|MED|20|80|717.465.822|2001||178|22|||
Colin Coosemans|GR|20|74|80.224.919.471.465|1992||186||||
Sebastián Driussi|AVA|4|78|734.116.947|1996||174|||37|
Claudio Aquino|MED|4|74|227.1002.254.388.438.358.138.1089.879.917|1991||172||||D
Nick Olij|GR|124|75|648.22.1003.588.807|1995||184||||
Wouter Goes|DEF|124|71|22|2004||188||||
Raphael Onyedika|MED|115|77|224.281.311.566|2001||184|27|||
Gabriel Arias|GR|29|75|710.438.254.1343.611.1196|1987||187|19|4||
Giannis Konstantelias|MED|63|76|642.466.157|2003||178|18|||E
Dominik Kotarski|GR|40|77|233.32.403.277.642|2000||189|4|||
Diego Viera|DEF|122|65|1004.1005.1006.388.528|1991||186||||
Reo Hatate|MED|86|77|204.485.175|1997||172|19|||
Joseph Paintsil|AVA|60|75|499.377.82.352|1998||170|15|||D
Yeremay|MED|54|66|262|2003||170|0|||
Michael Cooper|GR|76|69|790.684|1999||186||||
Fayçal Fajr|MED|102|76|61.759.1007.283.262.63.379.799|1988||178|49|58||
Jaminton Campaz|MED|33|77|738.395.259|2000||165|15|||
Davy Roef|GR|20|76|465.262.80.919|1994||187||||
Rob Schoofs|MED|20|73|875.797.465.471|1995||179||||
Matte Smets|DEF|20|72|377.797|2004||184|1|||
Brandon Mechele|DEF|20|78|224.797|1993||190|19||45|
Malcom Braida|AVA|4|64|150.69.439.771|1997||175||||D
Maximiliano Salas|AVA|4|66|734.1008.1139.435.605.1011.710|1997||174||||
Jindřich Staněk|GR|32|78|802.806.299.1009.179.902.44|1996||191|14||45|
Michal Sadílek|MED|32|79|802.334.648.804|1999||169|42|||
Zlatko Tripić|AVA|116|73|901.364.394.402.432.576|1992||182||40||D
Vitaliy Buyalskyi|MED|153|74|275.1010|1993||170|13|||
Paulo Díaz|DEF|29|76|734.1011.227.771.36.108|1994||180|58|||
Carlos Palacios|MED|29|74|150.443.227.892|2000||180|9|||
Anastasios Bakasetas|MED|63|79|654.98.1012.90.656.65.856.12.17|1993||181|82||43.46|
Oscar Gloukh|MED|83|76|32.542.767|2004||170|32|||
Miguel Ángel Merentiel|AVA|157|66|150|1996||175|0|||
Patrik Hrošovský|MED|52|72|377.902.998.1013.1014|1992||172|62|||
Guilherme Sityá|DEF|16|66|492|1990||180|0|||
Darlington Nagbe|MED|45|75|230.691.108|1990||175|25|92||
Djordje Mihailovic|MED|45|74|849.217.579.22.229|1998||178|11|||D
Brian White|AVA|45|74|889.608|1996||177|8||42|
Walker Zimmerman|DEF|45|75|603.250.500.849|1993||190|46||42|
Fashion Sakala|AVA|163|77|42.809.472.717.1350|1997||178|42|||E
Richard Sánchez|MED|122|72|710.1015.77.734|1996||176|31|||
Gabriel Ávalos|AVA|122|72|438.89.382.388.1015.677.842|1990||187|27|||
Alex Arce|AVA|122|75|435.503.1004|1995||187|19|||
Otar Kiteishvili|MED|61|76|827.1016|1996||173|57|||
Tsuyoshi Watanabe|DEF|86|79|354.333.470.465|1997||184|13|||
Aboubakary Koita|AVA|105|75|12.465.470.797.919|1998||175|29|20||D
Günay Güvenç|GR|152|76|371.141.30.402.374.484|1991||185|4|2||
İrfan Can Eğribayat|GR|152|71|351.30.402.376.769|1998||193|||30.31|
Ángelo Preciado|DEF|49|77|806.112.377.438|1998||173|61|||D
Joel Ordoñez|DEF|49|66|224|2004||188|0|||
Yazan Al Arab|DEF|87|66|327|1996||188|0|||
Anthony Moris|GR|94|74|48.822.797.471.875|1990||184|86|20||
Musab Al Juwair|MED|7|66|55|2003||178|0|||
Firas Al Birekan|MED|7|66|36|2000||185|0|||
Álvaro Montero|GR|33|74|917.150.259.567.771.833|1995||196|12||20|
Alfredo Morelos|AVA|33|75|106.717.436.1017.777|1996||177|11||20|
Dayro Moreno|AVA|33|75|634.102.339.259.567.106.182.1018.2.226.459|1985||177|32||20|
Yeimar Gómez Andrade|DEF|33|66|784|1992||187|0|||
Ortwin De Wolf|GR|20|73|471.469.466.744.949|1997||190||||
Adriano Bertaccini|AVA|20|72|80.377.797|2000||173||||
Jarne Steuckers|MED|20|69|377.797.898|2002||179||||
Maximiliano Meza|AVA|4|78|734.382.438.577|1992||180|11||49|D
Kevin Zenón|MED|4|73|150.879.109|2001||177||||
Julio Furch|AVA|4|63|125.95.109.138.1196.771.777.778.1300|1989||189||||
Víctor Cuesta|DEF|4|73|95.159.254.279.427.438.443.611.683|1988||187|3||18|
Christopher Trimmel|DEF|165|78|874.718|1987||189|25|||
Gernot Trauner|DEF|165|75|354.501.761|1992||183|16||13|
Martin Jedlička|GR|32|70|902.1019.126.153.573|1998||186|1|||
Givairo Read|DEF|124|73|354.336|2006||184|||13|
Remko Pasveer|GR|124|77|32.334.417.387.648.907|1983||187|2|||
Youri Baas|DEF|124|74|32.589|2003||182||||
Fabian Reese|AVA|2|76|418.422.394.479.782.933|1997||187||||D
Sampson Dweh|DEF|92|70|902|2001||180|40|||
Tomasz Kędziora|DEF|126|80|642.514.275|1994||183|38||25|
Igoh Ogbu|DEF|115|73|802.739.1020.531|2000||186|12|||
Jonas Svensson|DEF|116|78|141.1020.739.22.29|1993||170|23||13|
Volodymyr Brazhko|MED|153|75|275.948|2002||184|11|||
Denys Popov|DEF|153|78|275|1999||185|3|||
Petros Mantalos|MED|63|74|12.937|1991||173|71|||
Lazaros Rota|DEF|63|74|12.1021.448.362|1997||180|29|||
Mohammed Abu Fani|MED|83|74|352.294.545|1998||164|33|||
Gabriel Neves|MED|157|74|296.598.834.438|1997||171|1|||
Tiago Palacios|MED|157|65|296.1063.683|2001||165||4||D
Diego Rossi|AVA|157|77|230.677.500.351.577|1998||170|7||30.55|D
Kaan Kairinen|MED|57|74|806.1022.566.12.1017.531.1087|1998||178|31|||
Oliver Antman|MED|57|74|717.613.80.312.387|2001||175|31|||D
Albert Rusnák|MED|52|78|784.551.628.747.145.312.766|1994||175|37|32|2|
Oberdan|MED|16|66|686.355.358.458|1995||175||||
Taison|MED|16|77|642.443.561.788|1988||172|8||41|E
Miroslav Stevanović|AVA|21|75|786.911.1023.787.283.66.1024.1001.288|1990||180|33||59|D
Ernest Muçi|MED|1|78|856.141.517|2001||180|21|||
Cristian Roldan|MED|45|72|784.1025|1995||173|47||42|
Lorenzo Melgarejo|AVA|122|78|1026.1015.140.668.438.497.809.528.710|1990||171|5||30|E
Massimo Coda|AVA|84|76|768.1027.1028.1029.858.238.241.154.1030.1031.663.764.139.201.378.513|1988||184||||
Saba Lobjanidze|AVA|61|76|108.82.1016.411.478.716.766|1994||175|40|||D
Magomed Ozdoev|MED|134|79|642.34.478.494.535.745.947|1992||184|35||19|
Nikita Haikin|GR|134|72|152.1032.1033.168.497.597.741|1995||185||83||
Joe Bell|MED|118|76|901.172|1999||182|35|76||
Seiya Maikuma|DEF|86|74|22.883.208|1997||179|8|||
Ayase Ueda|AVA|86|82|354.482.207.530|1998||182|47||13|
Doğucan Haspolat|MED|152|72|473.300.484.856|2000||177||124||
Dániel Gazdag|MED|73|75|230.1034.678.607|1996||178|30|||
Barnabás Varga|AVA|73|74|352.1035.12|1994||181|30|||
Song Bum Keun|GR|37|66|458|1997||194|0|||
Cédric Kipré|DEF|39|75|447.518.583.929.924.702.197.820|1996||193|1|58|2.44|
Hernán Galíndez|GR|49|74|427.738.996.1036.1037.864.1038|1987||188|41|4||
Brugui|AVA|54|66|523|1996||174|0|||
Jesús Imaz|AVA|54|68|454.930.1039.245|1990||179||||
Elgezabal|DEF|54|66|523|1993||185|0|||
Harrison Burrows|DEF|76|72|790.675|2002||180||||
Sekou Koita|AVA|100|76|376.194.318.767.932|1999||170|37|||
Jakob Breum|MED|43|62|387.626.763|2003||178||||D
Ilias Chair|MED|102|77|698.529.823|1997||164|12|20||
Eduard Atuesta|MED|33|72|637.436.500.653|1997||180|2||9|
Duván Vergara|AVA|33|68|710.286.183.577.738.778|1996||173||||E
William Tesillo|DEF|33|73|106.437.459.527|1990||184|30||20|
Edwin Cardona|MED|33|78|106.459.150.183.226.437.577.649.710|1992||180|45||20|
Liam Scales|DEF|78|75|204.26|1998||187|19|||
Michel Ange Balikwisha|MED|20|66|204|2001||178|0|||
Mario Stroeykens|MED|20|75|80|2004||174||||
Mika Godts|AVA|20|80|32.377.647|2005||176|6||36|E
Nikola Storm|AVA|20|73|84.224.949.471.473.625|1994||178||||D
Giuliano Galoppo|MED|4|71|734.125.108.834|1999||179||||
Braian Romero|AVA|4|72|917.228.89.102.226.254.438.443.1015.734|1991||175||||
Agustín Bouzat|MED|4|75|917.150.227.254.423|1994||173||||
Gabriel Rojas|DEF|4|73|710.771.242.677.701|1997||178|1|||
Pedro De la Vega|MED|4|66|784|2001||175|0|||
Ayrton Costa|DEF|4|70|150.438.683.744|1999||179||||
Agustín García Basso|DEF|4|62|710.1040.138.150.297.438.996.1157|1992||178||||
Exequiel Zeballos|AVA|4|76|150.580|2002||174||||E
Leonardo Morales|DEF|4|63|138.382|1991||180||||
Mathias Honsak|MED|165|72|415.318.761.422.752.767|1996||188|1|||D
Petr Ševčík|MED|32|76|802.795.1041.804.453|1994||172|17|||
Filip Panák|DEF|32|71|806.481|1995||185||||
Mojmír Chytil|AVA|32|73|802.795.660|1999||187|23|||
Vasil Kušej|AVA|32|72|802.274.573.804.1013|2000||168|7|||E
Bart Nieuwkoop|DEF|124|77|354.875|1996||180|||13|
Gijs Smal|DEF|124|71|354.336.334|1997||183||||
Thomas Beelen|DEF|124|71|354.645|2001||180|||13|
Daan Rots|AVA|124|73|334|2001||179||||D
Hauke Wahl|DEF|2|73|817.422.750.315.415.933|1994||189||||
Damian Szymański|MED|126|78|517.1042.454.931.34.12|1995||181|18||25|
Andrés Vombergar|AVA|53|72|771.1043.69.980.772.872|1994||187|6|4||
Felix Horn Myhre|MED|116|72|757.916.152.924|1999||180|7|||
Magnus Wolff Eikrem|MED|116|79|576.552.414.197.550.467.784|1990||183|17||2.10|
Greg Taylor|DEF|51|76|642.204.489|1997||175|14|||
Danylo Sikan|AVA|153|67|856.788.480.322.80.1261|2001||185|10|||
Kerim Mrabti|MED|142|74|471.798.268.145.13|1994||175|3|||
Vasilios Barkas|GR|63|77|882.12.113.204|1994||196|13|124||
Kristijan Kahlina|GR|40|71|212.1044.277.403.538.1209|1992||188||||
Dominik Schmid|DEF|143|72|132.1159.391.509.767|1998||182||||
Liel Abada|AVA|83|76|212.1045.204|2001||168|21|||D
Leandro Lozano|DEF|157|64|89.150.967.598|1998||169||||
Cesinha|AVA|16|72|248.112.234.689|1989||177||||
Julian Gressel|MED|45|74|569.108.247.230.442.889|1993||185|6|2||D
Haji Wright|AVA|45|77|762.884.835.84.236.1284.782|1998||191|22||42|D
Brandon Vazquez|AVA|45|73|116.108.221.226.577|1998||188|11||42|
Matías Galarza|MED|122|78|734.108.182.235.442.1015.892|2002||175|21|||
Agustín Sández|DEF|122|73|738.150|2001||179|5|4||
Siyabonga Ngezana|DEF|164|74|339.1046|1997||191|14|||
Leonardo Sernicola|DEF|84|69|238.841.97.139.681.760.781.810|1997||187||||
César Huerta|AVA|111|76|80.219.555.865|2000||171|27|||E
Goduine Koyalipou|AVA|130|70|523.210.81.195.470.509.521.919|2000||183|11|||
Georgiy Dzhikiya|DEF|134|78|84.76.487.535.809|1993||188|44||46|
Fedor Chalov|AVA|134|79|642.132.194.486|1998||183|8|||
Dayne St. Clair|GR|25|75|569.442|1997||191|21|||
Kervin Arriaga|MED|72|65|523.12.569.665.779|1998||191|42|||
Seydouba Cisse|MED|68|73|186.49|2001||178|29|||
Deniz Türüç|MED|152|73|131.253.387.486.351.492|1993||177|13|124||
Berat Özdemir|MED|152|72|131.376.40.956.856|1998||187|3|||
Rıdvan Yılmaz|DEF|152|78|141.717|2001||174|7|||
Emre Kılınç|AVA|152|68|769.1047.82.371.799|1994||174|4|||D
Okan Kocuk|GR|152|73|769.176.371.385.449|1995||187||||
Aral Şimşir|AVA|152|70|566.1048.531.856|2002||177|2|43||E
Emin Bayram|DEF|152|76|473.371.131.1047|2003||192||||
Emirhan Topçu|DEF|152|73|141.180|2000||187|2|||
Christopher Bonsu Baah|MED|60|75|55.377|2004||172|9|||D
Ebou Adams|MED|148|72|793.1049.197.263.526.616.692|1996||178|32|76||
Shaquille Pinas|DEF|141|75|49.354.410.10.309.538|1998||182|39|124||
Alexander Domínguez|GR|49|77|503.228.259.577.917|1987||196|77|||
Viti Rozada|DEF|54|72|507.723|1997||180||||D
Damián|MED|54|66|203|2003||180|0|||
Oriol Rey|MED|54|71|523.188.516.886.887|1998||177|||17|
Antoniu Roca|AVA|54|74|291.549|2002||180|1|||D
Carracedo|AVA|54|66|246|1996||179|0|||D
Abdón Prats|AVA|54|72|549.174.189.188.709|1992||181||||
Dan Neil|MED|76|75|828.447.717|2001||178||||
Hayden Hackney|MED|76|72|565.299.783|2002||178||||
Luke Woolfenden|DEF|76|73|447.236.831|1998||193||||
Albion Rrahmani|AVA|89|72|806.1050.1051.326.895|2000||188|26|145||
Casper Højer|DEF|43|70|180.25.233.540.806|1994||184||||
Carlo Holse|AVA|43|75|769.233.289.739.815|1999||175|1|||D
Elias Jelert|DEF|43|75|805.233.371.511|2003||178|3|||
Jeppe Tverskov|MED|43|71|770.540.716.613.626|1993||185||||
Frank Fabra|DEF|33|73|150.286.260.436|1991||172|28||20|
Juan Camilo Portilla|MED|33|66|771|1998||185|0|||
Edwuin Cetré|MED|33|70|296.778.436.459|1998||179||||
Julián Millán|DEF|33|64|597.1309.358.437.534.598|1998||184||||
Jorman Campuzano|MED|33|75|106.150.385.671|1996||175|4||20|
Jason Knight|MED|78|74|263.168|2001||173|46|||
Craig Goodwin|AVA|8|71|31.557.610.955.63.807|1991||180|30|||E
Cameron Burgess|DEF|8|75|830.367.740.216.1086.178.447.628.783|1995||194|29|51||
Thibo Somers|MED|20|70|744.207|1999||173||||
Tobe Leysen|GR|20|72|625.377|2002||175||||
Matthieu Epolo|GR|20|76|822|2005||185|3|||
Jonathan Dubasin|AVA|20|72|813.386.67.132.723.638|2000||179||54||D
Noë Dussenne|DEF|20|71|625.465.703.207.585.509.241.822|1992||191||||
Elías Gómez|DEF|4|66|917.738.254.89.734|1994||179||||
Eric Meza|DEF|4|65|296.228|1999||175||||
Alexis Castro|MED|4|71|296.228.254.226.598.771.842|1994||183||||D
Francisco Ortega|DEF|4|74|632.734.917|1999||177||||
Agustín Almendra|MED|4|71|710.879.150.605|2000||177||||
Ulises Sánchez|AVA|4|67|138.383|1998||167||||D
Jorge Broun|GR|4|71|738.1052.228.382.538|1986||190||||
Hernán López Muñoz|MED|4|73|89.206.388.734.756|2000||169||||
Lautaro Rivero|DEF|4|69|734.206|2003||185|1||49|
Milton Giménez|AVA|4|64|150.125.206.605|1996||184||||
Nazareno Colombo|DEF|4|72|710.296.254|1999||184||||
Matěj Jurásek|AVA|32|73|616.802.481.806|2003||181|4|||D
Lukáš Sadílek|MED|32|72|806.803.998.401|1996||171|3|||
Youri Regeer|MED|124|77|32.334.923|2003||177||||
Björn Meijer|DEF|124|66|224|2003||190|0|||
Kian Fitz-Jim|MED|124|74|32.300.848|2003||174||||
Mexx Meerdink|AVA|124|73|22.907|2003||182|4|||
Armando Obispo|DEF|124|76|648.907|1999||185|12|||
Mike Eerdhuijzen|DEF|124|70|882.336.471.807|2000||194||||
Patrick Soko|AVA|24|66|72.109.1305.186.709.754|1997||176|5|||D
Ramiz Zerrouki|MED|5|77|334.354|1998||183|56|124|13|
Abdelkahar Kadri|MED|5|71|465.470.999|2000||170|4|||
Tomi Horvat|MED|53|75|827.168|1999||176|15|||
Obinna Nwobodo|MED|115|73|221.402.717.1074|1996||180||||
Oliver Edvardsen|AVA|116|72|32.1053.387|1999||175||||E
Håkon Evjen|MED|116|74|152.22.172|2000||173|1||13|
Simen Bolkan Nordli|MED|116|70|739.407.24.716|1999||181||||
Jakob Glesnes|DEF|116|66|678.1054.499.826|1994||187||||
Luke McCowan|MED|51|66|204.1055.272|1997||177||||
Lawrence Shankland|AVA|51|76|413.1056.26.1057.816.1055.135.273.717|1995||185|22|||
Oleksandr Karavaiev|DEF|153|66|275|1992||175|0|||
Taras Stepanenko|MED|153|75|301.788.491.564|1989||181|87||41|
Tesfaldet Tekie|MED|142|71|410.1058.465.614.87.362.387|1997||175|3|50||
Anton Salétros|MED|142|66|14.217.741.759.1074|1996||183|19|||
Nahir Besara|MED|142|73|410.1059.1060.402.42.651|1991||182|1|||
Victor Eriksson|DEF|142|68|410.914.569|2000||192|1|||
Matías Catalán|DEF|29|68|771.182.296.649.772|1992||182|9|4||
Claudio Baeza|MED|29|77|917.227.36.605.845|1993||171|18|||
Sebastián Vegas|DEF|29|72|227.577.1061.527.555|1996||184|21|||
Alexandros Paschalakis|GR|63|74|632.522.642.643.658|1989||197|5||9|
Stratos Svarnas|DEF|63|70|715.12.937|1997||183|6|||
Dinko Horkaš|GR|40|69|507.62.277.595|1999||189||||
Alvyn Sanches|MED|143|73|942.509|2003||183|6|58||
Anan Khalaili|DEF|83|74|875.545.243|2004||183|19|||D
Luciano Boggio|MED|157|76|597.721.1369.255.598.734|1999||175||||
Carlos Protesoni|MED|157|70|66.255.438|1998||185||||
Facundo Mallo|DEF|157|66|738.1062.1063.308.326.255|1995||188||||
Darius Olaru|MED|132|72|339.1064.875|1998||177|30|||
Daniel Bîrligea|AVA|132|75|339.1065.191.366|2000||184|11|||
Ivan Schranz|AVA|52|78|802.1066.806.271.179.453|1993||187|39|||D
Busanello|DEF|16|73|550.211.462.749|1998||179||||
Claudio Gomes|MED|58|79|652.551.129|2000||171|||26|
Rémy Descamps|GR|58|75|541.855.223.702.600.647|1996||196|||41.53|
Pedro Gallese|GR|125|77|637.1067.1068.260.1300|1990||190|130|||
Alexander Callens|DEF|125|74|12.725.386.609|1992||187|51|||
Wes Burns|AVA|123|72|447.26.168.216.1189.1049.518.641|1994||173|12|||D
Ryan Hollingshead|DEF|45|63|500.250|1991||185||||
Jesús Ferreira|AVA|45|75|784.250.1069|2000||173|23|33||
Diego Luna|MED|45|70|1070.766.1071|2003||173|18||42|D
Mark Delgado|MED|45|75|500.849.499|1995||175|6|||
Stefan Frei|GR|45|70|784.849|1986||191|1|143||
Roman Celentano|GR|45|70|221|2000||193||||
Keaton Parks|MED|45|76|609.140.891|1997||193|1||18.46|
Carlos Miguel Coronel|GR|122|72|608.1114.318.678.767.834|1996||192|9|16||
Matías Espinoza|DEF|122|70|528|1997||179|8|||
Gift Links|AVA|164|62|25.1359|1998||170|5|||D
Mirko Pigliacelli|GR|84|76|737.781.663.674.366.729.696.857.877.652|1993||184||||
Rodrigo Huescas|DEF|111|73|233.185|2003||172|3|||D
Mateo Chávez|DEF|111|78|22.219|2004||177|14|||
Budu Zivzivadze|AVA|61|75|415.479.1072.1073.1074.289.348.1016.1075|1994||189|45|||
Andy Najar|DEF|72|80|603.247.80.500.1076|1993||171|65|||D
Grigoris Kastanos|MED|31|78|416.674.463.1222.366.460.764.949|1998||176|84||48|D
Raphael Obermair|AVA|2|76|750.133.827|1996||182|1||11|D
Tomoki Iwata|MED|86|80|145.1077.940.204|1997||178|4|||
Miki Yamane|DEF|86|76|499.881.485.792|1993||178|16|||
Tatsuhiro Sakamoto|AVA|86|74|1078.472.208.236|1996||170|2|||D
Yohei Takaoka|GR|86|74|889.941.1079.940|1996||182||||
Emre Akbaba|MED|152|71|301.84.65.29.371.478|1992||187|11|58||
Efecan Karaca|MED|152|73|65.371.374.30.29.375|1989||166|8|||
Guillermo Viscarra|GR|15|71|280.1080.1018.1068|1993||190|39|||
Loïc Négo|DEF|73|78|511.213.348.600.633.737.822.1074|1991||181|48|58|36|
Ibrahim Sadiq|AVA|60|73|22.613.229.429|2000||167||||D
Karim Konaté|AVA|39|77|767.20.318|2004||178|19|||
Parfait Guiagon|MED|39|76|702.61.542|2001||169|5|||
Warner Hahn|GR|141|78|410.431.32.309.354.645.300.414.80.387.498|1992||198|26|124||
Gyrano Kerk|AVA|141|67|744.882.1081.121.535|1995||184|15|124||D
José Cifuentes|MED|49|76|849.1037.183.500.717.242.90|1999||175|21|||
Javier Burrai|GR|49|66|95.182.1138.567.780|1990||187|1|4||
Junior Sornoza|MED|49|71|438.649.226.234.358.503|1994||169|17|||
Steven Moreira|DEF|23|76|230.731.319.854|1994||176|24|58||
Leandro Andrade|MED|23|73|699.629.687|1999||176|7|127||D
Corpas|MED|54|66|753|1991||178|0|||
Josan|AVA|54|73|283.9.67.390.754|1989||175||||D
Soberón|AVA|54|66|779|1997||178|0|||
Amor Layouni|AVA|151|71|429.1082.256.916.152.13.926|1992||191|10|142||E
Zine|AVA|3|74|12.522|2002||181|34|||
Perry Ng|DEF|76|68|197.239.1009|1996||180||||
Dapo Afolayan|AVA|76|71|817.1083.146.155.1188.628.925|1997||180|1|||D
Kaine Kesler-Hayden|DEF|76|74|99.236.425.543.684.695.831|2002||175||||
Colby Bishop|AVA|76|63|692.1084.1085.1086.1252|1996||183||||
Ross Sykes|DEF|76|72|875.1086|1999||196||||
Mohammed Kanno|MED|7|66|45|1994||191|0|||
Nawaf Al Aqidi|GR|7|66|52|2000||188|0|||
Hassan Tombakti|DEF|7|75|45.60.63|1999||182|60||30.37|
Mees Hilgers|DEF|75|76|334.414|2001||185|4|124||
Leart Paqarada|DEF|89|75|415.524.762.1329.231.817|1994||184|37|2||
Gaoussou Diarra|AVA|100|73|354.449|2002||183|14|||E
Maurits Kjaergaard|MED|43|73|767.318.530|2003||192||||
Anton Gaaei|DEF|43|74|32.900|2002||183|2|||
Nicklas Røjkjær|MED|43|68|613.900.289.233.311.572.796|1998||179||||
Rasmus Falk|MED|43|75|626.233|1992||177|2|||
Mikael Uhre|AVA|43|74|678.835.1087.172.566|1994||188|3|||
Patrick Mortensen|AVA|43|71|25.1088.172.540|1989||188||||
Marwane Saadane|DEF|102|66|41|1992||188|0|||
Felipe Román|DEF|33|66|106|1995||183|0|||
Alexis Manyoma|AVA|33|71|229.296.260|2003||169||||D
Marino Hinestroza|AVA|33|73|106.183.653.649.230.892|2002||170|2||9|D
Jhohan Romaña|DEF|33|67|771.734.436.1089.116.527.1015|1998||185||||
Alan Browne|MED|78|73|565.1090.695.828|1995||173|39|||
Mats Rits|MED|20|77|80.135.32.471.224|1993||180||||
Casper De Norre|MED|20|72|377.568.625.797|1997||175||||
Mathias Delorge|MED|20|69|465.529.797|2004||189||||
Killian Sardella|DEF|20|75|80|2002||177|1|||
Anouar Ait El Hadj|MED|20|75|875.80.377|2002||168||||
Joaquin Seys|DEF|20|79|224.225|2005||178|8|||
Yari Verschaeren|MED|20|76|80.768|2001||172|7||45|
Jari De Busser|GR|20|69|387.22.465.529.536|1999||190||||
Enzo Copetti|AVA|4|65|738.212.710|1996||180||||D
Lautaro Acosta|AVA|4|76|506.787.709.150.1369|1988||164|2|||D
Facundo Altamirano|GR|4|72|771.125.297|1996||185||||
Alexis Canelo|AVA|4|66|506.1091.996.107.1369.226.438.697.845|1992||182||||
Nery Domínguez|DEF|4|71|771.738.701.1369.438.710.864|1990||184||||
Sebastián Meza|GR|4|64|427.780|2000||185||||
Agustín Urzi|AVA|4|72|427.125.317.522.710|2000||168||||D
Maximiliano Lovera|AVA|4|71|738.437.445.632.633.710|1999||170||||D
Rodrigo Castillo|AVA|4|67|506.1369.358.382|1999||187||||
Sasha Marcich|DEF|4|65|506.1369.297.683|1998||175||||
Richard Schunke|DEF|4|66|438|1991||185||||
Luciano Lollo|DEF|4|68|138.734.125.296.611.710|1987||183||||
Sascha Horvath|MED|165|73|501.117.827.274.836|1996||165|1|||
Thierno Ballo|AVA|165|73|215.568.718.763.932|2002||174|1|39|53|E
Tobias Lawal|GR|165|73|377.1140.501|2000||195|1|||
Dominik Baumgartner|DEF|165|66|932.1092.1093.237.898|1996||188||||
Jaroslav Zelený|DEF|32|75|806.424.481.453.802.573|1992||190|25|||
Ondřej Lingr|MED|32|76|423.481.802.354.493|1998||175|28||13|
Jakub Markovič|GR|32|64|802.573.660.126|2001||187||||
Franculino|AVA|70|75|566.856|2004||182|18|||
Melle Meulensteen|MED|124|71|387.707.695.768.907|1999||185||||
Joël Drommel|GR|124|76|807.334.648|1996||193||||
Owen Wijndal|DEF|124|77|32.22.744|1999||176|11||13|
Enric Llansana Beuse|MED|124|66|80|2001||183|0|||
Kees Smit|MED|124|75|22|2006||180|1|||
Luciano Valente|MED|124|74|354.312|2003||189|2|||
Jasper Schendelaar|GR|124|74|645.22.838|2000||186|||13|
Bart Schenkeveld|DEF|124|73|48.354.300.417.645.557.654|1991||189|||46|
Joris Kramer|DEF|124|74|387.22.309.589.747|1996||187|||13|
Marnon Busch|DEF|2|76|415.923.1|1994||182||||
Romulo Otero|MED|159|71|597.63.112.185.234.240.360.1156.598.1038.777|1992||165|49|||
Sofiane Bendebka|MED|5|68|41.44|1992||180|28|||
Abdelkader Bedrane|DEF|5|67|251.1094.1095|1992||186|29|||
Yira Sor|AVA|115|74|377.126.802|2000||174|1|||D
Hugo Vetlesen|MED|116|72|224.1053.152|2000||177|6|20||
Ulrik Saltnes|MED|116|73|152|1992||187||||
Tobias Gulliksen|MED|116|72|718.152.268.490.826|2003||181||||D
Martin Linnes|DEF|116|79|576.1096.371|1991||177|29|||
Warren Kamanzi|DEF|116|72|854.550.1145.739.861|2000||177||||
Sondre Tronstad|MED|116|72|146.432.425.412.757.907|1995||174|1|||
Kristian Eriksen|MED|116|68|576.407.757|1995||177||||
Tobias Lauritsen|AVA|116|71|807.1097.768|1997||194||||
Luis Mejía|GR|121|74|597.1000.549.854.598.710|1991||191|72|||
Connor Barron|MED|51|71|717.26.565|2002||175|1|||
James Forrest|AVA|51|79|204|1991||170|39|||D
Vladyslav Kochergin|MED|153|66|715|1996||178|0|||
Arseniy Batagov|DEF|153|66|856|2002||185|0|||
John Björkengren|MED|142|68|716.1098.165.513|1998||180||||
Benjamin Nygren|MED|142|76|204.613.431.377.414|2001||184|17|||D
Gustav Berggren|MED|142|72|608.1099.429.514.715|1997||180|1|||
Jordan Larsson|AVA|142|79|233.14.127.1100.589.809.40.1253.614.782|1997||175|8|124|46|
Jonathan Levi|MED|142|66|352.739.952.284.1101.614|1996||185|1|||D
Brayan Cortés|GR|29|67|677.1102.89.227|1995||185|25|||
Darío Osorio|AVA|29|73|566.243.864|2004||184|28|||D
Gabriel Castellón|GR|29|64|864.1103.1156|1993||190||||
Vicente Pizarro|MED|29|72|227.738|2002||172|20|||
Giannis Michailidis|DEF|63|73|642|2000||185|5||9|
Gerasimos Mitoglou|DEF|63|64|12.912.113|1999||184||||
Robert Ljubičić|MED|40|71|12.277.501.718.1230|1999||178||165||
Jim Allevinah|AVA|59|72|81.1104.1105.1106.223.484|1995||172|36|58||D
Uran Bislimi|MED|143|71|320.1107.132|1999||183|4|||
Lucas Blondel|DEF|143|67|150.427.842|1996||178|4|4||
Pascal Loretz|GR|143|70|321|2003||191||||
Marvin Keller|GR|143|77|942.1159.337.391|2002||189|1|76||
Stefan Gartenmann|DEF|143|72|352.414.835.26.566.768|1997||185|3|43||
Tai Baribo|AVA|83|71|678.247.932.1045|1998||181|25|||
Facundo Waller|AVA|157|66|427.1108.598.697.772.865|1997||173||||D
Javier Méndez|MED|157|64|677.78.227.252.436.710.879|1994||184||||
David Terans|MED|157|67|677.1109.102.111.112.252.358.649.1103|1994||176|2|||
Octavio Rivero|AVA|157|70|1109.889.1008.109.227.255.1343.598.710.778.864|1992||188||||
Emanuel Gularte|DEF|157|71|677.1103.697.701.813|1997||189||||
Deian Sorescu|AVA|132|75|374.308.715.339|1997||175|25|||D
Adrian Șut|MED|132|76|339.1110.1111.37.522|1999||186|8|||
Ștefan Târnovanu|GR|132|77|339.8|2000||197|5|||
Claudiu Petrila|AVA|132|72|326.191.785|2000||176|2|||E
Leo Sauer|AVA|52|78|354.588.298|2005||184|15||13|E
Cassiano|AVA|16|72|200.960.1182.149.240.1271.292.360.389.399.443.910|1989||185||||
Loïc Lapoussin|MED|98|70|797.727.867.875|1996||181|21|58||
Gaëtan Poussin|GR|58|72|727.156.779|1999||186||||
Ibrahim Cissé|DEF|58|69|352.855.81.662.759.869|1996||185||||
Youssef Maziz|MED|58|73|625.323.229.512.706|1998||175||||D
Anis Mehmeti|MED|1|73|936.168.447|2001||180|9|76||
Cebrail Makreckis|MED|91|77|352.524.1112.1113.699|2000||180||||
Marcos López|DEF|125|74|233.756.1299.354|1999||176|57||13|
Miguel Trauco|DEF|125|73|357.787.1068.240.756.763|1992||169|76|||D
Kenji Cabrera|MED|125|73|889|2003||174|7|86||E
Bryan Reyna|AVA|125|74|138.549.1068|1998||170|20|||E
Kellyn Acosta|MED|45|74|217.250.229.500.685|1995||178|58|||
DeJuan Jones|DEF|45|73|756.607.230|1997||175|10||42|
Marlon Fossey|DEF|45|74|822.155.367.793|1998||179|2||38.42|
Julian Green|MED|45|82|394.298.133.408|1995||172|15||5.26.58|
Jack McGlynn|MED|45|73|423.1114.678.825|2003||180|13||42|
Patrick Schulte|GR|45|73|230.1115|2001||196|3||42|
Aaron Long|DEF|45|75|500.691.784.1116.1117.1025.608|1992||185|35|||
Jackson Ragen|DEF|45|62|784.1025|1998||198||||
José Florentín|MED|122|67|206.1089.435.917|1996||181|3|||
Robert Rojas|DEF|122|75|734.1089.528.1015.842.892|1996||176|22|||
Juan Espínola|GR|122|67|598.130.138.388.611.1015.780|1994||185|1|||
Iván Ramírez|DEF|122|71|528.206.388.1089.1004|1994||177|7|||
Álvaro Campuzano|MED|122|67|528.1004|1995||185|4|||
Iván Franco|MED|122|71|528.423|2000||165|1|||D
Rodrigo Morínigo|GR|122|70|528|1998||189|3|||
Saúl Salcedo|DEF|122|72|1015.427.611|1997||180|2|||
Bongokuhle Hlongwane|AVA|164|74|569|2000||182|20|||D
Juri Cisotti|MED|84|71|339.859.218.508.810.404.1118.1119.1120.640.1226|1993||175||||
Anthony Partipilo|AVA|84|62|128.1121.191.366.663.841|1994||181||||
Nicholas Pierini|AVA|84|72|781.810.97.209.575.768.895|1998||176||||
Antonio Caracciolo|DEF|84|73|681.416.440.1122.1123.128.378.165.238|1990||185||||
Aarón Herrera|DEF|65|73|247.579.1071.766|1997||180|28|45||
Jonathan Osorio|MED|25|72|849|1992||175|93|||
Theo Bair|AVA|25|74|509.889.407.814.583.15.155|1999||191|7|||
Luis Palma|AVA|72|75|514.90.1071.204.1124.632|2000||179|39|||E
Nikolas Ioannou|DEF|31|75|768.17.90.232.617.651|1995||183|51|||
Mory Konaté|MED|68|73|471.797.44|1993||191|11|||
Adamo Nagalo|DEF|18|75|648.613.492|2002||185|27|39||
Sota Kawasaki|MED|86|77|548.498|2001||171||||
Keigo Tsunemoto|DEF|86|76|132.482.786|1998||174||||
Hiroki Sekine|DEF|86|70|820.1125.483.422|2002||187|3|||
Dorukhan Toköz|MED|152|73|486.290.29.141.301.478.856|1996||180|14|||
Levent Mercan|DEF|152|76|351.478.782|2000||176||2|31|
Ahmet Oğuz|MED|152|65|490.376.484.492.799|1993||176||||
Mustafa Eskihellaç|DEF|152|70|856.282.1047.374.484.938|1997||175|3|||E
Zeki Yavru|MED|152|72|769.856.486.33.176.257.376.385.938|1991||179|3|||
Muhammed Şengezer|GR|152|73|131.176.29|1997||192|1|||
Taha Şahin|DEF|152|69|180|2000||178||||
Halil Akbunar|AVA|152|71|301.282.402.176.473.670|1993||170|2|||D
Ahmetcan Kaplan|DEF|152|76|589.32.856|2003||189||||
Dániel Sallói|AVA|73|71|476.1074.849|1996||185|9|||E
Abdoulie Manneh|AVA|148|69|572.207|2005||168|7|||E
Ablie Jallow|AVA|148|75|786.400.323.706.4|1998||166|31|||D
Carlens Arcus|DEF|71|72|81.862.15.207.530.907|1996||180|63|||
Oh Hyeon Gyu|AVA|37|77|377.141.204.381|2001||183|34||40|
Eom Ji Sung|MED|37|66|830|2002||178|0|||
Ranko Veselinović|DEF|145|73|889.911|1999||190|2|||
Nenad Cvetković|DEF|145|66|718|1996||195|0|||
Ismaila Soro|MED|39|74|58.1126.1127.204.92.1033|1998||173|1|||
Leonel Quiñonez|DEF|49|66|503|1993||178|0|||
Fernando Gaibor|MED|49|72|1068.1128.62.438|1991||178|19|||
Janner Corozo|AVA|49|62|438.503.649|1995||176|7|||D
Olaetxea|MED|54|66|753|1993||179|0|||
Stoichkov (1993)|MED|54|74|262.9.66.390.549.753|1993||178||||
Ximo Navarro|DEF|54|76|262.66.72.246.362.507.549|1990||177||||
Casas|AVA|54|66|895|2000||183|0|||
Joan Sastre|DEF|54|75|642.17.549|1997||174||||
Loureiro|DEF|54|66|262|1996||178|0|||
Mella|AVA|54|74|262|2005||169||||D
Izeta|AVA|54|66|101|1999||175|0|||
Herzog|DEF|54|66|507|2004||186|0|||
Berrocal|DEF|54|66|108|2000||184|0|||
George Honeyman|MED|76|74|147.828.1129.426.568|1994||173||||
Archie Brown|DEF|76|75|351.263.509.465|2002||190||||D
Jordan Storey|DEF|76|70|695.789|1997||188||||
Mattie Pollock|DEF|76|74|921.1130.26.216|2001||190||||
Hassan Kadish|DEF|7|66|46|1992||178|0|||
Ahmed Sharahili|DEF|7|74|46.45.41.60|1994||186|5||30.37.39.52|
Emir Sahiti|AVA|89|74|408.405.1161.542|1998||174|7|145||E
Amir Saipi|GR|89|68|320.1107.981.391|2000||194|7|143||
Ermal Krasniqi|AVA|89|73|517.1131.1051.191.326.806.1050|1998||188|19|145||E
Nene Dorgeles|AVA|100|76|351.318.473.761.767|2002||174|36|||D
Mikkel Rygaard|MED|43|73|429.213.1048.1336.540.613|1990||179||||
Michael Barrios|AVA|33|64|634.1132.250.183.229.499|1991||163||||D
Raúl Loaiza|MED|33|70|506.106.1309.1369.254.771|1994||180||||
Luis Miguel Angulo|AVA|33|65|70.182.206.677.683|2004||174||||
Jamie McGrath|MED|78|68|419.1133.26.273.816.1248.929|1996||175|15|||D
Darragh Lenihan|DEF|78|74|565.146.177|1994||187|4|||
Martin Boyle|AVA|8|72|419.1134.272.1182|1993||172|41|51||D
Nicolas Milanović|MED|8|66|26|2001||185|0|||
Cameron Devlin|MED|8|75|413.832.610.717.922|1998||170|5|||
Alex Grant|DEF|8|73|832.1135.692.825.1136.672.686.1137.610|1994||191||76||
Kye Rowles|DEF|8|74|247.205.167.413|1998||183|25|||
Rafael Delgado|DEF|4|70|254.106.738.296.138.228|1990||178||||
Kevin Gutiérrez|MED|4|66|254|1997||168|0|||
Agustín Lagos|DEF|4|67|917.107.683|2001||184||||
Gastón Benedetti|DEF|4|66|296.1138|2001||185||||
Vicente Taborda|MED|4|68|654.150.683|2001||178|||43|
Agustín Cardozo|MED|4|67|506.1369.382.591.842|1997||182||||D
Justo Giani|AVA|4|64|69.996.107.611.1157|1999||180||||D
Alexis Soto|DEF|4|75|254.734.125.710.738|1993||178||||
Joaquín Tobio Burgos|AVA|4|67|296|2004||177||||
Franco Ibarra|MED|4|71|738.89.108.849|2001||175||||
Gabriel Báez|DEF|4|71|611.182.598|1995||176||||
Maher Carrizo|AVA|4|73|917.32.233|2006||180||||
Gastón Verón|AVA|4|72|206.89.297|2001||184||||
Nelson Insfrán|GR|4|70|382.206|1995||179||||
Bautista Merlini|AVA|4|72|382.771.254.1089.528.683|1995||179||||E
Darío Benedetto|AVA|4|79|150.95.254.226.77.283.553.611.1015.701|1990||178|5||12.49|
Andrés Desábato|GR|4|71|683.917.1139.130.1080|1990||183||||
Emanuel Aguilera|DEF|4|65|254.226.388.438.77.109.773.842|1989||188||||
Nehuén Paz|DEF|4|65|427.1139.611.125.154.1369.241.296.435.486.513.842.1157|1993||191||||
David Schnegg|DEF|165|69|247.318.212.241.1140.501.827.895.918|1998||185|1|||
Reinhold Ranftl|MED|165|72|117.827.836.501.782|1992||180|6|||D
Samuel Şahin-Radlinger|GR|165|72|117.71.129.620.718.757.761|1992||198||||
Nicolas Schmid|GR|165|67|692.148.1140.501|1997||180||||
Niklas Hedl|GR|165|76|718|2001||188|1|||
Pavao Pervan|GR|165|70|933.1140.501|1987||194|7|168||
Michal Sáček|DEF|32|74|401.806.454|1996||175|2|||
Milan Havel|DEF|32|72|902.153|1994||183|5|||
Radek Vitek|GR|32|73|1086.148.168.552.565|2003||198|||47|
Karel Spáčil|DEF|32|69|902.424|2003||189||||
Ringo Meerveld|MED|124|66|414.1141|2002||177||||
Mattijs Branderhorst|GR|124|71|362.589.882|1993||192||||
Wessel Dammers|DEF|124|73|716.354.747.312.362|1995||185||||
Lion Lauberbach|AVA|2|67|471.1142.278.1261.422.895|1998||194||||E
Fabian Bredlow|GR|2|78|298.620.705.318.1143|1995||190||||
Jonas Föhrenbach|DEF|2|75|415.365.451.479|1996||185||||
Filip Bilbija|MED|2|72|750.315.263.408|2000||189||||
Steve Kapuadi|DEF|129|72|517.465.928.931|1998||193|8|58||
Jeremy Ebobisse|AVA|45|73|500.691.1144.756|1997||184|1|||
Nouhou Tolo|DEF|24|70|784.1025|1997||175|48|||
Mehdi Dorval|DEF|5|69|128|2001||176|4|58||
Antoni Kozubal|MED|126|71|514.370|2004||177|1|||
Taras Romanczuk|MED|126|68|454|1991||186|5|153|25|
Jure Balkovec|DEF|53|76|478.65.128.285.416.633|1994||185|41|||
David Zec|DEF|53|74|422|2000||188|9|||
Kristoffer Zachariassen|MED|116|70|352.739|1994||180|3|||
Dennis Johnsen|AVA|116|77|238.32.414.645.652.895|1998||185|1|||D
Kristoffer Haugen|DEF|116|72|901.576|1994||188||||
Aslak Fonn Witry|DEF|116|74|739.268.22.538.1145|1996||178||||
Sondre Langås|DEF|116|74|1145.1146.901.263|2001||180|4|||
Amahl Pellegrino|AVA|116|73|770.531.1147.826.495.251.152.756|1990||190||||E
Jonatan Braut-Brunes|AVA|116|66|715|2000||189|0|||
Jostein Gundersen|DEF|116|71|152.861|1996||186|2|||
Anthony Ralston|DEF|51|77|204.1056.273.814|1998||183|29|||
Kevin Nisbet|AVA|51|74|26.664.1148.1055.1057.419.568.1205|1997||185|11|||
Dominic Hyam|DEF|51|77|935.720.1149.692.1150.236.146|1995||188|4|||
Vladyslav Kabaev|MED|153|66|275|1995||176|0|||
Elliot Stroud|DEF|142|71|572.1151.426|2002||180|6|||
Otto Rosengren|MED|142|72|550.572|2003||178|1|||
Pavle Vagić|DEF|142|73|410.550.1100.572.1152.170.739|2000||188||||
Zeidane Inoussa|AVA|142|70|830.170.429.401.722.759|2002||177||||E
Patrik Carlgren|GR|142|72|600.1082.14.492.613.716|1992||188|1|||
Johan Dahlin|GR|142|77|550.1153.1154.376.566|1986||190|4|||
Jacob Widell Zetterström|GR|142|75|268.263|1998||197|5|||
Patrik Wålemark|MED|142|70|514.429.354.414|2001||184|2||13|D
Sotirios Papagiannopoulos|DEF|142|74|14.1060.233.642.1058|1990||190|5|||
Axel Norén|DEF|142|70|572.1155.1098.369|1999||183||||
Javier Altamirano|MED|29|68|864.1156.296|1999||173|8|||
Mauricio Isla|DEF|29|84|227.871.463.698.553.196.351.357.1157.438|1988||176|145||6.17|
Lawrence Vigouroux|GR|29|75|830.853.1009.532.831.175.526|1993||194|12|76|12.33|
Fernando De Paul|GR|29|66|227|1991||183|0|||
Matías Zaldivia|DEF|29|76|864.95.227|1991||182|1|4||
Giannis Kotsiras|DEF|63|73|654.98|1992||183|3||43.46|
Christos Mouzakitis|MED|63|74|632.426|2006||178|12|||
Fran Tudor|DEF|40|74|715.405|1995||172|3|||
Franko Andrijašević|MED|40|74|465.405.1158.277.592.976.404.919|1991||188|3|||
Marco Pašalić|AVA|40|79|637.157.404|2000||177|20|2||D
Anto Grgić|MED|143|74|320.298.329.338|1996||188||||
Isaac Schmidt|DEF|143|73|923.331.509.516.942|1999||172|5|||
Yanick Brecher|GR|143|72|338.1159|1993||196||||
Gavriel Kanichowsky|MED|83|72|352.542|1997||165|23|||
Jeremía Recoba|MED|157|70|507.598|2003||176||84||E
Camilo Cándido|DEF|157|67|106.1160.185.279.1062.598.773|1995||174||||
Maximiliano Olivera|DEF|157|72|677.356.1103.317.1015|1992||181||||
Thiago Cardozo|GR|157|72|138.677.879|1996||181|1|||
Armando Méndez|DEF|157|72|506.598.1000.1369.611|1996||183||||
Lucas Ferreira|DEF|157|62|254|2000||189||||
Adrián Balboa|AVA|157|66|710.654.252.1062.1068.1052.125.138.255.661.671.709.780.879|1994||186||||
Nicușor Bancu|DEF|132|64|877|1992||182|55|||E
Horațiu Moldovan|GR|132|78|723.191.314.785.870.326.110.781.301|1998||186|16|||
Răzvan Sava|GR|132|73|871.848.191.877|2002||197||||
Artur (1996)|MED|16|73|423.230.834|1996||180||||
Milan Đurić|AVA|21|75|663.1030.209.97.241.238.857.222.168.416.580.764|1990||199|15|||
Rayan Raveloson|MED|98|74|942.855.862.499.15|1997||182|45|||
Cheick Souaré|MED|58|71|902.553|2002||185|||12|
Jonathan Varane|MED|58|73|698.521.736.813|2001||190|6|||
Abdellah Zoubir|AVA|58|73|699.316.419.393.676.521.54|1991||180||||E
Arbnor Muja|AVA|1|73|797.1161.1162.1163.744.769|1998||179|5|145||D
Jean-Pierre Archimbaud|MED|125|66|642|1994||181|0|||
Renzo Garcés|DEF|125|71|1068.1299|1996||180|19|||
Ryan Hedges|AVA|123|74|146.299.830.526.823.26.129.263.939|1995||185|3|76||D
Andrew Hughes|DEF|123|70|695.1164.675|1992||188|5|||
Alonso Martínez|AVA|38|63|609.1165.1166.536|1998||177|31|||D
Shahruddin Magomedaliyev|GR|9|66|699|1994||185|0|||
Brooks Lennon|DEF|45|72|108.1071.532.230.766|1997||173|1||33|D
Griffin Dorsey|DEF|45|62|423.849.637|1999||183||||D
Tristan Blackmon|DEF|45|62|889.1116.500|1996||185|2||42|
Brandon Bye|DEF|45|71|607.691|1995||183||||D
Cole Bassett|MED|45|69|229.1167.354.362.691|2001||180|1||13|
Taylor Booth|MED|45|76|334.133.1230.766.882|2001||173|2|||
Keegan Rosenberry|DEF|45|72|229.678.1114|1993||173||||
Emmanuel Sabbi|AVA|45|74|889.507.420.511.626|1997||175|1|84||D
Emeka Eneli|MED|45|72|1071.766|1999||175|2||42|
Daryl Dike|AVA|45|73|924.637.129|2000||187|10|||
Sean Nealis|DEF|45|72|608.247|1997||193||||
Henry Kessler|DEF|45|72|815.607.212|1998||193|2|||
Lucas Sanabria|MED|122|66|528.1005|1999||175||||
Antonio Candela|DEF|84|72|810.209.285.378.857.886.895|2000||182||||
Pietro Ceccaroni|DEF|84|71|652.650.810.513.760.895|1995||187||||
Luka Gugeshashvili|GR|61|75|642.1016.454.1168.726.699.657.113.402|1999||196|3|||
Niko Sigur|MED|25|79|405.854|2003||180|25|||
Bryan Acosta|MED|72|73|603.1169.189.250.229.374.691|1993||175|70|||
Joël Mall|GR|31|72|786.1170.391.13.87.988.651.942|1991||193|19|143||
Ibrahima Sory Bangoura|MED|68|69|377|2004||182|1|||
Dejan Stojanović|GR|97|72|752.331.154.241.315.451.565.817|1993||196||165||
Imanol Machuca|AVA|99|73|917.360.438.879|2000||170|1|4||D
Yuya Kubo|MED|86|80|221.498.942.465.620|1993||177|13|||
Daiki Hashioka|DEF|86|78|802.539.881.797.158.465|1999||184|12|||
Güray Vural|AVA|152|74|84.257.33.856.374.486|1988||177|1|||D
Volkan Babacan|GR|152|76|131.449.351.486.1171|1988||188|35|||
Kartal Yılmaz|MED|152|73|141.486.953|2000||178||||
Efkan Bekiroğlu|MED|152|71|402.1.65.82.799|1995||185||2||
Bilal Bayazıt|GR|152|69|486.769.907|1999||185||124||
Umut Nayir|AVA|152|72|492.82.639.938.141.176.301.351.385.402.405.670.856.953|1993||191|5|||
Adil Demirbağ|DEF|152|67|492.29.478|1997||185||||
Samet Akaydın|DEF|152|77|180.1047.1172.991.29.351.654.856|1994||190|19||31|
Bence Ötvös|MED|73|67|352|1998||182|3|||
Áron Csongvai|MED|73|72|1074.14.348.763|2000||186|5|||
Botond Balogh|DEF|73|79|490.663|2002||189|8|||
Prince Kwabena Adu|MED|60|70|902.1173.1174.496|2003||180|8|||
Hwang Jae Won|DEF|37|64|248|2002||180|3|||
Song Min Kyu|MED|37|66|458|1999||179|0|||
Cho Gue Sung|AVA|37|66|566|1998||188|0|||
Ali McCann|MED|79|71|695.814|1999||176|33|||
Ciaron Brown|DEF|79|64|641.197.533|1998||185|34|76||
Boris Radunović|GR|145|73|196.711.100.118.128.238.416.764.810|1996||194|||44.59|
Romeo Amane|MED|39|71|718.80.429|2003||176||||
Ousmane Doumbia|MED|39|63|320.786.217.337.338.943|1992||175||||
Etienne Vaessen|GR|141|72|312.707|1995||189|13|124||
Myenty Abena|DEF|141|75|374.253.1175.1066.352.809|1994||184|35|||
Renato Ibarra|AVA|49|81|438.127.721.77.109.226.503.907|1991||180|46||3.58|D
José Quintero|MED|49|70|503.1038|1990||176|4|||
Alexander Alvarado|AVA|49|66|503.637.1038.812.1037|1999||165|4||30|E
Yaimar Medina|MED|49|75|377.438|2004||178|7|||
Jhegson Méndez|MED|49|75|438.637.500.834.283|1997||175|37|||
Alan Minda|AVA|49|75|207.112.438|2003||170|24|||D
Gabriel Cortez|MED|49|70|438.159.1128|1995||179|4|||
Gonzalo Valle|GR|49|75|503|1996||185|4|||
Dimitar Mitov|GR|17|72|26.1176.213.814.817|1997||188|15|||
Cantero|GR|54|66|174|1995||189|0|||
Iza Carcelén|DEF|54|66|245|1993||174|0|||
Guille Rosas|DEF|54|74|813|2000||174||||
Vilarrasa|DEF|54|66|246|1999||183|0|||
Eric Curbelo|DEF|54|72|813.507|1994||173||||
Jordi Quintillà|MED|54|73|331.1177.4.476.1178.132|1993||184||||
Luna|DEF|54|66|72|2003||180|0|||
Caro|GR|54|66|507|1994||184|0|||
Atienza|MED|54|66|174|1999||186|0|||
Eguaras|MED|54|66|869|1992||181|0|||
Magunagoitia|GR|54|66|753|2000||183|0|||
Alkain|MED|54|66|753|1997||174|0|||
Chumi|DEF|54|75|72.127|1999||185||||
Egiluz|DEF|54|66|101|2002||186|0|||
Lalo Aguilar|DEF|54|67|186.67.104|2002||190||||
Saîf-Eddine Khaoui|MED|151|73|727.855.223.544.553.759.862|1995||180|27|58|12|
Keshi Anderson|AVA|76|64|145.243.270.147.155.615.692.831|1995||175||||D
Sydie Peck|MED|76|67|790.628|2004||173||||
Lewie Coyle|DEF|76|74|426.1179.516.1189|1995||173|||17|
Leighton Clarkson|MED|76|76|26.532.146.147|2001||175|||33|
Jed Wallace|AVA|76|73|924.692.934.568.168|1994||178||||D
Daniel Barlaser|MED|76|76|419.610.1086.239.543.565.742|1997||184|||43|
George Tanner|DEF|76|76|552.168.198|1999||181||||
Femi Azeez|AVA|76|72|166.568.720|2001||181|2|||D
Louie Barry|AVA|76|76|790.99.426.447.543.789.824.831|2003||174||||D
Hayden Carter|DEF|76|71|146.177.692|1999||188||||
Karamoko Dembélé|AVA|76|76|698.204.147.818|2003||167||||D
George Edmundson|DEF|76|74|565.628.1180.1181.717.263.447|1997||190||||
Liam Kitching|DEF|76|66|1049.129.236.1179.516.790|1999||191|2||17|
Ali Lajami|DEF|7|78|45.48.41.52|1996||175|27||37.46|
Muhannad Al Shanqeeti|DEF|7|66|46|1999||173|0|||
Ali Majrashi|DEF|7|74|36.60.1182|1999||177|21||37|
Abdulrahman Ghareeb|AVA|7|78|52.36|1997||164|32||30.37|D
Dean James|DEF|75|73|387.336|2000||177|9|124||
Gao Tianyi|MED|30|69|755.1183.122|1998||185|11||19|
Jiang Shenglong|DEF|30|72|755.1137|2000||193|18|||
Zhu Chenjie|DEF|30|73|755|2000||185|42|||
Ousseynou Niang|MED|135|71|875.949|2001||168|3|||
Demba Thiam|GR|135|70|580.760.359.461|1998||202||||
Mory Diaw|GR|135|75|511.647.547.60.223.338.509.736|1993||195|10|58||
Bingourou Kamara|GR|135|71|319.855.702.293.578.666|1996||193|2|58||
Seny Dieng|GR|135|77|565.391.1184.698.823.272.270.113.1181.789|1994||193|9|143||
Pablo Sabbag|AVA|146|71|829.847.36.1068.208.260.296.441.611|1997||189|11|33||
Emiliano Amor|DEF|146|72|227.917.69.254.476.771|1995||183|3|4||
Donat Rrudhani|MED|89|68|329.1170.132.321.509.942|1999||186|19|145||
Meriton Korenica|AVA|89|72|191.1185.1186.1187.1051.339|1996||175|7|||E
Willum Þór Willumsson|MED|82|73|145.984.387.589|1998||193|19|||
Alfons Sampsted|DEF|82|65|145.614.1101.152.334.387|1998||188|23|||
Elías Rafn Ólafsson|GR|82|72|566.311.547|2000||201|15|||
Salim Diakité|DEF|100|65|652.461.1065.841.949|2000||187|8|58||
Amari'i Bell|DEF|85|71|539.145.1188.831.1189.1190.146.213|1994||180|31|76||
Jamal Lowe|AVA|85|64|789.1191.1192.1193.160.692.698.830.929|1994||183|11|76||D
Zak Vyner|DEF|76|71|168.26.1086.684.742.935|1997||178||||
Casper Nielsen|MED|43|76|822.289.626.875.224|1994||179||||
Nicolai Larsen|GR|43|68|796.23.398.613.893|1991||190||||
Emiliano Marcondes|MED|43|73|616.613.160.164.419.557.566|1995||183||||
Mark Brink|MED|43|70|613.289.796|1998||177||||
Isak Jensen|AVA|43|72|22.319.815.835.900|2003||185||||D
Henrik Dalsgaard|DEF|43|76|25.23.949.164.566|1989||192|27|||
Tonni Adamsen|AVA|43|70|796.313.718|1994||181||||
Tobias Salquist|DEF|43|70|613.796.217.420.531.919|1995||190||||
Couhaib Driouech|AVA|102|74|648.414.203.300|2002||175||124||E
Mathys Tourraine|DEF|102|70|736.223.393.662.666|2001||172||58||
Harlen Castillo|GR|33|62|106.671|1993||188||||
Frank Castañeda|AVA|33|70|125.1194.2.437.714|1994||165||||D
Jeison Medina|AVA|33|64|503.259.954.183.261.438.644.1038.779|1995||180||||
Joan Castro|DEF|33|62|106|1997||176||||
Anderson Arroyo|DEF|33|71|174.361.465.66.188.532.573.745|1999||176|||33|
Max O'Leary|GR|78|68|168.793.1083.924|1996||185|2|76||
Will Keane|AVA|78|80|695.552.929.698.789.270.426.447.720|1993||188|5|76|2.10.38.45.54|
Conor Shaughnessy|DEF|78|72|692.720.177.413.516.1188|1996||192|||17|
Nick D'Agostino|AVA|8|66|901|1998||175|0|||
Paul Izzo|GR|8|74|716.31.205.556.937|1995||184|4|||
Anthony Carter|AVA|8|62|776.191.860.28.74.346.544.631.910|1994||192||||
Arno Verschueren|MED|20|71|334.473.588.536.807.919|1997||184||||
Matisse Samoise|MED|20|74|465|2001||180||||
Brian De Keersmaecker|MED|20|69|641.135.168.417|2000||182||||
Kyriani Sabbe|DEF|20|73|224.225|2005||176||||
Louis Verstraete|MED|20|72|114.465.919.744.472|1999||186||||
Gary Magnée|DEF|20|67|207.466|1999||175||||
Jorthy Mokio|MED|20|74|32.465|2008||182|2|||
Antoine Bernier|AVA|20|64|702.744.706.80.529|1997||170||||D
Philippe Rommens|MED|20|73|352.387.1003|1997||175||||
Martin Delavallée|GR|20|67|702|2004||185||||
Hannes Van Der Bruggen|MED|20|66|207|1993||181|0|||
Geoffry Hairemans|MED|20|72|744.253.529.1195.471|1991||184||||
Thibaud Verlinden|AVA|20|72|625.822.224.135.825.155.362.1019.817|1999||173||||D
Christiaan Ravych|MED|20|70|207.377|2002||192||||
Ewoud Pletinckx|DEF|20|72|625.949|2002||190||||
Andrés Herrera|DEF|4|73|230.771.734|1998||180||||
Luciano Gómez|DEF|4|70|435.125.89.382.438|1996||163||||D
Ezequiel Bonifacio|DEF|4|72|435.382.125.427.879|1994||175||||
Leonardo Gil|MED|4|64|427.1196.296.46.182.227.738.892|1991||176||||
Francisco Pizzini|AVA|4|70|917.857.438.1196.182.1128.254|1993||179||||E
Agustín Martegani|MED|4|72|150.771.436.764|2000||183||||
Iván Gómez|MED|4|68|206.296.683.611|1997||180||||
Felipe Peña Biafore|MED|4|65|506.95.1369.734|2001||185||||
Néstor Breitenbruch|DEF|4|71|69.438.996.95.107.254.388.843|1995||178||||
Franco Zapiola|MED|4|69|683.296|2001||173||||
Leonardo Jara|DEF|4|75|388.296.150.247.917.1091.1369|1991||178||||
Adrían Spörle|DEF|4|66|138|1995||182|0|||
Ulises Ortegoza|MED|4|67|182.383.627.710|1997||178|1|||
Gaspar Gentile|AVA|4|67|1068.1002|1995||183||||D
Ignacio Schor|AVA|4|65|683.611.1008|2000||183||||D
Aarón Quirós|DEF|4|71|917.1305.125|2001||178||||
Franco Watson|MED|4|65|506.1369.427.439|2002||177||||
David Barbona|MED|4|68|254.296.107.226.701.710|1995||179||||
Baltasar Rodríguez|MED|4|73|442.710.296|2003||173||||
Walter Mazzantti|AVA|4|66|438.842.1156.427.611|1996||173||||D
Ramiro Enrique|AVA|4|71|49.125.637|2001||171||||
Agustín Ojeda|AVA|4|71|609.710|2004||169||||D
Jorge Carranza|GR|4|66|69.228.1002.388.439.1008.1196|1981||187||||
Ramón Ábila|AVA|4|66|427|1989||177|0|||
Guido Villar|GR|4|63|438.1196.130|1998||192||||
Rodrigo Cabral|AVA|4|70|427.89.1061|2000||170||||E
Joaquín Laso|DEF|4|64|842.1197.89.438.738.772.917|1990||185||||
Florián Monzón|AVA|4|67|917.1091.109.206.683.1144.842|2001||185||||
Kevin Lomónaco|DEF|4|71|438.1369.283.683.704.842|2002||192||||
Fabián Noguera|DEF|4|71|125.955.296.384.598.611.688.777|1993||193|||28|
Manfred Fischer|MED|165|64|117.752.836|1995||179||||
Matthäus Taferner|MED|165|71|918.274.932|2001||170||||
Raphael Sallinger|GR|165|73|419.0.836.932|1995||196||||
Raul Florucz|AVA|165|73|875.592.1043.1211|2001||182|3|||D
Nikolas Sattlberger|MED|165|71|377.718|2004||189||||
Nicolas Wimmer|DEF|165|62|932.3.148.1221|1995||190||||
Roman Květ|MED|32|66|340.1198.153.799.902|1997||187||||
Patrik Vydra|DEF|32|70|806.573|2003||190||||
Patrik Hellebrand|MED|32|71|401.347.803.802.1041.179.493|1999||180|1|||
Václav Jurečka|AVA|32|72|180.1041.803.802.126|1994||182|9|||
Aleš Matějů|DEF|32|74|810.165.1198.902.166.652.895|1996||184|15|||
Kryštof Daněk|MED|32|69|501.795.806.660|2003||182|2|||
Štěpán Chaloupek|DEF|32|73|802.840|2003||190|9|||
Lukáš Hejda|DEF|32|72|902.806.1198.453|1990||188|1|||
Opa Sangante|DEF|70|66|869|1991||188|0|||
Dirk Proper|MED|124|72|589.414|2002||181||||
Andreas Müller|MED|2|70|479.302|2000||173||||
Calvin Brackelmann|DEF|2|65|750.115.315|1999||196||||
Maurice Malone|AVA|2|71|827.115.117.132.415.569.932|2000||186||||
Matheo Raab|GR|2|69|874.0.408|1998||186||||
Gerrit Nauber|DEF|2|63|387.1199.1329.1184.762|1992||185||||
Jackson Muleka|AVA|129|75|492.822.49.141.484|1999||180|16|||
Mouhamed Belkheir|AVA|5|67|505.362.520.848.904|1999||185||58||D
Łukasz Łakomy|MED|126|71|625.942.944|2001||181||||
Radosław Murawski|MED|126|75|514.652.680.257|1994||173||||
Dominik Marczuk|AVA|126|66|221.454.766|2003||180|1|||D
Michał Helik|DEF|126|75|641.1200.237.129.425|1995||191|7|||
David Brekalo|DEF|53|74|637.901|1998||188|32|||
Anthony Dennis|MED|115|70|402.47|2004||179||||
Moses Usor|AVA|115|71|501.802|2002||181|2|||D
Chibuike Nwaiwu|DEF|115|73|932.1313.856|2003||193|3|||
Adrian Nilsen Pereira|DEF|116|72|739.642.901|1999||185|||9|
Sondre Fet|MED|116|66|152|1997||177|0|||
Vetle Dragsnes|MED|116|66|757.1147.531.702|1994||187||||
Conrad Wallem|MED|116|71|815.1097.802|2000||180||||
Fredrik Gulbrandsen|AVA|116|74|576.531.29.131.608.767|1992||178|3|||
Stian Gregersen|DEF|116|74|108.156.284.495.550.576|1995||191|11|||
Odin Luraas Bjørtuft|DEF|116|66|152|1999||188|0|||
Egil Selvik|GR|116|74|921.1097.412.818.871|1997||187|9|||
Brede Mathias Moe|DEF|116|71|152.1145.739|1991||184||||
Karol Mets|DEF|55|75|817.14.1201.901.40.195.338.588.898|1993||191|107|||
Orlando Mosquera|GR|121|75|42.542.1047|1994||191|52|||
Eduardo Guerrero|AVA|121|63|275.1202.542.948|2000||177|22|||
Aníbal Godoy|MED|121|73|770.1203.388.1034.756.603|1990||182|160|||
Kal Naismith|DEF|51|71|539.717.1204.664.1086.692.168.929|1992||186||||
Nicky Cadden|AVA|51|71|419.583.1055.129.1049.533|1996||178||||D
Graeme Shinnie|MED|51|75|26.444.263.929|1991||175|6|||
Daniel Armstrong|AVA|51|71|308.1057.1205.740.489.934|1997||175||76|39|D
James Penrice|DEF|51|69|12.664.533.413.717|1998||177||||
Zander Clark|GR|51|71|413.814.1206.1207.270|1992||191|4|||
Siriki Dembélé|AVA|51|72|641.1130.675.15.145.160|1996||173||39||D
Nazar Voloshyn|AVA|153|75|275.496|2003||175|6|||D
Taras Mykhavko|DEF|153|75|275.646|2005||185|3|169||
Jamie Roche|MED|142|68|509.798.470|2001||191||||
Linus Wahlqvist Egnell|DEF|142|75|685.274.614|1996||183|16|||
Oliver Dovin|GR|142|70|410.1208.236.526|2002||188|2|76||
Noel Törnqvist|GR|142|66|572.1152.232.580|2002||197||||
Fernando Cornejo|MED|29|66|503|1996||174|0|||
Esteban Pavez|MED|29|69|227.102.1036.51.1068.226|1990||179|18|||
Cristopher Toselli|GR|29|74|864.1157.109.206.1011|1988||183|9||17|
Luciano Cabral|MED|4|71|438.89.102.527|1995||170|3|||
Francisco Sierralta|DEF|29|75|15.871.663.1157.285.390.1011.680.921|1997||192|20|||
Panos Katseris|DEF|63|71|319.1027.1122|2001||183||||
Stavros Pilios|DEF|63|71|12.448.643|2000||175|5|||
Stanko Jurić|MED|40|74|886.405.1158.663|1996||189||||
Šimun Hrgović|DEF|40|70|405|2004||173||||
Jakov Medić|DEF|40|63|616.1209.32.591.620.817.882.898|1998||193||||
Zoran Arsenić|DEF|40|67|715.930.1210.594.1211.404.454.517|1994||187||||
Niko Galešić|DEF|40|72|277.404|2001||182||2||
Sandro Lauper|MED|143|73|942.332|1996||185||||
Numa Lavanchy|DEF|143|71|329.509.320.391|1993||174||||
Christian Witzig|MED|143|71|331|2001||178|1|||
David von Ballmoos|GR|143|73|320.337.942|1994||192||||
Giotto Morandi|MED|143|69|786.1107.391|1999||182||||
Jérémy Frick|GR|143|71|786.541|1993||192||||
Matteo Di Giusto|AVA|143|73|321.1212.337.338|2000||166||||
Benjamin Siegrist|GR|143|78|378.99.177.1176.1083.1212.936.273.204.326|1992||194||||
Risto Radunović|DEF|109|76|339.1213.1214|1992||184|45|||
Ramzi Safuri|MED|83|71|84.986|1995||184|17|||D
Vicente Poggi|MED|157|72|388.255.605|2002||171||||
Jesús Trindade|MED|157|70|677.710.235.649|1993||176||||
Mauricio Pereyra|MED|157|76|597.598.494.637.1369|1990||165||||
Pedro Milans|DEF|157|63|677.234|2002||172||||
Diego García|MED|157|63|677.967.182.1128.296.1062|1996||168||||
Rubén Bentancourt|AVA|157|72|89.979.100.1305.154.967.254.255.437.1062.598.659.677|1993||186||||
Alejo Cruz|AVA|157|64|677.111.252.710|2000||169||||E
Bruno Damiani|AVA|157|68|678.598.967|2002||185|2|||
Gonzalo Pérez|DEF|157|70|506.1369.1062|2001||185||||
Agustín Rogel|DEF|157|76|418.598.296.443.468.854|1997||191|1||17|
Robert Taylor|MED|57|75|116.14.1192.442.499.983.757.861|1994||181|34|||E
Cătălin Cîrjan|MED|132|72|308.326.93|2002||174|4||16|
Valentin Cojocaru|GR|132|73|685.339.241.366.87.335.1215.749.354.625|1995||195|||13|
Ștefan Baiaram|AVA|132|71|877|2002||185|6|||D
Mihai Popescu|DEF|132|74|339.308.1216.1215.816.413.409.335|1993||188|8|||
Saulo Mineiro|AVA|16|72|755.995.202.941|1997||180||||
Alex Roldan|DEF|48|73|784.1025|1996||178|25|45||
Edgaras Utkus|DEF|93|73|207.49.587|2000||187|30||34|
Tom Ducrocq|MED|58|71|746.521.398|1999||176||||
Dylan Chambost|MED|58|71|230.862.763|1997||177||||
Alec Georgen|DEF|58|79|869.647.15.319|1998||172|||4.58|
Élie Youan|AVA|58|73|419.600.331.471.930|1999||181|||44.52|
Teddy Okou|AVA|58|67|58.321.509.511.530.866.867|1998||166||||D
Brice Maubleu|GR|58|71|763.393.855.666|1989||192||||
Pierrick Capelle|MED|58|71|81.1217.1218.223|1987||180||||
Giovanni Haag|MED|58|71|727.19.302.368.736|2000||180||||
Léo Pétrot|DEF|58|74|283.80.319.763|1997||188||||
Cristian Shpendi|AVA|1|67|209|2003||181|4|84||
Raymond Kopa|MED|58|88|81.820.721|1931||168|45||0.3.4.58|D
Luis Suárez Miramontes|MED|54|86|262.1219.127.440.768|1935||176|32||0.3.6.8.58|
Omar Sívori|AVA|4|89|734.463.601|1935||163|28||0.6|
Josef Masopust|MED|22|80|840.271.1220|1931||177|63|32|0|
Denis Law|AVA|51|90|425.551.848.552|1940||175|55||0.2.58|
Oleg Blokhin|AVA|156|88|275.1221.1222|1952||180|112|153|0|E
Allan Simonsen|AVA|43|88|893.158.127.213|1952||166|55||0.5.59|D
Igor Belanov|AVA|156|86|1223.220.275.158.278.322|1960||173|33|153|0|
Jean-Pierre Papin|AVA|58|88|885.224.553.7.133.156.398.1224|1963||177|54||0.4.6.19.58.59|
Matthias Sammer|DEF|2|89|274.298.440.157|1967||181|74||0.5.8.58|
Kevin Keegan|AVA|76|88|783.532.408.805.610.1225|1951||173|63||0.2.5.58.59|
Paolo Rossi|AVA|84|91|463.232.1226.673.7.416|1956||174|48||0.6.58.60|
Stanley Matthews|AVA|76|87|825.1227.147.849|1915||174|71||0|D
Michael Ballack|MED|2|89|1228.0.524.133.215|1976||189|98||2.5.11.29.31.50|
Alan Shearer|AVA|76|85|805.146.610|1970||183|63||2|
Gary Lineker|AVA|76|87|518.299.127.853.599|1960||177|80||22|
Mario Kempes|AVA|4|85|439.738.888.734.430.1229.1230.1231.1232.1233|1954||182|43||60|
Frank Rijkaard|MED|124|91|32.812.779.7|1962||190|73||6.8.14.19.22.54.58|
Dino Zoff|GR|84|87|871.987.601.463|1942||182|112||6.8.59.60|
Giuseppe Meazza|AVA|84|86|440.7.463.890.100|1910||170|53||6.60|
Filippo Inzaghi|AVA|84|87|729.679.1234.416.663.100.463.7|1973||182|57||6.11.58.60|
Davor Šuker|AVA|40|86|594.277.787.721.93.925.1|1968||181|70||3.15.19.58|
Gennaro Gattuso|MED|84|87|673.717.764.7.329|1978||177|73||6.11.58.60|
Bebeto|AVA|16|84|279.280.357.892.262.242.787.159.1235.482.46|1964||174|75||60|
Roy Keane|MED|78|86|1236.617.552.204|1971||178|67||2.10.58|
Paul Breitner|DEF|2|88|133.721.278|1951||176|48||3.5.8.58.60|
Fabien Barthez|GR|58|89|854.553.587.552.600|1971||180|87||2.4.8.10.58.60|
Rudi Völler|AVA|2|86|1237.1.923.737.553.524|1960||179|93||4.58.60|
Rivelino|MED|16|85|234.358.45|1946||169|92||60|E
Kenny Dalglish|AVA|51|87|204.532|1951||173|102||2.10.58|
Just Fontaine|AVA|58|81|1238.612.820|1933||174|21|102|4|
Carlos Valderrama|MED|33|82|1239.567.260.578.886.436.459.1240.1241.229|1961||177|111|||
Andreas Brehme|DEF|2|86|1242.1243.0.133.440.779|1960||176|86||5.6.59.60|
Gordon Banks|GR|76|84|1245.518.1246.825.1247.1248.1249|1937||183|73||60|
Robert Pires|MED|58|86|820.323.553.93.905.99.1250|1973||185|79||2.8.15.60|E
Paul Gascoigne|MED|76|84|610.853.510.717.565.299.175.1251.1252|1967||177|61|||
Henrik Larsson|AVA|142|87|1253.1100.354.204.127.552.1254|1971||177|107||3.10.58|
Gigi Riva|AVA|84|83|663.1255.196|1944||180|42||6.8|
Dragan Stojković|MED|88|83|713.294.553.416.599|1965||173|84|145|4.15.20|
Bixente Lizarazu|DEF|58|86|156.1256.101.133.647.553|1969||169|98||5.8.58.60|
Zbigniew Boniek|MED|126|85|1257.928.463.737|1956||180|80||6.58|
Jari Litmanen|MED|57|85|1258.1017.32.1259.127.532.1260.1261.550.367|1971||181|137||54.58|
Edgar Davids|MED|124|86|32.7.463.440.127.853.243.1192|1973||168|74|141|6.11.14.37.54.58.59|
Roger Milla|AVA|24|82|1262.1263.1264.885.587.746.763.578.1224.1265.1232.1266|1952||176|77|||
Fritz Walter|MED|2|82|1267.0.1268|1920||175|61||60|
Daniel Passarella|DEF|4|85|780.734.356.440|1953||177|70||60|
Careca|AVA|16|85|396.834.601.483.777.1269.1270.1271|1960||182|64||6.44.59|
Bobby Moore|DEF|76|84|925.367.1272.566.1273|1941||177|108||60|
Berti Vogts|DEF|2|87|158|1946||168|96||5.8.59.60|
Pierre Littbarski|AVA|2|83|1212.1274.231.1275.452.1276|1960||168|74||60|D
Juan Sebastián Verón|MED|4|85|296.150.768.663.510.552.215.440.1277.1278|1975||186|72||2.6.10.17.31.37.44.51.59|
Gianluca Zambrotta|DEF|84|86|232.128.463.127.7.1279|1977||181|98||6.11.19.60|
Peter Shilton|GR|76|85|518.825.617.805.263.684.1280.155.236.925.526|1949||183|125||2.58|
Osvaldo Ardiles|MED|4|84|439.138.427.853.647.1281.698.146.1249.831|1952||169|51||60|
Christian Vieri|AVA|84|85|694.848.681.1282.895.100.463.110.510.440.7.587.356.768|1973||185|49||6.11.37|
Sepp Maier|GR|2|88|133|1944||183|95||5.8.58.60|
Johan Neeskens|MED|124|87|1283.32.127.1284.312.1285.1286.1287|1951||173|49||58|
Gianluca Vialli|AVA|84|85|238.768.463.215|1964||180|59||6.14.58.59|
Giacinto Facchetti|DEF|84|86|440|1942||188|94||6.8.58|
Uwe Seeler|AVA|2|85|408.1288|1936||170|72|||
Sándor Kocsis|AVA|73|84|352.1034.1289.127|1929||0|68||3|
Sol Campbell|DEF|76|85|925.853.93.692.1084.610|1974||188|75||2.15.19|
Ian Rush|AVA|123|86|1290.532.463.516.610.935.790.1291|1961||180|73||2.58|
Gunnar Nordahl|AVA|142|85|256.1292.7.737.1293.614|1921||180|33||6|
Giuseppe Bergomi|DEF|84|85|440|1963||183|81||6.14.59.60|
Djalma Santos|DEF|16|83|693.653.102|1929||172|98||60|
Paulo Roberto Falcão|MED|16|83|443.737.834|1953||183|28||6|
Nílton Santos|DEF|16|82|159|1925||180|75||60|
Gianfranco Zola|AVA|84|85|1294.1295.601.663.215.196|1966||168|37||6.14.44.59|
Didi|AVA|16|84|1296.1297.1298.358.159.721.1299.1300.834|1929||174|68||58.60|
David Seaman|GR|76|85|516.675.145.698.93.551|1963||193|81||2.15|
Andy Cole|AVA|76|85|93.367.168.610.552.146.551.692.828.145.175.617|1971||178|16||2.10.58|
Paco Gento|AVA|54|87|1301.1302.709.721|1933||168|43||3.58|E
Oliver Bierhoff|AVA|2|86|1303.408.158.767.97.871.7.587.218|1968||191|70||6.8.24|
Marc Overmars|AVA|124|86|387.32.93.127|1973||173|86||2.15.54.58|E
Hugo Sánchez|AVA|111|90|865.1304.110.721.77.719.1305.501.1306.250.1307.1308|1958||174|58||3.59|
José Luis Chilavert|GR|122|81|1006.1089.771.779.917.293.677|1965||188|74||17|
René Higuita|GR|33|80|886.1309.106.1300.436.1310.459.671.1038.733.1311.1312.567|1966||172|68|||
Nwankwo Kanu|AVA|115|85|1313.32.440.93.924.692|1976||197|86||2.15.54.58.59|
Salvatore Schillaci|AVA|84|88|1314.463.440.974.1315|1964||173|17||59|
Hakan Şükür|AVA|152|84|1316.176.371.848.440.663.146|1971||191|112||59|
Ali Daei|AVA|80|83|1317.963.59.91.133.418.1318.1319.1274|1969||192|148||5|
Andrey Arshavin|AVA|134|85|947.93.497.1320|1981||172|75||12.15.59|E
Robinho|AVA|16|87|777.721.551.7.1321.112.799.131|1984||172|100||3.6.19.28.37.50|E
Emmanuel Adebayor|AVA|149|86|323.587.93.551.721.853.243.131.486.1015.1322|1984||191|87||12.15.24.31.37.42|
Klaas-Jan Huntelaar|AVA|124|85|1323.648.253.1324.414.32.721.7.782|1983||186|76||54|
Dirk Kuyt|AVA|124|86|882.354.532.351.1325|1980||184|104||43.54|D
Rafael van der Vaart|MED|124|86|32.408.721.853.142.566.289|1983||176|109||54|
Ole Gunnar Solskjær|AVA|116|87|1326.576.552|1973||179|67||2.10.58|
Robbie Keane|AVA|78|85|934.236.440.516.853.532.204.925.499.99.1327|1980||175|146||43|
Dimitar Berbatov|AVA|17|86|195.1328.524.1329.853.552.367.587.642.1330|1981||189|78||2.10.34|
Teddy Sheringham|AVA|76|85|568.268.1150.617.853.552.692.925.1331.823|1966||185|51||2.10.58|
Luís Fabiano|AVA|16|83|689.731.834.325.787.1137.892|1980||185|45||50.59|
Milan Baroš|AVA|32|85|126.532.99.541.692.371.84.573.804|1981||184|93||4.43.58|
Eiður Guðjohnsen|AVA|82|86|1332.648.1333.155.215.127.587.853.825.367.12.207.224.1334.576.1335|1978||187|88||2.3.26.31.44.58|
Leonardo|MED|16|86|357.834.888.482.647.7|1969||178|55||6.11.19.58.60|E
Grzegorz Lato|AVA|126|78|821.469.1305|1950||175|100|||D
Kazimierz Deyna|MED|126|82|517.1336.1337.551.1304|1947||180|97|||
Raí|MED|16|83|1338.689.834.647|1965||189|49||4.60|
Juan Alberto Schiaffino|MED|157|85|677.7.737|1925||175|25||6.60|
Obdulio Varela|MED|157|81|1103.677|1917||178|45||60|
Enzo Francescoli|MED|157|82|1103.734.1275.553.196.848|1961||181|73||4.44|
Leônidas|AVA|16|83|1339.1340.677.892.159.1341.357.834|1913||173|19|||
Silvio Piola|AVA|84|84|696.510.848.463.618|1913||178|40||60|
Sandro Mazzola|MED|84|86|440|1942||179|70||6.8.58|
Teófilo Cubillas|MED|125|81|1068.132.325.1249.1285.1342|1949||173|81|||
Elías Figueroa|DEF|29|80|1103.1343.677.443.1011.227.1249|1946||183|47|||
Gaetano Scirea|DEF|84|85|100.463|1953||178|78||6.58.59.60|
Alessandro Costacurta|DEF|84|86|580.7|1966||182|59||6.11.14.19.58|
Claudio Gentile|DEF|84|85|1344.890.463.356.679|1953||178|71|95|6.59.60|
Ruud Krol|DEF|124|84|32.1345.601.1346|1949||184|83||58|
Günter Netzer|MED|2|87|158.721.391|1944||178|37||3.5.8.60|
Wolfgang Overath|MED|2|82|231|1943||176|81||5.60|
Bernd Schuster|MED|2|86|231.127.721.110.524.865|1959||181|21||3.8|
Gerson|MED|16|83|357.159.834.358|1941||170|70||60|
Tostão|AVA|16|81|78.242.892|1947||170|54||60|
Uli Hoeneß|AVA|2|86|133.620|1952||180|35||5.8.58.60|
Emilio Butragueño|AVA|54|86|1347.1348.721.1307.1308|1963||168|69||3.59|
Míchel|MED|54|85|1348.721.1307|1963||183|66||3.59|D
Andoni Zubizarreta|GR|54|86|1349.725.66.144.101.127.1256.888|1961||187|130||3.22.44.58|
Rinat Dasayev|GR|156|82|1350.1351.809.787|1957||187|91|134||
Walter Zenga|GR|84|89|764.440.1352.1353.768.650.607|1960||188|58||6.14.59|
Jean-Marie Pfaff|GR|20|84|1354.133.529.856|1953||180|64||5|
Cláudio Taffarel|GR|16|83|285.729.443.663.728.112.371|1966||180|101||59.60|
Ricardo Zamora|GR|54|85|1355.291.127.721.612|1901||181|46||3|
Geoff Hurst|AVA|76|83|1356.1357.925.1358.1227.825.1359.924.1273.1288|1941||0|56||60|
Rui Costa|MED|127|86|140.1360.356.7|1972||180|94||6.7.11.25.44.50.58|
Jens Lehmann|GR|2|86|782.7.157.93.298|1969||191|61||2.5.6.15.29.59|
Jerzy Dudek|GR|126|85|1361.1362.354.532.721|1973||187|60||3.31.43.58|
Rüştü Reçber|GR|152|84|84.351.127.141|1973||186|120||29|
Laurent Blanc|DEF|58|86|578.601.622.763.15.127.553.440.552|1965||192|97||2.4.8.10.44.60|
Marco Materazzi|DEF|84|86|510.1314.1363.857.673.199.299.440.1364|1973||193|41||6.31.37.43.58.60|
Tony Adams|DEF|76|85|93|1966||191|70||2.15|
Sami Hyypiä|DEF|57|86|1365.1259.532.524|1973||195|105||43.58.59|
Roberto Ayala|DEF|4|85|1002.734.601.7.888.779.905.710|1973||177|116||3.6.17.43.44.59|
Frank de Boer|DEF|124|86|32.127.371.57.717.954|1970||179|112||54.58.59|
Siniša Mihajlović|DEF|160|84|1366.911.294.737.768.510.440|1969||183|63|40|6.37.58|
Jürgen Kohler|DEF|2|87|1367.231.133.463.157|1965||186|105||5.6.8.58.59.60|
Esteban Cambiasso|MED|4|86|1348.438.734.721.440.518.632|1980||177|52||3.6.17.20.23.31.37.38.40.43.44.58|
Mark van Bommel|MED|124|86|362.648.127.133.7|1977||186|79||3.5.54.58|
Phillip Cocu|MED|124|86|22.907.648.127.47|1970||185|101||3.54|
Torsten Frings|MED|2|83|1368.923.157.133.849|1976||182|84||5.29|
Guti|MED|54|86|1347.721.1348.141|1976||185|13||3.19.20.23.58|
Mauro Camoranesi|MED|84|85|69.778.125.1103.185.416.463.298.1369.710|1976||174|55|4|6.19.24.44.60|D
Youri Djorkaeff|MED|58|85|393.293.587.647.440.0.155.146.608|1968||178|84||8.15.59.60|
Hidetoshi Nakata|MED|86|84|792.673.737.663.154.356.155|1977||175|77||6.19|
Park Ji-sung|MED|37|87|498.648.552.698|1981||173|100||2.10.58|
Emre Belözoğlu|MED|152|84|371.440.610.351.110.131|1980||170|101||37.51.59|
Eric Abidal|DEF|58|87|1370.587.530.541.127.632|1979||186|67||3.4.24.26.44.58|
Christian Panucci|DEF|84|86|378.7.721.440.215.587.737.663|1973||184|57||6.14.19.44.58|`.split("\n").map(l=>{const[n,p,c,r,cl,by,ft,h,caps,born,tg,w]=l.split("|");return{n,p,c:NATS[c],r:+r,cl:cl?cl.split(".").map(i=>CLUBS[i]):[],by:+by,ft,h:+h,caps:+caps,born:born?NATS[born]:"",tg:tg?tg.split(".").map(i=>TAGS[i]):[],w:w||""}});
const COACHES=[
 {n:"José Mourinho",f:"4-2-3-1",t:"contra"},
 {n:"Guardiola",f:"4-3-3",t:"posse"},
 {n:"Klopp",f:"4-3-3",t:"pressao"},
 {n:"Alex Ferguson",f:"4-4-2",t:"alas"},
 {n:"Ancelotti",f:"4-3-3",t:"equilibrio"},
 {n:"Zidane",f:"4-3-3",t:"estrelas"},
 {n:"Simeone",f:"4-4-2",t:"bloco"},
 {n:"Conte",f:"3-5-2",t:"intensidade"},
 {n:"Jorge Jesus",f:"4-4-2",t:"ofensivo"},
 {n:"Fernando Santos",f:"4-3-3",t:"bloco"},
 {n:"Rúben Amorim",f:"3-4-3",t:"pressao"},
 {n:"Scolari",f:"4-2-3-1",t:"quimica"},
 {n:"Cruyff",f:"3-4-3",t:"ofensivo"},
 {n:"Arsène Wenger",f:"4-4-2",t:"ofensivo"},
 {n:"Arrigo Sacchi",f:"4-4-2",t:"pressao"},
 {n:"Luis Enrique",f:"4-3-3",t:"posse"},
 {n:"Sérgio Conceição",f:"4-4-2",t:"intensidade"},
 {n:"Abel Ferreira",f:"3-5-2",t:"contra"},
 {n:"Xabi Alonso",f:"3-4-3",t:"posse"},
 {n:"Del Bosque",f:"4-3-3",t:"equilibrio"}
];
