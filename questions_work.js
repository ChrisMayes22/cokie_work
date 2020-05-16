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
    with a person in the flower trade in the morning, that
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
    `The information between the dashes in lines 23-25
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
    market differs from the European flower market is that:`,
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
    `According to the passage, the congressional delay in 
    certifying George Washington's election allowed 
    Washington time to:`,
    <span>F. steep himself in his doubts and fears, causing them 
             to grow.</span>,
    <span>G. share with others his hopes for and confidence in 
             the republican government.</span>,
    <span>H. closely consider the herculean task ahead, which 
             eased some of his worry. </span>,
    <span>J. confer with his aides about the difficulties facing
             the country.</span>,
)

new Question(
    17,
    <PassageTwo/>,
    `The passage indicates that Thomson's journey to
    Mount Vernon was made difficult bby:`,
    <span>A. the lack of party accompany him, which left
             him vulnerable to bandits.</span>,
    <span>B. his need to return as quickly as possible to his
             duties as the secretary of Congress.</span>,
    <span>C. terrile weather and a route that included river
             crossings and bad roads.</span>,
    <span>D. his miscalculation of the route, which led to a
             long, arduous detour.</span>,
)

new Question(
    18,
    <PassageTwo/>,
    `As it is used in line 43, the word "mark" most nearly
    means:`,
    <span>F. boundary.</span>,
    <span>G. sign.</span>,
    <span>H. impact.</span>,
    <span>J. stain.</span>,
)

new Question(
    19,
    <PassageTwo/>,
    `The passage most strongly implies that while
    Washington was commander in chief of the army, one
    way he had preserved his good reputation was by:`,
    <span>A. giving speeches.</span>,
    <span>B. publishing pamphlets.</span>,
    <span>C. writing letters.</span>,
    <span>D. remaining silent.</span>,
)

new Question(
    20,
    <PassageTwo/>,
    `The passage author makes clear Martha Washington's
    view that her husband's return to public life was:`,
    <span>F. an inevitable event for him.</span>,
    <span>G. a subtle rejection of his private life with her.</span>,
    <span>H. an inexcusable decision for him.</span>,
    <span>J. a source of pride for her.</span>,
)

new Question(
    21,
    <PassageThree/>,
    `In Passage A, the first paragraph (lines 1-7) functions
    mainly to emphasize the:`,
    <span>A. leadership skills Sze demonstrated in relegating
             work to her assistants at the Asia Society.</span>,
    <span>B. ingenuity and problem solving Sze used to create
             her eight sculptures at the Asia Society.</span>,
    <span>C. amount of time and materials Sze needed to create
             her eight sculptures at the Asia Society.</span>,
    <span>D. amount of space Sze's eight sculptures took up on
             the second floor of the Asia Society.</span>,
)

new Question(
    22,
    <PassageThree/>,
    `Which of the following sculptural installations would
    be most conceptually similar to Sze's sculptural instal-
    lations discussed in the second paragraph of Passage A
    (lines 8-21)?`,
    <span>F. An oversized tricycle hanging above a sofa</span>,
    <span>G. A large slab of marble with streams of water rip-
             pling over it</span>,
    <span>H. Rubber bands and nails joined together to form a
             network of cables</span>,
    <span>J. Paper clips strewn about randomly on a gallery
             floor</span>,
)

new Question(
    23,
    <PassageThree/>,
    `As it is used in line 13, the word "elaborate" most nearly
    means:`,
    <span>A. luxurious.</span>,
    <span>B. exact.</span>,
    <span>C. overdone.</span>,
    <span>D. complicated.</span>,
)

new Question(
    24,
    <PassageThree/>,
    `It can most reasonably be inferred from Passage A that
    the main reason Sze requested that the floor-to-ceiling
    window be uncovered is that she wanted the window to
    contribute to her exploration of the:`,
    <span>F. relationship between landscape and architecture.</span>,
    <span>G. influences of consumerism on cultural constructs.</span>,
    <span>H. differences between Asian and Western art.</span>,
    <span>J. effects of urban sprawl on the environment.</span>,
)

new Question(
    25,
    <PassageThree/>,
    `In Passage A, the author most likely references
    Bernini's "The Ecstasy of St. Teresa" in order to
    emphasize that Sze's installations appear:`,
    <span>A. antiquated.</span>,
    <span>B. symmetrical.</span>,
    <span>C. ornate.</span>,
    <span>D. lively.</span>,
)

new Question(
    26,
    <PassageThree/>,
    `The author of Passage B is most critical of which art-
    works in Sze's show "Infinite Line"?`,
    <span>F. Two-dimensional works on paper</span>,
    <span>G. Three-dimensional works on paper</span>,
    <span>H. Sculptural installations</span>,
    <span>J. Collages</span>,
)

new Question(
    27,
    <PassageThree/>,
    `As it is used in line 57, the word "fashions" most nearly
    means:`,
    <span>A. accommodates.</span>,
    <span>B. initiates.</span>,
    <span>C. combines.</span>,
    <span>D. wears.</span>,
)

new Question(
    28,
    <PassageThree/>,
    `Which of the following statements best captures a dif-
    ference in the purposes of the passages?`,
    <span>F. Passage A provides a critique of how Sze concep-
             tualizes her art shows, while Passage B provides a
             comparison between Sze and other Asian Ameri-
             can artists.</span>,
    <span>G. Passage A provides a glimpse into Sze's creative
             process, while Passage B provides a critique of her
             art show "Infinite Line."</span>,
    <span>H. Passage A provides a comparison of Sze's per-
             sonal and public personas, while Passage B pro-
             vides a narrative concerning how Sze discovered
             Asian art.</span>,
    <span>J. Passage A provides an overview of Sze's develop-
             ment as an artist, while Passage B provides an
             interpretation of Sze's artwork.</span>,
)

new Question(
    29,
    <PassageThree/>,
    `Compared to Passage B, Passage A provides more
    information regarding how Sze:`,
    <span>A. places objects within a gallery space.</span>,
    <span>B. feels about the artists Duchamp and Bernini.</span>,
    <span>C. reacts to critical interpretations of her artwork.</span>,
    <span>D. incorporates classical Chinese imagery into her
             sculptural installations.</span>,
)

new Question(
    30,
    <PassageThree/>,
    `The authors of Passage A and Passage B both praise
    Sze for her use of:`,
    <span>F. organic material in her collages.</span>,
    <span>G. detail in her sculptural installations.</span>,
    <span>H. proportion in her works on paper.</span>,
    <span>J. natural light in her sculpture gardens.</span>,
)

new Question(
    31,
    <PassageFour/>,
    `One main purpose of the passage is to:`,
    <span>A. analyze why New Zealand has long been an ideal 
             environment for penguins.</span>,
    <span>B. compare two leading theories about penguin habi-
             tats based on evidence from the fossil record.</span>,
    <span>C. present evidence that penguin populations have 
             steadily declined since the late Cretaceous.</span>,
    <span>D. describe a particular fossil discovery that led to a 
             better understanding of how penguins evolved.</span>,
)

new Question(
    32,
    <PassageFour/>,
    `Which of the following statements best summarizes the
    authors' claim about the relationship between the 
    humeral arterial plexus and cold environments?`,
    <span>F. The early emergence of the humeral arterial 
             plexus allowed penguins to later inhabit cold 
             environments.</span>,
    <span>G. The humeral arterial plexus appears to have little
             to do with penguins' ability to survive in cold
             environments.</span>,
    <span>H. The humeral arterial plexus allows penguins to
             survive in cold environments by increasing pen-
             guins' heart rates.</span>,
    <span>J. Once penguins adapted to the sea ice shelves that
             formed when the planet cooled, they no longer had
             a need for the humeral arterial plexus.</span>,
)

new Question(
    33,
    <PassageFour/>,
    `It can reasonably be inferred from the passage that the
    phrase "what was bad for those creatures" (line 24)
    refers to:`,
    <span>A. a change in food sources for early penguins.</span>,
    <span>B. the end-Cretaceous die-off of the dinosaurs and 
             other animals.</span>,
    <span>C. how Zealandia's isolation from the South Pole 
             affected Zealandia's terrestrial mammals.</span>,
    <span>D. seabirds' exposure to new climate zones.</span>,
)

new Question(
    34,
    <PassageFour/>,
    `According to the passage, about 55 million years ago,
    how did the average temperatures of Zealandia com-
    pare to those of Antarctica?`,
    <span>F. Zealandia was generally cooler than Antarctica.</span>,
    <span>G. Zealandia was generally warmer than Antarctica.</span>,
    <span>H. Temperatures in Zealandia were about the same as 
             those in Antarctica.</span>,
    <span>J. Temperatures in Zealandia were higher than 
             Antarctica in the summer and lower in the winter.</span>,
)

new Question(
    35,
    <PassageFour/>,
    `In the passage, the authors conclude that the humeral
    arterial plexus mechanism emerged in penguin in con-
    junction with a need to:`,
    <span>A. survive in new climates closer to the equator.</span>,
    <span>B. adapt to a temperate forested environment.</span>,
    <span>C. forage in cool upwelling regions of the sea.</span>,
    <span>D. swim long distances on warm ocean surfaces.</span>,
)

new Question(
    36,
    <PassageFour/>,
    `According to the passage, which of the following
    occurred as Zealandia drifted into the Pacific?`,
    <span>F. A broad continental shelf formed around Gond-
             wana, making Zealandia more isolated.</span>,
    <span>G. Gondwana warmed, becoming a seabird paradise.</span>,
    <span>H. Zealandia slowly became completely submerged.</span>,
    <span>J. Zealandia's climate cooled and the landmass sank
             lower in the seas.</span>,
)

new Question(
    37,
    <PassageFour/>,
    `The passage indicates that penguins living in the
    Cretaceous faced predation and competition for food
    from:`,
    <span>A. marine reptiles.</span>,
    <span>B. large fish.</span>,
    <span>C. other seabird species.</span>,
    <span>D. squid.</span>,
)

new Question(
    38,
    <PassageFour/>,
    `Based on the passage, which penguin fossil bones
    yielded the most significant information for the
    authors' study of penguins?`,
    <span>F. Feet</span>,
    <span>G. Chest</span>,
    <span>H. Flippers</span>,
    <span>J. Skull</span>,
)

new Question(
    39,
    <PassageFour/>,
    `As it is used in line 45, the word "bears" most nearly 
    means:`,
    <span>A. produces.</span>,
    <span>B. endures.</span>,
    <span>C. exhibits.</span>,
    <span>D. merits.</span>,
)

new Question(
    40,
    <PassageFour/>,
    `The passage most strongly suggests that the markings
    from the humeral plexus had likely gone unnoticed on
    fossils because:`,
    <span>F. modern penguin bones do not have such markings.</span>,
    <span>G. the markings are difficult to distinguish from 
             others on the humerus.</span>,
    <span>H. the markings easily deteriorate over time.</span>,
    <span>J. little scientific research has been devoted to early
             penguin fossils.</span>,
)

//A11, Reading
new Question(
    1,
    <PassageOne/>,
    `The passage can mostly reasonably be described as being divided into two sections that, taken together, explore:`,
    <span>A. Michael's first week on the <em>Oronsay</em> as told from two perspectives, one being that 
    of Michael's mother.</span>,
    <span>B. elements of Michael's journey as told from two perspectives, one being that of Michael as a young boy.</span>,
    <span>C. two outcomes of Michael's journey, both presented from the perspective of Michael as an adult.</span>,
    <span>D. Michael's relationship ith his family, presented from the perspective of two of Michael's relatives.</span>,
)

new Question(
    2,
    <PassageOne/>,
    `The description of the Oronsay as having seven levels, nine cooks, a veterinarian, a small jail, and chlorinated pools
    (line 52-56) most strongly supports which of the following statements about the Oronsay or its passengers?`,
    <span>F. "It felt as if a city had been added to the coast" (lines 3-4).</span>,
    <span>G. "The cabin was below the level of the waves, so there was no porthole" (lines 18-19).</span>,
    <span>H. "I do not know, even now, why he chose this solitude" (lines 26-27).</span>,
    <span>J. "But now it had been arranged I would be travelling to England by ship" (lines 47-48).</span>,
)
new Question(
    3,
    <PassageOne/>,
    `As it is used in lines 65-66, the phrase "introduce me to the situation of the journey" most nearly means:`,
    <span>A. list for the narrator the people he will likely meet on his trip.</span>,
    <span>B. explain to the narrator what his mother knows about his trip.</span>,
    <span>C. draw for the narrator a map of the exact route of his trip.</span>,
    <span>D. prepare the narrator in general for the circumstances of his trip.</span>,
)

new Question(
    4,
    <PassageOne/>,
    `Based on the passage, Michael's relatives arrange for and approach Michael's journey to England in a manner
    that can best be described as:`,
    <span>F. fearful and tense.</span>,
    <span>G. excited and frantic.</span>,
    <span>H. meticulous and generous.</span>,
    <span>J. understated and matter-of-fact.</span>,
)
new Question(
    5,
    <PassageOne/>,
    `The passage makes clear that once Michael boards the Oronsay, he feels that the city he is leaving has become:`,
    <span>A. morally corrupt.</span>,
    <span>B. physically shut off from him.</span>,
    <span>C. aesthetically beautiful.</span>,
    <span>D. figuratively lifted and carried with him.</span>,
)

new Question(
    6,
    <PassageOne/>,
    `The main point of the second paragraph (lines 22-31) is for the narrator to analyze the circumstances of:`,
    <span>F. Michael's relatives leaving the harbor as soon as Michael had boarded the Oronsay.</span>,
    <span>G. Michael enjoying listening to families singing but refusing to join in with them.</span>,
    <span>H. Michael not returning to the deck to wave goodbye to his relatives.</span>,
    <span>J. Michael's relatives weeping as the Oronsay departed.</span>,
)
new Question(
    7,
    <PassageOne/>,
    `The interaction between Michael and Flavia Prins that is described in the passage most strongly suggests that although
    Prins has promised to keep an eye on Michael during his journey, she is:`,
    <span>A. fairly indifferent to him and not particularly focused on his well-being.</span>,
    <span>B. likely going to retract her promise as a result of Michael's rude behavior during tea.</span>,
    <span>C. planning to make sure someone else provides him with constant attention and care.</span>,
    <span>D. intending to ignore him if not make certain that his journey is difficult.</span>,
)

new Question(
    8,
    <PassageOne/>,
    `In the passage, Michael is metaphorically referred to as:`,
    <span>F. a smuggler.</span>,
    <span>G. rings and bangles.</span>,
    <span>H. green grass.</span>,
    <span>J. a little cricket.</span>,
)
new Question(
    9,
    <PassageOne/>,
    `The passage indicates that Michael's journey to England will require:`,
    <span>A. relying on the expertise of a team of captains.</span>,
    <span>B. disembarking the Oronsay midjourney.</span>,
    <span>C. avoiding traveling on the Red Sea.</span>,
    <span>D. spending twenty-one days at sea.</span>,
)

new Question(
    10,
    <PassageOne/>,
    `It can most reasonably be inferred from the passage that narrator counts the sandwiches his uncles eat
    (lines 73-75) mainly because the narrator:`,
    <span>F. wants to know how many sandwiches he will be given to eat once he boards the ship.</span>,
    <span>G. hopes that his uncles like the sandwiches.</span>,
    <span>H. feels bored as the adults converse.</span>,
    <span>J. is nervous around his loud uncles.</span>,
)

new Question(
    11,
    <PassageTwo/>,
    `The author of Passage A mentions "a featherlight biscuit" and "a perfectly barbecued beef brisket" (lines 9-10) primarily to:`,
    <span>A. contrast their deliciousness with the inferior taste of a dark and thick gumbo.</span>,
    <span>B. offer additional examples of New Orleans cuisine that was, in the author's view, being corrupted.</span>,
    <span>C. illustrate the types of authentic New Orleans food that tourists used to gravitate toward.</span>,
    <span>D. provide examples of what the author views as real culinary successes, in contrast to dark gumbo.</span>,
)

new Question(
    12,
    <PassageTwo/>,
    `It can reasonably be inferred that the author of Passage A thinks that in comparison to authentic Cajun cuisine, 
    Prudhomme's "Louisiana cooking":`,
    <span>F. demands less creativity.</span>,
    <span>G. requires more discipline.</span>,
    <span>H. is much easier to master.</span>,
    <span>J. reflects broader influences.</span>,
)

new Question(
    13,
    <PassageTwo/>,
    `The author of Passage A most directly indicates that he originally attributed the ruin of the gumbo universe to which of 
    the following?`,
    <span>A. Tourists monopolizing New Orleans's entire French Quarter</span>,
    <span>B. The Cajun craze that took hold of the United State in the 1980s</span>,
    <span>C. The sudden prevalence of chicken and andouille gumbo in the 1990s</span>,
    <span>D. The pervasive influence of Prudhomme on New Orleans restaurants</span>,
)

new Question(
    14,
    <PassageTwo/>,
    `The author of Passage B most strongly indicates that Syrnikov believes Russians tend not to favor their national cuisine 
    mainly because:`,
    <span>F. they are embarrassed by their country's agrarian history and want to distance themselves from it.</span>,
    <span>G. the prejudices held by Russia's ruling class long ago led to a ban on traditional Russian cuisine.</span>,
    <span>H. they consider food from other countries to be more appealing and more refined.</span>,
    <span>J. only old women know how to make traditional Russian dishes like <em>shanishki</em>.</span>,
)

new Question(
    15,
    <PassageTwo/>,
    `The author of Passage B describes some of Syrnikov's common activities in lines 75-81 primarily to:`,
    <span>A. suggest that Syrnikov feels overwhelmed by the scope and number of his projects.</span>,
    <span>B. emphasize Syrnikov's dedication to helping Russians rediscover their true culinary roots.</span>,
    <span>C. imply that Syrnikov plans to open his own authentic Russian restaurant after completing his research.</span>,
    <span>D. downplay Syrnikov's lack of culinary training by focusing on his experience with traditional folk recipes.</span>,
)

new Question(
    16,
    <PassageTwo/>,
    `According to Passage B, Syrnikov makes which of the following claims regarding potatoes?`,
    <span>F. Potatoes were once a staple ingredient in traditional Russian cuisine.</span>,
    <span>G. Potatoes were grown throughout Russia until the twentieth century.</span>,
    <span>H. Potatoes were unpopular in eighteenth-century Russia.</span>,
    <span>J. Potatoes actually originated in Ukraine, not in Russia.</span>,
)

new Question(
    17,
    <PassageTwo/>,
    `As he is presented in Passage B, Syrnikov most clearly indicates that he believes failing to record traditional
    Russian folk recipe will:`,
    <span>A. force Russian cuisine to reinvent itself.</span>,
    <span>B. ruin his existing database of folk recipes.</span>,
    <span>C. result in a significant loss of Russian culture.</span>,
    <span>D. lead younger generations of Russians to learn folk recipes from their grandmothers.</span>,
)

new Question(
    18,
    <PassageTwo/>,
    `Which of the following statements best captures a main difference in the focus of the two passages?`,
    <span>F. Passage A focuses on the author's interactions with Prudhomme, while Passage B focuses on Syrnikov's 
        frustration with the ignorance of the general Russian public.
    </span>,
    <span>G. Passage A focuses on how the tourist trade affected New Orleans cuisine, while Passage B focuses on how 
        communities are working together to preserve authentic Russian fare.
    </span>,
    <span>H. Passage A focuses on the author's prejudice against food from non-Cajun cultures, while Passage B focuses 
        on Syrnikov's attempt to spread awareness about what Russian cuisine truly is.
    </span>,
    <span>J. Passage A focuses on the author's struggle with public perception of authentic New Orleans food, while 
        Passage B focuses on Syrnikov's efforts to correct misconceptions about Russian cuisine.
    </span>,
)

new Question(
    19,
    <PassageTwo/>,
    `With regard to their own region's authentic cuisine, both New Orleans transplants in Passage A and modern Russians in
    Passage B are characterized as being:`,
    <span>A. perplexed.</span>,
    <span>B. disdainful.</span>,
    <span>C. misinformed.</span>,
    <span>D. knowledgeable.</span>,
)

new Question(
    20,
    <PassageTwo/>,
    `Both passages support the idea that learning how to cook traditional and authentic regional food is best 
    accomplished by:`,
    <span>F. gleaning knowledge from cooks native to the area.</span>,
    <span>G. studying under professional chefs in a restaurant.</span>,
    <span>H. traveling and learning about other cultures' foods.</span>,
    <span>J. receiving hands-on training in a culinary school.</span>,
)

new Question(
    21,
    <PassageThree/>,
    `The structure of the passage can best be described as an interview in which the interviewee:`,
    <span>A. defends herself against harsh commentary by the interviewer.</span>,
    <span>B. challenges the interviewer, urging him to ask her relevant questions.</span>,
    <span>C. turns questions asked to her back to the interviewer, inviting a casual dialogue.</span>,
    <span>D. responds to the interviewer's questions with involved, abstract answers.</span>,
)

new Question(
    22,
    <PassageThree/>,
    `In the passage, Morgan argues that, for the reader, landscape writing might feel particularly "interruptive or
    'estranging'" (line 12) when it is presented:`,
    <span>F. in an otherwise plot-driven novel.</span>,
    <span>G. by an unskilled or inexperienced writer.</span>,
    <span>H. at length and in an unconventional prose style.</span>,
    <span>J. in the opening pages of a novel.</span>,
)

new Question(
    23,
    <PassageThree/>,
    `Based on the passage, how would Morgan respond to a reader's complaint that landscape writing "draws attention to itself"
    (line 16)?`,
    <span>A. She would agree but claim that landscape writing also draws attention to land.</span>,
    <span>B. She would agree but claim that if the writer had been focused, landscape writing should be engaging.</span>,
    <span>C. She would disagree, arguing that landscape writing focuses solely on drawing attention to the land.</span>,
    <span>D. She would disagree, arguing that some readers are simply not willing to read landscape writing.</span>,
)

new Question(
    24,
    <PassageThree/>,
    `In the passage, Morgan most strongly suggests that a reader's attention to the land while reading a landscape 
    narrative might lead the reader to:`,
    <span>F. act to protect the land.</span>,
    <span>G. forget that the land is in peril.</span>,
    <span>H. misinterpret the writer's purpose.</span>,
    <span>J. research the writer's academic background.</span>,
)

new Question(
    25,
    <PassageThree/>,
    `As it is used in line 22, the word "marks most nearly refers to:`,
    <span>A. creases and smudges.</span>,
    <span>B. words and symbols.</span>,
    <span>C. notches and ticks.</span>,
    <span>D. lines and boundaries.</span>,
)

new Question(
    26,
    <PassageThree/>,
    `As it is used in line 24, the phrase "that kind of beauty" most specifically refers to the beauty of the:`,
    <span>F. human being.</span>,
    <span>G. intellect.</span>,
    <span>H. political act.</span>,
    <span>J. land.</span>,
)

new Question(
    27,
    <PassageThree/>,
    `The passages makes clear that, from a previous exchange with Morgan, Fabisiak knows that Morgan does not like to do which 
    of the following?`,
    <span>A. Interpret <em>All the Living</em> for her readers</span>,
    <span>B. Tell her readers that, like the characters in <em>All the Living</em>, she lives in Kentucky</span>,
    <span>C. Work ten hours a day every day</span>,
    <span>D. Discuss which regions of the United States she plans to write about</span>,
)

new Question(
    28,
    <PassageThree/>,
    `The passage most strongly suggest that Morgan focuses on depicting which types of work in her novel All the Living?`,
    <span>F. Corporate or agrarian</span>,
    <span>G. Agrarian or domestic</span>,
    <span>H. Domestic or creative</span>,
    <span>J. Creative or corporate</span>,
)

new Question(
    29,
    <PassageThree/>,
    `Morgan directly compares a writer being expected to produce a novel every year or two years to the act of having to:`,
    <span>A. work overtime.</span>,
    <span>B. assemble products in a factory.</span>,
    <span>C. punch a clock.</span>,
    <span>D. sell goods on commission.</span>,
)

new Question(
    30,
    <PassageThree/>,
    `In the passage, Morgan makes clear her perspective that an artist is serving people when that artist takes which of the 
    following approaches to his or her work?`,
    <span>F. Continually offering new work that the artist knows people will want to buy</span>,
    <span>G. Regularly studying others' work and learning from it</span>,
    <span>H. Creating and presenting work that the artist believes to be valuable</span>,
    <span>J. Modifying the focus of the work when people's interest in it wanes</span>,
)

new Question(
    31,
    <PassageFour/>,
    `The main purpose of the passage is to use the example of Millikan to show:`,
    <span>A. how theory becomes accepted.</span>,
    <span>B. that some well-accepted scientific ideas have a sullied past.</span>,
    <span>C. the challenges scientists faced in measuring <em>e</em>.</span>,
    <span>D. that some scientists get credit for work that is not their own.</span>,
)

new Question(
    32,
    <PassageFour/>,
    `Based on the passage, the debate between Millikan and Ehrenhaft is best described as:`,
    <span>F. tense; their professional reputations were at stake.</span>,
    <span>G. unprofessional; they sabotaged each other's experiments.</span>,
    <span>H. collegial; each wanted to push the other to create a stronger theory.</span>,
    <span>J. indirect; although their work intersected along some lines, they were primarily working in different fields.</span>,
)

new Question(
    33,
    <PassageFour/>,
    `The passage indicates that the debate regarding Millikan's integrity centers on:`,
    <span>A. others' ability to replicate the results of Ehrenhaft's experiments more readily than those of Millikan's experiments.</span>,
    <span>B. Millikan's decision to switch from using water droplets to oil droplets.</span>,
    <span>C. certain statements Millikan made about the apparatus he used in his experiments.</span>,
    <span>D. a discrepancy between data in Millikan's 1913 paper and information in his notebooks.</span>,
)

new Question(
    34,
    <PassageFour/>,
    `It can reasonably be inferred that the passage author considers Millikan's decision to offer full disclosure in his 1910 paper as:`,
    <span>F. an understandable mistake that most scientists rightfully avoid.</span>,
    <span>G. an admirable choice with an unfortunate consequence.</span>,
    <span>H. a strategic decision that paid off in the end.</span>,
    <span>J. a naive decision revealing desperation.</span>,
)

new Question(
    35,
    <PassageFour/>,
    `The passage indicates that in his experiment to measure 'e,' Millikan switched from water to oil droplets because:`,
    <span>A. other physicists had found that oil droplets were easier to work with.</span>,
    <span>B. with oil he found it easier to form droplets with little variation in size.</span>,
    <span>C. oil droplets allowed him to take accurate measurements more consistently.</span>,
    <span>D. oil droplets could be reused for other experiments.</span>,
)

new Question(
    36,
    <PassageFour/>,
    `In the passage, the primary purpose of the ninth paragraph (ilnes 62-76) is to:`,
    <span>F. present Goodstein's defense of Millikan's choices regarding the data reported in Millikan's 1913 paper.</span>,
    <span>G. argue against Goodstein's interpretation of Millikan's motives.</span>,
    <span>H. summarize the current prevailing view of Millikan's methods.</span>,
    <span>J. offer an overview of Millikan's explanation of how he organized and presented his data.</span>,
)

new Question(
    37,
    <PassageFour/>,
    `The passage indicates that Ehrenhaft's experiments led him to make which of the following assertions in refuting 
    the claims in Millikan's 1910 paper?`,
    <span>A. There is no electron.</span>,
    <span>B. Millikan's value for <em>e</em> is too low.</span>,
    <span>C. Millikan failed to take prevailing scientists theories into account.</span>,
    <span>D. The value of <em>e</em> varies with the substance one is measuring.</span>,
)

new Question(
    38,
    <PassageFour/>,
    `Based on the passage, the author's assertion that Millikan's experiments "were to cast a lasting shadow over his 
    scientific integrity" (lines 32-33) is best described as:`,
    <span>F. an opinion based on casual assumptions about scientists working in the early 1900s.</span>,
    <span>G. an opinion based on the passage author's efforts to imagine himself in Millikan's position.</span>,
    <span>H. a reasoned judgment based on consideration of the debate sparked by these experiments.</span>,
    <span>J. a fact that Millikan clearly explains in his notebooks.</span>,
)

new Question(
    39,
    <PassageFour/>,
    `The passage author references Lewontin and Goodstein in the sixth paragraph (lines 34-38) primarily in order to:`,
    <span>A. identify two leading arguments about Millikan's methodology.</span>,
    <span>B. explain how a scientist's background might influence his or her opinion of Millikan's findings.</span>,
    <span>C. emphasize that current experiments on the electron contradict Millikan's findings.</span>,
    <span>D. highlight the difficulty Millikan's contemporaries had in replicating Millikan's experiments.</span>,
)

new Question(
    40,
    <PassageFour/>,
    `As it is used in line 39, the phrase "hangs on" most nearly means:`,
    <span>F. continues.</span>,
    <span>G. depends on.</span>,
    <span>H. sticks with.</span>,
    <span>J. blames on.</span>,
)
