[1mdiff --git a/app/components/stories/hcwStories.component.js b/app/components/stories/hcwStories.component.js[m
[1mindex e525e9d..fd562db 100644[m
[1m--- a/app/components/stories/hcwStories.component.js[m
[1m+++ b/app/components/stories/hcwStories.component.js[m
[36m@@ -12,5 +12,5 @@[m [mvar storiesComponentController = ['hcwStoriesService', function(hcwStoriesServic[m
 [m
 export default {[m
   template: storiesTemplate,[m
[31m-  controller: storiesComponentController[m
[32m+[m[32m  controller: storiesComponentController,[m
 };[m
\ No newline at end of file[m
[1mdiff --git a/app/services/hcwStories.data.js b/app/services/hcwStories.data.js[m
[1mindex aa6af37..5efea10 100644[m
[1m--- a/app/services/hcwStories.data.js[m
[1m+++ b/app/services/hcwStories.data.js[m
[36m@@ -91,6 +91,47 @@[m [mI guess it was my first time talking to someone so close to me in age yet so clo[m
 [m
 In a twist of irony, years later I am now really interested in diy electronics. I would have loads to talk about with that boy, though I have no idea if he's even still alive now.`,[m
   },[m
[32m+[m[32m  {[m
[32m+[m[32m   id: 7,[m
[32m+[m[32m    title:'Waves',[m
[32m+[m[32m    name: 'K',[m
[32m+[m[32m    image: 'lagomsurf.jpg',[m
[32m+[m[32m    filter:'coping',[m
[32m+[m[32m    story: `This is the very first surfboard I have ever own and it has taken me into various seas and ocean. It is a important tool for self-care, a symbol of the blue mind.[m
[32m+[m[32mWorking in mental health can be overwhelming, getting into the water has been a great way for me to leave the stress and responsibility on the shore momentarily and recharge.[m
[32m+[m[32mSurfing is a lot about balancing, so as our life. Maintaining some sort of balance has given me the best sensation when I catch a wave, as well as the sustainability for me to carry on with my work.[m
[32m+[m
[32m+[m[32mWords to the healthcare workers community:[m
[32m+[m[32mIn our work, it is easy to lose ourselves in the ocean of responsibilities and the urgencies of others. Prioritise and don’t forget your own self, find your own way to stay balance so that you can ride along the waves of stress.[m
[32m+[m[32m`,[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m   id: 8,[m
[32m+[m[32m    title:'5 Signatures',[m
[32m+[m[32m    name: 'Potato',[m
[32m+[m[32m    image: 'lagomsign.jpg',[m
[32m+[m[32m    filter:'learning',[m
[32m+[m[32m    story: `This happened during my first call as a house officer. It was my 3rd day of working after graduating from medical school, and the ward admitted a case of severe GI bleeding with shock. I was stressed and scared, as I was inexperienced in managing ill cases, had no confidence in taking blood nor setting IV cannula, and the on-call senior was dealing with another urgent case. My other house officer colleagues heard about the case, and all of them came to assess the case with me, despite being very busy themselves. In the end, we managed to stablize the patient and arrange transfusion. The assessment and treatment order was signed by all 5 of us, and these 5 signatures remain a precious memory of mine to this date.`,[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m   id: 9,[m
[32m+[m[32m    title:'My dog',[m
[32m+[m[32m    name: 'K',[m
[32m+[m[32m    image: 'lagomdog.jpg',[m
[32m+[m[32m    filter:'burnout',[m
[32m+[m[32m    story: `Apparently, dentists have one of the highest suicide rates.  I never really thought about this until I started working. All jobs are stressful in their own way, but the stress from my job, coupled with my perfectionism and overwhelming sense of feeling like an imposter, culminated in a breakdown. There was a period of time when I was coming home from work everyday pretty much crying to sleep.[m
[32m+[m
[32m+[m[32mOne day I was on my sofa at home, feeling numb and empty, when my dog jumped up onto my lap (a very rare occurrence - he’s more cat than dog) and looked up at me with his large round eyes.  It was then I realised I had been so upset I hadn’t given him any attention recently.  It made me think who or what else I’d been neglecting in my life.  I resolved afterwards to focus more of my attention on the things and people I loved.  Spending time with loved ones centred me, and reminded me that I have people in my life who believe in me even when I don’t believe in myself, and I have a dog who loves me (I think!) irrespective of my job or how flawed I think I am.[m
[32m+[m[32m`,[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m   id: 10,[m
[32m+[m[32m    title:'Being a doctor',[m
[32m+[m[32m    name: 'anonymous (a fresh doctor)',[m
[32m+[m[32m    image: 'lagomdr.jpg',[m
[32m+[m[32m    filter:'burnout',[m
[32m+[m[32m    story: `Being a med student, being a doctor.. it changes the way you look at the world. People always talk about what a blessing it must be to be able to help someone in their most dire times- I don’t deny that, but a lot of people fail to notice how much more pain there is to it. Seeing so much suffering everyday is not a blessing, it takes courage that I sometimes cannot muster [master]. As much as you get to save lives, you’re also the one holding someone’s hand while they take their last breath. You think you get used to it, that you get used to parents asking if their child could somehow defeat a metastatic cancer or snap out of a bed-bound disability, but you don’t. Every day is another day staring death in the eyes and bargaining for a fair deal, and I think now more than ever we’ve been outwitted. When you’re so intimate with morbidity and mortality, the way you look at the world changes. It’s hard to see the glitter in the grime, and yet we must- because if we lose hope, there’s no one else the world can turn to. The way you look at the world changes forever.. this perception, this survivor’s guilt, it’s always chasing you- how do I get to wake up healthy and fine each day with nothing but a heavy heart, while so many around me can’t even do that?`,[m
[32m+[m[32m  },[m
 ];// append each image with the directory[m
 [m
 stories.forEach((s) => {[m
