import { requireImage } from '../webpack-require';

var description = 'An interational collaboration between Soul Relics Museum, LAGOM and Platform Med. Please submit your story to our google form https://forms.gle/c9rt9Gh46MjYZBW26 ';

var stories = [
  {
  	id: 1,
    title: 'pandemic yoga',
    name: 'Shehani',
    image: 'yoga.jpg',
    filter: 'pandemic',
    story: `
    Around Feb 2020 I experienced bouts of anxiety over my final year thesis and future plans. It made me feel breathless and made my heart beat raise. It was different from other times I had felt anxious, which was mostly feelings of butterflies in my stomach. With my 2020 anxiety, it was more physiological and I could not just shrug it off. My relic reminding me of these times is my yoga mat, an accidental encounter that helped me through my anxiety. Practicing 30 days of yoga with a YouTuber called Adriene helped me regulate my heart rate and breath. I felt more in control when I experienced anxiety. It helped me just enough to cope and get through.
    
    Words to the healthcare workers community: 
    You may think you are the only one or your story is too dark to share. But the truth is these negative feelings are way more common than you think. Sharing can definitely bring solace.`,
  },
  {
    id: 2,
    title:'Compassion',
    name: 'Divya',
    image: 'lagomnecklace.jpg',
    filter:'depression',
    story: `Story starts in high school with neglect of my mental health, racism which was recovered from by leaving hometown. But triggers were always there. What resurfaced all the negative emotions was a really toxic relationship which was emotionally abusive and the fact that I let it happen, that I didn’t set any boundaries and didn’t realise that I need to set them until I was once physically pushed so hard that I almost hurt my head while falling on the floor. That was the tipping point and I had to act like everything is fine for 2 more weeks until my then bf left to another city all so that he doesn’t get violent again in those last 2 weeks. Once he left, the suppressed emotions of those 2 weeks(and before) drove me crazy, I had lost myself completely in the process of dealing with his insecurities. 
    Then there were typical depression signs and symptoms anhedonia, suicidal thoughts, lack of drive to do the things I love most, becoming a lot less social, massive lower back pain, took 9months until I looked for a Neuropsychologist, am so grateful I found her. She and a lot of travelling and meeting family helped me a lot! I still have the fear of being treated that way again, so am staying away from relationships and focusing on my journey to self compassion. It comes and goes in waves, it may never really go away, we just need to learn to deal with the wave when it hits.
    
    Words to the healthcare workers community: 
    As a healthcare worker we have to deal a lot with death. Honestly it’s a morbid profession. Set your boundaries as to how much are you going to blame yourself if something happens to your patients. Know that if you have done this much for today it’s enough, you set your own bar. Everybody has a different threshold on pain and dealing with pain. Never bring it back home with you. (Easier said than done) Have those self loving rituals that ground you and bring you back to being yourself regardless of how your day went. Always talk, either to your peers, parents, partners etc. Don’t build up a bunch of emotions or believe that sacrificing yourself and not acting like a “burden” is  the right thing to do , because then you’d be sacrificing the maximum potential of the real hero that you are when you work.
    `,
  },
  {
    id: 3,
    title:'LAGOM',
    name: 'Vyshnavi',
    image: 'lagomwatch.jpg',
    filter:'depression',
    story: `Nostalgia wouldn’t do justice. There’s an ancient Chinese belief I love: An invisible red thread connects those who are destined to meet, regardless of time, place, and circumstance. The thread may stretch or tangle. But it will never break.
  This watch was present for all the moments that we braided cords that we make are the god’s art and represent the flow of time itself. They converge and take shape. They twist, tangle, sometimes unravel, break, and then connect again.
  This watch symbolises the hope that the red strong connects again someday.
  For a long time, my struggle with my mental illness was a private dialogue. As someone who seemed like an extrovert to friends and family, I have always been transparent about who I am. Not only do I speak about love, constellations, life philosophy and hope, I also write (on my secret livejournal) about darkness and demons.
  I know quarantine has been a tough time for many of us. The uncertainty and not knowing what will happen next can be tough for your mental health. I’d be lying if I said that I have been okay through this whole thing. I’ve been productive for the most part, but I also had some bad moments and a few mental breakdowns here and there. I’ve had a serious case of impostor syndrome, depression that I hid behind masks. 
  The bright side of it all would be the realisation that I was probably not the only one feeling the same way, and things started falling in place, I found the best team in the world and that’s the origin story of Lagom!
  
  Words to the healthcare workers community:
  I can’t begin to imagine how you’ve been suffering in silence, and I’m so proud of you for holding on. Join the Lagom Family!
  `,
  },
  {
    id: 4,
    title:'Acceptance',
    name: 'Viv',
    image: 'lagompostcard.jpg',
    filter:'lockdown',
    story: `It was a time where I was pretty low and did not have motivation on some days as I started the placement during the first ever COVID-19 lockdown. I was learning a new approach of psychotherapy where I learnt about the idea of acceptance and compassion, rather than challenging the validity of thoughts. It was really useful for my patient group but also for myself, to normalise the feelings I had and to commit to the things I cared about.`,
  },
  {
    id: 5,
    title:'Origami',
    name: 'anonymous',
    image: 'lagomorigami.jpg',
    filter:'resilience',
    story: `Many years ago I was volunteering at a paediatric ward, making origami with the children in the ward. Most of the children I visited were only at the hospital for brief periods of time, so I rarely saw them again.
However there was an eight-year old girl with muscular dystrophy (let's call her [A]), that would I would visit often. She loved doing arts and crafts, and her joy every time I visited her with a stack of coloured paper was infectious. 

On most days her arms werent strong enough to fold the paper. I would put her hands on the paper so she felt involved in the process, and make jokes to distract her so I could make the creases when she wasnt looking, and at the end we would colour our pieces together.

Over several months I got to know her and her mother quite well, and I started looking forward to her hospital visits as I knew they would be filled with fun and laughter. On one memorable occasion we made origami dogs and had a heated argument about whether or not dogs have whiskers - [A]'s mum stepped in eventually to pass the verdict: if a dog has whiskers, it is probably just a very large cat. 

Her longer hospital stays however, were both heartwarming and heartbreaking. I would notice the exhaustion piling up on [A]'s mother over the weeks, she likely never left her daughter's bedside and was constantly entertaining her to keep her happy. On some days she would join in and make origami with us, but on other days as soon as I stepped in to the room she would smile at me and collapse onto an armchair to nap. 

The paper dog (or possibly abnormally large cat) is one of the simplest origami pieces I know how to fold, but I cannot make one now without bringing up those memories. Of a girl with a likely incurable condition who was continuously deteriorating, her unending positive energy - most and her mother who not only never left her side, but exhausted herself making sure her daughter's smile wouldn't fade.`,
  },
  {
   id: 6,
    title:'DIY electronics',
    name: 'anonymous',
    image: 'lagomphone.jpg',
    filter:'death',
    story: `I had just started volunteering at a hospital and was visiting a moody 17 year old boy.
Trying to think how to break the ice. What do you talk about with 17 year olds? Be relatable, come on you were 17 not that long ago, what were you up to back then? Right, uni applications!

"Are you doing your A-levels? What do you want to study at university?"

"Well I wanted to study electrical engineering, but now.....that's probably not gonna happen."

We share a long quiet moment while I slowly remember that I was in a cancer ward. 

This wasn't my first nor my last awkward interaction with a patient (or with another person - maybe I am just an awkward person in general), but it was a pretty significant one for me. I spent quite a long time replaying the scene in my head afterwards, trying to think of what I could have said to make things back to normal. Instead I just sat in silence like an idiot.

I guess it was my first time talking to someone so close to me in age yet so close to death. Not sure I can verbalise what impact it has had on me, but in a way it has made me see life in a different light.

In a twist of irony, years later I am now really interested in diy electronics. I would have loads to talk about with that boy, though I have no idea if he's even still alive now.`,
  },
  {
   id: 7,
    title:'Waves',
    name: 'K',
    image: 'lagomsurf.jpg',
    filter:'coping',
    story: `This is the very first surfboard I have ever own and it has taken me into various seas and ocean. It is a important tool for self-care, a symbol of the blue mind.
Working in mental health can be overwhelming, getting into the water has been a great way for me to leave the stress and responsibility on the shore momentarily and recharge.
Surfing is a lot about balancing, so as our life. Maintaining some sort of balance has given me the best sensation when I catch a wave, as well as the sustainability for me to carry on with my work.

Words to the healthcare workers community:
In our work, it is easy to lose ourselves in the ocean of responsibilities and the urgencies of others. Prioritise and don not forget your own self, find your own way to stay balance so that you can ride along the waves of stress.
`,
  },
  {
   id: 8,
    title:'5 Signatures',
    name: 'Potato',
    image: 'lagomsign.jpg',
    filter:'learning',
    story: `This happened during my first call as a house officer. It was my 3rd day of working after graduating from medical school, and the ward admitted a case of severe GI bleeding with shock. I was stressed and scared, as I was inexperienced in managing ill cases, had no confidence in taking blood nor setting IV cannula, and the on-call senior was dealing with another urgent case. My other house officer colleagues heard about the case, and all of them came to assess the case with me, despite being very busy themselves. In the end, we managed to stablize the patient and arrange transfusion. The assessment and treatment order was signed by all 5 of us, and these 5 signatures remain a precious memory of mine to this date.`,
  },
  {
   id: 9,
    title:'My dog',
    name: 'K',
    image: 'lagomdog.jpg',
    filter:'burnout',
    story: `Apparently, dentists have one of the highest suicide rates.  I never really thought about this until I started working. All jobs are stressful in their own way, but the stress from my job, coupled with my perfectionism and overwhelming sense of feeling like an imposter, culminated in a breakdown. There was a period of time when I was coming home from work everyday pretty much crying to sleep.

One day I was on my sofa at home, feeling numb and empty, when my dog jumped up onto my lap (a very rare occurrence - he’s more cat than dog) and looked up at me with his large round eyes.  It was then I realised I had been so upset I hadn’t given him any attention recently.  It made me think who or what else I’d been neglecting in my life.  I resolved afterwards to focus more of my attention on the things and people I loved.  Spending time with loved ones centred me, and reminded me that I have people in my life who believe in me even when I don’t believe in myself, and I have a dog who loves me (I think!) irrespective of my job or how flawed I think I am.
`,
  },
  {
   id: 10,
    title:'Being a doctor',
    name: 'anonymous (a fresh doctor)',
    image: 'lagomdr.jpg',
    filter:'burnout',
    story: `Being a med student, being a doctor.. it changes the way you look at the world. People always talk about what a blessing it must be to be able to help someone in their most dire times- I don’t deny that, but a lot of people fail to notice how much more pain there is to it. Seeing so much suffering everyday is not a blessing, it takes courage that I sometimes cannot muster [master]. As much as you get to save lives, you’re also the one holding someone’s hand while they take their last breath. You think you get used to it, that you get used to parents asking if their child could somehow defeat a metastatic cancer or snap out of a bed-bound disability, but you don’t. Every day is another day staring death in the eyes and bargaining for a fair deal, and I think now more than ever we’ve been outwitted. When you’re so intimate with morbidity and mortality, the way you look at the world changes. It’s hard to see the glitter in the grime, and yet we must- because if we lose hope, there’s no one else the world can turn to. The way you look at the world changes forever.. this perception, this survivor’s guilt, it’s always chasing you- how do I get to wake up healthy and fine each day with nothing but a heavy heart, while so many around me can’t even do that?`,
  },
];// append each image with the directory

stories.forEach((s) => {
  if(s.image) s.image = requireImage(s.image);
});

export default {
  stories,
  description,
};