$(function(){
	// 动态点赞
	$(".good i").click(function(){
		var text_box = $("#add_num");
		var praise_txt = $("#praise_txt");
		var num=parseInt(praise_txt.text());
        praise_txt.addClass("hover");
        $(this).addClass("active");
        text_box.show().html("<em class='add_animation'>+1</em>");
        $(".add_animation").addClass("hover");
        num +=1;
		praise_txt.text(num);
	});
    $(".bad i").click(function(){
		var belittle_txt = $("#belittle_txt");
		var num2=parseInt(belittle_txt.text());
        belittle_txt.addClass("hover");
        $(this).addClass("active");
        $(".add_animation").addClass("hover");
        num2 +=1;
		belittle_txt.text(num2);
	});
	
	

})