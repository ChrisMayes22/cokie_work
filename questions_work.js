//B05 Reading

class Question {
    constructor(id, passage, prompt, A, B, C, D, E){
        this.id = id;
        this.flagged = false;
        this.selected = id===1;
        this.answered = false;
        this.passage = passage;
        this.content = {
            prompt,
            A,
            B,
            C,
            D,
            E: E || null
        };
        this.studentResponse = null;
    }
}

new Question(
    11,
    <PassageTwo/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D.</span>,
)

new Question(
    1,
    <PassageOne/>,
    `The point of view from which the passage is told can
    best be described as that of a:`,
    <span>A. first person narrator describing the experience of 
             picking strawberries as it happens.</span>,
    <span>B. first person narrator describing events from the
             past that influenced her beliefs about gifts.</span>,
    <span>C. third person narrator describing how each member
             of a family feels about gifts of nature.</span>,
    <span>D. third person narrator describing a young girl's
            thoughts about the importance of strawberries in
            her family's celebrations.</span>,
)

new Question(
    2,
    <PassageOne/>,
    `Based on the passage, the word they in line 7 refers to:`,
    <span>F. the fields of the narrator's childhood.</span>,
    <span>G. people who present the narrator with gifts.</span>,
    <span>H. wild strawberries.</span>,
    <span>J. the narrator's parents.</span>,
)

new Question(
    3,
    <PassageOne/>,
    `The main purpose of the second paragraph
    (lines 10-21) is to:`,
    <span>A. explain why the narrator's father encouraged his
             children to give strawberries as gifts.</span>,
    <span>B. describe what the first strawberries looked like to
             the narrator's ancestors.</span>,
    <span>C. provide a cultural context for the significance of
             strawberries to the narrator's family.</span>,
    <span>D. emphasize the importance of plants in traditional
             Potawatomi stories.</span>,
)

new Question(
    4,
    <PassageOne/>,
    `Based on the passage, which action was part of the
    narrator's attempt to "give back to the strawberries"
    (lines 73-74)?`,
    <span>F. She refrained from picking strawberries before
             they were ready.</span>,
    <span>G. She weeded out patches of ground where the
             plants would take root.</span>,
    <span>H. She made the strawberries into a gift for her father.</span>,
    <span>J. She honored the legend of Skywoman by continu-
             ing to tell the story.</span>,
)

new Question(
    5,
    <PassageOne/>,
    `It can reasonably be inferred from the passage
    that the narrator learned about the growth cycle of
    strawberries by:`,
    <span>A. observing the runners and roots of the plants.</span>,
    <span>B. listening to her father talk about berry seasons.</span>,
    <span>C. planting berries with her siblings to earn money.</span>,
    <span>D. reading about how to help strawberries grow.</span>,
)

new Question(
    6,
    <PassageOne/>,
    `The quotation in line 6 is most likely included to:`,
    <span>F. demonstrate what the narrator typically says to a
             person giving her a gift.</span>,
    <span>G. represent the narrator's surprise and gratitude
             when finding strawberries.</span>,
    <span>H. clarify how the narrator believes a person should
             react when given a gift.</span>,
    <span>J. explain what the narrator's father often said when
             given strawberries.</span>,
)

new Question(
    7,
    <PassageOne/>,
    `As it is used in line 20, the word recognize most nearly
    means:`,
    <span>A. diagnose.</span>,
    <span>B. concede.</span>,
    <span>C. notice.</span>,
    <span>D. acknowledge.</span>,
)

new Question(
    8,
    <PassageOne/>,
    `In the passage, the narrator states that as a child, she
    experienced her world as a:`,
    <span>F. gift economy based on gifts from the earth.</span>,
    <span>G. wage economy in which her family struggled.</span>,
    <span>H. playground she visited on rare but wonderful
             occasions.</span>,
    <span>J. classroom filled with friends and neighbors.</span>,
)

new Question(
    9,
    <PassageOne/>,
    `According to the passage, picking the strawberries for
    their father's shortcake took the narrator and her sib-
    lings a long time because:`,
    <span>A. they kept eating the strawberries they picked.</span>,
    <span>B. the strawberry patches had many bugs.</span>,
    <span>C. their father expected only the ripest strawberries.</span>,
    <span>D. they could gather the strawberries only on
             Saturdays.</span>,
)

new Question(
    10,
    <PassageOne/>,
    `According to the passage, runners appeared on berry
    plants in the field when:`,
    <span>F. the Strawberry Moon first appeared.</span>,
    <span>G. a patch of ground was cleared for them.</span>,
    <span>H. berry season was over.</span>,
    <span>J. the berry plant was dying.</span>,
)

new Question(
    11,
    <PassageTwo/>,
    `Which of the following details from the passage best
    supports the author's claim about the impact of 
    paradigms on success?`,
    <span>A. Illustrations of the Henson Aerial Steam Carriage
             were first published in the early 1840s. </span>,
    <span>B. The Wrights' knowledge of bicycles made banking an
             airplane seem natural to them. </span>,
    <span>C. Alberto Santos-Dumont was the first to achieve
             heavier-than-air flight in Europe. </span>,
    <span>D. The first automobile was a European invention. </span>,
) 

new Question(
    12,
    <PassageTwo/>,
    `The passage can best be described as:`,
    <span>F. a critique of the solutions early aerial
             experimenters found to the problem they faced. </span>,
    <span>G. an overview of how various European inventions
             evolved. </span>,
    <span>H. an explanation of how Henson's paradigm helped
             to improve early aircraft design. </span>,
    <span>J. an analysis of how two different paradigms
             affected early aircraft design. </span>,
)   

new Question(
    13,
    <PassageTwo/>,
    `The main idea of the fourth paragraph (lines 21-30) is 
    that Henson's illustrations:`,
    <span>A. were so popular that they appeared in newspapers
             and magazines for over half a century. </span>,
    <span>B. encouraged experimenters to imagine even more
             thrilling airplane designs than Henson had. </span>,
    <span>C. inspired experimenters and helped them build the
             the first working airplanes more quickly. </span>,
    <span>D. motivated experimenters but hindered their ability
             to invent a successful airplane. </span>,
)

new Question(
    14,
    <PassageTwo/>,
    `The main idea of the seventh paragraph (lines 43-52)
    is that Henson's vision led Europe's experimenters to:`,
    <span>F. debate whether upward-angled wings or vertical
             fabric panels more effectively balanced a plane. </span>,
    <span>G. find innovative solutions to make their planes as 
             strong as horse-drawn carriages. </span>,
    <span>H. invent ways to prevent planes from tilting because
             the inventors were mistakenly fearful of banking
             the planes. </span>,
    <span>J. design airplanes to withstand any catastrophe that
             that might occur. </span>,
)

new Question(
    15,
    <PassageTwo/>,
    `The author most likely includes the examples of Santos-
    Dumont's flights in 1906 to:`,
    <span>A. illustrate how an inaccurate paradigm can impede
             overall success. </span>,
    <span>B. praise Santos-Dumont for being the first to achieve
             heavier-than-air flights. </span>,
    <span>C. describe the plane that inspired the Wrights to
             shift their paradigm. </span>,
    <span>D. explain why controlling a plane was less vital than
             the Wrights believed. </span>,
)

new Question(
    16,
    <PassageTwo/>,
    `According to the passage, compared to Europe's early
    experimenters, the Wrights were less inspired by 
    Henson's vision because they were:`,
    <span>F. determined not to copy other designers' work. </span>,
    <span>G. unaware of Henson's work with hot-air balloons. </span>,
    <span>H. accustomed to a different mode of transportation. </span>,
    <span>J. more inspired by Santos-Dumont's vision. </span>,
)

new Question(
    17,
    <PassageTwo/>,
    `As it is used in line 90, the phrase "stay on top of"
    most nearly means:`,
    <span>A. fly over. </span>,
    <span>B. pay attention to. </span>,
    <span>C. remain above. </span>,
    <span>D. keep learning about. </span>,
)

new Question(
    18,
    <PassageTwo/>,
    `As presented in the passage, the idea that human flight
    was invented when the Montgolfiers successfully
    launched their hot-air balloons reflects the perspective
    of:`,
    <span>F. the passage author.</span>,
    <span>G. the Wrights.</span>,
    <span>H. Henson.</span>,
    <span>J. the French.</span>,
)

new Question(
    19,
    <PassageTwo/>,
    `As it is used in line 19, the word sway most nearly 
    means:`,
    <span>A. fluctuation.</span>,
    <span>B. influence.</span>,
    <span>C. regime.</span>,
    <span>D. grace.</span>,
)

new Question(
    20,
    <PassageTwo/>,
    `The passage most strongly suggests that compared to
    early airplanes, horse-drawn vehicles:`,
    <span>F. required less continuous steering.</span>,
    <span>G. were less inherently stable.</span>,
    <span>H. could more safely tilt from side to side.</span>,
    <span>J. were more difficult to control.</span>,
)

new Question(
    21,
    <PassageThree/>,
    `In Passage A, the phrase "smoothly blended playing"
    (line 5) most nearly describes:`,
    <span>A. the quality that Ellington elicited from a group of
             dissimilar musicians.</span>,
    <span>B. a sound that band leaders Goodman, Shaw, and
             Lunceford demanded from their musicians.</span>,
    <span>C. a sound that Shaw achieved more successfully than
             did Lunceford and Goodman.</span>,
    <span>D. a specific goal Ellington set for his band but found
             hard to achieve.</span>,
)

new Question(
    22,
    <PassageThree/>,
    `Based on Passage A, which statement best expresses
    Teagarden's opinion of Ellington?`,
    <span>F. Teagarden viewed Ellington as his mentor.</span>,
    <span>G. Teagarden admired Ellington's piano playing but
             not his work as a band leader.</span>,
    <span>H. Teagarden found Ellington's work unappealing
             until he had a chance to play with the band.</span>,
    <span>J. Teagarden did not like anything about Ellington's
             band's music.</span>,
)

new Question(
    23,
    <PassageThree/>,
    `The author of Passage A indicates that Ellington based
    his decisions about whom to hire to join his band
    largely on:`,
    <span>A. input from the members of his band.</span>,
    <span>B. his desire to appeal to a modern audience.</span>,
    <span>C. his trust in his own ear.</span>,
    <span>D. his training as a pianist.</span>,
)

new Question(
    24,
    <PassageThree/>,
    `One of the main ideas of the second paragraph of Pas-
    age A (lines 30-48) is that in the process of achieving
    the sound he wanted from his band, Ellington:`,
    <span>F. accepted that the individual excellence of the play-
             ers might occasionally be sacrificed.</span>,
    <span>G. elicited from his players performances that tapped
             their particular musical gifts.</span>,
    <span>H. invited each musician to articulate performance
             goals that he then helped them reach.</span>,
    <span>J. maintained a strict rehearsal schedule that some of
             the musicians rebelled against. </span>,
)

new Question(
    25,
    <PassageThree/>,
    `The point of view from which Passage B is told is best
    described as that of a:`,
    <span>A. first person narrator describing the personal sacri-
             fices she made to succeed as a musician.</span>,
    <span>B. first person narrator comparing two styles of music
             as performed by the same band. </span>,
    <span>C. third person narrator who features the experiences
             and opinions of Pops and Mavis. </span>,
    <span>D. third person narrator who expresses opinions of
             Pops that contrast with those expressed by Mavis.</span>,
)

new Question(
    26,
    <PassageThree/>,
    `Which of the following statements about Pops's child-
     hood is best supported by Passage B?`,
    <span>F. He grew up in Mississippi with brothers and sis-
             ters who liked to sing together.</span>,
    <span>G. He started the Trumpet Jubilees with his siblings
             but quit by the time he was a teenager.</span>,
    <span>H. His musical career started in a small apartment
             where he taught himself to play guitar.</span>,
    <span>J. With his brothers, he was part of a singing group
             that gained Michael Jackson's admiration.</span>,
)

new Question(
    27,
    <PassageThree/>,
    `According to Passage B, who had the deepest voice in
     the family's singing group?`,
    <span>A. Pops</span>,
    <span>B. Mavis</span>,
    <span>C. Pervis</span>,
    <span>D. Cleotha</span>,
)

new Question(
    28,
    <PassageThree/>,
    `Compared to Passage A, Passage B presents events in
     an order that is:`,
    <span>F. chronologically opposite; it proceeds from
             describing present events to describing events con-
             sistently further back in time.</span>,
    <span>G. chronologically more vague; it gives no indication
             of how the events described related to one another
             in time.</span>,
    <span>H. anchored more firmly in one stretch of time while
             making occasional references to events before and  
             after that stretch of time.</span>,
    <span>J. very similar, as it initially presents the musician at
             the height of his fame and then examines the mul-
             tiple steps that led to that fame.</span>,
)

new Question(
    29,
    <PassageThree/>,
    `Which of the following comparisons between one of
     the musicians mentioned in Passage A and Pops is best
     supported by the passages?`,
    <span>A. Like Hibbler, Pops was hired to join an established
             jazz band.</span>,
    <span>B. Like Ellington, Pops is compared to a painter
             putting different colors side by side on a canvas.</span>,
    <span>C. Like Strayhorn, Pops had a mentor he turned to
             throughout his life.</span>,
    <span>D. Like Goodman, Pops valued a sound that was
             precise.</span>,
)

new Question(
    30,
    <PassageThree/>,
    `Both passages make use of which of the following?`,
    <span>F. Lyrics from the musical compositions that
             Ellington or Pops made famous</span>,
    <span>G. References to professional music critics who fol-
             lowed the careers of Ellington or Pops</span>,
    <span>H. Excerpts from the memoirs of family members
             who have mixed opinions about Ellington or Pops</span>,
    <span>J. Quotations from people who observed up close the
             working styles of Ellington or Pops</span>,
)

new Question(
    31,
    <PassageFour/>,
    `The main idea of the passage is that the Messel Pit is
    significant primarily because it:`,
    <span>A. substantiates the theory that mammals appeared
             200 million years ago.</span>,
    <span>B. features fossils of mammals and dinosaurs
             interacting.</span>,
    <span>C. contains fossils that reveal warm-blooded ani-
             mals evolved.</span>,
    <span>D. has fossils of dinosaurs that have not been found
             elsewhere.</span>,
)

new Question(
    32,
    <PassageFour/>,
    `The main purpose of the second paragraph (lines 7-16)
     is to discuss:`,
    <span>F. potential explanations for the large number of
             animal fossils in the lake.</span>,
    <span>G. conditions in the lake that led to the large number
             of dinosaur fossils.</span>,
    <span>H. the toxic prehistoric plants that grew in or near the
             lake.</span>,
    <span>J. feeding habits of mammals that lived near the lake.</span>,
)

new Question(
    33,
    <PassageFour/>,
    `The passage indicates that dinosaurs and mammals
     coexisted for approximately how many millions of
     years?`,
    <span>A. 200</span>,
    <span>B. 150</span>,
    <span>C. 66</span>,
    <span>D. 50</span>,
)

new Question(
    34,
    <PassageFour/>,
    `In the passage, Ailuravis macrurus most nearly serves
     as an example of a species that: `,
    <span>F. evolved into a modern-day animal, despite compe-
             tition from similar animals.</span>,
    <span>G. adapted to its environment in ways scientists
             hadn't seen previously.</span>,
    <span>H. developed physical traits that its modern-day
             descendants did not inherit.</span>,
    <span>J. left no descendants, despite its apparent resem-
             blance to modern-day animals.</span>,
)

new Question(
    35,
    <PassageFour/>,
    `Based on the passage, which of the following scenarios
     most nearly represents an example of evolutionary
     convergence?`,
    <span>A. Several species of birds each evolving a different
             beak to take advantage of new food sources</span>,
    <span>B. One bird species becoming extinct because of
             competition from a similar species</span>,
    <span>C. Distinct species of birds developing wings that are
             nearly identical in structure</span>,
    <span>D. Many bird species moving to the same region
             because of food scarcity</span>,
)

new Question(
    36,
    <PassageFour/>,
    `According to the passage, the Messel Pit crater was
     formed by:`,
    <span>F. an impact from an asteroid.</span>,
    <span>G. erosion from a river.</span>,
    <span>H. steam erupting from underground.</span>,
    <span>J. a volcano spewing molten rock.</span>,
)

new Question(
    37,
    <PassageFour/>,
    `It can reasonably be inferred from the passage that
     fewer fossils would have been preserved in the Messel
     Pit if the lake they were in had contained:`,
    <span>A. oxygen circulating near the bottom.</span>,
    <span>B. layers of clay on the bottom.</span>,
    <span>C. abundant algae on the surface.</span>,
    <span>D. carbon dioxide that rose to the surface.</span>,
)

new Question(
    38,
    <PassageFour/>,
    `It can most reasonably be inferred from the passage
     that mammals survived the impact that killed the
     dinosaurs because mammals:`,
    <span>F. existed in such large numbers.</span>,
    <span>G. ate food that dinosaurs could not.</span>,
    <span>H. had the ability to reproduce rapidly.</span>,
    <span>J. were able to adapt to the change in climate.</span>,
)

new Question(
    39,
    <PassageFour/>,
    `According to the passage, by examining the contents of
     a prehistoric horse's stomach, paleontologists deter-
     mined that the horse ate:`,
    <span>A. more grass than modern horses eat.</span>,
    <span>B. many plants that modern horses eat.</span>,
    <span>C. food from the ground of forest.</span>,
    <span>D. food from a prehistoric open plan.</span>,
)

new Question(
    40,
    <PassageFour/>,
    `Based on the passage, which of the following pieces of
     evidence supports the conclusion that prehistoric
     horses had adopted herd behavior?`,
    <span>F. Specimens of pregnant mares were found near fos-
             sils of young foals.</span>,
    <span>G. Eight fossils of mares were found with the same
             kinds of plants in their digestive tracts.</span>,
    <span>H. Fossils of mare hoofprints that all pointed in the
             same direction were found.</span>,
    <span>J. Fossils of pregnant mares that each carried a single
             foal were formed.</span>,
)

//B02 Reading

new Question(
    1,
    <PassageOne/>,
    `Which of the following topics preoccupies Alvaro 
    during his drive?`,
    <span>A. The way he handled do&ntilde;a Eugenia's inheritance</span>,
    <span>B. The falling price of the crop he had hoped would 
             bring him financial security</span>,
    <span>C. The damage he has done to his reputation by
             making thoughtless career changes over the years</span>,
    <span>D. The personal and practical elements that factor
             into his efforts to succeed in business</span>,
)

new Question(
    2,
    <PassageOne/>,
    `Which of the following descriptions best fits Alvaro's
    approach to growing cotton as it is described in the 
    passage?`,
    <span>F. Extremely arrogant; he feels entitled to success
             without working hard to achieve it.</span>,
    <span>G. Deeply involved; there is little he won't do to
             succeed.</span>,
    <span>H. Detached; he thinks of the pursuit of wealth is better
             left to those who care about it.</span>,
    <span>J. Na&iuml;ve; he has ignored the advice of those with
             years of experience growing the crop.</span>,
)

new Question(
    3,
    <PassageOne/>,
    `How does Alvaro's opinion of coffee and cotton com-
    pare to that of his mother's?`,
    <span>A. Alvaro thinks that cotton is the superior crop, but
             his mother thinks coffee is an equally lucrative
             crop.</span>,
    <span>B. Alvaro thinks that cotton is the better wartime
             crop, but his mother thinks coffee is.</span>,
    <span>C. Alvaro thinks that both crops are susceptible to 
             insect infestation, but his mother thinks that nei- 
             ther is.</span>,
    <span>D. Alvaro thinks that cotton holds the more promising 
             future for him, but his mother thinks coffee does.</span>,
)

new Question(
    4,
    <PassageOne/>,
    `How does Alvaro view the burden responsibility his
    mother says she wants lifted from her shoulders?`,
    <span>F. As the barrier between Alvaro and his success at 
             growing cotton</span>,
    <span>G. As the sorrow that mars the otherwise happy life 
             of his mother</span>,
    <span>H. As an enduring presence that his mother works to 
             her advantage</span>,
    <span>J. As a heavy weight that lifted from Alvaro's shoul- 
             ders when he defied his mother</span>,
)

new Question(
    5,
    <PassageOne/>,
    `Which of the following phrases most accurately
    describes the last paragraph?`,
    <span>A. Wishful thinking supported by more wishful 
             thinking</span>,
    <span>B. Painful realizations followed by widespread 
             blaming</span>,
    <span>C. A sentiment and the experiences that reverse it</span>,
    <span>D. A stand taken by one person and supported by 
             another</span>,
)

new Question(
    6,
    <PassageOne/>,
    `According to the passage, where is Alvaro headed in 
    his car on a late afternoon in early November?`,
    <span>F. His plantation outside Usulut&aacute;n</span>,
    <span>G. His law office</span>,
    <span>H. His mother's hacienda</span>,
    <span>J. His home in San Salvador</span>,
)

new Question(
    7,
    <PassageOne/>,
    `Which of the following actions is presented in the pas- 
    sage as being more figurative than literal?`,
    <span>A. "Gripped the wheel" (line 1)</span>,
    <span>B. "Took over the reins" (line 29)</span>,
    <span>C. "Heard his mother's lamentations" (line 37-38)</span>,
    <span>D. "Sown the best seed" (lines 54-55)</span>,
)

new Question(
    8,
    <PassageOne/>,
    `The quality of glass that is most strongly alluded to in
    lines 36-40 is:`,
    <span>F. fragility.</span>,
    <span>G. transparency.</span>,
    <span>H. smoothness.</span>,
    <span>J. sharp edges.</span>,
)

new Question(
    9,
    <PassageOne/>,
    `To what does Alvaro most directly attribute the rise of
    cotton prices?`,
    <span>A. The end of a world war</span>,
    <span>B. The effectiveness of new pesticides</span>,
    <span>C. The growth of the local textile industry</span>,
    <span>D. The failure of the previous year's harvest</span>,
)

new Question(
    10,
    <PassageOne/>,
    `In the context of the passage, the primary function of
    lines 63-67 is to list the occupations that Alvaro:`,
    <span>F. dabbled in but found less compelling than cotton
             farming.</span>,
    <span>G. held in high regard though his mother did not.</span>,
    <span>H. had rejected as representing the foolish notions of 
             his youth.</span>,
    <span>J. envisioned as being within his reach were he to 
             succeed in farming cotton.</span>,
)

new Question(
    11,
    <PassageTwo/>,
    `Which of the following statements best describes the
    organizational structure of the passage?`,
    <span>A. The author describes a psychological concept and
             then explores aspects of that concept that support a
             central claim.</span>,
    <span>B. The author presents theories about a psychological
             concept by describing his own experiences with it.</span>,
    <span>C. The author provides a chronology of the develop-
             ment of a psychological concept.</span>,
    <span>D. The author presents a problem from the field of 
             psychology and then offers several possible solu-
             tions to that problem.</span>,
)

new Question(
    12,
    <PassageTwo/>,
    `Based on the passage, which of the following state-
    ments best captures the central idea behind the concept
    of channel capacity?`,
    <span>F. "There is a concept in cognitive psychology called
             the channel capacity" (lines 1-2).</span>,
    <span>G. "This is remarkably consistent finding" (line 14).</span>,
    <span>H. "As human beings, we can only handle so much
             information at once" (lines 23-24).</span>,
    <span>J. "But if you think about it, we clearly have a chan-
             nel capacity for feelings as well" (lines 27-28).</span>,
)

new Question(
    13,
    <PassageTwo/>,
    `According to the passage, which of the following is a 
    theory about the evolution of brain size in primates
    that is supported by some scientists but NOT by
    Dunbar?`,
    <span>A. Primates' brains increased in size only slightly as
             primates evolved.</span>,
    <span>B. Primates' brains became larger as primates' social
             groups became larger.</span>,
    <span>C. Primates' brains became larger because primates
             changed their eating habits.</span>,
    <span>D. Primates' brains evolved relatively slowly in com-
             parison to the rest of their bodies.</span>,
)

new Question(
    14,
    <PassageTwo/>,
    `The main idea of the last paragraph is that:`,
    <span>F. as brains evolve, they decrease in size.</span>,
    <span>G. Dunbar has gone to great lengths to try to prove
             his argument.</span>,
    <span>H. the neocortex is the part of the brain responsible
             for tracking social relationships.</span>,
    <span>J. humans have the largest brains of all primates
             because humans socialize in the largest groups.</span>,
)

new Question(
    15,
    <PassageTwo/>,
    `The passage defines a sympathy group most specifi-
    cally as:`,
    <span>A. a small group of animals of the same species.</span>,
    <span>B. any cluster of primates that live together.</span>,
    <span>C. the people one feels truly close to.</span>,
    <span>D. a person's immediate family.</span>,
)

new Question(
    16,
    <PassageTwo/>,
    `Which of the following statements best describes how
    the author views Dunbar's theory of social channel
    capacity?`,
    <span>F. He is intrigued by Dunbar's theory and finds
             Dunbar's argument compelling.</span>,
    <span>G. He believes Dunbar's argument is problematic but
             cannot disprove the theory.</span>,
    <span>H. He is insure that Dunbar's theory will ever be
             accepted by the larger scientific community.</span>,
    <span>J. He believes Dunbar's argument is indisputable and
             that the supporting research is exhaustive.</span>,
)

new Question(
    17,
    <PassageTwo/>,
    `Based on the passage, the assertion that primates have
    the largest brains of all mammals is presented as:`,
    <span>A. a fact that serves as the author's main point in the
             passage.</span>,
    <span>B. a fact that serves as the basis for Dunbar's
             argument.</span>,
    <span>C. an opinion the author offers to explain Dunbar's
             theory.</span>,
    <span>D. an opinion Dunbar is trying to prove with his
             theory.</span>,
)

new Question(
    18,
    <PassageTwo/>,
    `As it is used in line 56, the word sophisticated most
    nearly means:`,
    <span>F. worldly.</span>,
    <span>G. complex.</span>,
    <span>H. cultured.</span>,
    <span>J. genteel.</span>,
)

new Question(
    19,
    <PassageTwo/>,
    `According to the passage, one reason some scientists
    believe an animal uses more brainpower to eat fruits
    than it does to eat leaves is because fruits:`,
    <span>A. are smaller than leaves and require practice to eat.</span>,
    <span>B. cannot be eaten by all animals, unlike leaves.</span>,
    <span>C. offer more nutrition than most leaves.</span>,
    <span>D. are not as easily accessible as leaves.</span>,
)

new Question(
    20,
    <PassageTwo/>,
    `Based on the passage, which of the following state-
    ments, if true, would most WEAKEN Dunbar's theory?`,
    <span>F. Some primates with relatively small neocortexes
             socialize in larger groups than humans.</span>,
    <span>G. The human brain is continuing to evolve as social
             networking expands.</span>,
    <span>H. Except for humans, apes have the largest brains
             among primates. </span>,
    <span>J. Mountain gorillas live in groups that average nine
             individuals.</span>,
)

new Question(
    21,
    <PassageThree/>,
    `The organization of Passage A is best described as a
    list of:`,
    <span>A. innovations in miniature art followed by an expla- 
             nation of techniques for creating miniatures.</span>,
    <span>B. misconceptions about miniature art followed by a
             personal account of working with miniatures.</span>,
    <span>C. qualities miniature things share, including descrip- 
             tive examples that illustrate these qualities.</span>,
    <span>D. reasons artists create miniature things, including
             testimonies from major artists.</span>,
)

new Question(
    22,
    <PassageThree/>,
    `The example of "dollhouse land" (lines 18-22) primar-
    ily serves to illustrate the author's point that miniatures
    can encourage people to:`,
    <span>F. live life at a slower pace.</span>,
    <span>G. disregard their own size.</span>,
    <span>H. remember important places.</span>,
    <span>J. look hard at hidden crevices.</span>,
)

new Question(
    23,
    <PassageThree/>,
    `As it is used in line 33, the word mediated most nearly
    means:`,
    <span>A. considered.</span>,
    <span>B. advised.</span>,
    <span>C. solved.</span>,
    <span>D. aided.</span>,
)

new Question(
    24,
    <PassageThree/>,
    `The author of Passage B most likely summarizes the
    assertions of the essayist Benjamin in order to:`,
    <span>F. explain the principle the Morgan Library used
             when deciding whether to show the original prayer
             book or a reproduction.</span>,
    <span>G. present a major argument in the art field that the
             passage author rejected when deciding to view the
             prayer book in person.</span>,
    <span>H. support the passage author's assertion that the
             prayer book is a gallery unto itself.</span>,
    <span>J. offer a second reviewer's opinion of the prayer
             book.</span>,
)

new Question(
    25,
    <PassageThree/>,
    `According to Passage B, were the author's expecta-
    tions about seeing the prayer book in person ultimately
    met?`,
    <span>A. Yes, because he was able to view detail of the
             book down to its brushstrokes.</span>,
    <span>B. Yes, because he was able to learn about the book's
             history while at the exhibit.</span>,
    <span>C. No, because he was able to view the book in
             greater detail using the library's website.</span>,
    <span>D. No, because he found the artwork in the book to be
             of poor quality.</span>,
)

new Question(
    26,
    <PassageThree/>,
    `The author of Passage B indicates that the figures in
    the prayer book are approximately the size of:`,
    <span>F. a fingernail.</span>,
    <span>G. a pucker of canvas.</span>,
    <span>H. the palm of a hand.</span>,
    <span>J. a single hair.</span>,
)

new Question(
    27,
    <PassageThree/>,
    `The author of Passage B speculates that one reason the
    prayer book was commissioned was to allow its owners
    to:`,
    <span>A. enjoy the extravagance of possessing an elaborate
             work of art.</span>,
    <span>B. avoid the unpredictability of early printing methods.</span>,
    <span>C. help the book's artist create miniatures for a
             living.</span>,
    <span>D. instill a love of reading in Queen Claude.</span>,
)

new Question(
    28,
    <PassageThree/>,
    `Compared to the writing style of Passage B, the writ-
    ing style of Passage A is more:`,
    <span>F. indignant and argumentative.</span>,
    <span>G. contemplative and whimsical.</span>,
    <span>H. flippant and sarcastic.</span>,
    <span>J. literal and scientific.</span>,
)

new Question(
    29,
    <PassageThree/>,
    `Which of the following statements best captures a
    main difference in the focus of the two passages?`,
    <span>A. Passage A focuses on the appeal of miniatures in
             general, while Passage B focuses on the experi-
             ence of viewing a single miniature object.</span>,
    <span>B. Passage A focuses on the author's memories of
             miniatures from her childhood, while Passage B
             focuses on a famous collection of miniatures.</span>,
    <span>C. Passage A focuses on the historical significance of
             miniatures, while Passage B focuses on how
             miniatures influence contemporary art.</span>,
    <span>D. Passage A focuses on miniatures as an art form,
             while Passage B focuses on the practical uses of 
             miniatures.</span>,
)

new Question(
    30,
    <PassageThree/>,
    `Based on the passages, both authors would most likely
    agree that an important factor contributing to the artis-
    tic value of a miniature is the artist's ability to:`,
    <span>F. create working replicas of larger, real objects.</span>,
    <span>G. master the use of unusual and costly materials.</span>,
    <span>H. conceal abstract art within more realistic images.</span>,
    <span>J. render objects and images with painstaking detail.</span>,
)

new Question(
    31,
    <PassageFour/>,
    `Within the passage, the discussion of Wing's scientific
    research primarily functions as:`,
    <span>A. an example of a study that resulted in discov-
             ery of the Big Red.</span>,
    <span>B. an illustration of the methods used to date geologi-
             cal epochs.</span>,
    <span>C. a counterargument to current assumptions about 
             the PETM.</span>,
    <span>D. a framework for exploring the PETM and various
             investigations of it.</span>,
)

new Question(
    32,
    <PassageFour/>,
    `As summarized in the passage, Wing's research
    focuses primarily on:`,
    <span>F. comparing fossilized plant life from the Paleocene
             and the Eocene.</span>,
    <span>G. measuring the carbon content of fossilized teeth
             from the time of the PETM.</span>,
    <span>H. determining the rock and mineral content of the
             Big Red.</span>,
    <span>J. analyzing the mammal fossils found throughout
             the Big Horn Basin.</span>,
)

new Question(
    33,
    <PassageFour/>,
    `The last three paragraphs (lines 68-89) support which
    of the following conclusions about Wing and his
    research?`,
    <span>A. He has yet to find concrete support for his
             hypothesis.</span>,
    <span>B. He has serious reservations about his hypothesis
             based on the evidence he has found.</span>,
    <span>C. He has discovered evidence that supports his
             hypothesis.</span>,
    <span>D. He is relying on the findings of other researchers
             who study ancient plants in order to support his 
             hypothesis.</span>,
)

new Question(
    34,
    <PassageFour/>,
    `Based on the passage, which of the following features
    of the Big Horn Basin serves as the best evidence that
    the transition between the Paleocene and the Eocene
    was, geologically speaking, abrupt?`,
    <span>F. The abundance of fossilized sea creatures</span>,
    <span>G. The abundance of fossilized Eocene leaves</span>,
    <span>H. The jagged mountain ranges surrounding the area</span>,
    <span>J. The band of light gray sandstone at Polecat Bench</span>,
)

new Question(
    35,
    <PassageFour/>,
    `Which of the following events referred to in the pas-
    sage occurred last chronologically?`,
    <span>A. Miniature fossils were found at Polecat Bench.</span>,
    <span>B. Wing began his methodical search for fossils in the
             Big Horn Basin.</span>,
    <span>C. Kennett and Stott investigated a major extinction 
             of small, shelly creatures.</span>,
    <span>D. Koch, Zachos, and Gingerich measured the carbon
             content of fossilized teeth and nodules.</span>,
)

new Question(
    36,
    <PassageFour/>,
    `The passage specifically mentions which of the follow-
    ing types of leaf fossils as a type that was found by
    Wing?`,
    <span>F. Legume</span>,
    <span>G. Conifer</span>,
    <span>H. Cypress</span>,
    <span>J. Broadleaf</span>,
)

new Question(
    37,
    <PassageFour/>,
    `The passage indicates that which of the following is
    true of  the first relatives of deer`,
    <span>A. They had few specializations.</span>,
    <span>B. They were a precursor to the first horses.</span>,
    <span>C. They are present in the Paleocene fossil record.</span>,
    <span>D. They appeared during the early Eocene.</span>,
)

new Question(
    38,
    <PassageFour/>,
    `According to the passage, which of the following sci-
    entists focused his research on an area outside of the
    Big Horn Basin?`,
    <span>F. Wing</span>,
    <span>G. Kennett</span>,
    <span>H. Gingerich</span>,
    <span>J. Zachos</span>,
)

new Question(
    39,
    <PassageFour/>,
    `As it is used in line 58, the phrase geochemical glitch
    most nearly refers to the:`,
    <span>A. low carbon levels found in 55.5-million-year-old
             Big Horn Basin rocks.</span>,
    <span>B. spike in atmospheric carbon that occurred during
             the late Paleocene.</span>,
    <span>C. steep rise in deep-ocean carbon levels that
             occurred during the late Paleocene.</span>,
    <span>D. low carbon levels found in fossilized plants.</span>,
)

new Question(
    40,
    <PassageFour/>,
    `The primary function of the eighth paragraph (lines
        63-67) is to:`,
    <span>F. introduce Wing's theories about the Polecat Bench
             mammal fossils.</span>,
    <span>G. summarize the passage's preceding discussion of
             the PETM.</span>,
    <span>H. shift the passage's focus back to Wing and his
             study of fossilized plants.</span>,
    <span>J. cast doubt on the previously discussed findings of
             Koch, Zachos, and Gingerich.</span>,
)

//A09, Reading 

new Question(
    1,
    <PassageOne/>,
    `Which of the following events referred to in the passage
    happened first chronologically?`,
    <span>A. The author woke up at 5:00 a.m.</span>,
    <span>B. The students on the canal boats quieted down.</span>,
    <span>C. The author's bus passed the Amsterdam airport.</span>,
    <span>D. Flowers and plants started arriving at the auction.</span>,
)

new Question(
    2,
    <PassageOne/>,
    `The main idea of the first paragraph is that:`,
    <span>F. the author is not accustomed to getting up very
             early in the morning.</span>,
    <span>G. the author is surprised by how quiet Amsterdam is
             early in the morning.</span>,
    <span>H. thought Amsterdam in general is made up of late
             risers, the local flower trade is busiest in early
             morning.</span>,
    <span>J. because Amsterdam is usually bustling with activ-
             ity, it is advisable to meet with people in the local
             flower trade early in the morning.</span>,
)

new Question(
    3,
    <PassageOne/>,
    `The author most strongly suggests that when meeting
    with a person in the lofwer trade in the morning, that
    person will look impatient because:`,
    <span>A. people in the flower trade are generally late risers.</span>,
    <span>B. he or she is anxious about wasting time.</span>,
    <span>C. he or she can't remember why the meeting was
             scheduled in the first place.</span>,
    <span>D. people living in Amsterdam are always on the go.</span>,
)

new Question(
    4,
    <PassageOne/>,
    `The informaiton between the dashes in lines 23-25
    most strongly suggests that flower markets generally
    tend to:`,
    <span>F. function best in small cities.</span>,
    <span>G. merge if both markets are successful.</span>,
    <span>H. operate in a competitive atmosphere.</span>,
    <span>J. suffer when competing vendors appear.</span>,
)

new Question(
    5,
    <PassageOne/>,
    `Based on the author's discussion of the "exhausting
    journey" (line 45) experienced by flowers sent to auction,
    the author would most likely agree with the idea
    that these flowers:`,
    <span>A. are surprisingly resilient.</span>,
    <span>B. are picked past their prime.</span>,
    <span>C. have remarkably complex biological needs.</span>,
    <span>D. should be shipped by plane to remain fresh.</span>,
)

new Question(
    6,
    <PassageOne/>,
    `Based on the passage, the main way the US flower
    market differs from the European floewr market is that:`,
    <span>F. flowers in the United States are usually shipped
             directly to customers.</span>,
    <span>G. flowers in the United States are transported by
             truck, rail, and plane.</span>,
    <span>H. there are no wholesale flower markets in the 
             United States.</span>,
    <span>J. there is no centralized flower market in the United
             States.</span>,
)

new Question(
    7,
    <PassageOne/>,
    `As it is used in line 18, the word modest most nearly means:`,
    <span>A. bashful.</span>,
    <span>B. simple.</span>,
    <span>C. middling.</span>,
    <span>D. decent.</span>,
)

new Question(
    8,
    <PassageOne/>,
    `Details in the third paragraph (lines 33-46) indicate
    that one similarity between the flower industry in the
    United States and the flower industry in Holland is that
    both:`,
    <span>F. have well-known high-tech flower auctions.</span>,
    <span>G. are supplied primarily by growers in Europe.</span>,
    <span>H. conduct major flower auctions all year long.</span>,
    <span>J. use some of the same growers and wholesalers.</span>,
)

new Question(
    9,
    <PassageOne/>,
    `The author refers to the Magic Kingdom and Epcot
    theme parks mainly to:`,
    <span>A. indicate that the Aalsmeer market is more crowded
             than the two theme parks combined.</span>,
    <span>B. provide support for the idea that the Aalsmeer
             market is a lot of fun to attend.</span>,
    <span>C. suggest that the Aalsmeer market employs as many
             people as the two theme parks do.</span>,
    <span>D. help emphasize the sprawling space the Aalsmeer
             market occupies.</span>,
)

new Question(
    10,
    <PassageOne/>,
    `According to the passage, which of the following numbers
    of flowers is sold at the Aalsmeer auction?`,
    <span>F. Ten thousand flowers per day</span>,
    <span>G. Half of the flowers grown in Holland</span>,
    <span>H. Twenty percent of the world's cut flowers</span>,
    <span>J. Eighty percent of the flowers in the European market</span>,
)

new Question(
    11,
    <PassageTwo/>,
    `Which of the following statements best captures the 
    broad, general message of the passage?`,
    <span>A. The most effective leader pairs strong inner confi-
             dence with public displays of humility.</span>,
    <span>B. Leaving a comfortable, familiar life for the 
             unknown will likely have great rewards.</span>,
    <span>C. Even a leader who is strongly supported by the
             public may have deep, private insecurities.</span>,
    <span>D. Electing someone who is not prepared to lead many
             have dangerous consequences.</span>,
)

new Question(
    12,
    <PassageTwo/>,
    `One function in the passage of including information
    about Mount Vernon and Martha Washington is to
    create a contrast between George Washington's:`,
    <span>F. carefree, casual demeanor around his family and
             his stern aspect with advisors and aides.</span>,
    <span>G. idyllic, established home life and the uncertainty
             of what was to come in his public life.</span>,
    <span>H. restlessness at home and his calm, collected sense
             of industriousness as president. </span>,
    <span>J. enjoyment of private home life and his dislike of
             working without close advisors in government.</span>,
)

new Question(
    13,
    <PassageTwo/>,
    `As it is used in line 35, the phrase "stiff verbal minuet"
    refers to the interaction between George Washington
    and Thomson as Washington:`,
    <span>A. writes a letter to Langdon, the president pro tempore.</span>,
    <span>B. excuses himself from Thomson so that he may say
             goodbye to his wife, Martha.</span>,
    <span>C. is officially told that he has been elected president
             of the United States and accepts the position.</span>,
    <span>D. formally resigns from his position as commander
             in chief of the army and appoints a replacement.</span>,
)

new Question(
    14,
    <PassageTwo/>,
    `The passage author argues that the letter read to
    George Washington on April 14, 1789, suggests
    Langdon's concern that:`,
    <span>F. Washington would be forced by Congress to
             confer his duties to a president pro tempore for
             several months.</span>,
    <span>G. Washington had been behaving inappropriately as 
        commander in chief of the army.</span>,
    <span>H. the problems facing the country were insurmount-
        able or any new president.</span>,
    <span>J. there was a chance that Washington would reject
        the opportunity to become president.</span>,
)

new Question(
    15,
    <PassageTwo/>,
    `The passage characterized which of the following
    people as expressing a subtle acknowledgement of 
    George Washington's burden?`,
    <span>A. Knox</span>,
    <span>B. Langdon</span>,
    <span>C. Rutledge</span>,
    <span>D. Thomson</span>,
)

new Question(
    16,
    <PassageTwo/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    17,
    <PassageTwo/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    18,
    <PassageTwo/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    19,
    <PassageTwo/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    20,
    <PassageTwo/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    21,
    <PassageThree/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    22,
    <PassageThree/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    23,
    <PassageThree/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    24,
    <PassageThree/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    25,
    <PassageThree/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    26,
    <PassageThree/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    27,
    <PassageThree/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    28,
    <PassageThree/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    29,
    <PassageThree/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    30,
    <PassageThree/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    31,
    <PassageFour/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    32,
    <PassageFour/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    33,
    <PassageFour/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    34,
    <PassageFour/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    35,
    <PassageFour/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    36,
    <PassageFour/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    37,
    <PassageFour/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    38,
    <PassageFour/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)

new Question(
    39,
    <PassageFour/>,
    ``,
    <span>A. </span>,
    <span>B. </span>,
    <span>C. </span>,
    <span>D. </span>,
)

new Question(
    40,
    <PassageFour/>,
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)
