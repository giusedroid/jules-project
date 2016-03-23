/* THIS IS A FORBIDDEN ZONE!! THOU ARRR NOT SUPPOSED TO COME HERE!!!



								  uuuuuu
				             uu$$$$$$$$$$$uu
				          uu$$$$$$$$$$$$$$$$$uu
				         u$$$$$$$$$$$$$$$$$$$$$u
				        u$$$$$$$$$$$$$$$$$$$$$$$u
				       u$$$$$$$$$$$$$$$$$$$$$$$$$u
				       u$$$$$$$$$$$$$$$$$$$$$$$$$u
				       u$$$$$$"   "$$$"   "$$$$$$u
				       "$$$$"      u$u       $$$$"
				        $$$u       u$u       u$$$
				        $$$u      u$$$u      u$$$
				         "$$$$uu$$$   $$$uu$$$$"
				          "$$$$$$$"   "$$$$$$$"
				            u$$$$$$$u$$$$$$$u
				             u$"$"$"$"$"$"$u
				  uuu        $$u$ $ $ $ $u$$       uuu
				 u$$$$        $$$$$u$u$u$$$       u$$$$
				  $$$$$uu      "$$$$$$$$$"     uu$$$$$$
				u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
				$$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
				 """      ""$$$$$$$$$$$uu ""$"""
				           uuuu ""$$$$$$$$$$uuu
				  u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
				  $$$$$$$$$$""""           ""$$$$$$$$$$$"
				   "$$$$$"                      ""$$$$""
				     $$$"                         $$$$"






*/


























































































































































































var main;
(function(main){
	main.run = function(){
		var cross = document.getElementById("cross");
		var skull = document.getElementById("skull");
		try{
			cross.clickHandler = function(){
				if(this.offsetTop === 300 && this.offsetLeft === 300){
					alert("FOUND TREASURRRRR!!!");
				}else{
					alert("NOT HERE! YARRR!!!");
				}
			}
			cross.addEventListener("click", cross.clickHandler);

			skull.clickHandler = function(){
				alert("I told thou not to come here!!!");
				location.assign("https://www.youtube.com/watch?v=9dSB_7TPeeY&feature=iv&src_vid=wZZ7oFKsKzY&annotation_id=annotation_349670");
			}
			skull.addEventListener("click", skull.clickHandler);
		}catch( error ){
			console.info("CRRRROSS WAS NOT FOUND!!");
		}
		
	};
})(main || (main={}));

document.addEventListener("DOMContentLoaded", main.run);