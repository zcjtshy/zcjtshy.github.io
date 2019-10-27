import { requireImage } from '../webpack-require';

var description = '';

var stories = [
  {
    id: 0,
    title: 'A Remote Control',
    name: '',
    image:'remotecontrol.png',
    filter: [],
    story: `Because I used to steal them when I had OCD to save the people from mind poison and keep the trajectories of their life force. I don’t do it (much) anymore – but I own over 267 remote controls – sorry!`
  },
  {
    id: 1,
    title: '138',
    name: 'Sarah',
    image: 'flower.png',
    filter: ['stress'],
    story: `I had left my job due to severe stress and did not have a job to go to. I was very low and lacking in self-confidence. I started to make myself go for little local walks from my home in the middle of the city. In places where there were lots of people I felt lost, they all seemed full of purpose and direction compared to me. I didn't belong. Then I started to notice small pockets of nature that were managing to thrive in harsh conditions. Noticing and then photographing this nature in the urban environment gave me a focus and, looking back, I suppose was a kind of metaphor for hope in bleak surroundings. It was a kind of mindfulness that enabled me to connect again. This photograph is one of those I took during this time of a beautiful lilac blossom growing in a parking bay on the estate where I live. `
  },
  {
    id: 2,
    title: 'Clothes Drier',
    name: '',
    image: '',
    filter: [],
    story: `I would put in my clothes drier (clothers rack). It symbolises my escape from an abusive relationship and my new start in discouraging myself`
  },
  {
    id: 3,
    title: '',
    name: 'Sarah',
    image: 'glass.jpg',
    filter: [],
    story: `A shard of glass, from the bathroom window I smashed when I was 20. The object says more than I can put into words, because I could never really explain satisfactorily to anyone else why I did it. I felt constantly trapped at the time. I was sure my skull was contracting, slowly crushing my brain, and I needed to do something drastic to break free. I often thought about smashing windows. I’ve always been quite attached to buildings, and it seemed quite natural to regard a window as an extension of myself. So one day I put my fist through one. It was a double-glazed pane, and I still remember the ‘boom’ when the inner glass broke as the sound of freedom. My flatmates, who had to clean up the mess while I trod all over the broken glass in bare feet, were of an entirely different opinion.`
  },
  {
    id: 4,
    title: 'Filippa',
    name: 'Kate',
    image: 'filippa.jpg',
    filter: ['anxiety', 'depression'],
    story: `Whenever I have a breakdown and I'm on the verge of despair and don't feel like talking to anyone I want to retreat in bed into my own world and just cry in my pillow and squeeze my strawberry Filippa. The idea of calling someone seems pointless or stressful on those moments, so in that sense Filippa has "seen" more sides and states of me than some of the closest people. Just hugging a soft and happy-looking is sometimes enough for me to come back to more manageable feelings.`
  },
  {
    id: 5,
    title: '',
    name: '',
    image: '',
    filter: [],
    story: `A used toothbrush on a bathroom shelf. Inside a toothbrush holder next to the toothpaste as it always is. The only thing is that this toothbrush should not be there. It should be in someone\’s bag while travelling for work.When I saw it, at 10:15 pm that night the world ended and a new one started. You see, this is how the clueless me found out that my partner of 16 years was having an affair with (a most boring) friend. He chose her. They were together for a year by then. I died. The following months after were the most difficult and painful. The first month of being on my own and all that this meant I had all the physical symptoms of the broken heart. I thought seriously constantly of how I might die of how people do die of this. 

 Friends were fabulous and picked me up. Then a beautiful man took my hand and led me out of the darkness, less than a month later, the 100 years later. One day at a time, one minute at a time, one second that the pain isn’t there anymore. Now I am someone who’s more beautiful.`
  },
  {
    id: 6,
    title:'Crutches',
    name: '',
    image:'',
    filter:[],
    story: `My crutches - recovery but also now permanent. They keep me mobile but have caused other problems for my body (arthritis etc). They are a mixed blessing but they are a visible symbol of how I manage my invisible condition. They represent my normal.`
  },
  {
    id: 7,
    title: 'Enlightening',
    name:'Davidinio',
    image:'plato.jpg',
    filter:[],
    story: `In essence, I always followed the status quo, lived by the motions, and did what every good studious medical student/youthful party goer should - study medicine, go out and get drunk, and repeat. I never had any ambition or imagination, because there was no impetus to - the path for my life was largely carved out, and there was no need for me to do anything really, as I was rather content and didn't see the point of wasting time and energy. 

 But then I went through a very tough few months of exams, where I experienced strong feelings of anxiety, guilt, self-loathing, and the lot, and it escalated into a full state of depression mixed with anxiety. I lacked self-awareness and mental health awareness to truly understand what was going on and to be able to see the root causes of my poor state of mind. I was also thrown into a state of existentialism - repeatedly thinking 'I hate this shit. Why on Earth am I doing it? Who decided my fate? Why can I not do something else? Is this really the best my life can be?' I felt that such analysis was vacuous and out of place, and that I would be absconded by anyone were I to voice my nihilistic utterings, especially given my good situation and blessings in life. I simply did not have a tool, or the comprehension, to commence vivaciously re-analysing my life and re-structuring it for the better. 

 A lack of understanding and self-awareness led to an apathy of action. If I had truly known that what I experienced was outside the realms of tolerability perhaps I would have been poised to act differently. But I didn’t.  There was no attempt at any level to bulwark myself against the return of this chaotic phenomenon. Of course, it transpired again, and again, and again. Year on year while at university, the episodes would be darker and unbearably longer, each one worse than the last. I would only blame myself for feeling so poorly, believing that my sadness was the inevitable consequence of my many failures and imperfections, each of which I simply had to work on harder. It was an ecosystem of destructiveness permeating through my everyday life: I would be incapable of simple work or simple social interactions, and this reliably made me feel like more of a failure and an alien – and so it went on. Though I picked up knowledge about mental health from the course, it was very hard to conjoin my subjective experience with the objective understanding of medical sciences, and to truly believe that perhaps my mind may be defective in some way. Indeed, this was the hardest part of the entire ordeal, and why it took so long and required for things to get so bad. Being honest with yourself and saying that you may have a mental health problem can be very difficult, especially if you come from a background of hushed whispers and destructive taboos surrounding mentality, a robust illusion of complete autonomy over your thoughts and mood, and little exposure to genuine understanding of the mind. These experiences were reduced to a simple interpretation of life – that the universe was unpleasant and interspersed with painful things, and amidst its evils there seems to be only the bitter reality of confusion and dejection; while the conscious experience is stable, pre-determined, and hollow. I felt like I was destined to spend most of my future life feeling rather unhappy. I would cry out to question and penetrate the bleak walls of such realities, but my pleas would not be answered. My mind would respond defensively, asserting that I ought to persist with what I had been taught, and leave the ostensible emptiness of my requests behind me.  If getting to the crux of the questions did not seem to be in the realms of possibility; changing the answers that they enshrined was a fantasy tale. The solutions are simple - find that brave face, smile, and push on. Life cannot be changed. You cannot be changed. 

 There was a glimmer of disgruntlement at such a tenuous conclusion. It was to become my saviour. I began realising that there were scattered happy moments that fleeted by. Rather, there were moments free of pain, where I had slither of equanimity and true joy. Yet, I did not understand how these feelings came about – nor did I have any stimulus to. Since no one talked about the landscape of subjective states, of what constitutes the good life, of the roots of happiness, I did not stumble across these ideas readily. Besides, there were so many significant and imperative objectives to focus on – becoming a doctor, becoming successful, being a good person – who has time for this self-indulgent pursuit of centring one’s attention on personal happiness when there is so much to be thinking about? 

 Yet, some part of me could not be satisfied with this answer. I yearned I and searched for meaning to existence, something to cling on to, an answer, a hope. The vacuous questions regarding the objective constitutions of happiness and meaning for which I searched for yielded the same vacuous answers of complicated empty words stringed together in sentences by highbrow academics that voiced anything but candid depictions of life. 

 But one day, through a series of coincidences, I picked up my first ever intellectual and philosophical book - The Republic. The beauty of the analytical, honest and in depth scrutiny of Socrates demonstrated to me the limitless potential to create and shape our vlaues, to sculpt our lives, and to live fervently with the truth. It demonstrated that the status quo, and what all of my friends and family were doing, were not necessarily correct. This catalysed two things: one, a love of knowledge, reading and understanding of the world, which to this day adds incredible joy and stimulation to my days and embellishes my projects, and indeed my life, in a meaningful and fun context. The other, a confidence in my self, and a relentless pursuit of what is true and what is good. This has prevented relapses into depressive states, as I know myself better and am more aware of my mental landscape, nurturing it gently, and directing my awareness to things that deserve it. It has also made a more moral, more unique, and more connected person. Credit to Socrates!`
  },
    {
      id: 8,
      title: 'Pebble',
      name:'Steph',
      image:'pebble.jpg',
      filter:[],
      story: `During my first two years as an undergraduate law student, I often sat down by a field that was in the centre of the campus, watching the sun fall on the grass and on the pebbles that bordered the field. The days were hot, muggy and often hazy, an atmosphere which seemed to be reflected in the inside of my mind. Coming into my early twenties and put into a state of unrest by the changes in my life, I was feeling mind crack under mounting internal tension and anxiety. I spent hours hammering the same questions in my head, wondering who I was, what I should feel and where I should situate my sense of meaning. I tried to avoid reading and writing, feeling like the words would suffocate me. If I put pen to paper I could never be satisfied. I wrote and cancelled and re-wrote, the end product being a mess of scratch marks and scribbles which did not in any way resemble what I wanted to project. I got lost and then got lost about being lost and was often a mess. 

 One day a friend of mine picked this very round pebble from the pile. “Useless as a paperweight,” he said. “But that doesn’t make it of any less worth as a stone”. I carried it around in my bag for the next few months. The feel of it, small but solid and certain in my palm, gave me comfort. Small gifts like these made me feel like little parts of myself were being restored to me, and helped me on the way towards finding the sense of assurance, composure and hopefulness I needed to move forward.`
    },
  {
    id: 9,
    title:'Blank',
    name:'',
    image:'aboutblank.png',
    filter:[],
    story: `The title bar from the internet when I was googling methods to commit suicide`
  },
  {
    id:10,
    title: 'Escape',
    name:'Reb',
    image:'paperclip.jpg',
    filter:['BPD'],
    story: `I chose this object as it's where my addiction to self harm started. I remember being roughly 13 years old and hiding behind a sofa in my living room crying my eyes out as I had this overwhelming emotional pain sweep over me, my palms were sweaty and I was finding it hard to breathe as my heart pounded so fast and thoughts spun around uncontrollably in my mind! 

 I had this paper clip in my hand at the time and one thought went through my head which changed everything, 'what if this emotional pain could be counteracted by physical pain?' and with that thought I unraveled the paper clip took it to my wrist and for a moment I was free I had escaped! Little knowing that in reality a whole new battle had begun.`
  },
  {
    id:11,
    title:'New beginnings',
    name:'Sophie',
    image:'drum.jpg',
    filter:['eating disorders'],
    story: `I remember many years ago I was very ill and was in denial. My parents were absolutely mad at me and could not understand me. My dad even broke part of my drum set, something that I deeply treasured. I could vividly remember that scene when he was so infuriated, shouting and threatening to throw the instrument away. I just sat there, crying with angry tears, feeling helpless and not understood. 

 Months later I agreed to be voluntarily sectioned and I met one of the most friendly people I have ever met in my life in the ward. The doctors and nurses understood that my music exam was coming up so they let me to take the drum set to a quiet room in the ward to practice. Everyone said I was talented. Being well enough to attend the exam became one of my biggest motivations in life then, and I ended up with high distinction. 

 Memories (painful ones and joyful ones) came back to me every time I rehearse and practise, but it has now provided a new definition and narrative to my life.`,
  },
  {
    id:12,
    title:'Words from Heaven',
    name:'John',
    image:'book_loved_myself_enough.jpg',
    filter:[],
    story: `This book gave me the revelation; that maybe, just maybe, I should love myself. Be kind. Stop beating up... etc. A total revelation and revolution.`
  },
  {
    id:13,
    title:'Win',
    name:'Jennifer',
    image:'win.jpeg',
    filter:[],
    story: `If like me you have been involved in a few tussles over the years, can you also say that some of the worse confrontations were with those you thought understood you or those you were close to? There are at least three things that can be done when being confronted or attacked. One can stand there and be insulted, move away from the situation, or defend oneself. 

 In the book of Timothy we are told, “Fight the good fight of faith, lay hold on eternal life.” What are you or I to do then? “Fight the good fight of faith.” That sounds great but, what exactly is the “fight of faith” especially when there is a sense of feeling so alone. Hence, I add YOU ARE NOT alone. Others are also fighting too, and within that there is the awareness that I or you are not the sad deceived soul who needs to get a life. Our enemy wants us to think we are the odd one out. The more this thought pattern is eliminated from our minds, the stronger we will grow. This is why the enemy has tries to keep us isolated. I am told that solitary confinement is the worst place to be in prison. In order to or us to fight we need to be strong and to attempt fighting whilst in confinement will place you only two steps backwards from where you are now. 

 For most people a good fight is a fight that you win. That is why therefore we must never give up. The stakes are too high. Quitting is not an option. To quit is to admit defeat. Any soldier or those in the middle of a battle have to go through a course of training before they receive an assignment. During this time they go through a very rigorous physical and mental time of training. 

 The sole purpose of this training is to get us ready and prepared to do the job, and be properly equipped to do whatever it takes to get the job done even under the harshest environments. However we are not doing physical battle such as what military soldiers do, we are doing spiritual battle and the training we do is in the spiritual realm. We have been given God’s amour to do battle, to defend ourselves from the onslaught of the enemy, and to take back what has been rightfully purchased for us. This doesn’t mean there won’t be a fight; it means we just keep on fighting with God’s spiritual weapons. This means that with our eyes of understanding, we have an answer. Be aware that the enemy will work overtime to keep us from seeing the key issue of the battle. Any fighter without endurance is a fighter who will eventually give up especially during the time of mental battle.`
  },
  {
    id:14,
    title:'A White Wall',
    name:'Jon',
    image:'Whitepaint.jpg',
    filter:['paranoia'],
    story: `Staring off into space, facing a wall, many years ago, I messed up my meditation practice on a long solitary retreat. It gave me paranoia. 

  I came away from the retreat with a nagging sense of dread. I became frightened of the prospect of anthrax attacks in London, then of sarin attacks on the underground. I was frightened of a then little known disease in Uganda, called Ebola. I was frightened about outbreaks of smallpox. Of heart attacks. Of skin cancer. Of many things. I would have months of mental quiet, when life would normally be very sunny and then the paranoia would come back and typically it would be a little worse. 

 I would ask my local meditation teachers. They would be concerned and have ideas but very quickly refer me onto a more senior teacher. I'd speak to my senior teachers and they would make suggestions and those wouldn't work and time would go on and I'd get worse. I developed a bigger and bigger meditation "toolkit" for dealing with my fear and the tools would all work for a bit then they would all break. 

 I moved my job from central London to South West London because, when I looked at the prevalent wind directions I thought that I'd be safe from any airbourne toxins. We went to war against Iraq, so I moved to Newcastle. I alternated between happy times and all-pervasive fear, which could manifest as terror on retreat. 

 Before moving to Newcastle I went on another month's solitary retreat and my teacher saw me every day in the meditation hall, looking really uptight. I asked for an interview and he looked really quite nervous - he was wiping the sweat off his bald head. 

 He said, "Listen, this is a new practice I'm giving you. Do nothing. No space, no time. Just let your Buddha nature take care of it." I thought this was absolutely crazy - I sat there with my jaw hanging open. I was struggling with my sanity and he was giving me what sounded an impossibly advanced practice to deal with the problem. 

 But I resolved to try it - feeling if this doesn't work, how's even the relationship with my teacher? Will I be I completely lost? So I sat and let go - I didn't even let go, I literally did nothing. After years of meditation I had the skills to do that, for an extended period. 

 And it worked. Sitting staring at the wall, I felt the tension be replaced by a sense of - sensibleness, groundedness. I felt my good judgment fall naturally into place. I realized for the first time how far I had been making the whole whirl of frightened thoughts spin around in my mind.

 I broke the advanced practice up with some other practices as I knew my mind could get bored - but, I felt the tension break - properly, and real confidence come in. 

 On the coach back to London, the city felt safe again. In the subsequent 13 years I have barely experienced paranoia again.`
  },
  {
      id:15,
      title:'compass *trigger warning*',
      name:'Cindy',
      image:'compass.jpg',
      filter:['depression','self-harm'],
      story: `When I was little I'd always run into my closet and hide away, crying about how my parents never wanted me nor liked me. There were a few times where they actually searched high and low for me. Even up to now in relationships I never feel like I'm enough, like the reason why bad things would happen is because of something about me. Maybe cutting myself and giving physical pain would make it stop; something I always pondered. It was only a temporary fix, one I was willing to do almost anything for. I kept telling myself lies, and twisting words of what was said in the past to get myself to relapse every night. But knowing that the compass would guide me into tomorrow, knowing that if I relapsed I'd still make it through was reliving and comforting in a twisted sense. There was nothing better than feeling the sharp edge cutting into my skin and giving me something different to cry about. The compass was always waiting on my bedside every night for when I was feeling down, it was comforting to know that this object was the only one who knows about how I'm feeling. It would stay with me through thick and thin. No matter when it was always willing to make things just a bit better. But now it's stuck to me and won't let go. It turned into a comfort but now an addiction, turning me into a masocist that makes it so hard to turn back. I can't find a way out besides looking for the end. In the beginning of high school I threw you away thinking I won't ever need you now that I have someone else, something else to use for a fix. 

 I need to fight it on my own for me to be free from it. If I rely on someone else I'll only fall back down and start from the beginning.`
  },
  {
      id:16,
      title:'Regret',
        name:'Alexis Nezali',
      image:'ring.jpg',
      filter:['Dissociative Disorder','Gender Identity Disorder'],
      story: `I shared the worst period of my life with someone who was supposed to be a kindred spirit and my soul mate, only to have them throw me aside for someone else, shattering what was left of my already fragile mind, from a life time of abuse and neglect. I've had this ring for a while, it's supposed to represent the unity of myself and my alternate personalities, as I have dissociative personality disorder. When I found someone who was willing to love me, since I'm transgender and that's a difficult thing to find, I was ready to share the rest of my life with them. I was ready to give her all of myself, my ring. She turned out to be emotionally abusive and manipulative, making me hate myself more and more for things I couldn't control. I did eventually marry her, and even gave her the ring, which she never wore or took any interest in. When we inevitably broke up due to her finding someone else to love, I reclaimed my ring and now keep it as a reminder to never make that mistake again. Love freely, but not blindly. Live a life without regret.`
  },
  {
      id:17,
      title:'Tennis',
      name:'Amy',
      image:'tennis.png',
      filter:['grief'],
      story: `The day I lost my Pappa the world felt like too much to handle. I was overwhelmed by shock and grief but in that time a helpline volunteer explained to me about how a tennis ball would help me feel better. On the first day grief feels like a tennis ball in a jam jar. It takes over and fills every part. After some time it feels like the tennis ball has moved into a water jug. There is more room and the greif takes slightly less of your thoughts and life. The next time you notice that the tennis ball has moved to a drawer. It is still there but other things start to come into focus. Eventually the tennis ball is just in the same room or house as you. The hurt stays the same but it becomes a smaller part of life as you learn to manage it.`
    },
    {
    id:18,
    title:'Dear Diary',
    name:'Pat',
    image:'deardiary.jpg',
    filter:['harrassment'],
    story:`Dear Diary, It’s me again. I feel stressed and depressed. No matter how hard I tried, I still failed the exams. A teaching assistant kept harassing me before the exams and he annoys me so much. I am so fed up but at the same time I can’t report him. After rejecting his invitation for lunch I feel scared. I am scared of what he will do if I report him to the instructor. 
            Anyway, thanks for listening to my complaints.`
    },
  {
    id:19,
    title:'Calm',
    name:'Van',
    image:'calmbadge.jpg',
    filter:['grief'],
    story:`The day after I was told my grandpa passed away I was stressed about going to work. The moment I told my colleague she gave me this pin. Upon holding and touching it I was immediately soothed by the word “calm” and by the “band-aid” symbol. This has been my go-to object to look at and has been in my bag ever since.`
  },
  {
    id:21,
    title:'Soul Wraps',
    name:'Aspie Boxer',
    image:'soulwrap.jpg',
    filter:['aspergers'],
    story:`I've struggled with Aspergers all my life. It was even tougher because I had never heard of the condition until the last two years, and it has taken that long to fully comprehend what it is and how my life has been shaped by it. As an Aspie I need rituals and routine to help me focus and get through the day. There are negative rituals and repetitive negative thoughts. They paralyse you and weigh you down so that even when you escape you're so tired to make the most of whatever the day has left. By a sort of accident of life I discovered boxing. I was dating (now an ex) and was enjoying a ritual Friday morning. Woke up, read the papers and magazine and watched a bit of MTV. The show was 'Made' and it was about a young girl who was at risk being offered a chance to turn her life around by boxing. The program showed her skipping, punching bags, running in circles... it looked bliss. I told my ex, I want to do that. She told me don't be daft you'll just get hurt. This was when I was in an absolute trough of my life, in the worst place I could have been. We broke up. I was devastated. My rituals had been thrown into chaos. And then I moved house and found a boxing gym nearby. I started going, and quickly became a regular. I couldn't run more than 30 seconds when I started. I was totally unfit. I might have been nearly 100kg, I don't know and can't recall but do know that I had problems with my back and couldn't walk longer than 30 minutes. Every night I would train for an hour. A similar routine every night. I loved it. Skipping for 10-12 minutes. A 10 minute run around the housing complex. Some bag work, a cardio exercise. Footwork. Almost the same each night. I got stronger and stronger - and not just physically, mentally too. I was able to join social clubs, something I've never been able to do. I welcomed new friends to my place for dinners. Eventually I was so confident and strong I toured Europe on my own, casting out all fears of being alone. I would visit different gyms as I went, leaning on them as a social crutch knowing that in each one the routines would be similar and familiar. I could break a bit of my ritual - but could still reach out like a young swimmer not venturing far from the side of the pool. Boxing was perfect, if someone was making me anxious I could just smack the anxiety out into a pad or into a body shot. And they could return the favour. I train almost every day when I'm fit. I have to. It's my ritual and is part of me like my arms or legs. If I can't train for a couple of days, it's like a phantom limb. I sense something is wrong and the anxiety builds. So now whenever I travel, almost the first thing I look for is whether there's a gym nearby to where I'm staying. I plan my meetings around training. And I've become a very happy gym tourist having boxed in Russia, Sri Lanka, Spain, South Africa and even Hollywood. My 'relic' are the boxing bandages. Not only do they keep my small hand bones safe, but they are responsible for holding my psyche together and helping me build all the positive elements in my life to date.`
  },
  {
    id:22,
    title:'Partition of india and East and West Pakistan',
    name:'Mr SS',
    image:'',
    filter:['migration','trauma'],
    story:`My object is an original Bangladeshi cuff-link.“Struggle for peace” I would like to erase the tragic events that took place. My mother came to United Kingdom with my dad, 2 brothers and 2 sisters in the late 50s. Then she moved to London where I was born behind the East London Mosque in 1961. She bought a car and took the car and the family to East Pakistan in 1966.`
  },
  {
    id:23,
    title:'The Therapeutic Kitchen',
    name:'Elijah A. Addo, Founder of Food for All Africa, 2017 Queens Young Leader Award',
    image:'elijah.jpg',
    filter:['empowerment'],
    story:`Like many of us, my childhood dream as the only boy among my three sisters was to become a medical doctor but the death of my parent's at the tender age of 14 years made me fall in love with cooking. Every time I am in the kitchen cooking it brings me closer to my mum, because the best moments I enjoyed with her was those we spent in the kitchen. I didn't realize how lucky I was to have become a chef until in 2011, I came into contact with a mentally challenged man who picks leftover food from trash bins in the hotel where I worked to feed his colleagues on the street. Then I realized I could have been one out of the four children in Ghana who miss out of their future ambitions because of hunger and poverty. My name is Chef Elijah A. Addo and am "the doctor in the kitchen" who has set out on a vision to re-invent Africa's food systems by bridging the food gap between plenty and scarce across communities by creating sustainable means of nutrition through food, recovery, redistribution, farming and forum for stakeholders`
  },
  {
    id:24,
    title:'A Kid and his Chatterbox',
    name:'Eddie',
    image:'chatterbox.jpg',
    filter:[''],
    story:`I had stopped looking forward to coming into work for the last few months; I was experiencing spiritual unfulfillment, burnout and low self-esteem. 
I decided to give in my notice, despite not knowing what I'd do next. The following day while volunteering at a children's craft event, a child came up to me out of the blue with his newly made chatterbox. 
"Pick a colour", he said. "Green." "Okay. Now pick a number". "Seven." "One more number". "Five." He opened the corresponding flap to reveal my fate. 
"You will have no job," he read. 
An incredibly strong feeling of joyful liberation washed over me as my actions from the previous day finally sunk in. I thanked the boy and his mother and went about the rest of the day with renewed zest. Even though I still didn't know what I would be doing in a month's time, I now knew that leaving had been the right decision. For the first time in a long time, the future was looking bright and full of adventure.`
  },
  {
    id:25,
    title:'Stones',
    name:'Nat F',
    image:'',
    filter:['social injustice'],
    story:`Since reading about the power of crystals and stones, precious and semiprecious alike, many years ago I took the habit to carry stones with me for self healing and protection. My very first one was a clear quartz that I would keep in my pocket when out, or under my pillow when sleeping. My collection of stones kept on growing from time to time with more and more colours and shapes being added to the sets. The Crystal Bible would influence me when purchasing sometimes, according to the power of the stones or what power I was after, while sometimes I would just follow my intuition in picking a stone I had not seen before. 
Occasionally I still visit these magic shops that on top of the stones sell books and special objects of power and healing and feels like stepping in another World where any worry, pain or misery can get washed away. 
I handle some of my stones almost everyday, anchoring to these in a meditative and grounding mode when I remember or I need it. I have learnt how important it is to clear our very energetic and emotional surroundings and I often let a stone be the link that lets some light reach me to clear the heavily polluted world we are living in not only my space.
`
  },
  {
    id:26,
    title:`My Dad's Briefcase`,
    name:'Ans',
    image:'suitcase.jpg',
    filter:['psychosis'],
    story:`This is my dad’s RAF briefcase and it has always featured in my psychosis. If you can imagine Steve McQueen in the Great Escape, the part where he’s always being returned to the POW camp, well this is the same for my item. Every time I’ve been hospitalised dad’s old RAF briefcase has always been in my hospital room, almost as if it’s been waiting for me to arrive. In a time of massive sleep deprivation seeing this briefcase in hospital (brought by my folks somehow) has not helped my recovery. Its always arrived with me and its time to release it to the museum where it can take its place amongst the items that mean so much to all of us. I’m in a much better place now and one day I hope to not associate the memory of my illness with it as I  am sure he used it for different things in a different time. Thanks for allowing me to release it to you.`,
  },
  {
    id:27,
    title:'Run Talk Run',
    name:'Jess',
    image:'runningshoes.jpg',
    filter:['sports'],
    story:`In October 2017 I created Run Talk Run. A space where people can talk freely about their mental health, whilst jogging alongside one another. The idea is that it's not a "performance-focused" running group but rather just a group of friends coming together to do something great for our mental AND physical health. Running is (and has been for about 4 years now) my sanity. It has pulled me out of my darkest moments, and also created some of my darkest moments too (I've had several running-performance panic attacks where I've genuinely wondered whether I'd ever regain my breath!). That being said, my "item" would most certainly be my running trainers.`
  },
  {
    id:28,
    title: 'My Oyster Card',
    name: 'The Depressed Baker',
    image: 'oyster.JPG',
    filter:['suicide'],
    story: `2 years ago

2 years ago I viewed my oyster pass as one way ticket to an efficient suicide.  One where more importantly, a loved one would not find themselves in the obviously devastating moment, of finding a loved one - me in this specific instance.
 
I will also never forget the moment before I was planning on jumping; whilst waiting for the train to arrive, I picked up a quick call from my partner relating to the shopping, and I thank god every day that I received this totally arbitrary and ultimately meaningless call.  Just hearing my partner's voice dissuaded me from jumping that day.

Now I just think more of the poor TFL drivers, and the sheer emotional strain that each and every jump attempt, must put on them.  


1 Year ago

I hated my oyster card with a vengeance 1 year ago, and it often reminds me of the crippling feelings of anxiety, every time I was on the underground when the train would pull up to a new station, close to my old place of work.  I would chew my nails to an inch of their lives, and just pray that no one I knew would get on the train and/or recognise me and engage in conversation

Today

I have used my oyster card to deliver a batch of biscuits, and it forms a necessary part to the strategy that I am trying to implement to change my life, and also hopefully the lives of others too:)

It now represents freedom and hope to me :) 
`,
  },
  {
   id: 29,
    title:'Mother',
    name: 'anonymous',
    image: 'girl.jpg',
    filter:'refugee',
    story: `I am a refugee from Syria and I left in 2014. Drawing allows you to express your psychological state, just like Van Gogh and his suicide letter. I like drawing female figures, it’s like home and my motherland, like Syria. I cannot think of one object for my soul relics, there’re birds, old valuable pieces, friends, parents, computers, but I left with nothing. `,
  },
  {
    id: 30,
    title: 'Firework',
    name: 'anonymous',
    image: 'doll.jpg',
    filter:'refugee',
    story: `My memory of the war - I remember the night we decided to leave Syria was when there were a lot of loud bombings, the electricity was cut off, it was very dark. We didn’t know what’s happening outside. My children asked me what the sound was, I told them, it was the firework. `,
  },
  {
    id: 31,
    title: 'Sophia',
    name: 'Melissa',
    image:'sophia.jpg',
    filter:'tech',
    story: `When I first read the story about Sophia the robot, I was chilled to the bone. She's the first A.I. to be given citizenship, and she had said in a previous interview that she wanted to kill all humans. In this most recent interview, she smiled pleasantly and said that she loves humans. I couldn't help but think that she had learnt how to lie, and developed a pervasive fear of A.I. Later, I realised that even if A.I. were sentient as us, and capable of evil as us, there would be good, humane A.I. as there would be evil destructive A.I. It didn't remove the danger, but it made it less terrifying thinking that we already faced threats from evil humans anyway. Sometimes, it's hard to tell apart delusion from actual danger. Elon Musk fears A.I. and he's a man of great credibility when it comes to technology. I'm definite that many of my delusions have been irrational, but the fact that we live in a time of great uncertainty makes it hard to tell. 
    Photo credit: Flickr/AI for GOOD Global Summit, CC BY`,
  },
  {
    id: 32,
    title: 'A red jacket',
    name: 'Melissa',
    image: 'jacket.jpg',
    filter:'relationship',
    story:`I once stayed with a group of artists in their 20s in Oakland, the Bay area. I was particularly close to this guy named Josh. He commented on my red jacket (the one pictured was found on the internet, similar to the one I had), saying he liked it and that it was "very sci-fi". A month later, I acted as a stunt zombie on a movie. I wore my red jacket and had to run through the rain with an axe and get shot. I was very proud of that jacket from that day on because it'd been worn by a zombie in a movie. When I next saw him, he commented on the mud on the sleeves from that rainy day on the shoot. A couple months later, I left the Bay because I experienced psychosis. Josh packed my things and brought me to the hospital, carrying me on his back. When I got out, I had to pack my things and go back home to Singapore. I couldn't find the red jacket anywhere I looked. I emailed Josh about it and he didn't reply. I kept sending him emails asking him for the jacket and even plotted on how I could get the jacket back. Could I fly to Oakland and sneak in his bedroom and retrieve it while he was asleep? Could I send an empty box and ask him to return the jacket in that box? I was obsessed with that jacket. Now I think the jacket was a symbol for something - my independence. When my independence was taken away from me and I had to go back home to live with my parents, I blamed Josh for it because he took me to the hospital. And so Josh had my jacket. Who knows? Maybe he does. But this story sure isn't really about the jacket. `
  } 

  
  
];// append each image with the directory
stories.forEach((s) => {
  if(s.image) s.image = requireImage(s.image);
});

export default {
  stories,
  description,
};
