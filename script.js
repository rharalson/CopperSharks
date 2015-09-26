
function checkboxes(){
	return _.map($("input"),function(box){return $(box).is(":checked");});
}


$("button").bind("click",function(e){
	$(e.currentTarget.nextElementSibling).toggle();
});

d = Date(Date.now);
s = d.toString().slice(0,10);
$("h1.header").html(s);

$("textarea").bind("input", function(e){
	Cookies.set("notes",$("textarea").val());
});

$("input").bind("click", function(e){
	Cookies.set("boxes",checkboxes());
})

function bool(s){
	a = s.split(",");
	return _.map(a, function(val){
		if(val.indexOf("true") > -1){
			return true;
		} else {
			return false;
		}
	});
}

function fillBoxes(){
	b = bool(Cookies.get("boxes"));
	return _.each(b,function(val,i){
		$($("input")[i]).prop("checked",val);
	})
}

function fillNotes(){
	$("textarea").val(Cookies.get("notes"));
}

function fillAll(){
	fillBoxes();
	fillNotes();
}

fillAll();
