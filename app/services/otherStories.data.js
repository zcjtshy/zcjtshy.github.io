import { requireImage } from '../webpack-require';
var stories = [
  {
    id:1,
    title:'',
    name:'Museum of Homelessness',
    image:'homelessness.jpg',
    filter:['',''],
    story: `Exchanged presents stories you won’t hear anywhere else. Part installation and part story-telling space, Exchanged is a display of objects from around the UK that offers a snapshot of what is happening in detention centres, in squats, in alternative communities, in hostels, day centres and on the streets, objects have been donated from a wide range of sources including homelessness workers, volunteers, activists and people experiencing various forms of homelessness.The objects were grouped into four zones that show responses to homelessness – compassion, cruelty, resistance and process. We have the objects in zones related to these words for the show and we invite our audience to choose where they would place them, once they have heard the testimony. If you have a story to share inspired by these objects, you can do that too by speaking to one of our team.`,
  },
  {
    id:2,
    title:'',
    name:'Museum of Transology',
    image:'transology.jpg',
    filter:['',''],
    story: `Due to transphobia, when trans people come out they often lose contact with communities from their earlier lives, including family, school and work friends, past partners and children. Coupled with the fact that they are unlikely to have grown up surrounded by trans people, the reality for many is a social displacement that occurs because of a dissociation from one’s personal theirstory. This displacement can also be physical, with one in three survey respondents to the Trans Needs Assessment 2015 reporting that they had been homeless in the last five years. This obstracism can be fought not only by the strength of supportive trans communities, but also through the presentation of transcestry in historical institutions. This is precisely what museums should do – offer engagement with the past as a way of making sense of the now, in order to inform a positive and responsible future. In the words of LGBT historian Susan Fernetinos, ‘To offer roots to those who have at one time or another found themselves without any is a very powerful gift indeed.’ The selection of objects represents milestones of their owners’ gender journeys`,
  },
  {
    id:3,
    title:'The Face of Migration. 15 Women with Roots in Greece tell their Stories',
    name:'Nordic Museum',
    image:'nordic.jpg',
    filter:['',''],
    story:`Objects are carriers of stories. They can evoke memories of fragrances, tastes, sounds and light. What objects that become important cultural carriers when leaving your country for another is very individual. We asked 15 members of the Lyceum Club of Greek Women, Stockholm. In the exhibition you will meet them through their stories and chosen objects. Today there are about 20 000 people of Greek origin living in Sweden. Most of them came during the years 1965-1970. They came to Sweden for different reasons: through marriage, to study, to work or to seek protection for political views.
      The Sunday before the wedding my grandmother’s dowry was put into the chest. Born in Pireus, came to Sweden in 1982 to work at the embassy, resident since 2007. The dress and the chest has belonged to my grandmother, Simerouda Gioka (1886-1965) born on the island Salamis. She was married to my grandfather in 1911. He was a sea captain. When I visited my grandmother as a child I used to sit on the chest. I in my turn received the chest as a wedding gift and when I opened it I found my grandmothers dress in it. To me these objects are two holy relics.`,
  },
  {
    id:4,
    title:'',
    name:'Objects of Desire',
    image:'',
    filter:[''],
    story:`Exploring sex work through object biographies, Objects of Desire provides an alternate narrative of sex work to the binary ‘exploitation versus empowerment’ discourse that dominates popular discourse around sex work.Objects of Desire (OoD) is a collaborative project led by sex workers and artists. We aim to preserve sex workers’ stories through archiving and exhibiting the artefacts of sex workers. We invite current and former sex workers to submit photographs, objects (if possible) and narratives. Objects might include gifts received from clients, good luck charms or sex work activism memorabilia. Through focusing on the connections between personal narratives and material objects, OoD purposefully shifts the conversation on sex work from one that focuses on the objectification of people to an examination of the social relations seen through the lens of physical things. It examines how objects both reflect and shape the everyday relations sex workers have with their clients, lovers, families and others.The project aims to challenge the one-dimensional stereotypes that dominate popular discourse on sex work. While sex worker organisations worldwide continue to fight for decriminalisation as the best method to secure sex workers’ rights and better working conditions, debates surrounding legislation still repeatedly exclude sex workers’ voices.bjects of Desire takes the practice and everyday experience of sex work as a way of disrupting binaries that categorise sex workers as either too privileged or too victimised to exercise their own agency. Through foregrounding sex workers’ voices and stories and creating a living record of their artefacts, OoD challenges the pervasive social stigma that attempts to silence sex workers. It is not merely an attempt to ‘humanize’ sex workers through providing outsiders with a glimpse into their lives. Rather, sex workers’ stories about materiality and exchange challenge the wider public to reflect upon the dynamics of gendered labor, complex hierarchies of power and care under capitalism, as well as the interplay of the emotional and the material in all relationships`,
  },
  {
    id:5,
    title:'A poem',
    name:'Hikayetna. Stories from Syria, Hope and Optimism for Refugees',
    image:'',
    filter:[''],
    story:`I left that table with three books, a tea glass dirty
An ashtray
The TV remote still lost somewhere between cushions
A wall with a mixture of rotten green broken yellow light
Small window into an empty street
A white tissue travels lonely in a windy ruined alley
I left a pregnant apple tree
A sink full of pans, has remnant of favourite dish from last night
My plate among them with a tulip
I left half a bottle of red wine near bed
Money notes wrinkled
A belt with broken buckle
The art work in the corridor
The man in it hand on cheek tearful eyes
The forest behind him huge as the memory it leaves behind
I left a tape player once a lover gifted me
The Kurdish singer Mohammed Sixo on it screams
Oh the land Oh the land
I left my school desk with my name engraved,
The teacher who lectures me every time I bring a poetry book
Instead of syllabus book
I left the old corner shop
With a debt book
That has my name
Left the new shoe yet to wear
The yellow laces I bought
To go with it
My mother who stops by the door signals “come food is ready”
I left a generous father who daily comes home with bags of figs, apples
And occasionally roast chicken in right hand
I left home.`,
  },
  {
    id:6,
    title:'Gourd, Earth and Water',
    name:'British or Chinese? Stories of Migration, Family and Identity by SOAS',
    image:'soil.jpg',
    filter:[''],
    story:`My mother gave me a pouch of earth from our garden in Taipei, a tiny bottle of water and a gourd. She told me to pour the water into the well of my new home and sprinkle the earth around my garden. That way I wouldn’t have any problems acclimatizing to my new environment. The gourd was meant to protect me from illnesses.`,
  },
  {
    id:7,
    title:'Chinese checkers, draughts and live-in-a-row',
    name:'British or Chinese? Stories of Migration, Family and Identity by SOAS',
    image:'checker.jpg',
    filter:[''],
    story:`I bought these games that I always used to play as a child with my grandmother in Shanghai. She would often play mahjong. I can remember so clearly the sound of the tiles being shuffled around on the table. When I was alone I would just kick the shuttlecock and see how long I could keep it going.`,
  },
  {
    id:8,
    title:'Brown Envelope from the Department of Work and Pensions',
    name:'Blog by Paula Peters on the Mental Health Resistance Network: The Conscious Cruelty of the Benefits System',
    image:'brownenvelope.jpg',
    filter:['benefits'],
    story:`Authorised by Paula Peters.
Many have stated the fear of the DWP Brown envelope, as I have myself, getting obsessed with the post delivery, wondering if you will get a brown envelope today, an ESA 50, a PIP 2 Form or the fact your money has stopped.
We live in fear of income insecurity, never knowing when your next assessment will be and what that will mean for us to be able to live. Attached to that, is the fear that we can lose even more; our home. When found fit for work with a WCA, your housing benefit stops too, then you face the threat of eviction and the real worry and eventual possibility that you can lose your home, the only safe space you have from this insane dark world we live in. These are continuous and real fears and worries we have day in day out. We live the fear of brown envelopes, the fear of being called up for a WCA every day. Never knowing when it will happen, or what the government will hit us with next, its torture.
We know of many people who have harmed themselves rather than go through a WCA again, or visit the job centre. I was so traumatised by the fear of the WCA I was hospitalised before the process even started, tried to kill myself over it, a story I have shared with the media and at meetings many times. My story is one of thousands who feel the same way. Believe me.
We are seeing a mass social cleansing of Housing Benefit claimants out of London and elsewhere as the Benefit Cap came into force and was lowered even further last year. Who despite everything, struggled to find work, was skipping meals to feed her kids. A story that is replayed in every community in the UK. Two children in every class go to school hungry. Three years ago in London there was a story of children stealing frozen meat to eat. Foodbank use is skyrocketing, poverty is skyrocketing, homelessness is rocketing, and the deaths from the cuts are skyrocketing. That is massively important to stress.
People are taking their own lives in dreadful distress due to these assessments and the aftermarth of them. Just recently a lady took her own life after being told she did not qualify for PIP. Atos Kills again. This is a travesty, this is social injustice and this is grave and systematic abuse of human rights on a scale so big and done in such a silent way people are disbeliving it is happening, but happening it is.`,
  },
  {
    id:9,
    title: 'Hula Hoop',
    name:'Ellie, BBC News, Calming Touch',
    image:'hulahoop.jpg',
    filter:['body'],
    story: `My Hula hoop is soothing to me and is probably the reasons why I am alive. Discovering hooping gave me purpose to my life, espeically in terms of accepting my body.`,
  },
    {
    id:10,
    title: 'Beads',
    name:'Cal, BBC News, Calming Touch',
    image:'beadsbbc.jpg',
    filter:['anxiety'],
    story: `These beads help me to bring my awareness intensely into the present, where I can't worry about the future, or dwell on the past. I first started using the beads when I was managing large-scale events. It was quite stressful at times and in situations like these your mind naturally scans the environment for every potential thing that could go wrong. You find yourself catastrophising. It's like when you have a computer with too many tabs open. You can't really focus and eventually the computer can crash because you have too much going on at once. These beads are a way of closing all the tabs in my mind and bringing myself back into the present moment where I can focus on what is in front of me.`,
  },
     {
    id:11,
    title: 'A Stuffed Dog',
    name:'Ellen, BBC News, Calming Touch',
    image:'',
    filter:['Eating Disorder'],
    story:`I was given this small stuffed dog when I was five after we lost our family dog. I named her Sophie, and for a few years I took her everywhere with me. By the time I developed my eating disorder at the age of 12 we'd moved house a few times and Sophie had been placed in a box in an attic somewhere and forgotten about. Fast-forward 18 years, having moved 500 miles away and then back again, I was walking through town one day when I spotted Sophie in the window of a charity shop. I knew it was her instantly because she has a very distinct scratch on her nose. Sophie once again became my loyal companion. I suffer from anxiety so I hold her in the evenings, which is when I really struggle with obsessional thoughts. She helps me feel a little calmer and safer, and gives me something soft to keep me grounded.`,
  },
     {
    id:12,
    title: 'A Photo Album',
    name:'Millie, BBC News, Calming Touch',
    image:'',
    filter:['depression'],
    story:`My photograph album helps me whenever my depression feels suffocating. Sometimes it all gets too much but I know I can find solace in my album. It's full of photographs from happier days, and it helps remind me that whatever I am experiencing in that particular moment will pass, and that there are many more happy days to come. It grounds me and stops my mind from racing. Typically I over analyse things and anxiety usually accompanies my depressive bouts, so having my album close to hand really stops my mind from overthinking. It brings me back to reality, and the reality is that this, too, shall pass.`,
  },
  {
  id:13,
    title: 'Guitar',
    name:'Abi, BBC News, Calming Touch',
    image:'guitar.jpg',
    filter:['Eating Disorder'],
    story:`I think playing the guitar has always been an outlet for all these emotions that you can’t express in words. Music does that for people. It’s something that’s not literal, but helps you get out and say what you wanna say.When I was really ill with anorexia, it was a method of channeling all this energy that I would have otherwise put into something destructive, into making something really positive. It’s something that I enjoy, something that other people love to hear. So, channeling all those bad things into something good.`,
  }, 
  {
    id:14,
    title:'A Bedsheet',
    name:'Day Joyce (nee Daisy Sage), Hong Kong internee. An exhibit from Imperial War Museum, London',
    image:'bedsheet.jpg',
    filter:['war'],
    story:`These objects during second world war bring to life the people and societies that made them, used them and were attacked by them or kept them as mementoes. Sometimes they carry painful or treasured memories. Sometimes they act as points of reflection on what took place or how lives were changed. 
The British colony of Hong Kong surrendered to the Japanese on Christmas Day 1941. Hundreds of European civilians were interned in a camp near Stanley Prison. Daisy Sage, known as “Day”, moved to Hong Kong in 1940. She remained as an auxiliary nurse in the La Salle College Hospital until sent to Stanley. From the start Day used this Bed sheet to embroider a remarkable coded journal of her imprisonment. On this bedsheet, using whatever coloured threads she could find, Day documented her experiences as a prisoner of the Japanese. She noted names, places and events, using 365 words from her dictionary to mark the passage of time. 
“The sheet holds so many stories. You will understand why, for a long time after the war, I could not look at it. But eventually it came to light and gave up some of its secrets. It tells only true-life stories and now enough time has elapsed for the fierce agonies of remembrance to be controlled and for the worth-while, interesting core of the business to remain in the memory.”
`
  }, 
];// append each image with the directory
stories.forEach((s) => {
  if(s.image) s.image = requireImage(s.image);
});export default stories;




