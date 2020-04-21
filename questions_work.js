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
    11,
    <PassageTwo/>,
    `Which of the following details from the passage best
    supports the author's claim about the impact of 
    paradigms on success?`,
    <span>A. Illustrations of the Henson Aerial Steam Carriage
        were first published in the early 1840s. </span>,
    <span>B.The Wrights' knowledge of bicycles made banking an
        airplane seem natural to them. </span>,
    <span>C.Alberto Santos-Dumont was the first to achieve
        heavier-than-air flight in Europe. </span>,
    <span>D.The first automobile was a European invention. </span>,
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
    is that Henson's vision led to Europe's experimenters to:`,
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
    ``,
    <span>F. </span>,
    <span>G. </span>,
    <span>H. </span>,
    <span>J. </span>,
)