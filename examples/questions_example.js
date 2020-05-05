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


/* 
    <span>A: </span>,
    <span>B: </span>,
    <span>C: </span>,
    <span>D: </span>
*/

const questionsArray = [
    new Question(
        1, 
        <PassageOne targetQuestion={1}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  lead to</span>,
        <span>C.  led too</span>,
        <span>D.  lead on</span>,
    ), 
    new Question(
        2,
        <PassageOne targetQuestion={2}/>,

        <div>
            <div>
                The writer is considering revising the underlined 
                portion to the following accurate phrase:
            </div>
            <div>
                    including hotels, government offices, and 
                    hospitals,
            </div>
            <div>
                If the writer were to make this revision, the essay
                 would primarily gain:,
            </div>
        </div>,
        <span>F.  details about the total number of buildings
            Williams helped create.</span>,
        <span>G.  information about the kinds of buildings that
            Williams helped create.</span>,
        <span>H.  a visual description of William's style of
            architecture.</span>,
        <span>J.  the idea that Williams preferred designing hotels
            over designing other kinds of structures.</span>,
    ),
    new Question(
        3,
        <PassageOne targetQuestion={3}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  have stood</span>,
        <span>C.  were built</span>,
        <span>D.  stood</span>,
    ),
    new Question(
        4,
        <PassageOne targetQuestion={4}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  Vegas; namely,</span>,
        <span>H.  Vegas-</span>,
        <span>J.  Vegas</span>,
    ),
    new Question(
        5,
        <PassageOne targetQuestion={5}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  out, and Williams was hired to design to design it in 1961.</span>,
        <span>C.  out from its neighbors: larger Las Vegas hotels.</span>,
        <span>D.  out and be different.</span>,
    ),
    new Question(
        6,
        <PassageOne targetQuestion={6}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  it had a lobby designed by Williams and</span>,
        <span>H.  Williams designed a lobby that</span>,
        <span>J.  the design for William's lobby</span>,
    ),
    new Question(
        7,
        <PassageOne targetQuestion={7}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  appear, from a distance, like</span>,
        <span>C.  appear, from a distance like,</span>,
        <span>D.  appear from, a distance like</span>,
    ),
    new Question(
        8,
        <PassageOne targetQuestion={8}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  sides of the building,</span>,
        <span>H.  of those sides,</span>,
        <span>J.  of them,</span>,
    ),
    new Question(
        9,
        <PassageOne targetQuestion={9}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  extended themselves out lengthily</span>,
        <span>C.  went and stuck out</span>,
        <span>D.  stuck super far out</span>,
    ),
    new Question(
        10,
        <PassageOne targetQuestion={10}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  lobby was a large space that</span>,
        <span>H.  lobby's interior</span>,
        <span>J.  lobby</span>,
    ),
    new Question(
        11,
        <PassageOne targetQuestion={11}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  place, and included,</span>,
        <span>C.  place and included</span>,
        <span>D.  place and, included</span>,
    ),
    new Question(
        12,
        <PassageOne targetQuestion={12}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  Although</span>,
        <span>H.  Later</span>,
        <span>J.  Yet</span>,
    ),
    new Question(
        13,
        <PassageOne targetQuestion={13}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  demolition and in 2006</span>,
        <span>C.  demolition, and in, 2006</span>,
        <span>D.  demolition and in, 2006</span>,
    ),
    new Question(
        14,
        <PassageOne targetQuestion={null}/>,
        `Given that all the choices are accurate, which one provides
        the most relevant information at this point in the essay?`,
        <span>F.  NO CHANGE</span>,
        <span>G.  (including the La Concha's original sign).</span>,
        <span>H.  (Las Vegas has over a dozen museums).</span>,
        <span>J.  (visitors must buy tickets in advance).</span>,
    ),
    new Question(
        15,
        <PassageOne targetQuestion={'letters_1'}/>,
        
        <div>
            <div>
                Question 15 asks about the preceding passage as a whole.
                The writer wants to add the following sentence to the essay:
            </div>
            <div>
                    Beneath each of the three arches was a glass
                    wall with doors opening into the motel.
            </div>
            <div>
                This sentence would most logically be placed at:
            </div>
        </div>,
        <span>A.  Point A in Paragraph 1.</span>,
        <span>B.  Point B in Paragraph 2.</span>,
        <span>C.  Point C in Paragraph 3.</span>,
        <span>D.  Point D in Paragraph 4.</span>,
    ),
    new Question(
        16,
        <PassageTwo targetQuestion={16}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  octopuses are</span>,
        <span>H.  a species of octopus is</span>,
        <span>J.  an octopus is</span>,
    ),
    new Question(
        17,
        <PassageTwo targetQuestion={17}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  they have even observed them opening</span>,
        <span>C.  even opening</span>,
        <span>D.  even open</span>,
    ),
    new Question(
        18,
        <PassageTwo targetQuestion={18}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  across its</span>,
        <span>H.  across it's</span>,
        <span>J.  cross it's</span>,
    ),
    new Question(
        19,
        <PassageTwo targetQuestion={19}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  basis of the octopus's actions was not</span>,
        <span>C.  octopus's actions were not based</span>,
        <span>D.  octopus did not base its actions</span>,
    ),
    new Question(
        20,
        <PassageTwo targetQuestion={20}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  through an animals'</span>,
        <span>H.  in an animal's</span>,
        <span>J.  in animals</span>,
    ),
    new Question(
        21,
        <PassageTwo targetQuestion={21}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  play could be significant for cognitive ability; it</span>,
        <span>C.  play could have an important role because it</span>,
        <span>D.  play</span>,
    ),
    new Question(
        22,
        <PassageTwo targetQuestion={22}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  behaviors and this is something that can help</span>,
        <span>H.  behaviors, this, it seems, helps</span>,
        <span>J.  behaviors, this process helps</span>,
    ),
    new Question(
        23,
        <PassageTwo targetQuestion={23}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  It isn't just a super engaging read because the</span>,
        <span>C.  This is for real. The</span>,
        <span>D.  This</span>,
    ),
    new Question(
        24,
        <PassageTwo targetQuestion={24}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  toys, and puzzles</span>,
        <span>H.  toys and, puzzles</span>,
        <span>J.  toys and puzzles,</span>,
    ),
    new Question(
        25,
        <PassageTwo targetQuestion={25}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  and</span>,
        <span>C.  so</span>,
        <span>D.  DELETE the underline portion.</span>,
    ),
    new Question(
        26,
        <PassageTwo targetQuestion={'deleted_text_1'}/>,
        ``,
        <span>F.  details emphasizing how adept octopuses are at mastering the puzzles created by the researchers.</span>,
        <span>G.  clarifications about how researchers gauge octopuses' interest in solving a given puzzle.</span>,
        <span>H.  clarifications about the length of time octopuses should be allowed to work on the puzzles.</span>,
        <span>J.  details emphasizing the intricacy of the puzzles created by the researchers.</span>,
    ),
    new Question(
        27,
        <PassageTwo targetQuestion={27}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  also</span>,
        <span>C.  and</span>,
        <span>D.  DELETE the underlined portion.</span>,
    ),
    new Question(
        28,
        <PassageTwo targetQuestion={28}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  focus on the cubes themselve (instead of the latches)</span>,
        <span>H.  opt to break the larger cubes</span>,
        <span>J.  ruin the larger cubes</span>,
    ),
    new Question(
        29,
        <PassageTwo targetQuestion={29}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  For example, researchers</span>,
        <span>C.  Conversely, researchers</span>,
        <span>D.  Researchers</span>,
    ),
    new Question(
        30,
        <PassageTwo targetQuestion={30}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  putting forth an implication that suggests</span>,
        <span>H.  making the implied suggestion that</span>,
        <span>J.  with the suggestion that implies</span>,
    ),
    new Question(
        31,
        <PassageThree targetQuestion={31}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  performances, artist Illana Yahav,</span>,
        <span>C.  performances, artist, Illana Yahav</span>,
        <span>D.  performances artist Illana Yahav,</span>,
    ),
    new Question(
        32,
        <PassageThree targetQuestion={32}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  manipulating</span>,
        <span>H.  leveraging</span>,
        <span>J.  contriving</span>,
    ),
    new Question(
        33,
        <PassageThree targetQuestion={33}/>,
        `Which choice most specifically indicates how Yahav creates her art?`,
        <span>A.  NO CHANGE</span>,
        <span>B.  When starting a performance,</span>,
        <span>C.  Using only her hands,</span>,
        <span>D.  As she works,</span>,
    ),
    new Question(
        34,
        <PassageThree targetQuestion={34}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  begins appearing.</span>,
        <span>H.  starts to appear.</span>,
        <span>J.  appears.</span>,
    ),
    new Question(
        35,
        <PassageThree targetQuestion={35}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  glass, to "draw" facial features and other</span>,
        <span>C.  glass to "draw," facial feature, and other</span>,
        <span>D.  glass to "draw" facial features and other</span>,
    ),
    new Question(
        36,
        <PassageThree targetQuestion={36}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  images-such as a grove of trees or a snowfall,</span>,
        <span>H.  images, such as a grove of trees, or a snowfall</span>,
        <span>J.  images, such as a grover of trees or a snowfall</span>,
    ),
    new Question(
        37,
        <PassageThree targetQuestion={37}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  fluidly, they do not pause,</span>,
        <span>C.  fluidly; they do not pause</span>,
        <span>D.  fluidly not pausing</span>,
    ),
    new Question(
        38,
        <PassageThree targetQuestion={38}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  illustrates much</span>,
        <span>H.  illustrate much</span>,
        <span>J.  illustrate many</span>,
    ),
    new Question(
        39,
        <PassageThree targetQuestion={39}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  to form the woman's eyes, nose, and other facial features.</span>,
        <span>C.  during the four-minute performance.</span>,
        <span>D.  DELETE the underlined portion and end the sentence with a period.</span>,
    ),
    new Question(
        40,
        <PassageThree targetQuestion={40}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  hand then outlines</span>,
        <span>H.  hand to outline</span>,
        <span>J.  hand outlining</span>,
    ),
    new Question(
        41,
        <PassageThree targetQuestion={41}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  face, in addition to the first,</span>,
        <span>C.  face outlined in the sand</span>,
        <span>D.  face of a woman</span>,
    ),
    new Question(
        42,
        <PassageThree targetQuestion={42}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  Consequently,</span>,
        <span>H.  Nevertheless,</span>,
        <span>J.  Finally,</span>,
    ),
    new Question(
        43,
        <PassageThree targetQuestion={4}/>,
        `In order to most clearly indicate that Yahav move both hands simultaneously when adding flowers to the
        woman's hair, the best placement for the underlined portion would be:`,
        <span>A.  where it is now.</span>,
        <span>B.  after the word <em>hands</em>.</span>,
        <span>C.  after word <em>flowers</em>.</span>,
        <span>D.  after the word <em>hair</em> (and before the period).</span>,
    ),
    new Question(
        44,
        <PassageThree targetQuestion={44}/>,
        `Which of the following statements, if added here, would provide the most logical transition from the preceding sentence
        to the last sentence of the paragraph?`,
        <span>F.  Though Yahav uses sand to create images on the glass, she likens her art to the act of dancing.</span>,
        <span>G.  As Yahav tells a story on the glass, though, the images she creates overlap and eventually "erase" each other.</span>,
        <span>H.  Unlike many filmmakers, though, Yahav keeps her audiences mesmerized without using complicated digital effects.</span>,
        <span>J.  "You've Got a Friend" begins with Yahav framing the scene by spreading sand on the bottom half of 
            the glass to create a horizon line.</span>,
    ),
    new Question(
        45,
        <PassageThree targetQuestion={'letters_2'}/>,
        
        <div>
            <div>
                Question 45 asks about the preceding passage as a whole.
                The writing is considering adding the following sentence to the essay:
            </div>
                <div>
                    She might toss a fistful of sand across the glass to create a stormy night sky or a dark background.
                </div>
            <div>
                If the writer were to add the sentence, it would most logically be placed at:
            </div>
        </div>,
        <span>A.  Point A in Paragraph 1</span>,
        <span>B.  Point B in Paragraph 2</span>,
        <span>C.  Point C in Paragraph 3</span>,
        <span>D.  Point D in Paragraph 4</span>,
    ),
    new Question(
        46,
        <PassageFour targetQuestion={46}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  car, the time being</span>,
        <span>H.  car at the time</span>,
        <span>J.  car at</span>,
    ),
    new Question(
        47,
        <PassageFour targetQuestion={47}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  Consequently,</span>,
        <span>C.  Instead,</span>,
        <span>D.  Still,</span>,
    ),
    new Question(
        48,
        <PassageFour targetQuestion={48}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  one can view</span>,
        <span>H.  viewing</span>,
        <span>J.  DELETE the underlined portion.</span>,
    ),
    new Question(
        49,
        <PassageFour targetQuestion={49}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  alike, make the arduous,</span>,
        <span>C.  alike make, the arduous,</span>,
        <span>D.  alike, make the arduous</span>,
    ),
    new Question(
        50,
        <PassageFour targetQuestion={50}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  steep tangle of road looming</span>,
        <span>H.  road that untangled</span>,
        <span>J.  winding road</span>,
    ),
    new Question(
        51,
        <PassageFour targetQuestion={51}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  because it was,</span>,
        <span>C.  it was,</span>,
        <span>D.  DELETE the underlined portion.</span>,
    ),
    new Question(
        52,
        <PassageFour targetQuestion={52}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  gathered, a guard rail was</span>,
        <span>H.  gathered a guard rail was</span>,
        <span>J.  gathered a guard rail</span>,
    ),
    new Question(
        53,
        <PassageFour targetQuestion={53}/>,
        <div>
            <div>
                The writer is considering revising the underlined portion to the following:
            </div>
                <div>
                    a certain effect.
                </div>
            <div>
                Should the writer make this revision?
            </div>
        </div>,
        <span>A.  Yes, because it conveys the narrator's enthusiasm for the crater.</span>,
        <span>B.  Yes, because it is more concise.</span>,
        <span>C.  No, because it presentes the narrator's opinion instead of factual information about the crater.</span>,
        <span>D.  No, because it less clearly conveys the striking appearance of the crater.</span>,
    ),
    new Question(
        54,
        <PassageFour targetQuestion={54}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  crowd.</span>,
        <span>H.  crowd of about a hundred people.</span>,
        <span>J.  crowd who stood together by the crater's edge.</span>,
    ),
    new Question(
        55,
        <PassageFour targetQuestion={55}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  itself</span>,
        <span>C.  its'</span>,
        <span>D.  it's</span>,
    ),
    new Question(
        56,
        <PassageFour targetQuestion={56}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  In any event, someone</span>,
        <span>H.  To conclude, someone</span>,
        <span>J.  Someone</span>,
    ),
    new Question(
        57,
        <PassageFour targetQuestion={57}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  next to each other, observing</span>,
        <span>C.  shoulder to shoulder</span>,
        <span>D.  close and observed</span>,
    ),
    new Question(
        58,
        <PassageFour targetQuestion={58}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  alighted the sky golden and casted</span>,
        <span>H.  alighted the sky golden and cast</span>,
        <span>J.  lit the sky golden and cast</span>,
    ),
    new Question(
        59,
        <PassageFour targetQuestion={'letters_3'}/>,
        <div>
            <div>
                This question asks about the passage as a whole.
                The writer wants to add the following sentence to the essay:
            </div>
                <div>
                    Suddenly I didn't feel so tired and so cold.
                </div>
            <div>
                This sentence would most logically be placed at:
            </div>
        </div>,
        <span>A.  Point A in Paragraph 1</span>,
        <span>B.  Point B in Paragraph 2</span>,
        <span>C.  Point C in Paragraph 3</span>,
        <span>D.  Point D in Paragraph 4</span>,
    ),
    new Question(
        60,
        <PassageFour targetQuestion={null}/>,
        `This question asks about the passage as a whole. Suppose the writer's primary purpose had been to explain how Mount Haleakala became a popular tourist
        destination. Would this essay accomplish that purpose?`,
        <span>F.  Yes, because it provides information about how many people make the trip up the volcano to see the sunrise each year.</span>,
        <span>G.  Yes, because it demonstrates that local Hawaiians as well as tourists enjoy watching the sunrise from the top of the volcano.</span>,
        <span>H.  No, because it instead describes one person's experience watching the sunrise from the top of the volcano.</span>,
        <span>J.  No, because it instead focuses on tourism in Maui in general.</span>,
    ),
    new Question(
        61,
        <PassageFive targetQuestion={61}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  it was a shaky but ultimately safe journey as Garnerin</span>,
        <span>C.  the crowd admired Garnerin's bravery as he</span>,
        <span>D.  Garnerin</span>,
    ),
    new Question(
        62,
        <PassageFive targetQuestion={62}/>,
        `The writer wants to indicate that other people had attempted to parachute jump before Garnerin's public stunt in
        Paris. Which choice best accomplishes that goal?`,
        <span>F.  NO CHANGE</span>,
        <span>G.  successful</span>,
        <span>H.  ever</span>,
        <span>J.  DELETE the underlined portion.</span>,
    ),
    new Question(
        63,
        <PassageFive targetQuestion={63}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  parachute, however, Italian artist Leonardo da Vinci</span>,
        <span>C.  parachute however, Italian artist Leonardo da Vinci,</span>,
        <span>D.  parachute, however, Italian artist, Leonardo da Vinci</span>,
    ),
    new Question(
        64,
        <PassageFive targetQuestion={64}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  notebook-a sketch that resembled Garnerin's own parachute design.</span>,
        <span>H.  notebook that contained his sketches.</span>,
        <span>J.  notebook.</span>,
    ),
    new Question(
        65,
        <PassageFive targetQuestion={65}/>,
        `Given that all the choices are accurate, which one most effectively leads readers into the rest of the essay?`,
        <span>A.  NO CHANGE</span>,
        <span>B.  and sketched out ideas for related innovation, including several types of flying machines and a 
            device to measure wind speed.
        </span>,
        <span>C.  down his inventive ideas during the Italian Renaissance-a time when creativity was widely stimulated
            and encouraged.
        </span>,
        <span>D.  that his invention would enable a person to "jump from any great height whatsoever without injury."</span>,
    ),
    new Question(
        66,
        <PassageFive targetQuestion={66}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  which</span>,
        <span>H.  those</span>,
        <span>J.  they</span>,
    ),
    new Question(
        67,
        <PassageFive targetQuestion={67}/>,
        `If the writer to delete the preceding sentence, the essay would primarily lose a:`,
        <span>A.  suggestion that Leonardo's parachute was ultimately credited to a different inventor.</span>,
        <span>B.  description of the obstacles Leonardo faced when attempting to construct his parachute.</span>,
        <span>C.  clarification that Leonardo's parachute was theoretical.</span>,
        <span>D.  detail that reveals the impracticality of Leonardo's parachute.</span>,
    ),
    new Question(
        68,
        <PassageFive targetQuestion={68}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  pounds; which is</span>,
        <span>H.  pounds-</span>,
        <span>J.  pounds</span>,
    ),
    new Question(
        69,
        <PassageFive targetQuestion={69}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  there</span>,
        <span>C.  its'</span>,
        <span>D.  its</span>,
    ),
    new Question(
        70,
        <PassageFive targetQuestion={71}/>,
        `Which of the following alternatives to the underlined portion would NOT be acceptable?`,
        <span>F.  jump so he could deploy</span>,
        <span>G.  jump that deployed</span>,
        <span>H.  jump, deploying</span>,
        <span>J.  jump to deploy</span>,
    ),
    new Question(
        71,
        <PassageFive targetQuestion={71}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  Coincidentally,</span>,
        <span>C.  Likewise,</span>,
        <span>D.  Again,</span>,
    ),
    new Question(
        72,
        <PassageFive targetQuestion={'letters_4'}/>,
        `For the sake of logic and cohesion, Sentence 2 should be placed:`,
        <span>F.  Point A, where it is now.</span>,
        <span>G.  Point B, before Sentence 1</span>,
        <span>H.  Point C, after Sentence 3.</span>,
        <span>J.  Point D, after Sentence 5. </span>,
    ),
    new Question(
        73,
        <PassageFive targetQuestion={73}/>,
        <div>
            <div>
                At this point, the writer is considering adding the following true statement:
            </div>
                <div>
                    Vietti-Teppa performed this jump in Payerne, Switzerland, near Geneva.
                </div>
            <div>
                Should the writer make this addition here?
            </div>
        </div>,
        <span>A.  Yes, because it shows that Vietti-Teppa has completed parachute jumps all over the world.</span>,
        <span>B.  Yes, because it indicates why Vietti-Teppa chose to test Leonardo's parachute design in Switzerland.</span>,
        <span>C.  No, because it is unrelated to the technical information given about Vietti-Teppa's parachute jump.</span>,
        <span>D.  No, because it repeats information about Vietti-Teppa that is presented earlier in the paragraph.</span>,
    ),
    new Question(
        74,
        <PassageFive targetQuestion={74}/>,
        ``,
        <span>F.  NO CHANGE</span>,
        <span>G.  gracefully-and safely-</span>,
        <span>H.  gracefully, (and safely)</span>,
        <span>J.  gracefully and safely,</span>,
    ),
    new Question(
        75,
        <PassageFive targetQuestion={75}/>,
        ``,
        <span>A.  NO CHANGE</span>,
        <span>B.  Until the last,</span>,
        <span>C.  At long last,</span>,
        <span>D.  Long ago,</span>,
    ),
];