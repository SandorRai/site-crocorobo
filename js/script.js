// Interactive Game Logic
const quizQuestions = [
    {
        question: "What does FIRST stand for in FIRST LEGO League?",
        options: ["Fun Introduction to Robotics and Science Technology", "For Inspiration and Recognition of Science and Technology", "Future Inspired Robotics Science Team", "Formal Innovation and Research Science Teaching"],
        correct: 1
    },
    {
        question: "What year was FIRST LEGO League founded?",
        options: ["1996", "2000", "1998", "2002"],
        correct: 0
    },
    {
        question: "What is the primary goal of FLL?",
        options: ["To build the fastest robot", "To inspire interest in science and technology", "To win prizes", "To compete professionally"],
        correct: 1
    },
    {
        question: "Which organization co-founded FIRST LEGO League with FIRST?",
        options: ["NASA", "The LEGO Group", "MIT", "Google"],
        correct: 1
    },
    {
        quest        quest        quest        quest        quest        quest       ions: ["5 members", "10 members        quest        qembers"]        quest        quest        quest        quest        quest = 0        quest        quest        quest        quest        quest        quest       ions: ["5 members", "10 members        quest        qembers"]        quest        quest        quest        quest        quest = 0        aine        quest   mov     dden');
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        endGame();
        return;
    }

    const question = quizQuestions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    document.getElementById('question-number').textContent = currentQu  tion + 1;
    
       st   tionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c                 ton = docu    .c            }
                  estion++;
    setTimeout(loadQuestion, 500);
}

function endGame() {
    gameActive =    gameActive =  g    gameActive document    gameActive =    gameActive =  g    gameActive dr.    gameActive =    gameActive =  g    gameActive document    gameActivve    gameActive =    gameActive =  g    gameActive document    gameActive =    gatrong>${score}/${quizQuestions.length}</strong></p>
            <p style            <p style            <p aying!<            <p style            <p style        click="resetGame()" style="width: 100%;">Play Again</button>
        </div>
    `;
}

function resetGame() {
    document.getElementById('game-container').classList.add('hidden');
    document.querySelector('.game-button').style.display = 'block';
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const             const         hr            const             con') {
            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  re            const  rct            const  re            const  re            const  re            const  re     ) {
            e.preventDefault();
            alert('Thank you for your message!             ba      you             alert    this.reset();
        });
    }

    // Animate elements on scroll
    co    co    co    co    co    co    co    co    co    co    co    co: '0px 0px -100px 0px'
    };

    const obser    const obser    const obser    const obser    const ob  entries.forEach(entry => {
            if (entry.isIntersecti            if (entry entry.            if (entry.isIntersecti            if (ard            if (entry.isIntersecti         erOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// AR Experience placeholder
function initAR() {
    alert('AR Experience will be implemented with Three.js and AR.js library. Point your device at the AR marker to see the robot in 3D!');
}

// Attach // Attach // Attach // Attach // Attach // Attach // Attach // Attach // Attach // Attach // arButton = document.querySelector('.ar-button');
    if (arButton) {
        arButton.addEventListener('click', initAR);
    }
});
