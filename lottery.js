var countdownSeconds = 15;
function LotteryViewModel()
{
	var self = this;
	self.isRunning = ko.observable(false);
    self.winnerFound = ko.observable(false);
	self.peopleList = ko.observableArray([ ]);
    self.people = ko.computed(function() {
		return self.peopleList;
    })
    self.theWinner = ko.observable(new Person("", ""));

    self.counter = ko.observable(countdownSeconds+1);
    self.lastIndex = 0;

    self.shuffleTheList = function()
    {
    	shuffle(self.peopleList());
    	self.peopleList.valueHasMutated();
    }

    self.addPeople = function()
    {
        if (self.isRunning())
        {
            return;
        }
        gooss.data({
            Participants: {
                url: url,
                index: 0
                }
            },
            function (err, data)
            {
                if (err)
                {
                    return alert(err);
                }
                for (var i = 0; i < data.Participants.length; i++)
                {
                    if (i < self.lastIndex)
                    {
                        continue;
                    }
                    var name = data.Participants[i].Name;
                    if (name)
                    {
                        var company = data.Participants[i].Company;
                        self.peopleList.push(new Person(name, company));
                    }
                    self.lastIndex++;
                }
            }
        );
    }

    self.findWinner = function() {
        self.isRunning(true);
    	setTimer(countdownSeconds, function() 
    		{
    			var winner = getRandomInt(0, self.peopleList().length-1)
                var winnerPerson = self.peopleList()[winner];
    			winnerPerson.hasWon(true);
    			winnerPerson.size(150);
    			winnerPerson.color('white');
                self.theWinner(winnerPerson);
                self.winnerFound(true);
    		}, self.updateCounterCallback);
    }

    self.updateCounterCallback = function(val)
    {
    	self.counter(val);
    }
}
function Person(name, company)
{
	var self = this;
	self.name = name;
    self.company = company;
	self.hasWon = ko.observable(false);
	var size = getRandomInt(25, 50);
	self.size = ko.observable(size);
	self.color = ko.observable(getRandomColor());
}

var lotteryViewModel = new LotteryViewModel();

function setTimer(iteration, findWinnerCallback, updateCounterCallback)
{
	updateCounterCallback(iteration);
	if (iteration == 0)
	{
		findWinnerCallback();
		return;
	}
	setTimeout(function() {
		lotteryViewModel.shuffleTheList();
		setTimer(--iteration, findWinnerCallback, updateCounterCallback);
	}, 1000)

}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

ko.applyBindings(lotteryViewModel);

function collectPeople()
{
    setTimeout(function() {
        lotteryViewModel.addPeople();
        collectPeople();
    }, 3000);
}
collectPeople();

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}