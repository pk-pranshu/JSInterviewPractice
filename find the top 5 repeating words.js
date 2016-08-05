Question -  find the top 5 repeating words from here.

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio sapien, volutpat a porta volutpat, sodales eget nisl. Fusce blandit blandit dignissim. Fusce dictum semper molestie. Sed suscipit mollis nibh. Curabitur bibendum rhoncus dui ac pellentesque. Morbi et felis euismod, luctus ligula vel, congue est. Maecenas tincidunt rhoncus nibh at luctus. Duis placerat finibus orci at scelerisque. Fusce dignissim justo enim, ac facilisis velit interdum tempor. Aliquam efficitur felis cursus arcu posuere viverra. Nullam feugiat luctus laoreet. Curabitur ut enim tellus. Maecenas porttitor ipsum ut justo placerat, ac iaculis ante posuere. Fusce in eleifend velit.Nulla vitae eros at arcu ornare lobortis. Nunc hendrerit ligula at sapien gravida scelerisque. Sed sed volutpat lacus, ac sodales eros. Phasellus ut orci quis libero sollicitudin ornare. Quisque massa justo, commodo eget est ut, blandit convallis sapien. Pellentesque dignissim magna id sem feugiat scelerisque. Pellentesque nec imperdiet nunc, ac pretium diam. Duis malesuada ligula non gravida hendrerit. Nam magna purus, iaculis at posuere eget, ultricies sed elit. Maecenas feugiat ut libero in pretium. Vestibulum aliquet iaculis velit, eu gravida urna ultricies a. Nullam eget tortor ullamcorper, dictum est vel, rhoncus leo. Morbi ac eros varius, iaculis felis aliquet, tincidunt tortor. Morbi id ultrices elit.In hendrerit nibh sed lacus lobortis suscipit. Morbi vel risus sagittis, faucibus ipsum id, placerat ipsum. Ut in ultrices nisl. Etiam feugiat ornare pretium. Quisque at condimentum risus. Pellentesque posuere faucibus turpis, id cursus turpis ornare in. Ut rhoncus sit amet quam eget mattis. Nunc quis velit ac nisl dignissim porttitor in ut lectus.Nullam malesuada, urna quis dapibus vulputate, magna ante dictum felis, quis euismod purus diam eu velit. Morbi eget commodo enim. Duis congue varius varius. Donec id sapien sit amet ipsum feugiat lacinia in vitae erat. Proin a mollis libero, nec molestie massa. Nullam ac enim sed felis mattis ultricies. Nulla ac pellentesque massa.Nullam vel lacus vitae dolor lobortis condimentum. Aenean nec commodo elit. Fusce a tellus vel ipsum pellentesque consequat eu quis nunc. Phasellus sagittis tortor in enim egestas dignissim. Morbi accumsan felis non ultricies fringilla. In vitae tortor dignissim, pharetra diam tincidunt, tincidunt libero. Sed pharetra purus id libero malesuada, vitae maximus risus viverra. Fusce sit amet felis in elit efficitur dictum.Fusce vitae lectus vestibulum, convallis tortor a, malesuada orci. Morbi ullamcorper at justo vel tincidunt. Integer interdum laoreet lorem, sit amet mattis turpis commodo sit amet. Morbi mauris libero, egestas ut ullamcorper id, tincidunt ac lorem. Proin laoreet massa id ex facilisis tristique. Mauris tempor sapien ligula, at lobortis urna tristique facilisis. Sed rutrum nec augue sed finibus. Morbi at ullamcorper tortor. Morbi sagittis nulla dui, eget aliquet ex vehicula blandit. Suspendisse sit amet nulla in purus rhoncus sodales sed bibendum sem. Sed imperdiet urna sit amet rutrum pretium. Donec cursus nec ante et consectetur. Ut ut sapien lacus.Aliquam cursus vitae nulla quis interdum. Maecenas viverra aliquam leo, a ornare enim laoreet vel. Ut eu ligula vitae est pharetra vestibulum in eget lorem. Vivamus sit amet ipsum ut felis euismod scelerisque.";


        var substr= lorem.split(" ");
        var map={};
        var arr2 = [];
        var count =0;
        for(var i=0;i<substr.length;i++){
        var key = substr[i];
            if(map.hasOwnProperty(key))
            	map[key]++;
           	else
            	map[key]=1;	   
        }

      

         for(var j in map){
         	if(map.hasOwnProperty(j)){
         		arr2.push([j,map[j]]);
         	}
         }		
         	   
        arr2.sort(function(a,b){
         	return b[1]-a[1];
         });
        
        for(var k=0;k<5;k++){
        	console.log(arr2[k][0]);
        }  