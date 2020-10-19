window.onload = function()
{
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('gameStatusField2'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('timer'),
        
    )
    document.getElementById('start').addEventListener('click', function () {
        tikTakBoom.run()
               
      });
}
