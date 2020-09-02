console.log('Hello');

shownotes();

let adbtn = document.querySelector('#adnt')
adbtn.addEventListener('click',function (arg) {
	let addtxt = document.querySelector('#adtxt');
	let addtitle = document.querySelector('#title');
	let notes = localStorage.getItem('notes');
	if (notes == null)
	{
		notesobj = [];
	}
	else
	{
		notesobj = JSON.parse(notes)
	}
	let myobj = {
		Title : addtitle.value,
		Text : addtxt.value
	}
	notesobj.push(myobj);
	localStorage.setItem('notes',JSON.stringify(notesobj));
	addtxt.value = '';
	console.log(notesobj);
	shownotes();
})

function shownotes() {
	let notes = localStorage.getItem('notes');
	if (notes == null)
	{
		notesobj = [];
	}
	else
	{
		notesobj = JSON.parse(notes)
	}
	let html = '';
	notesobj.forEach(function(element,index)
	{
		html+= `<div class="card mx-1 my-2 noteCard" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${element.Title}</h5>
            <p class="card-text">${element.Text}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
        </div>`
    });
    let showelem = document.getElementById('notes');
    if (notesobj.length !=0)
    {
    	showelem.innerHTML = html;
    }
    else
    {
    	showelem.innerHTML = `<div id='sam'><p>You currently have no notes. Add Notes to
    	your notes here</p></div>.`
    }
}

function deletenote(index) {
	let notes = localStorage.getItem('notes');
	if (notes == null)
	{
		notesobj = [];
	}
	else
	{
		notesobj = JSON.parse(notes)
	}
	notesobj.splice(index,1);
	localStorage.setItem('notes',JSON.stringify(notesobj));
	shownotes();
}

let ser = document.getElementById('searchtext');
ser.addEventListener('input',function () {
	let searchvalue = ser.value;
	let car = document.getElementsByClassName('card');
	Array.from(car).forEach(function (element) {
		let para = element.getElementsByTagName('p')[0].innerText;
		if (para.includes(searchvalue))
		{
			element.style.display = 'block';
		}
		else
		{
			element.style.display = 'none';
		}
	});
});
