const cities = [`New%20York%2C%20NY`,
`Los%20Angeles%2C%20CA`,
`Chicago%2C%20IL`,
`Miami%2C%20FL`,
`Dallas%2C%20TX`,
`Houston%2C%20TX`,
`Philadelphia%2C%20PA`,
`Atlanta%2C%20GA`,
`Washington%2C%20DC`,
`Boston%2C%20MA`,
`Phoenix%2C%20AZ`,
`Detroit%2C%20MI`,
`San%20Francisco%2C%20CA`,
`Seattle%2C%20WA`,
`San%20Diego%2C%20CA`,
`Minneapolis%2C%20MN`,
`Tampa%2C%20FL`,
`Brooklyn%2C%20NY`,
`Denver%2C%20CO`,
`Queens%2C%20NY`,
`Baltimore%2C%20MD`,
`Las%20Vegas%2C%20NV`,
`St.%20Louis%2C%20MO`,
`Riverside%2C%20CA`,
`Portland%2C%20OR`,
`San%20Antonio%2C%20TX`,
`Sacramento%2C%20CA`,
`San%20Juan%2C%20PR`,
`San%20Jose%2C%20CA`,
`Orlando%2C%20FL`,
`Cleveland%2C%20OH`,
`Pittsburgh%2C%20PA`,
`Manhattan%2C%20NY`,
`Austin%2C%20TX`,
`Cincinnati%2C%20OH`,
`Indianapolis%2C%20IN`,
`Kansas%20City%2C%20MO`,
`Columbus%2C%20OH`,
`Charlotte%2C%20NC`,
`Virginia%20Beach%2C%20VA`,
`Bronx%2C%20NY`,
`Milwaukee%2C%20WI`,
`Providence%2C%20RI`,
`Jacksonville%2C%20FL`,
`Salt%20Lake%20City%2C%20UT`,
`Nashville%2C%20TN`,
`Raleigh%2C%20NC`,
`Memphis%2C%20TN`,
`Richmond%2C%20VA`,
`Louisville%2C%20KY`,
`New%20Orleans%2C%20LA`,
`Port%20Arthur%2C%20TX`,
`Sugar%20Land%2C%20TX`,
`Hampton%2C%20VA`,
`Dublin%2C%20GA`,
`Oklahoma%20City%2C%20OK`,
`Jersey%20City%2C%20NJ`,
`Concord%2C%20CA`,
`Streator%2C%20IL`,
`Winter%20Haven%2C%20FL`,
`Jensen%20Beach%2C%20FL`,
`Towanda%2C%20IL`,
`Madison%20Heights%2C%20MI`,
`Lake%20St.%20Louis%2C%20MO`,
`Norwood%2C%20OH`,
`Hagerstown%2C%20MD`,
`Woodland%2C%20CA`,
`Burlington%2C%20NC`,
`Pleasant%20Grove%2C%20AL`,
`Cascade-Chipita%20Park%2C%20CO`,
`El%20Dorado%20Hills%2C%20CA`,
`Bel%20Air%20South%2C%20MD`,
`Abilene%2C%20TX`,
`Ty%20Ty%2C%20GA`,
`Bridgeport%2C%20CT`,
`Lubbock%2C%20TX`,
`Brundidge%2C%20AL`,
`Topeka%2C%20KS`,
`Galt%2C%20CA`,
`Spring%20Valley%2C%20NV`,
`On%20Top%20of%20the%20World%20Designated%20Place%2C%20FL`,
`Muskegon%2C%20MI`,
`Haywood%2C%20OK`,
`DeBordieu%20Colony%2C%20SC`,
`El%20Centro%2C%20CA`,
`Kingsland%2C%20GA`,
`West%20Haverstraw%2C%20NY`,
`Sunnyvale%2C%20CA`,
`Cherokee%2C%20NC`,
`Barron%2C%20WI`,
`Glendale%2C%20CA`,
`Little%20Rock%2C%20AR`,
`Santa%20Maria%2C%20CA`,
`Santa%20Barbara%2C%20CA`,
`West%20Valley%20City%2C%20UT`,
`McLean%2C%20VA`,
`Berea%2C%20NE`,
`Abram%2C%20TX`,
`Elizabeth%2C%20NJ`,
`Clearwater%2C%20FL`,
`El%20Monte%2C%20CA`,
`Deltona%2C%20FL`,
`Fullerton%2C%20CA`,
`Henderson%2C%20NV`,
`Harrisville%2C%20WV`,
`Tickfaw%2C%20LA`,
`West%20Point%2C%20IL`,
`McAllen%2C%20TX`,
`Fort%20Worth%2C%20TX`,
`West%20Jordan%2C%20UT`,
`Huntington%2C%20WV`,
`Olive%20Branch%2C%20MS`,
`Duluth%2C%20MN`,
`East%20New%20Market%2C%20MD`,
`Norman%2C%20OK`,
`Plano%2C%20TX`,
`North%20Aurora%2C%20IL`,
`Rome%2C%20IA`,
`Garden%20Grove%2C%20CA`,
`Oroville%2C%20WA`,
`Severn%2C%20MD`,
`Shorewood%2C%20WI`,
`Oracle%2C%20AZ`,
`Security-Widefield%2C%20CO`,
`Lott%2C%20TX`,
`Des%20Allemands%2C%20LA`,
`Melbourne%2C%20FL`,
`Bangor%2C%20CA`,
`Peoria%2C%20IL`,
`Turlock%2C%20CA`,
`Huntsville%2C%20AL`,
`Upland%2C%20CA`,
`York%2C%20PA`,
`Canton%2C%20OH`,
`Vista%2C%20CA`,
`Mauldin%2C%20SC`,
`Espa??ola%2C%20NM`,
`Columbia%2C%20MO`,
`Morro%20Bay%2C%20CA`,
`Bunnell%2C%20FL`,
`Lanesville%2C%20IN`,
`Nicholasville%2C%20KY`,
`Olathe%2C%20KS`,
`Tuscaloosa%2C%20AL`,
`Lubeck%2C%20WV`,
`Reading%2C%20PA`,
`Independence%2C%20MO`,
`Dawson%2C%20TX`,
`Fayetteville%2C%20NC`,
`Clarksburg%2C%20WV`,
`New%20Haven%2C%20CT`,
`Erie%2C%20PA`,
`Plainview%2C%20TX`,
`Costa%20Mesa%2C%20CA`,
`Buffalo%2C%20NY`,
`Youngsville%2C%20LA`,
`Fife%2C%20WA`,
`North%20Miami%2C%20FL`,
`Murfreesboro%2C%20TN`,
`Commerce%2C%20CA`,
`Elbert%2C%20CO`,
`Indio%2C%20CA`,
`Provo%2C%20UT`,
`Overland%20Park%2C%20KS`,
`Auburn%2C%20WV`,
`Pueblo%2C%20CO`,
`Seelyville%2C%20IN`,
`Lansing%2C%20MI`,
`Los%20Banos%2C%20CA`,
`Davie%2C%20FL`,
`College%20Station%2C%20TX`,
`Birmingham%2C%20AL`,
`Corvallis%2C%20OR`,
`Murrieta%2C%20CA`,
`Pomona%2C%20CA`,
`Hickory%2C%20NC`,
`Conneaut%2C%20OH`,
`Venedy%2C%20IL`,
`Sheboygan%2C%20WI`,
`Kent%2C%20WA`,
`Gilbert%2C%20AZ`,
`San%20Ramon%2C%20CA`,
`Santa%20Clarita%2C%20CA`,
`Lafayette%2C%20LA`,
`Macon%2C%20GA`,
`Wichita%20Falls%2C%20TX`,
`Springfield%2C%20IL`,
`Velda%20Village%20Hills%2C%20MO`,
`Inwood%2C%20NY`,
`Westminster%2C%20CO`,
`Clarksville%2C%20TN`,
`Lancaster%2C%20CA`,
`Mifflin%2C%20OH`,
`Tucson%2C%20AZ`,
`Spokane%2C%20WA`,
`Torrance%2C%20CA`,
`Moore%2C%20OK`,
`Vandalia%2C%20OH`,
`Newark%2C%20NJ`,
`Charleston%2C%20SC`,
`St.%20Cloud%2C%20MN`,
`Conway%2C%20SC`,
`Bend%2C%20OR`,
`Vilas%2C%20SD`,
`Pawtucket%2C%20RI`,
`Pineland%2C%20TX`,
`Stanford%2C%20MT`,
`Mesa%2C%20AZ`,
`Minnesota%20City%2C%20MN`,
`East%20Bernstadt%2C%20KY`,
`New%20Bedford%2C%20MA`,
`North%20Bellmore%2C%20NY`,
`Temple%2C%20TX`,
`Twin%20Lakes%2C%20VA`,
`San%20Mateo%2C%20CA`,
`Florin%2C%20CA`,
`Youngstown%2C%20OH`,
`Logan%2C%20UT`,
`Cayucos%2C%20CA`,
`Warren%2C%20MI`,
`Rochester%2C%20NY`,
`Norwalk%2C%20IA`,
`Sunrise%20Manor%2C%20NV`,
`The%20Woodlands%2C%20TX`,
`Chester%20Heights%2C%20PA`,
`Gresham%2C%20OR`,
`Ponce%2C%20PR`,
`Cooksville%2C%20IL`,
`West%20Palm%20Beach%2C%20FL`,
`Anchorage%2C%20AK`,
`Burlington%2C%20MI`,
`Ontario%2C%20CA`,
`Simi%20Valley%2C%20CA`,
`Jefferson%20City%2C%20MO`,
`High%20Point%2C%20NC`,
`Champaign%2C%20IL`,
`Ravia%2C%20OK`,
`Lockport%2C%20NY`,
`Metuchen%2C%20NJ`,
`Eugene%2C%20OR`,
`Land%20O'%20Lakes%2C%20FL`,
`Harrisville%2C%20MI`,
`Tinley%20Park%2C%20IL`,
`Columbia%2C%20SC`,
`Springfield%2C%20OR`,
`Moss%20Bluff%2C%20LA`,
`El%20Cajon%2C%20CA`,
`Dell%2C%20AR`,
`Albany%2C%20NY`,
`Albuquerque%2C%20NM`,
`Baldwin%2C%20FL`,
`Cudahy%2C%20CA`,
`Portales%2C%20NM`,
`Aguadilla%2C%20PR`,
`Knoxville%2C%20TN`,
`Stockton%2C%20CA`,
`Greeley%2C%20CO`,
`Pottstown%2C%20PA`,
`Copperas%20Cove%2C%20TX`,
`Ukiah%2C%20CA`,
`Victorville%2C%20CA`,
`Stony%20Brook%2C%20NY`,
`South%20Lyon%2C%20MI`,
`Raeford%2C%20NC`,
`Allen%2C%20TX`,
`Madison%2C%20WI`,
`Pearland%2C%20TX`,
`South%20Bend%2C%20IN`,
`Waterloo%2C%20IA`,
`Belmont%2C%20WV`,
`Charleston%2C%20WV`,
`Vicksburg%2C%20MS`,
`Hoytville%2C%20OH`,
`Mesquite%2C%20TX`,
`Frankfort%2C%20KY`,
`Anaheim%2C%20CA`,
`Round%20Lake%20Beach%2C%20IL`,
`Aurora%2C%20IL`,
`Oregon%20City%2C%20OR`,
`Greenville%2C%20NC`,
`Norwich%2C%20CT`,
`Carson%20City%2C%20NV`,
`Brea%2C%20CA`,
`Whittlesey%2C%20WI`,
`Lockhart%2C%20TX`,
`Mobile%2C%20AL`,
`Fayetteville%2C%20AR`,
`Gulfport%2C%20MS`,
`Frisco%2C%20TX`,
`Huntington%20Beach%2C%20CA`,
`Punta%20Gorda%2C%20FL`,
`Daly%20City%2C%20CA`,
`Elmo%2C%20MT`,
`North%20Charleston%2C%20SC`,
`Syracuse%2C%20NY`,
`Lehigh%20Acres%2C%20FL`,
`Temecula%2C%20CA`,
`Durham%2C%20NC`,
`Plantation%2C%20FL`,
`Saginaw%2C%20MI`]

module.exports = cities