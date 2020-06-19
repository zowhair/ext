setTimeout(()=>{
    let abox = document.getElementsByClassName('_4g34 _6ber _78cq _7cdk _5i2i _52we')
	abox.u_0_u.click();


    setTimeout(()=>{
        let textBoxx = document.querySelector('#uniqid_1');
		let texxPlaceholder = document.querySelector('.mentions-placeholder');
			
		textBoxx.focused = true;

		textBoxx.click();

		textBoxx.value = "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png";
		textBoxx.focused = true;

		textBoxx.click();

        setTimeout(()=>{

            // var evt = element.ownerDocument.createEvent('MouseEvents');
			
			//textBoxx.autofocus  =true;
			// setTimeout(()=>{ console.log ('waiting for image to load ')}, 20000);
			// let btnPhoto = document.getElementsByClassName('_50o7 touchable _21db');
            let btnPhoto = document.querySelector('#uniqid_1');
            // btnPhoto[0].click();
            let eventType = "input";
			textBoxx.focused = true;
			textBoxx.select();
            
            setTimeout(()=>{
                let buttonSubmit = document.querySelector('div._2ph- button');
                buttonSubmit.click();
                
                setTimeout(()=>{
                    // chrome.tabs.create({url: 'https://m.facebook.com/'})
                    window.open('https://m.facebook.com/');
                }, 2000)
            },3000);



        }, 5000)


    }, 4000)

}, 3000)