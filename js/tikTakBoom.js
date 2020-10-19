tikTakBoom = {
    init(
        tasks,
        timerField,
        gameStatusField,
        gameStatusField2,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        boomTimer
    ) {
        this.boomTimer = parseInt(boomTimer.value);
        this.boomTimerBefore = 2;
        this.tasks = JSON.parse(tasks);
        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.gameStatusField2 = gameStatusField2;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.needRightAnswers = 5;
        this.countOfPlayers = 1;
        this.players = [[0, 0], [0, 0], [0, 0], [0, 0]];
        this.i = 0;
        this.flag = 1;
        this.intervalId = null;
        this.superQuestion = 0;

    },

    run() {
        this.countOfPlayers = document.getElementById("players").options.selectedIndex;
        this.turnOn();
        document.getElementById("start").value = "Конец игры";
        //document.getElementById('start').hidden = true;

    },

    turnOn() {

        // выбор случайного вопроса
        this.gameStatusField.innerText = ` Приготовиться игроку №${this.i + 1}`;
        // 3 секунды перед счетчиком           
        this.timer(3);

        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);
        document.getElementById('start').addEventListener('click', function () {
            this.finish('stop')
        });
        //    return false});    

    },

    turnOff(value) {
        // если ответ правильный
        if (this.currentTask[value].result) {
            this.gameStatusField2.innerText = 'Верно!';
            if ((this.superQuestion == 8) || (this.superQuestion == 1)) {
                console.log('зашли в turnOff ', this.superQuestion);
                this.finish('won');
            }
            this.players[this.i][0] += 1;
            // добавим или удалим 5 секунд при правильном/неправильном ответе сделаем 6, чтобы визульано было 5
            this.boomTimer += 6;
            //console.log('ответ верый, записываем +1 игроку', this.players[this.i][0], 'всего правильных ответов у него', this.players[this.i][0]);
            switch (this.i) {
                case 0: document.getElementById('player1').innerText = this.players[this.i][0]; break;
                case 1: document.getElementById('player2').innerText = this.players[this.i][0]; break;
                case 2: document.getElementById('player3').innerText = this.players[this.i][0]; break;
                case 3: document.getElementById('player4').innerText = this.players[this.i][0]; break;


            }
        }
        else {
            this.gameStatusField2.innerText = 'Неверно!';
            this.players[this.i][1] += 1;
            this.boomTimer -= 4;
            this.superQuestion = 0;
            //console.log('ответ неверый, записываем +1 игроку', this.players[this.i][1], 'всего неправильных ответов у него', this.players[this.i][1]);
            switch (this.i) {
                case 0: document.getElementById('player1Error').innerText = this.players[this.i][1]; break;
                case 1: document.getElementById('player2Error').innerText = this.players[this.i][1]; break;
                case 2: document.getElementById('player3Error').innerText = this.players[this.i][1]; break;
                case 3: document.getElementById('player4Error').innerText = this.players[this.i][1]; break;

            }
        }

        //замена игрока
        if (this.boomTimer > 0) {

            this.i = this.i + 1;
            if (this.i == (this.countOfPlayers + 1)) {
                this.i = 0;
            }

            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                this.turnOn();
            }

            this.textFieldAnswer1.removeEventListener('click', answer1);
            this.textFieldAnswer2.removeEventListener('click', answer2);
        }

    },

    printQuestion(task) {
        //console.log('this.players', this.players);

        if (task.question8) {
            task.question += 'вопрос 8 - победит дружба';
            this.superQuestion = 8;
            console.log(this.superQuestion);

        }

        if (task.questionMillion) {
            task.question += 'вопрос на миллион!';
            console.log(this.superQuestion);
            this.superQuestion = 1;

        }

        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));

        this.currentTask = task;
    },

    finish(result) {
        if (result === 'lose') {
            this.gameStatusField.innerText = `Вы проиграли!`;
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!`;
       

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.boomTimer = -10;
        clearInterval(this.intervalId);
        clearTimeout(this.intervalId);
        this.timerField.innerText = ``;
        }
     
        if (result === 'stop') {
            this.textFieldQuestion.innerText = ``;
            this.textFieldAnswer1.innerText = ``;
            this.textFieldAnswer2.innerText = ``;
            this.boomTimer = -10;
            clearInterval(this.intervalId);
            clearTimeout(this.intervalId);
            this.timerField.innerText = ``;
        }
    },

        timer(delay) {

            clearInterval(this.intervalId);
            //console.log('зашли в timer');
            // console.log('this.players', this.players);
            // console.log('this.i', this.i);
            if ((delay == 3) && (this.flag == 1)) {
                this.boomTimer += 3;
                this.flag = 0;
            }
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.boomTimer > 0) {
                this.intervalId = setTimeout(
                    () => {
                        this.timer(delay)
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        },



    }
