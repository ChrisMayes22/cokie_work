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
    <span>D.third person narrator describing a young girl's
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
    <span>G. unaware of Henson's work with hot-air ballons. </span>,
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
    <span>G. conditions in the lake htat led to the large number
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
